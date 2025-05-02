import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import QuickNavigation from "@site/src/components/Homepage/QuickNavigation";
import StatsDisplay from "../components/Homepage/StatsDisplay";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="siteConfig.title" description="Title of the site">Vulrule</Translate>
        </Heading>
        <p className="hero__subtitle"><Translate id="siteConfig.tagline" description="Tagline for the page">Tagline</Translate></p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.getStartedButton)}
            to="/intro">
            <Translate>Start to use</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 帮助开发者避免常见的安全漏洞`}
      description="漏洞规则库提供了全面的安全编码规则、API使用指南和漏洞检测规则，帮助开发者编写更安全的代码"
    >
      <HomepageHeader />
      <main>
        <StatsDisplay />
        <QuickNavigation />
      </main>
    </Layout>
  );
}
