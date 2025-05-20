// src/clientModules/firstVisitRedirect.js
if (typeof window !== 'undefined') {
    const baseUrl = '/vulrule/'; // 与 docusaurus.config.ts 中的 baseUrl 保持一致
    const mockFormPagePath = baseUrl + 'info_collection.html'; // 模拟表单页面的路径
    const hasVisitedKey = 'hasVisited_mockFormPage_v1'; // localStorage 的键名 (v1用于版本区分)
    const currentPagePath = window.location.pathname;

    // 检查当前是否已经在模拟表单页面，避免循环重定向
    if (currentPagePath.endsWith('info_collection.html')) {
        // 已经在目标页面，不执行任何操作
    } else if (!localStorage.getItem(hasVisitedKey)) {
        // 如果 localStorage 中没有标记，则视为首次访问
        localStorage.setItem(hasVisitedKey, 'true'); // 设置标记，表示已访问
        window.location.href = mockFormPagePath;    // 重定向到模拟表单页面
    }
}

// Docusaurus client modules 需要导出一个默认函数，即使它什么都不做
export default function() {
    // 此函数可以为空，或用于其他客户端初始化
} 