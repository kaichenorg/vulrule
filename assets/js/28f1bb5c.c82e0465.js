"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[666814],{

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

/***/ 488344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_projects_libpcap_pcap_fileno_md_28f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-projects-libpcap-pcap-fileno-md-28f.json
const site_docs_projects_libpcap_pcap_fileno_md_28f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/libpcap/pcap_fileno","title":"pcap_fileno","description":"API Overview","source":"@site/docs/projects/libpcap/pcap_fileno.md","sourceDirName":"projects/libpcap","slug":"/projects/libpcap/pcap_fileno","permalink":"/vulrule/projects/libpcap/pcap_fileno","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"pcap_dump_open","permalink":"/vulrule/projects/libpcap/pcap_dump_open"},"next":{"title":"pcap_findalldevs","permalink":"/vulrule/projects/libpcap/pcap_findalldevs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/projects/libpcap/pcap_fileno.md


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
        children: "pcap_fileno"
      }), " is an API in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "libpcap"
      }), ". This rule belongs to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "return value check"
      }), " type. This rule is generated using ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../tools/Advance",
        children: "Advance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-description",
      children: "Rule Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If p refers to a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "savefile'' that was opened using functions such as pcap_open_offline(3PCAP) or pcap_fopen_offline(3PCAP), a "
        }), "dead'' pcap_t opened using pcap_open_dead(3PCAP), or a pcap_t that was created with pcap_create() but that has not yet been activated with pcap_activate(), it returns PCAP_ERROR. ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.tcpdump.org/manpages/pcap_fileno.3pcap.html",
          children: "https://www.tcpdump.org/manpages/pcap_fileno.3pcap.html"
        }), "\nThe fstat() function shall obtain information about an open file associated with the file descriptor fildes, and shall write it to the area pointed to by buf.", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://man7.org/linux/man-pages/man3/fstat.3p.html",
          children: "http://man7.org/linux/man-pages/man3/fstat.3p.html"
        }), "\npcap_fileno对pcap_open_offline创建的savefile会返回error，没有检查就作为另一个api的输入"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Tags: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "return value check"
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
        children: "import cpp\nimport semmle.code.cpp.customs.non_zero\nimport semmle.code.cpp.dataflow.TaintTracking\nimport semmle.code.cpp.dataflow.DataFlow\nimport semmle.code.cpp.security.Security\nimport DataFlow::PathGraph\n\nclass TestConfiguration extends TaintTracking::Configuration {\n  TestConfiguration() { this = \"TestConfiguration\" }\n\n  override predicate isSource(DataFlow::Node source) {\n    exists(FunctionCall fc |\n      fc.getTarget().hasName(\"pcap_fileno\")\n      and fc = source.asExpr()\n    )\n  }\n\n  override predicate isSink(DataFlow::Node sink) {\n    exists(| sink.asExpr().getEnclosingStmt() instanceof IfStmt)\n  }\n}\n\nfrom FunctionCall fc, TestConfiguration cfg, DataFlow::PathNode source, DataFlow::PathNode sink\n\nwhere fc.getTarget().hasQualifiedName(\"pcap_fileno\")\n    and not exists(|cfg.hasFlowPath(source, sink) and source.getNode().asExpr() = fc)\nselect fc.getLocation()\n"
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