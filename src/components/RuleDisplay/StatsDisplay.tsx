import React, { useEffect, useState, useMemo } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

// Define types for our stats data
interface RuleCategory {
  name: string;
  count: string;
  icon: string;
  color: string;
}

interface LibraryCategory {
  name: string;
  count: string;
}

interface ToolCategory {
  name: string;
  count: string;
}

interface StatsData {
  ruleCategories: RuleCategory[];
  libraryCategories: LibraryCategory[];
  toolCategories: ToolCategory[];
}

// Category name to URL path mapping
const categoryPathMap: Record<string, string> = {
  'API配对': 'api_pair',
  '初始化': 'initialization',
  '参数检查': 'parameter_check',
  '返回值检查': 'return_value_check'
};

// Fallback data in case the JSON file can't be loaded
const fallbackRuleCategories: RuleCategory[] = [
  { name: 'API配对', count: '0', icon: '🔄', color: '#4285F4' },
  { name: '初始化', count: '0', icon: '🚀', color: '#FBBC05' },
  { name: '参数检查', count: '0', icon: '🔍', color: '#8F44AD' },
  { name: '返回值检查', count: '0', icon: '✅', color: '#F39C12' },
];

const fallbackLibraryCategories: LibraryCategory[] = [
  { name: '加载中...', count: '0' },
];

const fallbackToolCategories: ToolCategory[] = [
  { name: '加载中...', count: '0' },
];

// Function to calculate bar width with a baseline minimum and square root scaling for better visualization
const calculateBarWidth = (value: number, maxValue: number, minWidthPercent = 10): number => {
  if (value === 0) return 0;
  if (value === maxValue) return 100;

  // Apply square root transformation to compress the range differences
  // This gives more visibility to smaller values while maintaining the order
  const sqrtValue = Math.sqrt(value);
  const sqrtMax = Math.sqrt(maxValue);

  // Calculate percentage with the square root values
  let percentage = (sqrtValue / sqrtMax) * 100;

  // Ensure a minimum width for visibility if value is not zero
  percentage = Math.max(percentage, minWidthPercent);

  // Cap at 100%
  return Math.min(percentage, 100);
};

export default function StatsDisplay(): React.ReactElement {
  // State to hold our statistics data
  const [statsData, setStatsData] = useState<StatsData>({
    ruleCategories: fallbackRuleCategories,
    libraryCategories: fallbackLibraryCategories,
    toolCategories: fallbackToolCategories
  });

  // Calculate maximum values for each category to use as scaling reference
  const maxValues = useMemo(() => {
    return {
      ruleCategories: Math.max(
        ...statsData.ruleCategories.map(cat => parseInt(cat.count) || 0),
        1 // Avoid division by zero
      ),
      libraryCategories: Math.max(
        ...statsData.libraryCategories.map(lib => parseInt(lib.count) || 0),
        1
      ),
      toolCategories: Math.max(
        ...statsData.toolCategories.map(tool => parseInt(tool.count) || 0),
        1
      )
    };
  }, [statsData]);

  // Load the stats data from JSON file
  useEffect(() => {
    // In development, we can load the JSON dynamically
    import('./statsData.json')
      .then(data => {
        setStatsData(data as StatsData);
      })
      .catch(error => {
        console.error('Error loading statistics data:', error);
        // Use fallback data (already set in initial state)
      });
  }, []);

  return (
    <section className={styles.statsContainer}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2">规则库统计</Heading>
            <p>全面的漏洞规则，帮助开发者避免常见安全问题</p>
          </div>
        </div>

        <div className="row margin-top--lg">
          <div className="col col--4">
            <div className={styles.statsCard}>
              <Heading as="h3" className="text--center">规则分类分布</Heading>
              <div className={styles.statsContent}>
                {statsData.ruleCategories.map((category, idx) => (
                  <div key={idx} className={styles.statItem}>
                    <div className={styles.statIcon} style={{ backgroundColor: category.color }}>
                      {category.icon}
                    </div>
                    <div className={styles.statLabel}>
                      <a href={`rules/${categoryPathMap[category.name] || ''}`}>{category.name}</a>
                    </div>

                    <div className={styles.statBarContainer}>
                      <div
                        className={styles.statBarFill}
                        style={{
                          width: `${calculateBarWidth(parseInt(category.count) || 0, maxValues.ruleCategories)}%`,
                          backgroundColor: category.color
                        }}
                      />
                      <span className={styles.statCount}>{category.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col col--4">
            <div className={styles.statsCard}>
              <Heading as="h3" className="text--center">API分布</Heading>
              <div className={styles.statsContent}>
                {statsData.libraryCategories.slice(0, 6).map((library, idx) => (
                  <div key={idx} className={styles.statItem}>
                    <div className={styles.statIcon} style={{ backgroundColor: `hsl(${idx * 50}, 70%, 50%)` }}>
                      {idx + 1}
                    </div>
                    <div className={styles.statLabel}>
                      <a href={library.name === "其他库" ? "libraries" : `libraries/${library.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`}>{library.name}</a>
                    </div>
                    <div className={styles.statBarContainer}>
                      <div
                        className={styles.statBarFill}
                        style={{
                          width: `${calculateBarWidth(parseInt(library.count) || 0, maxValues.libraryCategories)}%`,
                          backgroundColor: `hsl(${idx * 50}, 70%, 50%)`
                        }}
                      />
                      <span className={styles.statCount}>{library.count}</span>
                    </div>
                  </div>
                ))}
                {statsData.libraryCategories.length > 6 && (
                  <div className={styles.viewMore}>
                    <a href="libraries">查看更多 API ...</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col col--4">
            <div className={styles.statsCard}>
              <Heading as="h3" className="text--center">规则生成工具</Heading>
              <div className={styles.statsContent}>
                {statsData.toolCategories.slice(0, 6).map((tool, idx) => (
                  <div key={idx} className={styles.statItem}>
                    <div className={styles.statIcon} style={{ backgroundColor: `hsl(${idx * 40 + 120}, 70%, 50%)` }}>
                      {tool.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.statLabel}>
                      <a href={`tools/${tool.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`}>{tool.name}</a>
                    </div>
                    <div className={styles.statBarContainer}>
                      <div
                        className={styles.statBarFill}
                        style={{
                          width: `${calculateBarWidth(parseInt(tool.count) || 0, maxValues.toolCategories)}%`,
                          backgroundColor: `hsl(${idx * 40 + 120}, 70%, 50%)`
                        }}
                      />
                      <span className={styles.statCount}>{tool.count}</span>
                    </div>
                  </div>
                ))}
                {statsData.toolCategories.length > 6 && (
                  <div className={styles.viewMore}>
                    <a href="tools">查看所有工具 ...</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}