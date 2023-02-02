"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./theme/theme.ts

// THIS OBJECT SHOULD BE SIMILAR TO ../tailwind.config.js
const themeConstants = {
    paper: "#F9F9F9",
    primary: {
        main: "#fff",
        dark: "#e5e5e5"
    },
    secondary: {
        main: "#212121",
        dark: "#3A3A3A"
    },
    error: {
        main: "#b22222",
        dark: "#8b0000"
    },
    fg: {
        main: "#fff",
        dark: "rgba(55, 65, 81, 1)"
    },
    breakpoints: {
        xs: 0,
        mb: 350,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
    }
};
// Check here for more configurations https://material-ui.com/customization/default-theme/
const theme = (0,styles_namespaceObject.createTheme)({
    palette: {
        primary: themeConstants.primary,
        secondary: themeConstants.secondary,
        background: {
            paper: themeConstants.paper
        },
        text: {
            primary: themeConstants.fg.main,
            secondary: themeConstants.fg.dark
        },
        error: themeConstants.error
    },
    breakpoints: {
        values: themeConstants.breakpoints
    }
});


;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(710));
module.exports = __webpack_exports__;

})();