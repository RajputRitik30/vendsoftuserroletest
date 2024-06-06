"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1928],{71928:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=a(9950),r=a(1072),c=a(45532),l=a(28429),i=(a(46208),a(49911)),d=a(25793),o=a(72979),n=(a(7864),a(92881),a(51462),a(73635),a(31984),a(32909),a(3650),a(99813),a(37017),a(44414));const u=()=>{const{user:e,authTokens:t,logoutUser:a}=(0,s.useContext)(c.A),[u,h]=(0,s.useState)(null===t||void 0===t?void 0:t.user.organization);let m=(0,r.A)();(0,l.zy)();let[x,p]=(0,s.useState)(),[g,A]=(0,s.useState)(0),[S,_]=(0,s.useState)(0),[b,j]=(0,s.useState)(0),[f,y]=(0,s.useState)(0),[w,v]=(0,s.useState)(0),[U,F]=(0,s.useState)(0),[N,C]=(0,s.useState)(0),[E,k]=(0,s.useState)(),[D,K]=(0,s.useState)(),[M,B]=(0,s.useState)(),[G,O]=(0,s.useState)(),[R,I]=(0,s.useState)(),[Q,W]=(0,s.useState)(0),[q,V]=(0,s.useState)(0),[z,P]=(0,s.useState)(0),[T,Y]=(0,s.useState)(0),[Z,H]=(0,s.useState)(0),[J,X]=(0,s.useState)(0),[$,L]=(0,s.useState)(0),[ee,te]=(0,s.useState)(0),[ae,se]=(0,s.useState)(0),[re,ce]=(0,s.useState)(0),[le,ie]=(0,s.useState)(0),[de,oe]=(0,s.useState)(0);const[ne,ue]=(0,s.useState)(null);let[he,me]=(0,s.useState)(0);return(0,s.useEffect)((()=>{(async()=>{try{var e,a;const s=await m.get("api/users/"+t.user.id+"/");h(null===s||void 0===s||null===(e=s.data)||void 0===e||null===(a=e.result)||void 0===a?void 0:a.organization);const r=await m.get("machine/get_admin_user_dashboard/"),c=await m.get("machine/get_customer_user_dashboard_role_dashboard_qr_coin/"),l=await m.get("machine/users_and_customers_created_in_month/"),i=await m.get("machine/get_customer_user_dashboard_percentage_of_machines_with_qr/");if(1===r.data.success&&1===l.data.success){for(let a=0;a<r.data.result.length;a++)for(let e=0;e<l.data.result.length;e++){r.data.result[a],r.data.result[e]}p(r.data.result.total_users),A(r.data.result.active_users),_(r.data.result.inactive_users),j(r.data.result.total_customers),y(r.data.result.active_customers),v(r.data.result.inactive_customers),F(r.data.result.total_machines),C(r.data.result.active_machines),k(r.data.result.inactive_machines),K(c.data.result.coin_percentage),B(c.data.result.qr_percentage),O(i.data.result.percentage_with_qr),I(i.data.result.percentage_with_static_coin);const e=l.data.user_month_counts,t=l.data.customer_month_counts;W(e.jan),V(e.feb),P(e.mar),Y(e.apr),H(e.may),X(e.jun),L(t.jan),te(t.feb),se(t.mar),ce(t.apr),ie(t.may),oe(t.jun)}else 0===r.data.success&&alert(r.data.result.message)}catch(s){console.error("Error fetching data:",s)}})()}),[t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.E$,{className:"mb-4",children:(0,n.jsxs)(i.W6,{children:[(0,n.jsx)(i.sK,{children:(0,n.jsx)(i.UF,{sm:12,children:(0,n.jsxs)("h4",{id:"traffic",className:"card-title mb-5 mt-3 text-center",children:[u," Dashboard"]})})}),(0,n.jsxs)(i.sK,{className:"px-5 mb-5",children:[(0,n.jsx)(i.UF,{md:4,className:"mb-4",children:(0,n.jsxs)(i.E$,{style:{boxShadow:"1px 1px 1px 1px #ccc",height:"100%"},className:"px-4 pt-4 h-100",children:[(0,n.jsx)("h5",{className:"text-center",children:"Machine Details"}),(0,n.jsxs)("div",{className:"chart-container pt-3 pb-3 text-start px-1",style:{maxWidth:"250px",width:"100%",color:"#2A409A"},children:[(0,n.jsxs)(i.sK,{className:"fs-6 pb-3",children:[(0,n.jsx)(i.UF,{sm:7,children:"Total Machine  "}),(0,n.jsx)(i.UF,{sm:1,children:":"}),(0,n.jsx)(i.UF,{sm:3,children:U?U.toString().padStart(2,"0"):"0".toString().padStart(2,"0")})]}),(0,n.jsxs)(i.sK,{className:"fs-6 pb-3 ",style:{},children:[(0,n.jsx)(i.UF,{sm:7,children:"Active Machine "}),(0,n.jsx)(i.UF,{sm:1,children:":"}),(0,n.jsx)(i.UF,{sm:3,children:E?E.toString().padStart(2,"0"):"0".toString().padStart(2,"0")})]}),(0,n.jsxs)(i.sK,{className:"fs-6 pb-3",style:{},children:[(0,n.jsx)(i.UF,{sm:7,children:"Inactive Machine"}),(0,n.jsx)(i.UF,{sm:1,children:":"}),(0,n.jsx)(i.UF,{sm:3,children:N?N.toString().padStart(2,"0"):"0".toString().padStart(2,"0")})]})]})]})}),(0,n.jsx)(i.UF,{md:4,className:"mb-4",children:(0,n.jsxs)(i.E$,{style:{boxShadow:"1px 1px 1px 1px #ccc",height:"100%"},className:"px-4 pt-4 h-100",children:[(0,n.jsx)("h5",{className:"text-center",children:"Machine Map to Qr Code"}),(0,n.jsx)("div",{className:"chart-container",style:{maxWidth:"250px",width:"100%"},children:(0,n.jsx)(d.Kf,{type:"doughnut",data:{labels:["QR Code","Coin"],datasets:[{backgroundColor:["#429126","#5983de"],data:[G,R]}]},options:{plugins:{legend:{labels:{color:(0,o.getStyle)("--cui-body-color")}}}}})})]})}),(0,n.jsx)(i.UF,{md:4,className:"mb-4",children:(0,n.jsxs)(i.E$,{style:{boxShadow:"1px 1px 1px 1px #ccc",height:"100%"},className:"px-4 pt-4 h-100",children:[(0,n.jsx)("h5",{className:"text-center pb-5 pt-4",children:"Machine Payment Mode"}),(0,n.jsx)("div",{className:"chart-container",style:{maxWidth:"250px",width:"100%"},children:(0,n.jsx)(d.Kf,{type:"bar",data:{labels:[""],datasets:[{label:"Coin",backgroundColor:"#06c42c",data:[D]},{label:"QR Code",backgroundColor:"#fca503",data:[M]}]},options:{plugins:{legend:{labels:{color:(0,o.getStyle)("--cui-body-color")}}},indexAxis:"y",scales:{x:{grid:{color:(0,o.getStyle)("--cui-border-color-translucent")},ticks:{color:(0,o.getStyle)("--cui-body-color")}},y:{grid:{color:(0,o.getStyle)("--cui-border-color-translucent")},ticks:{color:(0,o.getStyle)("--cui-body-color")}}}}})})]})})]})]})})})}},46208:()=>{},99813:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAlCAYAAAAjt+tHAAAAAXNSR0IArs4c6QAAANZJREFUWEftllEOxCAIROH+h3ajWZuurTJjW7Eb/SbOYyCAikgQ4oXQDldV4jeRGA0BWMKlKgoCAbDiGQaBMAF6xVGIuQGuZo+40HTAFeAu8ehCqxmrDiwAdwdi7e6C6OqBvwGwxvHckzBPst5esLJPM+IV65h1Asl82xOoA+XBUZaFEd3/BZeAurOIYAoAbUbGDRMAFa0lbcEM2YatlXwKcDVrxo0DwFPitfPsB+Bp8TOIDWCUeAmRAEaL75vSDSBDqEv63zrEGeEKkFzwdGABLAemcOADJ1iQ7GVSPDUAAAAASUVORK5CYII="},92881:(e,t,a)=>{e.exports=a.p+"static/media/1.34eedf58c0876517e858.jpg"},73635:(e,t,a)=>{e.exports=a.p+"static/media/3.07e357f51e1b86d9e741.jpg"},31984:(e,t,a)=>{e.exports=a.p+"static/media/4.3ddf28ab435770c6d69f.jpg"},32909:(e,t,a)=>{e.exports=a.p+"static/media/5.3e55ee5f667d94054da3.jpg"},3650:(e,t,a)=>{e.exports=a.p+"static/media/6.edefb235566ed72a7429.jpg"}}]);