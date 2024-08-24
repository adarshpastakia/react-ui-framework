"use strict";(self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[]).push([[7787],{"./packages/chart/stories/MapSeries.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),_react_fabric_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/chart/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_4__.q2,title:"@charts/MapSeries",parameters:{layout:"centered",controls:{exclude:"children"}}},Example={render:args=>{const[data,setData]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),loadData=(0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((()=>{setData(Array.from(Array(Math.ceil(24)),((_,i)=>({id:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.address.countryCode("alpha-2"),count:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.Jb.number.int({min:99,max:499})}))))}),[]);return(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((()=>{loadData()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_fabric_core__WEBPACK_IMPORTED_MODULE_2__.Zk,{width:"48rem",height:"24rem",title:"Map Series chart",expandable:!0,actions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_fabric_core__WEBPACK_IMPORTED_MODULE_2__.$n,{"aria-label":"loadData",variant:"link",icon:"mdi mdi-refresh",onClick:loadData}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.q2,{...args,data})})},args:{}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [data, setData] = useState<AnyObject[]>([]);\n    const loadData = useCallback(() => {\n      setData(Array.from(Array(Math.ceil(24)), (_, i) => ({\n        id: faker.address.countryCode("alpha-2"),\n        count: faker.number.int({\n          min: 99,\n          max: 499\n        })\n      })));\n    }, []);\n    useEffect(() => {\n      loadData();\n    }, []);\n    return <Panel width="48rem" height="24rem" title="Map Series chart" expandable actions={<Button aria-label="loadData" variant="link" icon="mdi mdi-refresh" onClick={loadData} />}>\n        <MapSeries {...args} data={data} />\n      </Panel>;\n  },\n  args: {}\n}',...Example.parameters?.docs?.source}}}}}]);