"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[664228],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 660872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_zh_docusaurus_plugin_content_docs_current_intro_md_b08_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-zh-docusaurus-plugin-content-docs-current-intro-md-b08.json
const site_i_18_n_zh_docusaurus_plugin_content_docs_current_intro_md_b08_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"intro","title":"简介","description":"项目简介","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/intro.md","sourceDirName":".","slug":"/intro","permalink":"/vulrule/zh/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"intro","title":"简介","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Projects","permalink":"/vulrule/zh/category/projects"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./i18n/zh/docusaurus-plugin-content-docs/current/intro.md


const frontMatter = {
	id: 'intro',
	title: '简介',
	sidebar_position: 1
};
const contentTitle = '关于漏洞规则库';

const assets = {

};



const toc = [{
  "value": "项目简介",
  "id": "项目简介",
  "level": 2
}, {
  "value": "我们的使命",
  "id": "我们的使命",
  "level": 2
}, {
  "value": "项目特点",
  "id": "项目特点",
  "level": 2
}, {
  "value": "如何贡献",
  "id": "如何贡献",
  "level": 2
}, {
  "value": "联系我们",
  "id": "联系我们",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "关于漏洞规则库",
        children: "关于漏洞规则库"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "项目简介",
      children: "项目简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "漏洞规则库是一个致力于帮助开发者识别和避免常见安全漏洞的开源项目。我们收集、整理和分析各类编程语言和常用库中的安全漏洞模式，并提供相应的防范措施和最佳实践。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "我们的使命",
      children: "我们的使命"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们的使命是通过提供全面、系统的安全知识库，提高软件开发过程中的安全意识，减少安全漏洞的产生，为构建更安全的软件生态系统做出贡献。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "项目特点",
      children: "项目特点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "全面的漏洞覆盖"
        }), "：涵盖多种编程语言和常用库"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "实用的规则指南"
        }), "：每条规则都附带详细说明和示例代码"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "持续更新"
        }), "：跟踪最新的安全研究和漏洞报告"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "开源共享"
        }), "：欢迎社区贡献和完善"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何贡献",
      children: "如何贡献"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们欢迎各种形式的贡献，包括但不限于："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提交新的漏洞规则"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "改进现有规则的描述和示例"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "报告错误和提出改进建议"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "完善文档和翻译"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请访问我们的 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/kaichenorg/vulrule",
        children: "GitHub 仓库"
      }), " 了解更多贡献方式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "联系我们",
      children: "联系我们"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如有任何问题或建议，请通过以下方式联系我们："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub Issues: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/kaichenorg/vulrule/issues",
          children: "提交问题"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["邮箱: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:kaichenorg@gmail.com",
          children: "kaichenorg@gmail.com"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "感谢您对漏洞规则库的关注和支持！"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);