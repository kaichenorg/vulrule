"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[744379],{

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

/***/ 321371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_zh_docusaurus_plugin_content_docs_current_projects_openssl_ssl_get_ex_data_md_180_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-zh-docusaurus-plugin-content-docs-current-projects-openssl-ssl-get-ex-data-md-180.json
const site_i_18_n_zh_docusaurus_plugin_content_docs_current_projects_openssl_ssl_get_ex_data_md_180_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/openssl/ssl_get_ex_data","title":"ssl_get_ex_data","description":"API 概述","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/projects/openssl/ssl_get_ex_data.md","sourceDirName":"projects/openssl","slug":"/projects/openssl/ssl_get_ex_data","permalink":"/vulrule/zh/projects/openssl/ssl_get_ex_data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"ssl_get_default_timeout","permalink":"/vulrule/zh/projects/openssl/ssl_get_default_timeout"},"next":{"title":"ssl_get_extms_support","permalink":"/vulrule/zh/projects/openssl/ssl_get_extms_support"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./i18n/zh/docusaurus-plugin-content-docs/current/projects/openssl/ssl_get_ex_data.md


const frontMatter = {};
const contentTitle = 'ssl_get_ex_data';

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
        id: "ssl_get_ex_data",
        children: "ssl_get_ex_data"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-概述",
      children: "API 概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ssl_get_ex_data"
      }), " 是 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "openssl"
      }), " 中的一个API。该规属于", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parameter check"
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
        children: "Parameter 1 must not be NULL."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["标签：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "parameter check"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["参数下标：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["CWE类别：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CWE-476"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则代码",
      children: "规则代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "/**\n * @name parameterCheck\n * @description description\n * @kind problem\n * @problem.severity error\n * @precision high\n * @id cpp/paracheck\n * @tags security\n */\n\n import cpp\n import semmle.code.cpp.dataflow.TaintTracking\n import semmle.code.cpp.dataflow.DataFlow\n import semmle.code.cpp.security.Security\n import semmle.code.cpp.controlflow.Guards\n import semmle.code.cpp.valuenumbering.GlobalValueNumbering\n \n     \n Expr getSinkExpr(FunctionCall fc)\n {\n     //Change\n result = fc.getArgument(0)\n }\n \n predicate isSinkFC(FunctionCall fc)\n {\n     // Change\n fc.getTarget().hasName(\"SSL_get_ex_data\")\n }\n GuardCondition getGuard(FunctionCall fc) {\n    isSinkFC(fc)\n    and\n     exists(Expr e, Variable a| e = getSinkExpr(fc)\n    //  and isLocalVariable(a)\n     and a.getAnAccess() = e\n     and exists(GuardCondition g, Expr ge| \n         a.getAnAccess() = ge\n         and g.getASuccessor*() = fc\n         and g.getAChild*() = ge\n         and not exists(FunctionCall fc_in | \n            g.getAChild*() = fc_in\n            and fc_in.getAnArgument() = a.getAnAccess()\n            )\n         and result = g\n         )\n     )\n }\n \n// predicate getMalloc(FunctionCall fc) {\n//   fc.getTarget().hasName(\"malloc\")\n  \n// }\n\n class PathConfiguration extends DataFlow::Configuration {\n    PathConfiguration() { this = \"PathConfiguration\" }\n   \n     override predicate isSource(DataFlow::Node source) {\n       exists(AssignExpr a | \n        source.asExpr() = a.getRValue()\n        and exists(Variable v | \n          v.getAnAccess() = a.getRValue()\n          and not v instanceof ExcludeArrayAndConstantPointer\n          )\n         )\n         or exists(Variable v | \n          source.asExpr() = v.getInitializer().getExpr()\n          and not v instanceof ExcludeArrayAndConstantPointer\n          )\n          or\n          exists(FunctionCall fc |\n            source.asExpr() = fc)\n     }\n     override predicate isSink(DataFlow::Node sink) {\n       // sink.asExpr()\n       exists(FunctionCall fc |\n        isSinkFC(fc)\n        and\n        sink.asExpr() = getSinkExpr(fc)\n    )\n     }\n   }\n\n\npredicate hasFlowtoAPI(FunctionCall fc) {\n    isSinkFC(fc)\n    and\n    exists(PathConfiguration p, DataFlow::Node source| \n        p.hasFlow(source, DataFlow::exprNode(getSinkExpr(fc)))\n    \n        )\n}\n//  predicate \n\n\npredicate hasSpecifiedFunctionInThen(FunctionCall fc) {\n    // isSinkFC(fc) \n    // and isuseSamePara(fc, barrier)\n    // and\n    exists(IfStmt ifStmt | \n      fc.getEnclosingStmt() = ifStmt.getThen().getAChild*()\n      and not exists(Stmt elseStmt | elseStmt = ifStmt.getElse())\n        )\n  }\n\n  class ExcludeArrayAndConstantPointer extends Variable {\n    ExcludeArrayAndConstantPointer() {\n      exists(Type t |\n        // Exclude array types\n        t = this.getType() and\n        t instanceof ArrayType or\n  \n        // Exclude constant pointer types\n        t = this.getType() and\n        t instanceof PointerType and\n        exists(Expr initializer |\n            this.getInitializer().getExpr() = initializer and\n            initializer instanceof StringLiteral)\n      )\n    }\n  }\n\n  predicate isuseSamePara(FunctionCall target, FunctionCall barrier) {\n    isSinkFC(target)\n    and\n    exists(Variable v, Expr p| \n        p = getSinkExpr(target)\n        and\n        barrier.getAnArgument() = v.getAnAccess()\n        and v.getAnAccess() = p\n        and barrier.getASuccessor+() = target\n        )\n}\n\n from FunctionCall target\n where\n (isSinkFC(target)\n and hasFlowtoAPI(target)\n and not exists(GuardCondition g| \n     g = getGuard(target)\n    //  and source.getASuccessor*() = g\n     )\nand exists(Expr e, LocalVariable a| e = getSinkExpr(target)\n//  and isLocalVariable(a)\n and a.getAnAccess() = e.getAChild*()\n)\nand not exists(AddressOfExpr ae | \n    ae = getSinkExpr(target)))\n\n    and \n    (\n\n        (not exists(FunctionCall barrier | isuseSamePara(target, barrier)))\n    or (\n        exists(FunctionCall barrier | \n        isuseSamePara(target, barrier)\n        and hasSpecifiedFunctionInThen(barrier)\n        )\n        )\n\n    )\n\n    and exists(Variable v | \n        v.getAnAccess() = getSinkExpr(target)\n        and not v instanceof ExcludeArrayAndConstantPointer\n        )\n select target, target.getLocation().toString()\n"
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