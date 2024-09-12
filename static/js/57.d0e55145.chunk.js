"use strict";(self.webpackChunkmedical_store_frontend=self.webpackChunkmedical_store_frontend||[]).push([[57],{1438:(e,t,i)=>{i.d(t,{A:()=>r});i(5043);const r=i.p+"static/media/filter.acb92ebfe22c798e4aff15f06657d477.svg"},8550:(e,t,i)=>{i.d(t,{A:()=>r});i(5043);const r=i.p+"static/media/slideOff.539d53e0426033a29780f3f0dbef421f.svg"},2864:(e,t,i)=>{i.d(t,{A:()=>r});i(5043);const r=i.p+"static/media/slideOn.dc9dc7ce81eedb070fc2f4ca02f9ec73.svg"},6057:(e,t,i)=>{i.r(t),i.d(t,{default:()=>O});var r=i(5043),d=i(3003),x=i(4505),a=i(4308);var p=i(7877),o=i(1529),s=i(2864);const n=o.Ay.div`
  width: 100%;
  height: calc(100% - 116px); // 115padding + 1border
  background-color: var(--background-light);
  color: var(--background-dark);
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: var(--border-color);
  padding: 75px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1440px) {
    width: 960px;
    height: 604px;
    padding: 50px 32px 32px 32px;
  }

  @media (max-width: 1024px) {
    width: 704px;
    height: 862px;
    padding: 50px 32px 32px 32px;
    overflow-x: auto;
  }

  @media (max-width: 768px) {
    width: 335px;
    height: 672px;
    padding: 40px 20px 20px 20px;
    gap: 20px;
    overflow-x: auto;
  }
`,h=o.Ay.div`
  width: 1280px;
  height: 500px;
  display: table;
  table-layout: fixed;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 8px;

  @media (max-width: 1440px) {
    width: 960px;
    height: 500px;
  }

  @media (max-width: 1024px) {
    width: 960px;
    height: 500px;
  }

  @media (max-width: 768px) {
    width: 768px;
    height: 460px;
  }
`,c=o.Ay.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`,l=o.Ay.input`
  width: 186px;
  height: 16px;
  padding: 13px 18px;
  border: 1px solid var(--border-color);
  border-radius: 60px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  background-color: var(--background-white);

  &:focus {
    color: var(--background-dark);
    border: 1px solid var(--accent-green);
    outline: none;
  }

  &:hover {
    color: var(--background-dark);
    border: 1px solid var(--accent-green);
  }

  @media (max-width: 768px) {
    width: 182px;
    padding: 13px 13px 13px 18px;
    gap: 8px;
  }
`,g=o.Ay.div`
  width: 116px;
  height: 44px;
  gap: 8px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-green);
  color: var(--background-white);
  border: none;
  cursor: pointer;
  line-height: 18px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-btn);
  }

  @media (max-width: 768px) {
    width: 112px;
    font-size: 12px;
  }
`,w=o.Ay.img`
  width: 14px;
  height: 14px;

  @media (max-width: 768px) {
  }
`,m=o.Ay.div`
  width: 1240px;
  height: 24px;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  background: var(--background-accent-light);
  color: var(--background-dark);

  @media (max-width: 1440px) {
    width: 920px;
  }
  @media (max-width: 1024px) {
    width: 920px;
  }

  @media (max-width: 768px) {
    width: 740px;
    height: 20px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
  }
`,f=o.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;

  @media (max-width: 1440px) {
    width: 194px;
    height: 35px;
  }
  @media (max-width: 1024px) {
    width: 194px;
    height: 35px;
  }

  @media (max-width: 768px) {
    width: 106px;
    height: 45px;
    align-items: flex-start;
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,u=o.Ay.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: none;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    border-radius: 12px;
  }
`,A=o.Ay.span`
  display: flex;
  width: 92px;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{let{status:t}=e;switch(t){case"Completed":return"#59B17A";case"Confirmed":return"#8059E4";case"Pending":return"#F79042";case"Cancelled":return"#E85050";case"Processing":return"#70A6E8";case"Shipped":return"#4A90E2";case"Delivered":return"#50C878";default:return"#1D1E21"}}};
  background-color: ${e=>{let{status:t}=e;switch(t){case"Completed":return"rgba(89, 177, 122, 0.1)";case"Confirmed":return"rgba(128, 89, 228, 0.1)";case"Pending":return"rgba(247, 144, 66, 0.1)";case"Cancelled":return"rgba(232, 80, 80, 0.1)";case"Processing":return"rgba(112, 166, 232, 0.1)";case"Shipped":return"rgba(74, 144, 226, 0.1)";case"Delivered":return"rgba(80, 200, 120, 0.1)";default:return"#E0E0E0"}}};
`,v=o.Ay.div`
  display: flex;
  flex-direction: column;
  height: 438px;

  @media (max-width: 768px) {
    height: 412px;
  }
`,b=(o.Ay.div`
  width: 100%;
`,o.Ay.div`
  flex-grow: 1;
  max-height: 380px;

  @media (max-width: 768px) {
    height: 370px;
  }
`,o.Ay.div`
  display: flex;
  background: var(--background-white);
  position: sticky;
  top: 0;
  z-index: 1;
`),k=o.Ay.div`
  width: 200px;
  flex: 1;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--label-color);

  @media (max-width: 1440px) {
    height: 17px;
  }

  @media (max-width: 1024px) {
    height: 17px;
  }

  @media (max-width: 768px) {
    width: 106px;
    height: 13px;
    font-size: 12px;
    line-height: 14px;
    padding: 14px 7px 14px 14px;
  }
`,y=o.Ay.div`
  @media (max-width: 1440px) {
    width: 194px;
  }

  @media (max-width: 1024px) {
    width: 194px;
  }

  @media (max-width: 768px) {
    width: 107px;
  }
`,j=o.Ay.div`
  @media (max-width: 1440px) {
    width: 127px;
  }

  @media (max-width: 1024px) {
    width: 127px;
  }

  @media (max-width: 768px) {
    width: 106px;
  }
`,E=o.Ay.div`
  display: flex;
  &:nth-child(even) {
    background-color: #f7f8fa;
  }
`,C=o.Ay.div`
  width: 200px;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px 10px 20px 20px;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  @media (max-width: 1440px) {
    width: 195px;
    height: 35px;
    padding: 20px 10px 20px 20px;
  }

  @media (max-width: 1024px) {
    width: 195px;
    height: 35px;
    padding: 20px 10px 20px 20px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    width: 106px;
    height: 45px;
    padding: 14px 7px 14px 14px;
  }
`,P=o.Ay.div`
  @media (max-width: 1440px) {
    width: 127px;
    height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;  

  @media (max-width: 1024px) {
    width: 127px;
    height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    
  }

  @media (max-width: 768px) {
    width: 106px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,S=o.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19px;
  gap: 8px;

  @media (max-width: 768px) {
    height: 16px;
    gap: 8px;
  }
`,T=o.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 19px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,z=o.Ay.img`
  width: ${e=>{let{src:t}=e;return t===s.A?"12px":"10px"}};
  height: ${e=>{let{src:t}=e;return t===s.A?"12px":"10px"}};
  cursor: pointer;

  @media (max-width: 768px) {
    width: ${e=>{let{src:t}=e;return t===s.A?"12px":"10px"}};
    height: ${e=>{let{src:t}=e;return t===s.A?"12px":"10px"}};
  }
`;var D=i(1438),Y=i(8550),q=i(579);const O=()=>{const e=(0,d.wA)(),{orders:t,error:i}=(0,d.d4)((e=>e.orders)),[o,O]=(0,r.useState)(""),[J,M]=(0,r.useState)([]),[W,U]=(0,r.useState)(1);(0,r.useEffect)((()=>{e((async e=>{try{const t=await x.A.get("/orders");e({type:a.xc,payload:t.data})}catch(i){e({type:a.qq,payload:i.message})}}))}),[e]),(0,r.useEffect)((()=>{M(t)}),[t]);if(i)return(0,q.jsxs)("div",{children:["Error: ",i]});if(!t)return(0,q.jsx)("div",{children:"Loading..."});const Z=5*W,R=Z-5,B=J.slice(R,Z),K=Math.ceil(J.length/5);return(0,q.jsxs)(n,{children:[(0,q.jsxs)(c,{children:[(0,q.jsx)(l,{placeholder:"User Name",value:o,onChange:e=>O(e.target.value)}),(0,q.jsxs)(g,{onClick:()=>{if(""===o.trim())M(t);else{const e=t.filter((e=>e.name.toLowerCase().includes(o.toLowerCase())));M(e)}},children:[(0,q.jsx)(w,{src:D.A,alt:"filter"}),"Filter"]})]}),(0,q.jsxs)(h,{children:[(0,q.jsx)(m,{children:"All orders"}),(0,q.jsxs)(v,{children:[(0,q.jsxs)(b,{children:[(0,q.jsx)(k,{children:(0,q.jsx)(y,{children:"User Info"})}),(0,q.jsx)(k,{children:(0,q.jsx)(j,{children:"Address"})}),(0,q.jsx)(k,{children:"Products"}),(0,q.jsx)(k,{children:"Order date"}),(0,q.jsx)(k,{children:"Price"}),(0,q.jsx)(k,{children:"Status"})]}),B.map((e=>(0,q.jsxs)(E,{children:[(0,q.jsx)(C,{children:(0,q.jsxs)(f,{children:[(0,q.jsx)(u,{src:e.photo?e.photo:p,alt:e.name}),e.name]})}),(0,q.jsx)(C,{children:(0,q.jsx)(P,{children:e.address})}),(0,q.jsx)(C,{children:e.products}),(0,q.jsx)(C,{children:e.order_date}),(0,q.jsx)(C,{children:e.price}),(0,q.jsx)(C,{children:(0,q.jsx)(A,{status:e.status,children:e.status})})]},e._id)))]})]}),J.length>5&&(0,q.jsx)(S,{children:Array.from({length:K},((e,t)=>(0,q.jsx)(T,{children:(0,q.jsx)(z,{src:W===t+1?s.A:Y.A,alt:`page ${t+1}`,onClick:()=>{U(t+1)}},t)})))})]})}},4505:(e,t,i)=>{i.d(t,{A:()=>a});var r=i(6213);const d="https://medical-store-backend-tvo6.onrender.com/api",x=r.A.create({baseURL:d,withCredentials:!0});x.interceptors.request.use((e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e))),x.interceptors.response.use((e=>e),(async e=>{const t=e.config;if(401===e.response.status&&!t._retry){t._retry=!0;try{const e=localStorage.getItem("refreshToken"),i=await r.A.post(`${d}/user/refresh-token`,{refreshToken:e},{withCredentials:!0}),{accessToken:a,newRefreshToken:p}=i.data;return localStorage.setItem("accessToken",a),localStorage.setItem("refreshToken",p),x.defaults.headers.common.Authorization=`Bearer ${a}`,x(t)}catch(i){return localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),window.location.href="/login",Promise.reject(i)}}return Promise.reject(e)}));const a=x},7877:e=>{e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=57.d0e55145.chunk.js.map