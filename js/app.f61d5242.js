(function(e){function t(t){for(var a,l,s=t[0],i=t[1],u=t[2],d=0,p=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("calculator")],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calculator"},[n("h1",[e._v("Fortnite Season Pass Math")]),n("p",[e._v(" Update the fields below to calculate how many levels per day you need to max out your Fortnite season pass before it ends! ")]),n("p",[e._v(" Simply plug in your current level, and adjust the max level and season end date as you see fit. Fields automatically update when you change them. ")]),n("form",{staticClass:"form-container"},[n("fieldset",[n("label",{attrs:{for:""}},[e._v("Your current level:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userLevel,expression:"userLevel"}],attrs:{type:"number",name:"Your Level",id:"yourLevel",min:"0",max:"100",title:"min: 0, max: 100"},domProps:{value:e.userLevel},on:{input:[function(t){t.target.composing||(e.userLevel=t.target.value)},e.calcLevelsNeeded]}})]),n("fieldset",[n("label",{attrs:{for:""}},[e._v("Max level:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.maxLevel,expression:"maxLevel"}],attrs:{type:"number",name:"Maximum level",id:"maxLevel",min:"0",max:"100",title:"min: 0, max: 100"},domProps:{value:e.maxLevel},on:{input:[function(t){t.target.composing||(e.maxLevel=t.target.value)},e.calcLevelsNeeded]}})]),n("fieldset",[n("label",{attrs:{for:""}},[e._v("Season End:")]),n("date-picker",{attrs:{format:"MM-DD-YYYY"},on:{input:e.calcLevelsNeeded},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)]),n("div",{staticClass:"result"},[n("p",[e._v(" There are "),n("strong",[e._v(e._s(e.daysRemaining))]),e._v(" days remaining this season. ")]),n("p",[e._v(" You need to earn "),n("strong",[e._v(e._s(e.levelsPerDay))]),e._v(" levels every day to max out the battle pass in Fornite before it ends. ")])])])},s=[],i=n("ec45"),u=(n("411c"),{name:"calcuator",components:{DatePicker:i["a"]},props:{},mounted:function(){this.calcLevelsNeeded()},methods:{calcLevelsNeeded:function(){var e=this.endDate.getTime()-this.todaysDate.getTime();this.daysRemaining=e/864e5,this.levelsPerDay=Math.round((this.maxLevel-this.userLevel)/this.daysRemaining)}},data:function(){return{endDate:new Date([2021,3,15]),todaysDate:new Date,userLevel:0,maxLevel:100,daysRemaining:null,levelsPerDay:null}}}),c=u,d=(n("5a1a"),n("2877")),p=Object(d["a"])(c,l,s,!1,null,"265a1af6",null),v=p.exports,f={name:"App",components:{Calculator:v}},m=f,y=(n("5c0b"),Object(d["a"])(m,r,o,!1,null,null,null)),h=y.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(h)}}).$mount("#app")},"5a1a":function(e,t,n){"use strict";n("6306")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6306:function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.f61d5242.js.map