(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(8),i=a.n(u),s=(a(16),a(2)),l=a(3),o=a(5),c=a(4),d=a(6),h=(a(17),a(1)),m=a(9),p=a.n(m),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={username:a.props.username,formName:"",formPass:""},a.updateName=a.updateName.bind(Object(h.a)(a)),a.updatePassword=a.updatePassword.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"createBody",value:function(){return"username="+this.state.formName+"&password="+this.state.formPass}},{key:"buildRequest",value:function(){return{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this.createBody()}}},{key:"updateName",value:function(e){this.setState({formName:e.target.value})}},{key:"updatePassword",value:function(e){this.setState({formPass:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.props.handleSubmit(t,e.buildRequest(),e.state.formName)}},"Nama:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:this.state.formName,onChange:this.updateName}),r.a.createElement("br",null),"Password:",r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:this.state.formPass,onChange:this.updatePassword}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:this.props.type})),r.a.createElement("br",null)))}}]),t}(r.a.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e,t,a){return console.log(e),e.preventDefault(),fetch("https://api.stya.net/nim/register",t).then(function(e){return e.json()}).then(function(e){0===e.code?alert("Username has been registered!"):alert(e.status)}),!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{handleSubmit:this.handleSubmit,type:"Register"}))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e,t,a){var n=this;return e.preventDefault(),fetch("https://api.stya.net/nim/login",t).then(function(e){return e.json()}).then(function(e){0===e.code?(alert("Login successfull!"),n.props.updateAuthUser(a,e.token),console.log(e.token)):alert(e.status)}),!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{handleSubmit:this.handleSubmit,type:"Login"}))}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={isTyped:!1,isQueried:!1,query:"",currentPage:0,queriedData:[]},a.prepareQuery=a.prepareQuery.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"buildRequest",value:function(){return{method:"GET",headers:{"Auth-Token":this.props.token}}}},{key:"buildEndPoint",value:function(e,t,a,n){return e+"?query="+t+"&count="+a+"&page="+n}},{key:"handleQuery",value:function(e){var t,a=this;(!this.state.isQueried||e>0)&&(this.state.isQueried=!0,this.timerId=null,this.queriedData=[],fetch(this.buildEndPoint("https://api.stya.net/nim/byid",this.state.query,10,1),this.buildRequest()).then(function(e){return e.json()}).then(function(e){if("OK"===e.status)for(t in e.payload)a.queriedData.push(e.payload[t]);else alert(e.code)}),fetch(this.buildEndPoint("https://api.stya.net/nim/byname",this.state.query,10,0),this.buildRequest()).then(function(e){return e.json()}).then(function(e){if("OK"===e.status)for(t in e.payload)a.queriedData.push(e.payload[t]);else alert(e.status)}))}},{key:"prepareQuery",value:function(e){var t=this;this.setState({query:e.target.value}),this.state.isQueried=!1,this.timerId=setInterval(function(){return t.handleQuery(0)},300)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:this.state.query,onChange:this.prepareQuery}),r.a.createElement("br",null),this.state.isQueried?r.a.createElement("div",null):null))}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).logout=function(){a.setState({username:"Guest"}),a.setState({token:""})},a.updateTab=function(e){return function(){a.setState({activeTab:e})}},a.state={username:"Guest",activeTab:0,token:""},a.updateAuthUser=a.updateAuthUser.bind(Object(h.a)(a)),a.updateTab=a.updateTab.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateAuthUser",value:function(e,t){this.setState({username:e}),this.setState({token:t})}},{key:"isLogin",value:function(){return!("Guest"===this.state.username)}},{key:"render",value:function(){var e,t=this.isLogin();return 1===this.state.activeTab?e=r.a.createElement(f,null):2===this.state.activeTab?e=r.a.createElement(v,{updateAuthUser:this.updateAuthUser}):3===this.state.activeTab&&(e=r.a.createElement(y,{token:this.state.token})),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,r.a.createElement("b",null,t?this.state.username:"Please register before using this this nim-finder")),r.a.createElement("div",null,r.a.createElement("a",{onClick:this.updateTab(1)},"Register")),r.a.createElement("div",null,r.a.createElement("a",{onClick:this.updateTab(2)},"Login")),t?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("a",{onClick:this.updateTab(3)},"Query")),r.a.createElement("div",null,r.a.createElement("a",{onClick:this.logout},"Logout"))):null,e))}}]),t}(r.a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.b5f2df3b.chunk.js.map