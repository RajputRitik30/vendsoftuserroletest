"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9305],{99305:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var s=a(9950),l=a(1072),r=a(28429),o=a(37017),c=a(42074),i=a(45532),n=a(79988),d=a(7864),u=a(27760),m=a(44414);const b=function(){(0,r.Zp)();let e=(0,l.A)();const{user:t,authTokens:a}=(0,s.useContext)(i.A);let[b,p]=(0,s.useState)([]),[_,h]=(0,s.useState)([]),[g,y]=(0,s.useState)([]),[f,x]=(0,s.useState)([]),[S,v]=(0,s.useState)();const[w,j]=(0,s.useState)(!1),[N,k]=(0,s.useState)(!1),[A,P]=(0,s.useState)(!1),[C,W]=(0,s.useState)(!1),[D,F]=(0,s.useState)([]),[M,O]=(0,s.useState)(!1);(0,s.useEffect)((()=>{E()}),[]);let E=async()=>{let t=await e.get("api/users/");if(1===t.data.success){let e=[],a=[];for(let s=0;s<t.data.result.length;s++){let l=t.data.result[s];e.push(l.email),a.push(l.mobile_no)}h(e),y(a)}else if(0===t.data.success)for(let e=0;e<Object.values(t.data.result).length;e++){let a=Object.values(t.data.result)[e];alert(a)}};(0,s.useEffect)((()=>{L()}),[]);let L=async()=>{let t=await e.get("api/get_user_list/");if(console.log(t),1===t.data.success){let e=[];for(let a=0;a<t.data.result.length;a++){let s=t.data.result[a];console.log(s);let l={id:s.id,name:s.name,email:s.email,mobile_no:s.mobile_no,address1:s.address1,address2:s.address2,pincode:s.pincode,country:s.country,landmark:s.landmark,state:s.state,created_at:s.created_at,role:s.role,created_by:s.created_by,is_active:!0===s.is_active?"Active":"Inactive"};e.sort(((e,t)=>new Date(t.created_at)-new Date(e.created_at))),e.push(l)}p(e)}else if(0===t.data.success)for(let e=0;e<Object.values(t.data.result).length;e++){let a=Object.values(t.data.result)[e];alert(a)}};const Z=e=>{const t=new Date(e),a=String(t.getDate()).padStart(2,"0"),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],l=t.getFullYear(),r=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0");return"".concat(a," - ").concat(s," - ").concat(l,"  ").concat(r,":").concat(o)};let J=[{label:"Active",value:!0},{label:"Inactive",value:!1}],K=e=>{console.log(e);let t=[];for(let a=0;a<J.length;a++){let s=J[a];e==s.label&&t.push(s)}for(let a=0;a<J.length;a++){let s=J[a];e!=s.label&&t.push(s)}F(t)};return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,m.jsx)("h3",{className:"mb-0",style:{color:"#2C384A"},children:"Basic Plan"}),(0,m.jsx)(o.Q_,{onClick:()=>{k(!N)},className:"mt-2",style:{backgroundColor:"#2596be",color:"white",border:"none",fontWeight:"500"},children:"Add New"})]}),(0,m.jsx)(o.sK,{xm:{cols:12},children:(0,m.jsx)(o.UF,{xs:12,children:(0,m.jsx)(o.E$,{className:"mb-1 shadow bg-body rounded",children:(0,m.jsx)(o.W6,{children:(0,m.jsx)(o.Pd,{activePage:1,clickableRows:!0,columns:[{key:"sr_no",label:"Sr. No.",sorter:!1,_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"75px"}},{label:"Name",key:"name",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"100px"},sorter:!1},{label:"Email",key:"email",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"130px"},sorter:!1},{label:"Created Date",key:"created_at",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"120px"},sorter:!1},{label:"Mobile No",key:"mobile_no",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"80px"},sorter:!1},{label:"Status",key:"is_active",sorter:!1,_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"60px"}},{key:"Action",label:"Action",filter:!1,sorter:!1,_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"60px"}}],columnSorter:!0,items:b,itemsPerPageSelect:!0,itemsPerPage:10,pagination:!0,scopedColumns:{Action:e=>(0,m.jsxs)("td",{children:[(0,m.jsx)(c.N_,{to:"#",children:(0,m.jsx)(d.A,{icon:u.K,style:{color:"blue"},size:"md",title:"Edit",onClick:()=>[v(e),j(e.id),K(e.is_active),P(!A)]})}),"\xa0\xa0\xa0",(0,m.jsx)(c.N_,{to:"/Onboardingview/"+"".concat(e.id),children:(0,m.jsx)(o.t7,{src:n,width:17,height:15,title:"View Details"})})]}),sr_no:(e,t)=>(0,m.jsx)("td",{children:t+1}),created_at:e=>(0,m.jsx)("td",{children:Z(e.created_at)})},sorterValue:{coloumns:"created_at",state:"asc"},itemsPerPageOptions:[10,20,50,100],tableFilter:!0,tableProps:{color:"success-color-secondary",hover:!0,border:"1.5px solid #074",responsive:!0},tableFilterLabel:"Search : ",tableFilterPlaceholder:"Enter String to Search",itemsPerPageLabel:"Rows per page:"})})})})})]})})}},27760:(e,t,a)=>{a.d(t,{K:()=>s});const s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]}}]);