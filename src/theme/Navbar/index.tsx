import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import LoginStatus from '@site/src/components/LoginStatus';
import styles from './styles.module.css';
import type { WrapperProps } from '@docusaurus/types';

export default function Navbar(props: WrapperProps<typeof OriginalNavbar>): JSX.Element {
  return (
    <>
      <OriginalNavbar {...props} />
      <div className={styles.authContainer}>
        <LoginStatus />
      </div>
    </>
  );
}