import{a as Z}from"./chunk-XU5JI5OH.js";import{a as F,b as U}from"./chunk-5G4TXNVY.js";import{a as R}from"./chunk-D7XNJLRF.js";import{a as D,b as W}from"./chunk-ZR4COROV.js";import"./chunk-CIMHZVF3.js";import{Bb as V,Ob as H,Pb as J,mb as A,pb as L,zb as $}from"./chunk-WXYJVLKK.js";import{Bc as C,Cb as S,Dc as w,Ec as N,Fc as z,Ib as u,Nd as B,Ob as d,Qb as v,ac as m,bc as c,cc as _,f as I,g,ge as O,jc as k,je as T,lc as y,od as M,qb as s,vb as E,wd as P,xc as l,yc as x,zc as h}from"./chunk-AIHSUUH7.js";var j=I(Z());var K=I(V());function q(a,e){a&1&&_(0,"nz-spin",10)}function G(a,e){if(a&1&&(m(0,"p",11),l(1),c()),a&2){let n=y();s(),h("",n.seconds," s")}}function Q(a,e){if(a&1&&(m(0,"p",11),l(1),c()),a&2){let n=y();s(),C(" ",n.$t("_processing")," ",n.currentNumber," / ",n.countAll," ")}}var b=class a{constructor(e){this.notification=e}$t=T;submitting=!1;websiteList=O;isExportIcon=!1;seconds=0;currentNumber=0;countAll=0;ngOnInit(){}loadImage(e){return new Promise(n=>{if(!e)return n(null);let t=new Image;t.crossOrigin="Anonymous",t.onload=function(){n(t)},t.onerror=function(){n(null)},t.src=e})}imageToBase64(e,n=!0){return g(this,null,function*(){let t=yield this.loadImage(e.icon);if(t)try{let o=document.createElement("canvas");o.width=32,o.height=32,o.getContext("2d").drawImage(t,0,0,32,32);let r=o.toDataURL();return e.icon=r,r}catch{}else{if(!n)return;try{if(!e.icon)return;let i=yield J({url:e.icon});i.data.base64&&(e.icon=i.data.base64,yield this.imageToBase64(e,!1))}catch(i){let o=document.getElementById("error-msg");if(o){let p=`
          <a href="${e.icon}" target="_blank">${e.name} ${e.icon}</a>
          <div>${i.response?.data?.message||i.message}</div>
        `;o.innerHTML=p+o.innerHTML}}}})}bookmarksExport(){return g(this,null,function*(){if(!B())return this.notification.error("Error","Bad credentials");if(this.submitting)return;let e=this;this.seconds=0,this.countAll=0,this.currentNumber=0,this.submitting=!0;let n=setInterval(()=>{this.seconds+=1},1e3),t=JSON.parse(JSON.stringify(this.websiteList)),i=[];function o(p){Array.isArray(p)&&p.forEach(r=>{["id","rate","top","topTypes","index","ownVisible","breadcrumb","ok","__name__","__desc__","collapsed","tags"].forEach(f=>{delete r[f]}),Array.isArray(r.nav)&&o(r.nav),r.url&&i.push(e.imageToBase64(r).finally(()=>{e.currentNumber+=1}))})}this.isExportIcon&&(o(t),this.countAll=i.length,yield Promise.allSettled(i)),H({data:K.default.compress(JSON.stringify(t))}).then(p=>{let r="bookmarks.html",f=new Blob([p.data.data],{type:"text/html;charset=utf-8"});(0,j.saveAs)(f,r),this.notification.success("OK",r,{nzDuration:0})}).finally(()=>{this.submitting=!1,clearInterval(n)})})}static \u0275fac=function(n){return new(n||a)(E(R))};static \u0275cmp=S({type:a,selectors:[["system-bookmark-export"]],decls:16,vars:9,consts:[["nzSimple","","nzSize","large","class","text-center",4,"ngIf"],[1,"text-center"],[3,"ngModelChange","ngModel"],[1,"ml-2.5"],["class","mt-2.5",4,"ngIf"],[1,"book-wrapper","mt-2.5"],["src","assets/img/bookmark.svg","draggable","false",1,"logo",3,"click"],[1,"whitespace-nowrap","mt-2.5",3,"click"],[1,"err"],["id","error-msg"],["nzSimple","","nzSize","large",1,"text-center"],[1,"mt-2.5"]],template:function(n,t){n&1&&(u(0,q,1,0,"nz-spin",0),m(1,"div",1)(2,"nz-switch",2),z("ngModelChange",function(o){return N(t.isExportIcon,o)||(t.isExportIcon=o),o}),c(),m(3,"span",3),l(4),c(),u(5,G,2,1,"p",4)(6,Q,2,3,"p",4),c(),m(7,"div",5)(8,"div")(9,"img",6),k("click",function(){return t.bookmarksExport()}),c(),m(10,"p",7),k("click",function(){return t.bookmarksExport()}),l(11),c()()(),m(12,"div",8)(13,"h2"),l(14),c(),_(15,"pre",9),c()),n&2&&(d("ngIf",t.submitting),s(2),w("ngModel",t.isExportIcon),s(2),x(t.$t("_exportIcons")),s(),d("ngIf",t.seconds>0),s(),d("ngIf",t.countAll>0),s(5),h(" ",t.$t("_clickExport")," "),s(),v("noopacity",t.countAll>0),s(2),x(t.$t("_errorIcons")))},dependencies:[P,M,U,F,W,D,$,A,L],styles:[".book-wrapper[_ngcontent-%COMP%]{text-align:center}.book-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .book-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{cursor:pointer}#error-msg[_ngcontent-%COMP%]{white-space:pre-line;background-color:#f2f2f2;border-radius:8px;padding:0 12px}.err[_ngcontent-%COMP%]{opacity:0}.err.noopacity[_ngcontent-%COMP%]{opacity:1}"]})};export{b as default};
