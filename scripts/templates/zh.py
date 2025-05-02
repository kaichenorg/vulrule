from jinja2 import Template

INTRO_TEMPLATE = Template(
    """---
id: intro
title: 简介
sidebar_position: 1
---


# 关于漏洞规则库

## 项目简介

漏洞规则库是一个致力于帮助开发者识别和避免常见安全漏洞的开源项目。我们收集、整理和分析各类编程语言和常用库中的安全漏洞模式，并提供相应的防范措施和最佳实践。

## 我们的使命

我们的使命是通过提供全面、系统的安全知识库，提高软件开发过程中的安全意识，减少安全漏洞的产生，为构建更安全的软件生态系统做出贡献。

## 项目特点

- **全面的漏洞覆盖**：涵盖多种编程语言和常用库
- **实用的规则指南**：每条规则都附带详细说明和示例代码
- **持续更新**：跟踪最新的安全研究和漏洞报告
- **开源共享**：欢迎社区贡献和完善

## 如何贡献

我们欢迎各种形式的贡献，包括但不限于：

1. 提交新的漏洞规则
2. 改进现有规则的描述和示例
3. 报告错误和提出改进建议
4. 完善文档和翻译

请访问我们的 [GitHub 仓库]({{github_url}}) 了解更多贡献方式。

## 联系我们

如有任何问题或建议，请通过以下方式联系我们：

- GitHub Issues: [提交问题]({{github_url}}/issues)
- 邮箱: {{email}}

感谢您对漏洞规则库的关注和支持！"""
)

API_TEMPLATE = Template(
    """---
---

# {{api_name}}

## API 概述
**{{api_name}}** 是 **{{lib_name}}** 中的一个API。该规属于**{{label}}** 类型。该规则是使用 [**{{tool_name}}**](../../tools/{{tool_name}}) 生成的。

## 规则描述

:::tip

{{description}}

:::

:::info

标签：**{{label}}**

参数下标：**{{param_index}}**

CWE类别：**{{cwe_type}}**

:::

## 规则代码
```python
{{code}}
```
"""
)

TOOL_TEMPLATE = Template(
"""---
---


# {{tool_name}}

{{tool_name}} 生成了 {{rule_count}} 条规则。以下是由 {{tool_name}} 生成的规则列表。点击规则名称查看详情。

{% for lib in rules %}
## {{lib}}
{% for name, path in rules[lib] %}
- [{{name}}]({{path}})
{% endfor %}
{% endfor %}
"""
)

TYPE_TEMPLATE = Template(
"""---
---
# {{type_name}}

{{rule_count}} 条 {{type_name}} 类型的规则。以下是 {{type_name}} 类型的规则列表。点击规则名称查看详情。

{% for lib in rules %}
## {{lib}}
{% for name, path in rules[lib] %}
- [{{name}}]({{path}})
{% endfor %}
{% endfor %}
"""
)


PROJECT_TEMPLATE = Template(
"""---
---


# {{lib_name}}

{{lib_name}} 中的规则有 {{rule_count}} 条。以下是 {{lib_name}} 中的规则列表。点击规则名称查看详情。

{% for name, path in rules %}
- [{{name}}]({{path}})
{% endfor %}
"""
)

TEMPLATES = {
    "intro": INTRO_TEMPLATE,
    "api": API_TEMPLATE,
    "tool": TOOL_TEMPLATE,
    "type": TYPE_TEMPLATE,
    "project": PROJECT_TEMPLATE
}

API_CATEGORY = {
    "position": 2,
    "label": "项目",
    "link": {
        "type": "generated-index",
        "title": "项目",
        "description": "按照项目查看规则."
    }
}

TOOLS_CATEGORY = {
    "position": 3,
    "label": "工具",
    "link": {
        "type": "generated-index",
        "title": "工具",
        "description": "按照工具查看规则."
    }
}

TYPE_CATEGORY = {
    "position": 4,
    "label": "类型",
    "link": {
        "type": "generated-index",
        "title": "类型",
        "description": "按照类型查看规则."
    }
}

CATEGORIES = {
    "api": API_CATEGORY,
    "tool": TOOLS_CATEGORY,
    "type": TYPE_CATEGORY
}