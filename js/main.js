const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const osRm=matchMedia('(prefers-reduced-motion:reduce)').matches;let pref=null;try{pref=localStorage.getItem('motion')}catch(e){}
const rm=pref?pref=='off':osRm;document.documentElement.classList.toggle('rm',rm);
const th=i=>{const v=i%3;let g='';if(v==0)g=[40,70,55,95,80,120].map((h,k)=>`<rect x="${30+k*40}" y="${150-h}" width="24" height="${h}"/>`).join('');else if(v==1)g='<polyline fill="none" stroke-width="2.5" points="20,130 70,100 120,115 170,70 220,85 270,40"/>';else g=Array.from({length:24},(_,k)=>`<circle cx="${30+(k*37)%250}" cy="${40+(k*53)%100}" r="3"/>`).join('');return `<svg viewBox="0 0 300 160" role="img" aria-label="Abstract chart placeholder for a project thumbnail" fill="currentColor" stroke="currentColor">${g}</svg>`};
const IM=(s,a,k,i)=>`<img src="${s}" alt="${a}" data-fb="${k}" data-i="${i}">`;
const FB={photo:()=>'<div class="ph">[YOUR PHOTO]<br>Simpan sebagai<br>assets/foto.jpg</div>',cert:i=>`<div class="ph">[YOUR CERTIFICATE IMAGE]<br>assets/certs/${+i+1}.jpg</div>`,proj:i=>`<div class="ph"><span class="cs-big">COMING SOON</span><span class="cs-sub">New project in progress — stay tuned</span></div>`};
const fbAll=()=>$$('img[data-fb]').forEach(m=>{const f=()=>{m.outerHTML=FB[m.dataset.fb](m.dataset.i)};m.addEventListener('error',f,{once:true});if(m.complete&&!m.naturalWidth)f()});
const T=v=>v&&!/^\s*\[?YOUR/i.test(v)?v:'';
const card=(p,i)=>{const L=T(p.link);const isGame=/\bgame\b/i.test(p.tags||'')||/^\s*game\s*$/i.test(p.type||'');const isComing=/coming soon/i.test(p.title||'')||/\bcoming\b/i.test(p.tags||'');const btn=isComing?'Stay tuned ○':(isGame?(L?'Play Game ↗':'Play Game →'):(L?'Open project ↗':'View case study →'));const href=isComing?'#projects':(L||'#project');const tgt=(L&&!isComing)?'target="_blank" rel="noopener"':'';return `<a class="pc" href="${href}" ${tgt} data-t="${p.tags}"><div class="th">${IM(T(p.image)||`assets/projects/${i+1}.jpg`,p.title,'proj',i)}</div><h3>${String(i+1).padStart(2,'0')}. ${p.title}</h3><p class="m"><b>${p.type}</b> · ${p.year}</p><p>${p.desc}</p><p class="m">Tools: ${p.tools}</p><p class="m"><b>${btn}</b></p></a>`};
const certc=(c,i)=>{const L=T(c.link);return `<article class="cc" data-t="${c.tag}">${IM(T(c.image)||`assets/certs/${i+1}.jpg`,c.title,'cert',i)}<h3>${c.title}</h3><p>${c.issuer}</p><p class="m">${c.year}</p>${L?`<a class="m" href="${L}" target="_blank" rel="noopener">View credential ↗</a>`:'<span class="m todo">[YOUR CERTIFICATE URL]</span>'}</article>`};
$('#mq').innerHTML=[...MQ,...MQ].map(t=>`<span>${t}</span>`).join('');
$('#focus').innerHTML=FOCUS.map(f=>`<li>${f[0]}<span class="m">${f[1]}</span></li>`).join('');
$('#feat').innerHTML=P.map(card).join('');$('#all').innerHTML=P.map(card).join('');
$('#proc').innerHTML=PROC.map((s,i)=>`<li><span class="n">0${i+1}</span><h3>${s[0]}</h3><p style="font-size:15px;margin-top:8px">${s[1]}</p></li>`).join('');
$('#certH').innerHTML=CERT.slice(0,3).map(certc).join('');$('#certA').innerHTML=CERT.map(certc).join('');
$('#pcover').innerHTML=th(0)+'<p class="m" style="margin:8px 0 0">Dashboard or visualization placeholder</p>';
const lk=(k,v)=>T(v)?`<a href="${v}" target="_blank" rel="noopener">${k}</a>`:`<span class="todo">${k}: [YOUR URL]</span>`;
$$('[data-contact]').forEach(e=>e.innerHTML=[`<a href="mailto:${C.email}">${C.email}</a>`,...Object.entries(C.links).map(([k,v])=>lk(k,v)),C.location].join('<br>'));


$('#soc').innerHTML=Object.entries(C.links).filter(([k,v])=>T(v)).map(([k,v])=>`<a href="${v}" target="_blank" rel="noopener">${k}</a>`).join('')+'<a href="#" data-mail>Email</a>';
$$('[data-cv]').forEach(a=>{a.href=C.cv;a.target='_blank';a.rel='noopener'});
$$('[data-portfolio]').forEach(a=>{if(T(C.portfolio)){a.href=C.portfolio;a.target='_blank';a.rel='noopener'}else{a.classList.add('todo');a.textContent='[YOUR URL] Full Portfolio'}});
$$('[data-photo]').forEach(e=>e.innerHTML=IM(T(C.photo)||'assets/foto.jpg',C.name,'photo',0));
$$('[data-exp]').forEach(e=>e.innerHTML=EXP.map(x=>`<div><p class="m">${x.date}</p><h3>${x.org}</h3><p><b>${x.role}</b></p><ul>${x.points.map(t=>`<li>${t}</li>`).join('')}</ul></div>`).join(''));
fbAll();


document.addEventListener('click',e=>{const a=e.target.closest('[data-mail]');if(a){e.preventDefault();location.href='mailto:'+C.email}});
const filt=(box,items,def)=>{box.innerHTML=def.map((d,i)=>`<button aria-pressed="${i==0}" data-f="${d[1]}">${d[0]}</button>`).join('');box.onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('button',box).forEach(x=>x.setAttribute('aria-pressed',x==b));$$(items).forEach(el=>el.style.display=b.dataset.f=='all'||el.dataset.t.includes(b.dataset.f)?'':'none')}};
filt($('#pf'),'#all .pc',PF);filt($('#cf'),'#certA .cc',CF);
$('#cform').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const b=`Name: ${f.get('n')}\nEmail: ${f.get('e')}\nOrganization: ${f.get('o')}\nType: ${f.get('t')}\n\n${f.get('m')}`;$('#fs').textContent='Opening your email app with the message ready to send.';location.href=`mailto:${C.email}?subject=${encodeURIComponent(f.get('s'))}&body=${encodeURIComponent(b)}`};

/* routing */
const pages=['home','about','projects','project','education','contact'];
function route(){let p=location.hash.slice(1);if(!pages.includes(p))p=location.hash=='#top'?'home':'home';
$$('[data-page]').forEach(s=>s.classList.toggle('on',s.dataset.page==p));
$$('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+(p=='project'?'projects':p)));
document.title=$(`[data-page=${p}]`).dataset.title;$('#nav').classList.remove('o');$('#mb').setAttribute('aria-expanded','false');lenis?lenis.scrollTo(0,{immediate:true}):scrollTo(0,0);motion(p);extra(p)}
function motion(p){if(rm||!window.gsap)return;
if(window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);ScrollTrigger.getAll().forEach(t=>t.kill());
$$(`[data-page=${p}] .rv`).forEach(el=>gsap.from(el,{y:30,opacity:0,duration:.6,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
gsap.set($$(`[data-page=${p}] .rv`),{clearProps:'none'})}}
$('#mb').onclick=()=>{const o=$('#nav').classList.toggle('o');$('#mb').setAttribute('aria-expanded',o)};
var lenis,mm;
if(!rm&&window.Lenis&&window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);lenis=new Lenis({lerp:.09});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
function extra(p){if(mm)mm.revert();if(rm||!window.ScrollTrigger)return;mm=gsap.matchMedia();
const V=[['.ls li',{x:-40}],['.tb tr',{x:50}],['.tl>div',{x:-40}],['.cg .cc',{y:40,scale:.96}],['#all .pc',{y:50,scale:.95}],['.ins>div,.ar li',{y:24}],['.sp>div:last-child',{x:40}],['.fl button',{y:16}],['[data-photo]',{y:30,scale:.92}]];
V.forEach(([q,f])=>{const els=$$(q.split(',').map(z=>`[data-page=${p}] ${z.trim()}`).join(','));if(!els.length)return;gsap.set(els,{opacity:0,...f});
ScrollTrigger.batch(els,{start:'top 92%',once:true,onEnter:b=>gsap.to(b,{opacity:1,x:0,y:0,scale:1,duration:.8,stagger:.1,ease:'power3.out'})})});
const dl=(document.getElementById('ld')?.95:.35);
$$(`[data-page=${p}] h1,[data-page=${p}] h2:not(.sc)`).forEach(h=>{if(!h.dataset.w){h.innerHTML=h.textContent.trim().split(/\s+/).map(w=>`<span class="wm"><span class="wi">${w}</span></span>`).join(' ');h.dataset.w=1}
gsap.from($$('.wi',h),{yPercent:115,duration:.9,stagger:.06,ease:'power3.out',delay:h.tagName=='H1'?dl:0,scrollTrigger:{trigger:h,start:'top 92%',once:true}})});
$$(`[data-page=${p}] section.s`).forEach(s=>{if(s.id!='how')gsap.fromTo(s,{'--ln':0},{'--ln':1,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:s,start:'top 90%',once:true}})});
$$(`[data-page=${p}] .sc`).forEach(h=>{if(!h.dataset.s){h.innerHTML=h.textContent.split(' ').map(w=>`<span class="wd">${w}</span>`).join(' ');h.dataset.s=1}
gsap.fromTo($$('.wd',h),{opacity:.2},{opacity:1,stagger:.12,ease:'none',scrollTrigger:{trigger:h,start:'top 85%',end:'bottom 50%',scrub:true}})});
$$(`[data-page=${p}] .eb`).forEach(el=>{const t=el.dataset.tx||(el.dataset.tx=el.textContent),o={v:0};
ScrollTrigger.create({trigger:el,start:'top 92%',once:true,onEnter:()=>gsap.to(o,{v:1,duration:1,ease:'none',onUpdate:()=>{const n=Math.floor(o.v*t.length);el.textContent=t.slice(0,n)+[...t.slice(n)].map(c=>c==' '?' ':'01#/<>_'[Math.random()*7|0]).join('')},onComplete:()=>el.textContent=t})})});
if(p=='education'){const tl=$('[data-page=education] .tl');if(tl&&!tl.dataset.p){tl.dataset.p=1;tl.insertAdjacentHTML('afterbegin','<i class="tlp"></i>')}
gsap.fromTo('.tlp',{scaleY:0},{scaleY:1,ease:'none',scrollTrigger:{trigger:tl,start:'top 80%',end:'bottom 40%',scrub:true}})}
if(p!='home')return;
gsap.to('[data-page=home]>.w h1',{y:-60,opacity:.2,ease:'none',scrollTrigger:{trigger:'[data-page=home]>.w',start:'top top',end:'bottom top',scrub:true}});
$$('#feat .th').forEach(t=>gsap.from(t,{clipPath:'inset(0 0 100% 0)',duration:1,ease:'power3.out',scrollTrigger:{trigger:t,start:'top 88%',once:true}}));
mm.add('(min-width:901px)',()=>{const sec=$('#how'),ol=$('#proc'),ln=$('#how .pl i');sec.classList.add('hz');
const wl=$('.w',sec).getBoundingClientRect().left,d=()=>Math.max(0,ol.scrollWidth+wl+24-innerWidth);
gsap.timeline({defaults:{ease:'none'},scrollTrigger:{trigger:sec,start:'top 72px',end:()=>'+='+(d()+200),pin:true,scrub:.6,anticipatePin:1,invalidateOnRefresh:true,refreshPriority:1}}).to(ol,{x:()=>-d()},0).to(ln,{scaleX:1},0);
gsap.to('.vis',{yPercent:-12,ease:'none',scrollTrigger:{trigger:'.vis',start:'top 40%',end:'bottom top',scrub:true}});
return()=>sec.classList.remove('hz')});
mm.add('(max-width:900px)',()=>{gsap.to('#how .pl i',{scaleX:1,ease:'none',scrollTrigger:{trigger:'#how',start:'top 70%',end:'bottom 60%',scrub:true}})})}
function go(){if(rm||!window.gsap)return route();gsap.timeline().set('#wp',{transformOrigin:'50% 100%'}).to('#wp',{scaleY:1,duration:.35,ease:'power3.in'}).call(route).set('#wp',{transformOrigin:'50% 0%'}).to('#wp',{scaleY:0,duration:.45,ease:'power3.out'})}
addEventListener('hashchange',go);route();
addEventListener('scroll',()=>{const h=document.documentElement;$('#pg').style.transform='scaleX('+Math.min(1,scrollY/Math.max(1,h.scrollHeight-innerHeight))+')'},{passive:true});
if(document.fonts&&window.ScrollTrigger)document.fonts.ready.then(()=>ScrollTrigger.refresh());
if(!rm&&window.gsap){const mq=$('#mq');let mx=0,hv=0;mq.parentElement.onpointerenter=()=>hv=1;mq.parentElement.onpointerleave=()=>hv=0;
gsap.ticker.add(()=>{if(hv)return;mx-=.6+(lenis?lenis.velocity:0)*.35;const hf=mq.scrollWidth/2;if(mx<=-hf)mx+=hf;if(mx>0)mx-=hf;mq.style.transform=`translate3d(${mx}px,0,0)`})}
if(!rm&&window.gsap){gsap.from('header',{y:-16,opacity:0,duration:.5});
if(matchMedia('(pointer:fine)').matches)$$('.mag').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.2,y:(e.clientY-r.top-r.height/2)*.3,duration:.3})});b.addEventListener('pointerleave',()=>gsap.to(b,{x:0,y:0,duration:.4}))})}
/* loader: skipped on repeat visits */
const ld=$('#ld');let seen=false;try{seen=sessionStorage.getItem('seen')}catch(e){}
if(seen||rm)ld.remove();else{try{sessionStorage.setItem('seen','1')}catch(e){}setTimeout(()=>{ld.style.opacity=0;setTimeout(()=>ld.remove(),400)},900)}


/* ===== ADVANCED GSAP: dot field, custom cursor, velocity skew ===== */
let AC=getComputedStyle(document.documentElement).getPropertyValue('--ac').trim();
(()=>{const hero=$('[data-page=home]>.w');if(!hero||rm||!window.gsap)return;hero.style.position='relative';
const cv=document.createElement('canvas');cv.className='dots';cv.setAttribute('aria-hidden','true');hero.prepend(cv);
const x=cv.getContext('2d'),P={x:-999,y:-999},S=30;let W=0,H=0,d=1;
const fit=()=>{d=Math.min(devicePixelRatio||1,2);W=hero.clientWidth;H=hero.clientHeight;cv.width=W*d;cv.height=H*d;cv.style.width=W+'px';cv.style.height=H+'px'};

gsap.ticker.add(t=>{if(!hero.offsetParent||scrollY>innerHeight*1.2)return;
if(hero.clientWidth*d!==cv.width||hero.clientHeight*d!==cv.height)fit();
x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,W,H);x.fillStyle=AC;
for(let i=0;i<=W/S;i++)for(let j=0;j<=H/S;j++){const px=i*S+S/2,py=j*S+S/2,k=Math.max(0,1-Math.hypot(px-P.x,py-P.y)/170),w=Math.sin(i*.35+j*.25+t*1.4)*.5+.5;
x.globalAlpha=.1+w*.1+k*.6;x.beginPath();x.arc(px,py,.8+w*.9+k*3.2,0,6.283);x.fill()}})})();








/* ===== Animation on/off switch + diagnostics ===== */
(()=>{const msg=!window.gsap?'Animation library failed to load. Check your internet connection or ad blocker, then reload.':(rm&&osRm&&!pref)?'Animations are off because your device uses "reduce motion".':'';
const sw=v=>{try{localStorage.setItem('motion',v)}catch(e){}location.reload()};
const mt=$('#mt');mt.textContent='Motion: '+(rm?'Off':'On');mt.onclick=()=>sw(rm?'on':'off');
if(msg){const b=document.createElement('div');b.id='mn';b.innerHTML=`<span>${msg}</span>`+(window.gsap?'<button class="btn bs">Turn on animations</button>':'');document.body.append(b);const k=$('button',b);if(k)k.onclick=()=>sw('on')}})();


/* ===== Theme switch (circular reveal), year, chart points ===== */
$('#yr').textContent=new Date().getFullYear();
(()=>{const b=$('#th'),root=document.documentElement;
const set=(t,save=1)=>{root.dataset.theme=t;if(save)try{localStorage.setItem('theme',t)}catch(e){}AC=getComputedStyle(root).getPropertyValue('--ac').trim();b.setAttribute('aria-label',t=='light'?'Switch to dark theme':'Switch to light theme')};
b.onclick=()=>{const t=root.dataset.theme=='light'?'dark':'light';if(!document.startViewTransition||rm){set(t);return}
const r=b.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,R=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
document.startViewTransition(()=>set(t)).ready.then(()=>root.animate({clipPath:[`circle(0 at ${x}px ${y}px)`,`circle(${R}px at ${x}px ${y}px)`]},{duration:650,easing:'cubic-bezier(.65,0,.35,1)',pseudoElement:'::view-transition-new(root)'}))};
set(root.dataset.theme||'dark',0)})();
if(!rm&&window.gsap)gsap.from('.gd circle',{scale:0,transformOrigin:'50% 50%',duration:.5,stagger:.35,delay:(document.getElementById('ld')?.95:.2)+1.2,ease:'back.out(2)'});
