(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{9189:function(e,t,r){Promise.resolve().then(r.bind(r,2489))},6653:function(e,t,r){"use strict";r.d(t,{L:function(){return o},c:function(){return s}});var n=r(5474),a=r(666);function o(){return localStorage.getItem(a.px)}async function i(){return await (0,n.gw)(2e3),{code:a.mI,message:"Mock",data:{nickName:"Mock",token:"Mock"}}}async function s(e,t){if(a.M7)return await i();let r=await fetch("".concat(a.FH,"/member/login"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e,password:t})});if(!r.ok)throw Error("HTTP error! status: ".concat(r.status));return await r.json()}},2489:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n=r(9268),a=r(5474),o=r(666),i=r(6653);async function s(){return await (0,a.gw)(2e3),{code:o.mI,message:"mock",data:[{id:1,caseName:"caseName",caseId:"caseId",describe:"describe",operateTime:"operationTime",operator:"operator",reply:"reply",updateTime:"updateTime",uploadTime:"uploadTime",userId:"userId"}]}}async function c(){if(o.M7)return await s();let e=await fetch("".concat(o.FH,"/management/reports"),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.L)())}});if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return await e.json()}async function l(){return await (0,a.gw)(2e3),{code:o.mI,message:"mock",data:{isSuccess:!0}}}async function d(e){if(o.M7)return await l();let t=await fetch("".concat(o.FH,"/management/report/").concat(e),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.L)())}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function u(){return await (0,a.gw)(2e3),{code:o.mI,message:"mock",data:{imageURLs:["https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*","https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg","https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*","https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg","https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*","https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"],describe:"mock",replies:[{reply:"mock",operateTime:"mock",operator:"mock"},{reply:"mock",operateTime:"mock",operator:"mock"},{reply:"mock",operateTime:"mock",operator:"mock"},{reply:"mock",operateTime:"mock",operator:"mock"}]}}}async function m(e,t){if(o.M7)return await u();let r=await fetch("".concat(o.FH,"/management/report/detail"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.L)())},body:JSON.stringify({id:e,caseId:t})});if(!r.ok)throw Error("HTTP error! status: ".concat(r.status));return await r.json()}async function p(){return await (0,a.gw)(2e3),{code:o.mI,message:"mock",data:{isSuccess:!0}}}async function h(e,t){if(o.M7)return await p();let r=await fetch("".concat(o.FH,"/management/upload/reply"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.L)())},body:JSON.stringify({id:e,reply:t})});if(!r.ok)throw Error("HTTP error! status: ".concat(r.status));return await r.json()}var f=r(6831),g=r(7454),y=r(9748),x=r(1263),b=r(7007),k=r(8302),w=r(1904),j=r(6006),v=r(7909),_=r.n(v),N=r(6462),C=r(3368),T=r(7833),I=r.n(T),M=r(8683),Z=r.n(M);function S(e){let{className:t,account:r,time:o,children:i}=e;return(0,n.jsxs)("div",{className:Z()(I().comment,t),children:[(0,n.jsxs)("div",{className:I().head,children:[(0,n.jsx)("p",{children:r}),(0,n.jsx)("p",{children:o&&(0,a.rn)(o)})]}),(0,n.jsx)("p",{children:i})]})}var L=r(9153);let P=Number(_().imageWidth),E=Number(_().imageHeight),z=(0,j.memo)(()=>{var e,t;let r=(0,j.useCallback)(async()=>{try{let e=await c();if((null==e?void 0:e.code)!==o.mI)return[];return e.data}catch(e){return[]}},[]),{loading:i,data:s,run:l}=(0,w.Q)(r,{manual:!1}),u=(0,j.useCallback)(async e=>{try{await d(e)}catch(e){}l()},[l]),[p,v]=(0,j.useState)(!1),[T,I]=(0,j.useState)(),[M,Z]=(0,j.useState)(""),{loading:z,data:R,run:D,reset:H}=(0,w.Q)(async(e,t)=>{try{let r=await m(e,t);if((null==r?void 0:r.code)!==o.mI)return;let n={...r.data,imageUrlConfigs:r.data.imageURLs.map(e=>({id:(0,N.Z)(),url:e})),replyConfigs:r.data.replies.map(e=>{let{operator:t,operateTime:r,reply:n}=e;return{id:(0,N.Z)(),operator:t,operateTime:r,reply:n}})};return n}catch(e){}}),B=(0,j.useMemo)(()=>[{dataIndex:"id",title:"ID"},{dataIndex:"caseName",title:"回報古蹟名稱"},{dataIndex:"describe",title:"回報描述"},{dataIndex:"userId",title:"上傳用戶帳號"},{dataIndex:"uploadTime",title:"上傳時間",render:e=>(0,a.rn)(e)},{dataIndex:"reply",title:"進度回覆"},{dataIndex:"operator",title:"操作者"},{dataIndex:"operateTime",title:"操作時間",render:e=>(0,a.rn)(e)},{title:"操作",render:(e,t)=>{let{id:r,caseId:a}=t;return(0,n.jsxs)("div",{className:_().operation,children:[(0,n.jsx)(f.Z,{looks:L.L.primary,onClick:()=>{v(!0),I(r),Z(a),D(r,a)},children:"回覆"}),(0,n.jsx)(f.Z,{looks:L.L.danger,onClick:()=>{b.Z.confirm({content:(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:"是否確認刪除？"})}),onOk:async()=>{await u(r)},okButtonProps:{looks:L.L.danger}})},children:"刪除"})]})}}],[u,D]),[U,A]=(0,j.useState)(""),{loading:O,run:F}=(0,w.Q)(async()=>{if(U&&T)try{await h(T,U),A(""),D(T,M),l()}catch(e){}}),[Q,G]=(0,j.useState)(!1),[V,W]=(0,j.useState)("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.Z,{columns:B,dataSource:s,loading:i}),(0,n.jsx)(b.Z,{open:p,width:440,onClose:()=>{v(!1),I(void 0),Z(""),H()},children:(0,n.jsx)(C.Z,{spinning:z,children:(0,n.jsxs)("div",{className:_().reportModalContent,children:[(0,n.jsx)("p",{className:_().title,children:"回報圖片"}),(0,n.jsx)("div",{className:_().imageArea,children:null==R?void 0:null===(e=R.imageUrlConfigs)||void 0===e?void 0:e.map(e=>{let{id:t,url:r}=e;return(0,n.jsx)("div",{className:_().image,onClick:()=>{G(!0),W(r)},children:(0,n.jsx)(g.Z,{src:r,width:P,height:E,alt:"回報圖片"})},t)})}),(0,n.jsx)("p",{className:_().title,children:"回報描述"}),(null==R?void 0:R.describe)&&(0,n.jsx)("p",{className:_().describe,children:R.describe}),(0,n.jsx)("div",{className:_().comments,children:null==R?void 0:null===(t=R.replyConfigs)||void 0===t?void 0:t.map(e=>{let{id:t,operator:r,operateTime:a,reply:o}=e;return(0,n.jsx)(S,{time:a,account:r,children:o},t)})}),(0,n.jsx)(y.Z,{onSubmit:F,children:(0,n.jsxs)("div",{className:_().replyArea,children:[(0,n.jsx)(x.Z,{value:U,onChange:A,disabled:O,onKeyDown:e=>{"Enter"===e.key&&""===U&&e.preventDefault()}}),(0,n.jsx)(f.Z,{type:"submit",loading:O,looks:L.L.dark,children:"回覆"})]})})]})})}),(0,n.jsx)(b.Z,{open:Q,onClose:()=>{G(!1),W("")},children:(0,n.jsx)(g.Z,{src:V,width:200,height:200,alt:"圖片"})})]})});z.displayName="RestorationPage";var R=z},7454:function(e,t,r){"use strict";var n=r(9268),a=r(6394),o=r.n(a),i=r(6006),s=r(7613),c=r.n(s);let l=(0,i.memo)((0,i.forwardRef)((e,t)=>{let{src:r,...a}=e;return(0,n.jsx)(o(),{...a,ref:t,unoptimized:!0,src:"string"==typeof r&&r.startsWith("/")&&c().basePath?"".concat(c().basePath).concat(r):r})}));l.displayName="CustomImage",t.Z=l},6831:function(e,t,r){"use strict";var n=r(9268),a=r(6006),o=r(3368),i=r(1576),s=r.n(i),c=r(8683),l=r.n(c),d=r(9153);let u=(0,a.memo)(e=>{let{className:t,children:r,type:a,loading:i,disabled:c,onClick:u,looks:m,icon:p,...h}=e;return(0,n.jsxs)("button",{...h,className:"close"===p?l()("h-8 w-8 bg-close bg-4 bg-center bg-no-repeat opacity-50 hover:opacity-75",t):l()("rounded px-3 py-1.5",{[s().primary]:!m||m===d.L.primary,[s().danger]:m===d.L.danger,[s().dark]:m===d.L.dark,"bg-green-700 text-white":m===d.L.green},t),disabled:i||c,onClick:u,type:a,children:[i&&(0,n.jsx)(o.Z,{size:o.v.small})," ",r]})});u.displayName="Button",t.Z=u},9748:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});var n,a=r(9268),o=r(6006),i=r(9924),s=r.n(i),c=r(8683),l=r.n(c),d=r(5474),u=r(2624);(n||(n={})).horizontal="horizontal";let m=(0,o.memo)(e=>{let{layout:t,onSubmit:r,children:i}=e,[c,m]=(0,o.useState)(!1);return(0,a.jsx)("form",{className:l()({[s().horizontal]:t===n.horizontal}),onSubmit:async e=>{if(e.preventDefault(),!c&&r){m(!0);try{r instanceof d.sG?await r():r()}catch(e){e instanceof Error?(0,d.cM)(e.message,u.L.console):(0,d.cM)(e,u.L.console)}finally{m(!1)}}},children:i})});m.displayName="Form",t.Z=m},1263:function(e,t,r){"use strict";var n=r(9268),a=r(6006),o=r(8683),i=r.n(o);let s=(0,a.memo)((0,a.forwardRef)((e,t)=>{let{className:r,type:a,value:o,onChange:s,onKeyDown:c,disabled:l,placeholder:d}=e;return(0,n.jsx)("input",{className:i()("rounded border border-solid border-gray-300 p-1",r),type:a,value:o,onChange:e=>{let t=e.target.value;null==s||s(t)},onKeyDown:c,disabled:l,placeholder:d,ref:t})}));t.Z=s},7007:function(e,t,r){"use strict";var n=r(9268),a=r(6006),o=r(8431),i=r(3194),s=r(4209),c=r.n(s),l=r(6831),d=r(8683),u=r.n(d);function m(e){let{title:t,children:r,footer:a,width:o,isCloseButtonShow:i,maskClosable:s,onClose:d}=e;return(0,n.jsx)("div",{className:u()(c().backgroundMask,"z-[1500]"),onClick:s?d:void 0,children:(0,n.jsxs)("div",{className:"my-12 divide-y divide-solid rounded bg-white",style:{width:o},onClick:e=>{e.stopPropagation()},children:[t&&(0,n.jsxs)("div",{className:"flex items-center justify-between p-4 text-xl font-medium",children:[t,i&&(0,n.jsx)(l.Z,{className:"p-2",icon:"close",onClick:d})]}),r&&(0,n.jsx)("div",{className:"p-4",children:r}),a&&(0,n.jsx)("div",{className:"p-4",children:a})]})})}let p=(0,a.memo)(e=>{let{title:t,children:r,footer:a,open:i=!1,width:s,isCloseButtonShow:c,maskClosable:l=!0,onClose:d}=e;return i&&(0,o.createPortal)((0,n.jsx)(m,{title:t,footer:a,width:s,isCloseButtonShow:c,maskClosable:l,onClose:d,children:r}),document.body)});p.displayName="Modal";let h=(0,a.memo)(e=>{let{content:t,onOk:r,okButtonProps:o,onCancel:i,cancelButtonProps:s}=e,[d,u]=(0,a.useState)(!1),[p,h]=(0,a.useState)(!1),f=(0,a.useCallback)(async()=>{u(!0),await (null==r?void 0:r()),u(!1)},[r]),g=(0,a.useCallback)(async()=>{h(!0),await (null==i?void 0:i()),h(!1)},[i]);return(0,n.jsxs)(m,{children:[t,(0,n.jsxs)("div",{className:c().buttonGroup,children:[(0,n.jsx)(l.Z,{...o,loading:d,disabled:p,onClick:f,children:"確定"}),(0,n.jsx)(l.Z,{...s,loading:p,disabled:d,onClick:g,children:"取消"})]})]})});h.displayName="ConfirmModal";let f="confirmModal";p.confirm=e=>{let{content:t,onOk:r,okButtonProps:a,onCancel:o,cancelButtonProps:s}=e,c=document.getElementById(f);c||((c=document.createElement("div")).id=f),document.body.appendChild(c);let l=(0,i.createRoot)(c);l.render((0,n.jsx)(h,{content:t,onOk:async()=>{try{await (null==r?void 0:r()),l.unmount()}catch(e){}},okButtonProps:a,onCancel:async()=>{await (null==o?void 0:o()),l.unmount()},cancelButtonProps:s}))},t.Z=p},3368:function(e,t,r){"use strict";r.d(t,{v:function(){return a}});var n,a,o=r(9268),i=r(6006),s=r(8683),c=r.n(s);(n=a||(a={})).small="small",n.medium="medium";let l=(0,i.memo)(e=>{let{spinning:t=!0,size:r=a.medium,expand:n=!1,children:i}=e;return(0,o.jsxs)("div",{className:c()("relative inline-block",{"h-full w-full":n}),children:[i,t&&(0,o.jsx)("div",{className:c()("inset-0 flex items-center justify-center",{"absolute bg-white opacity-70":i,"static bg-transparent":!i}),children:(0,o.jsx)("div",{className:c()("animate-spin rounded-full border-solid border-slate-100 border-t-blue-500",{"h-2.5 w-2.5 border-2":r===a.small,"h-10 w-10 border-4":r===a.medium})})})]})});l.displayName="Spin",t.Z=l},8302:function(e,t,r){"use strict";var n=r(9268),a=r(6006),o=r(6462),i=r(3368),s=r(8683),c=r.n(s);let l=(0,a.memo)(e=>{let{className:t,rowKeyName:r="id",columns:s=[],dataSource:l=[],loading:d=!1}=e,u=(0,a.useMemo)(()=>s.map(e=>[e.dataIndex||(0,o.Z)(),e]),[s]),m=(0,a.useMemo)(()=>(0,n.jsx)("tr",{children:u.map(e=>{let[t,{title:r}]=e;return(0,n.jsx)("th",{className:"border-b border-solid border-gray-800 p-2 text-start",children:r},t)})}),[u]),p=(0,a.useMemo)(()=>l.map(e=>(0,n.jsx)("tr",{className:"even:bg-black/5",children:u.map(t=>{let[r,{dataIndex:a,render:o}]=t;return(0,n.jsx)("td",{className:"border-b border-solid border-gray-300 p-2",children:o?o(a&&e[a],e):a&&e[a]},r)})},e[r])),[u,l,r]);return(0,n.jsx)(i.Z,{spinning:d,expand:!0,children:(0,n.jsx)("div",{className:c()("overflow-auto",t),children:(0,n.jsx)("table",{className:"w-full border-collapse",children:(0,n.jsxs)("tbody",{children:[m,p]})})})})});l.displayName="Table",t.Z=l},1904:function(e,t,r){"use strict";r.d(t,{Q:function(){return o}});var n=r(6006),a=r(6462);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{manual:!0},r=(0,n.useRef)(t.manual),[o,i]=(0,n.useState)({loading:!1,data:void 0}),s=(0,n.useRef)(),c=(0,n.useRef)(!1),l=(0,n.useRef)(),d=(0,n.useCallback)(async function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];let o=(0,a.Z)();s.current=o,c.current=!0,l.current=r,i(e=>{let{data:t}=e;return{loading:!0,data:t}});let d=await e(...r);if(o!==s.current)throw Error("canceled");return i({loading:!1,data:d}),d},[e]),u=(0,n.useRef)(d),m=(0,n.useCallback)(async()=>{if(c.current)return await d(...l.current);throw Error("Run should be called first")},[d]),p=(0,n.useCallback)(()=>{let e=(0,a.Z)();s.current=e,i({loading:!1,data:void 0})},[]);return(0,n.useEffect)(()=>{r.current||u.current(...[])},[]),(0,n.useMemo)(()=>({run:d,refresh:m,reset:p,...o}),[d,m,p,o])}},7613:function(e){"use strict";e.exports={output:"export",basePath:"/historic-site-portal-demo-test"}},2624:function(e,t,r){"use strict";var n,a;r.d(t,{L:function(){return n}}),(a=n||(n={})).none="none",a.console="console",a.message="message"},9153:function(e,t,r){"use strict";var n,a;r.d(t,{L:function(){return n}}),(a=n||(n={})).primary="primary",a.dark="dark",a.danger="danger",a.green="green"},666:function(e,t,r){"use strict";r.d(t,{FH:function(){return n},M7:function(){return o},mI:function(){return i},px:function(){return a}});let n="https://historical-site-backend-18d1df54380f.herokuapp.com",a="token",o=!1,i="S001"},5474:function(e,t,r){"use strict";r.d(t,{cM:function(){return s},gw:function(){return i},rn:function(){return c},sG:function(){return l}});var n=r(2624),a=r(5326),o=r.n(a);let i=async e=>{await new Promise(t=>setTimeout(t,e))},s=(e,t)=>{switch(t){case n.L.none:break;case n.L.console:case n.L.message:console.log(e)}};function c(e){return e?o()(e).format("YYYY-MM-DD HH:mm:ss"):"--"}let l=(async()=>{}).constructor},7833:function(e){e.exports={comment:"Comment_comment__58lVE",head:"Comment_head__Io4E1"}},7909:function(e){e.exports={imageWidth:"60",imageHeight:"60",operation:"page_operation__PBqQk",reportModalContent:"page_reportModalContent__Vz33w",title:"page_title__LbX8Q",imageArea:"page_imageArea__kDQsI",image:"page_image__U9lRb",describe:"page_describe__3o8KA",comments:"page_comments__kR8Jq",replyArea:"page_replyArea__PzWPk"}},1576:function(e){e.exports={primary:"Button_primary__Nhi6i",danger:"Button_danger__214td",dark:"Button_dark__Djc0e"}},9924:function(e){e.exports={horizontal:"Form_horizontal___Dh6K"}},4209:function(e){e.exports={backgroundMask:"Modal_backgroundMask__9WqVi",buttonGroup:"Modal_buttonGroup__PS_fc"}},6462:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return l}});let a="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var o={randomUUID:a};let i=new Uint8Array(16);function s(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}let c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));var l=function(e,t,r){if(o.randomUUID&&!t&&!e)return o.randomUUID();e=e||{};let n=e.random||(e.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}(n)}}},function(e){e.O(0,[550,720,253,488,744],function(){return e(e.s=9189)}),_N_E=e.O()}]);