"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3670],{33670:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(9950),l=a(1072),r=a(37017),i=a(42074),n=(a(45532),a(79988)),d=a(7864),o=a(27760);const c=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>"];var m=a(44885),h=a(44414);const u=function(){let e=(0,l.A)(),[s,a]=(0,t.useState)([]),[u,x]=(0,t.useState)([]),[p,j]=(0,t.useState)([]),[y,g]=(0,t.useState)();const[v,b]=(0,t.useState)(!1),[f,_]=(0,t.useState)(!1),[C,N]=(0,t.useState)(!1),[F,A]=(0,t.useState)(!1),[D,w]=(0,t.useState)([]),[P,S]=(0,t.useState)(!1),[k,O]=(0,t.useState)(!1),{selectedColor:L}=(0,m.useColor)();(0,t.useEffect)((()=>{T()}),[]);let T=async()=>{let s=await e.get("api/users/");if(1===s.data.success){let e=[],a=[];for(let t=0;t<s.data.result.length;t++){let l=s.data.result[t];e.push(l.email),a.push(l.mobile_no)}x(e),j(a)}else if(0===s.data.success)for(let e=0;e<Object.values(s.data.result).length;e++){let a=Object.values(s.data.result)[e];alert(a)}};(0,t.useEffect)((()=>{z()}),[]);let z=async()=>{let s=await e.get("api/get_customer_list/");if(1===s.data.success){let e=[];for(let a=0;a<s.data.result.length;a++){let t=s.data.result[a],l={id:t.id,name:t.name,email:t.email,mobile_no:t.mobile_no,address1:t.address1,address2:t.address2,pincode:t.pincode,country:t.country,landmark:t.landmark,state:t.state,spoc_id:t.spoc_id,created_at:t.created_at,organization:t.organization,role:t.role,created_by:t.created_by,is_active:1==t.is_active?"Active":"Inactive"};e.sort(((e,s)=>new Date(s.created_at)-new Date(e.created_at))),e.push(l)}a(e)}else if(0===s.data.success)for(let e=0;e<Object.values(s.data.result).length;e++){let a=Object.values(s.data.result)[e];alert(a)}},U=()=>{window.location.reload()},q=[{label:"Active",value:!0},{label:"Inactive",value:!1}],V=e=>{let s=[];for(let a=0;a<q.length;a++){let t=q[a];e==t.label&&s.push(t)}for(let a=0;a<q.length;a++){let t=q[a];e!=t.label&&s.push(t)}w(s)};const G=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;const s=new Date(e),a=String(s.getDate()).padStart(2,"0"),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][s.getMonth()],l=s.getFullYear(),r=String(s.getHours()).padStart(2,"0"),i=String(s.getMinutes()).padStart(2,"0");return"".concat(a," - ").concat(t," - ").concat(l," ").concat(r,":").concat(i)};return G(),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,h.jsx)("h3",{className:"mb-0",style:{color:"#2C384A"},children:"Customer Onboarding"}),(0,h.jsx)(r.Q_,{onClick:()=>{_(!f)},className:"mt-2",style:{backgroundColor:L,color:"white",border:"0px"},children:"Add New"})]}),(0,h.jsx)(r.sK,{children:(0,h.jsx)(r.UF,{xs:12,children:(0,h.jsx)(r.Pd,{activePage:1,clickableRows:!0,columns:[{key:"sr_no",label:"Sr. No.",sorter:!1,_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"60px"}},{label:"Name",key:"name",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"130px"},sorter:!1},{label:"Email",key:"email",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"130px"},sorter:!1},{label:"SPOC ID",key:"spoc_id",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"130px"},sorter:!1},{label:"Organization Name",key:"organization",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"130px"},sorter:!1},{label:" Created Date",key:"created_at",SorterValue:"asc",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"130px"},sorter:!1},{label:"Mobile No",key:"mobile_no",_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"80px"},sorter:!1},{label:"Status",key:"is_active",sorter:!1,_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"60px"}},{key:"Action",label:"Action",filter:!1,sorter:!1,_props:{color:"secondary",className:"fw-semibold"},_style:{minWidth:"90px"}}],columnSorter:!0,items:s,itemsPerPageSelect:!0,itemsPerPage:10,pagination:!0,scopedColumns:{Action:e=>(0,h.jsxs)("td",{children:[(0,h.jsx)(i.N_,{to:"#",children:(0,h.jsx)(d.A,{icon:o.K,style:{color:"blue"},size:"md",title:"Edit",onClick:()=>[g(e),b(e.id),N(!C),V(e.is_active)]})}),"\xa0\xa0\xa0",(0,h.jsx)(i.N_,{to:"/Onbordingcustview/"+"".concat(e.id),children:(0,h.jsx)(r.t7,{src:n,width:17,height:15,title:"View Details"})}),"\xa0\xa0\xa0",(0,h.jsx)(i.N_,{to:"/customeruser/"+"".concat(e.id),children:(0,h.jsx)(d.A,{icon:c,style:{color:"blue"},size:"md",title:"User Details"})})]}),sr_no:(e,s)=>(0,h.jsx)("td",{children:s+1}),created_at:e=>(0,h.jsx)("td",{children:G(e.created_at)})},sorterValue:{coloumns:"created_at",state:"asc"},itemsPerPageOptions:[10,20,50,100],tableFilter:!0,tableProps:{color:"success-color-secondary",hover:!0,border:"1.5px solid #074",responsive:!0},tableHeadProps:{color:"light",align:"middle",className:"align-middle"},tableBodyProps:{align:"middle",className:"align-middle"},tableFilterLabel:"Search : ",tableFilterPlaceholder:"Enter String to Search",itemsPerPageLabel:"Rows per page:"})})})]}),(0,h.jsxs)(r.zS,{size:"lg",visible:f,onClose:()=>[_(!1),A(!1),S(!1)],backdrop:"static",children:[(0,h.jsx)(r.E4,{onClose:()=>[_(!1),A(!1),S(!1)],style:{backgroundColor:L,color:"white"},children:(0,h.jsx)(r.lb,{children:"Add New Customer"})}),(0,h.jsxs)(r.qI,{className:"row g-3 needs-validation",style:{margin:"10px"},noValidate:!0,validated:F,onSubmit:s=>{s.preventDefault(),(async s=>{O(!0);const a=s.currentTarget;if(s.preventDefault(),!0===a.checkValidity())if(u.includes(s.target.email.value.toLowerCase()))O(!1),alert("This email already exists");else if(p.includes(s.target.mobile_no.value))O(!1),alert("This mobile number already exists");else{const a=new FormData(s.target);a.append("password","Vendsoft@12"),a.append("email",s.target.email.value.toLowerCase()),a.append("is_active",!0),a.append("role","3");let t=await e.post("/api/users/",a);if(1===t.data.success)alert("Customer is created"),A(!1),_(!1),z(),U();else if(0===t.data.success)for(let e=0;e<Object.values(t.data.result).length;e++){let s=Object.values(t.data.result)[e];alert(s)}}else A(!0);O(!1)})(s),s.currentTarget.checkValidity()&&S(!0)},children:[(0,h.jsxs)(r.Tc,{children:[(0,h.jsxs)(r.sK,{sm:12,className:"",children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Oragnization Name",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"organization",name:"organization",pattern:"^[^\\d]+$",onKeyPress:e=>{const s=e.which||e.keyCode,a=String.fromCharCode(s);/^[^\d]+$/.test(a)||e.preventDefault()},required:!0,maxLength:200}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your organization name"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Name",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"name",name:"name",pattern:"[A-Za-z\\s]+",required:!0,maxLength:50}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your name"})]})]}),(0,h.jsxs)(r.sK,{sm:12,className:"mb-1",children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Email",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"email",id:"email",pattern:"^(?!\\s)[^\\s@]+@[^\\s@]+[a-zA-Z]+(\\.[a-zA-Z]+)+$",name:"email",required:!0,maxLength:50}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your email"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Mobile No.",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"tel",id:"mobile_no",name:"mobile_no",required:!0,maxLength:15,minLength:8,pattern:"^(?!\\s)[0-9\\s]+$",onKeyPress:e=>{const s=e.which||e.keyCode,a=String.fromCharCode(s);/^[0-9\s]*$/.test(a)||e.preventDefault()}}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your mobile number"})]})]}),(0,h.jsxs)(r.sK,{sm:12,className:"mb-1",children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Address 1",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"address1",name:"address1",required:!0,maxLength:200}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your address1"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsx)(r.A6,{htmlFor:"validationDefault01",children:"Address 2"}),(0,h.jsx)(r.OG,{type:"text",id:"address2",name:"address2",maxLength:200}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your address2"})]})]}),(0,h.jsxs)(r.sK,{sm:12,className:"mb-1",children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Pincode",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"pincode",name:"pincode",required:!0,maxLength:6,minLength:4,pattern:"^[0-9]+$",onKeyPress:e=>{const s=e.which||e.keyCode,a=String.fromCharCode(s);/^[0-9]$/.test(a)||e.preventDefault()}}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your pincode"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Country",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"country",name:"country",required:!0,pattern:"[A-Za-z\\s]+",maxLength:50}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your country"})]})]}),(0,h.jsxs)(r.sK,{sm:12,className:"mb-1",children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["State",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"state",name:"state",pattern:"[A-Za-z\\s]+",required:!0,maxLength:50}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your state"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["SPOC ID",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"spoc_id",name:"spoc_id",required:!0,maxLength:50}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your spoc id"})]})]})]}),(0,h.jsxs)(r.If,{children:[(0,h.jsx)(r.Q_,{onClick:()=>[_(!1),A(!1),S(!1)],style:{backgroundColor:"#F5F5F5",color:"black",borderColor:"#DCDCDC",border:"0px"},children:"\xa0Close\xa0"}),(0,h.jsx)(r.Q_,{type:"submit",style:{backgroundColor:L,color:"white"},children:"\xa0Submit"})]})]}),k?(0,h.jsx)(r.JT,{className:"Spinner",style:{color:L}}):""]}),(0,h.jsxs)(r.zS,{size:"lg",visible:C,onClose:()=>[N(!1),A(!1)],backdrop:"static",children:[(0,h.jsx)(r.E4,{onClose:()=>[N(!1),A(!1)],style:{backgroundColor:L,color:"white"},children:(0,h.jsx)(r.lb,{children:"Edit Customer Details"})}),(0,h.jsxs)(r.qI,{className:"row g-3 needs-validation",style:{margin:"10px"},noValidate:!0,validated:F,onSubmit:async s=>{const a=s.currentTarget;if(s.preventDefault(),!0===a.checkValidity()){const a=new FormData(s.target);a.append("password","Vendsoft@12");let t=await e.patch("/api/users/".concat(v,"/"),a);if(1===t.data.success)alert("Customer details updated"),A(!1),N(!1),z(),U();else if(0===t.data.success)for(let e=0;e<Object.values(t.data.result).length;e++){let s=Object.values(t.data.result)[e];alert(s)}}A(!0)},children:[(0,h.jsxs)(r.Tc,{children:[(0,h.jsxs)(r.sK,{sm:12,className:"",children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Oragnization Name",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"organization",name:"organization",required:!0,maxLength:200,defaultValue:null===y||void 0===y?void 0:y.organization,pattern:"^[^\\d]+$",onKeyPress:e=>{const s=e.which||e.keyCode,a=String.fromCharCode(s);/^[^\d]+$/.test(a)||e.preventDefault()}}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your organization name"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Name",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"name",name:"name",required:!0,pattern:"[A-Za-z\\s]+",defaultValue:null===y||void 0===y?void 0:y.name,maxLength:50}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your name"})]})]}),(0,h.jsxs)(r.sK,{sm:12,className:"mb-1",children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Email",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"email",id:"email",pattern:"^(?!\\s)[^\\s@]+@[^\\s@]+[a-zA-Z]+(\\.[a-zA-Z]+)+$",defaultValue:null===y||void 0===y?void 0:y.email,name:"email",required:!0,maxLength:50}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your email"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Mobile No.",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"mobile_no",name:"mobile_no",defaultValue:null===y||void 0===y?void 0:y.mobile_no,required:!0,maxLength:15,minLength:8,pattern:"^(?!\\s)[0-9\\s]+$",onKeyPress:e=>{const s=e.which||e.keyCode,a=String.fromCharCode(s);/^[0-9\s]*$/.test(a)||e.preventDefault()}}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your mobile no"})]})]}),(0,h.jsxs)(r.sK,{sm:12,className:"mb-1",children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Address 1",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"address1",defaultValue:null===y||void 0===y?void 0:y.address1,name:"address1",required:!0,maxLength:200}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your address1"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Address 2",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"address2",name:"address2",defaultValue:null===y||void 0===y?void 0:y.address2,maxLength:200}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your address2"})]})]}),(0,h.jsxs)(r.sK,{sm:12,className:"mb-1",children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Pincode",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"pincode",defaultValue:null===y||void 0===y?void 0:y.pincode,name:"pincode",required:!0,maxLength:6,minLength:4,pattern:"^[0-9]+$",onKeyPress:e=>{const s=e.which||e.keyCode,a=String.fromCharCode(s);/^[0-9]$/.test(a)||e.preventDefault()}}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your pincode"})]}),(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["Country",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"country",defaultValue:null===y||void 0===y?void 0:y.country,name:"country",required:!0,pattern:"[A-Za-z\\s]+",maxLength:50}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your country"})]})]}),(0,h.jsxs)(r.sK,{sm:12,className:"mb-1",children:[(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["State",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",defaultValue:null===y||void 0===y?void 0:y.state,id:"state",name:"state",pattern:"[A-Za-z\\s]+",required:!0,maxLength:50}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your state"})]}),(0,h.jsxs)(r.UF,{md:6,children:[(0,h.jsx)(r.A6,{htmlFor:"validationCustom01",children:" Status "}),(0,h.jsx)(r.MT,{id:"is_active",name:"is_active",defaultValue:null===y||void 0===y?void 0:y.is_active,required:!0,options:D}),(0,h.jsx)(r.To,{invalid:!0,children:"Please select status"})]})]}),(0,h.jsx)(r.sK,{sm:12,className:"mb-1",children:(0,h.jsxs)(r.UF,{sm:6,children:[(0,h.jsxs)(r.A6,{htmlFor:"validationDefault01",children:["SPOC ID",(0,h.jsx)("span",{className:"text-danger",children:"*"})]}),(0,h.jsx)(r.OG,{type:"text",id:"spoc_id",name:"spoc_id",defaultValue:null===y||void 0===y?void 0:y.spoc_id,required:!0,maxLength:50}),(0,h.jsx)(r.To,{invalid:!0,children:"Please enter your spoc id"})]})})]}),(0,h.jsxs)(r.If,{children:[(0,h.jsx)(r.Q_,{onClick:()=>[N(!1),A(!1)],style:{backgroundColor:"#F5F5F5",color:"black",borderColor:"#DCDCDC"},children:"\xa0Close\xa0"}),(0,h.jsx)(r.Q_,{type:"submit",style:{backgroundColor:L,color:"white"},children:"\xa0Submit"})]})]})]})]})}},27760:(e,s,a)=>{a.d(s,{K:()=>t});const t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]}}]);