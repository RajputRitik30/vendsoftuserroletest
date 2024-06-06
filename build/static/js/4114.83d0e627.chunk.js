"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4114],{24114:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var r=s(9950),l=s(37017),o=s(1072),a=s(44885),i=s(44414);const c=()=>{const[e,t]=(0,r.useState)([]),[s,c]=(0,r.useState)([]),[n,d]=(0,r.useState)(!1),[p,m]=(0,r.useState)(!1),[h,u]=(0,r.useState)(!1),{selectedColor:b}=(0,a.useColor)(),x=(0,o.A)();(0,r.useEffect)((()=>{y()}),[]);const y=async()=>{try{let e=await x.get("ticket/user_machine_mapped/");console.log(e,"ressoponsee");let s=await x.get("ticket/get_ticket_list_customer/");if(1===e.data.success&&1===s.data.success){const r=s.data.result.map(((e,t)=>({sr_no:t+2,ticket_no:e.ticsrno,date:g(e.created_at),time:_(e.created_at),title:e.title,machine_map:e.machine_map,priority:e.priority,status:j(e.status),note:" ",problem_type:e.problem_type,description:e.description}))),l=e.data.result.map((e=>({value:e.machine_id,label:"".concat(e.machine_id)})));console.log(l,"datattat"),t(r),c(l)}}catch(e){console.error("Error fetching topics:",e)}};function j(e){return"RESOLVED"==e?(0,i.jsx)("button",{type:"button",disabled:!0,style:{width:"75px",color:"white",backgroundColor:"#00c702"},children:"Resolved"}):"IN PROGRESS"==e?(0,i.jsx)("button",{type:"button",disabled:!0,style:{width:"75px",color:"black",backgroundColor:"yellow"},children:"In Progress"}):"PENDING"==e?(0,i.jsx)("button",{type:"button",disabled:!0,style:{width:"75px",color:"black",backgroundColor:"red"},children:"Pending"}):"CLOSED"==e?(0,i.jsx)("button",{type:"button",disabled:!0,style:{width:"75px",color:"white",backgroundColor:"green"},children:"Closed"}):(0,i.jsx)("button",{type:"button",disabled:!0,style:{width:"75px",color:"white",backgroundColor:"blue"},children:"Created"})}const g=e=>{if(!e)return"";const t=new Date(e),s=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),l=t.getFullYear();return"".concat(l,"-").concat(s,"-").concat(r)},_=e=>{if(!e)return"";const t=new Date(e),s=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0");return"".concat(s,":").concat(r)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-2",children:(0,i.jsx)(l.Q_,{onClick:()=>d(!n),className:"mt-2",style:{backgroundColor:b,color:"white",border:"0px"},children:"Create Ticket"})}),(0,i.jsx)(l.sK,{children:(0,i.jsx)(l.UF,{xs:12,children:(0,i.jsx)(l.Pd,{activePage:1,clickableRows:!0,columns:[{key:"sr_no",label:"Sr No",_props:{color:"secondary",className:"fw-semibold"}},{key:"ticket_no",label:"Ticket No",_props:{color:"secondary",className:"fw-semibold"}},{key:"date",label:"Date",_props:{color:"secondary",className:"fw-semibold"}},{key:"time",label:"Time",_props:{color:"secondary",className:"fw-semibold"}},{key:"title",label:"Title",_props:{color:"secondary",className:"fw-semibold"}},{key:"machine_map",label:"Machine ID",_props:{color:"secondary",className:"fw-semibold"}},{key:"priority",label:"Priority",_props:{color:"secondary",className:"fw-semibold"}},{key:"status",label:"Status",_props:{color:"secondary",className:"fw-semibold"}},{key:"problem_type",label:"Problem Type",_props:{color:"secondary",className:"fw-semibold"}},{key:"description",label:"Description",_props:{color:"secondary",className:"fw-semibold"}}],items:e,itemsPerPageSelect:!0,itemsPerPage:10,pagination:!0,scopedColumns:{sr_no:(e,t)=>(0,i.jsx)("td",{children:t+1})},itemsPerPageOptions:[10,20,50,100],tableProps:{color:"success-color-secondary",hover:!0,border:"1.5px solid #074",responsive:!0},tableHeadProps:{color:"light",align:"middle",className:"align-middle"},tableBodyProps:{align:"middle",className:"align-middle"},itemsPerPageLabel:"Rows per page:"})})})]}),(0,i.jsxs)(l.zS,{size:"lg",visible:n,onClose:()=>{d(!1),m(!1),u(!1)},backdrop:"static",children:[(0,i.jsx)(l.E4,{onClose:()=>{d(!1),m(!1),u(!1)},style:{backgroundColor:b,color:"white"},children:(0,i.jsx)(l.lb,{children:"Create Ticket"})}),(0,i.jsxs)(l.qI,{className:"needs-validation mt-4",noValidate:!0,validated:p,onSubmit:async e=>{const t=e.currentTarget;if(e.preventDefault(),!0===t.checkValidity()){const t=new FormData(e.target);let s=await x.post("/ticket/create_ticket/",t);1===s.data.success?(alert("Ticket is Created"),m(!1),d(!1),y(),window.location.reload()):s.data.result&&Object.values(s.data.result).forEach(alert)}else m(!0)},children:[(0,i.jsx)(l.Tc,{children:(0,i.jsxs)(l.sK,{className:"justify-content-center mx-4",children:[(0,i.jsxs)(l.sK,{children:[(0,i.jsxs)(l.UF,{sm:6,children:[(0,i.jsxs)(l.A6,{htmlFor:"title",children:["Title",(0,i.jsx)("span",{className:"text-danger",children:"*"})]}),(0,i.jsx)(l.OG,{type:"text",id:"title",name:"title",required:!0,pattern:"[A-Za-z\\s]+",maxLength:50}),(0,i.jsx)(l.To,{invalid:!0,children:"Please enter the title"})]}),(0,i.jsxs)(l.UF,{sm:6,children:[(0,i.jsxs)(l.A6,{htmlFor:"machine_map",children:["Machine ID",(0,i.jsx)("span",{className:"text-danger",children:"*"})]}),(0,i.jsx)(l.MT,{name:"machine_map",id:"machine_map",options:s,required:!0}),(0,i.jsx)(l.To,{invalid:!0,children:"Please select Machine ID"})]})]}),(0,i.jsxs)(l.sK,{children:[(0,i.jsxs)(l.UF,{sm:6,children:[(0,i.jsxs)(l.A6,{htmlFor:"problem_type",children:["Problem Type",(0,i.jsx)("span",{className:"text-danger",children:"*"})]}),(0,i.jsxs)(l.MT,{name:"problem_type",id:"problem_type",required:!0,children:[(0,i.jsx)("option",{children:"Choose..."}),(0,i.jsx)("option",{value:"software",children:"Software"}),(0,i.jsx)("option",{value:"hardware",children:"Hardware"}),(0,i.jsx)("option",{value:"other",children:"Other"})]}),(0,i.jsx)(l.To,{invalid:!0,children:"Please select Problem type"})]}),(0,i.jsxs)(l.UF,{sm:6,children:[(0,i.jsxs)(l.A6,{htmlFor:"priority",children:["Priority",(0,i.jsx)("span",{className:"text-danger",children:"*"})]}),(0,i.jsxs)(l.MT,{name:"priority",id:"priority",required:!0,children:[(0,i.jsx)("option",{children:"Choose..."}),(0,i.jsx)("option",{value:"low",children:"Low"}),(0,i.jsx)("option",{value:"medium",children:"Medium"}),(0,i.jsx)("option",{value:"high",children:"High"})]}),(0,i.jsx)(l.To,{invalid:!0,children:"Please select Priority"})]})]}),(0,i.jsx)(l.sK,{children:(0,i.jsxs)(l.UF,{sm:6,children:[(0,i.jsxs)(l.A6,{htmlFor:"description",children:["Description",(0,i.jsx)("span",{className:"text-danger",children:"*"})]}),(0,i.jsx)(l.Im,{type:"text",id:"description",name:"description",rows:3,required:!0,maxLength:200}),(0,i.jsx)(l.To,{invalid:!0,children:"Please enter the description"})]})})]})}),(0,i.jsxs)(l.If,{children:[(0,i.jsx)(l.Q_,{onClick:()=>{d(!1),m(!1),u(!1)},style:{backgroundColor:"#F5F5F5",color:"black",borderColor:"#DCDCDC"},children:"\xa0Close\xa0"}),(0,i.jsx)(l.Q_,{type:"submit",style:{backgroundColor:b,color:"white"},children:"\xa0Submit"})]})]})]})]})}}}]);