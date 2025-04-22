import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { useAuth } from '@site/src/contexts/AuthContext';
import { LOGIN_BUTTON, LOGOUT_BUTTON } from './constants';

// 用于在导航栏添加登录/登出按钮的自定义工具函数
export function useNavbarLoginItems(): React.ReactElement[] {
  const { currentUser, logout } = useAuth();
  
  if (currentUser) {
    return [
      React.createElement(
        'div',
        { 
          key: 'user-info',
          style: { 
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            marginTop: '0.5rem', 
            borderTop: '1px solid var(--ifm-color-emphasis-200)'
          }
        },
        [
          React.createElement(
            'div', 
            { key: 'user-email', style: { marginRight: '0.5rem' } }, 
            currentUser.email
          ),
          React.createElement(
            'button',
            {
              key: 'logout-button',
              onClick: () => logout(),
              style: {
                padding: '0.25rem 0.5rem',
                fontSize: '0.875rem',
                border: '1px solid var(--ifm-color-primary)',
                borderRadius: '4px',
                backgroundColor: 'transparent',
                color: 'var(--ifm-color-primary)',
                cursor: 'pointer'
              }
            },
            '退出'
          )
        ]
      )
    ];
  } 
  
  return [
    React.createElement(
      'button',
      {
        key: 'login-button',
        onClick: () => window.location.reload(),
        style: {
          padding: '0.25rem 0.75rem',
          fontSize: '0.875rem',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: 'var(--ifm-color-primary)',
          color: 'white',
          cursor: 'pointer',
          margin: '0.5rem 1rem',
          marginTop: '0.5rem',
          borderTop: '1px solid var(--ifm-color-emphasis-200)'
        }
      },
      '登录'
    )
  ];
}