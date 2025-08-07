"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[513043],{

/***/ 11891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_projects_glib_dbus_message_get_sender_md_ab9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-projects-glib-dbus-message-get-sender-md-ab9.json
const site_docs_projects_glib_dbus_message_get_sender_md_ab9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/glib/dbus_message_get_sender","title":"dbus_message_get_sender","description":"API Overview","source":"@site/docs/projects/glib/dbus_message_get_sender.md","sourceDirName":"projects/glib","slug":"/projects/glib/dbus_message_get_sender","permalink":"/vulrule/projects/glib/dbus_message_get_sender","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"glib Rules","permalink":"/vulrule/projects/glib/"},"next":{"title":"ldap Rules","permalink":"/vulrule/projects/ldap/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/projects/glib/dbus_message_get_sender.md


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
        children: "dbus_message_get_sender"
      }), " is an API in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "glib"
      }), ". This rule belongs to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "retVal check"
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
        children: "the unique name of the sender or NULL"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Tags: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "retVal check"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Parameter Index: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "N/A"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["CWE Type: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CWE-253"
          })]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-code",
      children: "Rule Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import semmle.code.cpp.dataflow.DataFlow\nclass TestConfiguration extends DataFlow::Configuration {\n    TestConfiguration() { this = \"TestConfiguration\" }\n    override predicate isSource(DataFlow::Node source) {\n        exists(FunctionCall fc,  MacroInvocation mi |\n            (fc.getTarget().hasQualifiedName(\"dbus_message_get_sender\") or (\n                mi.getMacroName() = \"dbus_message_get_sender\"\n                and fc.getTarget().hasName(mi.getMacro().getBody())\n              )\n            )\n            and fc = source.asExpr()\n        )\n    }\n    override predicate isSink(DataFlow::Node sink) {\n        exists(| sink.asExpr().getEnclosingStmt() instanceof IfStmt\n            and (sink.asExpr().getParent() instanceof ComparisonOperation\n                or sink.asExpr().getParent() instanceof NotExpr\n                or sink.asExpr().getParent() instanceof IfStmt\n            )\n        )\n    }\n}\n\npredicate equality(Expr sink){\n    exists(ComparisonOperation cmp| sink.getParent() instanceof ComparisonOperation and\n        cmp = sink.getParent().(ComparisonOperation) and\n        (cmp.getOperator().toString() = \"==\" or cmp.getOperator().toString() = \"!=\") and not (\n            (cmp.getLeftOperand() = sink and (cmp.getRightOperand().toString().toInt() = max(int f | f in []) or cmp.getRightOperand().toString().toInt() = min(int f | f in [])))\n            or\n            (cmp.getRightOperand() = sink and (cmp.getLeftOperand().toString().toInt() = max(int f | f in []) or cmp.getLeftOperand().toString().toInt() = min(int f | f in [])))\n        )\n    )\n}\n\npredicate less_than_equal(Expr sink){\n    exists(ComparisonOperation cmp| 0 = 1 and sink.getParent() instanceof ComparisonOperation and\n        cmp = sink.getParent().(ComparisonOperation) and (\n            (cmp.getOperator().toString() = \"<\" and not (\n                (cmp.getLeftOperand() = sink and cmp.getRightOperand().toString().toInt() = 0 ) or\n                (cmp.getRightOperand() = sink and cmp.getLeftOperand().toString().toInt() = 0 )\n                )\n            ) or (\n            cmp.getOperator().toString() = \"<=\" and not (\n                (cmp.getLeftOperand() = sink and cmp.getRightOperand().toString().toInt() = 0-1 ) or\n                (cmp.getRightOperand() = sink and cmp.getLeftOperand().toString().toInt() = 0-1 )\n                )\n            )\n        )\n    )\n}\n\npredicate more_than_equal(Expr sink){\n    exists(ComparisonOperation cmp| 0 = 1 and sink.getParent() instanceof ComparisonOperation and\n        cmp = sink.getParent().(ComparisonOperation) and (\n            (cmp.getOperator().toString() = \">\" and not (\n                (cmp.getLeftOperand() = sink and cmp.getRightOperand().toString().toInt() = 0 ) or\n                (cmp.getRightOperand() = sink and cmp.getLeftOperand().toString().toInt() = 0 )\n                )\n            ) or (\n            cmp.getOperator().toString() = \">=\" and not (\n                (cmp.getLeftOperand() = sink and cmp.getRightOperand().toString().toInt() = 0+1 ) or\n                (cmp.getRightOperand() = sink and cmp.getLeftOperand().toString().toInt() = 0+1 )\n                )\n            )\n        )\n    )\n}\n\npredicate not_qual(Expr sink){\n    exists(| sink.getParent() instanceof NotExpr and\n        not (max(int f | f in []) = 0 or min(int f | f in []) = 0)\n    )\n}\n\npredicate org_value(Expr sink) {\n    exists(|sink.getParent() instanceof IfStmt and\n        not (max(int f | f in []) = 0 or min(int f | f in []) = 0)\n    )\n}\nfrom TestConfiguration cfg, Expr source, Expr sink, FunctionCall fc, MacroInvocation mi\nwhere (fc.getTarget().hasQualifiedName(\"dbus_message_get_sender\") or (\n        mi.getMacroName() = \"dbus_message_get_sender\"\n        and fc.getTarget().hasName(mi.getMacro().getBody())\n    ))\n    and (\n        //wrongly check\n        cfg.hasFlow(DataFlow::exprNode(source), DataFlow::exprNode(sink))\n        and fc = source\n        and (equality(sink) or less_than_equal(sink) or more_than_equal(sink) or not_qual(sink) or org_value(sink) )\n      )\nselect fc.getLocation()\n--------------------------------------------------------\n========================================================\n========================================================\nimport semmle.code.cpp.dataflow.DataFlow\nclass TestConfiguration extends DataFlow::Configuration {\n    TestConfiguration() { this = \"TestConfiguration\" }\n    override predicate isSource(DataFlow::Node source) {\n        exists(FunctionCall fc,  MacroInvocation mi |\n            (fc.getTarget().hasQualifiedName(\"dbus_message_get_sender\") or (\n                mi.getMacroName() = \"dbus_message_get_sender\"\n                and fc.getTarget().hasName(mi.getMacro().getBody())\n              )\n            )\n            and fc = source.asExpr()\n        )\n    }\n    override predicate isSink(DataFlow::Node sink) {\n        exists(| sink.asExpr().getEnclosingStmt() instanceof IfStmt\n            and (sink.asExpr().getParent() instanceof ComparisonOperation\n                or sink.asExpr().getParent() instanceof NotExpr\n                or sink.asExpr().getParent() instanceof IfStmt\n            )\n        )\n    }\n}\nfrom TestConfiguration cfg, FunctionCall fc, MacroInvocation mi\n//function not checked\nwhere (fc.getTarget().hasQualifiedName(\"dbus_message_get_sender\") or (\n        mi.getMacroName() = \"dbus_message_get_sender\"\n        and fc.getTarget().hasName(mi.getMacro().getBody())\n    ))\n    and (\n        (fc instanceof ExprInVoidContext)\n        or not exists(Expr source1, Expr sink1|cfg.hasFlow(DataFlow::exprNode(source1), DataFlow::exprNode(sink1)) and fc = source1)\n    )\nselect fc.getLocation()\n"
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



/***/ }),

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


/***/ })

}]);