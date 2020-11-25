(this.webpackJsonpdelete=this.webpackJsonpdelete||[]).push([[0],{52:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),o=n(8),i=n.n(o),s=n(3),l=(n(39),n(54)),d=n(55),j=n(33),m=n(9),h=Object(m.b)({key:"nameState",default:localStorage.getItem("name")||""}),b=(Object(m.b)({key:"todoListFilterState",default:"Show All"}),n(56)),p=n(57),u=n(58),x={wrapper:{background:"#222",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"},form:{background:"#222",color:"white",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"}},O=function(){console.log(h);var e=Object(m.c)(h),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(!n),i=Object(s.a)(o,2),l=i[0],d=i[1],j=function(){return d(!1)};return Object(r.jsx)(r.Fragment,{children:l&&Object(r.jsx)(b.a,{show:l,onHide:j,style:x.wrapper,className:"",children:Object(r.jsx)(p.a,{style:x.form,onSubmit:function(){console.log(n),""===n?(localStorage.setItem("name","Visitor"),a("Visitor")):localStorage.setItem("name",n),j()},children:Object(r.jsxs)(p.a.Group,{children:[Object(r.jsx)(p.a.Label,{children:"Hello! What is your name?"}),Object(r.jsx)(p.a.Control,{value:n,onChange:function(e){var t=e.target.value;a(t)},type:"text",placeholder:"Visitor"}),Object(r.jsx)(u.a,{className:"mt-3",type:"submit",children:"Enter"})]})})})})},y=(n(28),{wrapper:{background:"#222",color:"white",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}),F=function(){var e=Object(m.c)(h),t=Object(s.a)(e,2),n=t[0];t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{id:"greeting",style:y.wrapper,children:Object(r.jsxs)("h1",{children:["Hi",n&&", ".concat(n),"!"]})}),Object(r.jsx)("div",{id:"intro",style:y.wrapper,children:Object(r.jsx)("h1",{children:"My name is Logan"})}),Object(r.jsx)("div",{id:"iama",style:y.wrapper,children:Object(r.jsx)("h2",{children:Object(r.jsxs)("ul",{children:["I am",Object(r.jsx)("li",{children:"a developer"}),Object(r.jsx)("li",{children:"an educator"}),Object(r.jsx)("li",{children:"a mentor"}),Object(r.jsx)("li",{children:"a lifelong learner"})]})})})]})},g=function(){return Object(r.jsxs)("div",{id:"skills",style:{background:"#222",color:"white",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"},children:[" ",Object(r.jsx)("h2",{children:"I have experience with:"}),Object(r.jsx)("div",{className:"row",children:[{name:"React JS",type:"Frontend"},{name:"React Native",type:"Frontend"},{name:"Node",type:"Frontend"},{name:"Express",type:"Frontend"},{name:"GraphQL",type:"Frontend"},{name:"MongoDB",type:"Frontend"},{name:"MySQL",type:"Frontend"},{name:"Postgres",type:"Frontend"},{name:"Redux",type:"Frontend"},{name:"Recoil",type:"Frontend"},{name:"Bootstrap",type:"Frontend"},{name:"Bulma",type:"Frontend"},{name:"CSS",type:"Frontend"},{name:"SCSS",type:"Frontend"},{name:"Webpack",type:"Frontend"},{name:"NextJS",type:"Frontend"},{name:"Gatsby",type:"Frontend"},{name:"Angular",type:"Frontend"},{name:"RESTful APIs",type:"Frontend"},{name:"Authentication",type:"Frontend"},{name:"Webhooks",type:"Frontend"},{name:"Microservices",type:"Frontend"},{name:"AWS",type:"Frontend"},{name:"Tensorflow",type:"Frontend"},{name:"Linux",type:"Frontend"},{name:"Docker",type:"Frontend"},{name:"Git",type:"Frontend"},{name:"GitHub",type:"Frontend"},{name:"Unit Testing",type:"Frontend"},{name:"CI/CD",type:"Frontend"},{name:"Postman",type:"Frontend"},{name:"Javascript",type:"Frontend"},{name:"Python",type:"Frontend"},{name:"NPM",type:"Frontend"},{name:"DevOps",type:"Frontend"},{name:"Brain.js",type:"Frontend"},{name:"Handlebars",type:"Frontend"},{name:"Socket.io",type:"Frontend"},{name:"Jest",type:"Frontend"},{name:"Enzyme",type:"Frontend"}].sort((function(e,t){var n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:0})).map((function(e){return Object(r.jsx)("div",{className:"col-6 col-sm-4 col-md-2 col-lg-2 text-center p-3",children:e.name})}))})]})},f=function(){return Object(r.jsxs)("div",{id:"contact",style:{background:"#222",color:"white",height:"30vh"},children:[Object(r.jsxs)("div",{className:"pt-5 text-center font-size",id:"phone",children:[Object(r.jsxs)("h1",{className:"d-sm-block d-none",children:[" ",Object(r.jsx)("a",{href:"tel:+16166487908",children:"6166487908"})]}),Object(r.jsx)("h6",{className:"d-block d-sm-none",children:Object(r.jsx)("a",{href:"tel:+16166487908",children:"6166487908"})})]}),Object(r.jsxs)("div",{className:"text-center",id:"email",children:[Object(r.jsx)("h1",{className:"d-sm-block d-none",children:Object(r.jsx)("a",{href:"mailto:logan.miner@protonmail.com?subject=lrminer.github.io",children:"logan.miner@protonmail.com"})}),Object(r.jsx)("h6",{className:"d-block d-sm-none",children:Object(r.jsx)("a",{href:"mailto:logan.miner@protonmail.com?subject=lrminer.github.io",children:"logan.miner@protonmail.com"})})]})]})};var v=function(){var e=["greeting","intro","iama","skills","contact"],t=Object(c.useState)(1),n=Object(s.a)(t,2),a=n[0],o=(n[1],Object(c.useState)(e[a])),i=Object(s.a)(o,2),h=(i[0],i[1]);return Object(c.useEffect)((function(){h(e[a])}),[e,a]),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(m.a,{children:Object(r.jsxs)(l.a,{fluid:!0,className:"p-0",children:[Object(r.jsx)(d.a,{noGutters:!0,children:Object(r.jsx)(j.a,{children:Object(r.jsx)(O,{})})}),Object(r.jsx)(d.a,{noGutters:!0,children:Object(r.jsx)(j.a,{children:Object(r.jsx)(F,{})})}),Object(r.jsx)(d.a,{noGutters:!0,children:Object(r.jsx)(j.a,{children:Object(r.jsx)(g,{})})}),Object(r.jsx)(d.a,{noGutters:!0,children:Object(r.jsx)(j.a,{})}),Object(r.jsx)(d.a,{noGutters:!0,children:Object(r.jsx)(j.a,{children:Object(r.jsx)(f,{})})})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),S()}},[[52,1,2]]]);
//# sourceMappingURL=main.9f5c8a7f.chunk.js.map