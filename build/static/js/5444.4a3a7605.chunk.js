"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5444],{55444:(s,e,l)=>{l.r(e),l.d(e,{default:()=>a});var c=l(9950),d=l(1072),n=l(28429),i=l(49911),r=l(44885),t=l(44414);const a=()=>{let{id:s}=(0,n.g)();const e=(0,d.A)(),[l,a]=(0,c.useState)(!1),m=(0,n.Zp)(),{selectedColor:h}=(0,r.useColor)();(0,c.useEffect)((()=>{j()}),[]);let j=async()=>{let l=await e.get("/get_user_master/".concat(s,"/"));if(1===l.data.success)a(l.data.result);else if(0===l.data.success)for(let s=0;s<Object.values(l.data.result).length;s++){let e=Object.values(l.data.result)[s];alert(e)}};const o=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;const e=new Date(s),l=String(e.getDate()).padStart(2,"0"),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],d=e.getFullYear(),n=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return"".concat(l," - ").concat(c," - ").concat(d," ").concat(n,":").concat(i)};o();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.T5,{className:"mb-1",children:[(0,t.jsx)("div",{className:"d-flex justify-content-start",children:(0,t.jsx)(i.Q_,{style:{backgroundColor:h},onClick:()=>m(-1),children:"Back"})}),(0,t.jsxs)(i.E$,{className:"mt-4",children:[(0,t.jsxs)(i.V0,{children:[(0,t.jsx)("b",{children:" Details"})," "]}),(0,t.jsxs)(i.W6,{className:"mx-2",children:[(0,t.jsxs)(i.sK,{sm:12,className:"mb-2",children:[(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"Name"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:null===l||void 0===l?void 0:l.name}),(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"Email"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:null===l||void 0===l?void 0:l.email})]}),(0,t.jsxs)(i.sK,{sm:12,className:"mb-2",children:[(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"Role"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:null===l||void 0===l?void 0:l.role}),(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"Mobile No"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:null===l||void 0===l?void 0:l.mobile_no})]}),(0,t.jsxs)(i.sK,{sm:12,className:"mb-2",children:[(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"Address 1"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:null===l||void 0===l?void 0:l.address1}),(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"Address 2"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:null===l||void 0===l?void 0:l.address2})]}),(0,t.jsxs)(i.sK,{sm:12,className:"mb-2",children:[(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"Country"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:null===l||void 0===l?void 0:l.country}),(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"State"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:null===l||void 0===l?void 0:l.state})]}),(0,t.jsxs)(i.sK,{sm:12,className:"mb-2",children:[(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"Created By"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:null===l||void 0===l?void 0:l.created_by}),(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"Created Date"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:o(null===l||void 0===l?void 0:l.created_at)})]}),(0,t.jsxs)(i.sK,{sm:12,className:"mb-2",children:[(0,t.jsx)(i.UF,{sm:2,children:(0,t.jsx)("b",{children:"Pincode"})}),(0,t.jsx)(i.UF,{sm:1,children:":"}),(0,t.jsx)(i.UF,{sm:3,children:null===l||void 0===l?void 0:l.pincode})]})]})]})]})})}}}]);