import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [showEmailForm, setShowEmailForm] = useState<boolean>(false);

  async function handleGoogleSignIn(): Promise<void> {
    try {
      setError("");
      setLoading(true);
      await signInWithGoogle();
    } catch (err) {
      console.error("Error signing in with Google:", err);
      setError("Failed to sign in with Google. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleEmailAuth(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    
    if (!email || !password) {
      setError("请填写电子邮件和密码");
      return;
    }

    try {
      setError("");
      setLoading(true);
      
      if (isSignUp) {
        await signUpWithEmail(email, password);
      } else {
        await signInWithEmail(email, password);
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
      } else {
        setError(isSignUp ? "注册失败，请重试" : "登录失败，请重试");
      }
    } finally {
      setLoading(false);
    }
  }

  function toggleEmailForm(): void {
    setShowEmailForm(!showEmailForm);
    setError("");
  }

  function toggleSignUpMode(): void {
    setIsSignUp(!isSignUp);
    setError("");
  }

  return (
    <div className={styles.loginContainer}>
      {error && <div className={styles.error}>{error}</div>}
      
      {!showEmailForm ? (
        <>
          <button
            className={styles.googleButton}
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            {loading ? "登录中..." : "使用Google登录"}
          </button>
          <button
            className={styles.emailButton}
            onClick={toggleEmailForm}
            disabled={loading}
          >
            使用邮箱登录
          </button>
        </>
      ) : (
        <div className={styles.emailFormContainer}>
          <h3>{isSignUp ? "注册新账号" : "邮箱登录"}</h3>
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
            <div className={styles.buttonGroup}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? "处理中..." : isSignUp ? "注册" : "登录"}
              </button>
              <button
                type="button"
                className={styles.switchButton}
                onClick={toggleSignUpMode}
                disabled={loading}
              >
                {isSignUp ? "已有账号？登录" : "没有账号？注册"}
              </button>
            </div>
          </form>
          <button
            className={styles.backButton}
            onClick={toggleEmailForm}
            disabled={loading}
          >
            返回
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;