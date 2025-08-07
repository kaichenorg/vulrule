"use strict";
(self["webpackChunkvulrule"] = self["webpackChunkvulrule"] || []).push([[683976],{

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

/***/ 367879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_intro_md_0e3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intro-md-0e3.json
const site_docs_intro_md_0e3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"intro","title":"Intro","description":"Project Introduction","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/vulrule/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"intro","title":"Intro","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Projects","permalink":"/vulrule/category/projects"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/intro.md


const frontMatter = {
	id: 'intro',
	title: 'Intro',
	sidebar_position: 1
};
const contentTitle = 'About Vulnerability Rule Library';

const assets = {

};



const toc = [{
  "value": "Project Introduction",
  "id": "project-introduction",
  "level": 2
}, {
  "value": "Our Mission",
  "id": "our-mission",
  "level": 2
}, {
  "value": "Project Features",
  "id": "project-features",
  "level": 2
}, {
  "value": "How to Contribute",
  "id": "how-to-contribute",
  "level": 2
}, {
  "value": "Contact Us",
  "id": "contact-us",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "about-vulnerability-rule-library",
        children: "About Vulnerability Rule Library"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-introduction",
      children: "Project Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Vulnerability Rule Library is an open-source project dedicated to helping developers identify and avoid common security vulnerabilities. We collect, organize, and analyze security vulnerability patterns in various programming languages and commonly used libraries, providing corresponding preventive measures and best practices."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "our-mission",
      children: "Our Mission"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our mission is to improve security awareness in the software development process by providing a comprehensive and systematic security knowledge base, reducing the occurrence of security vulnerabilities, and contributing to building a more secure software ecosystem."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-features",
      children: "Project Features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comprehensive Vulnerability Coverage"
        }), ": Covers various programming languages and commonly used libraries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Practical Rule Guidelines"
        }), ": Each rule comes with detailed explanations and example code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous Updates"
        }), ": Tracks the latest security research and vulnerability reports"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open Source Sharing"
        }), ": Community contributions and improvements are welcome"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-contribute",
      children: "How to Contribute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We welcome various forms of contributions, including but not limited to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submitting new vulnerability rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improving the descriptions and examples of existing rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reporting bugs and suggesting improvements"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Improving documentation and translations\nPlease visit our ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/kaichenorg/vulrule",
          children: "GitHub repository"
        }), " for more ways to contribute."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contact-us",
      children: "Contact Us"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you have any questions or suggestions, please contact us through the following methods:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub Issues: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/kaichenorg/vulrule/issues",
          children: "Submit an Issue"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Email: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:kaichenorg@gmail.com",
          children: "kaichenorg@gmail.com"
        }), "\nThank you for your attention and support to the Vulnerability Rule Library!"]
      }), "\n"]
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