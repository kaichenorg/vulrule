import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./UserManagement.module.css";
import { UserRegistration } from "../../contexts/AuthContext";

interface ExtendedUserRegistration extends UserRegistration {
  isAdmin?: boolean;
}

const UserManagement: React.FC = () => {
  const { currentUser, isAdmin, getAllUsers, setUserAdminStatus } = useAuth();
  const [users, setUsers] = useState<ExtendedUserRegistration[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [processing, setProcessing] = useState<string | null>(null);

  useEffect(() => {
    if (!isAdmin || !currentUser) {
      return;
    }

    const fetchAllUsers = async () => {
      try {
        setLoading(true);
        setError("");
        
        const allUsers = await getAllUsers();
        setUsers(allUsers);
      } catch (err: any) {
        console.error("获取用户列表失败:", err);
        setError(err.message || "获取用户列表失败，请重试");
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, [currentUser, isAdmin, getAllUsers]);

  const handleToggleAdminStatus = async (userId: string, currentAdminStatus: boolean | undefined) => {
    if (!isAdmin || !currentUser) {
      setError("您没有权限执行此操作");
      return;
    }

    // 不允许撤销自己的管理员权限
    if (userId === currentUser.uid && currentAdminStatus) {
      setError("无法撤销自己的管理员权限");
      return;
    }

    try {
      setProcessing(userId);
      setError("");
      setMessage("");

      const newAdminStatus = !currentAdminStatus;
      await setUserAdminStatus(userId, newAdminStatus);

      // 更新本地状态
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === userId 
            ? { ...user, isAdmin: newAdminStatus } 
            : user
        )
      );

      setMessage(`已${newAdminStatus ? "授予" : "撤销"}用户管理员权限`);
    } catch (err: any) {
      console.error("处理管理员权限变更失败:", err);
      setError(err.message || "处理管理员权限变更失败，请重试");
    } finally {
      setProcessing(null);
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className={styles.statusApproved}>已批准</span>;
      case 'pending':
        return <span className={styles.statusPending}>待审批</span>;
      case 'rejected':
        return <span className={styles.statusRejected}>已拒绝</span>;
      default:
        return <span>{status}</span>;
    }
  };

  if (!isAdmin) {
    return <div className={styles.noAccess}>您没有访问此页面的权限。</div>;
  }

  return (
    <div className={styles.adminContainer}>
      <h2>用户管理</h2>
      
      {error && <div className={styles.error}>{error}</div>}
      {message && <div className={styles.message}>{message}</div>}
      
      <div className={styles.infoBox}>
        <p><strong>提示：</strong>此页面显示所有用户及其状态。您可以将其他已批准的用户设为管理员。</p>
      </div>
      
      {loading ? (
        <div className={styles.loading}>
          <div className="loading-spinner"></div>
          加载中...
        </div>
      ) : users.length === 0 ? (
        <div className={styles.noUsers}>当前系统中没有用户</div>
      ) : (
        <div className={styles.userList}>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>邮箱</th>
                  <th>所属单位</th>
                  <th>状态</th>
                  <th>注册时间</th>
                  <th>管理员</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td><strong>{user.email}</strong></td>
                    <td>{user.organization}</td>
                    <td>{getStatusLabel(user.approvalStatus)}</td>
                    <td>{user.registeredAt.toLocaleString()}</td>
                    <td>
                      {user.isAdmin ? 
                        <span className={styles.adminBadge}>是</span> : 
                        <span className={styles.nonAdminBadge}>否</span>
                      }
                    </td>
                    <td className={styles.actions}>
                      <button
                        onClick={() => handleToggleAdminStatus(user.id, user.isAdmin)}
                        className={user.isAdmin ? styles.revokeButton : styles.grantButton}
                        disabled={loading || processing === user.id || (user.id === currentUser?.uid && user.isAdmin)}
                        title={user.id === currentUser?.uid && user.isAdmin ? "无法撤销自己的管理员权限" : ""}
                      >
                        {processing === user.id ? 
                          "处理中..." : 
                          (user.isAdmin ? "撤销管理员" : "设为管理员")
                        }
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;