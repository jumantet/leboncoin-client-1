(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,a,t){},221:function(e,a,t){},222:function(e,a,t){},223:function(e,a,t){},224:function(e,a,t){},225:function(e,a,t){},226:function(e,a,t){},227:function(e,a,t){},228:function(e,a,t){},229:function(e,a,t){},230:function(e,a,t){},232:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(83),l=t.n(c),s=(t(92),t(8)),o=t(9),i=t(11),m=t(10),u=t(12),p=t(235),d=t(237),f=t(236),h=t(234),v=t(6),E=t.n(v),g=t(233),b=(t(93),function(e){return r.a.createElement(g.a,{className:"btn ".concat(e.to),to:e.to},e.children)}),w=(t(96),function(e){var a,t=e.token,n=e.username,c=r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{to:"/login"},"Se connecter"),r.a.createElement(b,{to:"/signup"},"Cr\xe9er un compte")),l=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,n," est connect\xe9"),r.a.createElement("button",{onClick:function(){return e.endSession()}},"Se d\xe9connecter"));return a=null!==t&&null!==n?l:c,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"wrapper flex"},r.a.createElement("a",{href:"https://alexdisdier.fr"},"logo"),r.a.createElement(b,{to:"/publish"},"D\xe9poser une annonce"),r.a.createElement(b,{to:"/"},"offres"),r.a.createElement("div",{className:"account-panel"},a)))}),N=t(13),x=t.n(N),k=t(19),y=t(14),P=t.n(y),C=(t(118),function(e){var a=e.title,t=e.minPrice,n=e.maxPrice,c=e.sort;return r.a.createElement("div",{className:"filters-container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{onSubmit:e.submitFilters},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",placeholder:"Que recherchez-vous?",name:"title",value:a,onChange:e.handleFilters}),r.a.createElement("button",{type:"submit"},"Rechercher")),r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"price-range"},r.a.createElement("label",{htmlFor:"price"},"Prix\xa0entre"),r.a.createElement("select",{name:"minPrice",value:t,onChange:e.handleFilters},r.a.createElement("option",{value:"0"},"Prix min"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"40"},"40"),r.a.createElement("option",{value:"50"},"50")),r.a.createElement("span",null,"et"),r.a.createElement("select",{name:"maxPrice",value:n,onChange:e.handleFilters},r.a.createElement("option",{value:"0"},"Prix max"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"40"},"40"),r.a.createElement("option",{value:"50"},"50"))),r.a.createElement("select",{name:"sort",value:c,onChange:e.handleFilters},r.a.createElement("option",{value:"date-desc"},"Tri: Plus r\xe9cents"),r.a.createElement("option",{value:"date-asc"},"Tri: Plus vieux"),r.a.createElement("option",{value:"price-asc"},"Tri: Moins cher"),r.a.createElement("option",{value:"price-desc"},"Tri: Plus cher"))))))}),j=t(84),O=(t(221),function(e){return r.a.createElement("li",{className:"card"},r.a.createElement(g.a,{to:"/offer/".concat(e.id)},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-img"},r.a.createElement("div",{className:"img"})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-top"},r.a.createElement("h3",{className:"card-title"},e.title),r.a.createElement("span",{className:"card-price"},e.price,"\xa0\u20ac")),r.a.createElement("div",{className:"card-bottom"}),r.a.createElement("p",null,e.description),r.a.createElement("span",null,Object(j.format)(e.date,"MMMM DD, YYYY"))))))}),S=(t(222),function(e){for(var a=e.totalPages,t=e.currentPage,n=e.goToPage,c=[],l=r.a.createElement("svg",{viewBox:"0 0 24 24","data-name":"Calque 1",focusable:"false"},r.a.createElement("path",{d:"M10.13 12l8.25-8.33a2.15 2.15 0 0 0 0-3 2.1 2.1 0 0 0-3 0l-9.76 9.82a2.14 2.14 0 0 0 0 3l9.76 9.86a2.1 2.1 0 0 0 3 0 2.2 2.2 0 0 0 0-3.05z"})),s=r.a.createElement("svg",{viewBox:"0 0 24 24","data-name":"Calque 1",focusable:"false"},r.a.createElement("path",{d:"M18.38 10.49L8.62.63a2.1 2.1 0 0 0-3 0 2.15 2.15 0 0 0 0 3L13.87 12l-8.25 8.32a2.2 2.2 0 0 0 0 3.05 2.1 2.1 0 0 0 3 0l9.76-9.86a2.14 2.14 0 0 0 0-3.02z"})),o=function(e){1===e&&c.push(r.a.createElement("span",{key:0,onClick:function(){t>1&&n(t-1)}},l)),c.push(r.a.createElement("span",{key:e,className:t===e?"active":"",onClick:function(){return n(e)}},e)),e===a&&c.push(r.a.createElement("span",{key:e+1,onClick:function(){t<a&&n(t+1)}},s))},i=1;i<=a;i++)o(i);return r.a.createElement("div",{className:"pagination"},c)}),F=t(85),M=t.n(F),z=(t(223),function(){return r.a.createElement("div",{className:"loader center-page loader--style1",title:"0"},r.a.createElement("img",{src:M.a,alt:"loading gif"}))}),A=(t(224),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={offers:[],count:0,limit:25,totalPages:0,currentPage:1,title:"",minPrice:"",maxPrice:"",sort:"",isLoading:!0,error:null},t.goToPage=function(){var e=Object(k.a)(x.a.mark(function e(a){var n,r,c,l;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(a-1)*t.state.limit,e.next=4,P.a.get("https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=".concat(n,"&limit=").concat(t.state.limit));case 4:r=e.sent,c=r.data.offers,l=r.data.count,t.setState({offers:c,count:l,totalPages:Math.ceil(l/t.state.limit),currentPage:a,isLoading:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.setState({error:"An error occurred"});case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(a){return e.apply(this,arguments)}}(),t.handleFilters=function(e){var a=e.target.name,n=e.target.value,r={};r[a]=n,t.setState(r)},t.searchFilters=function(){var e=Object(k.a)(x.a.mark(function e(a){var n,r,c;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(a),e.prev=1,void 0===a){e.next=9;break}return e.next=5,P.a.get("https://leboncoin-api.herokuapp.com/api/offer/with-count?title=".concat(a.title,"&priceMin=").concat(a.minPrice,"&priceMax=").concat(a.maxPrice,"&sort=").concat(a.sort));case 5:n=e.sent,r=n.data.offers,c=n.data.count,t.setState({offers:r,count:c});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.setState({error:"An error occured"});case 14:case"end":return e.stop()}},e,this,[[1,11]])}));return function(a){return e.apply(this,arguments)}}(),t.submitFilters=function(e){e.preventDefault();var a={title:t.state.title,minPrice:t.state.minPrice,maxPrice:t.state.maxPrice,sort:t.state.sort};Object.values(a).filter(function(e){return""!==e}).length>0?t.searchFilters(a):t.searchFilters()},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.goToPage(1);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderMain",value:function(){var e=this.state,a=e.isLoading,t=e.error,n=e.currentPage,c=e.totalPages;return a||null!==t?a&&null===t?r.a.createElement(z,null):null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper homepage"},r.a.createElement("ul",null,this.state.offers.map(function(e){return r.a.createElement(O,{key:e._id,pictures:e.pictures,id:e._id,title:e.title,description:e.description,price:e.price,date:e.created})}))),r.a.createElement(S,{currentPage:n,totalPages:c,goToPage:this.goToPage}))}},{key:"render",value:function(){var e=this.state,a=e.title,t=e.minPrice,n=e.maxPrice,c=e.sort;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{title:a,minPrice:t,maxPrice:n,sort:c,handleFilters:this.handleFilters,submitFilters:this.submitFilters}),this.renderMain())}}]),a}(n.Component)),I=(t(225),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={offer:[],isLoading:!0,error:null},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(x.a.mark(function e(){var a,t;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://leboncoin-api.herokuapp.com/api/offer/"+this.props.match.params.offerId);case 3:a=e.sent,t=a.data,this.setState({offer:t,isLoading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({error:"An error occurred"});case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"renderSection",value:function(){var e=this.state.offer,a=e.title,t=e.price,n=e.description,c=e.created,l=e.creator,s=this.state,o=s.isLoading,i=s.error;if(o||null!==i)return o&&null===i?r.a.createElement(z,null):null;var m=r.a.createElement("svg",{viewBox:"0 0 24 24","data-name":"Calque 1",focusable:"false"},r.a.createElement("circle",{cx:"12",cy:"12",fill:"#cad1d9",r:"12"}),r.a.createElement("circle",{cx:"12",cy:"10.26",fill:"#a8b4c0",r:"4.73"}),r.a.createElement("path",{d:"M12 16.64a8.67 8.67 0 0 0-7.73 4.53 12 12 0 0 0 15.46 0A8.67 8.67 0 0 0 12 16.64z",fill:"#a8b4c0"}));return r.a.createElement("div",{className:"wrapper"},r.a.createElement("section",{className:"section-offer"},r.a.createElement("div",{className:"section-main"},r.a.createElement("div",{className:"section-card"},r.a.createElement("div",{className:"gallery-container"}),r.a.createElement("div",{className:"section-card-body"},r.a.createElement("h1",null,a),r.a.createElement("span",null,t,"\xa0\u20ac"),r.a.createElement("div",null,c))),r.a.createElement("div",{className:"section-description"},r.a.createElement("div",null,"Description"),r.a.createElement("p",null,n))),r.a.createElement("div",{className:"section-sidebar"},r.a.createElement("div",{className:"contact-card"},r.a.createElement("div",null,m),r.a.createElement("div",{className:"user"},l.account.username),r.a.createElement("div",{className:"phone"},l.account.phone)))))}},{key:"render",value:function(){return this.renderSection()}}]),a}(n.Component)),q=(t(226),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",confirmPassword:"",error:null},t.handleChange=function(e){var a=e.target.name,n=e.target.value,r={};r[a]=n,t.setState(r)},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.username,r=a.email,c=a.password,l=a.confirmPassword;n&&r&&c&&l?c===l?(t.createAccount({email:t.state.email,username:t.state.username,password:t.state.password}),console.log("Success")):console.log("the passwords are not similar"):console.log("you're missing one field")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"createAccount",value:function(e){P.a.post("https://leboncoin-api.herokuapp.com/api/user/sign_up",e).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=r.a.createElement("svg",{viewBox:"0 0 24 24","data-name":"Calque 1",focusable:"false"},r.a.createElement("path",{d:"M17.24 15.07l-4.64-2.76V6.86a.85.85 0 0 0-.86-.86h-.08a.85.85 0 0 0-.86.86v5.67a1.2 1.2 0 0 0 .59 1l5 3a.86.86 0 1 0 .87-1.48z"}),r.a.createElement("path",{d:"M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 21.6a9.6 9.6 0 1 1 9.6-9.6 9.6 9.6 0 0 1-9.6 9.6z"})),a=r.a.createElement("svg",{viewBox:"0 0 24 24","data-name":"Calque 1",focusable:"false"},r.a.createElement("path",{d:"M12 24a2.49 2.49 0 0 0 2.51-2.46h-5A2.48 2.48 0 0 0 12 24zM21.13 18.2l-1.61-1.58v-6.16c0-3.78-2.06-6.94-5.64-7.78v-.83a1.88 1.88 0 0 0-3.76 0v.83c-3.59.84-5.63 4-5.63 7.78v6.16L2.87 18.2a1.23 1.23 0 0 0 .88 2.11h16.49a1.23 1.23 0 0 0 .89-2.11z"})),t=r.a.createElement("svg",{viewBox:"0 0 24 24","data-name":"Calque 1",focusable:"false"},r.a.createElement("path",{d:"M12 8.6A3.33 3.33 0 0 0 8.73 12 3.33 3.33 0 0 0 12 15.4a3.33 3.33 0 0 0 3.27-3.4A3.33 3.33 0 0 0 12 8.6z"}),r.a.createElement("path",{d:"M12 3.5A12.92 12.92 0 0 0 0 12a12.92 12.92 0 0 0 12 8.5A12.92 12.92 0 0 0 24 12a12.92 12.92 0 0 0-12-8.5zm0 14.17A5.56 5.56 0 0 1 6.55 12 5.56 5.56 0 0 1 12 6.33 5.56 5.56 0 0 1 17.45 12 5.56 5.56 0 0 1 12 17.67z"})),n=this.state,c=n.username,l=n.email,s=n.password,o=n.confirmPassword;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"sign-up-page"},r.a.createElement("div",{className:"sign-up-flex"},r.a.createElement("div",{className:"sign-up-flex-left"},r.a.createElement("section",null,r.a.createElement("h2",null,"Pourquoi cr\xe9er un compte ?"),r.a.createElement("div",{className:"flex-row"},e,r.a.createElement("div",{className:"flex-row"},r.a.createElement("p",null,"Gagnez du temps"),r.a.createElement("p",null,"Publiez vos annonces rapidement, avec vos informations pr\xe9-remplies chaque fois que vous souhaitez d\xe9poser une nouvelle annonce."))),r.a.createElement("div",{className:"flex-row"},a,r.a.createElement("div",{className:"flex-row"},r.a.createElement("p",null,"Soyez les premiers inform\xe9s"),r.a.createElement("p",null,"Cr\xe9ez des alertes Immo ou Emploi et ne manquez jamais l\u2019annonce qui vous int\xe9resse."))),r.a.createElement("div",{className:"flex-row"},t,r.a.createElement("div",{className:"flex-row"},r.a.createElement("p",null,"Visibilit\xe9"),r.a.createElement("p",null,"Suivez les statistiques de vos annonces (nombre de fois o\xf9 votre annonce a \xe9t\xe9 vue, nombre de contacts re\xe7us)."))))),r.a.createElement("div",{className:"sign-up-flex-right"},r.a.createElement("section",null,r.a.createElement("h1",null,"Cr\xe9ez un compte"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"username"},"username *"),r.a.createElement("input",{type:"text",name:"username",value:c,onChange:this.handleChange})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"email"},"Adresse email *"),r.a.createElement("input",{type:"email",name:"email",value:l,onChange:this.handleChange})),r.a.createElement("div",{className:"form-item form-password"},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"password"},"Mot de passe *"),r.a.createElement("input",{type:"password",name:"password",value:s,onChange:this.handleChange})),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"confirmPassword"},"Confirmer le mot de passe *"),r.a.createElement("input",{type:"password",name:"confirmPassword",value:o,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-checkbox"},r.a.createElement("input",{type:"checkbox",name:"newsletter"}),r.a.createElement("label",{htmlFor:"newsletter"},"Je souhaite recevoir des offres des partenaires du site leboncoin susceptibles de m\u2019int\xe9resser")),r.a.createElement("div",{className:"form-checkbox"},r.a.createElement("input",{type:"checkbox",name:"legal"}),r.a.createElement("label",{htmlFor:"legal"},"\"\xa0J'accepte les\xa0",r.a.createElement("span",null,"Conditions G\xe9n\xe9rales de Vente"),'"')),r.a.createElement("button",{type:"submit"},"Cr\xe9er mon Compte Personnel")))))))}}]),a}(n.Component)),L=(t(227),"https://leboncoin-api.herokuapp.com/api/user/log_in"),D=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",error:null},t.handleChange=function(e){var a=e.target.name,n=e.target.value,r={};r[a]=n,t.setState(r)},t.handleSubmit=function(e){e.preventDefault(),P.a.post(L,{email:t.state.email,password:t.state.password}).then(function(e){var a=e.data._id,n=e.data.token,r=e.data.account.username;t.props.setUserId(a,n,r),console.log("success, check cookies")}).catch(function(e){return console.log(e)})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return r.a.createElement("div",{className:"wrapper connection"},r.a.createElement("div",{className:"sign-in-flex"},r.a.createElement("section",null,r.a.createElement("h1",null,"Connexion"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"email"},"Adresse email"),r.a.createElement("input",{type:"email",name:"email",value:a,onChange:this.handleChange,placeholder:"johndoe@gmail.com"})),r.a.createElement("div",{className:"form-item form-password"},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"password"},"Mot de passe"),r.a.createElement("input",{type:"password",name:"password",value:t,onChange:this.handleChange}))),r.a.createElement("button",{type:"submit"},"Se connecter")),r.a.createElement("div",{className:"create-account-redirect"},r.a.createElement("p",null,"Vous n'avez pas de compte ?"),r.a.createElement(g.a,{className:"btn",to:"/signup"},"Cr\xe9er un compte")))))}}]),a}(n.Component),T=(t(228),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={default:null},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Publish page")}}]),a}(n.Component)),B=(t(229),t(230),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={userId:E.a.get("userId")||null,token:E.a.get("token")||null,username:E.a.get("username")||null,redirect:!1},t.setUserId=function(e,a,n){E.a.set("userId",e),E.a.set("token",a),E.a.set("username",n),t.setState({userId:E.a.get("userId"),token:E.a.get("token"),username:E.a.get("username"),redirect:!0})},t.endSession=function(){E.a.remove("userId"),E.a.remove("token"),E.a.remove("username"),t.setState({userId:null,token:null,username:null,redirect:!0})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{token:this.state.token,endSession:this.endSession,username:this.state.username}),r.a.createElement(d.a,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(A,e)}}),r.a.createElement(f.a,{path:"/offer/:offerId",render:function(e){return r.a.createElement(I,e)}}),r.a.createElement(f.a,{path:"/SignUp",render:function(e){return r.a.createElement(q,e)}}),r.a.createElement(f.a,{path:"/LogIn",render:function(a){return e.state.redirect?r.a.createElement(h.a,{to:"/"}):r.a.createElement(D,Object.assign({setUserId:e.setUserId},a))}}),r.a.createElement(f.a,{path:"/Publish",render:function(e){return r.a.createElement(T,e)}}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,a,t){e.exports=t.p+"static/media/loading.14ca3612.svg"},86:function(e,a,t){e.exports=t(232)},92:function(e,a,t){},93:function(e,a,t){},96:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.10a57d48.chunk.js.map