(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{37:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(30),i=n.n(s),a=(n(37),n(18)),j=n(9),b=n(10),o=n(11),u=n(12),d=n(4),h=n(2),l=n(0),O=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(r.Component),x=O,m=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(l.jsx)("h1",{children:"Bank of React"}),Object(l.jsx)(d.b,{to:"/userProfile",children:"User Profile"}),Object(l.jsx)("br",{}),Object(l.jsx)(d.b,{to:"/login",children:"Login"}),Object(l.jsx)("br",{}),Object(l.jsx)(d.b,{to:"/credits",children:"Credits (to be implemented in the Assignment)"}),Object(l.jsx)("br",{}),Object(l.jsx)(d.b,{to:"/debits",children:"Debits (to be implemented in the Assignment)"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(x,{accountBalance:this.props.accountBalance})]})}}]),n}(r.Component),p=m,f=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"User Profile"}),Object(l.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(l.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(l.jsx)("br",{}),Object(l.jsx)(d.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),v=f,g=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=Object(a.a)({},r.state.user);t.userName=e.target.value,r.setState({user:t})},r.handleSubmit=function(e){e.preventDefault(),r.props.mockLogIn(r.state.user),r.setState({redirect:!0})},r.state={user:{userName:r.props.user.userName,password:""},redirect:!1},r}return Object(b.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(l.jsx)(h.a,{to:"/userProfile"}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"User Name"}),Object(l.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",name:"password"})]}),Object(l.jsx)("button",{children:"Log In"})]}),Object(l.jsx)("br",{}),Object(l.jsx)(d.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),y={method:"get",maxBodyLength:1/0,url:"https://johnnylaicode.github.io/api/credits.json",headers:{}};n(47).request(y).then((function(e){console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e)}));var k=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Credits"}),Object(l.jsx)("br",{}),Object(l.jsx)(d.b,{to:"/",children:"Return to Home"})]})},S=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Debits"}),e.debits.map((function(e){var t=e.date.slice(0,10);return Object(l.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)})),Object(l.jsxs)("form",{onSubmit:e.addDebit,children:[Object(l.jsx)("input",{type:"text",name:"description"}),Object(l.jsx)("input",{type:"number",name:"amount"}),Object(l.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(l.jsx)("br",{}),Object(l.jsx)(d.b,{to:"/",children:"Return to Home"})]})},L=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(a.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.state={accountBalance:1234567.89,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsx)(d.a,{basename:"/bank-of-react-starter-code",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(p,{accountBalance:e.state.accountBalance})}}),Object(l.jsx)(h.b,{exact:!0,path:"/userProfile",render:function(){return Object(l.jsx)(v,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(l.jsx)(h.b,{exact:!0,path:"/login",render:function(){return Object(l.jsx)(g,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(l.jsx)(h.b,{exact:!0,path:"/credits",render:function(){return Object(l.jsx)(k,{credits:e.state.creditList})}}),Object(l.jsx)(h.b,{exact:!0,path:"/debits",render:function(){return Object(l.jsx)(S,{debits:e.state.debitList})}})]})})}}]),n}(r.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),C()}},[[66,1,2]]]);
//# sourceMappingURL=main.a86b4e54.chunk.js.map