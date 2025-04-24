import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./AdminApproval.module.css";
import { UserRegistration } from "../../contexts/AuthContext";

const AdminApproval: React.FC = () => {
  const { currentUser, isAdmin, getPendingUsers, approveUser } = useAuth();
  const [pendingUsers, setPendingUsers] = useState<UserRegistration[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!isAdmin || !currentUser) {
      return;
    }

    const fetchPendingUsers = async () => {
      try {
        setLoading(true);
        setError("");
        
        // Use the client-side admin function to get pending users
        const users = await getPendingUsers();
        setPendingUsers(users);
      } catch (err: any) {
        console.error("获取待审批用户失败:", err);
        setError(err.message || "获取待审批用户失败，请重试");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingUsers();
  }, [currentUser, isAdmin, getPendingUsers]);

  const handleApproval = async (userId: string, approve: boolean) => {
    if (!isAdmin || !currentUser) {
      setError("您没有权限执行此操作");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setMessage("");

      // Use the client-side admin function to approve/reject users
      await approveUser(userId, approve);

      // Update local state
      setPendingUsers(pendingUsers.filter(user => user.id !== userId));
      setMessage(`已${approve ? "批准" : "拒绝"}用户注册请求`);
      
      // Show additional message about email limitations
      if (approve) {
        setMessage(prev => `${prev} 由于使用免费版Firebase，系统无法自动发送通知邮件。请通知用户其账号已获批准。`);
      }
    } catch (err: any) {
      console.error("处理审批失败:", err);
      setError(err.message || "处理审批失败，请重试");
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin) {
    return <div className={styles.noAccess}>您没有访问此页面的权限。</div>;
  }

  return (
    <div className={styles.adminContainer}>
      <div className={styles.userManagementContainer}>
        <h2>用户注册审批</h2>
        
        {error && <div className={styles.error}>{error}</div>}
        {message && <div className={styles.message}>{message}</div>}
        
        <div className={styles.infoBox}>
          <p><strong>提示：</strong>由于使用Firebase免费计划，系统无法发送自动邮件通知。批准/拒绝用户后，请通过其他方式通知用户。</p>
        </div>
        
        {loading ? (
          <div className={styles.loading}>加载中...</div>
        ) : pendingUsers.length === 0 ? (
          <div className={styles.noRequests}>当前没有待审批的注册请求</div>
        ) : (
          <div className={styles.userList}>
            <table>
              <thead>
                <tr>
                  <th>邮箱</th>
                  <th>所属单位</th>
                  <th>注册时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {pendingUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.organization}</td>
                    <td>{user.registeredAt.toLocaleString()}</td>
                    <td className={styles.actions}>
                      <button
                        onClick={() => handleApproval(user.id, true)}
                        className={styles.approveButton}
                        disabled={loading}
                      >
                        批准
                      </button>
                      <button
                        onClick={() => handleApproval(user.id, false)}
                        className={styles.rejectButton}
                        disabled={loading}
                      >
                        拒绝
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminApproval;