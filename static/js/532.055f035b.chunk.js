"use strict";(self.webpackChunkmedical_store_frontend=self.webpackChunkmedical_store_frontend||[]).push([[532],{5532:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var a=i(5043),r=i(4858),d=i(8403),o=i(3216),p=i(4505),n=i(899);const x=n.Ik().shape({email:n.Yj().email("Invalid email").required("Email is required"),password:n.Yj().min(6,"Minimum 6 characters").required("Password is required")});var s=i(8729),l=i(1529);const c=i.p+"static/media/pill.8ed49f97304c23a50c7659621a94bc6c.svg";const h=i.p+"static/media/elements.0f50220c6d8a9ab08318df022252b90c.svg";const g=i.p+"static/media/elementsMob.0dd62ea39ed7c95c97ff795abfd27f05.svg";var m=i(6405);const u=l.Ay.div`
  width: 100%;
  height: 100vh;
  background: var(--background-dark);
`,f=l.Ay.div`
  width: 1340px;
  height: 772px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: var(--background-light);
  overflow: hidden;
  padding-top: 28px;
  padding-left: 100px;
  gap: 226px;

  @media (max-width: 1440px) {
    width: 736px;
    height: 1000px;
    padding-top: 24px;
    padding-left: 32px;
    gap: 204px;
  }

  @media (max-width: 768px) {
    width: 355px;
    height: 788px;
    padding-top: 24px;
    padding-left: 20px;
    gap: 148px;
  }
`,w=l.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 175px;
  height: 44px;
`,b=l.Ay.div`
  width: 44px;
  height: 44px;
  background: url(${m.A}) no-repeat center center;
  background-size: contain;
`,v=l.Ay.div`
  margin-left: 14px;
  width: 130px;
  height: 24px;
  padding: 10px 0px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.03em;
  color: var(--background-dark);
`,k=l.Ay.div`
  position: absolute;
  width: 179px;
  height: 175px;
  left: 516px;
  top: 190px;
  background: url(${c}) no-repeat center center;
  background-size: contain;

  @media (max-width: 1440px) {
    left: 448px;
    top: 164px;
  }

  @media (max-width: 768px) {
    width: 95px;
    height: 93px;
    left: 248px;
    top: 164px;
  }
`,y=l.Ay.div`
  position: absolute;
  width: 300px;
  height: 270px;
  left: 1140px;
  top: 548px;
  background: url(${h}) no-repeat center center;
  background-size: contain;
  overflow: hidden;

  @media (max-width: 1440px) {
    left: 467px;
    top: 780px;
  }

  @media (max-width: 768px) {
    width: 235px;
    height: 170px;
    left: 140px;
    top: 640px;
    background: url(${g}) no-repeat left top;
  }
`,j=l.Ay.div`
  width: 1087px;
  height: 240px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 150px;

  @media (max-width: 1440px) {
    flex-direction: column;
    gap: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;
    width: 335px;
    height: 362px;
  }
`,A=l.Ay.h1`
  width: 614px;
  height: 240px;
  font-weight: 600;
  font-size: 54px;
  line-height: 60px;
  color: var(--background-dark);

  span {
    color: var(--accent-green);
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 34px;
    text-align: left;
    width: 335px;
    height: 136px;
  }
`,z=l.Ay.form`
  width: 323px;
  height: 186px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;

  @media (max-width: 768px) {
    width: 335px;
    height: 186px;
  }
`,C=l.Ay.input`
  width: 287px;
  height: 18px;
  padding: 13px 18px;
  background: var(--background-white);
  border: 1px solid var(--border-color);
  border-radius: 60px;
  font-size: 12px;
  line-height: 18px;
  color: var(--label-color);

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
    width: 299px;
    height: 18px;
  }
`,S=l.Ay.button`
  width: 323px;
  height: 44px;
  margin-top: 26px;
  background: var(--accent-green);
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--background-white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: var(--accent-btn);
  }

  @media (max-width: 768px) {
    width: 335px;
  }
`;var q=i(579);const I=()=>{const{register:e,handleSubmit:t,formState:{errors:i}}=(0,r.mN)({resolver:(0,d.t)(x)}),n=(0,o.Zp)(),{login:l}=(0,a.useContext)(s.c);return(0,q.jsx)(u,{children:(0,q.jsxs)(f,{children:[(0,q.jsxs)(w,{children:[(0,q.jsx)(b,{}),(0,q.jsx)(v,{children:"E-Pharmacy"})]}),(0,q.jsxs)(j,{children:[(0,q.jsxs)(A,{children:["Your medication, delivered Say goodbye to all"," ",(0,q.jsx)("span",{children:"your healthcare "}),"worries with us"]}),(0,q.jsxs)(z,{onSubmit:t((async e=>{try{const t=await p.A.post("/user/login",e),i=t.data.accessToken,a=t.data.user;localStorage.setItem("accessToken",i),l(i,a),n("/dashboard")}catch(t){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0445\u043e\u0434\u0430",t)}})),children:[(0,q.jsx)(C,{type:"email",name:"email",placeholder:"Email address",autoComplete:"username",...e("email")}),i.email&&(0,q.jsx)("p",{children:i.email.message}),(0,q.jsx)(C,{type:"password",name:"password",placeholder:"Password",autoComplete:"current-password",...e("password")}),i.password&&(0,q.jsx)("p",{children:i.password.message}),(0,q.jsx)(S,{type:"submit",children:"Log In"})]}),(0,q.jsx)(k,{})]}),(0,q.jsx)(y,{})]})})}}}]);
//# sourceMappingURL=532.055f035b.chunk.js.map