!function(n){var t={};function u(i){if(t[i])return t[i].exports;var e=t[i]={i:i,l:!1,exports:{}};return n[i].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=n,u.c=t,u.d=function(n,t,i){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,t){if(1&t&&(n=u(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)u.d(i,e,function(t){return n[t]}.bind(null,e));return i},u.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="",u(u.s=0)}([function(n,t,u){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var u=0;u<t.length;u++){var i=t[u];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function r(n,t,u){return t&&e(n.prototype,t),u&&e(n,u),n}u.r(t);var s=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;i(this,n),this.num1=t,this.num2=u,this.num3=e,this.num4=r,this.num5=s}return r(n,[{key:"Sum2",value:function(){return parseInt(this.num1+this.num2)}},{key:"Sum3",value:function(){return parseInt(this.num1+this.num2+this.num3)}},{key:"Sum4",value:function(){return parseInt(this.num1+this.num2+this.num3+this.num4+this.num5)}},{key:"Sum5",value:function(){return parseInt(this.num1+this.num2+this.num3+this.num4+this.num5)}}]),n}(),o=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;i(this,n),this.num1=t,this.num2=u,this.num3=e,this.num4=r,this.num5=s}return r(n,[{key:"Subs2",value:function(){return parseInt(this.num1-this.num2)}},{key:"Subs3",value:function(){return parseInt(this.num1-this.num2-this.num3)}},{key:"Subs4",value:function(){return parseInt(this.num1-this.num2-this.num3-this.num4-this.num5)}},{key:"Subs5",value:function(){return parseInt(this.num1-this.num2-this.num3-this.num4-this.num5)}}]),n}(),h=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;i(this,n),this.num1=t,this.num2=u,this.num3=e,this.num4=r,this.num5=s}return r(n,[{key:"Multi2",value:function(){return parseInt(this.num1*this.num2)}},{key:"Multi3",value:function(){return parseInt(this.num1*this.num2*this.num3)}},{key:"Multi4",value:function(){return parseInt(this.num1*this.num2*this.num3*this.num4*this.num5)}},{key:"Multi5",value:function(){return parseInt(this.num1*this.num2*this.num3*this.num4*this.num5)}}]),n}(),m=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;i(this,n),this.num1=t,this.num2=u,this.num3=e,this.num4=r,this.num5=s}return r(n,[{key:"Divi2",value:function(){return parseInt(this.num1/this.num2)}},{key:"Divi3",value:function(){return parseInt(this.num1/this.num2/this.num3)}},{key:"Divi4",value:function(){return parseInt(this.num1/this.num2/this.num3/this.num4/this.num5)}},{key:"Divi5",value:function(){return parseInt(this.num1/this.num2/this.num3/this.num4/this.num5)}}]),n}(),l=new s(10,4,6,9,2).Sum5();console.log(l);var a=new o(10,4,6,9,2).Subs5();console.log(a);var c=new h(10,4,6,9,2).Multi5();console.log(c);var v=new m(10,4,6,9,2).Divi5();console.log(v)}]);