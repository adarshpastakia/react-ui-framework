"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[9690],{"./packages/core/stories/1.typography/Text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Clamped:()=>Clamped,_Text:()=>_Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.EY,subcomponents:{Title:_src__WEBPACK_IMPORTED_MODULE_2__.hE,Abbr:_src__WEBPACK_IMPORTED_MODULE_2__.id,Mark:_src__WEBPACK_IMPORTED_MODULE_2__.CU,Link:_src__WEBPACK_IMPORTED_MODULE_2__.N_,Copy:_src__WEBPACK_IMPORTED_MODULE_2__.QR},title:"@core/Typography",parameters:{controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Typpography.test.tsx"]},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"max-w-2xl p-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},para=_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.sentences(5)+"\n\n"+_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Px.lorem.sentences(5),paras=_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.sentences(10)+"\n\n"+_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Px.lorem.sentences(10),_Text={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.EY,{...args,children:para}),args:{className:"mixed-lang"}},Clamped={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.EY,{...args,children:paras}),args:{clamp:5,className:"mixed-lang"}},__namedExportsOrder=["_Text","Clamped"];_Text.parameters={..._Text.parameters,docs:{..._Text.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Text {...args}>{para}</Text>;\n  },\n  args: {\n    className: "mixed-lang"\n  }\n}',..._Text.parameters?.docs?.source}}},Clamped.parameters={...Clamped.parameters,docs:{...Clamped.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Text {...args}>{paras}</Text>;\n  },\n  args: {\n    clamp: 5,\n    className: "mixed-lang"\n  }\n}',...Clamped.parameters?.docs?.source}}}}}]);