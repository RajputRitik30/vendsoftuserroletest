"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9266],{39266:(e,s,a)=>{a.r(s),a.d(s,{default:()=>p});var t=a(9950),l=a(1072),i=a(28429),r=a(37017),n=a(42074),c=a(45532),d=a(79988),o=a(7864),u=a(27760),h=a(44885),m=a(44414);const p=function(){(0,i.Zp)();let e=(0,l.A)();const{user:s,authTokens:a}=(0,t.useContext)(c.A);let[p,g]=(0,t.useState)([]),[_,x]=(0,t.useState)([]),[b,j]=(0,t.useState)([]),[v,f]=(0,t.useState)([]),[y,S]=(0,t.useState)([]),[w,C]=(0,t.useState)();const[k,M]=(0,t.useState)(!1),[F,N]=(0,t.useState)(!1),[D,A]=(0,t.useState)(!1),[P,U]=(0,t.useState)(!1),[T,O]=(0,t.useState)([]),[I,V]=(0,t.useState)(!1);let[K,q]=(0,t.useState)([]);const{selectedColor:E}=(0,h.useColor)();(0,t.useEffect)((()=>{z()}),[]);let z=async()=>{let s=await e.get("/machine/api/get_unused_machine_map_for_customer/"),a=await e.get("/machine/api/machine_user_mapping_by_customer/"),t=await e.get("/api/get_user_list/");if(1===s.data.success&&1===t.data.success){let e=[{label:"",value:""}];for(let a=0;a<s.data.result.length;a++){let t=s.data.result[a],l={value:t.id,label:t.machine_id};e.push(l)}let n=[{label:"",value:""}];for(let s=0;s<t.data.result.length;s++){let e=t.data.result[s];if(1==e.is_active){let s={value:e.id,label:e.email};n.push(s)}}let c=[];for(let s=0;s<a.data.result.length;s++){var l,i,r;let e=a.data.result[s],t={id:e.id,assigned_user:null===(l=e.assigned_user)||void 0===l?void 0:l.email,assigned_user_id:null===(i=e.assigned_user)||void 0===i?void 0:i.id,machine_id:null===(r=e.machine)||void 0===r?void 0:r.machine_id,assigned_user_date:e.assigned_user_date};c.push(t)}g(e),f(n),j(c)}else if(0===s.data.success)for(let e=0;e<Object.values(s.data.result).length;e++){let a=Object.values(s.data.result)[e];alert(a)}};const Q=async e=>{let s=[];null===v||void 0===v||v.map((a=>{a.value==e.assigned_user_id&&s.push(a)})),null===v||void 0===v||v.map((a=>{a.value!=e.assigned_user_id&&s.push(a)})),q(s)},L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;const s=new Date(e),a=String(s.getDate()).padStart(2,"0"),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()],l=s.getFullYear(),i=String(s.getHours()).padStart(2,"0"),r=String(s.getMinutes()).padStart(2,"0");return"".concat(a," - ").concat(t," - ").concat(l," ").concat(i,":").concat(r)};return L(),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,m.jsx)("h3",{className:"mb-0",style:{color:"#2C384A"},children:"Machine Mapping"}),(0,m.jsx)(r.Q_,{onClick:()=>{N(!F)},className:"mt-2",style:{backgroundColor:E,color:"white"},children:"Map Machine"})]}),(0,m.jsx)(r.sK,{children:(0,m.jsx)(r.UF,{xs:12,children:(0,m.jsx)(r.Pd,{activePage:1,clickableRows:!0,columns:[{key:"sr_no",label:"Sr. No.",sorter:!1,_props:{color:"secondary",className:"fw-semibold"}},{label:"Assigned User",key:"assigned_user",sorter:!1,_props:{color:"secondary",className:"fw-semibold"}},{label:"Assigned Machine ID",key:"machine_id",sorter:!1,_props:{color:"secondary",className:"fw-semibold"}},{label:"Assigned Date",key:"assigned_user_date",sorter:!1,_props:{color:"secondary",className:"fw-semibold"}},{key:"Action",label:"Action",filter:!1,sorter:!1,_props:{color:"secondary",className:"fw-semibold"}}],columnSorter:!0,items:b,itemsPerPageSelect:!0,itemsPerPage:10,pagination:!0,scopedColumns:{Action:e=>(0,m.jsxs)("td",{children:[(0,m.jsx)(n.N_,{to:"#",children:(0,m.jsx)(o.A,{icon:u.K,style:{color:"blue"},size:"md",title:"Edit",onClick:()=>[C(e),Q(e),M(e.id),A(!D)]})}),"\xa0\xa0\xa0",(0,m.jsx)(n.N_,{to:"/machineuserview/"+"".concat(e.id),children:(0,m.jsx)(r.t7,{src:d,width:17,height:15,title:"View State"})})]}),sr_no:(e,s)=>(0,m.jsx)("td",{children:s+1}),assigned_user_date:e=>(0,m.jsx)("td",{children:L(e.assigned_user_date)})},itemsPerPageOptions:[10,20,50,100],tableFilter:!0,tableProps:{color:"success-color-secondary",hover:!0,border:"1.5px solid #074",responsive:!0},tableHeadProps:{color:"light",align:"middle",className:"align-middle"},tableBodyProps:{align:"middle",className:"align-middle"},tableFilterLabel:"Search : ",tableFilterPlaceholder:"Enter String to Search",itemsPerPageLabel:"Rows per page:"})})})]}),(0,m.jsxs)(r.zS,{size:"lg",visible:F,onClose:()=>[N(!1),U(!1),V(!1)],backdrop:"static",children:[(0,m.jsx)(r.E4,{onClose:()=>[N(!1),U(!1),V(!1)],style:{backgroundColor:E,color:"white"},children:(0,m.jsx)(r.lb,{children:"Add User Mapping"})}),(0,m.jsxs)(r.qI,{className:"row g-3 needs-validation",style:{margin:"10px"},noValidate:!0,validated:P,onSubmit:async s=>{const a=s.currentTarget;if(s.preventDefault(),!0===a.checkValidity()){const a=new FormData(s.target),t=(new Date).toISOString();a.append("assigned_user_date",t);let l=await e.put("/machine/machine-user-mapping/".concat(s.target.machine1.value,"/"),a);if(1===l.data.success)alert("User is mapped to Machine Id"),U(!1),N(!1),z(),window.location.reload();else if(0===l.data.success)for(let e=0;e<Object.values(l.data.result).length;e++){let s=Object.values(l.data.result)[e];alert(s)}}else U(!0)},children:[(0,m.jsx)(r.Tc,{children:(0,m.jsx)(r.sK,{sm:12,className:"",children:(0,m.jsxs)(r.sK,{children:[(0,m.jsxs)(r.UF,{sm:6,children:[(0,m.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Map User",(0,m.jsx)("span",{className:"text-danger",children:"*"})]}),(0,m.jsx)(r.MT,{name:"assigned_user",options:v,required:!0}),(0,m.jsx)(r.To,{invalid:!0,children:"Please select User"})]}),(0,m.jsxs)(r.UF,{sm:6,children:[(0,m.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Map Machine",(0,m.jsx)("span",{className:"text-danger",children:"*"})]}),(0,m.jsx)(r.MT,{name:"machine1",options:p,required:!0}),(0,m.jsx)(r.To,{invalid:!0,children:"Please select Machine id"})]})]})})}),(0,m.jsxs)(r.If,{children:[(0,m.jsx)(r.Q_,{onClick:()=>[N(!1),U(!1),V(!1)],style:{backgroundColor:"#F5F5F5",color:"black",borderColor:"#DCDCDC"},children:"\xa0Close\xa0"}),(0,m.jsxs)(r.Q_,{type:"submit",style:{backgroundColor:E,color:"white"},disabled:I,children:["\xa0 ","Submit"]})]})]})]}),(0,m.jsxs)(r.zS,{size:"lg",visible:D,onClose:()=>[A(!1),U(!1)],backdrop:"static",children:[(0,m.jsx)(r.E4,{onClose:()=>[A(!1),U(!1)],style:{backgroundColor:E,color:"white"},children:(0,m.jsx)(r.lb,{children:"Edit User Mapping"})}),(0,m.jsxs)(r.qI,{className:"row g-3 needs-validation",style:{margin:"10px"},noValidate:!0,validated:P,onSubmit:async s=>{const a=s.currentTarget;if(s.preventDefault(),!0===a.checkValidity()){const a=new FormData(s.target);a.append("password","Vendsoft@12");let t=await e.patch("/api/users/".concat(k,"/"),a);if(1===t.data.success)alert("User mapped to Machine ID updated."),U(!1),A(!1),z();else if(0===t.data.success)for(let e=0;e<Object.values(t.data.result).length;e++){let s=Object.values(t.data.result)[e];alert(s)}}U(!0)},children:[(0,m.jsx)(r.Tc,{children:(0,m.jsx)(r.sK,{sm:12,className:"",children:(0,m.jsxs)(r.sK,{children:[(0,m.jsxs)(r.UF,{sm:6,children:[(0,m.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Map User",(0,m.jsx)("span",{className:"text-danger",children:"*"})]}),(0,m.jsx)(r.MT,{name:"assigned_user",defaultValue:null===w||void 0===w?void 0:w.assigned_user,options:K,required:!0}),(0,m.jsx)(r.To,{invalid:!0,children:"Please select User"})]}),(0,m.jsxs)(r.UF,{sm:6,children:[(0,m.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Map Machine",(0,m.jsx)("span",{className:"text-danger",children:"*"})]}),(0,m.jsx)(r.OG,{type:"text",id:"name",name:"machine1",defaultValue:null===w||void 0===w?void 0:w.machine_id,required:!0,disabled:!0}),(0,m.jsx)(r.To,{invalid:!0,children:"Please select Machine id"})]})]})})}),(0,m.jsxs)(r.If,{children:[(0,m.jsx)(r.Q_,{onClick:()=>[A(!1),U(!1)],style:{backgroundColor:"#F5F5F5",color:"black",borderColor:"#DCDCDC"},children:"\xa0Close\xa0"}),(0,m.jsx)(r.Q_,{type:"submit",style:{backgroundColor:E,color:"white"},children:"\xa0Submit"})]})]})]})]})}},27760:(e,s,a)=>{a.d(s,{K:()=>t});const t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]}}]);