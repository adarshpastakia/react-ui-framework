(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[1629,6071],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./packages/core/stories/components/menu/Menu.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_react_fabric_react_fabric_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/index.ts"),_Menu_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/menu/Menu.stories.tsx");function _createMdxContent(props){const _components={code:"code",pre:"pre",...(0,_home_runner_work_react_fabric_react_fabric_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.W8,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.hE,{children:"Menu"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Mz,{storyId:"icon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"hidden-anchor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.R2,{children:"Menu"})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.VY,{of:_src__WEBPACK_IMPORTED_MODULE_3__.W1}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.pJ,{className:"control-panel",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Controls"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.H2,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_4__._Menu})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Mz,{storyId:"colors",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.R2,{children:"Compact"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.VY,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_4__.Minimal}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{withToolbar:!0,of:_Menu_stories__WEBPACK_IMPORTED_MODULE_4__.Minimal}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.pJ,{className:"control-panel",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Controls"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.H2,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_4__.Minimal})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Mz,{storyId:"sizes",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.R2,{children:"Context Menu"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.VY,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_4__._ContextMenu}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{withToolbar:!0,of:_Menu_stories__WEBPACK_IMPORTED_MODULE_4__._ContextMenu}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.pJ,{className:"control-panel",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Controls"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.H2,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_4__._ContextMenu})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Mz,{storyId:"props",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.R2,{children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.ov,{sort:"requiredFirst"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Mz,{storyId:"sample",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.R2,{children:"Example"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'import { Menu, MenuItem } from "@react-fabric/core";\n\nexport const Example = () => {\n  return (\n    <Menu>\n      <MenuItem label="Menu item" icon="icon path" />\n    </Menu>\n  );\n};\n'})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_react_fabric_react_fabric_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/core/stories/components/menu/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Minimal:()=>Minimal,_ContextMenu:()=>_ContextMenu,_Menu:()=>_Menu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_react_fabric_form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/form/dist/esm/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_test__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/core/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_5__.W1,subcomponents:{MenuItem:_src__WEBPACK_IMPORTED_MODULE_5__.Dr,ContextMenu:_src__WEBPACK_IMPORTED_MODULE_5__.tz},title:"@core/components/Menu",parameters:{layout:"centered",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/Menu.test.tsx"]},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"p-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},_Menu={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.W1,{...args,className:"outline rounded-capped min-h-80",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"newItem",label:"New Menu Item",badge:45}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.cG,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"collapsable1",label:"Collapsable Item",disabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"collapsable2",label:"Collapsable Item",active:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.cG,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"sectionItem",label:"Section Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.W1,{label:"Floating Item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.W1,{id:"inner1",label:"Dropdown",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.Zp,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.UC,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_fabric_form__WEBPACK_IMPORTED_MODULE_1__.dO,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.wi,{flex:!0,justify:"end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.W2,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.$n,{children:"Dismiss Child"})})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"inner2",label:"Inner Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.W1,{label:"Floating Item",disabled:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"inner1",label:"Inner Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"inner2",label:"Inner Item"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.W1,{label:"Floating Item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"inner1",label:"Inner Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"inner2",label:"Inner Item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"delete",color:"danger",label:"Danger Item"})]})}),args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.fn)()}},Minimal={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.W1,{...args,label:void 0,menuClassName:void 0,minimal:!0,className:"outline rounded-capped",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"newItem",label:"New Menu Item",badge:45}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"collapsable1",label:"Collapsable Item",disabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"collapsable2",label:"Collapsable Item",active:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"sectionItem",label:"Section Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.W1,{label:"Floating Item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"inner1",label:"Inner Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"inner2",label:"Inner Item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"delete",icon:"mdi mdi-trash-can-outline",color:"danger",label:"Danger Item"})]})}),args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.fn)()}},_ContextMenu={render:args=>{const menu=(0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)((()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.W1,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("context-menu"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"appItem",icon:"mdi mdi-react",label:"Application Menu",appendLabel:"NEW"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"newItem",label:"New Menu Item",badge:45}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"collapsable1",label:"Collapsable Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"collapsable2",label:"Collapsable Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"sectionItem",label:"Section Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.W1,{label:"Floating Item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"inner1",label:"Inner Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.Dr,{id:"inner2",label:"Inner Item"})]})]})),[args]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-screen max-w-lg aspect-video outline rounded-capped flex items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.tz,{menu,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.hE,{children:"Context menu for container"})})})},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.fn)()}},__namedExportsOrder=["_Menu","Minimal","_ContextMenu"];_Menu.parameters={..._Menu.parameters,docs:{..._Menu.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Fragment>\n        <Menu {...args} className="outline rounded-capped min-h-80">\n          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />\n          <MenuItem id="newItem" label="New Menu Item" badge={45} />\n          <Divider />\n          <MenuItem id="collapsable1" label="Collapsable Item" disabled />\n          <MenuItem id="collapsable2" label="Collapsable Item" active />\n          <Divider />\n          <MenuItem id="sectionItem" label="Section Item" />\n          <Menu label="Floating Item">\n            <Menu id="inner1" label="Dropdown">\n              <Card>\n                <Content>\n                  <Switch />\n                </Content>\n                <Footer flex justify="end">\n                  <DropdownDismiss>\n                    <Button>Dismiss Child</Button>\n                  </DropdownDismiss>\n                </Footer>\n              </Card>\n            </Menu>\n            <MenuItem id="inner2" label="Inner Item" />\n            <Menu label="Floating Item" disabled>\n              <MenuItem id="inner1" label="Inner Item" />\n              <MenuItem id="inner2" label="Inner Item" />\n            </Menu>\n          </Menu>\n          <Menu label="Floating Item">\n            <MenuItem id="inner1" label="Inner Item" />\n            <MenuItem id="inner2" label="Inner Item" />\n          </Menu>\n          <div className="flex-1" />\n          <MenuItem id="delete" color="danger" label="Danger Item" />\n        </Menu>\n      </Fragment>;\n  },\n  args: {\n    onClick: fn()\n  }\n}',..._Menu.parameters?.docs?.source}}},Minimal.parameters={...Minimal.parameters,docs:{...Minimal.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Fragment>\n        <Menu {...args} label={undefined} menuClassName={undefined} minimal className="outline rounded-capped">\n          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />\n          <MenuItem id="newItem" label="New Menu Item" badge={45} />\n          <MenuItem id="collapsable1" label="Collapsable Item" disabled />\n          <MenuItem id="collapsable2" label="Collapsable Item" active />\n          <MenuItem id="sectionItem" label="Section Item" />\n          <Menu label="Floating Item">\n            <MenuItem id="inner1" label="Inner Item" />\n            <MenuItem id="inner2" label="Inner Item" />\n          </Menu>\n          <MenuItem id="delete" icon="mdi mdi-trash-can-outline" color="danger" label="Danger Item" />\n        </Menu>\n      </Fragment>;\n  },\n  args: {\n    onClick: fn()\n  }\n}',...Minimal.parameters?.docs?.source}}},_ContextMenu.parameters={..._ContextMenu.parameters,docs:{..._ContextMenu.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const menu = useMemo(() => <Menu onClick={action("context-menu")}>\n          <MenuItem id="appItem" icon="mdi mdi-react" label="Application Menu" appendLabel="NEW" />\n          <MenuItem id="newItem" label="New Menu Item" badge={45} />\n          <MenuItem id="collapsable1" label="Collapsable Item" />\n          <MenuItem id="collapsable2" label="Collapsable Item" />\n          <MenuItem id="sectionItem" label="Section Item" />\n          <Menu label="Floating Item">\n            <MenuItem id="inner1" label="Inner Item" />\n            <MenuItem id="inner2" label="Inner Item" />\n          </Menu>\n        </Menu>, [args]);\n    return <div className="w-screen max-w-lg aspect-video outline rounded-capped flex items-center justify-center">\n        <ContextMenu menu={menu}>\n          <Title>Context menu for container</Title>\n        </ContextMenu>\n      </div>;\n  },\n  args: {\n    onClick: fn()\n  }\n}',..._ContextMenu.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);