"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[648],{"./packages/core/stories/1.typography/Mark.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Mark:()=>_Mark,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.CU,title:"@core/Typography",parameters:{controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Typpography.test.tsx"]},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"max-w-2xl p-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},paras=_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.sentences(10)+"\n\n"+_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Px.lorem.sentences(10),_Mark={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.EY,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.CU,{...args,children:paras})}),args:{mark:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.helpers.arrayElements(paras.replaceAll("\n","").split(" ").filter(Boolean),9).map((t=>[t,_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.color.rgb()]))}},__namedExportsOrder=["_Mark"];_Mark.parameters={..._Mark.parameters,docs:{..._Mark.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <Text>\n        <Mark {...args}>{paras}</Mark>\n      </Text>;\n  },\n  args: {\n    mark: marks\n  }\n}",..._Mark.parameters?.docs?.source}}}}}]);