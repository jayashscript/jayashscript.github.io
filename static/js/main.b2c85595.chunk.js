(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{148:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(1),i=t(0),c=t.n(i),o=t(59),s=t.n(o),l=(t(68),function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,149)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),a(n),i(n),c(n)}))}),d=t(17),p=t(8),j=t(9),h=t(11),b=t(10),x=t(3),u=t(12);function f(){var n=Object(r.a)(["\n  position: absolute;\n  right: 10px;\n  top: 15px;\n  color: #fafaff;\n  border: none;\n  background-color: #2b303a;\n  border: solid 1px #fafaff;\n\n  &:hover {\n    color: #d81e5b;\n  }\n  &:focus {\n    outline: none;\n  }\n  h1 {\n    padding: 5px;\n  }\n  @media all and (min-width: 768px) {\n    display: none;\n  }\n"]);return f=function(){return n},n}function O(){var n=Object(r.a)(["\n  text-align: center;\n  margin-top: 10px;\n  @media all and (max-width: 380px) {\n    font-size: 24px;\n  }\n"]);return O=function(){return n},n}function m(){var n=Object(r.a)(["\n  background-color: #2b303a;\n  color: white;\n  z-index: 2;\n  padding: 10px;\n  position: relative;\n  min-height: 78px;\n  a {\n    color: white;\n    font-size: 24px;\n    text-decoration: none;\n  }\n  a:hover {\n    color: #d81e5b;\n  }\n  ul {\n    display: flex;\n    li {\n      display: block;\n      padding: 10px;\n      margin: 0 10px 0 10px;\n      list-style: none;\n    }\n  }\n  @media all and (max-width: 650px) {\n    ul {\n      display: flex;\n      flex-direction: column;\n    }\n  }\n  @media all and (max-width: 480px) {\n    height: 100%;\n  }\n  @media all and (min-width: 650px) {\n    display: none;\n  }\n"]);return m=function(){return n},n}function g(){var n=Object(r.a)(["\n  background-color: #2b303a;\n  color: white;\n  padding: 10px;\n  position: relative;\n  min-height: 78px;\n  a {\n    color: white;\n    font-size: 24px;\n    text-decoration: none;\n  }\n  a:hover {\n    color: #d81e5b;\n  }\n  ul {\n    display: flex;\n    li {\n      padding: 10px;\n      margin: 0 10px 0 10px;\n      list-style: none;\n    }\n  }\n  @media all and (max-width: 650px) {\n    display: none;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n  float: right;\n\n  width: 30%;\n  height: 100%;\n  @media all and (max-width: 768px) {\n    height: 300px;\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    background-color: #fafaff;\n    padding: 20px;\n    height: 100%;\n\n    a {\n      text-decoration: none;\n    }\n    h2 {\n      color: #d81e5b;\n    }\n  }\n  img {\n    width: 150px;\n    height: auto;\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(r.a)(["\n  width: 70%;\n  height: 100%;\n  object-fit: cover;\n"]);return y=function(){return n},n}function w(){var n=Object(r.a)(["\n  height: 300px;\n  display: flex;\n  @media all and (max-width: 768px) {\n    display: none;\n  }\n"]);return w=function(){return n},n}var k=x.a.div(w()),A=x.a.img(y()),I=x.a.div(v()),C=x.a.div(g()),D=x.a.div(m()),z=x.a.h1(O()),H=x.a.button(f()),F=function(n){Object(h.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={showHamburger:!1},n.toggleHamburger=function(){n.setState({showHamburger:!n.state.showHamburger},(function(){}))},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(a.jsxs)(k,{children:[Object(a.jsx)(A,{src:this.props.profile.coverImage,alt:""}),Object(a.jsx)(I,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:this.props.profile.userImage,alt:""}),Object(a.jsx)(u.b,{to:"/about",children:Object(a.jsx)("h2",{children:this.props.profile.name})}),Object(a.jsx)("p",{children:this.props.profile.bio})]})})]}),Object(a.jsxs)(D,{children:[Object(a.jsx)(H,{id:"hamburger",onClick:this.toggleHamburger,children:this.state.showHamburger?Object(a.jsx)("h1",{children:"\u2630"}):Object(a.jsx)("h1",{children:"\u2715"})}),Object(a.jsxs)("ul",{style:this.state.showHamburger?{display:"none"}:{},children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/archive",children:"Archive"})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/projects",children:"Projects"})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/about",children:"About"})})]}),this.state.showHamburger?Object(a.jsx)(z,{children:Object(a.jsx)(u.c,{to:"/",children:"jayash.xyz"})}):null]}),Object(a.jsx)(C,{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/archive",children:"Archive"})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/projects",children:"Projects"})}),Object(a.jsx)("li",{children:Object(a.jsx)(u.c,{to:"/about",children:"About"})})]})})]})}}]),t}(i.Component),T=t(25),L=t(28),M=t.n(L);function P(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px dotted black;\n  margin-bottom: 10px;\n  h1 {\n    color: #d81e5b;\n  }\n  p {\n    color: #555555;\n  }\n  h1:hover {\n    color: #2b303a;\n  }\n"]);return P=function(){return n},n}function R(){var n=Object(r.a)(["\n  background-color: #fafaff;\n  margin: 10px 0 10px 0;\n\n  padding: 20px;\n  border-radius: 3px;\n  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);\n  ul {\n    margin-left: 20px;\n  }\n  a {\n    color: #d81e5b;\n  }\n"]);return R=function(){return n},n}var J=Object(x.a)(T.b.div)(R()),N=x.a.div(P()),S=function(n){Object(h.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(a.jsxs)(J,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(a.jsx)(u.b,{to:{pathname:"/posts/".concat(this.props.data.id)},style:{textDecoration:"none"},children:Object(a.jsxs)(N,{children:[Object(a.jsx)("h1",{children:this.props.data.title}),this.props.data.date?Object(a.jsx)("p",{children:this.props.data.date}):Object(a.jsx)("p",{})]})}),Object(a.jsx)(M.a,{children:this.props.data.content})]})}}]),t}(i.Component),B=function(n){Object(h.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(p.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=e.call.apply(e,[this].concat(i))).state={},n.postList=n.props.assumeFetchedData.map((function(n,e){return Object(a.jsx)(S,{data:n},e)})),n}return Object(j.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{style:{flex:1},children:this.postList})}}]),t}(i.Component);function $(){var n=Object(r.a)(["\n  width: 50%;\n  height: 100%;\n  display: inline;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #fafaff;\n    padding: 20px;\n    height: 100%;\n\n    a {\n      text-decoration: none;\n    }\n    h2 {\n      color: #d81e5b;\n    }\n  }\n  img {\n    width: 150px;\n    height: auto;\n  }\n"]);return $=function(){return n},n}function E(){var n=Object(r.a)(["\n  display: none;\n  @media all and (min-width: 768px) {\n    display: block;\n  }\n"]);return E=function(){return n},n}function G(){var n=Object(r.a)(["\n  display: none;\n  @media all and (max-width: 768px) {\n    display: block;\n  }\n"]);return G=function(){return n},n}function U(){var n=Object(r.a)(["\n  h1 {\n    color: #d81e5b;\n  }\n  p {\n    color: #555555;\n  }\n  @media all and (max-width: 768px) {\n    text-align: center;\n  }\n"]);return U=function(){return n},n}function Y(){var n=Object(r.a)(["\n  flex: 1;\n  height: 100%;\n  background-color: rgb(250, 250, 255);\n  margin: 10px 0 20px 0;\n  padding: 20px;\n\n  border-radius: 3px;\n  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);\n"]);return Y=function(){return n},n}var _=x.a.div(Y()),q=x.a.div(U()),K=x.a.div(G()),Q=x.a.div(E()),V=x.a.div($()),W=function(n){Object(h.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{style:{flex:1},children:Object(a.jsxs)(_,{children:[Object(a.jsx)(q,{children:Object(a.jsx)("h1",{children:this.props.data.title})}),Object(a.jsxs)(K,{children:[Object(a.jsx)(V,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:this.props.profile.userImage,alt:""}),Object(a.jsx)("h2",{children:this.props.profile.name})]})}),Object(a.jsx)("p",{children:this.props.data.content})]}),Object(a.jsx)(Q,{children:Object(a.jsx)("p",{children:this.props.data.content})})]})})}}]),t}(i.Component);function X(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px dotted black;\n  margin-bottom: 10px;\n  h1 {\n    color: #d81e5b;\n  }\n  p {\n    color: #555555;\n  }\n"]);return X=function(){return n},n}function Z(){var n=Object(r.a)(["\n  background-color: #fafaff;\n  height: 100%;\n\n  margin: 10px 0 10px 0;\n  padding: 20px;\n  border-radius: 3px;\n  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);\n\n  ul {\n    margin-left: 20px;\n  }\n  a {\n    color: #d81e5b;\n  }\n"]);return Z=function(){return n},n}var nn=x.a.div(Z()),en=x.a.div(X()),tn=function(n){Object(h.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(p.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=e.call.apply(e,[this].concat(i))).state={},n.directPost=n.props.data.map((function(e,t){var r=e.id,i=e.title,c=e.date,o=e.content,s=n.props.location.pathname.split("/");return r===s[s.length-1]?Object(a.jsx)("div",{style:{flex:1},children:Object(a.jsxs)(nn,{children:[Object(a.jsxs)(en,{children:[Object(a.jsx)("h1",{children:i}),c?Object(a.jsx)("p",{children:c}):Object(a.jsx)("p",{})]}),Object(a.jsx)(M.a,{children:o})]})},r):null})),n}return Object(j.a)(t,[{key:"render",value:function(){return this.props.location.state?Object(a.jsx)(T.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{flex:1},children:Object(a.jsxs)(nn,{children:[Object(a.jsxs)(en,{children:[Object(a.jsx)("h1",{children:this.props.location.state.title}),this.props.location.state.date?Object(a.jsx)("p",{children:this.props.location.state.date}):Object(a.jsx)("p",{})]}),Object(a.jsx)(M.a,{children:this.props.location.state.content})]})}):Object(a.jsx)("div",{style:{flex:1},children:this.directPost})}}]),t}(i.Component);function rn(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px dotted black;\n  p {\n    color: #2b303a;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(r.a)(["\n  background-color: rgb(250, 250, 255);\n  //flex: 1; //fils remaining space in the middle between header and footer\n  margin: 10px 0 10px 0;\n  padding: 20px;\n  height: 100%;\n  border-radius: 3px;\n  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);\n\n  h2 {\n    color: #d81e5b;\n  }\n  a {\n    text-decoration: none;\n  }\n  h2:hover {\n    color: #2b303a;\n  }\n"]);return an=function(){return n},n}var cn=x.a.div(an()),on=x.a.div(rn()),sn=function(n){Object(h.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(p.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=e.call.apply(e,[this].concat(i))).state={},n.postList=n.props.assumeFetchedData.map((function(n,e){var t=n.id,r=n.title,i=n.date,c=n.content;return Object(a.jsxs)("div",{children:[Object(a.jsx)(u.b,{to:{pathname:"/posts/".concat(t),state:{id:t,title:r,date:i,content:c}},children:Object(a.jsxs)(on,{children:[Object(a.jsx)("h2",{children:r}),Object(a.jsx)("p",{children:i})]})}),Object(a.jsx)("br",{})]},e)})),n}return Object(j.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{style:{flex:1},children:[" ",Object(a.jsxs)(cn,{children:[Object(a.jsx)("h1",{children:"Archive"}),Object(a.jsx)("br",{}),this.postList]})]})}}]),t}(i.Component);function ln(){var n=Object(r.a)(["\n  margin-top: 20px;\n  min-height: 50px;\n  background-color: #2b303a;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return ln=function(){return n},n}var dn=x.a.footer(ln()),pn=function(n){Object(h.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(a.jsx)(dn,{children:"Made with love and no $$$ "})}}]),t}(i.Component),jn=t(4);function hn(){var n=Object(r.a)(["\n  margin-bottom: 20px;\n  h1 {\n    color: #d81e5b;\n  }\n  p {\n    color: #555555;\n  }\n"]);return hn=function(){return n},n}function bn(){var n=Object(r.a)(["\n  //flex: 1; fils remaining space\n  margin: 10px 10px 20px 10px;\n  padding: 10px;\n  position: relative;\n  flex: 0 0 350px;\n  border-bottom: solid 1px #d81e5b;\n  div {\n    display: flex;\n    z-index: 1;\n    align-items: center;\n    justify-content: center;\n  }\n\n  img {\n    position: relative;\n    z-index: 1;\n    display: block;\n    max-width: 800px;\n    max-height: 800px;\n    width: 100%;\n    height: 100%;\n    margin-bottom: 20px;\n  }\n  @media all and (max-width: 480px) {\n    flex: 0 0 200px;\n  }\n  @media all and (min-width: 768px) {\n    border-bottom: none;\n    padding: 0px;\n    div p {\n      display: none;\n    }\n    div:hover p {\n      display: flex;\n      position: absolute;\n      top: 0px;\n      text-align: center;\n      z-index: 2;\n      margin: 10px;\n    }\n    div a {\n      color: black;\n      text-decoration: none;\n    }\n\n    div:hover img {\n      opacity: 0.1;\n    }\n  }\n"]);return bn=function(){return n},n}function xn(){var n=Object(r.a)(["\n  //flex: 1; fils remaining space\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  @media all and (max-width: 600px) {\n    flex-wrap: nowrap;\n    flex-direction: column;\n  }\n"]);return xn=function(){return n},n}function un(){var n=Object(r.a)(["\n  background-color: rgb(250, 250, 255);\n\n  //flex: 1; //fils remaining space in the middle between header and footer\n  margin: 10px 0 10px 0;\n  padding: 20px;\n\n  border-radius: 3px;\n  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.27);\n\n  h2 {\n    color: #d81e5b;\n  }\n  a {\n    text-decoration: none;\n  }\n  h2:hover {\n    color: #2b303a;\n  }\n"]);return un=function(){return n},n}var fn=x.a.div(un()),On=x.a.div(xn()),mn=x.a.div(bn()),gn=x.a.div(hn()),vn=function(n){Object(h.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{style:{flex:1},children:Object(a.jsxs)(fn,{children:[Object(a.jsx)(gn,{children:Object(a.jsx)("h1",{children:"Projects"})}),Object(a.jsxs)(On,{children:[Object(a.jsx)(mn,{children:Object(a.jsx)("div",{children:Object(a.jsxs)("a",{href:"https://jayash.xyz/todo/",children:[Object(a.jsx)("img",{className:"project-image",src:"../images/todolist.png",alt:""}),Object(a.jsx)("p",{children:"To Do List, uses local strage to keep the items persistent until the cache is cleared."})]})})}),Object(a.jsx)(mn,{children:Object(a.jsx)("div",{children:Object(a.jsxs)("a",{href:"https://jayash.xyz/calculator/",children:[Object(a.jsx)("img",{className:"project-image",src:"../images/calculator.png",alt:""}),Object(a.jsx)("p",{children:"A simple calculator made with React."})]})})}),Object(a.jsx)(mn,{children:Object(a.jsx)("div",{children:Object(a.jsxs)("a",{href:"https://jayash.xyz/pomodoro",children:[Object(a.jsx)("img",{className:"project-image",src:"../images/pomodoro.png",alt:""}),Object(a.jsx)("p",{children:"A simple pomodoro timer made with React."})]})})}),Object(a.jsx)(mn,{children:Object(a.jsx)("div",{children:Object(a.jsxs)("a",{href:"https://jayash.xyz/drums/",children:[Object(a.jsx)("img",{className:"project-image",src:"../images/drums.png",alt:""}),Object(a.jsx)("p",{children:"A drumpad, made with React."})]})})})]})]})})}}]),t}(i.Component);function yn(){var n=Object(r.a)(["\n  width: 80vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  @media all and (max-width: 480px) {\n    width: 90vw;\n  }\n"]);return yn=function(){return n},n}var wn=x.a.div(yn()),kn={name:"Jayash Raj Mudbhari",bio:"A web developer I guess.",coverImage:"../images/cover.jpg",userImage:"../images/face.jpg"},An={id:"test;",title:"About",date:"",content:"Hi, I am Jayash Raj Mudbhari. I am a self-taught web developer and this is my personal website."},In=[{id:"103",title:"Project: To Do List",date:"3rd Jan, 20221",content:"I was working on a To Do list app with which I could easily see my daily tasks from a secondary laptop. This project uses Framer Motion to do few animations, styled componentents and local storage. You can find the project  [here.](/#/todo)"},{id:"102",title:"Features of this site",date:"1st January 2021",content:"This site is technically a single page app, hosted on github pages. It is made with React and react router. I used a little bit of TypeScript when making this site."},{id:"101",title:"TODO: Need to implement",date:"29/12/2020 (Updated: 10/01/2021)",content:"\n*  [ ] Mobile website  \n*  [ ] Ordering of posts, proper date sheme,   \n*  [x] projects page\n*  [ ] photos page\n*  [x] Markdown/Org editor\n*  [ ] a button to allow projects to become full screen\n*  [ ] autoplay (Record/ play/ clear) for drums\n*  [ ] proirity (color) for todo\n    \n    My favorite search engine is [Duck Duck Go](https://duckduckgo.com).\n    "}],Cn=function(n){Object(h.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(a.jsxs)(wn,{children:[Object(a.jsxs)(u.a,{basename:"",children:[Object(a.jsx)(F,{profile:kn}),Object(a.jsx)(T.a,{initial:!1,exitBeforeEnter:!0,children:Object(a.jsxs)(jn.c,{children:[Object(a.jsx)(jn.a,{exact:!0,path:"/",render:function(n){return Object(a.jsx)(B,Object(d.a)(Object(d.a)({},n),{},{assumeFetchedData:In}))}}),Object(a.jsx)(jn.a,{path:"/about",render:function(n){return Object(a.jsx)(W,Object(d.a)(Object(d.a)({},n),{},{profile:kn,data:An}))}}),Object(a.jsx)(jn.a,{path:"/archive",render:function(n){return Object(a.jsx)(sn,Object(d.a)(Object(d.a)({},n),{},{assumeFetchedData:In}))}}),Object(a.jsx)(jn.a,{path:"/projects",component:vn}),Object(a.jsx)(jn.a,{path:"/posts/:post_id",render:function(n){return Object(a.jsx)(tn,Object(d.a)(Object(d.a)({},n),{},{data:In}))}})]})})]}),Object(a.jsx)(pn,{})]})}}]),t}(i.Component);function Dn(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]);return Dn=function(){return n},n}var zn=x.a.div(Dn());s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(zn,{children:Object(a.jsx)(Cn,{})})}),document.getElementById("root")),l()},68:function(n,e,t){}},[[148,1,2]]]);
//# sourceMappingURL=main.b2c85595.chunk.js.map