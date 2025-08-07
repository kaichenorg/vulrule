"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[870383],{

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

/***/ 126934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_zh_docusaurus_plugin_content_docs_current_projects_libpcap_pcap_activate_pcap_create_md_13d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-zh-docusaurus-plugin-content-docs-current-projects-libpcap-pcap-activate-pcap-create-md-13d.json
const site_i_18_n_zh_docusaurus_plugin_content_docs_current_projects_libpcap_pcap_activate_pcap_create_md_13d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"projects/libpcap/pcap_activate pcap_create","title":"pcap_activate pcap_create","description":"API 概述","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/projects/libpcap/pcap_activate pcap_create.md","sourceDirName":"projects/libpcap","slug":"/projects/libpcap/pcap_activate pcap_create","permalink":"/vulrule/zh/projects/libpcap/pcap_activate pcap_create","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"libpcap","permalink":"/vulrule/zh/projects/libpcap/"},"next":{"title":"pcap_breakloop","permalink":"/vulrule/zh/projects/libpcap/pcap_breakloop"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./i18n/zh/docusaurus-plugin-content-docs/current/projects/libpcap/pcap_activate pcap_create.md


const frontMatter = {};
const contentTitle = 'pcap_activate pcap_create';

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
    br: "br",
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
        id: "pcap_activate-pcap_create",
        children: "pcap_activate pcap_create"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-概述",
      children: "API 概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "pcap_activate pcap_create"
      }), " 是 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "libpcap"
      }), " 中的一个API。该规属于", (0,jsx_runtime.jsx)(_components.strong, {
        children: "version-compat"
      }), " 类型。该规则是使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../tools/Advance",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advance"
        })
      }), " 生成的。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则描述",
      children: "规则描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["pcap_create() and pcap_activate() were not available in versions of libpcap prior to 1.0 if you are writing an application that must work on versions of libpcap prior to 1.0, either use pcap_open_live() to get a handle for a live capture or, if you want to be able to use the additional capabilities offered by using pcap_create() and pcap_activate(), use an autoconf(1) script or some other configuration script to check whether the libpcap 1.0 APIs are available and use them only if they are.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.tcpdump.org/manpages/pcap.3pcap.html",
          children: "https://www.tcpdump.org/manpages/pcap.3pcap.html"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["标签：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "version-compat"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["参数下标：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "N/A"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["CWE类别：", (0,jsx_runtime.jsx)(_components.strong, {
          children: "N/A"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则代码",
      children: "规则代码"
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