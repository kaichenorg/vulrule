import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

// 快捷导航栏目数据
const navigationItems = [
  {
    title: '代码库浏览',
    description: '浏览各种常用代码库的安全规则',
    icon: '📚',
    link: '/libraries',
  },
  {
    title: '规则分类',
    description: '按照规则类型进行浏览',
    icon: '📋',
    link: '/rules',
  },
  {
    title: '规则生成工具',
    description: '用于生成规则的工具',
    icon: '🛠️',
    link: '/tools',
  },
  {
    title: '关于我们',
    description: '了解我们的团队和项目',
    icon: 'ℹ️',
    link: '/about',
  }
];

export default function QuickNavigation(): JSX.Element {
  return (
    <section className={styles.quickNavContainer}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2">快速导航</Heading>
            <p className="margin-bottom--lg">快速访问常用资源</p>
          </div>
        </div>
        
        <div className="row">
          {navigationItems.map((item, idx) => (
            <div key={idx} className="col col--3 margin-bottom--lg">
              <Link to={item.link} className={styles.navCard} style={{ textDecoration: 'none' }}>
                <div className={styles.navIcon}>{item.icon}</div>
                <div className={styles.navTitle}>{item.title}</div>
                <p className={styles.navDescription}>{item.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}