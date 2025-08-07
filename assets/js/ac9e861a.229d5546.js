"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[449645],{

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

/***/ 696861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_projects_openssl_openssl_sk_set_cmp_func_md_ac9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-projects-openssl-openssl-sk-set-cmp-func-md-ac9.json
const site_docs_projects_openssl_openssl_sk_set_cmp_func_md_ac9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/openssl/openssl_sk_set_cmp_func","title":"openssl_sk_set_cmp_func","description":"API Overview","source":"@site/docs/projects/openssl/openssl_sk_set_cmp_func.md","sourceDirName":"projects/openssl","slug":"/projects/openssl/openssl_sk_set_cmp_func","permalink":"/vulrule/projects/openssl/openssl_sk_set_cmp_func","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"openssl_sk_reserve","permalink":"/vulrule/projects/openssl/openssl_sk_reserve"},"next":{"title":"openssl_sk_unshift","permalink":"/vulrule/projects/openssl/openssl_sk_unshift"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/projects/openssl/openssl_sk_set_cmp_func.md


const frontMatter = {};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "API Overview",
  "id": "api-overview",
  "level": 2
}, {
  "value": "Rule Description",
  "id": "rule-description",
  "level": 2
}, {
  "value": "Rule Code",
  "id": "rule-code",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "api-overview",
      children: "API Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "openssl_sk_set_cmp_func"
      }), " is an API in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "openssl"
      }), ". This rule belongs to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parameter check"
      }), " type. This rule is generated using ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../tools/GPTAid",
        children: "GPTAid"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-description",
      children: "Rule Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Parameter 1 must not be NULL."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Tags: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "parameter check"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Parameter Index: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "0"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["CWE Type: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CWE-476"
          })]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-code",
      children: "Rule Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "/**\n * @name parameterCheck\n * @description description\n * @kind problem\n * @problem.severity error\n * @precision high\n * @id cpp/paracheck\n * @tags security\n */\n\n import cpp\n import semmle.code.cpp.dataflow.TaintTracking\n import semmle.code.cpp.dataflow.DataFlow\n import semmle.code.cpp.security.Security\n import semmle.code.cpp.controlflow.Guards\n import semmle.code.cpp.valuenumbering.GlobalValueNumbering\n \n     \n Expr getSinkExpr(FunctionCall fc)\n {\n     //Change\n result = fc.getArgument(0)\n }\n \n predicate isSinkFC(FunctionCall fc)\n {\n     // Change\n fc.getTarget().hasName(\"OPENSSL_sk_set_cmp_func\")\n }\n GuardCondition getGuard(FunctionCall fc) {\n    isSinkFC(fc)\n    and\n     exists(Expr e, Variable a| e = getSinkExpr(fc)\n    //  and isLocalVariable(a)\n     and a.getAnAccess() = e\n     and exists(GuardCondition g, Expr ge| \n         a.getAnAccess() = ge\n         and g.getASuccessor*() = fc\n         and g.getAChild*() = ge\n         and not exists(FunctionCall fc_in | \n            g.getAChild*() = fc_in\n            and fc_in.getAnArgument() = a.getAnAccess()\n            )\n         and result = g\n         )\n     )\n }\n \n// predicate getMalloc(FunctionCall fc) {\n//   fc.getTarget().hasName(\"malloc\")\n  \n// }\n\n class PathConfiguration extends DataFlow::Configuration {\n    PathConfiguration() { this = \"PathConfiguration\" }\n   \n     override predicate isSource(DataFlow::Node source) {\n       exists(AssignExpr a | \n        source.asExpr() = a.getRValue()\n        and exists(Variable v | \n          v.getAnAccess() = a.getRValue()\n          and not v instanceof ExcludeArrayAndConstantPointer\n          )\n         )\n         or exists(Variable v | \n          source.asExpr() = v.getInitializer().getExpr()\n          and not v instanceof ExcludeArrayAndConstantPointer\n          )\n          or\n          exists(FunctionCall fc |\n            source.asExpr() = fc)\n     }\n     override predicate isSink(DataFlow::Node sink) {\n       // sink.asExpr()\n       exists(FunctionCall fc |\n        isSinkFC(fc)\n        and\n        sink.asExpr() = getSinkExpr(fc)\n    )\n     }\n   }\n\n\npredicate hasFlowtoAPI(FunctionCall fc) {\n    isSinkFC(fc)\n    and\n    exists(PathConfiguration p, DataFlow::Node source| \n        p.hasFlow(source, DataFlow::exprNode(getSinkExpr(fc)))\n    \n        )\n}\n//  predicate \n\n\npredicate hasSpecifiedFunctionInThen(FunctionCall fc) {\n    // isSinkFC(fc) \n    // and isuseSamePara(fc, barrier)\n    // and\n    exists(IfStmt ifStmt | \n      fc.getEnclosingStmt() = ifStmt.getThen().getAChild*()\n      and not exists(Stmt elseStmt | elseStmt = ifStmt.getElse())\n        )\n  }\n\n  class ExcludeArrayAndConstantPointer extends Variable {\n    ExcludeArrayAndConstantPointer() {\n      exists(Type t |\n        // Exclude array types\n        t = this.getType() and\n        t instanceof ArrayType or\n  \n        // Exclude constant pointer types\n        t = this.getType() and\n        t instanceof PointerType and\n        exists(Expr initializer |\n            this.getInitializer().getExpr() = initializer and\n            initializer instanceof StringLiteral)\n      )\n    }\n  }\n\n  predicate isuseSamePara(FunctionCall target, FunctionCall barrier) {\n    isSinkFC(target)\n    and\n    exists(Variable v, Expr p| \n        p = getSinkExpr(target)\n        and\n        barrier.getAnArgument() = v.getAnAccess()\n        and v.getAnAccess() = p\n        and barrier.getASuccessor+() = target\n        )\n}\n\n from FunctionCall target\n where\n (isSinkFC(target)\n and hasFlowtoAPI(target)\n and not exists(GuardCondition g| \n     g = getGuard(target)\n    //  and source.getASuccessor*() = g\n     )\nand exists(Expr e, LocalVariable a| e = getSinkExpr(target)\n//  and isLocalVariable(a)\n and a.getAnAccess() = e.getAChild*()\n)\nand not exists(AddressOfExpr ae | \n    ae = getSinkExpr(target)))\n\n    and \n    (\n\n        (not exists(FunctionCall barrier | isuseSamePara(target, barrier)))\n    or (\n        exists(FunctionCall barrier | \n        isuseSamePara(target, barrier)\n        and hasSpecifiedFunctionInThen(barrier)\n        )\n        )\n\n    )\n\n    and exists(Variable v | \n        v.getAnAccess() = getSinkExpr(target)\n        and not v instanceof ExcludeArrayAndConstantPointer\n        )\n select target, target.getLocation().toString()\n"
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