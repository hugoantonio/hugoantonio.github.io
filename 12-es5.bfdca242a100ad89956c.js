(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8cDG":function(t,n,e){"use strict";e.r(n);var i=e("CcnG"),l=function(){return function(){}}(),s=e("pMnS"),o=e("oBZk"),r=e("ZZ/e"),u=e("Ip0R"),a=e("AW2b"),h=e("gIcY"),c=(e("mrSG"),e("yLV6")),p=function(t){return t[t.Bottom=0]="Bottom",t[t.Docked=1]="Docked",t[t.Top=2]="Top",t}({}),d=function(){function t(t,n,e,l){this._element=t,this._renderer=n,this._domCtrl=e,this._platform=l,this.dockedHeight=50,this.shouldBounce=!0,this.disableDrag=!1,this.distanceTop=0,this.transition="0.25s ease-in-out",this.state=p.Bottom,this.minimumHeight=0,this.stateChange=new i.m,this._BOUNCE_DELTA=30}return t.prototype.ngAfterViewInit=function(){var t=this;this._renderer.setStyle(this._element.nativeElement.querySelector(".ion-bottom-drawer-scrollable-content :first-child"),"touch-action","none"),this._setDrawerState(this.state);var n=new c(this._element.nativeElement);n.get("pan").set({enable:!0,direction:c.DIRECTION_VERTICAL}),n.on("pan panstart panend",function(n){if(!t.disableDrag)switch(n.type){case"panstart":t._handlePanStart();break;case"panend":t._handlePanEnd(n);break;default:t._handlePan(n)}})},t.prototype.ngOnChanges=function(t){t.state&&this._setDrawerState(t.state.currentValue)},t.prototype._setDrawerState=function(t){switch(this._renderer.setStyle(this._element.nativeElement,"transition",this.transition),t){case p.Bottom:this._setTranslateY("calc(100vh - "+this.minimumHeight+"px)");break;case p.Docked:this._setTranslateY(this._platform.height()-this.dockedHeight+"px");break;default:this._setTranslateY(this.distanceTop+"px")}},t.prototype._handlePanStart=function(){this._startPositionTop=this._element.nativeElement.getBoundingClientRect().top},t.prototype._handlePanEnd=function(t){if(this.shouldBounce&&t.isFinal)switch(this._renderer.setStyle(this._element.nativeElement,"transition",this.transition),this.state){case p.Docked:this._handleDockedPanEnd(t);break;case p.Top:this._handleTopPanEnd(t);break;default:this._handleBottomPanEnd(t)}this.stateChange.emit(this.state)},t.prototype._handleTopPanEnd=function(t){t.deltaY>this._BOUNCE_DELTA?this.state=p.Docked:this._setTranslateY(this.distanceTop+"px")},t.prototype._handleDockedPanEnd=function(t){var n=Math.abs(t.deltaY);n>this._BOUNCE_DELTA&&t.deltaY<0?this.state=p.Top:n>this._BOUNCE_DELTA&&t.deltaY>0?this.state=p.Bottom:this._setTranslateY(this._platform.height()-this.dockedHeight+"px")},t.prototype._handleBottomPanEnd=function(t){-t.deltaY>this._BOUNCE_DELTA?this.state=p.Docked:this._setTranslateY("calc(100vh - "+this.minimumHeight+"px)")},t.prototype._handlePan=function(t){var n=t.center.y;if(this._renderer.setStyle(this._element.nativeElement,"transition","none"),n>0&&n<this._platform.height()&&("panup"===t.additionalEvent||"pandown"===t.additionalEvent)){var e=this._startPositionTop+t.deltaY;e>=this.distanceTop?this._setTranslateY(e+"px"):e<this.distanceTop&&this._setTranslateY(this.distanceTop+"px"),e>this._platform.height()-this.minimumHeight&&this._setTranslateY(this._platform.height()-this.minimumHeight+"px")}},t.prototype._setTranslateY=function(t){var n=this;this._domCtrl.write(function(){n._renderer.setStyle(n._element.nativeElement,"transform","translateY("+t+")")})},t}(),f=function(){return function(){}}(),m=i.rb({encapsulation:0,styles:["[_nghost-%COMP%]{width:100%;height:100%;position:absolute;left:0;z-index:11!important;background-color:#fff;-webkit-transform:translateY(100vh);transform:translateY(100vh)}"],data:{}});function g(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,2,"ion-content",[["class","ion-bottom-drawer-scrollable-content"],["no-bounce",""]],null,null,null,o.C,o.g)),i.sb(1,49152,null,0,r.s,[i.h,i.k,i.z],null,null),i.Db(0,0)],null,null)}var v=function(){return function(t){this.plt=t,this.shouldBounce=!0,this.dockedHeight=310,this.distanceTop=65,this.drawerState=p.Top,this.states=p,this.minimumHeight=80,this.intervals=[{name:"Heute",date:"10. Juni"},{name:"Gestern",date:"9. Juni"}],this.futureMovements=[{party:"Simon Youssef",inc:!1,date:"10. Juni",value:"10.20"},{party:"Sunrise",inc:!1,date:"10. Juni",value:"25.00"}],this.movements=[{party:"Starbucks Coffee Zurich",inc:!1,date:"10. Juni",value:"10.20"},{party:"Sunrise",inc:!1,date:"10. Juni",value:"25.00"},{party:"Laura Meier",inc:!0,date:"10. Juni",value:"120.00"},{party:"Hypothekarbank Lenzburg",inc:!1,date:"9. Juni",value:"25.23"},{party:"Shell",inc:!1,date:"9. Juni",value:"35.00"},{party:"Stadttheater",inc:!1,date:"9. Juni",value:"34.00"},{party:"myclubs",inc:!1,date:"9. Juni",value:"25.12"}]}}(),b=i.rb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]{background:linear-gradient(165deg,#ff001e 0,#ff0323 5%,#ff3282 100%)}ion-header[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%]{height:65px;padding:32px 19px 13px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;font-size:20px}ion-header[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{padding:5px 19px}ion-header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{--icon-color:white;--color:white;--clear-button-color:white;--background:transparent;border-bottom:1px solid #fff;height:30px;padding:0!important;margin-bottom:15px}ion-header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{left:0!important;width:16px}ion-header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]   .sc-ion-searchbar-md[_ngcontent-%COMP%]{box-shadow:none!important}ion-content[_ngcontent-%COMP%]{--overflow:hidden;--ion-background-color:#f7f7f7}ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:-webkit-box;display:flex;color:#333}ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .movement-details-left[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 0 auto;display:-webkit-box;display:flex;margin-right:20px}ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .movement-details-right[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 1 auto}ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .text-details__date[_ngcontent-%COMP%]{opacity:.5}ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .party-image[_ngcontent-%COMP%]{height:36px;width:auto;margin-right:20px}.interval-title[_ngcontent-%COMP%]{margin-left:18px;margin-top:20px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase}"]],data:{}});function y(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),i.Kb(-1,null,["-"]))],null,null)}function T(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,22,"ion-item-sliding",[],null,null,null,o.H,o.m)),i.sb(1,49152,null,0,r.K,[i.h,i.k,i.z],null,null),(t()(),i.tb(2,0,null,0,15,"ion-item",[],null,null,null,o.I,o.j)),i.sb(3,49152,null,0,r.F,[i.h,i.k,i.z],null,null),(t()(),i.tb(4,0,null,0,13,"ion-label",[],null,null,null,o.J,o.n)),i.sb(5,49152,null,0,r.L,[i.h,i.k,i.z],null,null),(t()(),i.tb(6,0,null,0,6,"div",[["class","movement-details-left"]],null,null,null,null,null)),(t()(),i.tb(7,0,null,null,0,"img",[["class","party-image"],["src","assets/images/starbucks.png"]],null,null,null,null,null)),(t()(),i.tb(8,0,null,null,4,"div",[["class","text-details"]],null,null,null,null,null)),(t()(),i.tb(9,0,null,null,1,"h2",[["class","text-details__party"]],null,null,null,null,null)),(t()(),i.Kb(10,null,["",""])),(t()(),i.tb(11,0,null,null,1,"p",[["class","text-details__date"]],null,null,null,null,null)),(t()(),i.Kb(12,null,["",""])),(t()(),i.tb(13,0,null,0,4,"div",[["class","movement-details-right"]],null,null,null,null,null)),(t()(),i.ib(16777216,null,null,1,null,y)),i.sb(15,16384,null,0,u.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(t()(),i.tb(16,0,null,null,1,"span",[],[[8,"innerHTML",1]],null,null,null,null)),i.Gb(17,1),(t()(),i.tb(18,0,null,0,4,"ion-item-options",[["side","end"]],null,null,null,o.G,o.l)),i.sb(19,49152,null,0,r.J,[i.h,i.k,i.z],{side:[0,"side"]},null),(t()(),i.tb(20,0,null,0,2,"ion-item-option",[],null,null,null,o.F,o.k)),i.sb(21,49152,null,0,r.I,[i.h,i.k,i.z],null,null),(t()(),i.Kb(-1,0,["Delete"]))],function(t,n){t(n,15,0,!n.context.$implicit.inc),t(n,19,0,"end")},function(t,n){t(n,10,0,n.context.$implicit.party),t(n,12,0,n.context.$implicit.date);var e=i.Lb(n,16,0,t(n,17,0,i.Eb(n.parent,0),n.context.$implicit.value));t(n,16,0,e)})}function _(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),i.Kb(-1,null,["-"]))],null,null)}function C(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,21,null,null,null,null,null,null,null)),(t()(),i.tb(1,0,null,null,15,"ion-item",[],null,null,null,o.I,o.j)),i.sb(2,49152,null,0,r.F,[i.h,i.k,i.z],null,null),(t()(),i.tb(3,0,null,0,13,"ion-label",[],null,null,null,o.J,o.n)),i.sb(4,49152,null,0,r.L,[i.h,i.k,i.z],null,null),(t()(),i.tb(5,0,null,0,6,"div",[["class","movement-details-left"]],null,null,null,null,null)),(t()(),i.tb(6,0,null,null,0,"img",[["class","party-image"],["src","assets/images/starbucks.png"]],null,null,null,null,null)),(t()(),i.tb(7,0,null,null,4,"div",[["class","text-details"]],null,null,null,null,null)),(t()(),i.tb(8,0,null,null,1,"h2",[["class","text-details__party"]],null,null,null,null,null)),(t()(),i.Kb(9,null,["",""])),(t()(),i.tb(10,0,null,null,1,"p",[["class","text-details__date"]],null,null,null,null,null)),(t()(),i.Kb(11,null,["",""])),(t()(),i.tb(12,0,null,0,4,"div",[["class","movement-details-right"]],null,null,null,null,null)),(t()(),i.ib(16777216,null,null,1,null,_)),i.sb(14,16384,null,0,u.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(t()(),i.tb(15,0,null,null,1,"span",[],[[8,"innerHTML",1]],null,null,null,null)),i.Gb(16,1),(t()(),i.tb(17,0,null,null,4,"ion-item-options",[["side","end"]],null,null,null,o.G,o.l)),i.sb(18,49152,null,0,r.J,[i.h,i.k,i.z],{side:[0,"side"]},null),(t()(),i.tb(19,0,null,0,2,"ion-item-option",[],null,null,null,o.F,o.k)),i.sb(20,49152,null,0,r.I,[i.h,i.k,i.z],null,null),(t()(),i.Kb(-1,0,["Delete"]))],function(t,n){t(n,14,0,!n.parent.context.$implicit.inc),t(n,18,0,"end")},function(t,n){t(n,9,0,n.parent.context.$implicit.party),t(n,11,0,n.parent.context.$implicit.date);var e=i.Lb(n,15,0,t(n,16,0,i.Eb(n.parent.parent.parent,0),n.parent.context.$implicit.value));t(n,15,0,e)})}function E(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,3,"ion-item-sliding",[],null,null,null,o.H,o.m)),i.sb(1,49152,null,0,r.K,[i.h,i.k,i.z],null,null),(t()(),i.ib(16777216,null,0,1,null,C)),i.sb(3,16384,null,0,u.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],function(t,n){t(n,3,0,n.context.$implicit.date===n.parent.context.$implicit.date)},null)}function x(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,5,"ion-list",[["lines","none"]],null,null,null,o.L,o.o)),i.sb(1,49152,null,0,r.M,[i.h,i.k,i.z],{lines:[0,"lines"]},null),(t()(),i.tb(2,0,null,0,1,"p",[["class","interval-title"]],null,null,null,null,null)),(t()(),i.Kb(3,null,["",""])),(t()(),i.ib(16777216,null,0,1,null,E)),i.sb(5,278528,null,0,u.h,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){var e=n.component;t(n,1,0,"none"),t(n,5,0,e.movements)},function(t,n){t(n,3,0,n.context.$implicit.name)})}function P(t){return i.Mb(0,[i.Fb(0,a.a,[]),(t()(),i.tb(1,0,null,null,15,"ion-header",[["no-border",""]],null,null,null,o.D,o.h)),i.sb(2,49152,null,0,r.z,[i.h,i.k,i.z],null,null),(t()(),i.tb(3,0,null,0,8,"div",[["class","main-header"]],null,null,null,null,null)),(t()(),i.tb(4,0,null,null,1,"span",[["class","page-title"]],null,null,null,null,null)),(t()(),i.Kb(-1,null,["Kontostand"])),(t()(),i.tb(6,0,null,null,5,"span",[],null,null,null,null,null)),(t()(),i.Kb(-1,null,[" CHF "])),(t()(),i.tb(8,0,null,null,3,"span",[],null,null,null,null,null)),(t()(),i.tb(9,0,null,null,1,"b",[],null,null,null,null,null)),(t()(),i.Kb(-1,null,["3'149."])),(t()(),i.Kb(-1,null,["98"])),(t()(),i.tb(12,0,null,0,4,"div",[["class","search-box"]],null,null,null,null,null)),(t()(),i.tb(13,0,null,null,3,"ion-searchbar",[["placeholder","Suchen"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(t,n,e){var l=!0;return"ionBlur"===n&&(l=!1!==i.Eb(t,16)._handleBlurEvent(e.target)&&l),"ionChange"===n&&(l=!1!==i.Eb(t,16)._handleInputEvent(e.target)&&l),l},o.M,o.q)),i.Hb(5120,null,h.b,function(t){return[t]},[r.Hb]),i.sb(15,49152,null,0,r.hb,[i.h,i.k,i.z],{placeholder:[0,"placeholder"]},null),i.sb(16,16384,null,0,r.Hb,[i.k],null,null),(t()(),i.tb(17,0,null,null,7,"ion-content",[["no-bounce",""]],null,null,null,o.C,o.g)),i.sb(18,49152,null,0,r.s,[i.h,i.k,i.z],null,null),(t()(),i.tb(19,0,null,0,5,"ion-list",[["lines","none"]],null,null,null,o.L,o.o)),i.sb(20,49152,null,0,r.M,[i.h,i.k,i.z],{lines:[0,"lines"]},null),(t()(),i.tb(21,0,null,0,1,"p",[["class","interval-title"]],null,null,null,null,null)),(t()(),i.Kb(-1,null,["Zukunftige"])),(t()(),i.ib(16777216,null,0,1,null,T)),i.sb(24,278528,null,0,u.h,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(t()(),i.tb(25,0,null,null,5,"ion-bottom-drawer",[],null,[[null,"stateChange"]],function(t,n,e){var i=!0;return"stateChange"===n&&(i=!1!==(t.component.drawerState=e)&&i),i},g,m)),i.sb(26,4767744,null,0,d,[i.k,i.D,r.c,r.Fb],{dockedHeight:[0,"dockedHeight"],shouldBounce:[1,"shouldBounce"],distanceTop:[2,"distanceTop"],state:[3,"state"],minimumHeight:[4,"minimumHeight"]},{stateChange:"stateChange"}),(t()(),i.tb(27,0,null,0,3,"div",[["class","drawer-content"]],null,null,null,null,null)),(t()(),i.tb(28,0,null,null,0,"div",[["class","neon-handle"]],null,null,null,null,null)),(t()(),i.ib(16777216,null,null,1,null,x)),i.sb(30,278528,null,0,u.h,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){var e=n.component;t(n,15,0,"Suchen"),t(n,20,0,"none"),t(n,24,0,e.futureMovements),t(n,26,0,e.dockedHeight,e.shouldBounce,e.distanceTop,e.drawerState,e.minimumHeight),t(n,30,0,e.intervals)},null)}function M(t){return i.Mb(0,[(t()(),i.tb(0,0,null,null,1,"app-tab2",[],null,null,null,P,b)),i.sb(1,49152,null,0,v,[r.Fb],null,null)],null,null)}var O=i.pb("app-tab2",v,M,{},{},[]),k=e("KZX/"),w=e("ZYCi");e.d(n,"Tab2PageModuleNgFactory",function(){return I});var I=i.qb(l,[],function(t){return i.Bb([i.Cb(512,i.j,i.bb,[[8,[s.a,O]],[3,i.j],i.x]),i.Cb(4608,u.k,u.j,[i.u,[2,u.q]]),i.Cb(4608,r.a,r.a,[i.z,i.g]),i.Cb(4608,r.Db,r.Db,[r.a,i.j,i.q]),i.Cb(4608,r.Gb,r.Gb,[r.a,i.j,i.q]),i.Cb(4608,h.d,h.d,[]),i.Cb(1073742336,u.b,u.b,[]),i.Cb(1073742336,r.Bb,r.Bb,[]),i.Cb(1073742336,h.c,h.c,[]),i.Cb(1073742336,h.a,h.a,[]),i.Cb(1073742336,f,f,[]),i.Cb(1073742336,k.a,k.a,[]),i.Cb(1073742336,w.n,w.n,[[2,w.s],[2,w.m]]),i.Cb(1073742336,l,l,[]),i.Cb(1024,w.k,function(){return[[{path:"",component:v}]]},[])])})},yLV6:function(t,n,e){var i;!function(l,s,o,r){"use strict";var u,a=["","webkit","Moz","MS","ms","o"],h=s.createElement("div"),c="function",p=Math.round,d=Math.abs,f=Date.now;function m(t,n,e){return setTimeout(C(t,e),n)}function g(t,n,e){return!!Array.isArray(t)&&(v(t,e[n],e),!0)}function v(t,n,e){var i;if(t)if(t.forEach)t.forEach(n,e);else if(t.length!==r)for(i=0;i<t.length;)n.call(e,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&n.call(e,t[i],i,t)}function b(t,n,e){var i="DEPRECATED METHOD: "+n+"\n"+e+" AT \n";return function(){var n=new Error("get-stack-trace"),e=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=l.console&&(l.console.warn||l.console.log);return s&&s.call(l.console,i,e),t.apply(this,arguments)}}u="function"!=typeof Object.assign?function(t){if(t===r||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),e=1;e<arguments.length;e++){var i=arguments[e];if(i!==r&&null!==i)for(var l in i)i.hasOwnProperty(l)&&(n[l]=i[l])}return n}:Object.assign;var y=b(function(t,n,e){for(var i=Object.keys(n),l=0;l<i.length;)(!e||e&&t[i[l]]===r)&&(t[i[l]]=n[i[l]]),l++;return t},"extend","Use `assign`."),T=b(function(t,n){return y(t,n,!0)},"merge","Use `assign`.");function _(t,n,e){var i,l=n.prototype;(i=t.prototype=Object.create(l)).constructor=t,i._super=l,e&&u(i,e)}function C(t,n){return function(){return t.apply(n,arguments)}}function E(t,n){return typeof t==c?t.apply(n&&n[0]||r,n):t}function x(t,n){return t===r?n:t}function P(t,n,e){v(w(n),function(n){t.addEventListener(n,e,!1)})}function M(t,n,e){v(w(n),function(n){t.removeEventListener(n,e,!1)})}function O(t,n){for(;t;){if(t==n)return!0;t=t.parentNode}return!1}function k(t,n){return t.indexOf(n)>-1}function w(t){return t.trim().split(/\s+/g)}function I(t,n,e){if(t.indexOf&&!e)return t.indexOf(n);for(var i=0;i<t.length;){if(e&&t[i][e]==n||!e&&t[i]===n)return i;i++}return-1}function D(t){return Array.prototype.slice.call(t,0)}function S(t,n,e){for(var i=[],l=[],s=0;s<t.length;){var o=n?t[s][n]:t[s];I(l,o)<0&&i.push(t[s]),l[s]=o,s++}return e&&(i=n?i.sort(function(t,e){return t[n]>e[n]}):i.sort()),i}function A(t,n){for(var e,i,l=n[0].toUpperCase()+n.slice(1),s=0;s<a.length;){if((i=(e=a[s])?e+l:n)in t)return i;s++}return r}var z=1;function Y(t){var n=t.ownerDocument||t;return n.defaultView||n.parentWindow||l}var H="ontouchstart"in l,L=A(l,"PointerEvent")!==r,F=H&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),R=25,N=1,B=4,X=8,q=1,K=2,W=4,j=8,J=16,U=K|W,V=j|J,G=U|V,$=["x","y"],Z=["clientX","clientY"];function Q(t,n){var e=this;this.manager=t,this.callback=n,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(n){E(t.options.enable,[t])&&e.handler(n)},this.init()}function tt(t,n,e){var i=e.pointers.length,l=e.changedPointers.length,s=n&N&&i-l==0,o=n&(B|X)&&i-l==0;e.isFirst=!!s,e.isFinal=!!o,s&&(t.session={}),e.eventType=n,function(t,n){var e=t.session,i=n.pointers,l=i.length;e.firstInput||(e.firstInput=nt(n)),l>1&&!e.firstMultiple?e.firstMultiple=nt(n):1===l&&(e.firstMultiple=!1);var s=e.firstInput,o=e.firstMultiple,u=o?o.center:s.center,a=n.center=et(i);n.timeStamp=f(),n.deltaTime=n.timeStamp-s.timeStamp,n.angle=ot(u,a),n.distance=st(u,a),function(t,n){var e=n.center,i=t.offsetDelta||{},l=t.prevDelta||{},s=t.prevInput||{};n.eventType!==N&&s.eventType!==B||(l=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},i=t.offsetDelta={x:e.x,y:e.y}),n.deltaX=l.x+(e.x-i.x),n.deltaY=l.y+(e.y-i.y)}(e,n),n.offsetDirection=lt(n.deltaX,n.deltaY);var h,c,p=it(n.deltaTime,n.deltaX,n.deltaY);n.overallVelocityX=p.x,n.overallVelocityY=p.y,n.overallVelocity=d(p.x)>d(p.y)?p.x:p.y,n.scale=o?(h=o.pointers,st((c=i)[0],c[1],Z)/st(h[0],h[1],Z)):1,n.rotation=o?function(t,n){return ot(i[1],i[0],Z)+ot(t[1],t[0],Z)}(o.pointers):0,n.maxPointers=e.prevInput?n.pointers.length>e.prevInput.maxPointers?n.pointers.length:e.prevInput.maxPointers:n.pointers.length,function(t,n){var e,i,l,s,o=t.lastInterval||n,u=n.timeStamp-o.timeStamp;if(n.eventType!=X&&(u>R||o.velocity===r)){var a=n.deltaX-o.deltaX,h=n.deltaY-o.deltaY,c=it(u,a,h);i=c.x,l=c.y,e=d(c.x)>d(c.y)?c.x:c.y,s=lt(a,h),t.lastInterval=n}else e=o.velocity,i=o.velocityX,l=o.velocityY,s=o.direction;n.velocity=e,n.velocityX=i,n.velocityY=l,n.direction=s}(e,n);var m=t.element;O(n.srcEvent.target,m)&&(m=n.srcEvent.target),n.target=m}(t,e),t.emit("hammer.input",e),t.recognize(e),t.session.prevInput=e}function nt(t){for(var n=[],e=0;e<t.pointers.length;)n[e]={clientX:p(t.pointers[e].clientX),clientY:p(t.pointers[e].clientY)},e++;return{timeStamp:f(),pointers:n,center:et(n),deltaX:t.deltaX,deltaY:t.deltaY}}function et(t){var n=t.length;if(1===n)return{x:p(t[0].clientX),y:p(t[0].clientY)};for(var e=0,i=0,l=0;l<n;)e+=t[l].clientX,i+=t[l].clientY,l++;return{x:p(e/n),y:p(i/n)}}function it(t,n,e){return{x:n/t||0,y:e/t||0}}function lt(t,n){return t===n?q:d(t)>=d(n)?t<0?K:W:n<0?j:J}function st(t,n,e){e||(e=$);var i=n[e[0]]-t[e[0]],l=n[e[1]]-t[e[1]];return Math.sqrt(i*i+l*l)}function ot(t,n,e){return e||(e=$),180*Math.atan2(n[e[1]]-t[e[1]],n[e[0]]-t[e[0]])/Math.PI}Q.prototype={handler:function(){},init:function(){this.evEl&&P(this.element,this.evEl,this.domHandler),this.evTarget&&P(this.target,this.evTarget,this.domHandler),this.evWin&&P(Y(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&M(this.element,this.evEl,this.domHandler),this.evTarget&&M(this.target,this.evTarget,this.domHandler),this.evWin&&M(Y(this.element),this.evWin,this.domHandler)}};var rt={mousedown:N,mousemove:2,mouseup:B},ut="mousedown",at="mousemove mouseup";function ht(){this.evEl=ut,this.evWin=at,this.pressed=!1,Q.apply(this,arguments)}_(ht,Q,{handler:function(t){var n=rt[t.type];n&N&&0===t.button&&(this.pressed=!0),2&n&&1!==t.which&&(n=B),this.pressed&&(n&B&&(this.pressed=!1),this.callback(this.manager,n,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var ct={pointerdown:N,pointermove:2,pointerup:B,pointercancel:X,pointerout:X},pt={2:"touch",3:"pen",4:"mouse",5:"kinect"},dt="pointerdown",ft="pointermove pointerup pointercancel";function mt(){this.evEl=dt,this.evWin=ft,Q.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}l.MSPointerEvent&&!l.PointerEvent&&(dt="MSPointerDown",ft="MSPointerMove MSPointerUp MSPointerCancel"),_(mt,Q,{handler:function(t){var n=this.store,e=!1,i=t.type.toLowerCase().replace("ms",""),l=ct[i],s=pt[t.pointerType]||t.pointerType,o="touch"==s,r=I(n,t.pointerId,"pointerId");l&N&&(0===t.button||o)?r<0&&(n.push(t),r=n.length-1):l&(B|X)&&(e=!0),r<0||(n[r]=t,this.callback(this.manager,l,{pointers:n,changedPointers:[t],pointerType:s,srcEvent:t}),e&&n.splice(r,1))}});var gt={touchstart:N,touchmove:2,touchend:B,touchcancel:X},vt="touchstart",bt="touchstart touchmove touchend touchcancel";function yt(){this.evTarget=vt,this.evWin=bt,this.started=!1,Q.apply(this,arguments)}_(yt,Q,{handler:function(t){var n=gt[t.type];if(n===N&&(this.started=!0),this.started){var e=(function(t,n){var e=D(t.touches),i=D(t.changedTouches);return n&(B|X)&&(e=S(e.concat(i),"identifier",!0)),[e,i]}).call(this,t,n);n&(B|X)&&e[0].length-e[1].length==0&&(this.started=!1),this.callback(this.manager,n,{pointers:e[0],changedPointers:e[1],pointerType:"touch",srcEvent:t})}}});var Tt={touchstart:N,touchmove:2,touchend:B,touchcancel:X},_t="touchstart touchmove touchend touchcancel";function Ct(){this.evTarget=_t,this.targetIds={},Q.apply(this,arguments)}_(Ct,Q,{handler:function(t){var n=Tt[t.type],e=(function(t,n){var e=D(t.touches),i=this.targetIds;if(n&(2|N)&&1===e.length)return i[e[0].identifier]=!0,[e,e];var l,s,o=D(t.changedTouches),r=[],u=this.target;if(s=e.filter(function(t){return O(t.target,u)}),n===N)for(l=0;l<s.length;)i[s[l].identifier]=!0,l++;for(l=0;l<o.length;)i[o[l].identifier]&&r.push(o[l]),n&(B|X)&&delete i[o[l].identifier],l++;return r.length?[S(s.concat(r),"identifier",!0),r]:void 0}).call(this,t,n);e&&this.callback(this.manager,n,{pointers:e[0],changedPointers:e[1],pointerType:"touch",srcEvent:t})}});var Et=2500;function xt(){Q.apply(this,arguments);var t=C(this.handler,this);this.touch=new Ct(this.manager,t),this.mouse=new ht(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Pt(t){var n=t.changedPointers[0];if(n.identifier===this.primaryTouch){var e={x:n.clientX,y:n.clientY};this.lastTouches.push(e);var i=this.lastTouches;setTimeout(function(){var t=i.indexOf(e);t>-1&&i.splice(t,1)},Et)}}_(xt,Q,{handler:function(t,n,e){var i="mouse"==e.pointerType;if(!(i&&e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents)){if("touch"==e.pointerType)(function(t,n){t&N?(this.primaryTouch=n.changedPointers[0].identifier,Pt.call(this,n)):t&(B|X)&&Pt.call(this,n)}).call(this,n,e);else if(i&&(function(t){for(var n=t.srcEvent.clientX,e=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var l=this.lastTouches[i],s=Math.abs(n-l.x),o=Math.abs(e-l.y);if(s<=25&&o<=25)return!0}return!1}).call(this,e))return;this.callback(t,n,e)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Mt=A(h.style,"touchAction"),Ot=Mt!==r,kt=function(){if(!Ot)return!1;var t={},n=l.CSS&&l.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(e){t[e]=!n||l.CSS.supports("touch-action",e)}),t}();function wt(t,n){this.manager=t,this.set(n)}wt.prototype={set:function(t){"compute"==t&&(t=this.compute()),Ot&&this.manager.element.style&&kt[t]&&(this.manager.element.style[Mt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return v(this.manager.recognizers,function(n){E(n.options.enable,[n])&&(t=t.concat(n.getTouchAction()))}),function(t){if(k(t,"none"))return"none";var n=k(t,"pan-x"),e=k(t,"pan-y");return n&&e?"none":n||e?n?"pan-x":"pan-y":k(t,"manipulation")?"manipulation":"auto"}(t.join(" "))},preventDefaults:function(t){var n=t.srcEvent,e=t.offsetDirection;if(this.manager.session.prevented)n.preventDefault();else{var i=this.actions,l=k(i,"none")&&!kt.none,s=k(i,"pan-y")&&!kt["pan-y"],o=k(i,"pan-x")&&!kt["pan-x"];if(l&&1===t.pointers.length&&t.distance<2&&t.deltaTime<250)return;if(!o||!s)return l||s&&e&U||o&&e&V?this.preventSrc(n):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var It=1,Dt=2,St=4,At=8,zt=At,Yt=16;function Ht(t){this.options=u({},this.defaults,t||{}),this.id=z++,this.manager=null,this.options.enable=x(this.options.enable,!0),this.state=It,this.simultaneous={},this.requireFail=[]}function Lt(t){return t&Yt?"cancel":t&At?"end":t&St?"move":t&Dt?"start":""}function Ft(t){return t==J?"down":t==j?"up":t==K?"left":t==W?"right":""}function Rt(t,n){var e=n.manager;return e?e.get(t):t}function Nt(){Ht.apply(this,arguments)}function Bt(){Nt.apply(this,arguments),this.pX=null,this.pY=null}function Xt(){Nt.apply(this,arguments)}function qt(){Ht.apply(this,arguments),this._timer=null,this._input=null}function Kt(){Nt.apply(this,arguments)}function Wt(){Nt.apply(this,arguments)}function jt(){Ht.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Jt(t,n){return(n=n||{}).recognizers=x(n.recognizers,Jt.defaults.preset),new Ut(t,n)}function Ut(t,n){var e;this.options=u({},Jt.defaults,n||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((e=this).options.inputClass||(L?mt:F?Ct:H?xt:ht))(e,tt),this.touchAction=new wt(this,this.options.touchAction),Vt(this,!0),v(this.options.recognizers,function(t){var n=this.add(new t[0](t[1]));t[2]&&n.recognizeWith(t[2]),t[3]&&n.requireFailure(t[3])},this)}function Vt(t,n){var e,i=t.element;i.style&&(v(t.options.cssProps,function(l,s){e=A(i.style,s),n?(t.oldCssProps[e]=i.style[e],i.style[e]=l):i.style[e]=t.oldCssProps[e]||""}),n||(t.oldCssProps={}))}Ht.prototype={defaults:{},set:function(t){return u(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(g(t,"recognizeWith",this))return this;var n=this.simultaneous;return n[(t=Rt(t,this)).id]||(n[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return g(t,"dropRecognizeWith",this)?this:(t=Rt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(g(t,"requireFailure",this))return this;var n=this.requireFail;return-1===I(n,t=Rt(t,this))&&(n.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(g(t,"dropRequireFailure",this))return this;t=Rt(t,this);var n=I(this.requireFail,t);return n>-1&&this.requireFail.splice(n,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var n=this,e=this.state;function i(e){n.manager.emit(e,t)}e<At&&i(n.options.event+Lt(e)),i(n.options.event),t.additionalEvent&&i(t.additionalEvent),e>=At&&i(n.options.event+Lt(e))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|It)))return!1;t++}return!0},recognize:function(t){var n=u({},t);if(!E(this.options.enable,[this,n]))return this.reset(),void(this.state=32);this.state&(zt|Yt|32)&&(this.state=It),this.state=this.process(n),this.state&(Dt|St|At|Yt)&&this.tryEmit(n)},process:function(t){},getTouchAction:function(){},reset:function(){}},_(Nt,Ht,{defaults:{pointers:1},attrTest:function(t){var n=this.options.pointers;return 0===n||t.pointers.length===n},process:function(t){var n=this.state,e=t.eventType,i=n&(Dt|St),l=this.attrTest(t);return i&&(e&X||!l)?n|Yt:i||l?e&B?n|At:n&Dt?n|St:Dt:32}}),_(Bt,Nt,{defaults:{event:"pan",threshold:10,pointers:1,direction:G},getTouchAction:function(){var t=this.options.direction,n=[];return t&U&&n.push("pan-y"),t&V&&n.push("pan-x"),n},directionTest:function(t){var n=this.options,e=!0,i=t.distance,l=t.direction,s=t.deltaX,o=t.deltaY;return l&n.direction||(n.direction&U?(l=0===s?q:s<0?K:W,e=s!=this.pX,i=Math.abs(t.deltaX)):(l=0===o?q:o<0?j:J,e=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=l,e&&i>n.threshold&&l&n.direction},attrTest:function(t){return Nt.prototype.attrTest.call(this,t)&&(this.state&Dt||!(this.state&Dt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var n=Ft(t.direction);n&&(t.additionalEvent=this.options.event+n),this._super.emit.call(this,t)}}),_(Xt,Nt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Dt)},emit:function(t){1!==t.scale&&(t.additionalEvent=this.options.event+(t.scale<1?"in":"out")),this._super.emit.call(this,t)}}),_(qt,Ht,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var n=this.options,e=t.pointers.length===n.pointers,i=t.distance<n.threshold,l=t.deltaTime>n.time;if(this._input=t,!i||!e||t.eventType&(B|X)&&!l)this.reset();else if(t.eventType&N)this.reset(),this._timer=m(function(){this.state=zt,this.tryEmit()},n.time,this);else if(t.eventType&B)return zt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===zt&&(t&&t.eventType&B?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}}),_(Kt,Nt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Dt)}}),_(Wt,Nt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:U|V,pointers:1},getTouchAction:function(){return Bt.prototype.getTouchAction.call(this)},attrTest:function(t){var n,e=this.options.direction;return e&(U|V)?n=t.overallVelocity:e&U?n=t.overallVelocityX:e&V&&(n=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&d(n)>this.options.velocity&&t.eventType&B},emit:function(t){var n=Ft(t.offsetDirection);n&&this.manager.emit(this.options.event+n,t),this.manager.emit(this.options.event,t)}}),_(jt,Ht,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(t){var n=this.options,e=t.pointers.length===n.pointers,i=t.distance<n.threshold,l=t.deltaTime<n.time;if(this.reset(),t.eventType&N&&0===this.count)return this.failTimeout();if(i&&l&&e){if(t.eventType!=B)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<n.interval,o=!this.pCenter||st(this.pCenter,t.center)<n.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t,0==this.count%n.taps)return this.hasRequireFailures()?(this._timer=m(function(){this.state=zt,this.tryEmit()},n.interval,this),Dt):zt}return 32},failTimeout:function(){return this._timer=m(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==zt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Jt.VERSION="2.0.7",Jt.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Kt,{enable:!1}],[Xt,{enable:!1},["rotate"]],[Wt,{direction:U}],[Bt,{direction:U},["swipe"]],[jt],[jt,{event:"doubletap",taps:2},["tap"]],[qt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Ut.prototype={set:function(t){return u(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var n=this.session;if(!n.stopped){var e;this.touchAction.preventDefaults(t);var i=this.recognizers,l=n.curRecognizer;(!l||l&&l.state&zt)&&(l=n.curRecognizer=null);for(var s=0;s<i.length;)e=i[s],2===n.stopped||l&&e!=l&&!e.canRecognizeWith(l)?e.reset():e.recognize(t),!l&&e.state&(Dt|St|At)&&(l=n.curRecognizer=e),s++}},get:function(t){if(t instanceof Ht)return t;for(var n=this.recognizers,e=0;e<n.length;e++)if(n[e].options.event==t)return n[e];return null},add:function(t){if(g(t,"add",this))return this;var n=this.get(t.options.event);return n&&this.remove(n),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(g(t,"remove",this))return this;if(t=this.get(t)){var n=this.recognizers,e=I(n,t);-1!==e&&(n.splice(e,1),this.touchAction.update())}return this},on:function(t,n){if(t!==r&&n!==r){var e=this.handlers;return v(w(t),function(t){e[t]=e[t]||[],e[t].push(n)}),this}},off:function(t,n){if(t!==r){var e=this.handlers;return v(w(t),function(t){n?e[t]&&e[t].splice(I(e[t],n),1):delete e[t]}),this}},emit:function(t,n){this.options.domEvents&&function(t,n){var e=s.createEvent("Event");e.initEvent(t,!0,!0),e.gesture=n,n.target.dispatchEvent(e)}(t,n);var e=this.handlers[t]&&this.handlers[t].slice();if(e&&e.length){n.type=t,n.preventDefault=function(){n.srcEvent.preventDefault()};for(var i=0;i<e.length;)e[i](n),i++}},destroy:function(){this.element&&Vt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},u(Jt,{INPUT_START:N,INPUT_MOVE:2,INPUT_END:B,INPUT_CANCEL:X,STATE_POSSIBLE:It,STATE_BEGAN:Dt,STATE_CHANGED:St,STATE_ENDED:At,STATE_RECOGNIZED:zt,STATE_CANCELLED:Yt,STATE_FAILED:32,DIRECTION_NONE:q,DIRECTION_LEFT:K,DIRECTION_RIGHT:W,DIRECTION_UP:j,DIRECTION_DOWN:J,DIRECTION_HORIZONTAL:U,DIRECTION_VERTICAL:V,DIRECTION_ALL:G,Manager:Ut,Input:Q,TouchAction:wt,TouchInput:Ct,MouseInput:ht,PointerEventInput:mt,TouchMouseInput:xt,SingleTouchInput:yt,Recognizer:Ht,AttrRecognizer:Nt,Tap:jt,Pan:Bt,Swipe:Wt,Pinch:Xt,Rotate:Kt,Press:qt,on:P,off:M,each:v,merge:T,extend:y,assign:u,inherit:_,bindFn:C,prefixed:A}),(void 0!==l?l:"undefined"!=typeof self?self:{}).Hammer=Jt,(i=(function(){return Jt}).call(n,e,n,t))===r||(t.exports=i)}(window,document)}}]);