"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[34417],{

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

/***/ 832860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_projects_ffmpeg_av_bsf_list_free_md_9e2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-projects-ffmpeg-av-bsf-list-free-md-9e2.json
const site_docs_projects_ffmpeg_av_bsf_list_free_md_9e2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/ffmpeg/av_bsf_list_free","title":"av_bsf_list_free","description":"API Overview","source":"@site/docs/projects/ffmpeg/av_bsf_list_free.md","sourceDirName":"projects/ffmpeg","slug":"/projects/ffmpeg/av_bsf_list_free","permalink":"/vulrule/projects/ffmpeg/av_bsf_list_free","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"av_bsf_list_finalize","permalink":"/vulrule/projects/ffmpeg/av_bsf_list_finalize"},"next":{"title":"av_buffer_alloc","permalink":"/vulrule/projects/ffmpeg/av_buffer_alloc"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/projects/ffmpeg/av_bsf_list_free.md


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
        children: "av_bsf_list_free"
      }), " is an API in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FFmpeg"
      }), ". This rule belongs to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "api pair"
      }), " type. This rule is generated using ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../tools/ChatDetector",
        children: "ChatDetector"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-description",
      children: "Rule Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Once a resource is passed as the 1-th argument to av_bsf_list_free, it must not be freed again."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Tags: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "api pair"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Parameter Index: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "0"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["CWE Type: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CWE-415"
          })]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-code",
      children: "Rule Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "/**\n * @name doublefree\n * @description description\n * @kind problem\n * @problem.severity error\n * @precision high\n * @id cpp/doublefree\n * @tags security\n */\n\n import cpp\n import semmle.code.cpp.dataflow.TaintTracking\n import semmle.code.cpp.dataflow.DataFlow\n import semmle.code.cpp.security.Security\n import semmle.code.cpp.controlflow.Guards\n import semmle.code.cpp.valuenumbering.GlobalValueNumbering\n \nExpr getMallocExpr(FunctionCall fc)\n{\n    exists(Expr e | \n        result = e\n        and\n        (\n            (fc.getTarget().hasName(\"av_bsf_list_finalize\") and e = fc.getArgument(0))\n        // TODO-addMallocHere\n        )\n    )\n}\n\nExpr getFreeExpr(FunctionCall fc)\n{\n\n        result = fc.getArgument(0)\n        and\n        (\n            fc.getTarget().hasName(\"av_bsf_list_free\")\n        // or\n        //  fc.getTarget().hasName(\"target\")\n        // TODO-addFreeHere\n        )\n}\n predicate isSourceFC(FunctionCall fc)\n {\n\n fc.getTarget().hasName(\"av_bsf_list_finalize\")\n }\n\n predicate isSinkFC(FunctionCall fc)\n {\n fc.getTarget().hasName(\"av_bsf_list_free\")\n//  or\n//  fc.getTarget().hasName(\"target\")\n }\n DataFlow::Node getSinkNode(FunctionCall fc)\n {\n     result.asExpr() = getFreeExpr(fc)\n     or\n     result.asDefiningArgument() = getFreeExpr(fc)\n }\n    \n DataFlow::Node getSourceNode(FunctionCall fc)\n {\n     result.asExpr() = getMallocExpr(fc)\n     or\n     result.asDefiningArgument() = getMallocExpr(fc)\n }\n class MallocConfiguration extends DataFlow::Configuration {\n    MallocConfiguration() { this = \"MallocConfiguration\" }\n   \n     override predicate isSource(DataFlow::Node source) {\n       exists(FunctionCall fc | \n        isSourceFC(fc)\n        and\n        source = getSourceNode(fc)\n         )\n         or\n          exists(AssignExpr ae| \n             ae.getAChild() = source.asExpr()\n             or ae.getAChild() = source.asDefiningArgument()\n             )\n     }\n     override predicate isSink(DataFlow::Node sink) {\n       // sink.asExpr()\n       exists(FunctionCall fc |\n         isSinkFC(fc)\n         and sink = getSinkNode(fc)\n       )\n     }\n   }\n\n from FunctionCall target, FunctionCall free\n where\nisSinkFC(target)\nand exists(FunctionCall malloc | isSourceFC(malloc) and free.getAPredecessor*() = malloc)\nand\nisSinkFC(free)\n   and free.getASuccessor*() = target\n   and not free = target\nand exists(Variable v | \n    \n    v.getAnAccess() = getFreeExpr(target)\n    and v.getAnAccess() = getFreeExpr(free)\n//  and \n// isLocalVariable(getMallocExpr(target))\n and not \n exists(MallocConfiguration cfg, Expr malloc| \n    // isSourceFC(malloc)\n    free.getASuccessor*() = malloc\n    and malloc.getASuccessor*() = target\n    and\n    cfg.hasFlow(DataFlow::exprNode(malloc), getSinkNode(target))\n    )\n)\n select target, \"First Freed in \" + free.getLocation().toString() + \". Double free in \" + target.getLocation().toString()\n \n"
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