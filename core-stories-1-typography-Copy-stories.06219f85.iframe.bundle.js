"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[7844],{"./packages/core/stories/1.typography/Copy.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Copy:()=>_Copy,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.QR,title:"@core/Typography",parameters:{controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Copy.test.tsx"]},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"max-w-2xl p-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},paras=_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.sentences(10)+"\n\n"+_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Px.lorem.sentences(10),_Copy={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.EY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.QR,{...args,text:paras}),paras]}),args:{size:"sm"}},__namedExportsOrder=["_Copy"];_Copy.parameters={..._Copy.parameters,docs:{..._Copy.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Text>\n        <Copy {...args} text={paras} />\n        {paras}\n      </Text>;\n  },\n  args: {\n    size: "sm"\n  }\n}',..._Copy.parameters?.docs?.source}}}}}]);