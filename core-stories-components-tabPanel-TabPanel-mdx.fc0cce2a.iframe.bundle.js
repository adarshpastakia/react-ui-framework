(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[9385,7355],{"./packages/core/stories/components/tabPanel/TabPanel.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_react_fabric_react_fabric_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/index.ts"),_TabPanel_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/tabPanel/TabPanel.stories.tsx");function _createMdxContent(props){const _components={code:"code",pre:"pre",...(0,_home_runner_work_react_fabric_react_fabric_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.W8,{of:_TabPanel_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.hE,{children:"Tabbed Panel"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Mz,{storyId:"TabPanel",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"hidden-anchor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.R2,{children:"Tab Panel"})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.VY,{of:_src__WEBPACK_IMPORTED_MODULE_3__.Kp}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.pJ,{className:"control-panel",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Controls"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.H2,{of:_TabPanel_stories__WEBPACK_IMPORTED_MODULE_4__._TabPanel})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Mz,{storyId:"props",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.R2,{children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.ov,{sort:"requiredFirst"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Mz,{storyId:"sample",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.R2,{children:"Example"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'import { TabPanel, Button, Menu, MenuItem } from "@react-fabric/core";\n\nexport const Example = () => {\n  return (\n    <TabPanel>\n      <Tab id="1" label="Tab Oner">\n        <Content>...</Content>\n      </Tab>\n      <Tab id="2" label="Tab Two">\n        <Content>...</Content>\n      </Tab>\n      <Tab id="3" label="Tab Three">\n        <Content>...</Content>\n      </Tab>\n    </TabPanel>\n  );\n};\n'})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_react_fabric_react_fabric_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/core/stories/components/tabPanel/TabPanel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_TabPanel:()=>_TabPanel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),_storybook_test__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_3__.Kp,subcomponents:{Tab:_src__WEBPACK_IMPORTED_MODULE_3__.oz},title:"@core/components/TabPanel",parameters:{layout:"fullscreen",controls:{exclude:/^(on.*|children|as)/},jest:["core/tests/TabPanel.test.tsx"]},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"min-h-[600px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.LM,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})})]},_TabPanel={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.Kp,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.oz,{id:"1",label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.commerce.product(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.UC,{children:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.paragraphs(9)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.oz,{id:"2",label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.commerce.product(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.UC,{children:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.paragraphs(9)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.oz,{id:"3",label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.commerce.product(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.UC,{children:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.lorem.paragraphs(9)})})]}),args:{onBeforeChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)(),onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.fn)()}},__namedExportsOrder=["_TabPanel"];_TabPanel.parameters={..._TabPanel.parameters,docs:{..._TabPanel.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <TabPanel {...args}>\n        <div />\n        <Tab id="1" label={faker.commerce.product()}>\n          <Content>{faker.lorem.paragraphs(9)}</Content>\n        </Tab>\n        <Tab id="2" label={faker.commerce.product()}>\n          <Content>{faker.lorem.paragraphs(9)}</Content>\n        </Tab>\n        <Tab id="3" label={faker.commerce.product()}>\n          <Content>{faker.lorem.paragraphs(9)}</Content>\n        </Tab>\n      </TabPanel>;\n  },\n  args: {\n    onBeforeChange: fn(),\n    onChange: fn()\n  }\n}',..._TabPanel.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);