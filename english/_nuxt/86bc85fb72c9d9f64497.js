(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{315:function(t,e,r){"use strict";r.r(e);r(125),r(321);var n=r(319),o=(r(45),r(46),r(24),r(37),r(81),r(11));e.default={data:function(){return{infoPractice:{},dictionaryWords:null,notEnoughWords:!1,timeout:null,setInterval:null,gameTime:60}},created:function(){this.getDBCards()},computed:{meanings:function(){return this.dictionaryWords||this.$store.getters.meanings||[]},practices:function(){return this.$store.state.appLogic.docsFB.practice||{}},loading:function(){return this.$store.state.appLogic.loading},isWordDictionary:function(){return this.$store.state.wordsForPractice.isWordDictionary}},methods:{getDBCards:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getDocFB",["structure","practice"]);case 2:t.t0=regeneratorRuntime.keys(this.practices);case 3:if((t.t1=t.t0()).done){t.next=10;break}if((e=t.t1.value)!=this.$options.name){t.next=8;break}return this.infoPractice=this.practices[e],t.abrupt("return",this.infoPractice);case 8:t.next=3;break;case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),startPractice:function(t){this.start=!0,this.wrongAnswers={},t&&this.setWordMeans()},timerGame:function(){var t=this;this.setInterval=setInterval(function(){t.gameTime>0?t.gameTime-=1:(clearInterval(t.setInterval),t.message="time's up",t.start=!1)},1e3)},stopPractice:function(){this.start=!1,this.keyColor="",this.checkPhrase=!1,this.meanId=0},getWordsFromDB:function(t){this.notEnoughWords=!1,this.dictionaryWords=[];var e=[],r=this.$store.state.appLogic.wordsForDictionary,n=!0,o=!1,c=void 0;try{for(var d,h=r[Symbol.iterator]();!(n=(d=h.next()).done);n=!0){var l=d.value;l.knowledge<10&&e.push(l)}}catch(t){o=!0,c=t}finally{try{n||null==h.return||h.return()}finally{if(o)throw c}}var m=this.randomIds(e.length);if(e.length>4){if(m.length>4){for(var f in m)this.dictionaryWords[f]=e[m[f]];return this.startPractice(t),this.dictionaryWords}this.getWordsFromDB(t)}else this.notEnoughWords=!0},getSkyengMeanings:function(t){var e=this;this.isWordDictionary&&this.user?this.$store.dispatch("getWordsFromDB").then(function(){e.getWordsFromDB(t)}):(this.dictionaryWords=null,this.$store.dispatch("getSkyengMeanings",this.randomIds(1e4)).then(function(){if(e.$store.state.appLogic.meanings.length===e.wordsCount)return e.startPractice(t),e.$store.state.appLogic.meanings;e.getSkyengMeanings(t)}))},setWordMeans:function(){var t=this;this.answers=[];_.cloneDeep(this.meanings).forEach(function(e){e.wrong||t.answers.push(e)}),this.sortArray(this.answers)},sortArray:function(t){t.sort(this.compareRandom)},compareRandom:function(a,b){return Math.random()-.5},getMeaningImg:function(t){return 0!=t.images.length?t.images[0].url:""},randomIds:function(t){for(var e=[],i=0;i<this.wordsCount;i++){var r=Math.floor(Math.random()*t);e[i]=r}return Object(n.a)(new Set(e))},setWrongAnswer:function(t){this.user&&t.id&&(delete t.color,this.$store.dispatch("addWordInDB",t)),t.wrong=!0,this.meanings.push(t),t.color="danger",this.wrongAnswers[t.id]=t},checkAnswer:function(t){var e=this;if(clearTimeout(this.timeout),this.meanings[this.meanId].id==t.id)this.isWordDictionary&&(t.knowledge+=1,this.$store.dispatch("addWordInDB",{id:"knowledge",knowledge:this.userKnowledge.knowledge+=1}),this.$store.dispatch("addWordInDB",t)),this.userKnowledge?this.$store.dispatch("addWordInDB",{id:"knowledge",knowledge:this.userKnowledge.knowledge+=1}):this.$store.dispatch("addWordInDB",{id:"knowledge",knowledge:1}),t.color="success",this.keyColor="success";else{t.color="danger";var r=!0,n=!1,o=void 0;try{for(var c,d=this.answers[Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var h=c.value;if(h.id==this.meanings[this.meanId].id){h.color="success";break}}}catch(t){n=!0,o=t}finally{try{r||null==d.return||d.return()}finally{if(n)throw o}}this.keyColor="danger",this.setWrongAnswer(t)}this.timeout=setTimeout(function(){e.setMeanId()},1e3)}}}},336:function(t,e,r){"use strict";r.r(e);r(45),r(46),r(24);var n={name:"card-game-definition",props:{_card:{type:Object}},computed:{isColorDark:function(){return this.$store.state.colorScheme.isColorDark},colorCard:function(){return this._card.selected?"info":this._card.correct?"success":this.isColorDark?"dark":"light"}}},o=r(18),c=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t._card?r("b-card",{staticClass:"mx-2 my-2",attrs:{"border-variant":t.isColorDark?"light":"dark",header:t._card.type,"text-variant":t.isColorDark?"light":"dark","bg-variant":t.colorCard,align:"center"},on:{click:function(e){return t.$emit("click",t._card)}}},[r("p",{staticClass:"card-text",class:t._card.selected?"bg-info text-white":""},[t._v(t._s(t._card.text)+"\n  ")])]):t._e()},[],!1,null,null,null).exports,d={props:{_title:{type:String},_text:{type:String}}},h=Object(o.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[e("b-row",{attrs:{"no-gutters":""}},[e("b-col",{attrs:{md:"6"}},[e("b-card-img",{staticClass:"rounded-0",attrs:{src:"/image/rules.jpg"}})],1),this._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-card-body",{attrs:{title:this._title}},[this._v("\n        "+this._s(this._text)+"\n      ")])],1)],1)],1)},[],!1,null,null,null).exports,l=(r(323),{name:"game-word-definition",components:{CardGameDefinition:c,Rules:h},data:function(){return{wordsCount:4,start:!1,meanId:0,count:0,keyColor:"",wrongAnswers:null,checkWord:!1,answers:[],answersForCheck:[],message:null}},beforeDestroy:function(){clearTimeout(this.timeout)},methods:{checkAnswer:function(t){var e=this;this.checkWord=!0,t.correct||t.selected||(1===this.answersForCheck.length?(this.answersForCheck.push(t),t.selected=!0,this.count+=1,this.timeout=setTimeout(function(){e.answersForCheck[0].id===e.answersForCheck[1].id?e.meanId<e.wordsCount?(e.answersForCheck.forEach(function(t){t.correct=!0,t.selected=!1}),e.setMeanId()):(e.answersForCheck.forEach(function(t){t.correct=!0,t.selected=!1}),e.stopGame(),e.message="You win"):(e.answersForCheck.forEach(function(t){t.selected=!1}),e.gameTime-=5),e.count=0,e.answersForCheck=[]},1e3)):this.answersForCheck.length<1&&(clearTimeout(this.timeout),this.answersForCheck.push(t),t.selected=!0,this.count+=1))},startPractice:function(t){this.start=!0,this.message=null,this.gameTime=60,this.timerGame(),this.wrongAnswers={},this.getAnswers()},stopGame:function(){this.start=!1,this.meanId=0,this.count=0,this.answers=[],clearTimeout(this.timeout)},getAnswers:function(){var t=!0,e=!1,r=void 0;try{for(var n,o=this.meanings[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var c=n.value,d={},h={};d.id=c.id,d.type="word",d.text=c.text,h.id=c.id,h.type="definition",h.text=c.definition.text,this.answers.push(h),this.answers.push(d)}}catch(t){e=!0,r=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}this.sortArray(this.answers)},setMeanId:function(){this.meanings&&this.meanId!=this.meanings.length-1?this.meanId+=1:(this.summation(),this.stopGame(),this.message="You win")}},mixins:[r(315).default,r(166).default]}),m=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-card",{attrs:{"no-body":""}},[r("b-tabs",{attrs:{card:""}},[r("b-tab",{attrs:{title:"Game"}},[r("b-card",{attrs:{align:"center"}},[t.start?t._e():r("b-button",{directives:[{name:"translate",rawName:"v-translate"}],on:{click:function(e){return t.getSkyengMeanings(!0)}}},[t._v("start")]),t._v(" "),t.start?r("h2",[t._v(t._s(t.gameTime))]):t._e(),t._v(" "),!t.start&&t.message?r("h2",[t._v(t._s(t.message))]):t._e()],1),t._v(" "),t.start?r("b-card-group",{key:t.count,staticClass:"mb-3",attrs:{deck:""}},t._l(t.answers,function(e,n){return r("card-game-definition",{key:n,staticStyle:{"min-width":"15rem"},attrs:{_card:e},on:{click:t.checkAnswer}})}),1):t._e()],1),t._v(" "),r("b-tab",{attrs:{title:"Rules"}},[r("rules",{attrs:{_title:"word-definition",_text:"In the game you need to choose word and connect it with its definition.You have 60 seconds. When you make the mistake the game time reduce by 5 second."}})],1)],1),t._v(" "),t.start?r("b-button",{directives:[{name:"translate",rawName:"v-translate"}],on:{click:t.stopGame}}):t._e()],1)],1)},[],!1,null,null,null);e.default=m.exports}}]);