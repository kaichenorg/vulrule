"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[613267],{

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

/***/ 860874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_projects_libpcap_pcap_activate_pcap_create_md_6a3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-projects-libpcap-pcap-activate-pcap-create-md-6a3.json
const site_docs_projects_libpcap_pcap_activate_pcap_create_md_6a3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/libpcap/pcap_activate pcap_create","title":"pcap_activate pcap_create","description":"API Overview","source":"@site/docs/projects/libpcap/pcap_activate pcap_create.md","sourceDirName":"projects/libpcap","slug":"/projects/libpcap/pcap_activate pcap_create","permalink":"/vulrule/projects/libpcap/pcap_activate pcap_create","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"libpcap Rules","permalink":"/vulrule/projects/libpcap/"},"next":{"title":"pcap_breakloop","permalink":"/vulrule/projects/libpcap/pcap_breakloop"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/projects/libpcap/pcap_activate pcap_create.md


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
    br: "br",
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
        children: "pcap_activate pcap_create"
      }), " is an API in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "libpcap"
      }), ". This rule belongs to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "version-compat"
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
        children: ["pcap_create() and pcap_activate() were not available in versions of libpcap prior to 1.0 if you are writing an application that must work on versions of libpcap prior to 1.0, either use pcap_open_live() to get a handle for a live capture or, if you want to be able to use the additional capabilities offered by using pcap_create() and pcap_activate(), use an autoconf(1) script or some other configuration script to check whether the libpcap 1.0 APIs are available and use them only if they are.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.tcpdump.org/manpages/pcap.3pcap.html",
          children: "https://www.tcpdump.org/manpages/pcap.3pcap.html"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Tags: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "version-compat"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Parameter Index: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "N/A"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["CWE Type: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "N/A"
          })]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rule-code",
      children: "Rule Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import cpp\n\nfrom FunctionCall fc, PreprocessorDirective p\nwhere fc.getTarget().hasQualifiedName(\"pcap_create\")\n      and ((p instanceof PreprocessorIf\n        and p.getLocation().getFile().toString() = p.getLocation().getFile().toString()\n        and not (p.(PreprocessorIf).getEndIf().getLocation().getStartLine() > p.getLocation().getStartLine()\n        and p.(PreprocessorIf).getLocation().getStartLine() < p.getLocation().getStartLine()))\n        or\n        (p instanceof PreprocessorElif\n          and p.getLocation().getFile().toString() = p.getLocation().getFile().toString()\n          and not (p.(PreprocessorElif).getEndIf().getLocation().getStartLine() > p.getLocation().getStartLine()\n          and p.(PreprocessorElif).getLocation().getStartLine() < p.getLocation().getStartLine()))\n        or\n        (p instanceof PreprocessorElse\n          and p.getLocation().getFile().toString() = p.getLocation().getFile().toString()\n          and not (p.(PreprocessorElse).getEndIf().getLocation().getStartLine() > p.getLocation().getStartLine()\n          and p.(PreprocessorElse).getLocation().getStartLine() < p.getLocation().getStartLine()))\n        or\n        (p instanceof PreprocessorIfdef\n          and p.getLocation().getFile().toString() = p.getLocation().getFile().toString()\n          and not (p.(PreprocessorIfdef).getEndIf().getLocation().getStartLine() > p.getLocation().getStartLine()\n          and p.(PreprocessorIfdef).getLocation().getStartLine() < p.getLocation().getStartLine()))\n        or\n          (p instanceof PreprocessorIfndef\n            and p.getLocation().getFile().toString() = p.getLocation().getFile().toString()\n            and not (p.(PreprocessorIfndef).getEndIf().getLocation().getStartLine() > p.getLocation().getStartLine()\n            and p.(PreprocessorIfndef).getLocation().getStartLine() < p.getLocation().getStartLine()))\n      )\nselect fc.getLocation()\n"
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