(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(19),i=n.n(s),a=(n(26),n(15)),j=n(8),b=n(9),o=n(10),u=n(11),d=n(4),O=n(2),h=n(0),l=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(r.Component),x=l,m=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(h.jsx)("h1",{children:"Bank of React"}),Object(h.jsx)(d.b,{to:"/userProfile",children:"User Profile"}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/login",children:"Login"}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/credits",children:"Credits (to be implemented in the Assignment)"}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/debits",children:"Debits (to be implemented in the Assignment)"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(x,{accountBalance:this.props.accountBalance})]})}}]),n}(r.Component),p=m,f=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"User Profile"}),Object(h.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(h.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),v=f,g=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=Object(a.a)({},r.state.user);t.userName=e.target.value,r.setState({user:t})},r.handleSubmit=function(e){e.preventDefault(),r.props.mockLogIn(r.state.user),r.setState({redirect:!0})},r.state={user:{userName:r.props.user.userName,password:""},redirect:!1},r}return Object(b.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(h.jsx)(O.a,{to:"/userProfile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"User Name"}),Object(h.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",name:"password"})]}),Object(h.jsx)("button",{children:"Log In"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),k=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Credits"}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/",children:"Return to Home"})]})},S=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Debits"}),e.debits.map((function(e){var t=e.date.slice(0,10);return Object(h.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)})),Object(h.jsxs)("form",{onSubmit:e.addDebit,children:[Object(h.jsx)("input",{type:"text",name:"description"}),Object(h.jsx)("input",{type:"number",name:"amount"}),Object(h.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/",children:"Return to Home"})]})},y=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(a.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.state={accountBalance:1234567.89,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)(d.a,{basename:"/bank-of-react-starter-code",children:Object(h.jsxs)("div",{children:[Object(h.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(p,{accountBalance:e.state.accountBalance})}}),Object(h.jsx)(O.b,{exact:!0,path:"/userProfile",render:function(){return Object(h.jsx)(v,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(h.jsx)(O.b,{exact:!0,path:"/login",render:function(){return Object(h.jsx)(g,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(h.jsx)(O.b,{exact:!0,path:"/credits",render:function(){return Object(h.jsx)(k,{credits:e.state.creditList})}}),Object(h.jsx)(O.b,{exact:!0,path:"/debits",render:function(){return Object(h.jsx)(S,{debits:e.state.debitList})}})]})})}}]),n}(r.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.802edbf2.chunk.js.map