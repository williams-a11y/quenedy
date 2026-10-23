const P=Array.from({length:21},(_,i)=>'imagenes/foto'+String(i+1).padStart(2,'0')+'.jpg');
const SONG='audio/cancion.mp3';
const g=document.getElementById('g'),lb=document.getElementById('lb');
const C=["Elegantes y juntos, como siempre","Tu cabeza en mi hombro, mi lugar favorito","Cerquita de ti es donde mejor estoy","Tu sonrisa le alegra la tarde a cualquiera","Un batido rosado y tú, plan perfecto","Contigo hasta lo simple se siente bonito","Contigo siento que floto","Caminar a tu lado, sin prisa","Así te quiero tener, en mis brazos","Una selfi más para guardar","De la mano, hacia donde sea","Una velita, un pastel y tu sonrisa","Esa mirada que no se me olvida","Tu sonrisa brilla más que el sol","Un lazo rojo y mucho estilo","Soplamos juntos, deseamos lo mismo","Con los colores de casa, a tu lado","Un paso a la vez, siempre juntos","Pensando en ti, aunque no estés","Tranquilo, pero con la mente en ti","De noche también te pienso"];
P.forEach((s,i)=>{const d=document.createElement('div');d.className='pol';
d.style.transform='rotate('+(((i*37)%5)-2)+'deg)';
d.innerHTML='<img loading="lazy" alt="'+C[i]+'" src="'+s+'"><div class="t">'+C[i]+'</div>';
d.onclick=()=>{lb.querySelector('img').src=s;lb.querySelector('p').textContent=C[i];lb.classList.add('on')};g.appendChild(d)});
lb.onclick=()=>lb.classList.remove('on');
new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.1})
 .observe&&(()=>{const o=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.pol').forEach(p=>o.observe(p))})();
const st=new Date(2024,10,8,0,0,0);
function tick(){const n=new Date();let y=n.getFullYear()-st.getFullYear(),m=n.getMonth()-st.getMonth(),
a=new Date(st);a.setFullYear(st.getFullYear()+y);a.setMonth(st.getMonth()+m);
let tot=y*12+m;if(a>n){tot--}y=Math.floor(tot/12);m=tot%12;
const b=new Date(st.getFullYear(),st.getMonth()+tot,8);
const ms=n-b,dd=Math.floor(ms/864e5),hh=Math.floor(ms/36e5)%24;
y_.textContent=y;m_.textContent=m;d_.textContent=dd;h_.textContent=hh}
const y_=document.getElementById('y'),m_=document.getElementById('m'),d_=document.getElementById('d'),h_=document.getElementById('h');
tick();setInterval(tick,60000);
setInterval(()=>{const h=document.createElement('div');h.className='heart';h.textContent='❤';
h.style.left=Math.random()*100+'vw';h.style.fontSize=(10+Math.random()*18)+'px';
h.style.animationDuration=(7+Math.random()*6)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),13000)},900);
const au=document.getElementById('au'),mb=document.getElementById('mus');au.src=SONG;
function setB(){mb.classList.toggle('on',!au.paused);mb.textContent=au.paused?'🎵 Tocar canción':'⏸ Pausar'}
mb.onclick=()=>{au.paused?au.play().then(setB).catch(()=>{}):(au.pause(),setB())};
