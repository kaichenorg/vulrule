import React from 'react';
import OriginalNavbarItems from '@theme-original/NavbarItems';
import NavbarLogin from '@theme/Navbar/NavbarLogin';
import type {WrapperProps} from '@docusaurus/types';
import styles from './styles.module.css';

export default function NavbarItems({
  items,
  ...props
}: WrapperProps<typeof OriginalNavbarItems> & { items: any[] }): JSX.Element {
  return (
    <>
      <OriginalNavbarItems items={items} {...props} />
      <div className={styles.loginWrapper}>
        <NavbarLogin />
      </div>
    </>
  );
}