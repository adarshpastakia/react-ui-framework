(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({4:"monaco-stories-Playground-stories",29:"core-stories-components-breadcrumbs-Breadcrumbs-mdx",213:"2-Iconography-mdx",271:"core-stories-components-button-ConfirmButton-stories",334:"core-stories-components-notifications-Message-stories",357:"form-stories-inputs-Checkbox-stories",388:"core-stories-components-animations-Bars-stories",444:"form-stories-sliders-Slider-mdx",526:"data-stories-useFilteredList-FilteredList-mdx",573:"core-stories-components-card-Card-stories",648:"core-stories-1-typography-Mark-stories",666:"chart-stories-TimeSlider-stories",679:"core-stories-1-typography-Title-stories",729:"data-stories-VirtualList-stories",840:"data-stories-useFilteredList-FilteredList-stories",853:"date-stories-panels-DatePanels-mdx",1045:"core-stories-components-panel-Panel-mdx",1074:"form-stories-inputs-Switch-stories",1148:"core-stories-components-button-Navigator-stories",1200:"form-stories-sliders-Range-stories",1323:"data-stories-TreeView-stories",1427:"core-stories-components-empty-Empty-stories",1629:"core-stories-components-menu-Menu-mdx",1636:"core-stories-components-avatar-AvatarGroup-stories",1648:"chart-stories-CountSeries-stories",1660:"chart-stories-WordBubble-stories",1687:"core-stories-1-typography-Link-stories",1757:"date-stories-panels-RangePanel-stories",1881:"core-stories-components-callout-Callout-mdx",1888:"date-stories-panels-DatePanel-stories",1979:"core-stories-components-animations-Animations-stories",2019:"core-stories-components-button-Button-mdx",2028:"form-stories-inputs-Input-mdx",2121:"form-stories-inputs-ColorInput-stories",2307:"core-stories-components-actionLabel-ActionLabel-stories",2485:"core-stories-components-tooltip-Tooltip-mdx",2611:"core-stories-components-progress-Progress-stories",2710:"form-stories-sliders-Slider-stories",2718:"core-stories-components-notifications-Toast-stories",2757:"form-stories-form-Form-mdx",2806:"form-stories-selects-Select-stories",2871:"chart-stories-GenericChart-stories",2955:"form-stories-inputs-Radio-stories",2977:"core-stories-0-core-Section-stories",2985:"lexical-stories-Playground-stories",3003:"core-stories-components-callout-Callout-stories",3103:"core-stories-components-panel-Panel-stories",3161:"chart-stories-MapSeries-mdx",3251:"form-stories-inputs-Others-stories",3307:"core-stories-components-animations-Skeleton-stories",3363:"core-stories-0-core-Content-stories",3395:"core-stories-0-core-Theme-stories",3401:"core-stories-components-dropdown-Dropdown-mdx",3413:"core-stories-components-badge-Badge-mdx",3609:"chart-stories-DataSeries-stories",3681:"core-stories-components-overlays-Flyout-stories",3846:"core-stories-components-button-ButtonGroup-stories",3866:"core-stories-1-typography-Abbr-stories",3984:"core-stories-components-panel-PanelGroup-stories",4056:"form-stories-selects-DualList-stories",4060:"form-stories-inputs-Textarea-stories",4111:"core-stories-components-badge-Badge-stories",4139:"data-stories-json-JsonViewer-stories",4176:"form-stories-selects-List-mdx",4185:"1-ColorPalette-mdx",4445:"data-stories-VirtualGallery-stories",4482:"form-stories-selects-List-stories",4490:"chart-stories-WordBubble-mdx",4769:"core-stories-components-actionLabel-ActionLabel-mdx",4900:"core-stories-components-collapable-Collapsable-mdx",5129:"core-stories-components-meter-Meter-mdx",5224:"core-stories-0-core-Aside-stories",5305:"core-stories-components-notifications-Alert-stories",5339:"data-stories-histogram-Histogram-stories",5352:"core-stories-components-button-ToggleButtonGroup-mdx",5542:"chart-stories-CountSeries-mdx",5594:"3-Typography-mdx",5675:"core-stories-components-card-Card-mdx",5707:"core-stories-components-overlays-Modal-stories",5743:"chart-stories-DataSeries-mdx",5776:"form-stories-inputs-File-stories",5791:"core-stories-0-core-Core-mdx",5825:"core-stories-components-progress-Progress-mdx",5829:"form-stories-inputs-Number-stories",5839:"core-stories-components-tooltip-Tooltip-stories",5883:"core-stories-components-meter-Meter-stories",5998:"core-stories-0-core-Viewport-stories",6012:"form-stories-form-ArrayInput-stories",6071:"core-stories-components-menu-Menu-stories",6073:"core-stories-components-animations-Animations-mdx",6225:"core-stories-components-avatar-Avatar-mdx",6253:"core-stories-0-core-Page-stories",6339:"core-stories-components-icon-Icon-stories",6628:"0-Introduction-mdx",6846:"core-stories-components-progress-Circle-stories",6867:"core-stories-components-avatar-Avatar-stories",6897:"core-stories-components-empty-Empty-mdx",7004:"core-stories-components-button-ButtonGroup-mdx",7007:"core-stories-components-chip-Chip-mdx",7141:"4-ColorCollection-mdx",7142:"form-stories-inputs-Input-stories",7240:"data-stories-Table-stories",7355:"core-stories-components-tabPanel-TabPanel-stories",7642:"core-stories-1-typography-Typography-mdx",7787:"chart-stories-MapSeries-stories",7844:"core-stories-1-typography-Copy-stories",7893:"date-stories-superdate-Superdate-mdx",7934:"core-stories-components-collapable-Collapsable-stories",8145:"core-stories-components-animations-Spinner-stories",8156:"form-stories-selects-Select-mdx",8221:"chart-stories-ActivityMap-stories",8391:"core-stories-components-breadcrumbs-Breadcrumbs-stories",8506:"chart-stories-TimeSeries-stories",8621:"chart-stories-GenericChart-mdx",8655:"date-stories-superdate-Superdate-stories",8677:"core-stories-components-button-ConfirmButton-mdx",8735:"form-stories-form-Form-stories",8737:"core-stories-components-notifications-Notifications-mdx",8821:"core-stories-components-button-Button-stories",8852:"core-stories-0-core-ErrorBoundary-stories",8929:"core-stories-components-overlays-Overlays-mdx",9050:"core-stories-0-core-Responsive-stories",9173:"form-stories-FormBuilder-stories",9194:"core-stories-components-button-ToggleButtonGroup-stories",9339:"chart-stories-ActivityMap-mdx",9385:"core-stories-components-tabPanel-TabPanel-mdx",9441:"core-stories-components-icon-Icon-mdx",9466:"form-stories-inputs-Search-stories",9481:"core-stories-components-chip-Chip-stories",9627:"core-stories-components-dropdown-Dropdown-stories",9640:"chart-stories-TimeSeries-mdx",9690:"core-stories-1-typography-Text-stories",9709:"form-stories-inputs-Password-stories",9865:"data-stories-histogram-Histogram-mdx",9960:"chart-stories-TimeSlider-mdx",9961:"data-stories-json-JsonViewer-mdx"}[chunkId]||chunkId)+"."+{4:"8706a73a",29:"6eedf76c",165:"6288f54d",213:"43dc0b2f",271:"8a802921",334:"9b268272",357:"7f80788c",388:"201e6361",444:"1f3658b4",526:"2df245d0",573:"6aa2d385",648:"1ca08198",666:"71216c25",679:"50ab021a",729:"35376e86",734:"89ba950a",840:"4f5ee82d",853:"c971a603",1045:"40db9aea",1074:"1caf1a9c",1148:"eaf91baf",1200:"24f29c6b",1323:"bc4e2612",1427:"4641ee36",1567:"ef7423ed",1629:"6bc7e138",1634:"14d7994c",1636:"9d34eab9",1648:"46e914c6",1660:"b107a9fa",1687:"ad47778a",1757:"2873db74",1881:"925d381b",1888:"d5f3ec21",1979:"6515e94a",2019:"6770f8f2",2028:"a28d75e0",2121:"deb66966",2307:"8b2e8c1e",2461:"d9646590",2485:"deedca29",2487:"fed05bef",2496:"46868263",2611:"a787d3c3",2710:"d1c3775e",2718:"849280cc",2757:"bd494f41",2762:"0a357b3f",2806:"54a56dd4",2871:"1450ef2e",2955:"b358ccd2",2977:"4fac0c19",2985:"a47b6504",3003:"fc345807",3103:"0149becc",3161:"002196c2",3251:"135fb65f",3307:"508aff38",3363:"5bf60f8a",3395:"0ebe2d0f",3401:"c6af229f",3413:"d21a7f1f",3609:"960ccc66",3681:"bcf8899e",3683:"48b3eb8e",3846:"2df6c9cc",3866:"6b8d8e9a",3984:"e0e56b8c",4056:"8def7730",4060:"215a9b4d",4111:"b81994de",4139:"8045b545",4156:"6459c9f5",4176:"69c77537",4185:"57146c4a",4423:"161c9fd0",4445:"b4b201df",4482:"9ffefb38",4490:"16545d81",4546:"f31f922f",4750:"dfe87f7a",4769:"cfa23cec",4900:"168aed97",5129:"369cae7d",5224:"38802800",5305:"d3e70ffd",5339:"d1987556",5352:"b252d5b6",5542:"abe72e21",5594:"294a5351",5622:"7f3c24a1",5675:"9344c62c",5707:"955674ed",5743:"aa3aeeb8",5776:"8d309891",5791:"7fc075ab",5825:"f61eda18",5829:"ddb28fc4",5839:"7e8079cc",5883:"e3f9097e",5998:"fb966594",6012:"2d8a0bc3",6071:"2ef37d3f",6073:"45c4b991",6225:"45a37be9",6253:"e779ba39",6339:"d4bf1955",6628:"b210dcec",6765:"7b617d47",6846:"2102868e",6867:"7eff00a0",6897:"9ef10815",7004:"a902b261",7007:"ae8615cd",7141:"a1dc0a5c",7142:"f30a0d74",7240:"5580e5aa",7355:"478ef29e",7364:"cea0217f",7510:"bd53b766",7642:"721e14fd",7684:"60e695cb",7787:"ee68dbd1",7844:"06219f85",7893:"796f9ce6",7934:"d2786e4b",8088:"e5796214",8109:"edc69413",8145:"0c00ef0f",8156:"fc06d20f",8221:"9336cde3",8391:"661a0d8a",8506:"104af80f",8621:"a8e1378c",8655:"a29341f9",8677:"6ed6efa9",8724:"2bf91979",8735:"3abd47a9",8737:"972824ad",8821:"9cdd875b",8852:"3fdd4384",8872:"c6c6dc97",8929:"5b6c49d9",9034:"6f5bc530",9050:"70423619",9129:"fbce9e75",9165:"f4a968d7",9173:"ef10970c",9194:"d019c276",9339:"a47e9caf",9385:"e4b414e3",9441:"9ed12bdf",9466:"2b4545d7",9481:"bc3473e3",9627:"90fd507f",9640:"dfaa93dc",9690:"11d8e14d",9709:"dfb8e9d2",9865:"4ac8f63f",9960:"fe920d53",9961:"4f7efbba"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="react-fabric:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","react-fabric:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkreact_fabric=self.webpackChunkreact_fabric||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();