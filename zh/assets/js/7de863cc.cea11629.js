"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[980950],{

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

/***/ 711258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_zh_docusaurus_plugin_content_docs_current_projects_openssl_evp_pkey_free_md_7de_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-zh-docusaurus-plugin-content-docs-current-projects-openssl-evp-pkey-free-md-7de.json
const site_i_18_n_zh_docusaurus_plugin_content_docs_current_projects_openssl_evp_pkey_free_md_7de_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/openssl/evp_pkey_free","title":"evp_pkey_free","description":"API 概述","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/projects/openssl/evp_pkey_free.md","sourceDirName":"projects/openssl","slug":"/projects/openssl/evp_pkey_free","permalink":"/vulrule/zh/projects/openssl/evp_pkey_free","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"evp_pkey_eq","permalink":"/vulrule/zh/projects/openssl/evp_pkey_eq"},"next":{"title":"evp_pkey_fromdata","permalink":"/vulrule/zh/projects/openssl/evp_pkey_fromdata"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./i18n/zh/docusaurus-plugin-content-docs/current/projects/openssl/evp_pkey_free.md


const frontMatter = {};
const contentTitle = 'evp_pkey_free';

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
        id: "evp_pkey_free",
        children: "evp_pkey_free"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-概述",
      children: "API 概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "evp_pkey_free"
      }), " 是 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "openssl"
      }), " 中的一个API。该规属于", (0,jsx_runtime.jsx)(_components.strong, {
        children: "api pair"
      }), " 类型。该规则是使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../tools/GPTAid",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "GPTAid"
        })
      }), " 生成的。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则描述",
      children: "规则描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Parameter 1 must not be used later."
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
          children: "CWE-416"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则代码",
      children: "规则代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "/**\n * @name UAF\n * @description description\n * @kind problem\n * @problem.severity error\n * @precision high\n * @id cpp/UAF\n * @tags security\n */\n\n import cpp\n import semmle.code.cpp.dataflow.TaintTracking\n import semmle.code.cpp.dataflow.DataFlow\n import semmle.code.cpp.security.Security\n import semmle.code.cpp.controlflow.Guards\n import semmle.code.cpp.valuenumbering.GlobalValueNumbering\n \nExpr getMallocExpr(FunctionCall fc)\n{\n    exists(Expr e | \n        result = e\n        and\n        (\n            (fc.getTarget().hasName(\"malloc\") and e = fc)\n or (fc.getTarget().hasName(\"OPENSSL_sk_reserve\") and e = fc.getArgument(0))\n or (fc.getTarget().hasName(\"PKCS12_parse\") and e = fc.getArgument(4))\n or (fc.getTarget().hasName(\"EVP_PKEY_get_bn_param\") and e = fc.getArgument(2))\n or (fc.getTarget().hasName(\"X509_STORE_add_cert\") and e = fc.getArgument(1))\n        // or\n        // (fc.getTarget().hasName(\"new_malloc\") and e = fc.getArgument(0))\n        // TODO-addMallocHere\n        )\n    )\n}\n\nExpr getFreeExpr(FunctionCall fc)\n{\n\n        result = fc.getArgument(0)\n        and\n        (\n            // TODO-Target-change\n            fc.getTarget().hasName(\"EVP_PKEY_free\")\n        // or\n        //  fc.getTarget().hasName(\"new_free\")\n        \n        )\n}\n predicate isSourceFC(FunctionCall fc)\n {\n//  fc.getTarget().hasName(\"new_malloc\")\n//  or \n// // TODO-addMallocFCHere\n fc.getTarget().hasName(\"malloc\")\n or fc.getTarget().hasName(\"OPENSSL_sk_reserve\")\n or fc.getTarget().hasName(\"PKCS12_parse\")\n or fc.getTarget().hasName(\"EVP_PKEY_get_bn_param\")\n or fc.getTarget().hasName(\"X509_STORE_add_cert\")\n }\n\n predicate isSinkFC(FunctionCall fc)\n {\n fc.getTarget().hasName(\"EVP_PKEY_free\")\n//  or\n//  fc.getTarget().hasName(\"new_free\")\n }\n    \n DataFlow::Node getSourceNode(FunctionCall fc)\n {\n     result.asExpr() = getMallocExpr(fc)\n     or\n     result.asDefiningArgument() = getMallocExpr(fc)\n }\n class MallocConfiguration extends DataFlow::Configuration {\n    MallocConfiguration() { this = \"MallocConfiguration\" }\n   \n    override predicate isSource(DataFlow::Node source) {\n        exists(FunctionCall fc | \n         isSourceFC(fc)\n         and\n         source = getSourceNode(fc)\n          )\n          or\n          exists(AssignExpr ae| \n             ae.getAChild() = source.asExpr()\n             or ae.getAChild() = source.asDefiningArgument()\n             )\n      }\n     override predicate isSink(DataFlow::Node sink) {\n       // sink.asExpr()\n       exists(Expr e |\n         sink.asExpr() = e\n         or sink.asDefiningArgument() = e\n       )\n     }\n   }\n//  target is a free function\nfrom FunctionCall target, Expr use\nwhere\nisSinkFC(target)\nand exists(FunctionCall malloc | isSourceFC(malloc) and target.getAPredecessor*() = malloc)\nand not target.getAnArgument() = use\nand target.getASuccessor*() = use\n//  and \n// isLocalVariable(getMallocExpr(target))\nand  exists(Variable v| \n   v.getAnAccess() = use\n   and v.getAnAccess() = getFreeExpr(target)\n   and not exists(Expr malloc, MallocConfiguration cfg | \n       use.getAPredecessor*() = malloc \n   and malloc.getAPredecessor*() = target\n   and\n   cfg.hasFlow(DataFlow::exprNode(malloc), DataFlow::exprNode(use))\n   )\n       )\n\nselect target, \"Freed in \" + target.getLocation().toString() + \". Used in \" + use.getLocation().toString()\n\n"
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