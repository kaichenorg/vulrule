"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[804689],{

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

/***/ 184598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_zh_docusaurus_plugin_content_docs_current_projects_libxml_2_xmlnanohttpopenredir_md_d5e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-zh-docusaurus-plugin-content-docs-current-projects-libxml-2-xmlnanohttpopenredir-md-d5e.json
const site_i_18_n_zh_docusaurus_plugin_content_docs_current_projects_libxml_2_xmlnanohttpopenredir_md_d5e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/libxml2/xmlnanohttpopenredir","title":"xmlnanohttpopenredir","description":"API 概述","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/projects/libxml2/xmlnanohttpopenredir.md","sourceDirName":"projects/libxml2","slug":"/projects/libxml2/xmlnanohttpopenredir","permalink":"/vulrule/zh/projects/libxml2/xmlnanohttpopenredir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"xmlhasnsprop","permalink":"/vulrule/zh/projects/libxml2/xmlhasnsprop"},"next":{"title":"xmlparseurireference","permalink":"/vulrule/zh/projects/libxml2/xmlparseurireference"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./i18n/zh/docusaurus-plugin-content-docs/current/projects/libxml2/xmlnanohttpopenredir.md


const frontMatter = {};
const contentTitle = 'xmlnanohttpopenredir';

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
        id: "xmlnanohttpopenredir",
        children: "xmlnanohttpopenredir"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-概述",
      children: "API 概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "xmlnanohttpopenredir"
      }), " 是 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "libxml2"
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
        children: "Parameter 2 must be freed when no longer needed."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["标签：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "api pair"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["参数下标：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["CWE类别：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CWE-404"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则代码",
      children: "规则代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "/**\n * @name mallocfree\n * @description description\n * @kind problem\n * @problem.severity error\n * @precision high\n * @id cpp/memleak\n * @tags security\n */\n\n import cpp\n import semmle.code.cpp.dataflow.TaintTracking\n import semmle.code.cpp.dataflow.DataFlow\n import semmle.code.cpp.security.Security\n import semmle.code.cpp.controlflow.Guards\n import semmle.code.cpp.valuenumbering.GlobalValueNumbering\n \nExpr getMallocExpr(FunctionCall fc)\n{\n    exists(Expr e | \n        result = e\n        and\n        (\n            (fc.getTarget().hasName(\"xmlNanoHTTPOpenRedir\") and e = fc.getArgument(1))\n        // or\n        // (fc.getTarget().hasName(\"new_malloc\") and e = fc.getArgument(0))\n        // TODO-addMallocHere\n        )\n    )\n}\n\nExpr getFreeExpr(FunctionCall fc)\n{\n\n        result = fc.getArgument(0)\n        and\n        (\n            fc.getTarget().hasName(\"free\")\nor fc.getTarget().hasName(\"xmlFreeDoc\")\nor fc.getTarget().hasName(\"xmlXPathFreeObject\")\nor fc.getTarget().hasName(\"xmlXPathFreeContext\")\nor fc.getTarget().hasName(\"xmlBufferFree\")\nor fc.getTarget().hasName(\"xmlFreeParserCtxt\")\nor fc.getTarget().hasName(\"xmlFreeNode\")\n        // or\n        //  fc.getTarget().hasName(\"new_free\")\n        // TODO-addFreeHere\n        )\n}\n\n predicate isSourceFC(FunctionCall fc)\n {\n//  fc.getTarget().hasName(\"new_malloc\")\n//  or \n fc.getTarget().hasName(\"xmlNanoHTTPOpenRedir\")\n }\n\n predicate isSinkFC(FunctionCall fc)\n {\n fc.getTarget().hasName(\"free\")\nor fc.getTarget().hasName(\"xmlFreeDoc\")\nor fc.getTarget().hasName(\"xmlXPathFreeObject\")\nor fc.getTarget().hasName(\"xmlXPathFreeContext\")\nor fc.getTarget().hasName(\"xmlBufferFree\")\nor fc.getTarget().hasName(\"xmlFreeParserCtxt\")\nor fc.getTarget().hasName(\"xmlFreeNode\")\n//  or\n//  fc.getTarget().hasName(\"new_free\")\n }\n DataFlow::Node getSinkNode(FunctionCall fc)\n {\n     result.asExpr() = getFreeExpr(fc)\n     or\n     result.asDefiningArgument() = getFreeExpr(fc)\n }\n    \n DataFlow::Node getSourceNode(FunctionCall fc)\n {\n     result.asExpr() = getMallocExpr(fc)\n     or\n     result.asDefiningArgument() = getMallocExpr(fc)\n }\n class MallocConfiguration extends DataFlow::Configuration {\n    MallocConfiguration() { this = \"MallocConfiguration\" }\n   \n     override predicate isSource(DataFlow::Node source) {\n       exists(FunctionCall fc | \n        isSourceFC(fc)\n        and\n        source = getSourceNode(fc)\n         )\n     }\n     override predicate isSink(DataFlow::Node sink) {\n       // sink.asExpr()\n       exists(FunctionCall fc |\n         isSinkFC(fc)\n         and sink = getSinkNode(fc)\n       )\n     }\n   }\n\nControlFlowNode getTargetNode() {\n    exists(FunctionCall target | \n    isSourceFC(target)\n    and result = target\n    )\n}\n   \nControlFlowNode getAfterNode(ControlFlowNode target) {\n    isSourceFC(target)\n    and\n    exists(FunctionCall fc | \n        target.getASuccessor*() = fc\n        and result = fc\n        and isSinkFC(fc)\n        and exists(MallocConfiguration cfg| \n            cfg.hasFlow(getSourceNode(target), getSinkNode(fc))\n            )\n        )\n}\n\n\n// return True说明该node是 conditional的，会leak\npredicate isConditionalAfter(ControlFlowNode node, ControlFlowNode target) {\n    target = getTargetNode()\n    and\n    node = getAfterNode(target)\n    and\n    exists(BasicBlock bb | \n        bb.getAPredecessor().getANode() = node\n        and bb.getAPredecessor().getANode() = target\n        )\n}\n\n //   if every path after target exists node\nBasicBlock getLeakBBAfter(ControlFlowNode target) {\n     not exists(ControlFlowNode node | \n        node = getAfterNode(target)\n        and (not\n        exists(BasicBlock bb | \n            not bb.getANode() = node\n            and bb = target.getASuccessor*()\n            and exists(ExitBasicBlock exit | \n                bb.getASuccessor*() = exit)\n            and target.getASuccessor*() = bb\n            and not bb.getAPredecessor*() = node.getBasicBlock()\n            and not bb.getASuccessor*() = node.getBasicBlock()\n            and result = bb\n         )\n         and not isConditionalAfter(node, target)\n        )\n     )\n    \n }\n \n \n predicate isLocalVariable(Expr e) {\n    exists(FunctionCall fc| \n        fc = e \n        and\n        exists(AssignExpr ae, LocalVariable lv| \n        ae.getAChild() = fc \n        and lv.getAnAccess() = ae.getLValue()\n        )\n        or exists(LocalVariable lv| \n            lv.getInitializer().getExpr() = e\n            )\n    )\n        or\n\n     exists(LocalVariable lv | \n        \n            lv.getAnAccess() = e.getAChild*()\n            )\n }\n\n \n from FunctionCall target\n where\n target = getTargetNode()\n and \nisLocalVariable(getMallocExpr(target))\n \n//  and after.getTarget().hasName(\"free\")\n // and not exists(Expr check| check=getCheckExpr(target))\n and exists(BasicBlock bb | bb = getLeakBBAfter(target) )\n select target, target.getLocation().toString()\n"
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