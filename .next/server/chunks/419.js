exports.id = 419;
exports.ids = [419];
exports.modules = {

/***/ 9436:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9233));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7835))

/***/ }),

/***/ 7835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Contact: () => (/* binding */ Contact),
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   Navigation: () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5842);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9450);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9240);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5685);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1068);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5419);
/* harmony import */ var base_app_me_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4034);
/* harmony import */ var base_app_resume_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2380);
/* __next_internal_client_entry_do_not_use__ Header,Navigation,Contact,Footer auto */ 




// ⍥⍜⌒⌓⌑⌗⌁✸✺❊✻❋❇︎❍❑✦✧✸✤△◁►☞◇◦●◻︎◼︎◘◆⚑✚☺︎☻♦︎♥︎♣︎☾☁︎☀︎☼♡⚘⏥✉︎⚡︎
function Header() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        children: [
            "✸",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .r, {
                as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
                href: "/",
                children: base_app_me_data__WEBPACK_IMPORTED_MODULE_2__.me.name
            }),
            "✦"
        ]
    });
}
function Navigation() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__/* .HStack */ .U, {
            spacing: 24,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .r, {
                    as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
                    target: "_blank",
                    href: base_app_resume_data__WEBPACK_IMPORTED_MODULE_3__/* .drive */ .Ag,
                    children: "Resume"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .r, {
                    as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
                    href: "/emojis",
                    children: "Emojis"
                })
            ]
        })
    });
}
function Contact() {
    const { onCopy, hasCopied } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__/* .useClipboard */ .V)(base_app_me_data__WEBPACK_IMPORTED_MODULE_2__/* .contact */ .P.email);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__/* .HStack */ .U, {
            spacing: 24,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .x, {
                    fontSize: "xx-large",
                    children: "☞"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .r, {
                    href: base_app_me_data__WEBPACK_IMPORTED_MODULE_2__/* .contact */ .P.linkedIn.link,
                    target: "_blank",
                    children: base_app_me_data__WEBPACK_IMPORTED_MODULE_2__/* .contact */ .P.linkedIn.short
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .r, {
                    href: base_app_me_data__WEBPACK_IMPORTED_MODULE_2__/* .contact */ .P.github.link,
                    target: "_blank",
                    children: base_app_me_data__WEBPACK_IMPORTED_MODULE_2__/* .contact */ .P.github.short
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__/* .Tooltip */ .u, {
                    label: hasCopied ? "Copied!" : "Copy Email",
                    closeDelay: 500,
                    placement: "right",
                    closeOnScroll: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
                        fontSize: "xx-large",
                        onClick: onCopy,
                        children: "✉︎"
                    })
                })
            ]
        })
    });
}
function Footer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .x, {
                fontSize: "xx-large",
                children: "✤"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Have a good day"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .x, {
                fontSize: "xx-large",
                children: "❋"
            })
        ]
    });
}



/***/ }),

/***/ 4034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ contact),
/* harmony export */   me: () => (/* binding */ me)
/* harmony export */ });
const me = {
    name: "Laura Addams",
    nickname: "Laura",
    title: "software engineer",
    intro: "Hey! I'm a Software engineer with a frontend focus who builds intuitive, accessible, and scalable applications.",
    loves: "I love ambiguous projects and building engineering cultures rich in developer empathy, collaboration, and learning."
};
const contact = {
    email: "laura.mae.addams@gmail.com",
    linkedIn: {
        name: "LinkedIn",
        short: "linkedin.com/in/lauraaddams",
        link: "https://www.linkedin.com/in/lauraaddams/"
    },
    github: {
        name: "Github",
        short: "github.com/lauraaddams",
        link: "https://github.com/LauraAddams/"
    },
    codepen: {
        name: "Codepen",
        short: "codepen.io/laurarobertson",
        link: "https://codepen.io/laurarobertson"
    }
};



/***/ }),

/***/ 9233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Providers: () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/next-js/dist/chunk-U7SQ5CYR.mjs + 1 modules
var chunk_U7SQ5CYR = __webpack_require__(3282);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chunk-QAITB7GG.mjs + 22 modules
var chunk_QAITB7GG = __webpack_require__(1202);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/theme-utils/dist/chunk-LIR5QAZY.mjs + 1 modules
var chunk_LIR5QAZY = __webpack_require__(7749);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/theme-tools/dist/chunk-PQDS7J5G.mjs
var chunk_PQDS7J5G = __webpack_require__(3002);
;// CONCATENATED MODULE: ./app/theme.ts


const colors = {
    hotpink: "#ff66c4",
    limon: "#dae018",
    pepper: "#f52b09",
    creme: "#f8f3ed",
    blackish: "#171613"
};
const styles = {
    global: (props)=>({
            body: {
                color: (0,chunk_PQDS7J5G/* mode */.x)("blackish", "creme")(props),
                bg: (0,chunk_PQDS7J5G/* mode */.x)("creme", "blackish")(props),
                minHeight: "100vh",
                border: "5px solid black",
                position: "relative"
            },
            header: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "var(--chakra-fontSizes-4xl)",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                pl: 1,
                pr: 1
            },
            nav: {
                position: "absolute",
                writingMode: "vertical-lr",
                fontWeight: "bold",
                textTransform: "uppercase",
                lineHeight: 10,
                right: 0,
                pt: 1
            },
            aside: {
                position: "absolute",
                writingMode: "vertical-lr",
                fontWeight: "bold",
                textTransform: "uppercase",
                lineHeight: 10
            },
            main: {
                ml: 10,
                mr: 10,
                border: "5px solid black",
                minHeight: "calc(100vh - 125px)"
            },
            footer: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                pl: 1,
                pr: 1
            }
        })
};
const fonts = {
    heading: "var(--font-josefin)",
    body: "`'Cabin', sans-serif`"
};
const theme = (0,chunk_LIR5QAZY/* extendTheme */.B1)({
    colors,
    fonts,
    styles
});

;// CONCATENATED MODULE: ./app/providers.tsx
// Chakra UI only works in client-side components
/* __next_internal_client_entry_do_not_use__ Providers auto */ 



function Providers({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(chunk_U7SQ5CYR/* CacheProvider */.n, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_QAITB7GG/* ChakraProvider */.x, {
            resetCSS: true,
            theme: theme,
            children: children
        })
    });
}


/***/ }),

/***/ 2380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ag: () => (/* binding */ drive)
/* harmony export */ });
/* unused harmony exports summary, technologies, experience, education */
const drive = "https://drive.google.com/file/d/152TbO2e7utou0uFZV6dvTUcATvHqmI_q/view?usp=sharing";
const summary = "Senior software engineer with a frontend-focus and design background. Interested in creating intuitive, accessible, and scalable applications. Has a love for ambiguous projects and building engineering cultures rich in learning, collaboration, and developer empathy.";
const technologies = {
    programming: [
        "TypeScript",
        "JavaScript",
        "React",
        "CSS",
        "HTML",
        "Python",
        "Next.Js",
        "Redux",
        "Redux Saga",
        "Ruby",
        "Ruby on Rails",
        "Draft.Js"
    ],
    tooling: [
        "Git",
        "Jira",
        "Postman",
        "CircleCI",
        "Datadog",
        "Sentry",
        "Photoshop",
        "Figma",
        "Sketch",
        "Premiere Pro",
        "Illustrator"
    ]
};
const experience = [
    {
        company: "Koala",
        title: "Engineering Manager",
        date: "2023 - Present",
        description: [
            "Managed 3 Senior Engineers; maintained efficiency and professional growth during a period of organizational change.",
            "Established engineering-wide standards for code reviews, technical designs, and knowledge sharing between two teams of 10 engineers."
        ],
        additional: {
            title: "Senior Software Engineer",
            date: "2022 - 2023",
            description: [
                "Developed architecture for implementations of dynamically-generated UI features using schema-powered JSON.",
                "Maintained a white-label restaurant web app with 1M+ weekly users.",
                "Designed and built features for internal applications including a version history tracker, XML viewer, and an AWS DNS certificate creation flow.",
                "Identified feature opportunities to assist customer support teams, reducing the need for engineering involvement on tickets by 35%.",
                "Improved developer efficiency and code quality with automated tooling."
            ]
        },
        technologies: [
            "Typescript",
            "React",
            "NextJS"
        ]
    },
    {
        company: "Textio",
        title: "Software Engineer",
        date: "2018 - 2021",
        description: [
            "Built frontend interfaces for a rich text editor available on web, mobile, tablet, and a Chrome extension.",
            "Engineer lead for a feature on detecting age bias in job postings; collaborated with NLP data scientists and designers to display complicated data on an existing platform with technical limitations.",
            "Migrated company blog from Medium to a self-hosted solution.",
            "Created a facilitated learning program for an Engineer team of 50+ improving cross-team collaboration, coaching, and knowledge sharing."
        ],
        technologies: [
            "Typescript",
            "React",
            "Redux",
            "AWS",
            "JQuery",
            "Python"
        ]
    },
    {
        company: "Amazon",
        title: "Software Development Engineer",
        date: "2018",
        description: [
            "Full ownership of a customer-facing detail page for a global enterprise-scale environment using Java MVC architecture and React.",
            "Led UX/UI design. Validated through user testing with interactive mocks."
        ],
        technologies: [
            "Java",
            "Typescript",
            "SASS",
            "IntelliJ",
            "Axure"
        ]
    }
];
const education = {
    company: "Ada Developers Academy",
    title: "Full Stack Web Development",
    date: "2018",
    description: [
        `Ada Developers Academy is a training program located in Seattle,
  Washington for women and gender diverse people who want to become
  software developers. Ada is tuition-free and is comprised of 6
  months of full-time classroom training followed by 5 months in a
  paid industry internship. Major sponsors include Google, Amazon,
  Microsoft and Nordstrom.`
    ]
};



/***/ }),

/***/ 5251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Cabin","arguments":[{"subsets":["latin"],"weight":["400","700"]}],"variableName":"cabin"}
var layout_tsx_import_Cabin_arguments_subsets_latin_weight_400_700_variableName_cabin_ = __webpack_require__(1245);
var layout_tsx_import_Cabin_arguments_subsets_latin_weight_400_700_variableName_cabin_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Cabin_arguments_subsets_latin_weight_400_700_variableName_cabin_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Josefin_Sans","arguments":[{"subsets":["latin"],"weight":["700"],"variable":"--font-josefin"}],"variableName":"josefin"}
var layout_tsx_import_Josefin_Sans_arguments_subsets_latin_weight_700_variable_font_josefin_variableName_josefin_ = __webpack_require__(1575);
var layout_tsx_import_Josefin_Sans_arguments_subsets_latin_weight_700_variable_font_josefin_variableName_josefin_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Josefin_Sans_arguments_subsets_latin_weight_700_variable_font_josefin_variableName_josefin_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/providers.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/laurarobertson/Desktop/Code/lauraaddams.github.io/app/providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

;// CONCATENATED MODULE: ./app/frame.tsx

const frame_proxy = (0,module_proxy.createProxy)(String.raw`/Users/laurarobertson/Desktop/Code/lauraaddams.github.io/app/frame.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: frame_esModule, $$typeof: frame_$$typeof } = frame_proxy;
const frame_default_ = frame_proxy.default;

const frame_e0 = frame_proxy["Header"];

const e1 = frame_proxy["Navigation"];

const e2 = frame_proxy["Contact"];

const e3 = frame_proxy["Footer"];

;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "Laura Addams | Software Engineer",
    description: "I make things, and even stuff!"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: `${(layout_tsx_import_Cabin_arguments_subsets_latin_weight_400_700_variableName_cabin_default()).className} ${(layout_tsx_import_Josefin_Sans_arguments_subsets_latin_weight_700_variable_font_josefin_variableName_josefin_default()).variable}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(frame_e0, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(e2, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(e1, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                        children: children
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(e3, {})
            ]
        })
    });
}


/***/ }),

/***/ 5080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "icon.ico")

    return [{
      ...imageData,
      url: imageUrl + "?47cfac5db5a7a19e",
    }]
  });

/***/ })

};
;