const fs = require('fs');
const path = require('path');

// Read the JSON data file
const jsonFilePath = path.join(__dirname, '..', 'data', 'data.json');
const docsDir = path.join(__dirname, '..', 'docs');
const librariesDir = path.join(docsDir, 'libraries');
const rulesDir = path.join(docsDir, 'rules');
// Add path for statistics output
const srcComponentsDir = path.join(__dirname, '..', 'src', 'components', 'RuleDisplay');

// Create directories if they don't exist
const toolsDir = path.join(docsDir, 'tools');
[docsDir, librariesDir, rulesDir, toolsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Read and parse the JSON data
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// Extract unique libraries and rules categories
const libraries = [...new Set(jsonData.map(item => item.lib_name))];
// Extract unique tools that generated the rules
const tools = [...new Set(jsonData.filter(item => item.tool_name).map(item => item.tool_name))];

// Define common rule categories based on patterns and keywords
const ruleCategories = {
  'initialization': ['init', 'initialize', 'constructor', 'create', 'new'],
  // 'memory_management': ['free', 'alloc', 'malloc', 'realloc', 'delete', 'release', 'memory'],
  'parameter_check': ['param', 'arg', 'parameter', 'argument', 'input', 'validate'],
  'return_value_check': ['return', 'result', 'value', 'output', 'check'],
  'api_pair': ['open/close', 'begin/end', 'start/stop', 'lock/unlock', 'acquire/release'],
  // 'error_handling': ['error', 'exception', 'fail', 'handle', 'catch', 'try'],
  // 'other': [] // Default category
};

// Function to determine rule category based on Label field, API name and rule content
function determineRuleCategory(api, ruleObj) {
  // 首先检查 Label 字段，优先使用 Label 确定规则类型
  if (ruleObj && typeof ruleObj === 'object' && ruleObj.Label && Array.isArray(ruleObj.Label) && ruleObj.Label.length > 0) {
    // 标签映射到规则类型
    const labelToCategory = {
      'api pair': 'api_pair',
      'api-pair': 'api_pair',
      'api_pair': 'api_pair',
      'initialization': 'initialization',
      'init': 'initialization',
      // 'memory management': 'memory_management',
      // 'memory-management': 'memory_management',
      // 'memory_management': 'memory_management',
      'parameter check': 'parameter_check',
      'parameter-check': 'parameter_check', 
      'parameter_check': 'parameter_check',
      'return value check': 'return_value_check',
      'return-value-check': 'return_value_check',
      'return_value_check': 'return_value_check',
      // 'error handling': 'error_handling',
      // 'error-handling': 'error_handling',
      // 'error_handling': 'error_handling'
    };
    
    // 遍历标签查找匹配的类别
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
      // } else if (labelLower.includes('memory') || labelLower.includes('alloc') || labelLower.includes('free')) {
      //   return 'memory_management';
      } else if (labelLower.includes('param') || labelLower.includes('arg')) {
        return 'parameter_check';
      } else if (labelLower.includes('return') || labelLower.includes('value') && labelLower.includes('check')) {
        return 'return_value_check';
      // } else if (labelLower.includes('error') || labelLower.includes('except')) {
      //   return 'error_handling';
      }
    }
  }
  
  const apiLower = api.toLowerCase();
  
  // 如果无法从 Label 确定类型，回退到原来的检测方法
  // First check if the rule specifically mentions it's an "api pair" type
  if (ruleObj && typeof ruleObj === 'object') {
    const ruleString = JSON.stringify(ruleObj).toLowerCase();
    
    // Check for direct mentions of "api pair" in rule type
    if (ruleString.includes('"规则类型":"api pair"') || 
        ruleString.includes('"rule_type":"api pair"') || 
        ruleString.includes('"rule_type":"api_pair"')) {
      return 'api_pair';
    }
    
    // Check for API pairs mentions in the rule description
    if (ruleString.includes('must be properly released') || 
        ruleString.includes('paired with') ||
        ruleString.includes('should be followed by') ||
        ruleString.includes('should be paired with') ||
        ruleString.includes('must be released') ||
        ruleString.includes('must be freed') ||
        ruleString.includes('must be closed') ||
        ruleString.includes('must be unlocked') ||
        ruleString.includes('must call') && (ruleString.includes('free') || 
                                           ruleString.includes('release') || 
                                           ruleString.includes('close') || 
                                           ruleString.includes('unlock') ||
                                           ruleString.includes('put'))) {
      return 'api_pair';
    }

    // Check common API pair patterns in the rule content
    const pairPatterns = [
      /(alloc|new|create|open|init|get|acquire).*?(free|destroy|close|deinit|release|put)/i,
      /(lock|begin|start).*?(unlock|end|stop)/i,
      /(must be released|must be freed|must be closed|must be finalized)/i
    ];
    
    for (const pattern of pairPatterns) {
      if (pattern.test(ruleString)) {
        return 'api_pair';
      }
    }
  }
  
  // Check if the API name contains category keywords
  for (const [category, keywords] of Object.entries(ruleCategories)) {
    if (keywords.some(keyword => apiLower.includes(keyword))) {
      return category;
    }
  }

  // If rule has content, check for keywords in the rule properties
  if (ruleObj && typeof ruleObj === 'object') {
    const ruleString = JSON.stringify(ruleObj).toLowerCase();
    
    if (ruleString.includes('init') || ruleString.includes('constructor')) {
      return 'initialization';
    // } else if (ruleString.includes('free') || ruleString.includes('memory')) {
    //   return 'memory_management';
    } else if (ruleString.includes('param') || ruleString.includes('input')) {
      return 'parameter_check';
    } else if (ruleString.includes('return') || ruleString.includes('result')) {
      return 'return_value_check';
    // } else if (ruleString.includes('error') || ruleString.includes('exception')) {
    //   return 'error_handling';
    }
  }

  return 'other';
}

// Create mapping of rules by category
const rulesByCategory = {};
Object.keys(ruleCategories).forEach(category => {
  rulesByCategory[category] = [];
});

// Create mapping of rules by tool
const rulesByTool = {};
tools.forEach(tool => {
  rulesByTool[tool] = [];
});

jsonData.forEach(item => {
  const category = determineRuleCategory(item.api_name, item.rule);
  
  // Store rule in appropriate category
  if (!rulesByCategory[category]) {
    rulesByCategory[category] = [];
  }
  rulesByCategory[category].push(item);
  
  // Store rule by tool name
  if (item.tool_name && rulesByTool[item.tool_name]) {
    rulesByTool[item.tool_name].push(item);
  }
});

// Generate index.md for docs root
const indexContent = `---
sidebar_position: 1
---

# 漏洞规则库文档

欢迎使用漏洞规则库文档。这里包含了各种库的API使用规则，可以帮助开发者避免常见的安全漏洞。

## 支持的库

${libraries.map(lib => `- [${lib}](/libraries/${lib})`).join('\n')}

## 规则分类

${Object.keys(ruleCategories).map(category => {
  const count = rulesByCategory[category].length;
  const displayName = category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return `- [${displayName}](/rules/${category}) (${count})`;
}).join('\n')}

## 规则生成工具

${tools.map(tool => {
  const count = rulesByTool[tool] ? rulesByTool[tool].length : 0;
  return `- [${tool}](/tools/${sanitizeFilename(tool)}) (${count})`;
}).join('\n')}
`;

fs.writeFileSync(path.join(docsDir, 'index.md'), indexContent);

// Function to sanitize filenames
function sanitizeFilename(name) {
  // If name starts with _, prepend a p to avoid resolution issues
  if (name.startsWith('_')) {
    name = 'p' + name;
  }
  // Replace non-alphanumeric characters with underscores and convert to lowercase
  return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

// Function to sanitize paths in URLs to ensure proper linking
function sanitizePath(name) {
    return name.replace(/\s+/g, '_').toLowerCase();
}

// Function to ensure consistent directory naming for libraries
function getLibraryDirName(library) {
  // Normalize library names to ensure consistent casing
  const normalized = sanitizePath(library);
  return normalized;
}

// Create library pages and API rule pages
libraries.forEach(library => {
  // Create library directory with consistent casing
  const libDir = path.join(librariesDir, getLibraryDirName(library));
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }
  
  // Get all APIs for this library
  const libraryApis = jsonData.filter(item => item.lib_name === library);
  
  // Create unique API list (some APIs might have multiple entries)
  const uniqueApis = [...new Set(libraryApis.map(item => item.api_name))];
  
  // Generate library index page
  const libraryIndexContent = `---
sidebar_position: 1
---

# ${library} 库

${library} 库的API使用规则和漏洞检测指南。

## API 列表

${uniqueApis.map(api => {
    // Get the category for each API
    const apiItems = libraryApis.filter(item => item.api_name === api);
    const category = determineRuleCategory(api, apiItems[0]?.rule);
    const displayCategory = category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return `- [${api}](/libraries/${getLibraryDirName(library)}/${sanitizeFilename(api)}) - ${displayCategory}`;
  }).join('\n')}

## 按规则类型查看

${Object.keys(ruleCategories).map(category => {
    const categoryApis = libraryApis.filter(item => determineRuleCategory(item.api_name, item.rule) === category);
    if (categoryApis.length === 0) return '';
    
    const displayCategory = category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return `### ${displayCategory}\n\n${[...new Set(categoryApis.map(item => item.api_name))].map(api => 
      `- [${api}](/libraries/${getLibraryDirName(library)}/${sanitizeFilename(api)})`
    ).join('\n')}`;
  }).filter(Boolean).join('\n\n')}
`;

  fs.writeFileSync(path.join(libDir, 'index.md'), libraryIndexContent);
  
  // Generate API pages
  uniqueApis.forEach(api => {
    const apiRules = libraryApis.filter(item => item.api_name === api);
    const category = determineRuleCategory(api, apiRules[0]?.rule);
    const displayCategory = category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    // Generate API page content with React component
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
  // Include tool information if available
  const toolInfo = rule.tool_name ? `<div className="rule-tool-info">由 <a href="/tools/${sanitizeFilename(rule.tool_name)}">${rule.tool_name}</a> 生成</div>` : '';
  
  // Handle rule content safely using our custom component
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

// Generate rule category pages
Object.keys(ruleCategories).forEach(category => {
  const categoryDir = path.join(rulesDir, category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  const rulesInCategory = rulesByCategory[category] || [];
  const displayCategory = category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  // Generate category index page
  const categoryDescription = {
    'initialization': '初始化相关规则包含对象和资源的创建、初始化和设置阶段应遵循的安全实践。',
    // 'memory_management': '内存管理规则涵盖内存分配、释放以及防止内存泄漏和溢出的最佳实践。',
    'parameter_check': '参数检查规则包含对函数输入参数进行验证和检查的安全实践。',
    'return_value_check': '返回值检查规则指导如何正确处理API调用的返回结果，避免安全隐患。',
    'api_pair': 'API配对规则确保成对的API调用（如打开/关闭，加锁/解锁）被正确使用。',
    // 'error_handling': '错误处理规则涵盖如何检测和处理错误情况，防止安全漏洞。',
    // 'other': '其他类型的规则，不属于上述分类的安全实践。'
  };
  
  const categoryIndexContent = `---
sidebar_position: 1
---

# ${displayCategory}规则

${categoryDescription[category] || ''}

## 按库分类

${libraries.map(library => {
    const libRules = rulesInCategory.filter(rule => rule.lib_name === library);
    if (libRules.length === 0) return '';
    
    // Get unique APIs for this library and category
    const uniqueApis = [...new Set(libRules.map(rule => rule.api_name))];
    
    return `### ${library}\n\n${uniqueApis.map(api => 
      `- [${api}](/libraries/${getLibraryDirName(library)}/${sanitizeFilename(api)})`
    ).join('\n')}`;
  }).filter(Boolean).join('\n\n')}
`;

  fs.writeFileSync(path.join(categoryDir, 'index.md'), categoryIndexContent);
});

// Generate tool-based pages
tools.forEach(tool => {
  const toolDir = path.join(toolsDir, sanitizeFilename(tool));
  if (!fs.existsSync(toolDir)) {
    fs.mkdirSync(toolDir, { recursive: true });
  }

  const rulesFromTool = rulesByTool[tool] || [];
  
  // Group rules by library for this tool
  const librariesWithRules = [...new Set(rulesFromTool.map(rule => rule.lib_name))].sort();
  
  // Generate tool index page
  const toolIndexContent = `---
sidebar_position: 1
---

# ${tool} 生成的规则

${tool} 工具为漏洞规则库贡献了 ${rulesFromTool.length} 条规则。

## 按库分类

${librariesWithRules.map(library => {
    const libRules = rulesFromTool.filter(rule => rule.lib_name === library);
    if (libRules.length === 0) return '';
    
    // Get unique APIs for this library from this tool
    const uniqueApis = [...new Set(libRules.map(rule => rule.api_name))];
    
    return `### ${library}\n\n${uniqueApis.map(api => 
      `- [${api}](/libraries/${getLibraryDirName(library)}/${sanitizeFilename(api)})`
    ).join('\n')}`;
  }).filter(Boolean).join('\n\n')}

## 按规则类型查看

${Object.keys(ruleCategories).map(category => {
    const categoryRules = rulesFromTool.filter(rule => determineRuleCategory(rule.api_name, rule.rule) === category);
    if (categoryRules.length === 0) return '';
    
    const displayCategory = category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    // Group by library within category
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

// Generate statistics for StatsDisplay component
function generateStats() {
  // Create statistics for rule categories
  const ruleCategoryStats = Object.keys(ruleCategories).map(category => {
    const displayName = category === 'api_pair' ? 'API配对' : 
                       category === 'initialization' ? '初始化' :
                       category === 'parameter_check' ? '参数检查' :
                       category === 'return_value_check' ? '返回值检查' :
                       category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    const count = rulesByCategory[category] ? rulesByCategory[category].length : 0;
    
    // Assign icons and colors based on category
    let icon = '📝';
    let color = '#7F8C8D';
    
    if (category === 'api_pair') {
      icon = '🔄';
      color = '#4285F4';
    } else if (category === 'initialization') {
      icon = '🚀';
      color = '#FBBC05';
    } else if (category === 'parameter_check') {
      icon = '🔍';
      color = '#8F44AD';
    } else if (category === 'return_value_check') {
      icon = '✅';
      color = '#F39C12';
    }
    
    return { name: displayName, count: count.toString(), icon, color };
  });
  
  // Sort libraries by rule count (descending)
  const libraryRuleCounts = libraries.map(lib => {
    const count = jsonData.filter(item => item.lib_name === lib).length;
    return { name: lib, count };
  }).sort((a, b) => b.count - a.count);
  
  // Take top 5 libraries
  const topLibraries = libraryRuleCounts.slice(0, 5);
  
  // Calculate count for "other libraries"
  const otherLibrariesCount = libraryRuleCounts.slice(5).reduce((sum, lib) => sum + lib.count, 0);
  
  // Combine top libraries with "other libraries"
  const libraryStatsData = [
    ...topLibraries,
    { name: '其他库', count: otherLibrariesCount }
  ];
  
  // Convert to string format
  const libraryStats = libraryStatsData.map(lib => ({
    name: lib.name,
    count: lib.count.toString()
  }));
  
  // Create tool statistics
  const toolRuleCounts = tools.map(tool => {
    const count = rulesByTool[tool] ? rulesByTool[tool].length : 0;
    return { name: tool, count: count.toString() };
  }).sort((a, b) => parseInt(b.count) - parseInt(a.count));
  
  // Create statistics object
  const stats = {
    ruleCategories: ruleCategoryStats,
    libraryCategories: libraryStats,
    toolCategories: toolRuleCounts
  };
  
  // Output statistics to JSON file
  fs.writeFileSync(
    path.join(srcComponentsDir, 'statsData.json'), 
    JSON.stringify(stats, null, 2)
  );
  
  console.log('Statistics data generated successfully!');
}

// Call statistics generation function
generateStats();

console.log('Documentation generation completed!');