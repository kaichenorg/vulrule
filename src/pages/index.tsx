import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import StatsDisplay from '@site/src/components/RuleDisplay/StatsDisplay';
import SearchSection from '@site/src/components/RuleDisplay/SearchSection';
import QuickNavigation from '@site/src/components/RuleDisplay/QuickNavigation';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.getStartedButton)}
            to="/rules">
            开始使用
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 帮助开发者避免常见的安全漏洞`}
      description="漏洞规则库提供了全面的安全编码规则、API使用指南和漏洞检测规则，帮助开发者编写更安全的代码">
      <HomepageHeader />
      <main>
        {/* <SearchSection /> */}
        <StatsDisplay />
        <QuickNavigation />
      </main>
    </Layout>
  );
}
