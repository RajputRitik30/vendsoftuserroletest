"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4538],{4538:(e,s,o)=>{o.r(s),o.d(s,{default:()=>d});var l=o(9950),c=o(37017),t=o(25825),a=o(44885),r=o(1072),i=o(74297),n=o(44414);const d=()=>{const{selectedColor:e,setSelectedColor:s,handleAddColor:o,fontColor:d}=(0,a.useColor)(),[x,h]=(0,l.useState)(!1),[m,u]=(0,l.useState)(""),p=(0,r.A)(),g=(0,i.A)(),[j,b]=(0,l.useState)(""),[f,y]=(0,l.useState)(!1),_=async()=>{try{const e=await p.get("/machine/site_settings_api_for_logo/");1===e.data.success?u(e.data.result.logo):console.error("Failed to fetch logo and favicon")}catch(e){console.error("Error fetching logo and favicon:",e)}};(0,l.useEffect)((()=>{_()}),[]);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(c.E$,{style:{boxShadow:"1px 1px 1px 1px #ccc"},className:"px-5 pt-5 mx-4 mb-4",children:[(0,n.jsxs)(c.sK,{children:[(0,n.jsx)("h3",{style:{color:d},children:" Select the Color Theme "})," "]}),(0,n.jsx)(c.sK,{className:"mb-4",children:(0,n.jsx)(c.UF,{md:6,children:(0,n.jsx)(c.Q_,{style:{background:e,color:d},onClick:()=>h(!x),children:"Select Color"})})}),x&&(0,n.jsxs)(c.sK,{children:[(0,n.jsx)(t.Xq,{color:e,onChange:e=>s(e.hex)}),(0,n.jsx)(c.UF,{md:6,className:"mt-3",children:(0,n.jsx)(c.Q_,{style:{background:e,color:d},onClick:o,children:"Submit Color"})})]})]}),(0,n.jsxs)(c.E$,{style:{boxShadow:"1px 1px 1px 1px #ccc"},className:"px-5 pt-5 mx-4",children:[(0,n.jsx)("h3",{className:"mb-3",style:{color:"#2C384A"},children:"Logo"}),(0,n.jsxs)(c.sK,{className:"mb-3",children:[(0,n.jsx)(c.UF,{md:6,children:(0,n.jsxs)(c.E$,{style:{boxShadow:"1px 1px 1px 1px #ccc",height:"250px"},className:" px-5 pt-5 mx-4",children:[(0,n.jsx)(c.sK,{className:"mb-3",style:{color:d},children:"Current Logo"}),(0,n.jsx)(c.sK,{children:m&&(0,n.jsx)(c.he,{src:g+m,height:"100",width:"100",alt:"Path not found"})})]})}),(0,n.jsxs)(c.UF,{md:6,children:[(0,n.jsxs)(c.sK,{style:{color:d},children:["Upload Logo",(0,n.jsx)("span",{className:"text-danger",children:"*"})]}),(0,n.jsx)(c.sK,{children:(0,n.jsxs)(c.qI,{onSubmit:async e=>{e.preventDefault();const s=e.currentTarget;if(s.checkValidity()){const e=new FormData(s);try{const s=await p.post("/machine/tenant_upload_logo/",e);1===s.data.success?(alert("Logo uploaded successfully"),u(s.data.result.logo),_(),window.location.reload()):console.error("Failed to upload logo:",s.data.result)}catch(o){console.error("Error uploading logo:",o)}}else console.log("Form validation failed")},children:[(0,n.jsx)(c.OG,{type:"file",id:"logo",accept:"image/*",onChange:e=>{const s=e.target.files[0].size/1024;return s<1?(b("File size is less than minimum limit"),void y(!1)):s>200?(b("File size is greater than maximum limit"),void y(!1)):(b(""),void y(!0))},name:"logo",required:!0}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{style:{fontSize:"12px"},children:"Accept logo in JPG and PNG formats. "}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{style:{fontSize:"12px"},children:"Logo size should be under 200KB"})]}),f?(0,n.jsx)("p",{className:"text-success",children:"File size is okay."}):null,(0,n.jsx)("p",{className:"text-danger",children:j}),(0,n.jsx)(c.To,{invalid:!0,children:"Please upload logo"}),(0,n.jsx)(c.sK,{className:"px-5",children:(0,n.jsx)(c.Q_,{type:"submit",size:"lg",className:"aboutus-button mt-2 mb-2",style:{backgroundColor:e,color:d,border:"none",width:"50%"},children:"Submit"})})]})})]})]})]})]})}}}]);