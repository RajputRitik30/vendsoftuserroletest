(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8972],{68972:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(9950),a=n(1072),o=n(37017),i=n(45532),l=(n(46411),n(59019),n(60764),n(7864),n(4434),n(44885)),s=n(74297),c=n(95652),u=n(42074),f=n(79988),d=n(44414);(0,s.A)();const p=function(){(0,s.A)();let e=(0,a.A)();(0,c.A)();const{selectedColor:t}=(0,l.useColor)(),{user:n,authTokens:p}=(0,r.useContext)(i.A);let[y,w]=(0,r.useState)([]),[h,b]=(0,r.useState)(new Date((new Date).setDate((new Date).getDate()-1))),[g,D]=(0,r.useState)(new Date((new Date).setDate((new Date).getDate()-1)));(0,r.useEffect)((()=>{_()}),[]);let _=async()=>{let t=await e.get("get_stock_by_machine_user_role_refills/");if(console.log(t),1===t.data.success){let e=[];for(let n=0;n<t.data.result.length;n++){let r=t.data.result[n];console.log(r);let a={machine_id:r.machine_id,after_refill_stock:r.stock_before_refill,befor_refill_stock:r.stock_after_refill,refill_count:r.stock_capacity_equal_count,refill_quantity:r.refill_quantity,refill_date:r.refill_date,location:r.location};e.sort(((e,t)=>new Date(t.created_at)-new Date(e.created_at))),e.push(a)}w([]),w(e)}else if(0===t.data.success)for(let e=0;e<Object.values(t.data.result).length;e++){let n=Object.values(t.data.result)[e];alert(n)}};const m=e=>{if(null==e)return"          ";const t=new Date(e),n=String(t.getDate()).padStart(2,"0"),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],a=t.getFullYear(),o=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return"".concat(n," - ").concat(r," - ").concat(a," ").concat(o,":").concat(i)};function v(e){if(null!=e){var t=new Date(e),n=""+(t.getMonth()+1),r=""+t.getDate(),a=t.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[a,n,r].join("-")}}return new Date,new Date,new Date((new Date).setDate((new Date).getDate()-1)),new Date((new Date).setDate((new Date).getDate()-1)),new Date((new Date).setDate((new Date).getDate()-6)),new Date(new Date),new Date((new Date).setDate((new Date).getDate()-29)),new Date(new Date),new Date((new Date).setDate(1)),new Date((new Date).getFullYear(),(new Date).getMonth()+1,0),new Date((new Date).getFullYear(),(new Date).getMonth()-1,1),new Date((new Date).getFullYear(),(new Date).getMonth(),0),v(new Date),v(new Date),v(new Date((new Date).setDate((new Date).getDate()-1))),v(new Date((new Date).setDate((new Date).getDate()-1))),v(new Date((new Date).setDate((new Date).getDate()-6))),v(new Date(new Date)),v(new Date((new Date).setDate((new Date).getDate()-29))),v(new Date(new Date)),v(new Date((new Date).setDate((new Date).getDate()-90))),v(new Date(new Date)),v(new Date((new Date).setDate((new Date).getDate()-365))),v(new Date(new Date)),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,d.jsx)("div",{children:(0,d.jsx)("h3",{className:"mb-0",style:{color:"#2C384A"},children:"Machine Refill Report"})})," ",(0,d.jsx)("div",{})]}),(0,d.jsxs)("div",{className:"input-group mt-2 mb-2",children:["\xa0 \xa0 \xa0"," ",(0,d.jsx)("div",{})]}),(0,d.jsx)("div",{children:(0,d.jsx)(o.sK,{xm:{cols:12},children:(0,d.jsx)(o.UF,{xs:12,children:(0,d.jsx)(o.Pd,{activePage:1,clickableRows:!0,columns:[{key:"sr_no",label:"Sr. No.",sorter:!1,_props:{color:"secondary",className:"fw-semibold"}},{label:"Machine ID",key:"machine_id",sorter:!1,_props:{color:"secondary",className:"fw-semibold"}},{label:"Before Refill Stock",key:"after_refill_stock",sorter:!1,_props:{color:"secondary",className:"fw-semibold"}},{label:"Refill Quantity",key:"refill_quantity",sorter:!1,_props:{color:"secondary",className:"fw-semibold"}},{label:"After Refill Stock",key:"befor_refill_stock",sorter:!1,_props:{color:"secondary",className:"fw-semibold",align:"middle"}},{label:"Refill Count",key:"refill_count",sorter:!1,_props:{color:"secondary",className:"fw-semibold"}},{label:"Location",key:"location",sorter:!1,_props:{color:"secondary",className:"fw-semibold"}},{key:"Action",label:"Action",filter:!1,sorter:!1,_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"60px"}}],items:y,itemsPerPageSelect:!0,itemsPerPage:10,pagination:!0,scopedColumns:{Action:e=>(0,d.jsx)("td",{children:(0,d.jsx)(u.N_,{to:"/user/usermachinwiserefillreport/"+"".concat(e.machine_id)+"/"+"".concat(e.location),children:(0,d.jsx)(o.t7,{src:f,width:17,height:15,title:"View Details"})})}),sr_no:(e,t)=>(0,d.jsx)("td",{children:t+1}),created_at:e=>(0,d.jsx)("td",{children:m(e.created_at)})},itemsPerPageOptions:[10,20,50,100],tableProps:{color:"success-color-secondary",hover:!0,border:"1.5px solid #074",responsive:!0},tableHeadProps:{color:"light",align:"middle",className:"align-middle"},tableBodyProps:{align:"middle",className:"align-middle"},itemsPerPageLabel:"Rows per page:"})})})})]})})}},46411:(e,t,n)=>{e.exports=n(795)},91078:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(9950),i=(r=o)&&r.__esModule?r:{default:r},l=n(87924),s=n(8010);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return l.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,a=e.enclosingCharacter,o=e.uFEFF,i=e.target,l=e.specs,s=e.replace;this.state.page=window.open(this.buildURI(t,o,n,r,a),i,l,s)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(i.default.Component);c.defaultProps=Object.assign(s.defaultProps,{target:"_blank"}),c.propTypes=s.propTypes,t.default=c},49462:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(9950),l=(r=i)&&r.__esModule?r:{default:r},s=n(87924),c=n(8010);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,r=n.data,a=n.headers,o=n.separator,i=n.filename,l=n.enclosingCharacter,c=n.uFEFF,u=t&&"function"===typeof r?r():r,f=new Blob([c?"\ufeff":"",(0,s.toCSV)(u,a,o,l)]);return window.navigator.msSaveBlob(f,i),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,o=t.separator,i=t.filename,s=t.uFEFF,c=t.children,u=(t.onClick,t.asyncOnClick,t.enclosingCharacter),f=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),d="undefined"===typeof window?"":this.buildURI(n,s,r,o,u);return l.default.createElement("a",a({download:i},f,{ref:function(t){return e.link=t},target:"_self",href:d,onClick:this.handleClick()}),c)}}]),t}(l.default.Component);u.defaultProps=c.defaultProps,u.propTypes=c.propTypes,t.default=u},87924:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},o=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},i=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},l=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(r(e),r(t)))}),[]))},s=t.jsons2arrays=function(e,t){var n=t=t||l(e),a=t;o(t)&&(n=t.map((function(e){return e.label})),a=t.map((function(e){return e.key})));var i=e.map((function(e){return a.map((function(t){return c(t,e)}))}));return[n].concat(r(i))},c=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,r){var a=e[t];if(void 0!==a&&null!==a)return a;r.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},u=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},f=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return u(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},d=t.arrays2csv=function(e,t,n,a){return f(t?[t].concat(r(e)):e,n,a)},p=t.jsons2csv=function(e,t,n,r){return f(s(e,t),n,r)},y=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},w=t.toCSV=function(e,t,n,r){if(o(e))return p(e,t,n,r);if(i(e))return d(e,t,n,r);if("string"===typeof e)return y(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,o){var i=w(e,n,r,o),l=a()?"application/csv":"text/csv",s=new Blob([t?"\ufeff":"",i],{type:l}),c="data:"+l+";charset=utf-8,"+(t?"\ufeff":"")+i,u=window.URL||window.webkitURL;return"undefined"===typeof u.createObjectURL?c:u.createObjectURL(s)}},795:(e,t,n)=>{"use strict";t.CSVLink=void 0;var r=o(n(91078)),a=o(n(49462));function o(e){return e&&e.__esModule?e:{default:e}}r.default,t.CSVLink=a.default},8010:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,a=n(9950),o=((r=a)&&r.__esModule,n(11942));t.propTypes={data:(0,o.oneOfType)([o.string,o.array,o.func]).isRequired,headers:o.array,target:o.string,separator:o.string,filename:o.string,uFEFF:o.bool,onClick:o.func,asyncOnClick:o.bool,enclosingCharacter:o.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]},4434:()=>{}}]);