(this["webpackJsonpspotify-api"]=this["webpackJsonpspotify-api"]||[]).push([[0],{87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),s=a(16),c=a.n(s),i=a(22),o=a(21),l=a(53),u=a(19),j=a(13),b="SET_ALBUMS",p="ADD_ALBUMS",d="SET_ARTISTS",m="ADD_ARTISTS",h="SET_PLAYLIST",O="ADD_PLAYLIST",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.albums;switch(t.type){case b:return a;case p:return Object(j.a)(Object(j.a)({},e),{},{next:a.next,items:[].concat(Object(u.a)(e.items),Object(u.a)(a.items))});default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.artists;switch(t.type){case d:return a;case m:return Object(j.a)(Object(j.a)({},e),{},{nex:a.next,items:[].concat(Object(u.a)(e.items),Object(u.a)(a.items))});default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.playlists;switch(t.type){case h:return a;case O:return Object(j.a)(Object(j.a)({},e),{},{next:a.next,items:[].concat(Object(u.a)(e.items),Object(u.a)(a.items))});default:return e}},v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,g=Object(o.e)(Object(o.c)({albums:f,artists:x,playlist:y}),v(Object(o.a)(l.a))),_=a(30),S=a(31),E=a(33),T=a(32),k=a(20),w=a(6),C=a(91),A=a(90),N=function(){return Object(r.jsx)("h1",{className:"main-heading",children:"Spotify Music Search"})},L=Object(i.b)()((function(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZED_URL:"https://accounts.spotify.com/authorize",REACT_APP_CLIENT_ID:"71c4d8bfcc92489ba6d3c8b33e10d6b2",REACT_APP_REDIRECT_URL:"https://onnichan.github.io/react-spotify/redirect"}),a=t.REACT_APP_CLIENT_ID,s=t.REACT_APP_AUTHORIZED_URL,c=t.REACT_APP_REDIRECT_URL,i=e.isValidSession,o=e.location.state,l=o&&o.session_expired;return Object(r.jsx)(n.Fragment,{children:i()?Object(r.jsx)(w.a,{to:"/react-spotify/dashboard"}):Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)(N,{}),l&&Object(r.jsx)(C.a,{variant:"info",children:"Session expired. Please login again."}),Object(r.jsx)(A.a,{variant:"info",type:"submit",onClick:function(e){e.preventDefault(),window.location.href="".concat(s,"?client_id=").concat(a,"&redirect_uri=").concat(c,"&response_type=token&show_dialog=true")},children:"Login to spotify"})]})})})),D=a(10),I=a.n(D),P=a(17),R=a(27),U=a.n(R),F=function(){try{var e=JSON.parse(localStorage.getItem("params"));e&&(U.a.defaults.headers.common.Authorization="Bearer ".concat(e.access_token))}catch(t){console.log("Error setting auth",t)}},V=function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setExpiryTime,a=e.history,r=e.location;try{if(I.a.isEmpty(r.hash))return a.push("/react-spotify/dashboard");var n=r.hash.slice(1).split("&").reduce((function(e,t){var a=t.split("="),r=Object(P.a)(a,2),n=r[0],s=r[1];return e[n]=s,e}),{}),s=(new Date).getTime()+1e3*n.expires_in;localStorage.setItem("params",JSON.stringify(n)),localStorage.setItem("expiry_time",s),console.log(s),t(s),a.push("/react-spotify/dashboard")}catch(c){a.push("/react-spotify/")}}},{key:"render",value:function(){return null}}]),a}(n.Component),B=a(8),M=a.n(B),H=a(18),J=function(){var e=Object(H.a)(M.a.mark((function e(t,a){var r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(),e.next=3,U.a.get(t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),K=function(e){return{type:b,albums:e}},W=function(e){return{type:d,artists:e}},q=function(e){return{type:h,playlists:e}},z=function(e){return function(){var t=Object(H.a)(M.a.mark((function t(a){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:return r=t.sent,t.abrupt("return",a((n=r.albums,{type:p,albums:n})));case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},G=function(e){return function(){var t=Object(H.a)(M.a.mark((function t(a){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:return r=t.sent,t.abrupt("return",a((n=r.artists,{type:m,artists:n})));case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},X=function(e){return function(){var t=Object(H.a)(M.a.mark((function t(a){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:return r=t.sent,t.abrupt("return",a((n=r.playlists,{type:O,playlists:n})));case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Y=a(93),Z=a.p+"static/media/music.b2fe7d4d.jpeg",Q=function(e){var t=e.albums;return Object(r.jsx)(n.Fragment,{children:Object.keys(t).length>0&&Object(r.jsx)("div",{className:"albums",children:t.items.map((function(e,t){return Object(r.jsx)(n.Fragment,{children:Object(r.jsxs)(Y.a,{style:{width:"18rem"},children:[Object(r.jsx)("a",{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",className:"card-image-link",children:I.a.isEmpty(e.images)?Object(r.jsx)("img",{src:Z,alt:""}):Object(r.jsx)(Y.a.Img,{variant:"top",src:e.images[0].url,alt:""})}),Object(r.jsxs)(Y.a.Body,{children:[Object(r.jsx)(Y.a.Title,{children:e.name}),Object(r.jsx)(Y.a.Text,{children:Object(r.jsx)("small",{children:e.artists.map((function(e){return e.name})).join(", ")})})]})]})},t)}))})})},$=function(e){var t=e.artists;return Object(r.jsx)(n.Fragment,{children:Object.keys(t).length>0&&Object(r.jsx)("div",{className:"artists",children:t.items.map((function(e,t){return Object(r.jsx)(n.Fragment,{children:Object(r.jsxs)(Y.a,{style:{width:"18rem"},children:[Object(r.jsx)("a",{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",className:"card-image-link",children:I.a.isEmpty(e.images)?Object(r.jsx)("img",{src:Z,alt:""}):Object(r.jsx)(Y.a.Img,{variant:"top",src:e.images[0].url,alt:""})}),Object(r.jsx)(Y.a.Body,{children:Object(r.jsx)(Y.a.Title,{children:e.name})})]})},t)}))})})},ee=function(e){var t=e.playlist;return Object(r.jsx)("div",{children:Object.keys(t).length>0&&Object(r.jsx)("div",{className:"playlist",children:t.items.map((function(e,t){return Object(r.jsx)(n.Fragment,{children:Object(r.jsxs)(Y.a,{style:{width:"18rem"},children:[Object(r.jsx)("a",{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",className:"card-image-link",children:I.a.isEmpty(e.images)?Object(r.jsx)("img",{src:Z,alt:""}):Object(r.jsx)(Y.a.Img,{variant:"top",src:e.images[0].url,alt:""})}),Object(r.jsxs)(Y.a.Body,{children:[Object(r.jsx)(Y.a.Title,{children:e.name}),Object(r.jsx)(Y.a.Text,{children:Object(r.jsx)("small",{children:"By ".concat(e.owner.display_name)})})]})]})},t)}))})})},te=function(e){var t=e.isValidSession,a=e.loadMore,s=e.result,c=e.setCategory,i=e.selectedCategory,o=s.albums,l=s.artists,u=s.playlist;return t()?Object(r.jsxs)(n.Fragment,{children:[Object(r.jsxs)("div",{className:"search-buttons",children:[!I.a.isEmpty(o.items)&&Object(r.jsx)("button",{className:"".concat("albums"===i?"btn active":"btn"),onClick:function(){return c("albums")},children:"Albums"}),!I.a.isEmpty(l.items)&&Object(r.jsx)("button",{className:"".concat("artists"===i?"btn active":"btn"),onClick:function(){return c("artists")},children:"Artists"}),!I.a.isEmpty(u.items)&&Object(r.jsx)("button",{className:"".concat("playlist"===i?"btn active":"btn"),onClick:function(){return c("playlist")},children:"PlayLists"})]}),Object(r.jsx)("div",{className:"".concat("albums"===i?"":"hide"),children:o&&Object(r.jsx)(Q,{albums:o})}),Object(r.jsx)("div",{className:"".concat("artists"===i?"":"hide"),children:l&&Object(r.jsx)($,{artists:l})}),Object(r.jsx)("div",{className:"".concat("playlist"===i?"":"hide"),children:u&&Object(r.jsx)(ee,{playlist:u})}),!I.a.isEmpty(s[i])&&!I.a.isEmpty(s[i].next)&&Object(r.jsx)("div",{className:"load-more",onClick:function(){return a(i)},children:Object(r.jsx)(A.a,{variant:"info",type:"button",children:"Load More"})})]}):Object(r.jsx)(w.a,{to:{pathname:"/react-spotify/",state:{session_expired:!0}}})},ae=a(92),re=function(e){var t=Object(n.useState)(""),a=Object(P.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(""),o=Object(P.a)(i,2),l=o[0],u=o[1];return Object(r.jsx)("div",{children:Object(r.jsxs)(ae.a,{onSubmit:function(t){t.preventDefault(),""!==s.trim()?(u(""),e.handleSearch(s)):u("Please enter a search term")},children:[l&&Object(r.jsx)("p",{className:"errorMsg",children:l}),Object(r.jsxs)(ae.a.Group,{controlId:"formBasicEmail",children:[Object(r.jsx)(ae.a.Label,{children:"Enter search term"}),Object(r.jsx)(ae.a.Control,{type:"search",name:"searchTerm",value:s,placeholder:"Search for album, artist or playlist",onChange:function(e){var t=e.target.value;c(t)},autoComplete:"off"})]}),Object(r.jsx)(A.a,{variant:"info",type:"submit",children:"Search"})]})})},ne=function(e){var t=Object(n.useState)(document.createElement("div")),a=Object(P.a)(t,1)[0],r=document.querySelector("#loader");return Object(n.useEffect)((function(){r.appendChild(a).classList.add("message")}),[r,a]),Object(n.useEffect)((function(){e.show?(r.classList.remove("hide"),document.body.classList.add("loader-open")):(r.classList.add("hide"),document.body.classList.remove("loader-open"))}),[r,e.show]),c.a.createPortal(e.children,a)},se=Object(i.b)((function(e){return{albums:e.albums,artists:e.artists,playlist:e.playlist}}))((function(e){var t=Object(n.useState)(!1),a=Object(P.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)("albums"),o=Object(P.a)(i,2),l=o[0],u=o[1],j=e.isValidSession,b=e.history,p=function(){var t=Object(H.a)(M.a.mark((function t(a){var r,n,s,i;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!j()){t.next=18;break}r=e.dispatch,n=e.albums,s=e.artists,i=e.playlist,c(!0),t.t0=a,t.next="albums"===t.t0?6:"artists"===t.t0?9:"playlist"===t.t0?12:15;break;case 6:return t.next=8,r(z(n.next));case 8:return t.abrupt("break",15);case 9:return t.next=11,r(G(s.next));case 11:return t.abrupt("break",15);case 12:return t.next=14,r(X(i.next));case 14:return t.abrupt("break",15);case 15:c(!1),t.next=19;break;case 18:b.push({pathname:"/react-spotify/",state:{session_expired:!0}});case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d={albums:e.albums,artists:e.artists,playlist:e.playlist};return Object(r.jsx)(n.Fragment,{children:j()?Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{}),Object(r.jsx)(re,{handleSearch:function(t){j()?(c(!0),e.dispatch(function(e){return function(){var t=Object(H.a)(M.a.mark((function t(a){var r,n,s,c,i;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.spotify.com/v1/search?query=".concat(encodeURIComponent(e),"\n      &type=album,playlist,artist"),t.next=4,J(r);case 4:return n=t.sent,console.log(n),s=n.albums,c=n.artists,i=n.playlists,a(K(s)),a(W(c)),t.abrupt("return",a(q(i)));case 12:t.prev=12,t.t0=t.catch(0),console.log("error",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}(t)).then((function(){c(!1),u("albums")}))):b.push({pathname:"/react-spotify/",state:{session_expired:!0}})}}),Object(r.jsx)(ne,{show:s,children:"Loading ..."}),Object(r.jsx)(te,{result:d,loadMore:p,setCategory:function(e){u(e)},selectedCategory:l,isValidSession:j})]}):Object(r.jsx)(w.a,{to:{pathname:"/react-spotify/",state:{session_expired:!0}}})})})),ce=function(){return Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(N,{}),"Page not found. Goto",Object(r.jsx)(k.b,{to:"/react-spotify/dashboard",children:"Home Page"})]})},ie=function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(_.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={expiryTime:"0"},e.setExpiryTime=function(t){e.setState({expiryTime:t})},e.isValidSession=function(){return(new Date).getTime()<e.state.expiryTime},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e;try{e=JSON.parse(localStorage.getItem("expiry_time"))}catch(t){e="0"}this.setState({expiryTime:e})}},{key:"render",value:function(){var e=this;return Object(r.jsx)(k.a,{children:Object(r.jsx)("div",{className:"main",children:Object(r.jsxs)(w.d,{children:[Object(r.jsx)(w.b,{path:"/react-spotify/",exact:!0,render:function(t){return Object(r.jsx)(L,Object(j.a)({isValidSession:e.isValidSession},t))}}),Object(r.jsx)(w.b,{path:"/react-spotify/redirect",render:function(t){return Object(r.jsx)(V,Object(j.a)({setExpiryTime:e.setExpiryTime},t))}}),Object(r.jsx)(w.b,{path:"/react-spotify/dashboard",render:function(t){return Object(r.jsx)(se,Object(j.a)({isValidSession:e.isValidSession},t))}}),Object(r.jsx)(w.b,{component:ce})]})})})}}]),a}(n.Component);a(86),a(87);c.a.render(Object(r.jsx)(i.a,{store:g,children:Object(r.jsx)(ie,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.c0145456.chunk.js.map