"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1486],{31486:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var a=t(9950),l=t(1072),i=t(28429),r=t(37017),c=t(42074),n=t(45532),o=t(79988),d=t(7864),u=t(27760),m=t(44885),h=t(44414);const p=function(){(0,i.Zp)();let e=(0,l.A)();const{user:s,authTokens:t}=(0,a.useContext)(n.A);let[p,g]=(0,a.useState)([]),[_,x]=(0,a.useState)([]),[b,j]=(0,a.useState)([]),[v,f]=(0,a.useState)([]),[y,C]=(0,a.useState)([]),[w,S]=(0,a.useState)([]);const{selectedColor:k}=(0,m.useColor)();let[M,N]=(0,a.useState)();const[F,D]=(0,a.useState)(!1),[A,P]=(0,a.useState)(!1),[O,T]=(0,a.useState)(!1),[I,K]=(0,a.useState)(!1),[V,q]=(0,a.useState)([]),[E,z]=(0,a.useState)(!1);let[Q,U]=(0,a.useState)([]);(0,a.useEffect)((()=>{W()}),[]);let W=async()=>{let s=await e.get("/machine/api/get_unused_machine_map/"),t=await e.get("/machine/api/machine_user_mapping_by_admin_customer/"),a=await e.get("/api/get_customer_list/");if(1===s.data.success&&1===a.data.success){let e=[{label:"",value:""}];for(let t=0;t<s.data.result.length;t++){let a=s.data.result[t],l={value:a.id,label:a.machine_id};e.push(l)}let c=[];for(let s=0;s<a.data.result.length;s++){let e=a.data.result[s];if(1==e.is_active){let s={value:e.id,label:e.email};c.push(s)}}let n=[{label:"",value:""}];for(let s=0;s<a.data.result.length;s++){let e=a.data.result[s];if(1==e.is_active){let s={value:e.id,label:e.email};n.push(s)}}let o=[];for(let s=0;s<t.data.result.length;s++){var l,i,r;let e=t.data.result[s],a={id:e.id,assigned_customer:null===(l=e.assigned_customer)||void 0===l?void 0:l.email,assigned_customer_id:null===(i=e.assigned_customer)||void 0===i?void 0:i.id,machine_id:null===(r=e.machine)||void 0===r?void 0:r.machine_id,assigned_customer_date:e.assigned_customer_date,assigned_customer_name:e.assigned_customer_date};o.push(a)}g(e),f(c),j(o),S(n)}else if(0===s.data.success)for(let e=0;e<Object.values(s.data.result).length;e++){let t=Object.values(s.data.result)[e];alert(t)}};const L=async e=>{let s=[];null===v||void 0===v||v.map((t=>{t.value==e.assigned_customer_id&&s.push(t)})),null===v||void 0===v||v.map((t=>{t.value!=e.assigned_customer_id&&s.push(t)})),U(s)},Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;const s=new Date(e),t=String(s.getDate()).padStart(2,"0"),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()],l=s.getFullYear(),i=String(s.getHours()).padStart(2,"0"),r=String(s.getMinutes()).padStart(2,"0");return"".concat(t," - ").concat(a," - ").concat(l," ").concat(i,":").concat(r)};return Z(),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,h.jsx)("h3",{className:"mb-0",style:{color:"#2C384A"},children:"Machine Customer Mapping"}),(0,h.jsx)(r.Q_,{onClick:()=>{P(!A)},className:"mt-2",style:{backgroundColor:k,color:"white"},children:"Map Machine"})]}),(0,h.jsx)(r.sK,{children:(0,h.jsx)(r.UF,{xs:12,children:(0,h.jsx)(r.Pd,{activePage:1,clickableRows:!0,columns:[{key:"sr_no",label:"Sr. No.",sorter:!1,_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"60px"}},{label:"Assigned Customer",key:"assigned_customer",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"150px"},sorter:!1},{label:"Assigned Machine Id",key:"machine_id",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"160px"},sorter:!1},{label:"Assigned Date",key:"assigned_customer_date",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"120px"},sorter:!1},{key:"Action",label:"Action",filter:!1,sorter:!1,_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"60px"}}],columnSorter:!0,items:b,itemsPerPageSelect:!0,itemsPerPage:10,pagination:!0,scopedColumns:{Action:s=>(0,h.jsxs)("td",{children:[(0,h.jsx)(c.N_,{to:"#",children:(0,h.jsx)(d.A,{icon:u.K,style:{color:"blue"},size:"md",title:"Edit",onClick:()=>[N(s),D(s.id),L(s),T(!O)]})}),"\xa0\xa0\xa0",(0,h.jsx)(c.N_,{to:"#",onClick:()=>{!0===window.confirm("Are you sure, you want to delete this country?")&&(async s=>{let t=await e.delete("/api/users/".concat(s,"/"));if(1===t.data.success)alert("Country is deleted"),W();else if(0===t.data.success)for(let e=0;e<Object.values(t.data.result).length;e++){let s=Object.values(t.data.result)[e];alert(s)}})(s.id)}})," ","\xa0\xa0\xa0",(0,h.jsx)(c.N_,{to:"/machinecustview/"+"".concat(s.id),children:(0,h.jsx)(r.t7,{src:o,width:17,height:15,title:"View Details"})})," \xa0\xa0\xa0"]}),sr_no:(e,s)=>(0,h.jsx)("td",{children:s+1}),assigned_customer_date:e=>(0,h.jsx)("td",{children:Z(e.assigned_customer_date)})},itemsPerPageOptions:[10,20,50,100],tableFilter:!0,tableProps:{color:"success-color-secondary",hover:!0,border:"1.5px solid #074",responsive:!0},tableHeadProps:{color:"light",align:"middle",className:"align-middle"},tableBodyProps:{align:"middle",className:"align-middle"},tableFilterLabel:"Search : ",tableFilterPlaceholder:"Enter String to Search",itemsPerPageLabel:"Rows per page:"})})})]}),(0,h.jsxs)(r.zS,{size:"lg",visible:A,onClose:()=>[P(!1),K(!1),z(!1)],backdrop:"static",children:[(0,h.jsx)(r.E4,{onClose:()=>[P(!1),K(!1),z(!1)],style:{backgroundColor:k,color:"white"},children:(0,h.jsx)(r.lb,{children:"Add Customer Mapping"})}),(0,h.jsxs)(r.qI,{className:"row g-3 needs-validation",style:{margin:"10px"},noValidate:!0,validated:I,onSubmit:async s=>{const t=s.currentTarget;if(s.preventDefault(),!0===t.checkValidity()){const t=new FormData(s.target),a=(new Date).toISOString();t.append("assigned_customer_date",a);let l=await e.post("/machine/machine-user-mapping/",t);if(1===l.data.success)alert("Customer is mapped to Machine Id"),K(!1),P(!1),W(),window.location.reload();else if(0===l.data.success)for(let e=0;e<Object.values(l.data.result).length;e++){let s=Object.values(l.data.result)[e];alert(s)}}else K(!0)},children:[(0,h.jsx)(r.Tc,{children:(0,h.jsx)(r.sK,{sm:12,className:"",children:(0,h.jsxs)(r.sK,{children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Map Customer",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.MT,{name:"assigned_customer",options:w,required:!0}),(0,h.jsx)(r.To,{invalid:!0,children:"Please select Customer"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Map Machine",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.MT,{name:"machine",options:p,required:!0}),(0,h.jsx)(r.To,{invalid:!0,children:"Please select Machine id"})]})]})})}),(0,h.jsxs)(r.If,{children:[(0,h.jsx)(r.Q_,{onClick:()=>[P(!1),K(!1),z(!1)],style:{backgroundColor:"#F5F5F5",color:"black",borderColor:"#DCDCDC"},children:"\xa0Close\xa0"}),(0,h.jsxs)(r.Q_,{type:"submit",style:{backgroundColor:k,color:"white"},disabled:E,children:["\xa0 ","Submit"]})]})]})]}),(0,h.jsxs)(r.zS,{size:"lg",visible:O,onClose:()=>[T(!1),K(!1)],backdrop:"static",children:[(0,h.jsx)(r.E4,{onClose:()=>[T(!1),K(!1)],style:{backgroundColor:k,color:"white"},children:(0,h.jsx)(r.lb,{children:"Edit Customer Mapping"})}),(0,h.jsxs)(r.qI,{className:"row g-3 needs-validation",style:{margin:"10px"},noValidate:!0,validated:I,onSubmit:async s=>{const t=s.currentTarget;if(s.preventDefault(),!0===t.checkValidity()){const t=new FormData(s.target);let a=await e.patch("/machine/machine-user-mapping/".concat(F,"/"),t);if(1===a.data.success)alert("Customer mapped to Machine ID updated."),K(!1),T(!1),W();else if(0===a.data.success)for(let e=0;e<Object.values(a.data.result).length;e++){let s=Object.values(a.data.result)[e];alert(s)}}K(!0)},children:[(0,h.jsx)(r.Tc,{children:(0,h.jsx)(r.sK,{sm:12,className:"",children:(0,h.jsxs)(r.sK,{children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Map Customer",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.MT,{name:"assigned_customer",options:Q,defaultValue:null===M||void 0===M?void 0:M.assigned_customer,required:!0}),(0,h.jsx)(r.To,{invalid:!0,children:"Please select Customer"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Map Machine",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"name",name:"machine",defaultValue:null===M||void 0===M?void 0:M.machine_id,required:!0,disabled:!0}),(0,h.jsx)(r.To,{invalid:!0,children:"Please select Machine id"})]})]})})}),(0,h.jsxs)(r.If,{children:[(0,h.jsx)(r.Q_,{onClick:()=>[T(!1),K(!1)],style:{backgroundColor:"#F5F5F5",color:"black",borderColor:"#DCDCDC"},children:"\xa0Close\xa0"}),(0,h.jsx)(r.Q_,{type:"submit",style:{backgroundColor:k,color:"white"},children:"\xa0Submit"})]})]})]})]})}},27760:(e,s,t)=>{t.d(s,{K:()=>a});const a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]}}]);