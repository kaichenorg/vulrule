import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  const { signInWithEmail, signUpWithEmail, resetPassword, currentUser, userStatus } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);

  // Check for approval status when user logs in
  useEffect(() => {
    if (currentUser && userStatus) {
      if (userStatus.approvalStatus === 'pending') {
        setMessage("您的账号正在等待审批，请耐心等待。");
      } else if (userStatus.approvalStatus === 'rejected') {
        setMessage("很抱歉，您的账号申请未获通过。请联系管理员了解更多信息。");
      }
    }
  }, [currentUser, userStatus]);

  async function handleEmailAuth(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    
    if (forgotPassword) {
      handleResetPassword();
      return;
    }

    if (!email || !password) {
      setError("请填写电子邮件和密码");
      return;
    }

    if (isSignUp && !organization) {
      setError("请填写所属单位");
      return;
    }

    try {
      setError("");
      setMessage("");
      setLoading(true);
      
      if (isSignUp) {
        await signUpWithEmail(email, password, organization);
        setMessage("注册成功! 验证邮件已发送到您的邮箱，请验证后登录。您的账号需要经过审批才能访问系统，请耐心等待。");
        setEmail("");
        setPassword("");
        setOrganization("");
      } else {
        await signInWithEmail(email, password);
        // Check if email is verified after login
        if (currentUser && !currentUser.emailVerified) {
          setMessage("请先验证您的邮箱地址。如需重新发送验证邮件，请点击重新发送验证邮件按钮。");
        }
      }
    } catch (err: any) {
      console.error("Error with email auth:", err);
      
      // 根据错误类型提供更具体的错误信息
      if (err.code === 'auth/email-already-in-use') {
        setError("该邮箱已被注册，请尝试登录");
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError("邮箱或密码错误");
      } else if (err.code === 'auth/weak-password') {
        setError("密码强度太弱，请设置更复杂的密码");
      } else if (err.code === 'auth/invalid-email') {
        setError("邮箱格式无效");
      } else if (err.code === 'auth/user-disabled') {
        setError("该账号已被禁用");
      } else {
        setError(isSignUp ? "注册失败，请重试" : "登录失败，请重试");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleResetPassword(): Promise<void> {
    if (!email) {
      setError("请输入您的邮箱地址");
      return;
    }

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(email);
      setMessage("重置密码邮件已发送，请查看您的邮箱");
    } catch (err: any) {
      console.error("Error resetting password:", err);
      if (err.code === 'auth/user-not-found') {
        setError("该邮箱未注册");
      } else if (err.code === 'auth/invalid-email') {
        setError("邮箱格式无效");
      } else {
        setError("重置密码失败，请重试");
      }
    } finally {
      setLoading(false);
    }
  }

  function toggleSignUpMode(): void {
    setIsSignUp(!isSignUp);
    setForgotPassword(false);
    setError("");
    setMessage("");
  }

  function toggleForgotPassword(): void {
    setForgotPassword(!forgotPassword);
    setError("");
    setMessage("");
  }

  return (
    <div className={styles.loginContainer}>
      {error && <div className={styles.error}>{error}</div>}
      {message && <div className={styles.message}>{message}</div>}
      
      <div className={styles.emailFormContainer}>
        <h3>
          {forgotPassword 
            ? "重置密码" 
            : isSignUp 
              ? "注册新账号" 
              : "邮箱登录"
          }
        </h3>
        <form onSubmit={handleEmailAuth}>
          <div className={styles.formGroup}>
            <label htmlFor="email">邮箱:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="请输入您的邮箱"
              required
            />
          </div>
          
          {!forgotPassword && (
            <div className={styles.formGroup}>
              <label htmlFor="password">密码:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                required
              />
            </div>
          )}
          
          {isSignUp && (
            <div className={styles.formGroup}>
              <label htmlFor="organization">所属单位:</label>
              <input
                type="text"
                id="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="请输入您的所属单位"
                required
              />
            </div>
          )}
          
          <div className={styles.buttonGroup}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading 
                ? "处理中..." 
                : forgotPassword 
                  ? "发送重置邮件" 
                  : isSignUp 
                    ? "提交注册申请" 
                    : "登录"
              }
            </button>
            
            {!forgotPassword && (
              <button
                type="button"
                className={styles.switchButton}
                onClick={toggleSignUpMode}
                disabled={loading}
              >
                {isSignUp ? "已有账号？登录" : "没有账号？注册"}
              </button>
            )}
          </div>
          
          {!isSignUp && (
            <div className={styles.forgotPasswordLink}>
              <button
                type="button"
                className={styles.textLink}
                onClick={toggleForgotPassword}
                disabled={loading}
              >
                {forgotPassword ? "返回登录" : "忘记密码？"}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;