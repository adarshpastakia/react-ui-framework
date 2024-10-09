"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[334],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./packages/core/stories/components/notifications/Message.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Message:()=>_Message,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),_react_fabric_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/esm/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./packages/core/src/overlays/index.ts").QB,title:"@core/components/Notifications",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Message.test.tsx"]},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"max-w-2xl p-4 flex gap-2 flex-wrap",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},_Message={render:args=>{const{showMessage}=(0,_react_fabric_core__WEBPACK_IMPORTED_MODULE_2__.w2)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.$n,{onClick:()=>showMessage({...args}).then((0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("messageReturn")),children:"Simple Message"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.$n,{onClick:()=>showMessage({...args,color:"danger"}).then((0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("messageReturn")),children:"Error Message"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.$n,{onClick:()=>showMessage({...args,color:"success"}).then((0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("messageReturn")),children:"Success Message"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.$n,{onClick:()=>showMessage({...args,color:"warning"}).then((0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("messageReturn")),children:"Warning Message"})]})},args:{title:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.commerce.productAdjective(),message:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.commerce.productName()}},__namedExportsOrder=["_Message"];_Message.parameters={..._Message.parameters,docs:{..._Message.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const {\n      showMessage\n    } = useNotificationService();\n    return <Fragment>\n        <Button onClick={() => showMessage({\n        ...args\n      }).then(action("messageReturn"))}>\n          Simple Message\n        </Button>\n        <Button onClick={() => showMessage({\n        ...args,\n        color: "danger"\n      }).then(action("messageReturn"))}>\n          Error Message\n        </Button>\n        <Button onClick={() => showMessage({\n        ...args,\n        color: "success"\n      }).then(action("messageReturn"))}>\n          Success Message\n        </Button>\n        <Button onClick={() => showMessage({\n        ...args,\n        color: "warning"\n      }).then(action("messageReturn"))}>\n          Warning Message\n        </Button>\n      </Fragment>;\n  },\n  args: {\n    title: faker.commerce.productAdjective(),\n    message: faker.commerce.productName()\n  }\n}',..._Message.parameters?.docs?.source}}}}}]);