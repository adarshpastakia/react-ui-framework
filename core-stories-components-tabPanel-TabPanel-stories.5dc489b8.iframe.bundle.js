(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[7355],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./packages/core/stories/components/tabPanel/TabPanel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_TabPanel:()=>_TabPanel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_test__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_4__.Kp,subcomponents:{Tab:_src__WEBPACK_IMPORTED_MODULE_4__.oz},title:"@core/components/TabPanel",parameters:{layout:"fullscreen",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/TabPanel.test.tsx"]},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"min-h-[600px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.LM,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})})]},_TabPanel={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.Kp,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.oz,{id:"1",label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.commerce.product(),onClose:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("onClose"),className:"w-32",actions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.W1,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{label:"Action..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{label:"Action..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{label:"Action..."})]}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.UC,{children:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.paragraphs(9)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.oz,{id:"2",label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.commerce.product(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.UC,{children:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.paragraphs(9)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.oz,{id:"3",label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.commerce.product(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.UC,{children:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.paragraphs(9)})})]}),args:{onBeforeChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.fn)(),onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.fn)()}},__namedExportsOrder=["_TabPanel"];_TabPanel.parameters={..._TabPanel.parameters,docs:{..._TabPanel.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <TabPanel {...args}>\n        <div />\n        <Tab id="1" label={faker.commerce.product()} onClose={action("onClose")} className="w-32" actions={<Menu>\n              <MenuItem label="Action..." />\n              <MenuItem label="Action..." />\n              <MenuItem label="Action..." />\n            </Menu>}>\n          <Content>{faker.lorem.paragraphs(9)}</Content>\n        </Tab>\n        <Tab id="2" label={faker.commerce.product()}>\n          <Content>{faker.lorem.paragraphs(9)}</Content>\n        </Tab>\n        <Tab id="3" label={faker.commerce.product()}>\n          <Content>{faker.lorem.paragraphs(9)}</Content>\n        </Tab>\n      </TabPanel>;\n  },\n  args: {\n    onBeforeChange: fn(),\n    onChange: fn()\n  }\n}',..._TabPanel.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);