const championData = {
  mid: [
    {name:'Vex',id:'Vex',wr:'52.3',pick:'3.2',tag:'DEFAULT / ANTI-DASH',line:'Into Yone, Irelia, mobile skirmishers.',detail:'Hold fear for the opponent’s committed dash. Push the wave, then follow your jungler into river. Avoid a blind roam while your wave is arriving.',url:'https://mobalytics.gg/lol/champions/vex/build/mid'},
    {name:'Ekko',id:'Ekko',wr:'52.0',pick:'4.9',tag:'ROAM / SIDE LANE',line:'When you can move first and find flanks.',detail:'Trade around cooldowns, use a pushed wave to move with jungle, and keep R available before committing to a deep side lane.',url:'https://mobalytics.gg/lol/champions/ekko/build/mid'},
    {name:'Xerath',id:'Xerath',wr:'51.2',pick:'4.3',tag:'RANGE / SIEGE',line:'Into lanes you can safely outrange.',detail:'Play from vision and wave control. Poke before objective setup; do not face-check or follow an assassin into fog.',url:'https://mobalytics.gg/lol/champions/xerath/build/mid'}
  ],
  adc: [
    {name:'Jinx',id:'Jinx',wr:'52.3',pick:'17.0',tag:'DEFAULT / AD CARRY',line:'Reliable physical damage and resets.',detail:'Protect your lane farm and role quest. At objectives, hit the closest safe target and let the first takedown activate your reset.',url:'https://mobalytics.gg/lol/champions/jinx/build/adc'},
    {name:'Veigar',id:'Veigar',wr:'53.1',pick:'1.2',tag:'COUNTER / AP BOT',line:'When the team already has physical damage.',detail:'Farm safely, use Event Horizon to block dives and entrances, then scale. Lower pick rate means this result is less certain.',url:'https://mobalytics.gg/lol/champions/veigar/build/adc'}
  ],
  jungle: [
    {name:'Wukong',id:'MonkeyKing',wr:'52.3',pick:'7.7',tag:'DEFAULT / AD ENGAGE',line:'Start fights and supply physical damage.',detail:'Path toward the lane with setup, then turn an advantage into a wave crash or objective. Keep Cyclone for grouped fights.',url:'https://mobalytics.gg/lol/champions/monkeyking/build/jungle'},
    {name:'Rammus',id:'Rammus',wr:'53.4',pick:'2.2',tag:'COUNTER / ARMOR',line:'Into attack-heavy physical teams.',detail:'Show after your laner can follow. Your engage is strongest when the enemy’s escape is spent; avoid blind picks into heavy magic damage.',url:'https://mobalytics.gg/lol/champions/rammus/build/jungle'}
  ],
  top: [
    {name:'Ornn',id:'Ornn',wr:'52.1',pick:'3.7',tag:'DEFAULT / FRONTLINE',line:'A dependable lane and grouped engage.',detail:'Keep a stable wave, preserve health for objective moves and join teamfights when your ultimate creates the first opening.',url:'https://mobalytics.gg/lol/champions/ornn/build/top'},
    {name:'Garen',id:'Garen',wr:'50.8',pick:'6.1',tag:'SIDE LANE / AD',line:'Simple physical damage and side pressure.',detail:'Push only when you know who can answer. Draw one defender, then rotate or retreat while your team takes space elsewhere.',url:'https://mobalytics.gg/lol/champions/garen/build/top'}
  ]
};

const phases = [
  {eyebrow:'EARLY GAME / ESTABLISH CONTROL',title:'PLAY FOR THE<br><em>FIRST MOVE.</em>',intro:'The 2026 opening is faster: minions spawn at 0:30, major buff camps at 0:55 and first Scuttle at 2:55. Guard entrances, then play around the first wave and clear.',you:'Mid: get the wave safe before moving with jungle. ADC: prioritize farm and health; your bot role quest rewards lane minions heavily.',buddy:'Jungle: plan the first clear around a lane that can move. Top: track the first jungle path and avoid giving up the wave for a low-odds river fight.',call:'“Can we move first after this wave?” If not, ping and trade space.'},
  {eyebrow:'EARLY–MID / CASH THE LEAD',title:'CRASH.<br><em>THEN CONVERT.</em>',intro:'A kill is only the opening. Spend the numbers advantage before the enemy returns: wave, plates, tower, grubs, Herald or dragon.',you:'Mid: shove before roaming, then return for the next wave. ADC: complete the lane quest through CS and take safe plates after a clean crash.',buddy:'Jungle: choose the nearby objective you can finish with lane cover. Top: crash before helping grubs; preserve Teleport for a valuable cross-map move.',call:'“What can we take before they respawn?” Pick one answer.'},
  {eyebrow:'MID GAME / ROTATE THE MAP',title:'BUILD TWO<br><em>THREATS.</em>',intro:'Once a tower drops, move the duo toward the next pressure point. Mid priority opens both river entrances; a live side wave pulls a defender away.',you:'Mid: Vex/Xerath group near the next fight; Ekko can catch side if safe. ADC: rotate toward mid with support and collect protected waves.',buddy:'Jungle: sweep with a teammate, then set the objective approach. Top: Ornn groups for engage; Garen may pressure a side lane if the team can hold.',call:'“Who answers the side wave, and what do we take while they do?”'},
  {eyebrow:'LATE GAME / CLOSE THE MAP',title:'FORCE THE<br><em>END WINDOW.</em>',intro:'Baron is available from 20:00. Prepare a wave and vision before starting it; a won fight may be worth more as towers and Nexus than as another camp.',you:'Carry: stay alive and damage the closest safe target. Mid: protect the approach and cut off the defending carry with fear, cage or poke.',buddy:'Jungle: keep Smite available and do not enter the pit alone. Top: group for engage unless a side push creates a clear, safe cross-map trade.',call:'“Wave in base? Death timers long enough? Hit Nexus turrets.”'}
];

const poolGrid = document.getElementById('pool-grid');
function renderPool(role){
  poolGrid.innerHTML = championData[role].map((c)=>`<div class="champ-card reveal visible" role="button" tabindex="0" aria-expanded="false" aria-label="${c.name}: show pick details"><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${c.id}_0.jpg" alt="" loading="lazy"><span class="stats">${c.wr}% <small>WR</small> / ${c.pick}% <small>PICK</small></span><div class="champ-card-inner"><span class="tag">${c.tag}</span><div><strong>${c.name}</strong><p class="card-description">${c.line}</p></div></div><div class="card-detail" hidden>${c.detail}<br><a href="${c.url}" target="_blank" rel="noopener">OPEN MOBALYTICS ↗</a></div></div>`).join('');
  poolGrid.querySelectorAll('.champ-card').forEach(card=>card.addEventListener('click',e=>{
    if(e.target.closest('a'))return;
    const detail=card.querySelector('.card-detail');
    const open=detail.hidden;
    poolGrid.querySelectorAll('.card-detail').forEach(el=>{el.hidden=true;el.parentElement.setAttribute('aria-expanded','false')});
    detail.hidden=!open;card.setAttribute('aria-expanded',String(open));
  }));
  poolGrid.querySelectorAll('.champ-card').forEach(card=>card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.click()}}));
}
renderPool('mid');
document.querySelectorAll('.role-filters button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.role-filters button').forEach(b=>b.classList.toggle('active',b===btn));
  renderPool(btn.dataset.role);
}));

const range=document.getElementById('phase-range');
const phaseArt=document.querySelector('.phase-art');
const phaseArts=['MonkeyKing','Jinx','Ekko','Ornn'];
function renderPhase(i){
  const p=phases[i];
  document.getElementById('phase-count').textContent=`0${i+1} / 04`;
  document.getElementById('phase-eyebrow').textContent=p.eyebrow;
  document.getElementById('phase-title').innerHTML=p.title;
  document.getElementById('phase-intro').textContent=p.intro;
  document.getElementById('phase-you').textContent=p.you;
  document.getElementById('phase-buddy').textContent=p.buddy;
  document.getElementById('phase-call').textContent=p.call;
  document.getElementById('phase-ghost').textContent=`0${i+1}`;
  phaseArt.style.backgroundImage=`linear-gradient(120deg,#0c1513b5,#061010b5),url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${phaseArts[i]}_0.jpg')`;
  range.style.background=`linear-gradient(90deg,var(--acid) ${i/3*100}%,#365249 ${i/3*100}%)`;
  document.querySelectorAll('[data-phase]').forEach(b=>b.classList.toggle('active',Number(b.dataset.phase)===i));
}
range.addEventListener('input',()=>renderPhase(Number(range.value)));
document.querySelectorAll('[data-phase]').forEach(btn=>btn.addEventListener('click',()=>{range.value=btn.dataset.phase;renderPhase(Number(range.value))}));
renderPhase(0);

document.querySelectorAll('.macro-card').forEach((card,i)=>{card.style.setProperty('--card-art',`url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${['Vex','Rammus','Garen','Jinx'][i]}_0.jpg')`)});
document.getElementById('print-card').addEventListener('click',e=>{e.preventDefault();window.print()});

const pairings={
  'mid-jungle':{label:'MID + JUNGLE / SHARED RIVER',title:'THE FIRST<br><em>RIVER WINDOW.</em>',situation:'Duo Two wants Scuttle or a bot-side play. Enemy mid still has a wave to clear.',one:'Call your next crash: “Wave in ten.” Push safely, then leave the lane together. Vex fear or Ekko W is your setup, not a reason to abandon the wave.',two:'Path toward the same river, track the opposing jungler, and hold the entrance until Duo One can move. Gank only if the lane state and escape route are real.',call:'“Wave in ten. Meet bot river. Fight only if I arrive first.”',abort:'Enemy mid moves first, or your wave is stuck under tower.',pain:'Pain point: jungler enters river alone while mid loses a wave. Fix: name the crash time before the move.',art:'Vex'},
  'mid-top':{label:'MID + TOP / CROSS-MAP',title:'TRADE THE<br><em>OTHER SIDE.</em>',situation:'Duo Two has top pressure while dragon is spawning bot side. You are not standing next to each other.',one:'Push mid and scout which team controls bot river. If the enemy sends numbers top, take mid plates, bot vision or dragon with the remaining team.',two:'Say whether top wave is crashing or coming back and whether Teleport is available. Force the top tower only if the enemy cannot collapse; otherwise hold wave and be ready to join.',call:'“I have mid push. If they send two top, we take bot side.”',abort:'Top has no escape vision, or bot river is already lost.',pain:'Pain point: both players rotate toward the same losing skirmish. Fix: announce the cross-map trade and keep a lane pushing.',art:'Ornn'},
  'adc-jungle':{label:'ADC + JUNGLE / BOT WINDOW',title:'GANK THE<br><em>WAVE STATE.</em>',situation:'Duo Two is pathing bot while your support is a random teammate. The enemy duo is pushing toward your tower.',one:'Keep the wave on your half, preserve health, and signal support cooldowns or summoners. Jinx follows CC with traps; Veigar cages the retreat path.',two:'Approach only after checking enemy ward and support position. If the gank succeeds, help crash and take the nearest safe plate or dragon setup.',call:'“Wave coming to us. Support has engage. Come after this wave.”',abort:'Support is recalling, your HP is low, or enemy jungle is unseen.',pain:'Pain point: jungler ganks a pushed lane while support cannot follow. Fix: Duo One calls wave direction and support readiness first.',art:'Jinx'},
  'adc-top':{label:'ADC + TOP / TWO LANES',title:'PROTECT THE<br><em>CARRY WINDOW.</em>',situation:'You are bot, Duo Two is top. A dragon fight is coming, but top wave is still moving away.',one:'Farm toward the bot role quest, keep your support informed, and ask whether Teleport can cover dragon. Do not force an early 3v4 while Duo Two cannot arrive.',two:'Set top wave first. Ornn looks for a Teleport flank when the fight matters; Garen can trade top tower if the dragon contest is bad.',call:'“Dragon in one minute. Can you set top wave and TP, or do we trade?”',abort:'No top wave setup or safe Teleport ward; play for a trade.',pain:'Pain point: ADC assumes top can join instantly. Fix: Duo Two calls wave and Teleport status before the objective timer reaches one minute.',art:'Garen'}
};
const pairKeys=Object.keys(pairings);
function renderPair(key){
  const p=pairings[key],i=pairKeys.indexOf(key);
  document.querySelectorAll('[data-pair]').forEach(btn=>btn.classList.toggle('active',btn.dataset.pair===key));
  document.getElementById('pair-label').textContent=p.label;
  document.getElementById('pair-num').textContent=`0${i+1} / 04`;
  document.getElementById('pair-title').innerHTML=p.title;
  document.getElementById('pair-situation').textContent=p.situation;
  document.getElementById('pair-one').textContent=p.one;
  document.getElementById('pair-two').textContent=p.two;
  document.getElementById('pair-call').textContent=p.call;
  document.getElementById('pair-abort').textContent=p.abort;
  document.getElementById('pair-pain').textContent=p.pain;
  document.getElementById('pair-image').style.backgroundImage=`linear-gradient(180deg,#0b17101a,#081514d9),url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${p.art}_0.jpg')`;
  document.querySelector('.pair-stamp span').textContent=` / 0${i+1}`;
}
document.querySelectorAll('[data-pair]').forEach(btn=>btn.addEventListener('click',()=>renderPair(btn.dataset.pair)));
renderPair('mid-jungle');

const desktopQuery=window.matchMedia('(min-width: 901px)');
const ids=['top','draft','timeline','pairings','macro','response','field-card','sources'];
const sections=ids.map(id=>document.getElementById(id));
const railLinks=[...document.querySelectorAll('#chapter-nav a')];
let active=0,lastWheel=0;
function setChapter(i,updateHash=true){
  active=Math.max(0,Math.min(ids.length-1,i));
  sections.forEach((s,n)=>{s.classList.toggle('active',n===active);s.inert=n!==active});
  railLinks.forEach((a,n)=>{a.classList.toggle('active',n===active);if(n===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  document.getElementById('progress').style.width=`calc((100vw - var(--rail)) * ${(active+1)/ids.length})`;
  if(updateHash && desktopQuery.matches)history.replaceState(null,'',`#${ids[active]}`);
}
function syncMode(){
  if(desktopQuery.matches){let i=ids.indexOf(location.hash.slice(1));setChapter(i<0?0:i,false)}
  else{sections.forEach(s=>{s.classList.remove('active');s.inert=false});document.getElementById('progress').style.width='0'}
}
railLinks.forEach((link,i)=>link.addEventListener('click',e=>{if(desktopQuery.matches){e.preventDefault();setChapter(i)}}));
document.querySelectorAll('a[href^="#"]').forEach(link=>{if(railLinks.includes(link))return;link.addEventListener('click',e=>{const id=link.getAttribute('href').slice(1),i=ids.indexOf(id);if(desktopQuery.matches&&i>=0){e.preventDefault();setChapter(i)}})});
window.addEventListener('hashchange',()=>{if(desktopQuery.matches){let i=ids.indexOf(location.hash.slice(1));if(i>=0)setChapter(i,false)}});
desktopQuery.addEventListener('change',syncMode);
syncMode();
window.addEventListener('wheel',e=>{if(!desktopQuery.matches||Math.abs(e.deltaY)<28)return;const now=Date.now();if(now-lastWheel<800)return;lastWheel=now;setChapter(active+(e.deltaY>0?1:-1))},{passive:true});
window.addEventListener('keydown',e=>{if(!desktopQuery.matches||['INPUT','BUTTON'].includes(document.activeElement.tagName))return;if(['ArrowRight','ArrowDown','PageDown'].includes(e.key)){e.preventDefault();setChapter(active+1)}if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();setChapter(active-1)}});
const mobileObserver=new IntersectionObserver(entries=>{if(desktopQuery.matches)return;entries.forEach(entry=>{if(entry.isIntersecting){const i=ids.indexOf(entry.target.id);if(i>=0){active=i;railLinks.forEach((a,n)=>a.classList.toggle('active',n===i));document.getElementById('progress').style.width=`${(i+1)/ids.length*100}%`}}})},{rootMargin:'-40% 0px -45% 0px'});sections.forEach(s=>mobileObserver.observe(s));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
