(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[801],{40801:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(9950),o=n(1072),a=n(37017),l=n(45532),i=n(7864),c=n(76058),s=(n(46411),n(42019),n(59019),n(60764),n(4434),n(74297)),d=n(44885),u=n(95652),p=n(44414);const f=(0,s.A)();const y=function(){let e=(0,o.A)();const t=(0,u.A)(),{user:n,authTokens:s}=(0,r.useContext)(l.A);let[y,h]=(0,r.useState)([]),[g,b]=(0,r.useState)(new Date((new Date).setDate((new Date).getDate()-1))),[_,m]=(0,r.useState)(new Date((new Date).setDate((new Date).getDate()))),[w,v]=(0,r.useState)(0),[x,k]=(0,r.useState)(0),[D,j]=(0,r.useState)(0),[C,O]=(0,r.useState)(0),[S,R]=(0,r.useState)(0),[P,A]=(0,r.useState)(0);const{selectedColor:E}=(0,d.useColor)();(0,r.useEffect)((()=>{U()}),[]);const F=e=>{if(null==e)return"          ";const t=new Date(e),n=String(t.getDate()).padStart(2,"0"),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getFullYear(),a=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0");return"".concat(n," - ").concat(r," - ").concat(o," ").concat(a,":").concat(l)};function M(e){if(null!=e){var t=new Date(e),n=""+(t.getMonth()+1),r=""+t.getDate(),o=t.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[o,n,r].join("-")}}const U=async t=>{var n=document.getElementById("datetodate1").selectedIndex;var r=document.getElementById("datetodate1").options[n].value.toString();console.log(r+"inside usermis export report"),b(r.split("=")[0]),m(r.split("=")[1]);let o=await e.post("post_mis_report_for_user_pdf/",{from_date:M(r.split("=")[0]),to_date:M(r.split("=")[1])});if(1===o.data.success){let e=[];for(let t=0;t<o.data.result.length;t++){let n=o.data.result[t];console.log(n);let r={user_id:n.user_id,name:n.name,mail:n.email,mobile:n.user_mobile_no,machine_id:n.machine_id,model_no:n.model_no,location:n.location,status:n.machine_status,count:n.current_inventory_count,product_type:n.product,refill_date:null===n||void 0===n?void 0:n.refill_date,refill_quantity:null===n||void 0===n?void 0:n.refill_quantity,recent_cash_collection_date:"",recent_amount_collected:""};e.sort(((e,t)=>new Date(t.created_at)-new Date(e.created_at))),e.push(r)}h([]),h(e)}else 0===o.data.success&&(h([]),alert(o.data.message))},N={today:M(new Date)+"="+M(new Date),yesterday:M(new Date((new Date).setDate((new Date).getDate()-1)))+"="+M(new Date((new Date).setDate((new Date).getDate()-1))),week:M(new Date((new Date).setDate((new Date).getDate()-6)))+"="+M(new Date(new Date)),month:M(new Date((new Date).setDate((new Date).getDate()-29)))+"="+M(new Date(new Date)),quarterly:M(new Date((new Date).setDate((new Date).getDate()-90)))+"="+M(new Date(new Date)),yearly:M(new Date((new Date).setDate((new Date).getDate()-365)))+"="+M(new Date(new Date))};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,p.jsx)("div",{children:(0,p.jsx)("h3",{className:"mb-0",style:{color:"#2C384A"},children:"User MIS Report"})})," ",(0,p.jsx)("div",{})]}),(0,p.jsxs)("div",{className:"input-group mt-2 mb-2",children:[(0,p.jsxs)("select",{id:"datetodate1",onChange:U,style:{width:"150px",height:"25px"},children:[(0,p.jsxs)("option",{value:N.today,children:[" ","\xa0\xa0 \xa0 \xa0\xa0 Today \xa0 \xa0\xa0"," "]}),(0,p.jsxs)("option",{value:N.yesterday,selected:!0,children:[" ","\xa0\xa0 \xa0 \xa0\xa0 Yesterday \xa0 \xa0\xa0"," "]}),(0,p.jsxs)("option",{value:N.week,children:[" ","\xa0\xa0 \xa0 \xa0\xa0Weekly\xa0 \xa0\xa0"," "]}),(0,p.jsxs)("option",{value:N.month,children:[" ","\xa0\xa0 \xa0 \xa0\xa0Monthly \xa0 \xa0\xa0"," "]}),(0,p.jsxs)("option",{value:N.quarterly,children:[" ","\xa0\xa0 \xa0 \xa0\xa0Quarterly \xa0 \xa0\xa0"," "]}),(0,p.jsxs)("option",{value:N.yearly,children:[" ","\xa0\xa0 \xa0 \xa0\xa0Yearly \xa0 \xa0\xa0"," "]})]}),"\xa0 \xa0 \xa0"," ",(0,p.jsxs)("div",{children:[" ",(0,p.jsxs)(a.Q_,{onClick:function(){const e="".concat(f,"/generate_and_download_excel_report_for_user/?from_date=").concat(M(g),"&to_date=").concat(M(_)),n=new Headers({"x-api-key":t,Authorization:"Bearer ".concat(null===s||void 0===s?void 0:s.access)});console.log(null===s||void 0===s?void 0:s.access,"santosh");const r=new Request(e,{method:"GET",headers:n});fetch(r).then((e=>{if(e.ok)return console.log(e),e.blob();console.error("Request failed:",e.statusText)})).then((e=>{const t=window.URL.createObjectURL(e),n=document.createElement("a");n.style.display="none",n.href=t,n.download="UserMIS_Report"+M(new Date)+".xlsx",document.body.appendChild(n),n.click(),window.URL.revokeObjectURL(t)})).catch((e=>{console.error("Network error:",e)}))},type:"button",className:"btn btn-default btn-sm ",style:{backgroundColor:E,color:"white",height:"28px"},children:["Export Excel ",(0,p.jsx)(i.A,{icon:c.n,style:{color:"White"},size:"sm"})]})," ",(0,p.jsxs)(a.Q_,{onClick:function(){var e="";e='<h2 style="font-size: 16px; text-align: center; color:red">User MIS Report</h2>'+'<p style="font-size: 12px; text-align: center;">'.concat(g," to ").concat(_,"</p> ")+'<div class="justify-content: center"><table  border="1" style="margin-left: auto;margin-right: auto;width:100%;border-bottom: 1px solid #ddd; border-collapse: collapse; font-size: 14px;text-align: center; align: center; "><tr><td colspan="5" style="font-size: 18px; text-align: center; font-weight: bold;background-color: green;">TENDRYL</td> <td colspan="5" style="font-size: 18px; text-align: center; font-weight: bold;background-color: #f8356f;color:white;">MACHINE</td><td colspan="5" style="font-size: 18px; text-align: center; font-weight: bold;background-color: yellow;">PRODUCT</td> </tr><tr><th style="font-weight: bold;width:2%; text-align: center;">Sr. No.</th><th style="font-weight: bold;width:5%;text-align: center;">User ID</th><th style="font-weight: bold;width:5%;text-align: center;">NAME</th><th style="font-weight: bold;width:5%;text-align: center;">Mobile</th><th style="font-weight: bold;width:5%;text-align: center;">Email</th><th style="font-weight: bold;width:5%;text-align: center;">Machin ID</th><th style="font-weight: bold;width:5%;text-align: center;">Model No</th><th style="font-weight: bold;width:5%;text-align: center;">Location</th><th style="font-weight: bold;width:5%;text-align: center;">Current status ON/OFF</th><th style="font-weight: bold;width:5%;text-align: center;">Current Inventory Count</th><th style="font-weight: bold;width:5%;text-align: center;">Product Type</th><th style="font-weight: bold;width:5%;text-align: center;">Refill Quantity</th><th style="font-weight: bold;width:5%;text-align: center;">Quantity Refilled</th><th style="font-weight: bold;width:5%;text-align: center;">Recent Cash Collection Date</th><th style="font-weight: bold;width:5%;text-align: center;">Recent Amount Collected</th></tr>',y.map(((t,n)=>e+='<tr> \n         <td style="text-align: center;">'.concat(n+1,'</td>\n         <td style="text-align: center;">').concat(t.user_id,'</td>\n         <td style="text-align: center;">').concat(t.name,'</td>\n         <td style="text-align: center;">').concat(t.mobile,'</td>\n         <td style="text-align: center;">').concat(t.mail,'</td>\n         <td style="text-align: center;">').concat(t.machine_id,'</td>\n         <td style="text-align: center;">').concat(t.model_no,'</td>\n         <td style="text-align: center;">').concat(t.location,'</td>\n         <td style="text-align: center;">').concat(t.status,'</td>\n         <td style="text-align: center;">').concat(t.count,'</td>\n         <td style="text-align: center;">').concat(t.product_type,'</td>\n         <td style="text-align: center;">').concat(t.refill_quantity,'</td>\n         <td style="text-align: center;">').concat(t.refill_date,'</td>\n       \n         <td style="text-align: center;">').concat(t.recent_cash_collection_date,'</td>\n         <td style="text-align: center;">').concat(t.recent_amount_collected,"</td>\n     </tr>"))),e=(e+="</table></div>").replace(/<th/g,'<th align="left" ').replace(/<td/g,'<td align="left" ');var t=window.open("","","height=400,width=800");t.document.write(e),t.document.close(),setTimeout((function(){t.print()}),10)},type:"button",className:"btn btn-default btn-sm ",style:{backgroundColor:E,color:"white",height:"28px"},children:["Export Pdf ",(0,p.jsx)(i.A,{icon:c.n,style:{color:"White"},size:"sm"})]})," "]})]}),(0,p.jsx)("div",{children:(0,p.jsx)(a.sK,{xm:{cols:12},children:(0,p.jsx)(a.UF,{xs:12,children:(0,p.jsx)(a.Pd,{activePage:1,clickableRows:!0,columns:[{group:"TENDRYL",_props:{colSpan:5,color:"green"},children:[{key:"sr_no",label:"Sr. No.",_props:{scope:"col"},sorter:!1,_style:{minWidth:"40px"}},{key:"user_id",label:"User ID",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"name",label:"Name",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"mobile",label:"Mobile",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"mail",label:"Email",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}}]},{group:"MACHINE",_props:{colSpan:5,color:"red"},children:[{key:"machine_id",label:"Machine Id",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"model_no",label:"Model No",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"location",label:"Location",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"status",label:"Current status ON/OFF",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"count",label:"Current Inventory Count",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}}]},{group:"PRODUCT",_props:{colSpan:5,color:"yellow"},children:[{key:"product_type",label:"Product Type",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"refill_date",lable:"Recent Refill Date",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"refill_quantity",label:"Quantity Refilled",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"recent_cash_collection_date",label:"Recent Cash Collection Date",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}},{key:"recent_amount_collected",label:"Recent Amount Collected",_props:{scope:"col"},sorter:!1,_style:{minWidth:"100px"}}]}],items:y,itemsPerPageSelect:!0,itemsPerPage:10,pagination:!0,scopedColumns:{sr_no:(e,t)=>(0,p.jsx)("td",{children:t+1}),created_at:e=>(0,p.jsx)("td",{children:F(e.created_at)})},itemsPerPageOptions:[10,20,50,100],tableProps:{color:"success-color-secondary",hover:!0,bordered:!0,responsive:!0},tableHeadProps:{color:"light",align:"middle",className:"align-middle"},tableBodyProps:{align:"middle",className:"align-middle"},itemsPerPageLabel:"Rows per page:"})})})})]})})}},76058:(e,t,n)=>{"use strict";n.d(t,{n:()=>r});const r=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='367.997 338.75 271.999 434.747 271.999 17.503 239.999 17.503 239.999 434.745 144.003 338.75 121.376 361.377 256 496 390.624 361.377 367.997 338.75' class='ci-primary'/>"]},46411:(e,t,n)=>{e.exports=n(795)},91078:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(9950),l=(r=a)&&r.__esModule?r:{default:r},i=n(87924),c=n(8010);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return i.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,o=e.enclosingCharacter,a=e.uFEFF,l=e.target,i=e.specs,c=e.replace;this.state.page=window.open(this.buildURI(t,a,n,r,o),l,i,c)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(l.default.Component);s.defaultProps=Object.assign(c.defaultProps,{target:"_blank"}),s.propTypes=c.propTypes,t.default=s},49462:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(9950),i=(r=l)&&r.__esModule?r:{default:r},c=n(87924),s=n(8010);var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,r=n.data,o=n.headers,a=n.separator,l=n.filename,i=n.enclosingCharacter,s=n.uFEFF,d=t&&"function"===typeof r?r():r,u=new Blob([s?"\ufeff":"",(0,c.toCSV)(d,o,a,i)]);return window.navigator.msSaveBlob(u,l),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,a=t.separator,l=t.filename,c=t.uFEFF,s=t.children,d=(t.onClick,t.asyncOnClick,t.enclosingCharacter),u=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),p="undefined"===typeof window?"":this.buildURI(n,c,r,a,d);return i.default.createElement("a",o({download:l},u,{ref:function(t){return e.link=t},target:"_self",href:p,onClick:this.handleClick()}),s)}}]),t}(i.default.Component);d.defaultProps=s.defaultProps,d.propTypes=s.propTypes,t.default=d},87924:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},a=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},l=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},i=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(r(e),r(t)))}),[]))},c=t.jsons2arrays=function(e,t){var n=t=t||i(e),o=t;a(t)&&(n=t.map((function(e){return e.label})),o=t.map((function(e){return e.key})));var l=e.map((function(e){return o.map((function(t){return s(t,e)}))}));return[n].concat(r(l))},s=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,r){var o=e[t];if(void 0!==o&&null!==o)return o;r.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},d=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},u=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return d(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},p=t.arrays2csv=function(e,t,n,o){return u(t?[t].concat(r(e)):e,n,o)},f=t.jsons2csv=function(e,t,n,r){return u(c(e,t),n,r)},y=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},h=t.toCSV=function(e,t,n,r){if(a(e))return f(e,t,n,r);if(l(e))return p(e,t,n,r);if("string"===typeof e)return y(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,a){var l=h(e,n,r,a),i=o()?"application/csv":"text/csv",c=new Blob([t?"\ufeff":"",l],{type:i}),s="data:"+i+";charset=utf-8,"+(t?"\ufeff":"")+l,d=window.URL||window.webkitURL;return"undefined"===typeof d.createObjectURL?s:d.createObjectURL(c)}},795:(e,t,n)=>{"use strict";t.CSVLink=void 0;var r=a(n(91078)),o=a(n(49462));function a(e){return e&&e.__esModule?e:{default:e}}r.default,t.CSVLink=o.default},8010:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,o=n(9950),a=((r=o)&&r.__esModule,n(11942));t.propTypes={data:(0,a.oneOfType)([a.string,a.array,a.func]).isRequired,headers:a.array,target:a.string,separator:a.string,filename:a.string,uFEFF:a.bool,onClick:a.func,asyncOnClick:a.bool,enclosingCharacter:a.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]},4434:()=>{},42019:()=>{}}]);