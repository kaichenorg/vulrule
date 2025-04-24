const fs = require('fs');
const path = require('path');

// 路径定义
const jsonFilePath = path.join(__dirname, '..', 'data', 'data.json');
const docsDir = path.join(__dirname, '..', 'docs');
const librariesDir = path.join(docsDir, 'libraries');
const rulesDir = path.join(docsDir, 'rules');
const toolsDir = path.join(docsDir, 'tools');
const srcComponentsDir = path.join(__dirname, '..', 'src', 'components', 'RuleDisplay');

// 创建必要的目录
[docsDir, librariesDir, rulesDir, toolsDir, srcComponentsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 读取数据
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// 提取唯一的库和工具
const libraries = [...new Set(jsonData.map(item => item.lib_name))];
const tools = [...new Set(jsonData.filter(item => item.tool_name).map(item => item.tool_name))];

// 定义规则分类及其关键词
const ruleCategories = {
  'initialization': ['init', 'initialize', 'constructor', 'create', 'new'],
  'parameter_check': ['param', 'arg', 'parameter', 'argument', 'input', 'validate'],
  'return_value_check': ['return', 'result', 'value', 'output', 'check'],
  'api_pair': ['open/close', 'begin/end', 'start/stop', 'lock/unlock', 'acquire/release'],
};

// 标签到类别的映射
const labelToCategory = {
  'api pair': 'api_pair',
  'api-pair': 'api_pair',
  'api_pair': 'api_pair',
  'initialization': 'initialization',
  'init': 'initialization',
  'parameter check': 'parameter_check',
  'parameter-check': 'parameter_check', 
  'parameter_check': 'parameter_check',
  'return value check': 'return_value_check',
  'return-value-check': 'return_value_check',
  'return_value_check': 'return_value_check',
};

/**
 * 确定规则类别
 * @param {string} api - API名称
 * @param {Object} ruleObj - 规则对象
 * @returns {string} - 规则类别
 */
function determineRuleCategory(api, ruleObj) {
  // 1. 首先检查 Label 字段
  if (ruleObj?.Label?.length > 0) {
    for (const label of ruleObj.Label) {
      const labelLower = label.toLowerCase();
      
      // 直接匹配完整标签
      if (labelToCategory[labelLower]) {
        return labelToCategory[labelLower];
      }
      
      // 部分关键词匹配
      if (labelLower.includes('api pair') || labelLower.includes('api-pair')) {
        return 'api_pair';
      } else if (labelLower.includes('init')) {
        return 'initialization';
      } else if (labelLower.includes('param') || labelLower.includes('arg')) {
        return 'parameter_check';
      } else if (labelLower.includes('return') || labelLower.includes('value') && labelLower.includes('check')) {
        return 'return_value_check';
      }
    }
  }
  
  const apiLower = api.toLowerCase();
  
  // 2. 检查规则对象中的API配对模式
  if (ruleObj) {
    const ruleString = JSON.stringify(ruleObj).toLowerCase();
    
    // 检查直接提到"api pair"的情况
    if (ruleString.includes('"规则类型":"api pair"') || 
        ruleString.includes('"rule_type":"api pair"') || 
        ruleString.includes('"rule_type":"api_pair"')) {
      return 'api_pair';
    }
    
    // 检查API配对描述
    const apiPairPatterns = [
      /(must be properly released|paired with|should be followed by|should be paired with|must be released|must be freed|must be closed|must be unlocked)/i,
      /(must call).*(free|release|close|unlock|put)/i,
      /(alloc|new|create|open|init|get|acquire).*(free|destroy|close|deinit|release|put)/i,
      /(lock|begin|start).*(unlock|end|stop)/i
    ];
    
    for (const pattern of apiPairPatterns) {
      if (pattern.test(ruleString)) {
        return 'api_pair';
      }
    }
    
    // 3. 检查规则内容中的其他关键词
    if (ruleString.includes('init') || ruleString.includes('constructor')) {
      return 'initialization';
    } else if (ruleString.includes('param') || ruleString.includes('input')) {
      return 'parameter_check';
    } else if (ruleString.includes('return') || ruleString.includes('result')) {
      return 'return_value_check';
    }
  }
  
  // 4. 检查API名称中的关键词
  for (const [category, keywords] of Object.entries(ruleCategories)) {
    if (keywords.some(keyword => apiLower.includes(keyword))) {
      return category;
    }
  }

  // 无法确定类别，默认为"other"
  return 'other';
}

// 按类别整理规则
const rulesByCategory = {};
Object.keys(ruleCategories).forEach(category => {
  rulesByCategory[category] = [];
});

// 按工具整理规则
const rulesByTool = {};
tools.forEach(tool => {
  rulesByTool[tool] = [];
});

// 分类所有规则
jsonData.forEach(item => {
  const category = determineRuleCategory(item.api_name, item.rule);
  
  // 存储到类别
  if (!rulesByCategory[category]) {
    rulesByCategory[category] = [];
  }
  rulesByCategory[category].push(item);
  
  // 存储到工具
  if (item.tool_name && rulesByTool[item.tool_name]) {
    rulesByTool[item.tool_name].push(item);
  }
});

// 辅助函数
const sanitizeFilename = name => {
  // 处理以_开头的名称
  if (name.startsWith('_')) {
    name = 'p' + name;
  }
  // 替换非字母数字字符为下划线并转为小写
  return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
};

const sanitizePath = name => name.replace(/\s+/g, '_').toLowerCase();

const getLibraryDirName = library => sanitizePath(library);

const getCategoryDisplayName = category => 
  category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// 生成首页内容
const indexContent = `---
sidebar_position: 1
---

# 漏洞规则库文档

欢迎使用漏洞规则库文档。这里包含了各种库的API使用规则，可以帮助开发者避免常见的安全漏洞。

## 支持的库

${libraries.map(lib => `- [${lib}](/libraries/${getLibraryDirName(lib)})`).join('\n')}

## 规则分类

${Object.keys(ruleCategories).map(category => {
  const count = rulesByCategory[category].length;
  return `- [${getCategoryDisplayName(category)}](/rules/${category}) (${count})`;
}).join('\n')}

## 规则生成工具

${tools.map(tool => {
  const count = rulesByTool[tool]?.length || 0;
  return `- [${tool}](/tools/${sanitizeFilename(tool)}) (${count})`;
}).join('\n')}
`;

fs.writeFileSync(path.join(docsDir, 'index.md'), indexContent);

// 生成库页面和API规则页面
libraries.forEach(library => {
  // 创建库目录
  const libDir = path.join(librariesDir, getLibraryDirName(library));
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }
  
  // 获取当前库的所有API
  const libraryApis = jsonData.filter(item => item.lib_name === library);
  const uniqueApis = [...new Set(libraryApis.map(item => item.api_name))];
  
  // 生成库索引页
  const libraryIndexContent = `---
sidebar_position: 1
---

# ${library} 库

${library} 库的API使用规则和漏洞检测指南。

## API 列表

${uniqueApis.map(api => {
  const apiItems = libraryApis.filter(item => item.api_name === api);
  const category = determineRuleCategory(api, apiItems[0]?.rule);
  return `- [${api}](/libraries/${getLibraryDirName(library)}/${sanitizeFilename(api)}) - ${getCategoryDisplayName(category)}`;
}).join('\n')}

## 按规则类型查看

${Object.keys(ruleCategories).map(category => {
  const categoryApis = libraryApis.filter(item => determineRuleCategory(item.api_name, item.rule) === category);
  if (categoryApis.length === 0) return '';
  
  return `### ${getCategoryDisplayName(category)}\n\n${[...new Set(categoryApis.map(item => item.api_name))].map(api => 
    `- [${api}](/libraries/${getLibraryDirName(library)}/${sanitizeFilename(api)})`
  ).join('\n')}`;
}).filter(Boolean).join('\n\n')}
`;

  fs.writeFileSync(path.join(libDir, 'index.md'), libraryIndexContent);
  
  // 生成API页面
  uniqueApis.forEach(api => {
    const apiRules = libraryApis.filter(item => item.api_name === api);
    const category = determineRuleCategory(api, apiRules[0]?.rule);
    const displayCategory = getCategoryDisplayName(category);
    
    // 生成API页面内容
    const apiContent = `---
sidebar_position: 1
---

import RuleDisplay from '@site/src/components/RuleDisplay';

# ${api}

<div className="api-metadata">
<span className="api-library">${library}</span>
<span className="api-category">${displayCategory}</span>
</div>

## API 概述

${api} 是 ${library} 库中的一个API。该API属于 **${displayCategory}** 类型的规则。

## 使用规则

${apiRules.map((rule, index) => {
  const toolInfo = rule.tool_name ? 
    `由 [${rule.tool_name}](/tools/${sanitizeFilename(rule.tool_name)}) 生成` : '';
  
  return `${toolInfo}
<RuleDisplay
  ruleName="规则 ${index + 1}"
  ruleType="${displayCategory}"
  ruleData={${JSON.stringify(rule.rule || {})}}
/>`;
}).join('\n\n')}

## 相关API

${uniqueApis.filter(relatedApi => relatedApi !== api)
  .filter(relatedApi => determineRuleCategory(relatedApi, libraryApis.find(item => item.api_name === relatedApi)?.rule) === category)
  .slice(0, 5).map(relatedApi => 
    `- [${relatedApi}](/libraries/${getLibraryDirName(library)}/${sanitizeFilename(relatedApi)})`
  ).join('\n')}
`;

    fs.writeFileSync(path.join(libDir, `${sanitizeFilename(api)}.md`), apiContent);
  });
});

// 生成规则分类页面
Object.keys(ruleCategories).forEach(category => {
  const categoryDir = path.join(rulesDir, category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  const rulesInCategory = rulesByCategory[category] || [];
  const displayCategory = getCategoryDisplayName(category);
  
  // 分类描述映射
  const categoryDescriptions = {
    'initialization': '初始化相关规则包含对象和资源的创建、初始化和设置阶段应遵循的安全实践。',
    'parameter_check': '参数检查规则包含对函数输入参数进行验证和检查的安全实践。',
    'return_value_check': '返回值检查规则指导如何正确处理API调用的返回结果，避免安全隐患。',
    'api_pair': 'API配对规则确保成对的API调用（如打开/关闭，加锁/解锁）被正确使用。',
  };
  
  const categoryIndexContent = `---
sidebar_position: 1
---

# ${displayCategory}规则

${categoryDescriptions[category] || ''}

## 按库分类

${libraries.map(library => {
  const libRules = rulesInCategory.filter(rule => rule.lib_name === library);
  if (libRules.length === 0) return '';
  
  // 获取该库在当前分类中的唯一API
  const uniqueApis = [...new Set(libRules.map(rule => rule.api_name))];
  
  return `### ${library}\n\n${uniqueApis.map(api => 
    `- [${api}](/libraries/${getLibraryDirName(library)}/${sanitizeFilename(api)})`
  ).join('\n')}`;
}).filter(Boolean).join('\n\n')}
`;

  fs.writeFileSync(path.join(categoryDir, 'index.md'), categoryIndexContent);
});

// 生成工具相关页面
tools.forEach(tool => {
  const toolDir = path.join(toolsDir, sanitizeFilename(tool));
  if (!fs.existsSync(toolDir)) {
    fs.mkdirSync(toolDir, { recursive: true });
  }

  const rulesFromTool = rulesByTool[tool] || [];
  const librariesWithRules = [...new Set(rulesFromTool.map(rule => rule.lib_name))].sort();
  
  // 生成工具索引页
  const toolIndexContent = `---
sidebar_position: 1
---

# ${tool} 生成的规则

${tool} 工具为漏洞规则库贡献了 ${rulesFromTool.length} 条规则。

## 按库分类

${librariesWithRules.map(library => {
  const libRules = rulesFromTool.filter(rule => rule.lib_name === library);
  if (libRules.length === 0) return '';
  
  // 获取该库该工具生成的唯一API
  const uniqueApis = [...new Set(libRules.map(rule => rule.api_name))];
  
  return `### ${library}\n\n${uniqueApis.map(api => 
    `- [${api}](/libraries/${getLibraryDirName(library)}/${sanitizeFilename(api)})`
  ).join('\n')}`;
}).filter(Boolean).join('\n\n')}

## 按规则类型查看

${Object.keys(ruleCategories).map(category => {
  const categoryRules = rulesFromTool.filter(rule => determineRuleCategory(rule.api_name, rule.rule) === category);
  if (categoryRules.length === 0) return '';
  
  const displayCategory = getCategoryDisplayName(category);
  
  // 按库分类
  const librariesInCategory = [...new Set(categoryRules.map(rule => rule.lib_name))].sort();
  
  return `### ${displayCategory}\n\n${librariesInCategory.map(library => {
    const libCategoryRules = categoryRules.filter(rule => rule.lib_name === library);
    const uniqueApis = [...new Set(libCategoryRules.map(rule => rule.api_name))];
    
    return `#### ${library}\n\n${uniqueApis.map(api => 
      `- [${api}](/libraries/${getLibraryDirName(library)}/${sanitizeFilename(api)})`
    ).join('\n')}`;
  }).join('\n\n')}`;
}).filter(Boolean).join('\n\n')}
`;

  fs.writeFileSync(path.join(toolDir, 'index.md'), toolIndexContent);
});

// 生成统计数据
function generateStats() {
  // 规则分类统计数据
  const categoryLabels = {
    'api_pair': 'API配对',
    'initialization': '初始化',
    'parameter_check': '参数检查',
    'return_value_check': '返回值检查'
  };

  const categoryIcons = {
    'api_pair': { icon: '🔄', color: '#4285F4' },
    'initialization': { icon: '🚀', color: '#FBBC05' },
    'parameter_check': { icon: '🔍', color: '#8F44AD' },
    'return_value_check': { icon: '✅', color: '#F39C12' }
  };

  const ruleCategoryStats = Object.keys(ruleCategories).map(category => {
    const count = rulesByCategory[category]?.length || 0;
    const { icon, color } = categoryIcons[category] || { icon: '📝', color: '#7F8C8D' };
    
    return {
      name: categoryLabels[category] || getCategoryDisplayName(category),
      count: count.toString(),
      icon,
      color
    };
  });
  
  // 库统计数据
  const libraryRuleCounts = libraries.map(lib => {
    const count = jsonData.filter(item => item.lib_name === lib).length;
    return { name: lib, count };
  }).sort((a, b) => b.count - a.count);
  
  // 获取前5个库
  const topLibraries = libraryRuleCounts.slice(0, 5);
  
  // 计算其他库的规则数量
  const otherLibrariesCount = libraryRuleCounts.slice(5).reduce((sum, lib) => sum + lib.count, 0);
  
  // 合并前5个库和其他库
  const libraryStats = [
    ...topLibraries,
    { name: '其他库', count: otherLibrariesCount }
  ].map(lib => ({
    name: lib.name,
    count: lib.count.toString()
  }));
  
  // 工具统计数据
  const toolStats = tools.map(tool => {
    const count = rulesByTool[tool]?.length || 0;
    return { name: tool, count: count.toString() };
  }).sort((a, b) => parseInt(b.count) - parseInt(a.count));
  
  // 创建统计对象
  const stats = {
    ruleCategories: ruleCategoryStats,
    libraryCategories: libraryStats,
    toolCategories: toolStats
  };
  
  // 输出统计数据到JSON文件
  fs.writeFileSync(
    path.join(srcComponentsDir, 'statsData.json'), 
    JSON.stringify(stats, null, 2)
  );
  
  console.log('Statistics data generated successfully!');
}

// 生成统计数据
generateStats();

console.log('Documentation generation completed!');