const PAIRS = {
  mj: {
    label: 'MID + JUNGLE', mode: 'SYNCED ROUTES', oneRole: 'MID', twoRole: 'JUNGLE',
    oneChamps: 'VEX / EKKO / XERATH', twoChamps: 'WUKONG / RAMMUS',
    oneJob: 'Call when Mid wave will crash and whether you can leave with health, mana and crowd control.',
    twoJob: 'Call your clear direction and arrival wave. Cover Mid’s crash, then choose the gank, river move, ward or reset together.',
    win: 'Mid’s crash opens the route; Jungle’s route makes the crash safe. After a kill, fix the wave and take one reachable map gain.',
    artOne: 'Vex', artTwo: 'MonkeyKing'
  },
  mt: {
    label: 'MID + TOP', mode: 'SYNCED PRESSURE', oneRole: 'MID', twoRole: 'TOP',
    oneChamps: 'VEX / EKKO / XERATH', twoChamps: 'ORNN / GAREN',
    oneJob: 'Call your next Mid crash and the enemy Mid’s move. Take the top-side route only when your wave lets you leave.',
    twoJob: 'Call your Top wave, enemy response and Teleport timing. Build the second threat or join before the fight starts.',
    win: 'Crash Mid and Top waves together. If opponents answer one lane, the other takes a safe tower, river move or numbers edge.',
    artOne: 'Ekko', artTwo: 'Ornn'
  },
  aj: {
    label: 'ADC + JUNGLE', mode: 'SYNCED ROUTES', oneRole: 'ADC', twoRole: 'JUNGLE',
    oneChamps: 'JINX / VEIGAR', twoChamps: 'WUKONG / RAMMUS',
    oneJob: 'Call bot wave, support position, HP and crowd control. Preserve farm and lane quest progress before a dragon call.',
    twoJob: 'Path toward a real bot window and confirm support can join. Cover the crash, then agree on reset or dragon without taking the carry’s farm.',
    win: 'Bot’s crash and Jungle’s arrival line up. Convert a safe play into a plate, dragon setup or shared reset after the wave is fixed.',
    artOne: 'Jinx', artTwo: 'MonkeyKing'
  },
  at: {
    label: 'ADC + TOP', mode: 'SYNCED PRESSURE', oneRole: 'ADC', twoRole: 'TOP',
    oneChamps: 'JINX / VEIGAR', twoChamps: 'ORNN / GAREN',
    oneJob: 'Call bot wave, support cover and how long your team can delay an objective. Stay protected while Top builds side pressure.',
    twoJob: 'Set Top’s side wave, identify its defender and call whether you will Teleport, trade structure or join before the fight.',
    win: 'Top forces a side answer while ADC controls a protected lane. If enemies force center, Top calls the trade or Teleport before ADC commits.',
    artOne: 'Jinx', artTwo: 'Garen'
  }
};

const PAIR_ART = {
  mj: ['Vex','Ekko','Xerath','MonkeyKing','Rammus'],
  mt: ['Vex','Ekko','Xerath','Ornn','Garen'],
  aj: ['Jinx','Veigar','MonkeyKing','Rammus'],
  at: ['Jinx','Veigar','Ornn','Garen']
};

const PATCH_CHECK = {
  mj: 'DUO ONE checks Mid wave and Vex/Ekko/Xerath changes. DUO TWO checks first clear, Wukong/Rammus and objectives. Rehearse one changed route × wave call.',
  mt: 'DUO ONE checks Mid wave and pool changes. DUO TWO checks Top quest, Teleport and Ornn/Garen. Rehearse one cross-map call.',
  aj: 'DUO ONE checks bot wave, support matchup and Jinx/Veigar. DUO TWO checks first clear, Wukong/Rammus and dragon timing. Rehearse one bot crash × route call.',
  at: 'DUO ONE checks bot wave, support matchup and Jinx/Veigar. DUO TWO checks Top quest, Teleport and Ornn/Garen. Rehearse one center-and-side call.'
};

const CHAPTERS = [
  {id:'command',num:'00',nav:'COMMAND',title:'PLAY THE SAME GAME.'},
  {id:'draft',num:'01',nav:'DRAFT',title:'PICK THE PLAN.<br><em>THEN THE CHAMPS.</em>',summary:'Two locks, two bans, one shared win condition. Choose who can safely show first and what the composition still needs.'},
  {id:'wave',num:'02',nav:'ROUTE × WAVE',title:'MAKE THE WAVE<br><em>YOUR TIMER.</em>',summary:'A lane move is real when both waves, the route or Teleport, and the enemy response line up.'},
  {id:'windows',num:'03',nav:'PLAY WINDOWS',title:'CREATE THE<br><em>TWO-PLAYER WINDOW.</em>',summary:'Every gank, roam and cross-map trade starts with two reports and one explicit commit.'},
  {id:'clock',num:'04',nav:'GAME CLOCK',title:'SAME CLOCK.<br><em>SAME CALL.</em>',summary:'Match both players’ waves and routes to the next objective timer, from the first clear to a 45-minute finish.'},
  {id:'map',num:'05',nav:'MAP CONVERSION',title:'CASH THE<br><em>PRESSURE.</em>',summary:'Both players build the position. Then turn it into vision, monsters, towers, side waves or Nexus.'},
  {id:'recovery',num:'06',nav:'RECOVERY',title:'RESET THE<br><em>CALL.</em>',summary:'When the map breaks, both players name the loss, choose a safe exchange and rebuild the next window.'},
  {id:'sources',num:'07',nav:'EVIDENCE',title:'KNOW WHAT IS CURRENT.'}
];

const SOURCE_SETS = {
  rules: [
    ['Riot · patch 26.20 notes','https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes/'],
    ['Riot · 2026 season systems','https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/'],
    ['Riot · 26.9 wave and role quest updates','https://www.leagueoflegends.com/en-gb/news/game-updates/league-of-legends-patch-26-9-notes/'],
    ['Riot · 26.11 mid quest update','https://www.leagueoflegends.com/en-ph/news/game-updates/league-of-legends-patch-26-11-notes/'],
    ['Riot · 26.12 Top Teleport update','https://www.leagueoflegends.com/en-sg/news/game-updates/league-of-legends-patch-26-12-notes/'],
    ['Riot · 26.19 Teleport update','https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-19-notes/'],
    ['Riot · patch schedule','https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends'],
    ['Mobalytics · live tier list','https://mobalytics.gg/lol/tier-list']
  ],
  coaching: [
    ['Mobalytics · wave control concepts','https://mobalytics.gg/lol/guides/wave-management'],
    ['Mobalytics · lane priority','https://mobalytics.gg/lol/guides/how-to-lane-without-priority'],
    ['Mobalytics · gank setup','https://mobalytics.gg/lol/guides/gank-setup'],
    ['Mobalytics · mid map impact','https://mobalytics.gg/lol/guides/4-tips-to-impact-the-map-as-the-mid-laner'],
    ['Mobalytics · split pressure','https://mobalytics.gg/lol/guides/how-to-split-push'],
    ['Mobalytics · vision setup','https://mobalytics.gg/lol/guides/warding-guide']
  ],
  community: [
    ['Summoner School · midlane fundamentals, Aug 2026','https://www.reddit.com/r/summonerschool/comments/1vk44qv/midlane_fundamentals/'],
    ['Summoner School · wave help and jungle, Sep 2026','https://www.reddit.com/r/summonerschool/comments/1w6o3o5/junglers_should_be_expected_to_neutralise/'],
    ['Summoner School · roaming midlane, Mar 2026','https://www.reddit.com/r/summonerschool/comments/1rkzstn/roaming_midlane/'],
    ['Summoner School · midgame CS, Apr 2026','https://www.reddit.com/r/summonerschool/comments/1sw8ai5/midlate_game_csing/'],
    ['Summoner School · ADC mid-game, Jun 2026','https://www.reddit.com/r/summonerschool/comments/1u194el/mid_game_adc/'],
    ['Summoner School · side timing, Oct 2026','https://www.reddit.com/r/summonerschool/comments/1x1i5nf/midlane_how_to_farm_in_the_sidelane_without/']
  ]
};

const POOL_RATES = {
  mid:[
    ['VEX','52.3','3.2','https://mobalytics.gg/lol/champions/vex/build/mid'],
    ['EKKO','52.0','4.9','https://mobalytics.gg/lol/champions/ekko/build/mid'],
    ['XERATH','51.2','4.3','https://mobalytics.gg/lol/champions/xerath/build/mid']
  ],
  adc:[
    ['JINX','52.3','17.0','https://mobalytics.gg/lol/champions/jinx/build/adc'],
    ['VEIGAR','53.1','1.2','https://mobalytics.gg/lol/champions/veigar/build/adc']
  ],
  jungle:[
    ['WUKONG','52.3','7.7','https://mobalytics.gg/lol/champions/monkeyking/build/jungle'],
    ['RAMMUS','53.4','2.2','https://mobalytics.gg/lol/champions/rammus/build/jungle']
  ],
  top:[
    ['ORNN','52.1','3.7','https://mobalytics.gg/lol/champions/ornn/build/top'],
    ['GAREN','50.8','6.1','https://mobalytics.gg/lol/champions/garen/build/top']
  ]
};

const chapterHost = document.getElementById('app-main');
const sourceChapter = document.getElementById('sources');
const nav = document.getElementById('chapter-nav');
const pairSelect = document.getElementById('pair-select');
const desktop = window.matchMedia('(min-width: 901px)');
const params = new URLSearchParams(location.search);
let pairKey = PAIRS[params.get('pair')] ? params.get('pair') : 'mj';
let chapterIndex = 0;
let sourceKey = 'rules';
const operationIndex = Object.fromEntries(CHAPTERS.filter(c => !['command','sources'].includes(c.id)).map(c => [c.id,0]));

function text(id,value){document.getElementById(id).textContent = value || '';}
function splash(id){return 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + id + '_0.jpg';}
function opFor(id){const data = id === 'draft' || id === 'wave' || id === 'windows' ? window.DUO_EARLY : window.DUO_LATE;return data[id];}
function pairedField(op,field){return op[field + 'ByPair']?.[pairKey] ?? op[field];}

function makeOperationChapter(meta){
  const section = document.createElement('section');
  section.id = meta.id;
  section.className = 'chapter operation-chapter';
  section.setAttribute('aria-labelledby',meta.id + '-heading');
  section.innerHTML =
    '<div class="chapter-inner operation-inner">' +
      '<div class="section-head"><div><span class="eyebrow">' + meta.num + ' / DUO DECISION</span><h2 id="' + meta.id + '-heading">' + meta.title + '</h2></div><p>' + meta.summary + '</p></div>' +
      '<div class="operation-tabs" role="group" aria-label="' + meta.nav + ' operation"></div>' +
      '<article class="operation-panel">' +
        '<div class="operation-main">' +
          '<div class="operation-lead"><div class="operation-art"><span class="art-index"></span><div class="art-signal"><i></i><i></i><i></i></div></div><div class="operation-read"><span class="label operation-label"></span><h3 class="operation-title"></h3><p class="operation-state"></p></div></div>' +
          '<div class="beat-track" aria-label="Duo execution sequence"><span>01 READ</span><span>02 PREP</span><span>03 SYNC</span><span>04 COMMIT</span><span>05 CONVERT</span></div>' +
          '<div class="duo-cards"><div class="player-card player-one"><div class="player-id"><span>01 / DUO ONE</span><b class="one-role"></b></div><p class="one-action"></p></div><div class="player-card player-two"><div class="player-id"><span>02 / DUO TWO</span><b class="two-role"></b></div><p class="two-action"></p></div></div>' +
          '<div class="sync-exchange"><span class="exchange-icon">↔</span><div><span class="label">THE DUO CALL / BOTH CONFIRM</span><strong class="sync-text"></strong></div></div>' +
          '<div class="replay-check"><span>REPLAY CHECK</span><p class="drill-text"></p></div>' +
        '</div>' +
        '<aside class="decision-rail"><div class="gate gate-go"><span>GO WHEN</span><p class="go-text"></p></div><div class="gate gate-abort"><span>ABORT WHEN</span><p class="abort-text"></p></div><div class="gate gate-fallback"><span>IF THE PLAY IS OFF</span><p class="fallback-text"></p></div><div class="gate gate-convert"><span>CONVERT THE WIN</span><p class="convert-text"></p></div></aside>' +
      '</article>' +
      '<div class="operation-footer"><div><span class="live-dot"></span><span class="operation-count"></span><span class="footer-pair"></span></div><button type="button" class="depth-toggle">WHY + HOW <span>＋</span></button></div>' +
      '<div class="depth-panel" hidden><div><span class="label">WHY THIS WORKS</span><p class="why-text"></p></div><div><span class="label">MECHANIC TO REHEARSE</span><p class="mechanic-text"></p></div><button type="button" class="depth-close" aria-label="Close coach depth">×</button></div>' +
    '</div>';
  section.querySelector('.depth-toggle').addEventListener('click', () => {
    const drawer=section.querySelector('.depth-panel');
    drawer.hidden=!drawer.hidden;
    section.querySelector('.depth-toggle').setAttribute('aria-expanded',String(!drawer.hidden));
  });
  section.querySelector('.depth-close').addEventListener('click', () => {
    section.querySelector('.depth-panel').hidden=true;
    section.querySelector('.depth-toggle').setAttribute('aria-expanded','false');
  });
  return section;
}

function buildChapters(){
  CHAPTERS.filter(c => !['command','sources'].includes(c.id)).forEach(meta => chapterHost.insertBefore(makeOperationChapter(meta),sourceChapter));
  nav.innerHTML = CHAPTERS.map(c => '<a href="#' + c.id + '"><span>' + c.num + '</span><b>' + c.nav + '</b><i>↗</i></a>').join('');
  CHAPTERS.filter(c => !['command','sources'].includes(c.id)).forEach(meta => {
    const section=document.getElementById(meta.id);
    section.querySelector('.operation-tabs').addEventListener('click',event => {
      const button=event.target.closest('button[data-index]');
      if(!button)return;
      operationIndex[meta.id]=Number(button.dataset.index);
      renderOperation(meta.id);
    });
  });
}

function renderOperation(id){
  const list=opFor(id);
  const op=list[operationIndex[id]];
  const section=document.getElementById(id);
  const pair=PAIRS[pairKey];
  section.querySelector('.operation-tabs').innerHTML=list.map((item,i) =>
    '<button type="button" data-index="' + i + '" aria-pressed="' + (i===operationIndex[id]) + '" class="' + (i===operationIndex[id]?'active':'') + '"><span>' + String(i+1).padStart(2,'0') + '</span>' + item.label.replace(/^\d+\s*\/\s*/,'') + '</button>'
  ).join('');
  section.querySelector('.operation-label').textContent=op.label.replace(/^\d+\s*\/\s*/,'') + ' / ' + pair.label;
  section.querySelector('.operation-title').textContent=pairedField(op,'title');
  section.querySelector('.operation-state').textContent=pairedField(op,'read');
  section.querySelector('.one-role').textContent=pair.oneRole;
  section.querySelector('.two-role').textContent=pair.twoRole;
  section.querySelector('.one-action').textContent=op.oneByPair?.[pairKey] ?? op.one[pair.oneRole.toLowerCase()];
  section.querySelector('.two-action').textContent=op.twoByPair?.[pairKey] ?? op.two[pair.twoRole.toLowerCase()];
  section.querySelector('.sync-text').textContent=op.sync[pairKey];
  section.querySelector('.go-text').textContent=pairedField(op,'go');
  section.querySelector('.abort-text').textContent=pairedField(op,'abort');
  section.querySelector('.fallback-text').textContent=pairedField(op,'fallback');
  section.querySelector('.convert-text').textContent=pairedField(op,'convert');
  section.querySelector('.drill-text').textContent=pairedField(op,'drill');
  section.querySelector('.why-text').textContent=pairedField(op,'why');
  section.querySelector('.mechanic-text').textContent=pairedField(op,'mechanic');
  section.querySelector('.art-index').textContent=String(operationIndex[id]+1).padStart(2,'0') + ' / ' + String(list.length).padStart(2,'0');
  section.querySelector('.operation-count').textContent='OPERATION ' + String(operationIndex[id]+1).padStart(2,'0') + ' / ' + String(list.length).padStart(2,'0');
  section.querySelector('.footer-pair').textContent=pair.label + ' · ' + pair.mode;
  const artPool=PAIR_ART[pairKey];
  const requestedArt=pairedField(op,'art');
  const activeArt=artPool.includes(requestedArt) ? requestedArt : artPool[(operationIndex[id]+CHAPTERS.findIndex(c=>c.id===id))%artPool.length];
  section.querySelector('.operation-art').style.backgroundImage='linear-gradient(90deg,rgba(7,17,21,.3),rgba(7,17,21,.65)),url("' + splash(activeArt) + '")';
  section.querySelector('.depth-panel').hidden=true;
  section.querySelector('.depth-toggle').setAttribute('aria-expanded','false');
}

function renderCommand(){
  const pair=PAIRS[pairKey];
  pairSelect.value=pairKey;
  document.querySelectorAll('[data-pair]').forEach(button => {
    const active=button.dataset.pair===pairKey;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  text('rail-pair',pair.label);
  text('rail-mode',pair.mode);
  text('command-one-role',pair.oneRole);
  text('command-two-role',pair.twoRole);
  text('command-one-champs',pair.oneChamps);
  text('command-two-champs',pair.twoChamps);
  text('command-one-job',pair.oneJob);
  text('command-two-job',pair.twoJob);
  text('command-win',pair.win);
  document.getElementById('hero-one').style.backgroundImage='linear-gradient(90deg,#071018aa,#07101822),url("' + splash(pair.artOne) + '")';
  document.getElementById('hero-two').style.backgroundImage='linear-gradient(90deg,#07101844,#07101899),url("' + splash(pair.artTwo) + '")';
}

function renderSources(){
  document.querySelectorAll('[data-source]').forEach(button => {
    const active=button.dataset.source===sourceKey;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  if(sourceKey==='pool'){
    const pair=PAIRS[pairKey];
    const cards=[...POOL_RATES[pair.oneRole.toLowerCase()].map(c=>['DUO ONE',...c]),...POOL_RATES[pair.twoRole.toLowerCase()].map(c=>['DUO TWO',...c])];
    document.getElementById('source-links').innerHTML=cards.map(([who,name,wr,pick,url]) =>
      '<a class="rate-card" href="' + url + '" target="_blank" rel="noopener"><span><small>' + who + '</small><strong>' + name + '</strong></span><b>' + wr + '% WR <i>/</i> ' + pick + '% PICK ↗</b></a>'
    ).join('')+'<p class="rate-note">Mobalytics Emerald+ ranked solo, all regions, patch 26.20 snapshot reviewed Oct 18. Low pick-rate samples are less certain.</p>';
  }else{
    document.getElementById('source-links').innerHTML=SOURCE_SETS[sourceKey].map(([name,url]) =>
      '<a href="' + url + '" target="_blank" rel="noopener"><span>' + name + '</span><b>↗</b></a>'
    ).join('');
  }
}

function setPair(key){
  if(!PAIRS[key])return;
  pairKey=key;
  const url=new URL(location.href);
  url.searchParams.set('pair',pairKey);
  history.replaceState(null,'',url.pathname+url.search+url.hash);
  renderCommand();
  CHAPTERS.filter(c => !['command','sources'].includes(c.id)).forEach(c => renderOperation(c.id));
  const sourcePair=document.getElementById('source-pair');
  if(sourcePair)sourcePair.textContent=PATCH_CHECK[pairKey];
  if(sourceKey==='pool')renderSources();
}

function setChapter(index,changeHash=true){
  chapterIndex=Math.max(0,Math.min(CHAPTERS.length-1,index));
  if(desktop.matches){
    CHAPTERS.forEach((c,i) => {
      const section=document.getElementById(c.id);
      section.classList.toggle('active',i===chapterIndex);
      section.inert=i!==chapterIndex;
    });
    if(changeHash)history.replaceState(null,'',location.pathname+location.search+'#'+CHAPTERS[chapterIndex].id);
  }
  const links=[...nav.querySelectorAll('a')];
  links.forEach((link,i) => {
    link.classList.toggle('active',i===chapterIndex);
    if(i===chapterIndex)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
  text('rail-index',String(chapterIndex+1).padStart(2,'0')+' / '+String(CHAPTERS.length).padStart(2,'0'));
  text('pager-name',CHAPTERS[chapterIndex].nav);
  document.getElementById('progress').style.width=((chapterIndex+1)/CHAPTERS.length*100)+'%';
  document.getElementById('prev-chapter').disabled=chapterIndex===0;
  document.getElementById('next-chapter').disabled=chapterIndex===CHAPTERS.length-1;
}

function syncMode(){
  const hash=location.hash.slice(1);
  const requested=CHAPTERS.findIndex(c=>c.id===hash);
  chapterIndex=requested<0?0:requested;
  if(desktop.matches)setChapter(chapterIndex,false);
  else {
    CHAPTERS.forEach(c=>{const section=document.getElementById(c.id);section.classList.remove('active');section.inert=false;});
    setChapter(chapterIndex,false);
  }
}

buildChapters();
setPair(pairKey);
renderSources();
syncMode();
window.addEventListener('load',()=>{
  if(!desktop.matches && location.hash){
    document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior:'instant',block:'start'});
  }
});

pairSelect.addEventListener('change',()=>setPair(pairSelect.value));
document.querySelectorAll('[data-pair]').forEach(button=>button.addEventListener('click',()=>setPair(button.dataset.pair)));
document.querySelectorAll('[data-source]').forEach(button=>button.addEventListener('click',()=>{sourceKey=button.dataset.source;renderSources();}));
nav.addEventListener('click',event=>{
  const link=event.target.closest('a[href^="#"]');
  if(!link)return;
  const i=CHAPTERS.findIndex(c=>c.id===link.hash.slice(1));
  if(i>=0&&desktop.matches){event.preventDefault();setChapter(i);}
});
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  if(nav.contains(link))return;
  link.addEventListener('click',event=>{
    if(!desktop.matches)return;
    const i=CHAPTERS.findIndex(c=>c.id===link.hash.slice(1));
    if(i>=0){event.preventDefault();setChapter(i);}
  });
});
document.getElementById('prev-chapter').addEventListener('click',()=>setChapter(chapterIndex-1));
document.getElementById('next-chapter').addEventListener('click',()=>setChapter(chapterIndex+1));
window.addEventListener('hashchange',syncMode);
desktop.addEventListener('change',syncMode);
window.addEventListener('keydown',event=>{
  if(!desktop.matches)return;
  if(['SELECT','INPUT','BUTTON'].includes(document.activeElement.tagName))return;
  if(event.key==='PageDown'){event.preventDefault();setChapter(chapterIndex+1);}
  if(event.key==='PageUp'){event.preventDefault();setChapter(chapterIndex-1);}
});
const observer=new IntersectionObserver(entries=>{
  if(desktop.matches)return;
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const i=CHAPTERS.findIndex(c=>c.id===entry.target.id);
      if(i>=0)setChapter(i,false);
    }
  });
},{rootMargin:'-35% 0px -50% 0px'});
CHAPTERS.forEach(c=>observer.observe(document.getElementById(c.id)));
