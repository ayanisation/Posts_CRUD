(this.webpackJsonpmemory_box=this.webpackJsonpmemory_box||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a(10),s=a.n(r),i=(a(114),a(115),a(8)),o=a(184),l=a(194),p=a(186),j=a(171),d=a(174),u=a(176),b=a(177),f=a(179),h=a(180),x=a(181),m=a(178),O=a(182),g=a(183),y=a(89),v=a.n(y),k=a(91),C=a.n(k),w=a(90),T=a.n(w),F=a(83),S=a.n(F),P=a(17),E=a(23),N=a(16),W=a.n(N),D=a(30),_=a(85),B=a.n(_).a.create({baseURL:"https://posts-crud.herokuapp.com/"}),A=function(e,t){return B.patch("/post/".concat(e,"/update"),t)},z=function(e){return B.patch("/post/".concat(e,"/like"))},I=function(e){return B.patch("/post/".concat(e,"/dislike"))},L=function(e){return B.delete("/post/".concat(e,"/delete"))},R=function(){return function(){var e=Object(D.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.get("/post");case 3:a=e.sent,n=a.data,t({type:"FETCH_POSTS",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(D.a)(W.a.mark((function t(a){var n,c;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.tags=e.tags.toLowerCase(),t.next=4,r=e,B.post("/post",r);case 4:return n=t.sent,c=n.data,a({type:"CREATE_POST",payload:c}),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",!1);case 14:case"end":return t.stop()}var r}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},H=function(e,t){return function(){var a=Object(D.a)(W.a.mark((function a(n){var c,r;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A(e,t);case 3:return c=a.sent,r=c.data,n({type:"UPDATE_POST",payload:r}),a.abrupt("return",!0);case 9:return a.prev=9,a.t0=a.catch(0),console.log(a.t0),a.abrupt("return",!1);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},J=Object(j.a)({media:{height:0,paddingTop:"66.25%",backgroundColor:"rgba(0, 0, 0, 0.5)"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{backgroundColor:"black",display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"240px",right:"20px",color:"white"},grid:{display:"flex"},details:{marginLeft:16,marginRight:10,marginTop:5,justifyContent:"space-between"},title:{color:"#F2E9EA"},cardActions:{marginRight:10,marginTop:20,display:"flex",justifyContent:"space-between"},texts:{color:"#F2E9EA",marginTop:5}}),M=function(e){var t=e.post,a=Object(P.b)(),c=J(),r=JSON.parse(localStorage.getItem("profile"));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(d.a,{className:c.card,children:[Object(n.jsx)(u.a,{className:c.media,image:t.selectedFile,title:t.title}),Object(n.jsx)("div",{className:c.overlay2,children:Object(n.jsx)(b.a,{style:{color:"white"},size:"small",component:E.b,to:"/populate/".concat(t._id),title:"Edit Post",children:Object(n.jsx)(m.a,{fontSize:"large"})})}),Object(n.jsxs)("div",{className:c.details,children:[Object(n.jsx)(f.a,{variant:"h6",style:{fontWeight:"bold",color:"#C2936E",textDecoration:"none"},children:t.title}),Object(n.jsx)(f.a,{variant:"body2",style:{color:"grey"},children:S()(t.createdAt).fromNow()})]}),Object(n.jsx)(h.a,{children:Object(n.jsx)(f.a,{className:c.title,variant:"body1",gutterBottom:!0,children:t.message})}),Object(n.jsx)("div",{className:c.details,children:Object(n.jsx)(f.a,{variant:"body2",className:c.texts,children:t.tags.split(" ").map((function(e){return e.length>0?"#".concat(e," "):""}))})}),Object(n.jsxs)(x.a,{className:c.cardActions,children:[Object(n.jsx)(b.a,{size:"small",color:"primary",onClick:function(){var e;a((e=t._id,r.username,function(){var t=Object(D.a)(W.a.mark((function t(a){var n,c;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z(e);case 3:n=t.sent,c=n.data,a({type:"UPDATE_POST",payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:t.liked?Object(n.jsx)(O.a,{fontSize:"small"}):Object(n.jsx)(v.a,{fontSize:"small"})}),Object(n.jsx)(b.a,{size:"small",color:"primary",onClick:function(){var e;a((e=t._id,r.username,function(){var t=Object(D.a)(W.a.mark((function t(a){var n,c;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I(e);case 3:n=t.sent,c=n.data,a({type:"UPDATE_POST",payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:t.disliked?Object(n.jsx)(C.a,{fontSize:"small"}):Object(n.jsx)(T.a,{fontSize:"small"})}),Object(n.jsx)(b.a,{size:"small",color:"primary",onClick:function(){var e;window.confirm("Are you sure you wish to delete this post?")&&a((e=t._id,function(){var t=Object(D.a)(W.a.mark((function t(a){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L(e);case 3:a({type:"DELETE_POST",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:Object(n.jsx)(g.a,{fontSize:"small"})})]})]})})},q=a(185),V=Object(j.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center",padding:40,marginTop:25},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),G=function(e){var t=Object(i.h)(),a=e.posts,c=V(),r=e.parent,s=e.username;return a.length?Object(n.jsx)(p.a,{className:c.mainContainer,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(n.jsx)(p.a,{item:!0,xs:12,sm:4,children:Object(n.jsx)(M,{post:e,parent:r,username:s})},e._id)}))}):Object(n.jsx)(o.a,{maxWidth:"sm",style:{display:"flex",justifyContent:"space-around",marginTop:100},children:"/"!==t.pathname?Object(n.jsx)(f.a,{variant:"h6",children:"No posts to show"}):Object(n.jsx)(q.a,{})})},K=a(187),Q=a(188),X=a(189),Y=Object(j.a)((function(e){return{appBar:{display:"flex",padding:10,flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"black"},appBar2:{top:50,display:"flex",padding:10,flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"black"},heading:{color:"#C2936E",fontWeight:"bold"},image:{marginLeft:"15px"}}}));function Z(e){var t=Y();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(o.a,{maxWidth:"lg",style:{height:30},children:[Object(n.jsx)(K.a,{className:t.appBar,position:"fixed",color:"inherit",children:Object(n.jsx)(f.a,{className:t.heading,variant:"h4",align:"center",children:e.title})}),Object(n.jsxs)(K.a,{position:"fixed",className:t.appBar2,children:[Object(n.jsx)(f.a,{style:{color:"black"},children:"1"}),Object(n.jsx)(Q.a,{component:E.b,to:"/searchPosts",title:"Search Posts",children:Object(n.jsx)(X.a,{style:{color:"FFFFFF"}})})]})]})})}var $=a(94),ee=a.n($),te=a(92),ae=a.n(te),ne=a(93),ce=a.n(ne),re=a(190),se=a(191),ie=a(95),oe=a.n(ie),le=a(96),pe=a.n(le),je=a(97),de=a.n(je),ue=Object(j.a)((function(){return{appBar:{top:"auto",bottom:0},appBar2:{background:"black",top:"auto",bottom:50,padding:20},fabButton:{top:-10}}}));function be(e){var t=e.parent,a=ue(),c=Object(i.h)();return Object(n.jsxs)(n.Fragment,{children:["user"===t?Object(n.jsx)(l.a,{in:!0,children:Object(n.jsx)(K.a,{position:"fixed",className:a.appBar2,children:Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(n.jsx)(f.a,{style:{fontWeight:"bold",textDecoration:"none",color:"/liked"===c.pathname?"#C2936E":"white"},variant:"h6",component:E.b,to:"/liked",children:"Liked"}),Object(n.jsx)(f.a,{style:{fontWeight:"bold",textDecoration:"none",color:"/disliked"===c.pathname?"#C2936E":"white"},variant:"h6",component:E.b,to:"/disliked",children:"Disliked"})]})})}):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)(K.a,{position:"fixed",className:a.appBar,children:Object(n.jsxs)(re.a,{style:{background:"black",minWidth:50},children:[Object(n.jsx)(se.a,{label:"Recents",value:"recents",component:E.b,to:"/feed",icon:"/"===c.pathname?Object(n.jsx)(ae.a,{style:{color:"#ffffff"}}):Object(n.jsx)(ce.a,{style:{color:"#ffffff"}})}),Object(n.jsx)(se.a,{label:"Recents",value:"recents",component:E.b,to:"/populate",icon:"/populate"===c.pathname?Object(n.jsx)(ee.a,{style:{color:"#ffffff"},fontSize:"large"}):Object(n.jsx)(oe.a,{style:{color:"#ffffff"},fontSize:"large"})}),Object(n.jsx)(se.a,{label:"Recents",value:"recents",component:E.b,to:"/liked",icon:"/liked"===c.pathname||"/disliked"===c.pathname?Object(n.jsx)(pe.a,{style:{color:"#ffffff"}}):Object(n.jsx)(de.a,{style:{color:"#ffffff"}})})]})})]})}var fe=function(){var e=Object(P.b)(),t=Object(i.g)();Object(c.useEffect)((function(){e(R())}),[e,t]);var a=Object(P.c)((function(e){return e.posts}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Z,{title:"Posts"}),Object(n.jsx)(o.a,{maxWidth:"lg",children:Object(n.jsx)(l.a,{in:!0,children:Object(n.jsx)(o.a,{style:{marginTop:60,marginBottom:60},children:Object(n.jsx)(p.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:5,children:Object(n.jsx)(G,{parent:"feed",posts:a})})})})}),Object(n.jsx)(be,{parent:"feed"})]})},he=function(){var e=Object(P.b)(),t=Object(i.h)();Object(c.useEffect)((function(){e(R())}),[e]);var a=Object(P.c)((function(e){return e.posts})),r="";return"/liked"===t.pathname?(a=a.filter((function(e){return e.liked})),r="Liked Posts"):(a=a.filter((function(e){return e.disliked})),r="Disiked Posts"),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Z,{title:r}),Object(n.jsx)(o.a,{maxWidth:"lg",children:Object(n.jsx)(l.a,{in:!0,children:Object(n.jsx)(o.a,{style:{marginTop:60,marginBottom:120},children:Object(n.jsx)(p.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:5,children:Object(n.jsx)(G,{posts:a})})})})}),Object(n.jsx)(be,{parent:"user"})]})},xe=a(59),me=a(42),Oe=a(50),ge=a(102),ye=a(193),ve=a(192),ke=a(98),Ce=a.n(ke),we=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",padding:e.spacing(1),justifyContent:"center"},textField:{marginTop:6},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{fontWeight:"bold",marginTop:10,marginBottom:10,background:"#79CDCD",fontFamily:"Copperplate Papyrus"},buttonClear:{fontWeight:"bold",fontFamily:"Copperplate Papyrus",color:"#ffffff",marginTop:10,marginBottom:10,background:"grey"},buttonCancel:{fontWeight:"bold",fontFamily:"Copperplate Papyrus",color:"#ffffff",marginTop:10,marginBottom:10,background:"#ed1c24"}}})),Te=function(){var e=Object(i.i)().id,t=Object(P.b)(),a=we(),r=Object(i.g)(),s=(new Date).toISOString(),p=Object(c.useState)("https://img.icons8.com/pastel-glyph/64/000000/image-file-add.png"),j=Object(Oe.a)(p,2),d=j[0],u=j[1],f=Object(P.c)((function(t){return e?t.posts.find((function(t){return t._id===e})):null}));Object(c.useEffect)((function(){f&&(k(f),u(null===f||void 0===f?void 0:f.selectedFile))}),[f]);var h=Object(c.useState)(!1),x=Object(Oe.a)(h,2),m=x[0],O=x[1],g=Object(c.useState)({title:"",message:"",tags:"",selectedFile:"",createdAt:s}),y=Object(Oe.a)(g,2),v=y[0],k=y[1],C=function(e){k((function(t){return Object(me.a)(Object(me.a)({},t),{},Object(xe.a)({},e.target.name,e.target.value))}))},w=function(){var a=Object(D.a)(W.a.mark((function a(n){var c;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),""!==v.title){a.next=5;break}alert("Please enter a post title"),a.next=22;break;case 5:if(""!==v.selectedFile){a.next=9;break}alert("Please upload an image"),a.next=22;break;case 9:if(k((function(e){return Object(me.a)(Object(me.a)({},e),{},{tags:e.tags.trim()})})),O(!0),!e){a.next=17;break}return a.next=14,t(H(e,v));case 14:c=a.sent,a.next=20;break;case 17:return a.next=19,t(U(v));case 19:c=a.sent;case 20:c?r.push("/feed"):alert("Upload Failed!"),O(!1);case 22:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Z,{title:e?"Edit post":"Add post"}),Object(n.jsx)(l.a,{in:!0,children:Object(n.jsx)(o.a,{maxWidth:"sm",style:{marginTop:120,marginBottom:60},children:Object(n.jsxs)(ge.a,{className:a.paper,children:[Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)("img",{style:{maxHeight:"30vh",maxWidth:"50vw"},src:d,alt:"Oops!"})}),Object(n.jsxs)("form",{autoComplete:"off",noValidate:!0,className:a.form,children:[Object(n.jsx)(ye.a,{className:a.textField,name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:v.title,onChange:C}),Object(n.jsx)(ye.a,{className:a.textField,name:"message",variant:"outlined",label:"Caption",fullWidth:!0,value:v.message,onChange:C}),Object(n.jsx)(ye.a,{className:a.textField,name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:v.tags,onChange:C}),Object(n.jsx)("div",{className:a.fileInput,children:Object(n.jsx)(Ce.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;u(t),k(Object(me.a)(Object(me.a)({},v),{},{selectedFile:t}))}})}),Object(n.jsx)(b.a,{className:a.buttonSubmit,variant:"contained",size:"large",type:"submit",fullWidth:!0,onClick:w,children:"Post"}),Object(n.jsx)(b.a,{className:a.buttonClear,variant:"contained",size:"small",fullWidth:!0,onClick:function(){k({title:"",message:"",tags:"",selectedFile:"",createdAt:s}),u("https://img.icons8.com/pastel-glyph/64/000000/image-file-add.png")},children:"clear"}),Object(n.jsx)(b.a,{className:a.buttonCancel,variant:"contained",size:"small",fullWidth:!0,onClick:function(){r.push("/feed")},children:"Cancel"})]}),m?Object(n.jsx)(ve.a,{}):Object(n.jsx)(n.Fragment,{})]})})}),Object(n.jsx)(be,{parent:"populate"})]})},Fe=a(195),Se=Object(j.a)((function(e){return{icons:{padding:e.spacing(0,2),pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},appbar:{position:"fixed",top:50,alignItems:"center",background:"black",padding:20}}}));var Pe=function(){var e=Se(),t=Object(c.useState)(""),a=Object(Oe.a)(t,2),r=a[0],s=a[1],i=Object(P.c)((function(e){return e.posts})),j=[];return i.length>0&&(j=i.filter((function(e){return e.tags.includes(r.toLowerCase())}))),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Z,{title:"Search Posts"}),Object(n.jsx)(l.a,{in:!0,children:Object(n.jsx)(K.a,{className:e.appbar,children:Object(n.jsx)(o.a,{maxWidth:"sm",children:Object(n.jsxs)(ge.a,{style:{padding:10,display:"flex"},children:[Object(n.jsx)("div",{className:e.icons,children:Object(n.jsx)(X.a,{})}),Object(n.jsx)(Fe.a,{autoComplete:"off",placeholder:"Search by tags (don't use '#')",className:e.inputRoot,fullWidth:!0,name:"query",value:r,onChange:function(e){s(e.target.value)},inputProps:{"aria-label":"search"}})]})})})}),Object(n.jsx)(o.a,{maxWidth:"lg",children:r?0===j.length?Object(n.jsx)(o.a,{style:{marginTop:130,marginBottom:60},children:Object(n.jsx)(f.a,{variant:"h5",align:"center",children:"No Matches"})}):Object(n.jsx)(l.a,{in:!0,children:Object(n.jsx)(o.a,{style:{marginTop:80,marginBottom:60},children:Object(n.jsx)(p.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:5,children:Object(n.jsx)(G,{parent:"searchPosts",posts:j})})})}):Object(n.jsx)(n.Fragment,{})}),Object(n.jsx)(be,{parent:"searchPosts"})]})};var Ee=function(){return Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{exact:!0,path:"/",component:fe}),Object(n.jsx)(i.b,{exact:!0,path:"/liked",component:he}),Object(n.jsx)(i.b,{exact:!0,path:"/disliked",component:he}),Object(n.jsx)(i.b,{exact:!0,path:"/populate",component:Te}),Object(n.jsx)(i.b,{exact:!0,path:"/populate/:id",component:Te}),Object(n.jsx)(i.b,{exact:!0,path:"/searchPosts",component:Pe}),Object(n.jsx)(i.a,{to:"/"})]})},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,196)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},We=a(34),De=a(99),_e=a(100),Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;case"CREATE_POST":return[].concat(Object(_e.a)(e),[t.payload]);case"UPDATE_POST":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE_POST":return e.filter((function(e){return e._id!==t.payload}));default:return e}},Ae=Object(We.c)({posts:Be}),ze=Object(We.e)(Ae,Object(We.d)(Object(We.a)(De.a)));s.a.render(Object(n.jsx)(E.a,{children:Object(n.jsx)(P.a,{store:ze,children:Object(n.jsx)(Ee,{})})}),document.getElementById("root")),Ne()}},[[142,1,2]]]);
//# sourceMappingURL=main.43433d6e.chunk.js.map