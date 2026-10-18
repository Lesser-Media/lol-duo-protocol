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
  {eyebrow:'00—03 / SETUP THE FIRST ROUTE',title:'NAME THE<br><em>FIRST SIDE.</em>',intro:'2026 minions spawn at 0:30, buff camps at 0:55 and first Scuttle at 2:55. Guard entrances; note leash or vision clues. These are spawn rules, not a forced fight schedule.',you:'Mid: watch the first two waves and preserve HP for the side your jungler will finish. ADC: protect XP and bot role quest farm; ping support readiness before a trade.',buddy:'Jungle: say start camp, clear direction and possible first play. Top: identify whether you are strong or weak side, and do not lose a full wave for a speculative river move.',call:'“I end bot side. Can you move after wave three?”'},
  {eyebrow:'03—08 / LANE AND FIRST RESETS',title:'MAKE A<br><em>REAL WINDOW.</em>',intro:'A push creates time only when the wave actually reaches tower. A gank works better when the wave comes toward your side and laner has health and control.',you:'Mid: crash before river movement; if the enemy wave is already coming in, hold it for a gank. ADC: call support CC, summoners and wave direction.',buddy:'Jungle: do not start river alone when nearby lanes must catch waves. Top: slow push and crash before roaming to upper river; track Teleport.',call:'“Crash in ten, then move” or “hold it, gank after next wave.”'},
  {eyebrow:'08—15 / TOWER PRESSURE OR 15-MINUTE END',title:'SPEND THE<br><em>ADVANTAGE.</em>',intro:'If the game is nearly decided by 15, convert kills immediately: crash, plates, tower, objective, reset. If behind, a surrender vote is optional; judge wave clear, scaling and access to safe farm.',you:'Mid: match a roam with pings, safe follow or a punish crash. ADC: finish lane quest farm and take plates only with vision and support cover.',buddy:'Jungle: choose the nearby objective you can finish before respawns. Top: crash before moving; trade opposite side when joining is impossible.',call:'“What do we take before they return?”'},
  {eyebrow:'15—20 / ROTATE AFTER FIRST TOWER',title:'STOP THE<br><em>MID ARAM.</em>',intro:'After a bot tower falls, ADC and support can use mid as a safer farm lane. Mid or top catches side waves and returns before the real fight. Baron opens at 20:00.',you:'ADC: collect mid wave, then move with support; avoid solo deep side farming. Mid: catch a side wave to a safe point and rotate back, rather than sharing every mid CS.',buddy:'Jungle: sweep entrances with an ally, never alone. Top: prepare the side wave that will pressure when the next neutral objective appears.',call:'“I catch side, then I am back before spawn.”'},
  {eyebrow:'20—30 / BARON AND SIEGE',title:'PRESSURE<br><em>TWO LANES.</em>',intro:'Show a live wave before Baron. After Baron, stagger lanes rather than stacking five into one defended wave. Use vision, health and death timers to decide whether to start or turn.',you:'Jinx/Veigar stay protected; Vex/Xerath control entrances; Ekko can pressure side with a safe exit and timely return.',buddy:'Jungle: preserve Smite and track enemy approach. Top: Ornn groups to engage; Garen sides only if team can disengage and his wave reaches a structure.',call:'“Side wave meets first. Then we threaten Baron or tower.”'},
  {eyebrow:'30—45 / ONE DEATH CAN DECIDE IT',title:'PLAY THE<br><em>DEATH TIMERS.</em>',intro:'Long respawns make a single pick decisive. Reset for items and wards together, clear one safe wave, then move as a unit. If their carries die and your wave enters base, check the Nexus before another epic monster.',you:'Carry: hit closest safe target and avoid fog. Mid: control the route into objective; preserve the key CC spell for a flank or diver.',buddy:'Jungle: do not face-check or start an unprotected 50/50. Top: synchronize side pressure with the other four; Teleport before the fight, not after it ends.',call:'“Wave, timers, towers. Can we end now?”'}
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

const waveLessons={
  freeze:{label:'01 / DENY AND INVITE',title:'FREEZE NEAR YOUR TOWER.',caption:'KEEP THE MEETING POINT ON YOUR HALF',position:'23%',purpose:'Keep enemy minions alive just outside your tower. The opponent must walk forward for CS; your jungler gets a longer approach. Mid freezes are shorter and easier to break than side-lane freezes.',how:'Last-hit late. Let the enemy wave stay slightly larger; trim only enough to stop it crashing. If needed, briefly hold its aggro outside turret range while your next wave arrives, then step out.',when:'Enemy jungle may be near, Duo Two is pathing to gank, or you need safe farm while behind. Call your jungler before they cross mid.',call:'“Wave held on my side. Come after your next camp; I have CC and HP.”',fail:'Do not tank a large wave at low HP. If enemy mid can hard-clear or roam freely, break the freeze and match the map.'},
  slow:{label:'02 / BUILD A LARGE WAVE',title:'SLOW PUSH FOR A TIMER.',caption:'STACK TWO OR MORE WAVES TOWARD THEM',position:'64%',purpose:'A growing allied wave gives you a safer crash, a recall window and minions that occupy the defender. On a side lane it can become the second threat during an objective.',how:'Kill the enemy ranged minions first or maintain a small allied minion advantage, then last-hit rather than clearing instantly. Escort the stack until it reaches turret.',when:'You plan to recall, roam, dive with vision, or pull a defender before an objective. Start early enough that the wave reaches a useful place before the fight.',call:'“Building two waves. Meet me for the crash, then we move.”',fail:'If the enemy can freeze the stack before tower or enemy jungle can collapse, call Duo Two to help crash or abandon the deep escort.'},
  crash:{label:'03 / BUY IMMEDIATE TIME',title:'FAST PUSH AND CRASH.',caption:'CLEAR THE WAVE ALL THE WAY TO TOWER',position:'87%',purpose:'A completed crash makes the enemy choose between clearing minions and following you. It also sets up a safer recall, ward, river contest or tower hit.',how:'Use abilities and autos to clear quickly, but watch mana and the next incoming wave. Stay until your minions actually reach tower; a wave parked outside tower can freeze against you.',when:'Enemy recalled or died, your jungler is contesting nearby, or the next objective needs mid priority. Move on the same side as your jungler after the crash.',call:'“Crash now. I can move first for river for one wave.”',fail:'Do not shove blind into a missing jungler or sacrifice your escape spell to clear when enemy engage is ready.'},
  bounce:{label:'04 / RESET THE LANE',title:'CRASH, THEN CATCH THE BOUNCE.',caption:'TOWER CLEARS YOUR WAVE; ENEMY WAVE RETURNS',position:'48%',purpose:'After your wave hits the enemy tower and dies, the next waves often push back toward you. Recall, then return to catch them on your side instead of walking into a long lane.',how:'Crash a full wave and leave. Check whether the defender cleared it or held it; the bounce is only real if the next waves move toward you. Trim a large return wave before it hits your tower.',when:'You have gold to spend, a resource deficit or need to reset before dragon, Herald or Baron setup.',call:'“Wave hit tower. I reset now; cover the return if they hard shove.”',fail:'A partial push or enemy freeze defeats the bounce. Ask for help breaking the freeze rather than donating another wave.'},
  pull:{label:'05 / CHANGE WHERE WAVES MEET',title:'PULL OR TRIM CAREFULLY.',caption:'MOVE AGGRO, THEN RECHECK THE NEXT WAVE',position:'32%',purpose:'A brief pull can shift enemy minions toward your side; trimming reduces a large enemy stack so it does not crash. Both actions change the next wave and your gank window.',how:'When safe, draw minion aggro and step toward your side without taking them under tower. To trim, kill some minions while keeping an enemy advantage. Recount the wave as reinforcements arrive.',when:'You need a gank setup or safe catch and the enemy cannot punish your position. In bot lane coordinate with support; in top lane respect the long lane.',call:'“I am trimming the stack, not clearing it. Come on the next wave.”',fail:'Never stand in an enemy wave for a textbook count. If health, matchup or enemy jungle location is bad, collect under tower instead.'}
};
function renderWave(key){const w=waveLessons[key],i=Object.keys(waveLessons).indexOf(key);document.querySelectorAll('[data-wave]').forEach(b=>{const active=b.dataset.wave===key;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});['label','title','purpose','how','when','call','fail','caption'].forEach(k=>document.getElementById(`wave-${k}`).textContent=w[k]);document.getElementById('wave-code').textContent=`0${i+1} / 05`;document.getElementById('wave-token').style.left=w.position;}
document.querySelectorAll('[data-wave]').forEach(b=>b.addEventListener('click',()=>renderWave(b.dataset.wave)));renderWave('freeze');

const syncState={route:'toward',wave:'ours',enemy:'known'};
function renderSync(){const {route,wave,enemy}=syncState;document.querySelectorAll('[data-sync-route],[data-sync-wave],[data-sync-enemy]').forEach(b=>{const active=Object.entries(syncState).some(([k,v])=>b.dataset[`sync${k[0].toUpperCase()+k.slice(1)}`]===v);b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
  let p;
  if(wave==='theirs'&&route==='toward')p={title:'HOLD THE WAVE. SET THE GANK.',explain:'The enemy is pushing into you and your jungler is coming. A shove removes the lane length Duo Two needs. Protect health and let the wave approach your side.',one:'Last-hit and trim the stack before it hits tower. Save fear, cage or slow for the enemy commitment.',two:'Finish the nearby camp, check enemy vision and enter when the opponent walks up. If the wave is too large, help clear after the play.',say:'“Wave coming to me. Do not show yet; gank after next wave.”'};
  else if(wave==='theirs'&&route==='away')p={title:'CATCH FIRST. PING THE LIMIT.',explain:'Mid cannot move first while clearing a wave at its tower. A far-side jungle play must not assume your rotation.',one:'Collect XP and trim safely. Ping enemy mid missing if they leave first; clear and follow only when the lane is safe.',two:'Trade camps or play the lane on your side. Avoid a river contest that requires mid to abandon the entire wave.',say:'“I am catching mid; no priority for this river.”'};
  else if(route==='toward'&&enemy==='known')p={title:'CRASH, THEN MOVE TOGETHER.',explain:'You can push and the opposing jungler is seen elsewhere. Turn this temporary mid priority into vision, a river contest, a gank or a reset.',one:'Clear the wave into tower; announce when it lands. Move on Duo Two’s side and return for the next catch.',two:'Time your camp finish to the crash. Enter river with Duo One; do not start the objective while the wave is still neutral.',say:'“Wave hits in ten. Meet river; we have first move.”'};
  else if(route==='toward')p={title:'PUSH WITH COVER, NOT ALONE.',explain:'You want river priority, but the enemy jungler is missing. The wave is useful only if both players survive the crash and can move together.',one:'Keep an escape spell, lean toward your jungler and stop at the safe line until enemy location or vision improves.',two:'Hover the warded side or show briefly to protect the crash. If the enemy 2v2 wins, give the entrance and reroute.',say:'“Cover my crash; enemy jungle is missing. No blind river.”'};
  else if(enemy==='unknown')p={title:'SHORT PUSH OR HOLD SAFELY.',explain:'Your jungler is leaving and enemy jungle may be near. Perma-shoving exposes mid to the two-player collapse without an immediate payoff.',one:'Thin the wave, keep it near center or your side, ward the likely entry and preserve health. Hard-crash only with clear information.',two:'Say the path away from mid. Track the enemy jungler and ping when you can return or countergank.',say:'“You are away; I hold mid until we see their jungle.”'};
  else p={title:'PUSH FOR YOUR OWN TIMER.',explain:'Enemy jungle is seen elsewhere, but Duo Two is playing away. A safe crash may buy a recall, ward or cross-map response; do not invent a river fight.',one:'Crash if your matchup allows, spend the timer on vision or a reset, and return before losing the next wave.',two:'Play the far-side lane or camps. Tell Duo One whether to mirror enemy mid movement or punish the unattended mid tower.',say:'“I can crash and reset; you play your side.”'};
  ['title','explain','one','two','say'].forEach(k=>document.getElementById(`sync-${k}`).textContent=p[k]);}
document.querySelectorAll('[data-sync-route],[data-sync-wave],[data-sync-enemy]').forEach(b=>b.addEventListener('click',()=>{for(const k of Object.keys(syncState)){const v=b.dataset[`sync${k[0].toUpperCase()+k.slice(1)}`];if(v)syncState[k]=v;}renderSync()}));renderSync();

const range=document.getElementById('phase-range');
const phaseArt=document.querySelector('.phase-art');
const phaseArts=['MonkeyKing','Vex','Jinx','Ekko','Ornn','Garen'];
function renderPhase(i){
  const p=phases[i];
  document.getElementById('phase-count').textContent=`0${i+1} / 06`;
  document.getElementById('phase-eyebrow').textContent=p.eyebrow;
  document.getElementById('phase-title').innerHTML=p.title;
  document.getElementById('phase-intro').textContent=p.intro;
  document.getElementById('phase-you').textContent=p.you;
  document.getElementById('phase-buddy').textContent=p.buddy;
  document.getElementById('phase-call').textContent=p.call;
  document.getElementById('phase-ghost').textContent=`0${i+1}`;
  phaseArt.style.backgroundImage=`linear-gradient(120deg,#0c1513b5,#061010b5),url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${phaseArts[i]}_0.jpg')`;
  range.style.background=`linear-gradient(90deg,var(--acid) ${i/5*100}%,#365249 ${i/5*100}%)`;
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

const scenarios={
  roam:{label:'ROAMING / LOST WAVES',title:'THE ROAM THAT COSTS TWO WAVES.',pain:'Players report arriving at a side fight late, gaining nothing, then returning to missing CS and plates. A roam needs a window and a target, not just a ping.',read:'Check wave at tower, ally lane HP/CC, enemy escape and next incoming mid wave. A river fight may justify dropping a wave only when your timely arrival changes the numbers.',one:'Mid: stack and crash, move toward your jungler, set a return deadline. If bot is ungankable, spend the timer on vision or recall.',two:'Jungle: name the route before mid clears. Wait for the crash; do not enter fog assuming mid can move.',abort:'If the wave is stuck outside enemy tower, fix it. If the target retreats, return to mid before the next wave dies.',call:'“Crash first. We have one wave to look bot.”',drill:'Review the wave and CS at departure and return.',art:'Vex'},
  invade:{label:'JUNGLE / NO LANE PRIORITY',title:'THE INVADE THAT MID CANNOT FOLLOW.',pain:'A common duo argument starts when jungle invades and mid is collecting a wave under tower. The nearest lane can arrive first, even when the fight is in your jungle.',read:'Before crossing river, count who has first move from mid and the side lane. Check whether your 2v2 wins and whether the exit is warded.',one:'Mid: call “no move” before the invade. Ping the missing enemy mid and clear toward a later, safer window.',two:'Jungle: reroute to camps, gank the pushed lane or trade opposite side. Invade only with lane cover or firm enemy location.',abort:'Enemy mid leaves first, your health is low, or the camp is gone. Exit before the collapse.',call:'“Mid no prio. Skip invade; meet after next crash.”',drill:'At the invade timestamp, pause and count wave + arrival times.',art:'MonkeyKing'},
  gank:{label:'GANKING / BAD WAVE',title:'THE GANK INTO AN UNREACHABLE LANE.',pain:'Junglers often arrive while their laner has shoved the target under tower, or while support is recalling. The route was planned without the wave.',read:'Ask which direction the wave moves, whether ally CC and health exist, where support is, and whether a countergank is possible.',one:'Mid or ADC: preserve the incoming wave on your side and name the CC or summoner window. Bot also confirms support can follow.',two:'Jungle: time the route to the next wave. If it is already shoved, cover a crash, ward, dive only with numbers, or leave.',abort:'No follow-up, huge enemy wave, missing enemy jungle, or too little HP. Take information and reset the route.',call:'“Wave coming to us. Gank on next meeting point.”',drill:'In replay, locate the wave when jungle first entered river.',art:'Jinx'},
  aram:{label:'MID GAME / RESOURCE LOSS',title:'FIVE PLAYERS SHARE ONE WAVE.',pain:'Players describe the mid-game ARAM: ADC starves, side waves die untouched, and a random mid skirmish spends ultimates before the real objective.',read:'After a tower falls, assign the protected mid wave to ADC/support when practical. Mid/top catches the safe side wave; the whole team reconvenes before objective spawn.',one:'ADC: collect mid then move with support. Mid: catch side to a safe line, push once, and return to fog near the team.',two:'Jungle: cover the side catch if enemies are missing, then lead the vision move. Top: own the opposite side wave when appropriate.',abort:'If the team is about to be engaged 4v5 or the next objective is immediate, stop the deep side push and group.',call:'“ADC mid. I catch side once; regroup in twenty.”',drill:'Count side waves lost while two carries shared mid CS.',art:'Xerath'},
  side:{label:'SIDE LANE / LATE ARRIVAL',title:'THE SPLIT THAT MISSES THE FIGHT.',pain:'Recent player discussions describe pushing side while allies fight 4v5, then teleporting after the result is decided. Side pressure must land before the other threat.',read:'Check objective timer, Teleport, a safe ward or route, enemy map positions and whether four allies can disengage.',one:'Mid Ekko may side; Vex/Xerath usually catch then return. ADC stays protected and pings the team away from an early engage.',two:'Top Garen pushes the opposite side only with an exit or timely Teleport. Ornn normally groups when his engage is the team’s way in.',abort:'If allies cannot hold, TP is down, or two enemies are missing near side, clear to safety and group early.',call:'“Wave hits in twenty. Do not fight until I am in position.”',drill:'Pause 45 seconds before the fight. Was the side wave already forcing a response?',art:'Garen'},
  behind:{label:'DEFENSE / FALSE CONTEST',title:'THE OBJECTIVE YOU CANNOT ENTER.',pain:'Teams behind often face-check late for dragon or Baron and lose both the objective and the next tower. A losing fight can be traded for farm, vision at home or a cross-map wave.',read:'Compare numbers, health, Smite, ultimates and safe approach. If the river is dark and the enemy arrived first, contest only with a real flank or steal angle.',one:'Carry farms a protected wave and preserves Flash. Mid clears safely and pings enemy rotations; do not walk alone for a ward.',two:'Jungle identifies a trade or defensive camp route. Top pushes a safe opposite wave if the team can defend the next structure.',abort:'Do not send one player to die for a control ward. If enemy leaves objective, re-enter together after clearing a wave.',call:'“We cannot enter. Trade top wave; defend next tower.”',drill:'Review the first death before the objective, not only the final fight.',art:'Ornn'},
  end:{label:'CONVERSION / NEXUS',title:'BARON OR THE NEXUS?',pain:'Teams win a late fight, then wander into camps or start Baron while a live minion wave and long death timers could end the game.',read:'Count living defenders, your health, minion position, remaining towers and exact respawn timers. The answer changes with every second.',one:'ADC hits structures from safety; mid zones the returning defender and preserves wave clear against a counterpush.',two:'Jungle escorts the wave and calls whether Baron is a fallback. Top tanks only within safe tower rules and clears the path.',abort:'If wave is too far away or defenders respawn before both Nexus towers fall, take Baron, inhibitor or reset together.',call:'“Wave in base, two dead for forty. Hit Nexus turrets.”',drill:'After every won fight, pause and compare end time with Baron time.',art:'Wukong'}
};
function renderScenario(key){const s=scenarios[key],i=Object.keys(scenarios).indexOf(key);document.querySelectorAll('[data-scenario]').forEach(b=>{const active=b.dataset.scenario===key;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});['label','title','pain','read','one','two','abort','call','drill'].forEach(k=>document.getElementById(`scenario-${k}`).textContent=s[k]);document.getElementById('scenario-num').textContent=`0${i+1} / 07`;document.getElementById('scenario-art').style.backgroundImage=`linear-gradient(180deg,#09171822,#071318db),url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${s.art==='Wukong'?'MonkeyKing':s.art}_0.jpg')`;}
document.querySelectorAll('[data-scenario]').forEach(b=>b.addEventListener('click',()=>renderScenario(b.dataset.scenario)));renderScenario('roam');

const sourceSets={
  patch:[
    ['Riot · patch 26.20 notes','https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes/'],
    ['Riot · 2026 season systems','https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/'],
    ['Riot · patch schedule','https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends'],
    ['Mobalytics · live tier list','https://mobalytics.gg/lol/tier-list']
  ],
  coaching:[
    ['Mobalytics · wave control and bounce','https://mobalytics.gg/lol/guides/wave-management'],
    ['Mobalytics · mid map impact','https://mobalytics.gg/lol/guides/4-tips-to-impact-the-map-as-the-mid-laner'],
    ['Mobalytics · gank setup','https://mobalytics.gg/lol/guides/gank-setup'],
    ['Mobalytics · recall timing','https://mobalytics.gg/lol/guides/5-best-recall-timers'],
    ['Mobalytics · split-push decisions','https://mobalytics.gg/lol/guides/how-to-split-push'],
    ['Mobalytics · vision setup','https://mobalytics.gg/lol/guides/warding-guide']
  ],
  community:[
    ['Summoner School · roaming midlane (Mar 2026)','https://www.reddit.com/r/summonerschool/comments/1rkzstn/roaming_midlane/'],
    ['Summoner School · midlane fundamentals (Aug 2026)','https://www.reddit.com/r/summonerschool/comments/1vk44qv/midlane_fundamentals/'],
    ['Summoner School · ADC mid-game (Jun 2026)','https://www.reddit.com/r/summonerschool/comments/1u194el/mid_game_adc/'],
    ['Summoner School · side-lane timing (Oct 2026)','https://www.reddit.com/r/summonerschool/comments/1x1i5nf/midlane_how_to_farm_in_the_sidelane_without/'],
    ['Summoner School · mid game map conversion (Jul 2026)','https://www.reddit.com/r/summonerschool/comments/1v2d7xe/how_to_play_midgame/']
  ]
};
function renderSources(key){document.querySelectorAll('[data-source]').forEach(b=>{const active=b.dataset.source===key;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});document.getElementById('source-links').innerHTML=sourceSets[key].map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener">${name}<span>↗</span></a>`).join('');}
document.querySelectorAll('[data-source]').forEach(b=>b.addEventListener('click',()=>renderSources(b.dataset.source)));renderSources('patch');

const desktopQuery=window.matchMedia('(min-width: 901px)');
const ids=['top','draft','wave','sync','timeline','pairings','scenarios','macro','response','field-card','sources'];
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
