(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(e,t,a){},146:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),i=a.n(o),s=(a(123),a(192)),r=a(77),l=a(191),d=a(193),u=a(190),m=a(2);var j=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(4),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function b(){var e=j();return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(s.a,{}),Object(m.jsxs)(d.a,{component:"main",className:e.main,maxWidth:"sm",children:[Object(m.jsx)(r.a,{variant:"h2",component:"h1",gutterBottom:!0,children:"Maintain Documents with Comments."}),Object(m.jsxs)(r.a,{variant:"body1",children:["Frontend Engineer Intern Pre-Screen Assignment for",Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Shunya Impact Pvt. Ltd."})]}),Object(m.jsx)(r.a,{variant:"body1"})]}),Object(m.jsxs)(d.a,{component:"main",className:e.main,maxWidth:"md",children:[Object(m.jsx)(r.a,{variant:"h4",component:"h1",gutterBottom:!0,children:"Features:"}),Object(m.jsx)(r.a,{variant:"h6",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Persistent application made in the MERN stack."}),Object(m.jsx)("li",{children:"Made using the React Material UI."}),Object(m.jsx)("li",{children:"JWT Authentication."}),Object(m.jsxs)("li",{children:["The User can:",Object(m.jsxs)("ol",{children:[Object(m.jsx)("li",{children:"Add Multiple Documents."}),Object(m.jsx)("li",{children:"Delete Documents."}),Object(m.jsx)("li",{children:"Add Multiple Comments in each Document."}),Object(m.jsx)("li",{children:"Delete Comments."})]})]})]})}),Object(m.jsx)(r.a,{variant:"body1"})]})]})}var h=a(214),g=a(196),O=a(211),x=a(17),p=a(197),f=a(64),v=a.n(f),S=a(67),C=a(11),y=a(31),N=a.n(y);var k=function(){var e=Object(n.useState)(!1),t=Object(C.a)(e,2),a=t[0],c=t[1];return{change:a,changeNavbarState:function(){c(!0)}}},D=a(30);var w=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(C.a)(o,2),s=i[0],r=i[1],l=Object(n.useState)(0),d=Object(C.a)(l,2),u=d[0],m=(d[1],k()),j=m.change,b=(m.changeNavbarState,Object(D.b)()),h=b.enqueueSnackbar;return b.closeSnackbar,{error:u,handleEmailChange:function(e){e.preventDefault(),r(e.target.value),console.log(s)},handlePasswordChange:function(e){e.preventDefault(),c(e.target.value),console.log(a)},handleSubmit:function(e){if(e.preventDefault(),s&&a){var t={email:s,password:a};console.log(t),N.a.post("http://localhost:5000/users/authenticate",t).then((function(e){console.log("Response"),console.log(e.data),e.data.success?(h(e.data.msg,{variant:"success"}),localStorage.setItem("id_token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),window.location.href="/",console.log("Change"),console.log(j)):h(e.data.msg,{variant:"error"})}))}else h("Please fill in all the fields.",{variant:"error"})}}},F=(a(146),Object(l.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(2,0,2)},error:{color:S.a[700]}}})));var I=function(){var e=F(),t=w(),a=t.error,n=t.handleEmailChange,c=t.handlePasswordChange,o=t.handleSubmit;return Object(m.jsxs)(d.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(s.a,{}),Object(m.jsxs)("div",{className:e.paper,children:[Object(m.jsx)(h.a,{className:e.avatar,children:Object(m.jsx)(v.a,{})}),Object(m.jsx)(r.a,{component:"h1",variant:"h5",children:"Sign in"}),1==a&&Object(m.jsx)("h4",{className:e.error,children:"Invalid Credentials"}),Object(m.jsxs)("form",{className:e.form,onSubmit:o,noValidate:!0,children:[Object(m.jsx)(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoFocus:!0,onChange:n}),Object(m.jsx)(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:c}),Object(m.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(m.jsx)(p.a,{container:!0,children:Object(m.jsx)(p.a,{item:!0,children:Object(m.jsx)(x.b,{to:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})},W=a(14);var B=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(C.a)(o,2),s=i[0],r=i[1],l=Object(n.useState)(""),d=Object(C.a)(l,2),u=d[0],m=d[1],j=Object(n.useState)(""),b=Object(C.a)(j,2),h=b[0],g=b[1],O=Object(W.f)(),x=Object(D.b)().enqueueSnackbar;return{handleFirstNameChange:function(e){e.preventDefault(),c(e.target.value),console.log(u)},handleLastNameChange:function(e){e.preventDefault(),r(e.target.value),console.log(u)},handleEmailChange:function(e){e.preventDefault(),m(e.target.value),console.log(u)},handlePasswordChange:function(e){e.preventDefault(),g(e.target.value),console.log(h)},handleSubmit:function(e){if(e.preventDefault(),a&&s&&u&&h){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;if(console.log(t.test(u)),t.test(u)){var n={name:a+" "+s,email:u,password:h};console.log(n),N.a.post("http://localhost:5000/users/register",n).then((function(e){console.log("Response"),console.log(e.data),e.data.success?(x("Registered Successfully.",{variant:"success"}),O.push("/login")):x(e.data.msg,{variant:"error"})}))}else x("Invalid Email.",{variant:"error"})}else x("Please fill in all the fields.",{variant:"error"})}}},T=Object(l.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},error:{color:S.a[700]}}}));var E=function(){var e=T(),t=B();return Object(m.jsxs)(d.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(s.a,{}),Object(m.jsxs)("div",{className:e.paper,children:[Object(m.jsx)(h.a,{className:e.avatar,children:Object(m.jsx)(v.a,{})}),Object(m.jsx)(r.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(m.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:t.handleSubmit,children:[Object(m.jsxs)(p.a,{container:!0,spacing:2,children:[Object(m.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(m.jsx)(O.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:t.handleFirstNameChange})}),Object(m.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(m.jsx)(O.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:t.handleLastNameChange})}),Object(m.jsx)(p.a,{item:!0,xs:12,children:Object(m.jsx)(O.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:t.handleEmailChange})}),Object(m.jsx)(p.a,{item:!0,xs:12,children:Object(m.jsx)(O.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:t.handlePasswordChange})})]}),Object(m.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(m.jsx)(p.a,{container:!0,justify:"flex-start",children:Object(m.jsx)(p.a,{item:!0,children:Object(m.jsx)(x.b,{to:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})},A=a(76),M=a(66),q=a(215),P=a(213),z=a(203),L=a(201),R=a(202),J=a(200),_=a(198),U=a(21),G=a(199),H=a(73),V=a.n(H),Z=a(94),K=a.n(Z);var $=function(){var e=Object(n.useState)(!1),t=Object(C.a)(e,2),a=t[0],c=t[1],o=Object(D.b)().enqueueSnackbar,i=Object(W.f)(),s=Object(n.useState)(""),r=Object(C.a)(s,2),l=r[0],d=r[1],u=Object(n.useState)(""),m=Object(C.a)(u,2),j=m[0],b=m[1],h=Object(n.useState)(""),g=Object(C.a)(h,2),O=g[0],x=g[1],p=Object(n.useState)(""),f=Object(C.a)(p,2),v=f[0],S=f[1],y=Object(n.useState)([]),k=Object(C.a)(y,2),w=k[0],F=k[1],I=function(){c(!0)};return{open:a,selectedText:O,myArray:w,documentName:l,documentBody:j,setMyArray:F,setDocumentName:d,setDocumentBody:b,handleClose:function(){c(!1)},textSelected:function(e){var t=window.getSelection().toString();console.log("Test"),""===t?console.log("click"):(console.log(t),x(t),I())},submitComment:function(){var e={text:O,comment:v};F(w.concat(e)),c(!1)},deleteComment:function(e){var t=[];w.forEach((function(a){a.text!==e&&t.push(a)})),console.log(t),F([].concat(t))},handleCommentChange:function(e){e.preventDefault(),S(e.target.value)},goBackToDocumentsList:function(){i.push("/documents")},updateDocument:function(){var e={token:localStorage.getItem("id_token"),name:l,comments:w};N.a.patch("http://localhost:5000/documents/",e).then((function(e){console.log("Test"),console.log(e.data),o(e.data.msg,{variant:e.data.success?"success":"error"}),e.data.success&&localStorage.setItem("document",JSON.stringify(e.data.document))}))}}},Q=(a(149),Object(l.a)((function(e){return{submit:{display:"block",margin:e.spacing(8,"auto",2,"auto"),fontSize:"16px",width:"220px",padding:"10px 0"},backButton:{float:"left"},deleteButton:{margin:e.spacing(0,0,0,2)}}})));var X=function(e){var t=Q(),a=Object(U.a)(),o=Object(_.a)(a.breakpoints.down("sm")),i=Object(n.useState)(!0),l=Object(C.a)(i,2),u=l[0],j=l[1],b=$(),h=b.open,x=b.selectedText,p=b.myArray,f=b.documentName,v=b.documentBody,S=b.setMyArray,y=b.setDocumentName,N=b.setDocumentBody,k=b.handleClose,D=b.textSelected,w=b.submitComment,F=b.deleteComment,I=b.handleCommentChange,W=b.goBackToDocumentsList,B=b.updateDocument;Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("document"));console.log(e),e&&(S(p.concat.apply(p,Object(M.a)(e.comments))),y(e.name),N(e.content),j(!1))}),[]);var T=function(e){for(var a=e.children,n=(e.highlight,""),o=0;o<p.length;o++)0===o?n+="".concat(p[o].text):o>0&&(n+="|".concat(p[o].text));var i=a.split(new RegExp("(".concat(n,")"),"gi"));return Object(m.jsxs)("p",{onMouseUp:function(e){return D(e)},id:"interactiveText",class:"document-content",children:[" ",i.map((function(e,a){return[a%2!==0&&p.map((function(n,o){var i;return n.text===e&&Object(m.jsx)(q.a,{interactive:!0,title:Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)(r.a,{color:"inherit",children:[n.comment," ",Object(m.jsx)(G.a,(i={className:t.deleteButton,color:"secondary",onClick:function(){F(e)}},Object(A.a)(i,"className",t.margin),Object(A.a)(i,"children",Object(m.jsx)(V.a,{fontSize:"small"})),i))]})}),children:Object(m.jsx)("span",{style:{background:"yellow"},children:e})},a)})),a%2===0&&Object(m.jsx)("span",{children:e},a)]}))," "]})};return Object(m.jsxs)(d.a,{component:"main",maxWidth:"md",children:[!1===u&&Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(s.a,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)(G.a,{onClick:W,"aria-label":"delete",className:t.backButton,size:"small",children:Object(m.jsx)(K.a,{fontSize:"large"})}),Object(m.jsx)("h1",{class:"document-title",children:f})]}),Object(m.jsx)("hr",{}),Object(m.jsx)(T,{highlight:x,children:v}),0!=p.length&&Object(m.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:B,children:"Save Document"}),Object(m.jsxs)(P.a,{fullScreen:o,open:h,onClose:k,"aria-labelledby":"responsive-dialog-title",children:[Object(m.jsx)(J.a,{id:"responsive-dialog-title",children:"Add Comment"}),Object(m.jsxs)(L.a,{children:[Object(m.jsx)(R.a,{children:x}),Object(m.jsx)(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"comment",label:"Add Comment",name:"comment",autoFocus:!0,onChange:I})]}),Object(m.jsxs)(z.a,{children:[Object(m.jsx)(g.a,{autoFocus:!0,onClick:k,color:"primary",children:"Close"}),Object(m.jsx)(g.a,{onClick:w,color:"primary",autoFocus:!0,children:"Submit"})]})]})]}),!0===u&&Object(m.jsx)("h3",{class:"document-title",children:"No Document Selected. Go back to the Documents List page."})]})};var Y=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(C.a)(o,2),s=i[0],r=i[1],l=Object(n.useState)([]),d=Object(C.a)(l,2),u=d[0],m=d[1],j=Object(D.b)().enqueueSnackbar,b=Object(W.f)(),h=function(){var e={token:localStorage.getItem("id_token")};N.a.get("http://localhost:5000/documents/",{params:e}).then((function(e){if(e.data.success){var t=Object(M.a)(e.data.documents);m(t.map((function(e){return e})))}}))};return{documents:u,handleNameChange:function(e){e.preventDefault(),c(e.target.value)},handleContentChange:function(e){e.preventDefault(),r(e.target.value)},getDocuments:h,submitNewDocument:function(){console.log(a),console.log(s);var e={token:localStorage.getItem("id_token"),name:a,content:s};N.a.post("http://localhost:5000/documents/",e).then((function(e){j(e.data.msg,{variant:e.data.success?"success":"error"}),e.data.success&&h()}))},deleteDocument:function(e){var t={token:localStorage.getItem("id_token"),name:e};console.log("DELETE"),console.log(t),N.a.delete("http://localhost:5000/documents/",{data:t}).then((function(e){j(e.data.msg,{variant:e.data.success?"success":"error"}),e.data.success&&h()}))},documentSelected:function(e){console.log(e),localStorage.setItem("document",JSON.stringify(e)),b.push("/document")}}},ee=a(204),te=a(206),ae=a(205),ne=(a(150),Object(l.a)((function(e){return{submit:{display:"block",margin:e.spacing(4,"auto",2,"auto"),fontSize:"16px",width:"220px",padding:"10px 0"},deleteButton:{margin:e.spacing(-1.2,0,0,0),float:"right",zIndex:"999"},root:{width:250,margin:e.spacing(2,0,0,0)},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}})));var ce=function(){var e=ne(),t=Object(U.a)(),a=Object(_.a)(t.breakpoints.down("sm")),o=c.a.useState(!1),i=Object(C.a)(o,2),l=i[0],u=i[1],j=c.a.useState(!1),b=Object(C.a)(j,2),h=b[0],x=b[1],p=c.a.useState(""),f=Object(C.a)(p,2),v=f[0],S=f[1],y=Y(),N=y.documents,k=y.handleNameChange,D=y.handleContentChange,w=y.submitNewDocument,F=y.getDocuments,I=y.deleteDocument,W=y.documentSelected;Object(n.useEffect)((function(){F()}),[]);var B=function(){u(!1)},T=function(){x(!1)};return Object(m.jsxs)(d.a,{component:"main",maxWidth:"md",children:[Object(m.jsx)(s.a,{}),Object(m.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){u(!0)},children:"Add Document"}),0!==N.length&&Object(m.jsxs)(d.a,{class:"max-width",children:[Object(m.jsx)("h2",{class:"text-center",children:"Documents"}),Object(m.jsx)("hr",{}),Object(m.jsx)(d.a,{class:"custom-row",children:N.map((function(t,a){return Object(m.jsx)("div",{children:Object(m.jsxs)(ee.a,{className:e.root,children:[Object(m.jsxs)(ae.a,{onClick:function(){W(t)},children:[Object(m.jsxs)(r.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:["Document #",a+1]}),Object(m.jsx)(r.a,{class:"card-name",variant:"h5",component:"h2",children:t.name})]}),Object(m.jsx)(te.a,{children:Object(m.jsx)(g.a,{size:"small",onClick:function(){var e;e=t.name,S(e),x(!0)},children:"Delete"})})]})},a)}))})]}),0===N.length&&Object(m.jsx)(d.a,{children:Object(m.jsx)("div",{class:"complete-center",children:Object(m.jsx)("h3",{class:"text-center",children:"No documents have been created. Click on the above button to create one!"})})}),Object(m.jsxs)(P.a,{fullScreen:a,open:l,onClose:B,"aria-labelledby":"responsive-dialog-title",children:[Object(m.jsx)(J.a,{id:"responsive-dialog-title",children:"Add Document"}),Object(m.jsxs)(L.a,{children:[Object(m.jsx)(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Document Name",name:"name",autoFocus:!0,onChange:k}),Object(m.jsx)(O.a,{variant:"outlined",margin:"normal",multiline:!0,rows:8,rowsMax:8,required:!0,fullWidth:!0,id:"content",label:"Document Content",name:"content",onChange:D})]}),Object(m.jsxs)(z.a,{children:[Object(m.jsx)(g.a,{autoFocus:!0,onClick:B,color:"primary",children:"Close"}),Object(m.jsx)(g.a,{onClick:w,color:"primary",autoFocus:!0,children:"Submit"})]})]}),Object(m.jsxs)(P.a,{fullScreen:a,open:h,onClose:T,"aria-labelledby":"responsive-dialog-title",children:[Object(m.jsx)(J.a,{id:"responsive-dialog-title",children:"Remove Document"}),Object(m.jsx)(L.a,{children:v}),Object(m.jsxs)(z.a,{children:[Object(m.jsx)(g.a,{autoFocus:!0,onClick:T,color:"primary",children:"Close"}),Object(m.jsx)(g.a,{onClick:function(){T(),I(v)},color:"primary",autoFocus:!0,children:"Confirm"})]})]})]})},oe=a(209),ie=a(210),se=a(95),re=a.n(se),le=(a(151),a(96)),de=a(208),ue=a(207),me=Object(le.a)({palette:{primary:{main:ue.a[900]}}}),je=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},button:{marginRight:e.spacing(3)},link:{color:"#ffffff",textDecoration:"none"},logout:{color:"#ff2450"}}}));function be(){var e=je();return[Object(m.jsx)(x.b,{className:e.link,to:"/login",children:Object(m.jsx)(g.a,{className:e.button,color:"inherit",children:"Login"})}),Object(m.jsx)(x.b,{className:e.link,to:"/register",children:Object(m.jsx)(g.a,{className:e.button,color:"inherit",children:"Register"})})]}function he(){var e=je();return[Object(m.jsx)(x.b,{className:e.link,to:"/documents",children:Object(m.jsx)(g.a,{className:e.button,color:"inherit",children:"Documents"})}),Object(m.jsx)(G.a,{onClick:function(){localStorage.clear(),window.location.href="/"},"aria-label":"delete",className:e.logout,children:Object(m.jsx)(re.a,{fontSize:"medium"})})]}var ge=function(){var e=je(),t=!!localStorage.getItem("id_token");return Object(m.jsx)(de.a,{theme:me,children:Object(m.jsx)(oe.a,{position:"static",children:Object(m.jsxs)(ie.a,{children:[Object(m.jsx)(r.a,{variant:"h6",className:e.title,children:"DocMan"}),Object(m.jsx)(x.b,{className:e.link,to:"/",children:Object(m.jsx)(g.a,{className:e.button,color:"inherit",children:"Home"})}),0==t&&Object(m.jsx)(be,{}),1==t&&Object(m.jsx)(he,{})]})})})};function Oe(){return Object(m.jsxs)(r.a,{variant:"body2",color:"textSecondary",children:["Made with \u2764\ufe0f in the MERN Stack by ",Object(m.jsx)(u.a,{color:"inherit",target:"_blank",href:"https://www.linkedin.com/in/karanjagtiani",children:"Karan Jagtiani"}),"."]})}var xe=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));var pe=function(){var e=xe();return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(s.a,{}),Object(m.jsx)("footer",{className:e.footer,children:Object(m.jsxs)(d.a,{maxWidth:"sm",children:[Object(m.jsx)(r.a,{variant:"body1",children:"Maintain Documents with Comments."}),Object(m.jsx)(Oe,{})]})})]})};a(152);var fe=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(ge,{}),Object(m.jsxs)(W.c,{children:[Object(m.jsx)(W.a,{exact:!0,path:"/",component:b}),Object(m.jsx)(W.a,{exact:!0,path:"/login",component:I}),Object(m.jsx)(W.a,{exact:!0,path:"/register",component:E}),Object(m.jsx)(W.a,{exact:!0,path:"/document",component:X}),Object(m.jsx)(W.a,{exact:!0,path:"/documents",component:ce})]}),Object(m.jsx)(pe,{})]})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,216)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),o(e),i(e)}))};i.a.render(Object(m.jsx)(D.a,{maxSnack:3,children:Object(m.jsx)(x.a,{children:Object(m.jsx)(fe,{})})}),document.getElementById("root")),ve()}},[[153,1,2]]]);
//# sourceMappingURL=main.be8c1bac.chunk.js.map