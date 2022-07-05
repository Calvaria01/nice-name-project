(function(){"use strict";var e={529:function(e,n,t){var r=t(963),l=t(252),o=t(577);const i=e=>((0,l.dD)("data-v-16d858e6"),e=e(),(0,l.Cn)(),e),u=i((()=>(0,l._)("h1",null,"Product Add",-1))),s={class:"buttons"},d=i((()=>(0,l._)("hr",null,null,-1))),c={id:"product_form",method:"post"},a=(0,l.Uk)(" SKU: "),p=i((()=>(0,l._)("input",{type:"text",id:"sku",name:"sku"},null,-1))),_={class:"error"},f=i((()=>(0,l._)("br",null,null,-1))),h=i((()=>(0,l._)("br",null,null,-1))),v=(0,l.Uk)(" Name: "),m=i((()=>(0,l._)("input",{type:"text",id:"name",name:"name"},null,-1))),b={class:"error"},w=i((()=>(0,l._)("br",null,null,-1))),g=i((()=>(0,l._)("br",null,null,-1))),k=(0,l.Uk)(" Price ($): "),y=i((()=>(0,l._)("input",{type:"text",id:"price",name:"price"},null,-1))),x={class:"error"},z=i((()=>(0,l._)("br",null,null,-1))),U=i((()=>(0,l._)("br",null,null,-1))),D=(0,l.Uk)(" Type Switcher "),O=i((()=>(0,l._)("option",{disabled:"",value:""},"Type Switcher",-1))),P=i((()=>(0,l._)("option",null,"DVD",-1))),C=i((()=>(0,l._)("option",null,"Book",-1))),T=i((()=>(0,l._)("option",null,"Furniture",-1))),j=[O,P,C,T],S={class:"error"},M={class:"params"},B={key:0},F=(0,l.Uk)(" Weight (KG): "),L=i((()=>(0,l._)("input",{type:"text",id:"weight",name:"weight"},null,-1))),W={class:"error"},E=i((()=>(0,l._)("br",null,null,-1))),H=i((()=>(0,l._)("br",null,null,-1))),I=(0,l.Uk)(" Please provide weight in KG "),K={key:1},V=(0,l.Uk)(" Size (MB): "),G=i((()=>(0,l._)("input",{type:"text",id:"size",name:"size"},null,-1))),Z={class:"error"},q=i((()=>(0,l._)("br",null,null,-1))),A=i((()=>(0,l._)("br",null,null,-1))),N=(0,l.Uk)(" Please provide size in MB format? "),Y={key:2},$=i((()=>(0,l._)("br",null,null,-1))),J=(0,l.Uk)(" Height (CM): "),Q=i((()=>(0,l._)("input",{type:"text",id:"height",name:"height"},null,-1))),R={class:"error"},X=i((()=>(0,l._)("br",null,null,-1))),ee=i((()=>(0,l._)("br",null,null,-1))),ne=(0,l.Uk)(" Width (CM): "),te=i((()=>(0,l._)("input",{type:"text",id:"width",name:"width"},null,-1))),re={class:"error"},le=i((()=>(0,l._)("br",null,null,-1))),oe=i((()=>(0,l._)("br",null,null,-1))),ie=(0,l.Uk)(" Length (CM): "),ue=i((()=>(0,l._)("input",{type:"text",id:"length",name:"length"},null,-1))),se={class:"error"},de=i((()=>(0,l._)("br",null,null,-1))),ce=i((()=>(0,l._)("br",null,null,-1))),ae=(0,l.Uk)(" Please provide dimensions in HxWxL format ");function pe(e,n,t,i,O,P){const C=(0,l.up)("page-footer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[u,(0,l._)("div",s,[(0,l._)("button",{onClick:n[0]||(n[0]=(...e)=>P.save&&P.save(...e))},"Save"),(0,l._)("button",{onClick:n[1]||(n[1]=(...e)=>P.toProdList&&P.toProdList(...e))},"Cancel")]),d,(0,l._)("form",c,[a,p,(0,l._)("div",_,(0,o.zw)(O.errs.sku),1),f,h,v,m,(0,l._)("div",b,(0,o.zw)(O.errs.name),1),w,g,k,y,(0,l._)("div",x,(0,o.zw)(O.errs.price),1),z,U,D,(0,l.wy)((0,l._)("select",{id:"productType",form:"product_form","onUpdate:modelValue":n[2]||(n[2]=e=>O.selected=e)},j,512),[[r.bM,O.selected]]),(0,l._)("div",S,(0,o.zw)(O.errs.productType),1),(0,l._)("div",M,["Book"===O.selected?((0,l.wg)(),(0,l.iD)("div",B,[F,L,(0,l._)("div",W,(0,o.zw)(O.errs.weight),1),E,H,I])):"DVD"===O.selected?((0,l.wg)(),(0,l.iD)("div",K,[V,G,(0,l._)("div",Z,(0,o.zw)(O.errs.size),1),q,A,N])):"Furniture"===O.selected?((0,l.wg)(),(0,l.iD)("div",Y,[$,J,Q,(0,l._)("div",R,(0,o.zw)(O.errs.height),1),X,ee,ne,te,(0,l._)("div",re,(0,o.zw)(O.errs.width),1),le,oe,ie,ue,(0,l._)("div",se,(0,o.zw)(O.errs.length),1),de,ce,ae])):(0,l.kq)("",!0)])]),(0,l._)("div",null,[(0,l.Wm)(C)])],64)}const _e=e=>((0,l.dD)("data-v-9f42d9c0"),e=e(),(0,l.Cn)(),e),fe={class:"footer"},he=_e((()=>(0,l._)("hr",null,null,-1))),ve=_e((()=>(0,l._)("div",null,"Scandiweb Test assignment",-1))),me=[he,ve];function be(e,n,t,r,o,i){return(0,l.wg)(),(0,l.iD)("div",fe,me)}var we={},ge=t(744);const ke=(0,ge.Z)(we,[["render",be],["__scopeId","data-v-9f42d9c0"]]);var ye=ke,xe={components:{PageFooter:ye},data(){return{selected:"",errs:{}}},methods:{save(){let e=new FormData(document.getElementById("product_form"));e.set("productType",this.selected),fetch("/save-product",{method:"POST",body:e}).then((e=>e.json())).then((e=>e.isErr?this.errs=e:document.location.href="/"))},toProdList(){document.location.href="/"}}};const ze=(0,ge.Z)(xe,[["render",pe],["__scopeId","data-v-16d858e6"]]);var Ue=ze;(0,r.ri)(Ue).mount("#app")}},n={};function t(r){var l=n[r];if(void 0!==l)return l.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,l,o){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],l=e[c][1],o=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(u=!1,o<i&&(i=o));if(u){e.splice(c--,1);var d=l();void 0!==d&&(n=d)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,l,o]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={40:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var l,o,i=r[0],u=r[1],s=r[2],d=0;if(i.some((function(n){return 0!==e[n]}))){for(l in u)t.o(u,l)&&(t.m[l]=u[l]);if(s)var c=s(t)}for(n&&n(r);d<i.length;d++)o=i[d],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},r=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(529)}));r=t.O(r)})();
//# sourceMappingURL=add.7df52de9.js.map