import React, { JSX } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

export default function QuickNavigation(): JSX.Element {
  return (
    <section className={styles.quickNavContainer}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2"><Translate id="homepage.quick-navigation" description='Quick Navigation'>Quick Navigation</Translate></Heading>
            <p className="margin-bottom--lg"><Translate id="homepage.quick-navigation-description" description='Quick Navigation Description'>Access Rules In Different Ways.</Translate></p>
          </div>
        </div>
        
        <div className="row">
          {/* Navigation Card 1 */}
          <div className="col col--3 margin-bottom--lg">
            <Link to="/category/projects" className={styles.navCard} style={{ textDecoration: 'none' }}>
              <div className={styles.navIcon}>📚</div>
              <div className={styles.navTitle}>
                <Translate id="homepage.nav.code-browse.title" description="Code Library Browse Title">
                  代码库浏览
                </Translate>
              </div>
              <p className={styles.navDescription}>
                <Translate id="homepage.nav.code-browse.description" description="Code Library Browse Description">
                  浏览各种常用代码库的安全规则
                </Translate>
              </p>
            </Link>
          </div>

          {/* Navigation Card 2 */}
          <div className="col col--3 margin-bottom--lg">
            <Link to="/category/types" className={styles.navCard} style={{ textDecoration: 'none' }}>
              <div className={styles.navIcon}>📋</div>
              <div className={styles.navTitle}>
                <Translate id="homepage.nav.rule-category.title" description="Rule Category Title">
                  规则分类
                </Translate>
              </div>
              <p className={styles.navDescription}>
                <Translate id="homepage.nav.rule-category.description" description="Rule Category Description">
                  按照规则类型进行浏览
                </Translate>
              </p>
            </Link>
          </div>

          {/* Navigation Card 3 */}
          <div className="col col--3 margin-bottom--lg">
            <Link to="/category/tools" className={styles.navCard} style={{ textDecoration: 'none' }}>
              <div className={styles.navIcon}>🛠️</div>
              <div className={styles.navTitle}>
                <Translate id="homepage.nav.rule-tools.title" description="Rule Generation Tools Title">
                  规则生成工具
                </Translate>
              </div>
              <p className={styles.navDescription}>
                <Translate id="homepage.nav.rule-tools.description" description="Rule Generation Tools Description">
                  用于生成规则的工具
                </Translate>
              </p>
            </Link>
          </div>

          {/* Navigation Card 4 */}
          <div className="col col--3 margin-bottom--lg">
            <Link to="/intro" className={styles.navCard} style={{ textDecoration: 'none' }}>
              <div className={styles.navIcon}>ℹ️</div>
              <div className={styles.navTitle}>
                <Translate id="homepage.nav.about-us.title" description="About Us Title">
                  关于我们
                </Translate>
              </div>
              <p className={styles.navDescription}>
                <Translate id="homepage.nav.about-us.description" description="About Us Description">
                  了解我们的团队和项目
                </Translate>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}