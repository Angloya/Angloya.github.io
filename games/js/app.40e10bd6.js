(function(e){function t(t){for(var r,a,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)a=o[l],s[a]&&d.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8b14ee88"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"06554c26"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var o=s[i],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===r||u===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){o=l[i],u=o.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.request=r,n(s)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){a[e]=0}));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=s[e]=[t,n]});t.push(r[2]=i);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e),u=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}s[e]=void 0}};var m=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/games/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"1de5":function(e,t,n){e.exports=n.p+"img/card1.99412515.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Cards")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/CrossZero"}},[e._v("Cross-zero")])],1),n("router-view")],1)},s=[],i=(n("034f"),n("2877")),o={},c=Object(i["a"])(o,a,s,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("cards")],1)},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"CardGame"},[n("div",{staticClass:"infoGameMove"},[n("h1",[e._v(e._s(e.message))]),e.newGame?e._e():n("span",{staticClass:"Info"},[n("h2",[e._v("move: "),n("b",[e._v(e._s(e.move))])]),n("h2",[e._v("time: "),n("b",[e._v(e._s(e.gameTime))])])])]),n("div",{staticClass:"game"},[e.newGame?n("div",{staticClass:"newGame"},[n("button",{staticClass:"button",on:{click:e.startNewGame}},[e._v("Play again")])]):e._e(),n("div",{staticClass:"cards"},e._l(e.cards,function(t,r){return n("div",{key:r,staticClass:"card",class:{select:t.select,won:t.won,nonselect:t.won},on:{click:function(n){e.selectCard(t)}}},[n("transition",{attrs:{name:"fade"}},[t.select||t.won?n("img",{attrs:{src:t.img,alt:t.name}}):e._e()])],1)}))])])},h=[],p=(n("7f7f"),{props:{player:Boolean},data:function(){return{message:null,newGame:!1,count:0,countCard:0,setTimeout:null,setInter:null,Timeout:null,gameTime:60,move:0,myCards:[{id:1,name:"1",select:!0,won:!1,img:n("1de5")},{id:2,name:"1",select:!0,won:!1,img:n("1de5")},{id:3,name:"2",select:!0,won:!1,img:n("737f")},{id:4,name:"2",select:!0,won:!1,img:n("737f")},{id:5,name:"3",select:!0,won:!1,img:n("9deb")},{id:6,name:"3",select:!0,won:!1,img:n("9deb")},{id:7,name:"4",select:!0,won:!1,img:n("e7be")},{id:8,name:"4",select:!0,won:!1,img:n("e7be")},{id:9,name:"5",select:!0,won:!1,img:n("75a5")},{id:10,name:"5",select:!0,won:!1,img:n("75a5")},{id:11,name:"6",select:!0,won:!1,img:n("faf0")},{id:12,name:"6",select:!0,won:!1,img:n("faf0")}],cards:[]}},created:function(){this.newGame=!0,this.cards=this.myCards.slice()},computed:{changeCards:function(){return this.cards}},methods:{noShowCard:function(){for(var e in this.cards)this.cards[e].select=!1,this.cards[e].won=!1},timerGame:function(){var e=this;this.setInter=setInterval(function(){e.gameTime>0?e.gameTime-=1:(clearInterval(e.setInter),e.message="time's up",e.newGame=!0)},1e3)},createGame:function(){var e=this;this.message=null,this.cards=this.myCards.slice();var t=null;this.gameTime=60,this.move=0;for(var n={},r=0;r<this.cards.length;r++)t=Math.floor(10*Math.random()),n=this.cards[r],this.cards[r]=this.cards[t],this.cards[t]=n;this.setTimeout=setTimeout(function(){e.noShowCard(),e.timerGame()},3e3)},selectCard:function(e){var t=this;12!==this.countCard?e.select||(this.count+=1,this.move+=1,this.count<2?e.select=!0:2===this.count&&(e.select=!0,this.Timeout=setTimeout(function(){t.checkCard(),t.count=0},500))):this.message="Your win"},checkCard:function(){var e=this.cards.filter(function(e){return!0===e.select});if(e[0].name===e[1].name)for(var t in this.cards)this.cards[t].id!==e[0].id&&this.cards[t].id!==e[1].id||(this.cards[t].won=!0,this.cards[t].select=!1,this.countCard+=1,12===this.countCard&&(this.message="Your win",this.newGame=!0,clearInterval(this.setInter))),this.count=0;else{for(var n in this.cards)this.cards[n].id!==e[0].id&&this.cards[n].id!==e[1].id||(this.cards[n].select=!1);this.count=0}},startNewGame:function(){for(var e in clearTimeout(this.setTimeout),clearTimeout(this.Timeout),clearInterval(this.setInter),this.newGame=!1,this.message=null,this.gameTime=60,this.move=0,this.cards=this.myCards.slice(),this.countCard=0,this.cards)this.cards[e].select=!0,this.cards[e].won=!1;this.createGame()},getRandomInt:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}}),v=p,g=(n("5c07"),Object(i["a"])(v,f,h,!1,null,"378ecb00",null));g.options.__file="cards.vue";var w=g.exports,b={name:"home",components:{cards:w},data:function(){return{friend:!0}}},y=b,_=Object(i["a"])(y,d,m,!1,null,null,null);_.options.__file="Home.vue";var C=_.exports;r["a"].use(l["a"]);var T=new l["a"]({routes:[{path:"/",name:"home",component:C},{path:"/CrossZero",name:"CrossZero",component:function(){return n.e("about").then(n.bind(null,"f9d6"))}}]}),j=n("2f62");r["a"].use(j["a"]);var x=new j["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:T,store:x,render:function(e){return e(u)}}).$mount("#app")},"5c07":function(e,t,n){"use strict";var r=n("d244"),a=n.n(r);a.a},"64a9":function(e,t,n){},"737f":function(e,t,n){e.exports=n.p+"img/card2.f30d479f.jpg"},"75a5":function(e,t,n){e.exports=n.p+"img/card5.eb0620a2.jpg"},"9deb":function(e,t,n){e.exports=n.p+"img/card3.69c7560b.jpg"},d244:function(e,t,n){},e7be:function(e,t,n){e.exports=n.p+"img/card4.5c2058ea.jpg"},faf0:function(e,t,n){e.exports=n.p+"img/card6.b2551af3.jpg"}});
//# sourceMappingURL=app.40e10bd6.js.map