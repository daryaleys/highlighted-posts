(function(){"use strict";var n={634:function(n,t,e){var o=e(751),r=e(641),u=e(33),i=e(953),a={class:"post"},s={class:"post__top"},c={class:"post__date"},l={class:"post__author"},f=["href"],p=["innerHTML"],v=(0,r.pM)({__name:"SinglePost",props:{date:String,authorName:String,authorUrl:String,content:String,contentPostTones:Array},setup:function(n){var t=n,e=(0,i.KR)(""),o=function(n){return new Intl.DateTimeFormat("ru",{dateStyle:"long",timeStyle:"short"}).format(n)},v=function(n){return(n+1)/2*120};return(0,r.sV)((function(){for(var n=t.content,o=0,r=0;r<t.contentPostTones.length;r++){var u=t.contentPostTones[r];e.value+=n.slice(o,u.position),e.value+='<span style="background-color: hsl('.concat(v(u.tone),', 90%, 50%)">'),e.value+=n.slice(u.position,u.position+u.length),e.value+="</span>",o=u.position+u.length}e.value+=n.slice(o)})),function(t,v){return(0,r.uX)(),(0,r.CE)("li",a,[(0,r.Lk)("div",s,[(0,r.Lk)("span",c,(0,u.v_)(o(new Date(n.date)))+" / ",1),(0,r.Lk)("span",l,(0,u.v_)(n.authorName),1),(0,r.Lk)("a",{class:"post__link",href:n.authorUrl,target:"_blank"}," / "+(0,u.v_)(n.authorUrl),9,f)]),(0,r.Lk)("div",{class:"post__content",innerHTML:(0,i.R1)(e)},null,8,p)])}}}),h=e(262);const d=(0,h.A)(v,[["__scopeId","data-v-ead75e36"]]);var _=d,g={key:0},b={class:"post-list"},k=(0,r.pM)({__name:"App",setup:function(n){var t=(0,i.KR)([]),e=(0,i.KR)(!1),o=(0,i.KR)(""),a=function(){e.value=!0,fetch("./data/feed.json").then((function(n){return n.json()})).then((function(n){return t.value=n})).catch((function(){return o.value="Не удалось загрузить посты :("})).finally((function(){return e.value=!1}))};return(0,r.sV)((function(){a()})),function(n,e){return(0,r.uX)(),(0,r.CE)(r.FK,null,[o.value?((0,r.uX)(),(0,r.CE)("span",g,(0,u.v_)(o.value),1)):(0,r.Q3)("",!0),(0,r.Lk)("ul",b,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.value,(function(n){return(0,r.uX)(),(0,r.Wv)(_,(0,r.v6)({ref_for:!0},n),null,16)})),256))])],64)}}});const y=k;var m=y;(0,o.Ef)(m).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return n[o](u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,u){if(!o){var i=1/0;for(l=0;l<n.length;l++){o=n[l][0],r=n[l][1],u=n[l][2];for(var a=!0,s=0;s<o.length;s++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](o[s])}))?o.splice(s--,1):(a=!1,u<i&&(i=u));if(a){n.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}u=u||0;for(var l=n.length;l>0&&n[l-1][2]>u;l--)n[l]=n[l-1];n[l]=[o,r,u]}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,u,i=o[0],a=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(s)var l=s(e)}for(t&&t(o);c<i.length;c++)u=i[c],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(l)},o=self["webpackChunkhighlighted_posts"]=self["webpackChunkhighlighted_posts"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(634)}));o=e.O(o)})();
//# sourceMappingURL=app.ea07b006.js.map