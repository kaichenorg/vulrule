import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

// Declare the global search function type that's injected by the plugin
declare global {
  interface Window {
    __LUNR__: {
      __loaded: boolean;
      __loadingFailed: boolean;
      Search: (input: HTMLInputElement) => void;
    };
  }
}

export default function SearchSection(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isSearchAvailable, setIsSearchAvailable] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [loadingAttempts, setLoadingAttempts] = useState(0);
  const [loadingFailed, setLoadingFailed] = useState(false);
  
  useEffect(() => {
    // Check if LUNR search is available
    const checkSearchAvailability = () => {
      console.log('Checking search availability...', window.__LUNR__);
      
      // 更好地检测搜索功能是否可用
      if (window.__LUNR__ && typeof window.__LUNR__.Search === 'function') {
        console.log('Search is available!');
        setIsSearchAvailable(true);
        setLoadingFailed(false);
        return true;
      } else if (window.__LUNR__?.__loadingFailed) {
        console.error('Failed to load search index');
        setLoadingFailed(true);
        return false;
      }
      
      console.log('Search not available yet');
      return false;
    };

    // Try immediately
    const isAvailable = checkSearchAvailability();
    
    // If not available, set up a check after page fully loads
    if (!isAvailable) {
      const timer = setInterval(() => {
        if (checkSearchAvailability()) {
          clearInterval(timer);
        } else {
          // Increment attempt counter
          setLoadingAttempts(prev => {
            const newCount = prev + 1;
            
            // 尝试手动初始化搜索功能
            if (newCount === 5) {
              // 尝试从CDN重新加载搜索脚本
              const script = document.createElement('script');
              script.src = '/lunr-index.js';
              script.async = true;
              document.body.appendChild(script);
            }
            
            // 15秒后，如果搜索还是不可用，标记为失败
            if (newCount >= 15) {
              setLoadingFailed(true);
              clearInterval(timer);
              
              // 尝试一种替代方法获取搜索对象
              if (window.__LUNR__ && typeof window.__LUNR__.Search === 'function') {
                setIsSearchAvailable(true);
                setLoadingFailed(false);
              }
            }
            return newCount;
          });
        }
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    
    // Log search attempt for debugging
    console.log('Attempting search with term:', searchTerm);
    console.log('Search available:', isSearchAvailable);
    console.log('Search object:', window.__LUNR__);
    
    // 即使之前检测显示搜索不可用，也尝试进行搜索
    if (window.__LUNR__ && typeof window.__LUNR__.Search === 'function' && searchInputRef.current) {
      // 如果搜索功能实际上可用，更新状态
      if (!isSearchAvailable) {
        setIsSearchAvailable(true);
        setLoadingFailed(false);
      }
      
      // 触发搜索
      try {
        window.__LUNR__.Search(searchInputRef.current);
        console.log('Search function called successfully');
      } catch (err) {
        console.error('Error calling search:', err);
        alert('搜索时发生错误，请尝试重新构建索引或刷新页面');
      }
      setTimeout(() => setIsSearching(false), 500);
    } else {
      console.log('Search index is still loading, please try again in a moment');
      
      if (loadingFailed) {
        alert('搜索索引加载失败，请尝试刷新页面或重新构建站点');
      } else {
        alert('搜索索引正在加载，请稍后再试');
      }
      setIsSearching(false);
    }
  };
  
  return (
    <section className={styles.searchContainer}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2 text--center">
            <Heading as="h2" className={styles.searchTitle}>查找漏洞规则</Heading>
            <p className={styles.searchDescription}>输入关键词，快速找到相关规则、API函数或常见漏洞类型</p>
            
            <form onSubmit={handleSearch} className={styles.searchBox}>
              <div className={styles.searchInputWrapper}>
                <span className={styles.searchIcon}></span>
                <input 
                  type="text"
                  placeholder="搜索规则、API函数、CWE类型..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                  ref={searchInputRef}
                />
                <button 
                  type="submit" 
                  className={styles.searchButton}
                  disabled={isSearching || !searchTerm.trim()}
                >
                  {isSearching ? <span className={styles.loadingSpinner}></span> : '搜索'}
                </button>
              </div>
              
              {!isSearchAvailable && !loadingFailed && loadingAttempts < 5 && (
                <p className={styles.searchHint}>
                  <span className={styles.loadingSpinner}></span>
                  搜索功能正在加载中...
                </p>
              )}
              
              {!isSearchAvailable && !loadingFailed && loadingAttempts >= 5 && loadingAttempts < 15 && (
                <p className={styles.searchHint}>
                  <span className={styles.loadingSpinner}></span>
                  搜索功能加载时间较长，您可以尝试刷新页面或直接点击搜索按钮
                </p>
              )}
              
              {loadingFailed && (
                <p className={styles.searchError}>
                  搜索索引可能未正确生成，请尝试重新构建站点或刷新页面
                </p>
              )}
            </form>
            
            <div className={styles.searchTags}>
              <span className={styles.searchTagLabel}>热门搜索：</span>
              <button 
                type="button" 
                className={styles.searchTag}
                onClick={() => {
                  setSearchTerm('buffer overflow');
                  if (searchInputRef.current) {
                    searchInputRef.current.value = 'buffer overflow';
                    searchInputRef.current.focus();
                  }
                }}
              >
                buffer overflow
              </button>
              <button 
                type="button" 
                className={styles.searchTag}
                onClick={() => {
                  setSearchTerm('memory leak');
                  if (searchInputRef.current) {
                    searchInputRef.current.value = 'memory leak';
                    searchInputRef.current.focus();
                  }
                }}
              >
                memory leak
              </button>
              <button 
                type="button" 
                className={styles.searchTag}
                onClick={() => {
                  setSearchTerm('OpenSSL');
                  if (searchInputRef.current) {
                    searchInputRef.current.value = 'OpenSSL';
                    searchInputRef.current.focus();
                  }
                }}
              >
                OpenSSL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}