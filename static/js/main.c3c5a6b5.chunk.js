(this.webpackJsonpmern_study=this.webpackJsonpmern_study||[]).push([[0],{128:function(e,t,n){e.exports=n(258)},133:function(e,t,n){},134:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(4),a=n(19),c={token:null,userId:null,isAuth:!1,isRegistered:!1,toggleAuth:!1,toggleAuthSuccess:!1,errorToggleAuthSuccess:!1,toggleRegister:!1,toggleRegisterSuccess:!1,errorToggleRegisterSuccess:!1},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REGISTER":return Object(r.a)(Object(r.a)({},e),{},{token:t.token,userId:t.userId,isRegistered:!0});case"SET_AUTH_TRUE":return Object(r.a)(Object(r.a)({},e),{},{token:t.token,userId:t.userId,isRegistered:!1,isAuth:!0});case"REDIRECT_FROM_REGISTER":return Object(r.a)(Object(r.a)({},e),{},{isRegistered:!0,isAuth:!0});case"REDIRECT_FROM_REGISTER_FALSE":return Object(r.a)(Object(r.a)({},e),{},{isRegistered:!1,isAuth:!1});case"TOGGLE_REGISTER":return Object(r.a)(Object(r.a)({},e),{},{toggleRegister:!0,toggleRegisterSuccess:!1,errorToggleRegisterSuccess:!1});case"TOGGLE_REGISTER_SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{toggleRegister:!1,toggleRegisterSuccess:!0,errorToggleRegisterSuccess:!1});case"ERROR_TOGGLE_REGISTER_SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{toggleRegister:!1,toggleRegisterSuccess:!1,errorToggleRegisterSuccess:!0});case"TOGGLE_AUTH":return Object(r.a)(Object(r.a)({},e),{},{toggleAuth:!0,errorToggleAuthSuccess:!1});case"TOGGLE_AUTH_SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{toggleAuth:!1,toggleAuthSuccess:!0});case"ERROR_TOGGLE_AUTH_SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{toggleAuth:!1,toggleAuthSuccess:!1,errorToggleAuthSuccess:!0});case"EXIT_ACCOUNT":return{token:null,userId:null,isAuth:!1};default:return Object(r.a)({},e)}},o=function(){return{type:"REDIRECT_FROM_REGISTER"}},u=function(){return{type:"REDIRECT_FROM_REGISTER_FALSE"}},i=function(){return{type:"EXIT_ACCOUNT"}},l=function(e){return function(t){return t({type:"TOGGLE_REGISTER"}),a.a.registerFromAPI(e).then((function(e){if(200===e.status){console.log(e.status);var n=e.data,r=n.token,a=n.userId;t({type:"TOGGLE_REGISTER_SUCCESS"}),t(function(e,t){return{type:"SET_REGISTER",token:e,userId:t}}(r,a))}})).catch((function(e){400===e.response.status&&t({type:"ERROR_TOGGLE_REGISTER_SUCCESS"})}))}},m=function(e){return function(t){t({type:"TOGGLE_AUTH"}),a.a.authFormAPI(e).then((function(e){if(200===e.status){var n=e.data,r=n.token,a=n.userId;t(function(e,t){return{type:"SET_AUTH_TRUE",token:e,userId:t}}(r,a)),t({type:"TOGGLE_AUTH_SUCCESS"})}})).catch((function(e){400===e.response.status&&t({type:"ERROR_TOGGLE_AUTH_SUCCESS"})}))}}},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n(122),a=r.create({baseURL:"http://localhost:4000/api/",withCredentials:!0}),c={getPostsAPI:function(e){return a.get("".concat(e,"/posts"))},postAddAPI:function(e,t){return a.post("".concat(e,"/set_post"),t)},postByIdAPI:function(e){return a.get("post/".concat(e))},editPostAPI:function(e,t){return a.put("update_post/".concat(e),t)},deletePostAPI:function(e){return a.delete("delete_post/".concat(e))}},s={registerFromAPI:function(e){return a.post("register",e)},authFormAPI:function(e){return a.post("auth",e)}}},216:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(259),a=n(0),c=n.n(a),s=function(e,t,n,a,s,o,u){return c.a.createElement("div",null,c.a.createElement(r.a,{name:e,component:t,type:n,className:a,id:s,placeholder:o,validate:u}))}},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(55),a=n(0),c=n.n(a),s=n(88),o=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(s.a,e,c.a.createElement("input",Object.assign({},t,n)))}},257:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(56),s=n.n(c),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(133),n(134);var i=n(6),l=n(41),m=n(123),d=n(125),g=n(262),p=n(17),h=Object(i.combineReducers)({postsData:l.f,authData:p.a,form:g.a}),f=Object(i.createStore)(h,Object(m.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),E=n(9),b=n(7),v=n(25),R=n(50),_=n(51),O=n(54),S=n(53),y=(n(216),Object(b.g)((function(e){return console.log(e),a.a.createElement("div",null,"/"===e.location.pathname?a.a.createElement("div",{className:"header-block",style:{backgroundImage:"url(".concat(e.defaultImageURL,")")}},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"header-block__overlay"},a.a.createElement("div",{className:"header-block__center"},a.a.createElement("h1",null," \u041f\u0440\u0438\u0432\u0435\u0442 "),a.a.createElement("h5",null," ","\u042d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u0435\u043d\u044c\u043a\u0438\u0439 \u0431\u043b\u043e\u0433-\u0441\u0430\u0439\u0442, \u0434\u043e\u0431\u0430\u0432\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0443\u044e \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043e \u0447\u0435\u043c-\u043b\u0438\u0431\u043e, \u043c\u043e\u0436\u0435\u0448\u044c \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0432 \u0432\u0432\u0438\u0434\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435, \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u044f \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0443\u044e \u044d\u0442\u0443 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044e, \u043d\u043e \u043f\u043e\u043a\u0430 \u0442\u0430\u043a)"," "))))):e.postById&&a.a.createElement("div",{className:"header-block",style:{backgroundImage:"url(".concat(e.postById.imageURL,")")}},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"header-block__overlay"},a.a.createElement("div",{className:"header-block__center"},a.a.createElement("h1",null," ",e.postById.title," "),a.a.createElement("h5",null," ",e.postById.description," "))))),a.a.createElement("div",{className:"add_posts_content"},a.a.createElement("div",{className:"addPosts_button"},a.a.createElement(v.b,{to:"/posts/edit"},a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary button_add_post"}," ","Add post"))),a.a.createElement("div",null,a.a.createElement("button",{className:"btn btn-primary button_exit",onClick:function(){return e.exitAccountDispatch()}}," ","Exit"))))}))),T=n(42),I=function(e){Object(O.a)(n,e);var t=Object(S.a)(n);function n(e){var r;return Object(R.a)(this,n),(r=t.call(this,e)).id=r.props.match.params.id,r}return Object(_.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.postsByIdThunk(e)}},{key:"render",value:function(){return a.a.createElement(y,{postById:this.props.postById,defaultImageURL:this.props.defaultImageURL,id:this.id,userId:this.props.userId,exitAccountDispatch:this.props.exitAccountDispatch})}}]),n}(a.a.Component);I.defaultProps={defaultImageURL:"https://images.unsplash.com/photo-1592912040837-5fc558fde862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"};var A=Object(i.compose)(Object(E.b)((function(e){return{postById:e.postsData.postById,userId:e.authData.userId}}),{postsByIdThunk:l.e,exitAccountDispatch:p.c}),b.g,T.a)(I),j=n(260),k=function(e){return a.a.createElement("div",null,a.a.createElement(j.a,{animation:"grow"}))},w=function(){return a.a.createElement(b.a,{to:"/"})},N=a.a.lazy((function(){return n.e(6).then(n.bind(null,272))})),x=a.a.lazy((function(){return n.e(5).then(n.bind(null,273))})),G=a.a.lazy((function(){return n.e(3).then(n.bind(null,274))})),C=a.a.lazy((function(){return n.e(4).then(n.bind(null,271))})),P=Object(i.compose)(b.g,T.a)((function(e){return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(A,null)),a.a.createElement("div",{className:"container"},a.a.createElement(r.Suspense,{fallback:a.a.createElement(k,null)},a.a.createElement(b.d,null,a.a.createElement(b.b,{exact:!0,path:"/",render:function(){return a.a.createElement(N,null)}}),a.a.createElement(b.b,{exact:!0,path:"/posts/edit",render:function(){return a.a.createElement(x,null)}}),a.a.createElement(b.b,{exact:!0,path:"/posts/edit/:id",render:function(){return a.a.createElement(G,null)}}),a.a.createElement(b.b,{exact:!0,path:"/posts/:id",render:function(){return a.a.createElement(C,null)}}),a.a.createElement(b.b,{path:"*",render:function(){return a.a.createElement(w,null)}})))))}));window.store=f;var D=function(){return a.a.createElement("div",null,a.a.createElement(v.a,null,a.a.createElement(E.a,{store:f},a.a.createElement(P,null))))};s.a.render(a.a.createElement(D,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mern_study_react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/mern_study_react","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}()},41:function(e,t,n){"use strict";n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return h}));var r=n(40),a=n.n(r),c=n(77),s=n(84),o=n(4),u=n(19),i={posts:null,postById:null},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS":return Object(o.a)(Object(o.a)({},e),{},{posts:t.posts.reverse()});case"POST_BY_ID":return Object(o.a)(Object(o.a)({},e),{},{postById:t.postById});case"POST_ADD":return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[t.post])});case"DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:Object(s.a)(e.posts.filter((function(e){return e._id!==t.id})))});default:return Object(o.a)({},e)}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.getPostsAPI(e);case 3:200===(r=t.sent).status&&n({type:"GET_POSTS",posts:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error try again later");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e,t){return function(){return u.b.postAddAPI(e,t)}},g=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.postByIdAPI(e,t);case 2:200===(c=n.sent).status&&r({type:"POST_BY_ID",postById:c.data});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},p=function(e,t,n){return function(){return u.b.editPostAPI(e,t,n)}},h=function(e){return function(t){return u.b.deletePostAPI(e).then((function(n){"deleted"===n.status&&t(function(e){return{type:"DELETE_POST",id:e}}(e))}))}}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(50),a=n(51),c=n(54),s=n(53),o=n(0),u=n.n(o),i=n(261),l=n(22),m=n(23),d=(n(219),n(260)),g=Object(i.a)({form:"auth"})((function(e){return u.a.createElement("div",{className:"container container_auth"},u.a.createElement("div",{className:"login_h1"},u.a.createElement("h1",null," Entry in you blog ")),u.a.createElement("div",{className:"row justify-content-center"},u.a.createElement("div",{className:"col-8"},u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"exampleInputEmail1"}," Email address "),Object(l.a)("email",m.a,"email","form-control","exampleInputEmail1","your email",[]),u.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),Object(l.a)("password",m.a,"password","form-control","exampleInputPassword1","your password",[])),u.a.createElement("div",{className:"form-group form-check"},Object(l.a)("checkbox",m.a,"checkbox","form-check-input","exampleCheck1",[],[]),u.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"}," Remember me ")),u.a.createElement("div",{className:"buttons_auth_form"},u.a.createElement("div",{className:"button_auth_form"},u.a.createElement("button",{type:"submit",className:"btn btn-primary"}," Login")),u.a.createElement("div",{className:"register_button_in_auth"},u.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(){e.redirectFromRegister()}}," Register")))),u.a.createElement("div",null,u.a.createElement("div",{className:"auth_spinner"},e.toggleAuth&&u.a.createElement("div",null,u.a.createElement(d.a,{animation:"grow"}))),u.a.createElement("div",null,e.toggleAuthSuccess&&u.a.createElement("div",null,u.a.createElement("div",{className:"toggle_auth_success"},u.a.createElement("span",null," Loading blogs account ")),u.a.createElement("div",{className:"toggle_auth_success_spinner"},u.a.createElement(d.a,{animation:"grow",variant:"success"}))),e.errorToggleAuthSuccess&&u.a.createElement("div",{className:"error_toggle_auth_success"},u.a.createElement("span",{className:"error_toggle_auth_success_span"}," Email or password is not correct ")))))))})),p=n(9),h=n(17),f=n(7),E=Object(f.g)(Object(p.b)((function(e){return{toggleAuth:e.authData.toggleAuth,toggleAuthSuccess:e.authData.toggleAuthSuccess,errorToggleAuthSuccess:e.authData.errorToggleAuthSuccess}}),{authThunk:h.b,redirectFromRegister:h.d})((function(e){return u.a.createElement(g,{onSubmit:function(t){e.authThunk(t)},redirectFromRegister:e.redirectFromRegister,toggleAuth:e.toggleAuth,toggleAuthSuccess:e.toggleAuthSuccess,errorToggleAuthSuccess:e.errorToggleAuthSuccess})}))),b=(n(257),n(76)),v=Object(b.b)(8),R=Object(b.b)(5),_=Object(i.a)({form:"register"})((function(e){return u.a.createElement("div",{className:"container container_register"},u.a.createElement("div",{className:"login_h1"},u.a.createElement("h1",null," Registration ")),u.a.createElement("div",{className:"row justify-content-center"},u.a.createElement("div",{className:"col-8"},u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),Object(l.a)("email",m.a,"email","form-control","exampleInputEmail1","your email",R),u.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),Object(l.a)("password",m.a,"password","form-control","exampleInputPassword1","your password",v)),u.a.createElement("div",{className:"form-group form-check"},Object(l.a)("checkbox",m.a,"checkbox","form-check-input","exampleCheck1",[],[]),u.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"}," Remember me ")),u.a.createElement("div",{className:"register_buttons"},u.a.createElement("button",{type:"submit",className:"btn btn-primary"}," Register"),u.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.redirectFromRegisterFalse()}}," Back on Login"))),u.a.createElement("div",{className:"spinner_register"},e.toggleRegister&&u.a.createElement("div",null,u.a.createElement(d.a,{animation:"grow"}))),u.a.createElement("div",null,e.toggleRegisterSuccess&&u.a.createElement("div",{className:"toggle_register_success"},u.a.createElement("span",null," Registration was success, enter your block through the login form ")),e.errorToggleRegisterSuccess&&u.a.createElement("div",{className:"error_toggle_register_success"},u.a.createElement("span",{className:"error_toggle_register_success_span"}," Some happened error, maybe it is user created or server is not working "))))))})),O=Object(p.b)((function(e){return{toggleRegister:e.authData.toggleRegister,toggleRegisterSuccess:e.authData.toggleRegisterSuccess,errorToggleRegisterSuccess:e.authData.errorToggleRegisterSuccess}}),{registerThunk:h.f,redirectFromRegisterFalse:h.e})((function(e){return u.a.createElement(_,{onSubmit:function(t){e.registerThunk(t)},toggleRegister:e.toggleRegister,toggleRegisterSuccess:e.toggleRegisterSuccess,errorToggleRegisterSuccess:e.errorToggleRegisterSuccess,redirectFromRegisterFalse:e.redirectFromRegisterFalse})})),S=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(s.a)(o);function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return this.props.isAuth&&!this.props.isRegistered?u.a.createElement(e,this.props):this.props.isAuth||this.props.isRegistered?this.props.isAuth&&this.props.isRegistered?u.a.createElement(O,this.props):void 0:u.a.createElement(E,this.props)}}]),o}(u.a.Component);return Object(p.b)((function(e){return{isAuth:e.authData.isAuth,isRegistered:e.authData.isRegistered}}),{})(t)}},76:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=function(e){return e?void 0:"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},c=function(e){return function(t){if(t&&t.length<e)return"Min length is ".concat(e," symbols")}}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(55),a=n(0),c=n.n(a),s=(n(218),function(e){e.input;var t=e.meta,n=Object(r.a)(e,["input","meta"]);return c.a.createElement("div",null,c.a.createElement("div",null,n.children),c.a.createElement("div",{className:"error"},t.touched&&t.error&&c.a.createElement("span",null,t.error)))})}},[[128,1,2]]]);
//# sourceMappingURL=main.c3c5a6b5.chunk.js.map