(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{5808:function(e,t,n){Promise.resolve().then(n.bind(n,1174))},6653:function(e,t,n){"use strict";n.d(t,{L:function(){return a},c:function(){return u}});var r=n(5474),o=n(666);function a(){return localStorage.getItem(o.px)}async function i(){return await (0,r.gw)(2e3),{code:o.mI,message:"Mock",data:{nickName:"Mock",token:"Mock"}}}async function u(e,t){if(o.M7)return await i();let n=await fetch("".concat(o.FH,"/member/login"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e,password:t})});if(!n.ok)throw Error("HTTP error! status: ".concat(n.status));return await n.json()}},1174:function(e,t,n){"use strict";n.r(t);var r=n(9268),o=n(3099),a=n(880),i=n.n(a),u=n(7454),c=n(6006),s=n(6831),l=n(6624),d=n(2624),f=n(1904),m=n(1263),g=n(9748),p=n(9153),h=n(6008),y=n(8582);let v=Number(i().logoDiameter),b=(0,c.memo)(()=>{let{login:e}=(0,c.useContext)(l.V),[t,n]=(0,c.useState)(""),[a,b]=(0,c.useState)(""),w=(0,c.useCallback)(async()=>{await e(t,a,{logType:d.L.message})},[e,t,a]),{loading:k,run:S}=(0,f.Q)(w),x=(0,c.useRef)(),M=(0,h.usePathname)(),_=(0,h.useSearchParams)();return M!==(0,y.A0)(y.Qv)&&(0,y._b)(M,_),(0,r.jsx)(o.Z,{children:(0,r.jsxs)("div",{className:i().wrapper,children:[(0,r.jsx)(u.Z,{src:"/images/logo.jpg",width:v,height:v,alt:"潮古蹟標誌"}),(0,r.jsx)("h3",{children:"潮古蹟管理後台"}),(0,r.jsx)(g.Z,{layout:g.S.horizontal,onSubmit:S,children:(0,r.jsxs)("div",{className:i().formContent,children:[(0,r.jsx)(m.Z,{placeholder:"輸入帳號",onChange:n,onKeyDown:e=>{if("Enter"===e.key){var t;e.preventDefault(),null===(t=x.current)||void 0===t||t.focus()}}}),(0,r.jsx)(m.Z,{type:"password",placeholder:"輸入密碼",onChange:b,ref:x}),(0,r.jsx)(s.Z,{loading:k,htmlType:"submit",looks:p.L.dark,children:"登入"})]})})]})})});b.displayName="LoginPage",t.default=b},7454:function(e,t,n){"use strict";var r=n(9268),o=n(6394),a=n.n(o),i=n(6006),u=n(7613),c=n.n(u);let s=(0,i.memo)((0,i.forwardRef)((e,t)=>{let{src:n,...o}=e;return(0,r.jsx)(a(),{...o,ref:t,unoptimized:!0,src:"string"==typeof n&&n.startsWith("/")&&c().basePath?"".concat(c().basePath).concat(n):n})}));s.displayName="CustomImage",t.Z=s},6831:function(e,t,n){"use strict";var r=n(9268),o=n(6006),a=n(3368),i=n(1576),u=n.n(i),c=n(8683),s=n.n(c),l=n(9153);let d=(0,o.memo)(e=>{let{className:t,children:n,loading:o,disabled:i,htmlType:c,onClick:d,looks:f,icon:m}=e;return(0,r.jsxs)("button",{className:"close"===m?s()("h-8 w-8 bg-close bg-4 bg-center bg-no-repeat opacity-50 hover:opacity-75",t):s()("rounded px-3 py-1.5",{[u().primary]:!f||f===l.L.primary,[u().danger]:f===l.L.danger,[u().dark]:f===l.L.dark,"bg-green-700 text-white":f===l.L.green},t),disabled:o||i,onClick:d,type:c,children:[o&&(0,r.jsx)(a.Z,{size:a.v.small})," ",n]})});d.displayName="Button",t.Z=d},3099:function(e,t,n){"use strict";var r=n(9268),o=n(6006),a=n(8414),i=n.n(a);let u=(0,o.memo)(e=>{let{children:t}=e;return(0,r.jsx)("div",{className:i().center,children:(0,r.jsx)("div",{children:t})})});u.displayName="Center",t.Z=u},9748:function(e,t,n){"use strict";n.d(t,{S:function(){return r}});var r,o=n(9268),a=n(6006),i=n(9924),u=n.n(i),c=n(8683),s=n.n(c),l=n(5474),d=n(2624);(r||(r={})).horizontal="horizontal";let f=(0,a.memo)(e=>{let{layout:t,onSubmit:n,children:i}=e,[c,f]=(0,a.useState)(!1);return(0,o.jsx)("form",{className:s()({[u().horizontal]:t===r.horizontal}),onSubmit:async e=>{if(e.preventDefault(),!c&&n){f(!0);try{n instanceof l.sG?await n():n()}catch(e){e instanceof Error?(0,l.cM)(e.message,d.L.console):(0,l.cM)(e,d.L.console)}finally{f(!1)}}},children:i})});f.displayName="Form",t.Z=f},1263:function(e,t,n){"use strict";var r=n(9268),o=n(6006),a=n(8683),i=n.n(a);let u=(0,o.memo)((0,o.forwardRef)((e,t)=>{let{className:n,type:o,value:a,onChange:u,onKeyDown:c,disabled:s,placeholder:l}=e;return(0,r.jsx)("input",{className:i()("rounded border border-solid border-gray-300 p-1",n),type:o,value:a,onChange:e=>{let t=e.target.value;null==u||u(t)},onKeyDown:c,disabled:s,placeholder:l,ref:t})}));t.Z=u},3368:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var r,o,a=n(9268),i=n(6006),u=n(8683),c=n.n(u);(r=o||(o={})).small="small",r.medium="medium";let s=(0,i.memo)(e=>{let{spinning:t=!0,size:n=o.medium,expand:r=!1,children:i}=e;return(0,a.jsxs)("div",{className:c()("relative inline-block",{"h-full w-full":r}),children:[i,t&&(0,a.jsx)("div",{className:c()("inset-0 flex items-center justify-center",{"absolute bg-white opacity-70":i,"static bg-transparent":!i}),children:(0,a.jsx)("div",{className:c()("animate-spin rounded-full border-solid border-slate-100 border-t-blue-500",{"h-2.5 w-2.5 border-2":n===o.small,"h-10 w-10 border-4":n===o.medium})})})]})});s.displayName="Spin",t.Z=s},6624:function(e,t,n){"use strict";n.d(t,{H:function(){return g},V:function(){return m}});var r=n(9268),o=n(6653),a=n(4161),i=n(2624),u=n(5474),c=n(666),s=n(6006);let l="loginState",d="username",f=()=>{let e=localStorage.getItem(l)||"",t=localStorage.getItem(d)||"",n=localStorage.getItem(c.px)||"";return e in a.M?{loginState:e,username:t,token:n}:{loginState:a.M.none,username:"",token:""}},m=(0,s.createContext)({authConfig:{loginState:a.M.none,username:"",token:""},login:async()=>{throw Error("AuthProvider not found")},logout:async()=>{throw Error("AuthProvider not found")}}),g=(0,s.memo)(e=>{let{children:t}=e,[n,g]=(0,s.useState)({loginState:a.M.none,username:"",token:""}),p=(0,s.useRef)(n);p.current=n;let h=(0,s.useCallback)(e=>{let{loginState:t,username:n,token:r}=e;g({loginState:t,username:n,token:r}),localStorage.setItem(l,t),localStorage.setItem(d,n),localStorage.setItem(c.px,r)},[]),y=(0,s.useCallback)(async function(e,t){let{logType:n=i.L.none}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(p.current.loginState===a.M.none)throw Error("Project starting");if(p.current.loginState===a.M.true||p.current.loginState===a.M.validating||p.current.loginState===a.M.validateError)throw Error("Already login");try{let r=await (0,o.c)(e,t);if((null==r?void 0:r.code)!==c.mI)return!1;return h({loginState:a.M.true,username:r.data.nickName,token:r.data.token}),(0,u.cM)("log in success",n),!0}catch(e){return e instanceof Error?(0,u.cM)(e.message,n):(0,u.cM)(e,n),!1}},[h]),v=(0,s.useCallback)(async()=>(h({loginState:a.M.loggingOut,username:p.current.username,token:p.current.token}),await (0,u.gw)(2e3),h({loginState:a.M.false,username:"",token:""}),!0),[h]),b=(0,s.useMemo)(()=>({authConfig:n,login:y,logout:v}),[n,y,v]);return(0,s.useEffect)(()=>{let e=async()=>{let{loginState:e,username:t,token:n}=f();if(e===a.M.true||e===a.M.validateError){h({loginState:a.M.validating,username:t,token:n});try{h({loginState:a.M.true,username:t,token:n})}catch(e){e instanceof Error?(0,u.cM)(e.message,i.L.message):(0,u.cM)(e,i.L.message),h({loginState:a.M.validateError,username:t,token:n})}}else h({loginState:a.M.false,username:"",token:""})};e()},[h]),(0,r.jsx)(m.Provider,{value:b,children:t})});g.displayName="AuthProvider"},1904:function(e,t,n){"use strict";n.d(t,{Q:function(){return a}});var r=n(6006),o=n(6462);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{manual:!0},n=(0,r.useRef)(t.manual),[a,i]=(0,r.useState)({loading:!1,data:void 0}),u=(0,r.useRef)(),c=(0,r.useRef)(!1),s=(0,r.useRef)(),l=(0,r.useCallback)(async function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];let a=(0,o.Z)();u.current=a,c.current=!0,s.current=n,i(e=>{let{data:t}=e;return{loading:!0,data:t}});let l=await e(...n);if(a!==u.current)throw Error("canceled");return i({loading:!1,data:l}),l},[e]),d=(0,r.useRef)(l),f=(0,r.useCallback)(async()=>{if(c.current)return await l(...s.current);throw Error("Run should be called first")},[l]),m=(0,r.useCallback)(()=>{let e=(0,o.Z)();u.current=e,i({loading:!1,data:void 0})},[]);return(0,r.useEffect)(()=>{n.current||d.current(...[])},[]),(0,r.useMemo)(()=>({run:l,refresh:f,reset:m,...a}),[l,f,m,a])}},7613:function(e){"use strict";e.exports={output:"export",basePath:"/historic-site-portal-demo-test"}},4161:function(e,t,n){"use strict";var r,o;n.d(t,{M:function(){return r}}),(o=r||(r={})).none="none",o.validating="validating",o.validateError="validateError",o.true="true",o.false="false",o.loggingOut="loggingOut"},2624:function(e,t,n){"use strict";var r,o;n.d(t,{L:function(){return r}}),(o=r||(r={})).none="none",o.console="console",o.message="message"},9153:function(e,t,n){"use strict";var r,o;n.d(t,{L:function(){return r}}),(o=r||(r={})).primary="primary",o.dark="dark",o.danger="danger",o.green="green"},666:function(e,t,n){"use strict";n.d(t,{FH:function(){return r},M7:function(){return a},mI:function(){return i},px:function(){return o}});let r="https://historical-site-backend-18d1df54380f.herokuapp.com",o="token",a=!1,i="S001"},5474:function(e,t,n){"use strict";n.d(t,{cM:function(){return u},gw:function(){return i},rn:function(){return c},sG:function(){return s}});var r=n(2624),o=n(5326),a=n.n(o);let i=async e=>{await new Promise(t=>setTimeout(t,e))},u=(e,t)=>{switch(t){case r.L.none:break;case r.L.console:case r.L.message:console.log(e)}};function c(e){return e?a()(e).format("YYYY-MM-DD HH:mm:ss"):"--"}let s=(async()=>{}).constructor},8582:function(e,t,n){"use strict";n.d(t,{$x:function(){return c},A0:function(){return l},Qv:function(){return s},_b:function(){return d},qz:function(){return u}});var r=n(7613),o=n.n(r),a=n(3034),i=n(6008);let u="redirect",c="/member",s="/login";function l(e){return"".concat(o().basePath?o().basePath:"").concat(e)}function d(e,t){(0,i.redirect)("".concat(s).concat(e===l("/")?"":"?".concat(u,"=").concat(encodeURIComponent("".concat(e,"?").concat(t.toString())))),a.RedirectType.replace)}},880:function(e){e.exports={logoDiameter:"144",wrapper:"page_wrapper__d8hW_",formContent:"page_formContent__jEOPo"}},1576:function(e){e.exports={primary:"Button_primary__Nhi6i",danger:"Button_danger__214td",dark:"Button_dark__Djc0e"}},8414:function(e){e.exports={center:"Center_center__ucmSV"}},9924:function(e){e.exports={horizontal:"Form_horizontal___Dh6K"}},6008:function(e,t,n){e.exports=n(3027)},6462:function(e,t,n){"use strict";let r;n.d(t,{Z:function(){return s}});let o="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var a={randomUUID:o};let i=new Uint8Array(16);function u(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}let c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));var s=function(e,t,n){if(a.randomUUID&&!t&&!e)return a.randomUUID();e=e||{};let r=e.random||(e.rng||u)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return function(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}(r)}}},function(e){e.O(0,[550,720,253,488,744],function(){return e(e.s=5808)}),_N_E=e.O()}]);