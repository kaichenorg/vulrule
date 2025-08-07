"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[983306],{

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

/***/ 681786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_projects_openssl_x_509_store_set_flags_md_bfc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-projects-openssl-x-509-store-set-flags-md-bfc.json
const site_docs_projects_openssl_x_509_store_set_flags_md_bfc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/openssl/x509_store_set_flags","title":"x509_store_set_flags","description":"API Overview","source":"@site/docs/projects/openssl/x509_store_set_flags.md","sourceDirName":"projects/openssl","slug":"/projects/openssl/x509_store_set_flags","permalink":"/vulrule/projects/openssl/x509_store_set_flags","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"x509_store_ctx_verify","permalink":"/vulrule/projects/openssl/x509_store_ctx_verify"},"next":{"title":"x509_subject_name_cmp","permalink":"/vulrule/projects/openssl/x509_subject_name_cmp"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/projects/openssl/x509_store_set_flags.md


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
        children: "x509_store_set_flags"
      }), " is an API in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "openssl"
      }), ". This rule belongs to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "initialization"
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
        children: "Parameter 1 must be initialized."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Tags: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "initialization"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Parameter Index: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "0"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["CWE Type: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CWE-457"
          })]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-code",
      children: "Rule Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "/**\n * @name uninitialize\n * @description description\n * @kind problem\n * @problem.severity error\n * @precision high\n * @id cpp/uninitialize\n * @tags security\n */\n\n import cpp\n import semmle.code.cpp.dataflow.TaintTracking\n import semmle.code.cpp.dataflow.DataFlow\n import semmle.code.cpp.security.Security\n import semmle.code.cpp.controlflow.Guards\n import semmle.code.cpp.valuenumbering.GlobalValueNumbering\n\n predicate isSourceFC(FunctionCall fc)\n {\n fc.getTarget().hasName(\"initialize\")\n or fc.getTarget().hasName(\"OPENSSL_sk_reserve\")\n or fc.getTarget().hasName(\"PKCS12_parse\")\n or fc.getTarget().hasName(\"EVP_PKEY_get_bn_param\")\n or fc.getTarget().hasName(\"X509_STORE_add_cert\")\n }\n\n//  DataFlow::Node getSourceNode(FunctionCall fc)\n//  {\n//      result.asExpr() = getMallocExpr(fc)\n//      or\n//      result.asDefiningArgument() = getMallocExpr(fc)\n//  }\n\n Expr getSinkExpr(FunctionCall fc)\n {\n    isSinkFC(fc)\n    and\n result = fc.getArgument(0) \n }\n \n predicate isSinkFC(FunctionCall fc)\n {\n fc.getTarget().hasName(\"X509_STORE_set_flags\")\n }\n DataFlow::Node getSinkNode(FunctionCall fc)\n {\n     result.asExpr() = getSinkExpr(fc)\n     or\n     result.asDefiningArgument() = getSinkExpr(fc)\n }\n    \n class ParameterConfiguration extends DataFlow::Configuration {\n     ParameterConfiguration() { this = \"ParameterConfiguration\" }\n   \n     override predicate isSource(DataFlow::Node source) {\n        exists(FunctionCall fc | \n            isSourceFC(fc)\n            and\n            (source.asExpr() = fc\n            or\n            source.asExpr() = fc.getAnArgument()\n            or\n            source.asDefiningArgument() = fc.getAnArgument())\n            )\n        \n     }\n     override predicate isSink(DataFlow::Node sink) {\n       // sink.asExpr()\n       exists(FunctionCall fc |\n         isSinkFC(fc)\n         and sink = getSinkNode(fc)\n       )\n     }\n   }\n   predicate isFlow(Expr source, Expr sink) {\n    exists(ParameterConfiguration cfg | \n            cfg.hasFlow(DataFlow::exprNode(source), DataFlow::exprNode(sink))\n        )\n    \n}\n\n// predicate isFlow(Expr source, Expr sink) {\n//     exists(FunctionCall sourcefc, FunctionCall sinkfc| \n//         isSourceFC(sourcefc)\n//         and isSinkFC(sinkfc)\n//         and (source = sourcefc.getAnArgument() or source = sourcefc)\n//         and sink = getSinkExpr(sinkfc)\n//         and exists(ParameterConfiguration cfg | \n//             cfg.hasFlow(DataFlow::exprNode(source), getSinkNode(sinkfc))\n//             )\n//         )\n    \n// }\n   \nControlFlowNode getTargetNode() {\n    exists(FunctionCall target | \n        isSinkFC(target)\n    // target.getTarget().hasName(\"free\")\n    and result = target\n    )\n}\n\nControlFlowNode getBeforeNode(FunctionCall target) {\n    exists(FunctionCall sourcefc, ParameterConfiguration cfg, Expr source| \n        isSourceFC(sourcefc)\n        and (source = sourcefc or source = sourcefc.getAnArgument())\n        and\n        cfg.hasFlow(DataFlow::exprNode(source), getSinkNode(target))\n        and target.getAPredecessor*() = source\n        // and not e = target.getAnArgument()\n        and result = sourcefc)\n}\n\n// return True说明该node是 conditional的，会leak\npredicate isConditionalBefore(ControlFlowNode node, ControlFlowNode target) {\n    target = getTargetNode()\n    and\n    node = getBeforeNode(target)\n    and not node.getBasicBlock() = target.getBasicBlock()\n    and\n    exists(BasicBlock bb | \n        bb.getASuccessor().getANode() = node\n        and bb.getASuccessor().getANode() = target\n        \n        )\n}\n\n\nBasicBlock getLeakBBBefore(ControlFlowNode target) {\n    isSinkFC(target)\n    and\n    // result.getASuccessor*() = target\n    // and\n    not exists(ControlFlowNode node | \n        node = getBeforeNode(target)\n        and (not\n        exists(BasicBlock bb | \n            bb.getASuccessor*() = target\n            // and bb.getAPredecessor*() = node\n            and not bb.getANode() = node\n        and result = bb\n        and not bb.getAPredecessor*() = node.getBasicBlock()\n        and not bb.getASuccessor*() = node.getBasicBlock()\n        )\n        and not isConditionalBefore(node, target)\n        )\n        )\n}\n\n \n predicate isLocalVariable(Expr e) {\n    exists(LocalVariable lv | \n       exists(FunctionCall fc| \n           fc = e and\n           exists(AssignExpr ae | \n           ae.getAChild() = fc and lv.getAnAccess() = ae.getLValue())\n       )\n           or\n           lv.getAnAccess() = e\n           )\n}\n \n\n \n \n from FunctionCall target\n where\n target = getTargetNode()\n and\n isLocalVariable(getSinkExpr(target))\n//  and after.getTarget().hasName(\"free\")\n // and not exists(Expr check| check=getCheckExpr(target))\n and exists(BasicBlock bb | bb = getLeakBBBefore(target))\n select target, target.getLocation().toString()\n \n"
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