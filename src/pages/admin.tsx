import React from 'react';
import Layout from '@theme/Layout';
import AdminApproval from '../components/AdminApproval/AdminApproval';
import UserManagement from '../components/UserManagement';
import { useAuth } from '../contexts/AuthContext';

export default function AdminPage(): JSX.Element {
  const { isAdmin } = useAuth();

  return (
    <Layout
      title="管理员控制面板"
      description="用户注册审批和系统管理功能">
      {isAdmin ? (
        <>
          <header className="hero hero--primary">
            <div className="container">
              <h1 className="hero__title">管理员控制面板</h1>
              <p className="hero__subtitle">管理用户注册请求和系统设置</p>
            </div>
          </header>
          <main className="container margin-vert--lg">
            <AdminApproval />
            <UserManagement />
          </main>
        </>
      ) : (
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <div className="card">
                <div className="card__header">
                  <h2>访问受限</h2>
                </div>
                <div className="card__body">
                  <p>您没有权限访问此页面。该页面仅供系统管理员使用。</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </Layout>
  );
}