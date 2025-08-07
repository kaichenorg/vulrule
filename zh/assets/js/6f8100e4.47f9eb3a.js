"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[553873],{

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

/***/ 785415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_zh_docusaurus_plugin_content_docs_current_projects_ffmpeg_av_dict_free_md_6f8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-zh-docusaurus-plugin-content-docs-current-projects-ffmpeg-av-dict-free-md-6f8.json
const site_i_18_n_zh_docusaurus_plugin_content_docs_current_projects_ffmpeg_av_dict_free_md_6f8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/ffmpeg/av_dict_free","title":"av_dict_free","description":"API 概述","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/projects/ffmpeg/av_dict_free.md","sourceDirName":"projects/ffmpeg","slug":"/projects/ffmpeg/av_dict_free","permalink":"/vulrule/zh/projects/ffmpeg/av_dict_free","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"av_dct_init","permalink":"/vulrule/zh/projects/ffmpeg/av_dct_init"},"next":{"title":"av_dict_set","permalink":"/vulrule/zh/projects/ffmpeg/av_dict_set"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./i18n/zh/docusaurus-plugin-content-docs/current/projects/ffmpeg/av_dict_free.md


const frontMatter = {};
const contentTitle = 'av_dict_free';

const assets = {

};



const toc = [{
  "value": "API 概述",
  "id": "api-概述",
  "level": 2
}, {
  "value": "规则描述",
  "id": "规则描述",
  "level": 2
}, {
  "value": "规则代码",
  "id": "规则代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "av_dict_free",
        children: "av_dict_free"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-概述",
      children: "API 概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "av_dict_free"
      }), " 是 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FFmpeg"
      }), " 中的一个API。该规属于", (0,jsx_runtime.jsx)(_components.strong, {
        children: "api pair"
      }), " 类型。该规则是使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../tools/ChatDetector",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ChatDetector"
        })
      }), " 生成的。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则描述",
      children: "规则描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Once a resource is passed as the 1-th argument to av_dict_free, it must not be freed again."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["标签：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "api pair"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["参数下标：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["CWE类别：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CWE-415"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则代码",
      children: "规则代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "/**\n * @name doublefree\n * @description description\n * @kind problem\n * @problem.severity error\n * @precision high\n * @id cpp/doublefree\n * @tags security\n */\n\n import cpp\n import semmle.code.cpp.dataflow.TaintTracking\n import semmle.code.cpp.dataflow.DataFlow\n import semmle.code.cpp.security.Security\n import semmle.code.cpp.controlflow.Guards\n import semmle.code.cpp.valuenumbering.GlobalValueNumbering\n \nExpr getMallocExpr(FunctionCall fc)\n{\n    exists(Expr e | \n        result = e\n        and\n        (\n            (fc.getTarget().hasName(\"av_opt_set_dict2\") and e = fc.getArgument(1))\n        // TODO-addMallocHere\n        )\n    )\n}\n\nExpr getFreeExpr(FunctionCall fc)\n{\n\n        result = fc.getArgument(0)\n        and\n        (\n            fc.getTarget().hasName(\"av_dict_free\")\n        // or\n        //  fc.getTarget().hasName(\"target\")\n        // TODO-addFreeHere\n        )\n}\n predicate isSourceFC(FunctionCall fc)\n {\n\n fc.getTarget().hasName(\"av_opt_set_dict2\")\n }\n\n predicate isSinkFC(FunctionCall fc)\n {\n fc.getTarget().hasName(\"av_dict_free\")\n//  or\n//  fc.getTarget().hasName(\"target\")\n }\n DataFlow::Node getSinkNode(FunctionCall fc)\n {\n     result.asExpr() = getFreeExpr(fc)\n     or\n     result.asDefiningArgument() = getFreeExpr(fc)\n }\n    \n DataFlow::Node getSourceNode(FunctionCall fc)\n {\n     result.asExpr() = getMallocExpr(fc)\n     or\n     result.asDefiningArgument() = getMallocExpr(fc)\n }\n class MallocConfiguration extends DataFlow::Configuration {\n    MallocConfiguration() { this = \"MallocConfiguration\" }\n   \n     override predicate isSource(DataFlow::Node source) {\n       exists(FunctionCall fc | \n        isSourceFC(fc)\n        and\n        source = getSourceNode(fc)\n         )\n         or\n          exists(AssignExpr ae| \n             ae.getAChild() = source.asExpr()\n             or ae.getAChild() = source.asDefiningArgument()\n             )\n     }\n     override predicate isSink(DataFlow::Node sink) {\n       // sink.asExpr()\n       exists(FunctionCall fc |\n         isSinkFC(fc)\n         and sink = getSinkNode(fc)\n       )\n     }\n   }\n\n from FunctionCall target, FunctionCall free\n where\nisSinkFC(target)\nand exists(FunctionCall malloc | isSourceFC(malloc) and free.getAPredecessor*() = malloc)\nand\nisSinkFC(free)\n   and free.getASuccessor*() = target\n   and not free = target\nand exists(Variable v | \n    \n    v.getAnAccess() = getFreeExpr(target)\n    and v.getAnAccess() = getFreeExpr(free)\n//  and \n// isLocalVariable(getMallocExpr(target))\n and not \n exists(MallocConfiguration cfg, Expr malloc| \n    // isSourceFC(malloc)\n    free.getASuccessor*() = malloc\n    and malloc.getASuccessor*() = target\n    and\n    cfg.hasFlow(DataFlow::exprNode(malloc), getSinkNode(target))\n    )\n)\n select target, \"First Freed in \" + free.getLocation().toString() + \". Double free in \" + target.getLocation().toString()\n \n"
      })
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