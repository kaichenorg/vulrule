// 与登录相关的路径
export const LOGIN_PATH = "/login";
export const LOGOUT_PATH = "/logout";
export const AUTHENTICATED = "authenticated";
export const BASE = "/";

// 按钮文本
export const LOGOUT_BUTTON = "退出登录";
export const LOGIN_BUTTON = "登录";

// 保护的路径列表（需要身份验证才能访问的路径）
export const PROTECTED_PATHS: string[] = [
  // 如果您希望某些路径受保护，可以在这里添加
  // BASE 
  // 目前没有受保护的路径，允许所有用户访问所有页面
];