import{o as Ca,a as Ba,i as La,s as D,b as tt,e as Be}from"./lifecycle.DVXYv02V.js";import{a3 as Ta,ab as Sa,aU as ja,aV as Ma,i as Da,u as Pa,aW as za,aX as je,aY as $a,q as Ia,aZ as mt,c as et,f as U,a as P,p as Ra,b as Wa,h as l,m as A,ax as R,g as t,d as ut,s as m,e as i,r,v as Na,t as Lt,o as w}from"./utils.I031fIKC.js";import{a as Ya,s as q}from"./render.CXZIErzm.js";import{i as S}from"./if.UhLp8uqm.js";import{e as qa,i as Ha}from"./each.BWRjh538.js";import{b as Le}from"./this.DSTH8Ssi.js";import{I as g}from"./Icon.D7jBQwJc.js";import"./config.D1QfT5Sx.js";import{I as Oa}from"./zh_TW.Jbo5k0IW.js";import{i as Ka}from"./translation.Dd99uYSx.js";import"./props.Hvxcl91v.js";const Ua=()=>performance.now(),H={tick:c=>requestAnimationFrame(c),now:()=>Ua(),tasks:new Set};function Me(){const c=H.now();H.tasks.forEach(s=>{s.c(c)||(H.tasks.delete(s),s.f())}),H.tasks.size!==0&&H.tick(Me)}function Xa(c){let s;return H.tasks.size===0&&H.tick(Me),{promise:new Promise(f=>{H.tasks.add(s={c,f})}),abort(){H.tasks.delete(s)}}}function Tt(c,s){je(()=>{c.dispatchEvent(new CustomEvent(s))})}function Va(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const s=c.split("-");return s.length===1?s[0]:s[0]+s.slice(1).map(f=>f[0].toUpperCase()+f.slice(1)).join("")}function Te(c){const s={},f=c.split(";");for(const b of f){const[x,_]=b.split(":");if(!x||_===void 0)break;const E=Va(x.trim());s[E]=_.trim()}return s}const Ga=c=>c;function Za(c,s,f,b){var x=(c&za)!==0,_="both",E,F=s.inert,j=s.style.overflow,y,d;function M(){return je(()=>E??=f()(s,b?.()??{},{direction:_}))}var L={is_global:x,in(){s.inert=F,Tt(s,"introstart"),y=Zt(s,M(),d,1,()=>{Tt(s,"introend"),y?.abort(),y=E=void 0,s.style.overflow=j})},out(p){s.inert=!0,Tt(s,"outrostart"),d=Zt(s,M(),y,0,()=>{Tt(s,"outroend"),p?.()})},stop:()=>{y?.abort(),d?.abort()}},W=Ta;if((W.transitions??=[]).push(L),Ya){var T=x;if(!T){for(var v=W.parent;v&&(v.f&Sa)!==0;)for(;(v=v.parent)&&(v.f&ja)===0;);T=!v||(v.f&Ma)!==0}T&&Da(()=>{Pa(()=>L.in())})}}function Zt(c,s,f,b,x){var _=b===1;if($a(s)){var E,F=!1;return Ia(()=>{if(!F){var p=s({direction:_?"in":"out"});E=Zt(c,p,f,b,x)}}),{abort:()=>{F=!0,E?.abort()},deactivate:()=>E.deactivate(),reset:()=>E.reset(),t:()=>E.t()}}if(f?.deactivate(),!s?.duration)return x(),{abort:mt,deactivate:mt,reset:mt,t:()=>b};const{delay:j=0,css:y,tick:d,easing:M=Ga}=s;var L=[];if(_&&f===void 0&&(d&&d(0,1),y)){var W=Te(y(0,1));L.push(W,W)}var T=()=>1-b,v=c.animate(L,{duration:j,fill:"forwards"});return v.onfinish=()=>{v.cancel();var p=f?.t()??1-b;f?.abort();var u=b-p,a=s.duration*Math.abs(u),O=[];if(a>0){var X=!1;if(y)for(var bt=Math.ceil(a/16.666666666666668),ct=0;ct<=bt;ct+=1){var V=p+u*M(ct/bt),G=Te(y(V,1-V));O.push(G),X||=G.overflow==="hidden"}X&&(c.style.overflow="hidden"),T=()=>{var Z=v.currentTime;return p+u*M(Z/a)},d&&Xa(()=>{if(v.playState!=="running")return!1;var Z=T();return d(Z,1-Z),!0})}v=c.animate(O,{duration:a,fill:"forwards"}),v.onfinish=()=>{T=()=>b,d?.(b,1-b),x()}},{abort:()=>{v&&(v.cancel(),v.effect=null,v.onfinish=mt)},deactivate:()=>{x=mt},reset:()=>{b===0&&d?.(1,0)},t:()=>T()}}function Se(c){return function(...s){var f=s[0];return f.stopPropagation(),c?.apply(this,s)}}function Ja(c){const s=c-1;return s*s*s+1}function Qa(c,{delay:s=0,duration:f=400,easing:b=Ja,axis:x="y"}={}){const _=getComputedStyle(c),E=+_.opacity,F=x==="y"?"height":"width",j=parseFloat(_[F]),y=x==="y"?["top","bottom"]:["left","right"],d=y.map(u=>`${u[0].toUpperCase()}${u.slice(1)}`),M=parseFloat(_[`padding${d[0]}`]),L=parseFloat(_[`padding${d[1]}`]),W=parseFloat(_[`margin${d[0]}`]),T=parseFloat(_[`margin${d[1]}`]),v=parseFloat(_[`border${d[0]}Width`]),p=parseFloat(_[`border${d[1]}Width`]);return{delay:s,duration:f,easing:b,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*E};${F}: ${u*j}px;padding-${y[0]}: ${u*M}px;padding-${y[1]}: ${u*L}px;margin-${y[0]}: ${u*W}px;margin-${y[1]}: ${u*T}px;border-${y[0]}-width: ${u*v}px;border-${y[1]}-width: ${u*p}px;min-${F}: 0`}}var tr=ut('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),er=ut('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),ar=ut('<span class="text-sm text-[var(--content-meta)]"></span>'),rr=ut('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),ir=ut('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),sr=ut(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function gr(c,s){Wa(s,!1);let f=A(!1),b=A(!1),x=A(!1),_=A(!1),E=A(0),F=A(0),j=A(.7),y=A(!1),d=A(!1),M=A(!1),L=A(0),W=A(""),T=A(!1),v=A({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),p=A([]),u=A(0),a=A(),O=A(),X=A();const bt=[{id:1,title:"Maneki-neko",artist:"Harris Heller (StreamBeats)",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/maneki-neko.mp3",duration:210},{id:2,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:3,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:4,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200}];function ct(){!t(a)||!t(v).url||(t(f)?t(a).pause():t(a).play())}function V(){l(b,!t(b)),t(b)&&(l(_,!1),l(x,!1))}function G(){l(x,!t(x)),t(x)&&(l(b,!1),l(_,!1))}function Z(){l(_,!t(_))}function De(){l(M,!t(M))}function Pe(){l(L,(t(L)+1)%3)}function ze(){if(t(p).length<=1)return;const o=t(u)>0?t(u)-1:t(p).length-1;gt(o)}function St(){if(t(p).length<=1)return;let o;if(t(M))do o=Math.floor(Math.random()*t(p).length);while(o===t(u)&&t(p).length>1);else o=t(u)<t(p).length-1?t(u)+1:0;gt(o)}function gt(o){if(o<0||o>=t(p).length)return;const z=t(f);l(u,o),t(a)&&t(a).pause(),Jt(t(p)[t(u)]),(z||!t(f))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function ht(o){return o.startsWith("http://")||o.startsWith("https://")||o.startsWith("/")?o:`/${o}`}function Jt(o){!o||!t(a)||(l(v,{...o}),o.url?(l(d,!0),t(a).pause(),R(a,t(a).currentTime=0),l(E,0),l(F,o.duration??0),t(a).removeEventListener("loadeddata",Qt),t(a).removeEventListener("error",te),t(a).removeEventListener("loadstart",ee),t(a).addEventListener("loadeddata",Qt,{once:!0}),t(a).addEventListener("error",te,{once:!0}),t(a).addEventListener("loadstart",ee,{once:!0}),R(a,t(a).src=ht(o.url)),t(a).load()):l(d,!1))}function Qt(){l(d,!1),t(a)?.duration&&t(a).duration>1&&(l(F,Math.floor(t(a).duration)),t(p)[t(u)]&&R(p,t(p)[t(u)].duration=t(F)),R(v,t(v).duration=t(F)))}function te(o){l(d,!1),jt(`无法播放 "${t(v).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>St(),1e3):jt("播放列表中没有可用的歌曲")}function ee(){}function jt(o){l(W,o),l(T,!0),setTimeout(()=>{l(T,!1)},3e3)}function $e(){l(T,!1)}function Ie(o){if(!t(a)||!t(O))return;const z=t(O).getBoundingClientRect(),xt=(o.clientX-z.left)/z.width*t(F);R(a,t(a).currentTime=xt),l(E,xt)}function Re(o){if(!t(a)||!t(X))return;const z=t(X).getBoundingClientRect(),J=Math.max(0,Math.min(1,(o.clientX-z.left)/z.width));l(j,J),R(a,t(a).volume=t(j)),l(y,t(j)===0)}function ae(){t(a)&&(l(y,!t(y)),R(a,t(a).muted=t(y)))}function re(o){if(!Number.isFinite(o)||o<0)return"0:00";const z=Math.floor(o/60),J=Math.floor(o%60);return`${z}:${J.toString().padStart(2,"0")}`}function We(){t(a)&&(t(a).addEventListener("play",()=>{l(f,!0)}),t(a).addEventListener("pause",()=>{l(f,!1)}),t(a).addEventListener("timeupdate",()=>{l(E,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(L)===1?(R(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(L)===2||t(u)<t(p).length-1||t(M)?St():l(f,!1)}),t(a).addEventListener("error",o=>{l(d,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Ca(()=>{l(a,new Audio),R(a,t(a).volume=t(j)),We(),l(p,[...bt]),t(p).length>0?Jt(t(p)[0]):jt("本地播放列表为空")}),Ba(()=>{t(a)&&(t(a).pause(),R(a,t(a).src=""))}),La();var ie=et(),Ne=U(ie);{var Ye=o=>{var z=sr(),J=U(z);{var xt=e=>{var h=tr(),k=i(h),C=i(k);g(C,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var B=m(C,2),n=i(B,!0);r(B);var N=m(B,2),ot=i(N);g(ot,{icon:"material-symbols:close",class:"text-lg"}),r(N),r(k),r(h),Lt(()=>q(n,t(W))),w("click",N,$e),P(e,h)};S(J,e=>{t(T)&&e(xt)})}var Mt=m(J,2);let se;var at=i(Mt);let ne;var qe=i(at);{var He=e=>{g(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Oe=e=>{var h=et(),k=U(h);{var C=n=>{var N=er();P(n,N)},B=n=>{g(n,{icon:"material-symbols:music-note",class:"text-white text-lg"})};S(k,n=>{t(f)?n(C):n(B,!1)},!0)}P(e,h)};S(qe,e=>{t(d)?e(He):e(Oe,!1)})}r(at);var rt=m(at,2);let oe;var le=i(rt),Dt=i(le),Pt=i(Dt);let ue;var ce=m(Pt,2),Ke=i(ce);{var Ue=e=>{g(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},Xe=e=>{var h=et(),k=U(h);{var C=n=>{g(n,{icon:"material-symbols:pause",class:"text-white text-xl"})},B=n=>{g(n,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};S(k,n=>{t(f)?n(C):n(B,!1)},!0)}P(e,h)};S(Ke,e=>{t(d)?e(Ue):e(Xe,!1)})}r(ce),r(Dt);var zt=m(Dt,2),$t=i(zt),Ve=i($t,!0);r($t);var de=m($t,2),Ge=i(de,!0);r(de),r(zt);var ve=m(zt,2),yt=i(ve),Ze=i(yt);g(Ze,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(yt);var It=m(yt,2),Je=i(It);g(Je,{icon:"material-symbols:expand-less",class:"text-lg"}),r(It),r(ve),r(le),r(rt);var _t=m(rt,2);let fe;var Rt=i(_t),Wt=i(Rt),pe=i(Wt);let me;r(Wt);var Nt=m(Wt,2),Yt=i(Nt),Qe=i(Yt,!0);r(Yt);var qt=m(Yt,2),ta=i(qt,!0);r(qt);var be=m(qt,2),ea=i(be);r(be),r(Nt);var ge=m(Nt,2),wt=i(ge),aa=i(wt);g(aa,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(wt);var Ht=m(wt,2),ra=i(Ht);g(ra,{icon:"material-symbols:expand-more",class:"text-lg"}),r(Ht),r(ge),r(Rt);var Ot=m(Rt,2),it=i(Ot),ia=i(it);r(it),Le(it,e=>l(O,e),()=>t(O)),r(Ot);var Kt=m(Ot,2),st=i(Kt);let he;var sa=i(st);g(sa,{icon:"material-symbols:shuffle",class:"text-lg"}),r(st);var dt=m(st,2),na=i(dt);g(na,{icon:"material-symbols:skip-previous",class:"text-xl"}),r(dt);var nt=m(dt,2);let xe;var oa=i(nt);{var la=e=>{g(e,{icon:"eos-icons:loading",class:"text-xl"})},ua=e=>{var h=et(),k=U(h);{var C=n=>{g(n,{icon:"material-symbols:pause",class:"text-xl"})},B=n=>{g(n,{icon:"material-symbols:play-arrow",class:"text-xl"})};S(k,n=>{t(f)?n(C):n(B,!1)},!0)}P(e,h)};S(oa,e=>{t(d)?e(la):e(ua,!1)})}r(nt);var vt=m(nt,2),ca=i(vt);g(ca,{icon:"material-symbols:skip-next",class:"text-xl"}),r(vt);var kt=m(vt,2);let ye;var da=i(kt);{var va=e=>{g(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},fa=e=>{var h=et(),k=U(h);{var C=n=>{g(n,{icon:"material-symbols:repeat",class:"text-lg"})},B=n=>{g(n,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};S(k,n=>{t(L)===2?n(C):n(B,!1)},!0)}P(e,h)};S(da,e=>{t(L)===1?e(va):e(fa,!1)})}r(kt),r(Kt);var _e=m(Kt,2),Et=i(_e),pa=i(Et);{var ma=e=>{g(e,{icon:"material-symbols:volume-off",class:"text-lg"})},ba=e=>{var h=et(),k=U(h);{var C=n=>{g(n,{icon:"material-symbols:volume-down",class:"text-lg"})},B=n=>{g(n,{icon:"material-symbols:volume-up",class:"text-lg"})};S(k,n=>{t(j)<.5?n(C):n(B,!1)},!0)}P(e,h)};S(pa,e=>{t(y)||t(j)===0?e(ma):e(ba,!1)})}r(Et);var Q=m(Et,2),ga=i(Q);r(Q),Le(Q,e=>l(X,e),()=>t(X));var Ft=m(Q,2);let we;var ha=i(Ft);g(ha,{icon:"material-symbols:queue-music",class:"text-lg"}),r(Ft),r(_e),r(_t);var xa=m(_t,2);{var ya=e=>{var h=ir(),k=i(h),C=i(k),B=i(C,!0);r(C);var n=m(C,2),N=i(n);g(N,{icon:"material-symbols:close",class:"text-lg"}),r(n),r(k);var ot=m(k,2);qa(ot,5,()=>t(p),Ha,(ft,K,$)=>{var Y=rr();let At;var pt=i(Y),_a=i(pt);{var wa=I=>{g(I,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},ka=I=>{var Bt=et(),Vt=U(Bt);{var Gt=lt=>{g(lt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Aa=lt=>{var Ce=ar();Ce.textContent=$+1,P(lt,Ce)};S(Vt,lt=>{$===t(u)?lt(Gt):lt(Aa,!1)},!0)}P(I,Bt)};S(_a,I=>{$===t(u)&&t(f)?I(wa):I(ka,!1)})}r(pt);var Ut=m(pt,2),ke=i(Ut);r(Ut);var Ee=m(Ut,2),Ct=i(Ee);let Fe;var Ea=i(Ct,!0);r(Ct);var Xt=m(Ct,2);let Ae;var Fa=i(Xt,!0);r(Xt),r(Ee),r(Y),Lt((I,Bt,Vt,Gt)=>{At=D(Y,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,At,I),tt(Y,"aria-label",`播放 ${t(K).title??""} - ${t(K).artist??""}`),tt(ke,"src",Bt),tt(ke,"alt",t(K).title),Fe=D(Ct,1,"font-medium truncate",null,Fe,Vt),q(Ea,t(K).title),Ae=D(Xt,1,"text-sm text-[var(--content-meta)] truncate",null,Ae,Gt),q(Fa,t(K).artist)},[()=>({"bg-[var(--btn-plain-bg)]":$===t(u),"text-[var(--primary)]":$===t(u)}),()=>ht(t(K).cover),()=>({"text-[var(--primary)]":$===t(u),"text-90":$!==t(u)}),()=>({"text-[var(--primary)]":$===t(u)})]),w("click",Y,()=>gt($)),w("keydown",Y,I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),gt($))}),P(ft,Y)}),r(ot),r(h),Lt(ft=>q(B,ft),[()=>Ka(Oa.playlist)]),w("click",n,Z),Za(3,h,()=>Qa,()=>({duration:300,axis:"y"})),P(e,h)};S(xa,e=>{t(_)&&e(ya)})}r(Mt),Na(2),Lt((e,h,k,C,B,n,N,ot,ft,K,$,Y,At,pt)=>{se=D(Mt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,se,e),ne=D(at,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ne,h),oe=D(rt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,oe,k),tt(Pt,"src",C),ue=D(Pt,1,"w-full h-full object-cover transition-transform duration-300",null,ue,B),q(Ve,t(v).title),q(Ge,t(v).artist),fe=D(_t,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,fe,n),tt(pe,"src",N),me=D(pe,1,"w-full h-full object-cover transition-transform duration-300",null,me,ot),q(Qe,t(v).title),q(ta,t(v).artist),q(ea,`${ft??""} / ${K??""}`),tt(it,"aria-valuenow",t(F)>0?t(E)/t(F)*100:0),Be(ia,`width: ${t(F)>0?t(E)/t(F)*100:0}%`),he=D(st,1,"w-10 h-10 rounded-lg",null,he,$),st.disabled=t(p).length<=1,dt.disabled=t(p).length<=1,xe=D(nt,1,"btn-regular w-12 h-12 rounded-full",null,xe,Y),nt.disabled=t(d),vt.disabled=t(p).length<=1,ye=D(kt,1,"w-10 h-10 rounded-lg",null,ye,At),tt(Q,"aria-valuenow",t(j)*100),Be(ga,`width: ${t(j)*100}%`),we=D(Ft,1,"btn-plain w-8 h-8 rounded-lg",null,we,pt)},[()=>({expanded:t(b),"hidden-mode":t(x)}),()=>({"opacity-0":!t(x),"scale-0":!t(x),"pointer-events-none":!t(x)}),()=>({"opacity-0":t(b)||t(x),"scale-95":t(b)||t(x),"pointer-events-none":t(b)||t(x)}),()=>ht(t(v).cover),()=>({spinning:t(f)&&!t(d),"animate-pulse":t(d)}),()=>({"opacity-0":!t(b),"scale-95":!t(b),"pointer-events-none":!t(b)}),()=>ht(t(v).cover),()=>({spinning:t(f)&&!t(d),"animate-pulse":t(d)}),()=>re(t(E)),()=>re(t(F)),()=>({"btn-regular":t(M),"btn-plain":!t(M)}),()=>({"opacity-50":t(d)}),()=>({"btn-regular":t(L)>0,"btn-plain":t(L)===0}),()=>({"text-[var(--primary)]":t(_)})]),w("click",at,G),w("keydown",at,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),G())}),w("click",yt,Se(G)),w("click",It,Se(V)),w("click",rt,V),w("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),V())}),w("click",wt,G),w("click",Ht,V),w("click",it,Ie),w("keydown",it,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(O).getBoundingClientRect();const k=.5*t(F);t(a)&&(R(a,t(a).currentTime=k),l(E,k))}}),w("click",st,De),w("click",dt,ze),w("click",nt,ct),w("click",vt,St),w("click",kt,Pe),w("click",Et,ae),w("click",Q,Re),w("keydown",Q,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&ae())}),w("click",Ft,Z),P(o,z)};S(Ne,o=>{o(Ye)})}P(c,ie),Ra()}export{gr as default};
