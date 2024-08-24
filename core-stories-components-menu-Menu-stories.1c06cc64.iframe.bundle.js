(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[6071],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./packages/core/stories/components/menu/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Minimal:()=>Minimal,_ContextMenu:()=>_ContextMenu,_Menu:()=>_Menu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_test__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_4__.W1,subcomponents:{MenuItem:_src__WEBPACK_IMPORTED_MODULE_4__.Dr,MenuSection:_src__WEBPACK_IMPORTED_MODULE_4__.H9,ContextMenu:_src__WEBPACK_IMPORTED_MODULE_4__.tz},title:"@core/components/Menu",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Menu.test.tsx"]},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"p-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},_Menu={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.W1,{...args,className:"outline rounded-capped min-h-80",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"newItem",label:"New Menu Item",badge:45}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.H9,{label:"Collapsable",collapsable:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"collapsable1",label:"Collapsable Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"collapsable2",label:"Collapsable Item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.H9,{label:"Section",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"sectionItem",label:"Section Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{label:"Floating Item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"inner1",label:"Inner Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"inner2",label:"Inner Item"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{color:"danger",label:"Danger Item"})]})}),args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()}},Minimal={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.W1,{...args,minimal:!0,className:"outline rounded-capped",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"newItem",label:"New Menu Item",badge:45}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.H9,{label:"Collapsable",collapsable:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"collapsable1",label:"Collapsable Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"collapsable2",label:"Collapsable Item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.H9,{label:"Section",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"sectionItem",label:"Section Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{label:"Floating Item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"inner1",label:"Inner Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"inner2",label:"Inner Item"})]})]})]})}),args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()}},_ContextMenu={render:args=>{const menu=(0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.W1,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("context-menu"),className:"outline rounded-capped",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"newItem",label:"New Menu Item",badge:45}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.H9,{label:"Collapsable",collapsable:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"collapsable1",label:"Collapsable Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"collapsable2",label:"Collapsable Item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.H9,{label:"Section",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"sectionItem",label:"Section Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{label:"Floating Item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"inner1",label:"Inner Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Dr,{id:"inner2",label:"Inner Item"})]})]})]})),[args]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-screen max-w-lg aspect-video outline rounded-capped flex items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.tz,{menu,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.hE,{children:"Context menu for container"})})})},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()}},__namedExportsOrder=["_Menu","Minimal","_ContextMenu"];_Menu.parameters={..._Menu.parameters,docs:{..._Menu.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Fragment>\n        <Menu {...args} className="outline rounded-capped min-h-80">\n          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />\n          <MenuItem id="newItem" label="New Menu Item" badge={45} />\n          <MenuSection label="Collapsable" collapsable>\n            <MenuItem id="collapsable1" label="Collapsable Item" />\n            <MenuItem id="collapsable2" label="Collapsable Item" />\n          </MenuSection>\n          <MenuSection label="Section">\n            <MenuItem id="sectionItem" label="Section Item" />\n            <MenuItem label="Floating Item">\n              <MenuItem id="inner1" label="Inner Item" />\n              <MenuItem id="inner2" label="Inner Item" />\n            </MenuItem>\n          </MenuSection>\n          <div className="flex-1" />\n          <MenuItem color="danger" label="Danger Item" />\n        </Menu>\n      </Fragment>;\n  },\n  args: {\n    onClick: fn()\n  }\n}',..._Menu.parameters?.docs?.source}}},Minimal.parameters={...Minimal.parameters,docs:{...Minimal.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Fragment>\n        <Menu {...args} minimal className="outline rounded-capped">\n          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />\n          <MenuItem id="newItem" label="New Menu Item" badge={45} />\n          <MenuSection label="Collapsable" collapsable>\n            <MenuItem id="collapsable1" label="Collapsable Item" />\n            <MenuItem id="collapsable2" label="Collapsable Item" />\n          </MenuSection>\n          <MenuSection label="Section">\n            <MenuItem id="sectionItem" label="Section Item" />\n            <MenuItem label="Floating Item">\n              <MenuItem id="inner1" label="Inner Item" />\n              <MenuItem id="inner2" label="Inner Item" />\n            </MenuItem>\n          </MenuSection>\n        </Menu>\n      </Fragment>;\n  },\n  args: {\n    onClick: fn()\n  }\n}',...Minimal.parameters?.docs?.source}}},_ContextMenu.parameters={..._ContextMenu.parameters,docs:{..._ContextMenu.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const menu = useMemo(() => <Menu onClick={action("context-menu")} className="outline rounded-capped">\n          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />\n          <MenuItem id="newItem" label="New Menu Item" badge={45} />\n          <MenuSection label="Collapsable" collapsable>\n            <MenuItem id="collapsable1" label="Collapsable Item" />\n            <MenuItem id="collapsable2" label="Collapsable Item" />\n          </MenuSection>\n          <MenuSection label="Section">\n            <MenuItem id="sectionItem" label="Section Item" />\n            <MenuItem label="Floating Item">\n              <MenuItem id="inner1" label="Inner Item" />\n              <MenuItem id="inner2" label="Inner Item" />\n            </MenuItem>\n          </MenuSection>\n        </Menu>, [args]);\n    return <div className="w-screen max-w-lg aspect-video outline rounded-capped flex items-center justify-center">\n        <ContextMenu menu={menu}>\n          <Title>Context menu for container</Title>\n        </ContextMenu>\n      </div>;\n  },\n  args: {\n    onClick: fn()\n  }\n}',..._ContextMenu.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);