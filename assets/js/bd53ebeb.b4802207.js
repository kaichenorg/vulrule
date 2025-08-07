"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[866869],{

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

/***/ 67223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_projects_libsqlite_3_sqlite_3_exec_md_bd5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-projects-libsqlite-3-sqlite-3-exec-md-bd5.json
const site_docs_projects_libsqlite_3_sqlite_3_exec_md_bd5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/libsqlite3/sqlite3_exec","title":"sqlite3_exec","description":"API Overview","source":"@site/docs/projects/libsqlite3/sqlite3_exec.md","sourceDirName":"projects/libsqlite3","slug":"/projects/libsqlite3/sqlite3_exec","permalink":"/vulrule/projects/libsqlite3/sqlite3_exec","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"libsqlite3 Rules","permalink":"/vulrule/projects/libsqlite3/"},"next":{"title":"sqlite3_open_v2","permalink":"/vulrule/projects/libsqlite3/sqlite3_open_v2"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/projects/libsqlite3/sqlite3_exec.md


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
        children: "sqlite3_exec"
      }), " is an API in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "libsqlite3"
      }), ". This rule belongs to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mem leakage"
      }), " type. This rule is generated using ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../tools/Advance",
        children: "Advance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-description",
      children: "Rule Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "To avoid memory leaks, the application should invoke sqlite3_free() on error message strings returned through the 5th parameter of sqlite3_exec() after the error message string is no longer needed."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Tags: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "mem leakage"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Parameter Index: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "N/A"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["CWE Type: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CWE-772"
          })]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-code",
      children: "Rule Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import cpp\nimport semmle.code.cpp.dataflow.TaintTracking\nimport semmle.code.cpp.dataflow.DataFlow\nimport semmle.code.cpp.security.Security\nimport DataFlow::PathGraph\nclass TestConfiguration extends TaintTracking::Configuration {\n  TestConfiguration() { this = \"TestConfiguration\" }\n\n  override predicate isSource(DataFlow::Node source) {\n    exists(FunctionCall fc, MacroInvocation mi |\n      (fc.getTarget().hasQualifiedName(\"sqlite3_exec\") or (\n          mi.getMacroName() = \"sqlite3_exec\"\n          and fc.getTarget().hasName(mi.getMacro().getBody())\n         )\n      )\n      and ((fc.getArgument( 5-1) = source.asDefiningArgument() and  5-1 >= 0) or\n        (fc = source.asExpr() and  5-1 = -1)\n      )\n    )\n  }\noverride predicate isSink(DataFlow::Node sink) {\n  exists(FunctionCall fc, MacroInvocation mi |\n      (fc.getTarget().hasName(\"sqlite3_free\") or (\n        mi.getMacroName() = \"sqlite3_free\"\n        and fc.getTarget().hasName(mi.getMacro().getBody())\n       )\n      )\n      and fc.getAnArgument() = sink.asExpr()\n    )\n  }\n}\nfrom TestConfiguration cfg, FunctionCall fc, MacroInvocation mi\nwhere (fc.getTarget().hasQualifiedName(\"sqlite3_exec\") or (\n          mi.getMacroName() = \"sqlite3_exec\"\n          and fc.getTarget().hasName(mi.getMacro().getBody())\n         )\n      )\n      and not exists(DataFlow::PathNode source, DataFlow::PathNode sink|cfg.hasFlowPath(source, sink) and\n        ((fc.getArgument( 5-1) = source.getNode().asDefiningArgument() and  5-1 >= 0) or\n          (fc = source.getNode().asExpr() and  5-1 = -1)\n        )\n      )\n      and not (fc.getArgument( 5-1).isConstant() and  5-1>=0)\nselect fc.getLocation()\n"
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