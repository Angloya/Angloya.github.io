(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"27b6":function(t,e,n){},3949:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WordEnC")},a=[],o=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"addWords"},[r("form",[r("label",[t._v("Слово\r\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newback,expression:"newback"}],attrs:{type:"text",id:"word",placeholder:"Enter a english word"},domProps:{value:t.newback},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addWord(e):null},input:function(e){e.target.composing||(t.newback=e.target.value)}}})]),r("label",[t._v("Перевод\r\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newfront,expression:"newfront"}],attrs:{type:"text",id:"word",placeholder:"Enter a translation"},domProps:{value:t.newfront},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addWord(e):null},input:function(e){e.target.composing||(t.newfront=e.target.value)}}})]),r("img",{staticClass:"add",attrs:{src:n("8d2a")},on:{click:t.addWord}})]),r("p",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"error"},[t._v("Нужно заполнить оба поля")]),r("p",{directives:[{name:"show",rawName:"v-show",value:t.error2,expression:"error2"}],staticClass:"error"},[t._v("Такое слово уже есть")]),r("span",{staticClass:"removeAll"},[r("p",[t._v(" Удалить все слова")]),r("img",{attrs:{src:n("546a"),alt:""},on:{click:function(e){t.removeAll(t.index)}}})]),r("span",{staticClass:"mark-all"},[t._v(" Все слова были изучены"),r("input",{attrs:{type:"checkbox",id:"mark-all"},on:{click:t.selectAll}})]),r("ul",t._l(t.words,function(e,a){return r("li",{key:a,class:{line:t.isDoneEn(e)}},[r("div",{staticClass:"remove"},[r("img",{staticClass:"remove",attrs:{src:n("546a"),alt:""},on:{click:function(e){t.remove(a)}}}),r("img",{staticClass:"remove",attrs:{src:n("3a63"),alt:""},on:{click:function(n){t.activeEn(e)}}})]),r("div",{staticClass:"card"},[r("transition",{attrs:{name:"flip"}},[r("p",{key:e.activeEn,staticClass:"word"},[t._v(t._s(e.activeEn?e.back:e.front))])]),r("div",{staticClass:"input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbackEn,expression:"word.checkbackEn"}],staticClass:"translation",attrs:{type:"text",required:"",id:"translation",placeholder:"Enter a word"},domProps:{value:e.checkbackEn},on:{keypress:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.checked(e)},input:function(n){n.target.composing||t.$set(e,"checkbackEn",n.target.value)}}}),r("img",{directives:[{name:"show",rawName:"v-show",value:!e.doneEn,expression:"!word.doneEn"}],staticClass:"add",attrs:{src:n("8d2a")},on:{click:function(n){t.checked(e)}}})]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.rightEn2,expression:"word.rightEn2"}],staticClass:"rightEn"},[t._v("Неверно")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.rightEn,expression:"word.rightEn"}],staticClass:"rightEn"},[t._v("Верно! Молодец!")])],1)])}))])}),i=[],s=(n("ac4d"),n("8a81"),n("ac6a"),{name:"WordEn",data:function(){return{newback:"",newfront:"",error:!1,error2:!1,words:[{back:"apple",activeEn:!1,front:"яблоко",doneEn:!1,rightEn:!1,rightEn2:!1},{back:"home",activeEn:!1,front:"дом",doneEn:!1,rightEn:!1,rightEn2:!1},{back:"orange",activeEn:!1,front:"апельсин",doneEn:!1,rightEn:!1,rightEn2:!1},{back:"mother",activeEn:!1,front:"мама",doneEn:!1,rightEn:!1,rightEn2:!1},{back:"father",activeEn:!1,front:"папа",doneEn:!1,rightEn:!1,rightEn2:!1},{back:"car",front:"машина",activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1},{back:"hope",front:"надежда",activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1},{back:"how is it going?",front:"как идут дела?",activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1},{back:"talk to you later!",front:"поговорим с тобой позже!",activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1},{back:"all the same",front:"без разницы",activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1},{back:"believe it or not, but",front:"верите или нет, но",activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1},{back:"in a way / to a certain extent",front:"в каком-то смысле",activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1},{back:"it’s a great idea!",front:"отличная идея!",activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1},{back:"thank you in advance!",front:"спасибо заранее!",activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1},{back:"after you!",front:"после вас!",activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1}]}},mounted:function(){if(localStorage.getItem("words"))try{this.words=JSON.parse(localStorage.getItem("words"))}catch(t){localStorage.removeItem("words")}},methods:{checkedWord:function(t,e){var n=!0,r=!1,a=void 0;try{for(var o,i=this.words[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var s=o.value;if(s[e]===t)return!0}}catch(t){r=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return!1},checkedWordEn:function(t,e,n){return t[n]===e},checked:function(t){this.checkedWordEn(t,t.checkbackEn,"back")?(t.rightEn=!0,t.rightEn2=!1,t.doneEn=!0,this.saveWords()):(t.rightEn2=!0,t.rightEn=!1,t.doneEn=!1,t.checkbackEn="")},addWord:function(){this.newfront&&this.newback?this.checkedWord(this.newfront,"front")||this.checkedWord(this.newback,"back")?this.error2=!0:(this.words.push({back:this.newback,front:this.newfront,activeEn:!1,doneEn:!1,rightEn:!1,rightEn2:!1}),this.error=!1,this.error2=!1,this.doneEn=!1):this.error=!0,this.newback=this.newfront="",this.saveWords()},activeEn:function(t){t.activeEn=!t.activeEn},remove:function(t){this.words.splice(t,1),this.saveWords()},removeAll:function(t){this.words.splice(t),this.saveWords()},saveWords:function(){var t=JSON.stringify(this.words);localStorage.setItem("words",t)},isDoneEn:function(t){return t.doneEn},selectAll:function(t){this.doneEn=!this.doneEn;for(var e=0;e<this.words.length;e++)this.words[e].doneEn=this.doneEn;this.saveWords()}}}),c=s,d=(n("756a"),n("2877")),u=Object(d["a"])(c,o,i,!1,null,"62f8fdde",null);u.options.__file="WordEnC.vue";var l=u.exports,h={name:"wordEn",components:{WordEnC:l}},v=h,f=Object(d["a"])(v,r,a,!1,null,null,null);f.options.__file="WordEn.vue";e["default"]=f.exports},"3a63":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFTSURBVHhe7dvRbcMwDEVRL5H9h0m7QfdJTDTuR+AUlp5ISdQ9AJEWMCzrRv7MBgAAAA/f+3z9/oka99ekk+1khO8n28ngpM/Mc5OeJ2OYL2fW4z/rc+M/rV+L0e/XXOvXYvT7AVjPI/m4O1s007gLWygYAUUEFBFQREARAUUEFBFQREARAUXDBjyu7zVXlV5frfbBes1VpddXue0TslAH7vuyeD/72CL2mY1rwPd49n82bgFXiGdcAq4SzzQP2Cre8WDeo2p1nz8EbKBVxBm4BDSrRHQLaFaI6BrQvEfMxj2gsYghC3UQtq/ShY7re81VpddXq32wXnNV6fXVwhYKRkARAUUEFBFQREARAUUEFBFQREBReMCs4+5s0UwDALX4vbBo9N/3tr4fRjD8a/HBMM/t+Vp4bnKJ1zntJmd9bT8J30+2k8FJx7m0JwMAAKCrbXsC9PRhRyvomUQAAAAASUVORK5CYII="},"67ee":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("wordRuC")},a=[],o=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"addWords"},[r("form",[r("label",[t._v("Слово\r\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newback,expression:"newback"}],attrs:{type:"text",id:"word",placeholder:"Enter a english word"},domProps:{value:t.newback},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addWord(e):null},input:function(e){e.target.composing||(t.newback=e.target.value)}}})]),r("label",[t._v("Перевод\r\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newfront,expression:"newfront"}],attrs:{type:"text",id:"word",placeholder:"Enter a translation"},domProps:{value:t.newfront},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addWord(e):null},input:function(e){e.target.composing||(t.newfront=e.target.value)}}})]),r("img",{staticClass:"add",attrs:{src:n("8d2a")},on:{click:t.addWord}})]),r("p",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"error"},[t._v("Нужно заполнить оба поля")]),r("p",{directives:[{name:"show",rawName:"v-show",value:t.error2,expression:"error2"}],staticClass:"error"},[t._v("Такое слово уже есть")]),r("span",{staticClass:"removeAll"},[r("p",[t._v(" Удалить все слова")]),r("img",{attrs:{src:n("546a"),alt:""},on:{click:function(e){t.removeAll(t.index)}}})]),r("span",{staticClass:"mark-all"},[t._v(" Все слова были изучены"),r("input",{attrs:{type:"checkbox",id:"mark-all"},on:{click:t.selectAll}})]),r("ul",t._l(t.words,function(e,a){return r("li",{key:a,class:{line:t.isDoneRu(e)}},[r("div",{staticClass:"remove"},[r("img",{staticClass:"remove",attrs:{src:n("546a"),alt:""},on:{click:function(e){t.remove(a)}}}),r("img",{staticClass:"remove",attrs:{src:n("3a63"),alt:""},on:{click:function(n){t.active(e)}}})]),r("div",{staticClass:"card"},[r("transition",{attrs:{name:"flip"}},[r("p",{key:e.active,staticClass:"word"},[t._v(t._s(e.active?e.front:e.back))])]),r("div",{staticClass:"input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbackRu,expression:"word.checkbackRu"}],staticClass:"translation",attrs:{type:"text",required:"",id:"translation",placeholder:"Enter a translation"},domProps:{value:e.checkbackRu},on:{keypress:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.checkedRu(e)},input:function(n){n.target.composing||t.$set(e,"checkbackRu",n.target.value)}}}),r("img",{directives:[{name:"show",rawName:"v-show",value:!e.doneRu,expression:"!word.doneRu"}],staticClass:"add",attrs:{src:n("8d2a")},on:{click:function(n){t.checkedRu(e)}}})]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.rightRu2,expression:"word.rightRu2"}],staticClass:"rightRu"},[t._v("Неверно")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.rightRu,expression:"word.rightRu"}],staticClass:"rightRu"},[t._v("Верно! Молодец!")])],1)])}))])}),i=[],s=(n("ac4d"),n("8a81"),n("ac6a"),{name:"WordRu",data:function(){return{newback:"",newfront:"",error:!1,error2:!1,words:[{back:"apple",active:!1,front:"яблоко",doneRu:!1,rightRu:!1,rightRu2:!1},{back:"home",active:!1,front:"дом",doneRu:!1,rightRu:!1,rightRu2:!1},{back:"orange",active:!1,front:"апельсин",doneRu:!1,rightRu:!1,rightRu2:!1},{back:"mother",active:!1,front:"мама",doneRu:!1,rightRu:!1,rightRu2:!1},{back:"father",active:!1,front:"папа",doneRu:!1,rightRu:!1,rightRu2:!1},{back:"car",front:"машина",active:!1,doneRu:!1,rightRu:!1,rightRu2:!1},{back:"hope",front:"надежда",active:!1,doneRu:!1,rightRu:!1,rightRu2:!1},{back:"how is it going?",front:"как идут дела?",active:!1,doneRu:!1,rightRu:!1,rightRu2:!1},{back:"talk to you later!",front:"поговорим с тобой позже!",active:!1,doneRu:!1,rightRu:!1,rightRu2:!1},{back:"all the same",front:"без разницы",active:!1,doneRu:!1,rightRu:!1,rightRu2:!1},{back:"believe it or not, but",front:"верите или нет, но",active:!1,doneRu:!1,rightRu:!1,rightRu2:!1},{back:"in a way / to a certain extent",front:"в каком-то смысле",activeRu:!1,doneRu:!1,rightRu:!1,rightRu2:!1},{back:"it’s a great idea!",front:"отличная идея!",active:!1,doneRu:!1,rightRu:!1,rightRu2:!1},{back:"thank you in advance!",front:"спасибо заранее!",active:!1,doneRu:!1,rightRu:!1,rightRu2:!1},{back:"after you!",front:"после вас!",active:!1,doneRu:!1,rightRu:!1,rightRu2:!1}]}},mounted:function(){if(localStorage.getItem("words"))try{this.words=JSON.parse(localStorage.getItem("words"))}catch(t){localStorage.removeItem("words")}},methods:{checkedRuWord:function(t,e){var n=!0,r=!1,a=void 0;try{for(var o,i=this.words[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var s=o.value;if(s[e]===t)return!0}}catch(t){r=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return!1},checkedRuWordRu:function(t,e,n){return t[n]===e},checkedRu:function(t){this.checkedRuWordRu(t,t.checkbackRu,"front")?(t.rightRu=!0,t.rightRu2=!1,t.doneRu=!0,this.saveWords()):(t.rightRu2=!0,t.rightRu=!1,t.doneRu=!1,t.checkbackRu="")},addWord:function(){this.newfront&&this.newback?this.checkedRuWord(this.newfront,"front")||this.checkedRuWord(this.newback,"back")?this.error2=!0:(this.words.push({back:this.newback,front:this.newfront,active:!1,doneRu:!1,rightRu:!1,rightRu2:!1}),this.error=!1,this.error2=!1,this.doneRu=!1):this.error=!0,this.newback=this.newfront="",this.saveWords()},active:function(t){t.active=!t.active},remove:function(t){this.words.splice(t,1),this.saveWords()},removeAll:function(t){this.words.splice(t),this.saveWords()},saveWords:function(){var t=JSON.stringify(this.words);localStorage.setItem("words",t)},isDoneRu:function(t){return t.doneRu},selectAll:function(t){this.doneRu=!this.doneRu;for(var e=0;e<this.words.length;e++)this.words[e].doneRu=this.doneRu;this.saveWords()}}}),c=s,d=(n("7c65"),n("2877")),u=Object(d["a"])(c,o,i,!1,null,"41ce3e01",null);u.options.__file="wordRuC.vue";var l=u.exports,h={name:"wordRu",components:{wordRuC:l}},v=h,f=Object(d["a"])(v,r,a,!1,null,null,null);f.options.__file="WordRu.vue";e["default"]=f.exports},"756a":function(t,e,n){"use strict";var r=n("27b6"),a=n.n(r);a.a},"7c65":function(t,e,n){"use strict";var r=n("c14a"),a=n.n(r);a.a},c14a:function(t,e,n){}}]);
//# sourceMappingURL=about.fc5f197b.js.map