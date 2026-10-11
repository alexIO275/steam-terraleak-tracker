/* TerraLeak Tracker DB — scraped Aug 29 → Oct 11 2026. Metadata only. */
const NEWS = [
 {d:"2026-10-11", cat:"community", src:"TerraLeak Tracker triage", title:"Status Oct 11: torrent healthy, Valve still silent, cataloging continues", ex:"Six weeks on, mirrors persist on BitTorrent (Valve unlikely to ever purge it, per Ars). No Valve statement, no confirmed DMCA wave. HiddenPalace keeps paging new protos (Reign of Thunder x15, Saw x13, Sonic 4 x11). Overall documented share still single-digit % — 12 TB takes months. This tracker last re-scraped today.", url:"https://hiddenpalace.org/Steam2_Content_Server"},
 {d:"2026-09-22", cat:"community", src:"Valve News Network / Tyler McVicker", title:"VNN: 'How the hell did that happen?' — Steam2 explainer", ex:"Tyler McVicker walks through Steam achievement leak, Steam Frame embargo, HLVR beta password, then the 12 TB Steam2 dump at 4:25 — reiterates public-endpoint theory and warns files are HOT 3rd-party liability. Video becomes de-facto English explainer.", url:"https://www.youtube.com/watch?v=p9fxBWnIX_8"},
 {d:"2026-09-02", cat:"find", src:"VGTimes / Evgenia Zavyalova", title:"Portal 2 was nearly a whole different game — Corehub Beta dissected", ex:"July 28 2009 Corehub Beta is launchable, not a press demo: TF2 placeholders, rough geometry, opening cutscene survives. Adhesive gel to walk up walls (not portal-on-gel), Paint Gun spraying gel directly, model identical to Ep3 Weaponizer. Two early builds + F-Stop material + cut dialogue confirm long fan theories.", url:"https://vgtimes.com/articles/166209-portal-2-leaks-analyze.html"},
 {d:"2026-08-31", cat:"press", src:"PC Gamer / Rick Lane", title:"Teraleak extends far beyond Valve: Mafia 2, GTA 3 prototypes", ex:"Hundreds of file groups: builds, trailers, soundtracks. Third-party prototypes including Mafia 2 and Grand Theft Auto 3-era content. 'This may be one of if not the biggest leaks to occur.' Piracy + publisher-anger angle: Valve as single point of failure.", url:"https://www.pcgamer.com/games/the-steam-teraleak-extends-far-beyond-valve-games-including-prototypes-of-third-party-titles-like-mafia-2-and-grand-theft-auto-3-this-may-be-one-of-if-not-the-biggest-leaks-to-occur"},
 {d:"2026-08-31", cat:"press", src:"TechSpot / Alfonso Maruccia", title:"12 TB of old Steam data, no hacking required", ex:"Steam2 system Sep 2003–early 2013. Gabe Follower: entirely Valve's fault, public endpoints. Uploader on VCC Discord: bundling took significant effort, don't let it go to waste. Portal 2 protos, Sonic 4, more. HL3 hunters disappointed — only Weaponizer model previously seen in Ep3 documentary clips.", url:"https://www.techspot.com/news/113671-massive-valve-leak-exposed-12tb-old-steam-data.html"},
 {d:"2026-08-31", cat:"press", src:"Gizmodo / Tom Hawking + Mashable + Engadget", title:"Thousands of lost builds unearthed — 'just sitting there for public download'", ex:"Steam2 stranded pre-2013 installs archivists thought lost. Roundup consensus: 12 TB, 2003–2013, public download, torrent circulating, Valve no comment. Includes GTA V-era, Dragon Age: Origins, Batman Arkham mentions in wider trawl.", url:"https://gizmodo.com/a-massive-steam-leak-has-unearthed-thousands-of-lost-game-builds-2000804972"},
 {d:"2026-08-30", cat:"leak", src:"Ars Technica / Kyle Orland (canonical)", title:"12 TB 'terarelease': every version of every game 2003–2013", ex:"'As-complete-as-possible content server dump' — thousands of depots, public + proto + playtest. Cut-off = SteamPipe switch. Circular portals, adhesive gel + slow-mo guns, Weaponizer/Ep3 link, Cave Johnson cube ('My life is torture, please kill me'), GLaDOS new lines, L4D2/CS:GO betas, F-Stop models, Spore/DA:O/Arkham/Sonic 4/Spec Ops. Compares to Nintendo Gigaleak.", url:"https://arstechnica.com/gaming/2026/08/a-12tb-steam-teraleak-spills-more-than-a-decade-of-lost-pc-gaming-history/"},
 {d:"2026-08-30", cat:"community", src:"Elan Ruskin (ex-Valve) via X", title:"Dev response: 'every good idea went into the final thing we shipped'", ex:"Half-Life/Ep2 dev Elan Ruskin (despair) pushes back on prerelease hype: 'My condolences to anyone who wastes time playing prerelease versions of P2 or L4D2… anything not in the final version was not a good idea.' Widely quoted as official-adjacent Valve voice in absence of corporate statement.", url:"https://arstechnica.com/gaming/2026/08/a-12tb-steam-teraleak-spills-more-than-a-decade-of-lost-pc-gaming-history/"},
 {d:"2026-08-30", cat:"press", src:"Insider Gaming / Robert DeFelice", title:"12 TB leak exposes Valve's older archives — incl. Ep3 info?", ex:"Early Portal 2, CS:GO, potential Ep3 info. Scolcer footage of removed Portal 2 skills. Emphasizes 13 TB variant figure with 3rd-party content = 'VERY DANGEROUS situation. Be very careful.' Valve has not confirmed legitimacy.", url:"https://insider-gaming.com/reported-12tb-valve-steam-leak"},
 {d:"2026-08-30", cat:"find", src:"Scolcer + HL_Alyx_NoVR via X", title:"Cut Portal 2 gels + Weaponizer placeholder found in-beta", ex:"Spanish thread: gel adhesivo, cámara lenta, Weaponizer de HL2 Ep3 probablemente placeholder para arma de pintura. Weaponizer photo matches CombineOverWiki unidentified Ep3 weapon from Valve documentary. 'ep3' data files also reported, no playable Ep3.", url:"https://arstechnica.com/gaming/2026/08/a-12tb-steam-teraleak-spills-more-than-a-decade-of-lost-pc-gaming-history/"},
 {d:"2026-08-29", cat:"leak", src:"Gabe Follower via X", title:"First flag: 'No hacking involved… It's Valve's fault'", ex:"Valve watcher verifies everything obtained via publicly accessible [API] endpoint. Torrent + readme surface on VCC Discord same day. Uploader shares 22 TB server log as proof of effort. GitHub catalog + steam2-db.pages.dev + HiddenPalace page spin up within 48h.", url:"https://www.techspot.com/news/113671-massive-valve-leak-exposed-12tb-old-steam-data.html"},
 {d:"2026-08-29", cat:"leak", src:"Scolcer via X (ES)", title:"'100% accessible to the public. No passwords. Nothing.'", ex:"'Se filtraron 12 TB de VALVe 2003–2013 ocultos en repositorio público… podrían encontrarse hasta prototipos del Episodio 3.' Explains 2013 cut-off = storage-system switch. Warns huge 3rd-party content makes handling legally risky.", url:"https://insider-gaming.com/reported-12tb-valve-steam-leak"},
];

const GAMES = [
 {n:"Portal 2", builds:11, pct:95, status:"11 protos paged · COMPLETE-ISH", desc:"Corehub Beta Jul 28 2009 is star of leak: playable, TF2 placeholders, circular portals. Plus Feb 2010 → Jan 2011 chain.", finds:["Adhesive gel: coat wall, walk up it","Slow-mo gun + Paint Gun (Weaponizer model)","Circular portals in early builds","Cave Johnson consciousness cube + cut GLaDOS lines","F-Stop camera-prototype assets bundled"], buildsList:[["Jul 28 2009","Corehub Beta — playable"],["Feb 4 2010","proto"],["Mar 18 2010","proto"],["Jul 22 2010","proto"],["Aug 30 2010","proto"],["Sep 24/26 2010","2 protos"],["Oct 19 2010","proto"],["Dec 1/2 2010","2 protos"],["Jan 12 2011","proto"]], src:"Ars, VGTimes Sep 2, Gabe Follower, Scolcer"},
 {n:"Half-Life 2: Episode 3", builds:0, pct:8, status:"NO PLAYABLE BUILD · RUMORED", desc:"Most-wanted, not found. Only Weaponizer 3D model (in Portal 2 paint-gun slot, matches Valve Ep3 doc footage) + 'ep3' strings.", finds:["Weaponizer model = only hard Ep3 link","'ep3' data files reported by Scolcer","No depots playable — treat HL3 claims as fake"], buildsList:[["—","no depot confirmed"]], src:"Ars, TechSpot, Shattered.io"},
 {n:"Left 4 Dead / L4D2", builds:4, pct:80, status:"EARLY BETAS CONFIRMED", desc:"L4D Jun 17 2008 proto + L4D2 Jul 20 / Aug 6 / Sep 2 2009 protos. Cut content under study.", finds:["Jun 17 2008 L4D proto boots","Three L4D2 summer-2009 builds","Cut campaigns/weapons being diffed"], buildsList:[["Jun 17 2008","L4D proto"],["Jul 20 2009","L4D2 proto"],["Aug 6 2009","L4D2 proto"],["Sep 2 2009","L4D2 proto"]], src:"Gabe Follower, Ground.news"},
 {n:"Counter-Strike: GO", builds:1, pct:70, status:"CSS-BASE BUILD", desc:"Mar 23 2011 proto built on modified Counter-Strike: Source base — predates retail feel.", finds:["CSS-base movement/weapons","Pre-release maps"], buildsList:[["Mar 23 2011","proto"]], src:"Fandomwire, Insider Gaming"},
 {n:"F-Stop (cancelled Portal sequel)", builds:1, pct:60, status:"MODELS + GFX SURFACED", desc:"Shelved camera-manipulation Portal prequel. Models/graphics via PAPL0CK thread.", finds:["Camera mechanic props","Aperture test assets"], buildsList:[["2010-era","asset depot"]], src:"Ars, Eurogamer background"},
 {n:"Dota 2", builds:1, pct:65, status:"2010 PROTO", desc:"Jul 26 2010 prototype — three years before 2013 launch. Very early hero set.", finds:["2010 hero roster","Source-engine early UI"], buildsList:[["Jul 26 2010","proto"]], src:"HiddenPalace"},
 {n:"Sonic 4: Episode II", builds:11, pct:90, status:"BETA 2 → 9 CHAIN", desc:"Feb 29 → Apr 28 2012, Beta 2–9. Rough unfinished PC builds weeks before May 15 2012 launch.", finds:["11 dated betas","Netcode/physics diffs"], buildsList:[["Feb 29 2012","proto"],["Mar 16/21/28 2012","Beta 2-4"],["Apr 3/8/12 2012","Beta 5-7"],["Apr 22/24/26/28 2012","Beta 9 + finals"]], src:"HiddenPalace, TechSpot"},
 {n:"Mafia II", builds:4, pct:85, status:"4 PROTOS", desc:"Apr 16 / 23, May 3, Jul 9 2010 — monthlies before Aug 2010 launch.", finds:["Cut missions/vehicles"], buildsList:[["Apr 16 2010","proto"],["Apr 23 2010","proto"],["May 3 2010","proto"],["Jul 9 2010","proto"]], src:"PC Gamer, HiddenPalace"},
 {n:"Saw I + II (PC unreleased!)", builds:13, pct:92, status:"PRESERVATION WIN", desc:"Saw (6 builds Apr–Oct 2009) + Saw II (7 builds Feb–Jun 2010). PC versions never shipped — leak = only PC record.", finds:["13 PC builds, console-only retail","Zombie Studios cut content"], buildsList:[["Apr 3–Oct 12 2009","7x Saw protos"],["Feb 5–Jun 21 2010","6x Saw II protos"]], src:"HiddenPalace"},
 {n:"Reign of Thunder (unreleased)", builds:15, pct:88, status:"15 BUILDS, GAME NEVER SHIPPED", desc:"Feb 8 → Jun 15 2012. Unreleased MOBA — entire dev history preserved by accident.", finds:["Full Feb–Jun 2012 chain","Design docs in blobs"], buildsList:[["Feb–Mar 2012","8 builds"],["Apr 2012","3 builds"],["May–Jun 2012","4 builds"]], src:"HiddenPalace Sep 2026 wave"},
 {n:"Third-party wave", builds:40, pct:35, status:"TRIAGE ONGOING", desc:"Spore, Dragon Age: Origins, Arkham Asylum, Spec Ops: The Line (Jan 2011 x2), Civ V (4 builds), Fallout: New Vegas files, GTA3-era, Saints Row 3, Max Payne 3, DiRT, F1 2012, Tribes Ascend, Plants vs Zombies, Worms, Walking Dead S1…", finds:["Spec Ops Jan 14/19 2011 protos","Civ V Sep 09–Mar 10 chain","Arkham / DA:O / Spore flagged for study"], buildsList:[["2008–2012","40+ sampled protos"],["2012","Walking Dead Apr 21, Max Payne May 28"]], src:"Ars, PC Gamer, HiddenPalace"},
 {n:"Valve deep cuts", builds:8, pct:55, status:"ODDS & ENDS", desc:"HL2 Oct 6 2004 proto, HL Dedicated Server Dec 2002 proto, Garry's Mod Nov 2006, Codename Gordon May 2004, CS:GO-era test apps, Dota-era blobs.", finds:["HL2 Oct 2004 pre-launch proto","Codename Gordon flash proto","GMod 2006 proto"], buildsList:[["Dec 2 2002","HL DS proto"],["May 14 2004","Codename Gordon"],["Oct 6 2004","HL2 proto"],["Nov 28 2006","GMod proto"]], src:"HiddenPalace"},
];

const DEPOTS = [
 ["Portal 2 (Jul 28, 2009 prototype)","2009-07-28","Corehub Beta · playable","ok","Aug 29"],
 ["Portal 2 (Feb 4, 2010 prototype)","2010-02-04","depot chain","ok","Aug 29"],
 ["Portal 2 (Mar 18, 2010 prototype)","2010-03-18","depot chain","ok","Aug 29"],
 ["Portal 2 (Jul 22, 2010 prototype)","2010-07-22","15:24 build","ok","Aug 29"],
 ["Portal 2 (Aug 30, 2010 prototype)","2010-08-30","depot chain","ok","Aug 29"],
 ["Portal 2 (Sep 24/26, 2010 prototypes)","2010-09-24","x2 builds","ok","Aug 29"],
 ["Portal 2 (Oct 19, 2010 prototype)","2010-10-19","depot chain","ok","Aug 29"],
 ["Portal 2 (Dec 1/2, 2010 prototypes)","2010-12-01","x2 builds","ok","Aug 29"],
 ["Portal 2 (Jan 12, 2011 prototype)","2011-01-12","late proto","ok","Aug 29"],
 ["Left 4 Dead (Jun 17, 2008 prototype)","2008-06-17","early beta","ok","Aug 29"],
 ["Left 4 Dead 2 (Jul 20, 2009 prototype)","2009-07-20","summer build","ok","Aug 29"],
 ["Left 4 Dead 2 (Aug 6, 2009 prototype)","2009-08-06","summer build","ok","Aug 29"],
 ["Left 4 Dead 2 (Sep 2, 2009 prototype)","2009-09-02","pre-launch","mid","Aug 30"],
 ["Counter-Strike: GO (Mar 23, 2011)","2011-03-23","CSS-base","ok","Aug 29"],
 ["DotA 2 (Jul 26, 2010 prototype)","2010-07-26","pre-alpha","mid","Aug 30"],
 ["F-Stop assets","2010-era","camera-proto gfx","mid","Aug 30"],
 ["Weaponizer / ep3 strings","2009–2011","model only, NO build","low","Aug 30"],
 ["Half-Life 2 (Oct 6, 2004 proto)","2004-10-06","pre-launch","mid","Aug 30"],
 ["Codename Gordon (May 14, 2004)","2004-05-14","flash proto","mid","Aug 30"],
 ["Garry's Mod (Nov 28, 2006)","2006-11-28","GMod 10 era","mid","Aug 30"],
 ["Sonic 4 Ep II Beta 2–9","2012-03-16 → 04-22","8 builds","ok","Aug 30"],
 ["Sonic 4 Ep II (Apr 24–28, 2012)","2012-04-24","3 late builds","ok","Aug 30"],
 ["Mafia II (Apr 16, 2010)","2010-04-16","proto","ok","Aug 30"],
 ["Mafia II (Apr 23 / May 3 / Jul 9)","2010-04-23","3 builds","ok","Aug 30"],
 ["Spec Ops: The Line (Jan 14/19, 2011)","2011-01-14","x2 protos","ok","Aug 30"],
 ["Fallout: New Vegas hidden files","2010-era","asset bundle","mid","Aug 30"],
 ["Dragon Age: Origins beta","2009-era","flagged","mid","Aug 30"],
 ["Batman: Arkham Asylum beta","2009-era","flagged","mid","Aug 30"],
 ["Spore build","2008-era","flagged","mid","Aug 30"],
 ["Civ V (Sep 22 2009 → Mar 24 2010)","2009-09-22","4-build chain","ok","Aug 30"],
 ["Saints Row: The Third (Sep 29, 2011)","2011-09-29","proto","ok","Aug 29"],
 ["Saw (Apr 3 → Oct 12, 2009)","2009-04-03","7 builds, PC-unreleased","ok","Aug 29"],
 ["Saw II (Feb 5 → Jun 21, 2010)","2010-02-05","6 builds, PC-unreleased","ok","Aug 29"],
 ["Reign of Thunder (Feb 8 → Jun 15, 2012)","2012-02-08","15 builds, unreleased game","ok","Aug 30–Sep 6"],
 ["Tribes: Ascend (Mar–Apr 2011)","2011-03-22","4 builds","ok","Aug 30"],
 ["Crusader Kings II (May–Sep 2011)","2011-05-14","4 builds","ok","Aug 29"],
 ["Blacklight: Tango Down (Apr–Jun 2010)","2010-04-22","3 builds","ok","Aug 31"],
 ["DiRT Showdown (Mar 13, 2012)","2012-03-13","proto","mid","Aug 29"],
 ["F1 2012 (Aug–Nov 2012)","2012-08-29","3 builds incl. debug","mid","Aug 30"],
 ["Max Payne 3 (May 28, 2012)","2012-05-28","proto","mid","Aug 30"],
 ["Walking Dead S1 (Apr 21, 2012)","2012-04-21","E1 proto","mid","Aug 30"],
 ["Retro City Rampage (Jul 27, 2012)","2012-07-27","proto","mid","Aug 30"],
 ["Nuclear Dawn (Oct 16, 2009)","2009-10-16","proto","mid","Aug 29"],
 ["Plants vs Zombies (May 1, 2009)","2009-05-01","proto","mid","—"],
 ["Bulletstorm (Dec 21, 2010)","2010-12-21","proto","mid","—"],
 ["Serious Sam HD (Oct 14, 2009)","2009-10-14","proto","mid","—"],
 ["Age of Booty (Oct 7, 2008)","2008-10-07","proto","mid","—"],
 ["NBA 2K9 (Aug 13, 2008)","2008-08-13","proto","low","Sep 1"],
 ["Legend of Grimrock (Feb 27, 2012)","2012-02-27","proto","mid","Aug 30"],
 ["Waveform (Dec 15, 2011)","2011-12-15","proto","mid","—"],
 ["Worms: Ultimate Mayhem (Aug 8, 2011)","2011-08-08","proto","mid","Aug 29"],
 ["Ridge Racer Unbounded (Feb–Mar 2012)","2012-02-18","3 builds","mid","—"],
 ["A Game of Dwarves (Sep 15, 2011)","2011-09-15","proto","mid","—"],
 ["DON (Mar 9, 2012)","2012-03-09","proto","low","Sep 7"],
 ["Project P3 / Mystery Island","2012-05-05","oddity","low","—"],
 ["Dupe depot videos","—","trailers/soundtracks","low","—"],
 ["Warhammer DoW II depots 15651–56","2011-03-18","blobless, dated only","low","—"],
];

const TIMELINE = [
 ["2003-09-12","Steam2 goes live","Valve launches Steam + Steam2 content servers. Proprietary depot format begins decade-long accumulation.",0],
 ["2003-10-07","First Valve leak (context)","Half-Life 2 source leaks via German hacker. Valve learns leaks never die — foreshadowing 2026.",0],
 ["2013-03-01","SteamPipe replaces Steam2","Valve migrates to HTTP file trees. Old Steam2 servers left reachable — 'hidden in plain sight, no protection.'",0],
 ["2026-08-29","TERRALEAK SURFACES — 12 TB torrent","'As-complete-as-possible content server dump' posted + BitTorrent tracker + readme ('warm n good wishes to hoarders <3'). Uploader shows 22 TB server log on VCC Discord.",1],
 ["2026-08-29","Gabe Follower + Scolcer verify: NO HACK","'Publicly accessible endpoint. It's Valve's fault.' / '100% accessible, no passwords.' Cut-off 2013 explained.",1],
 ["2026-08-30","Portal 2 Corehub Beta boots + Weaponizer found","Jul 28 2009 playable proto (TF2 placeholders, circular portals, adhesive gel, slow-mo). Paint Gun model = Ep3 Weaponizer. GLaDOS new lines, Cave Johnson cube. L4D/CS:GO/F-Stop confirmed.",1],
 ["2026-08-30","Press explosion (Ars canonical)","Kyle Orland: thousands of depots, every version of every game. Compares to Nintendo Gigaleak. Tyler McVicker warns HOT. Elan Ruskin: 'every good idea shipped.'",0],
 ["2026-08-31","Beyond Valve: Mafia 2, GTA3, 54 outlets","PC Gamer: third-party protos. TechSpot/Mashable/Gizmodo/Engadget/Verge/IGN converge on 12 TB. Ground: GitHub catalogs, steam2-db.pages.dev live.",0],
 ["2026-09-01 → 09-07","Second wave: Saw, Sonic, Reign of Thunder","HiddenPalace pages flood: 13 Saw PC-unreleased builds, 11 Sonic 4 betas, 15 Reign of Thunder builds (unreleased game), Dota 2 2010, Civ V chain. VGTimes Sep 2 Portal deep-dive.",0],
 ["2026-09-22","VNN explainer cements narrative","Tyler McVicker video 'How the hell did that happen?' — public-endpoint theory goes mainstream.",0],
 ["2026-10-11","TODAY: healthy torrent, Valve silent","No statement, no mass DMCA. Triage ~5% — full 12 TB review = months. This site re-scraped.",1],
];

/* ---------- UI ---------- */
const $ = s => document.querySelector(s);
const tabs = document.querySelectorAll('.tab');
function gotoTab(name){
  tabs.forEach(t=>t.classList.toggle('active',t.dataset.tab===name));
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const map={store:'page-store',news:'page-news',games:'page-games',tools:'page-tools',servers:'page-servers',media:'page-media'};
  $('#'+map[name]).classList.add('active');
  const labels={store:'STORE › Featured: Steam2 Content Server Dump',news:'NEWS › Steam2 Content Server Dump',games:'GAMES › Installed Prototypes & Findings',tools:'FILES › Depot Browser',servers:'SERVERS › Timeline',media:'FORENSICS › Verification Log'};
  $('#subbarLabel').textContent = labels[name]||'';
}
tabs.forEach(t=>t.onclick=()=>gotoTab(t.dataset.tab));
document.querySelectorAll('[data-goto]').forEach(el=>el.onclick=()=>{gotoTab(el.dataset.goto); if(el.dataset.select) selectGame(el.dataset.select);});

/* ticker */
$('#tickerInner').textContent = NEWS.map(n=>`[${n.d}] ${n.title} — ${n.src} +++ `).join('');

/* clock */
function clock(){ const d=new Date(); $('#clock').textContent = d.toUTCString().slice(5,22)+' UTC · store: US'; }
setInterval(clock,1000); clock();

/* news */
let newsFilter='all';
function renderNews(q=''){
  const list=$('#newsList'); list.innerHTML='';
  NEWS.filter(n=>(newsFilter==='all'||n.cat===newsFilter) && (n.title+n.ex+n.src).toLowerCase().includes(q.toLowerCase()))
  .forEach(n=>{
    const div=document.createElement('div'); div.className='news-item';
    div.innerHTML=`<div class="n-top"><span class="n-cat">${n.cat.toUpperCase()}</span><span>${n.d}</span><span>·</span><span>${n.src}</span></div>
    <div class="n-title"><a href="${n.url}" target="_blank" rel="noopener">${n.title} ↗</a></div>
    <div class="n-ex">${n.ex}</div>
    <div class="n-foot"><span>via scrape · metadata only</span><a class="link" href="${n.url}" target="_blank" rel="noopener">open source ›</a></div>`;
    list.appendChild(div);
  });
  if(!list.children.length) list.innerHTML='<div class="news-item">No headlines match. Try clearing search.</div>';
}
document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));c.classList.add('active');newsFilter=c.dataset.filter;renderNews($('#globalSearch').value);});
renderNews();

/* progress bars on store */
function renderProgress(){
  const el=$('#progressList');
  el.innerHTML = GAMES.slice(0,7).map(g=>`<div class="bar-row"><span style="width:170px"><b>${g.n}</b> <span style="color:#9aa07f">(${g.builds})</span></span><div class="bar"><div style="width:${g.pct}%"></div></div><b>${g.pct}%</b></div>`).join('');
}
renderProgress();

/* games */
let gi=0, gameFilter='';
function filteredGames(){ return GAMES.map((g,i)=>({...g,i})).filter(g=>g.n.toLowerCase().includes(gameFilter)); }
function renderGameList(){
  const list=$('#gameList'); list.innerHTML='';
  const fg=filteredGames();
  $('#gameCount').textContent=`(${fg.length})`;
  fg.forEach(g=>{
    const r=document.createElement('div'); r.className='game-row'+(g.i===gi?' active':'');
    r.innerHTML=`<span class="g-icon">◈</span><span>${g.n}</span><span class="g-meta">${g.pct}%</span>`;
    r.onclick=()=>selectGame(g.n);
    list.appendChild(r);
  });
}
function selectGame(name){
  const idx=GAMES.findIndex(g=>g.n===name); if(idx>=0) gi=idx;
  const g=GAMES[gi];
  $('#dTitle').textContent=g.n;
  $('#dSub').textContent=`${g.builds} confirmed builds · first seen Aug–Sep 2026 · Steam2 depot range`;
  $('#dStatus').innerHTML=`STATUS: <b>${g.status}</b> &nbsp;·&nbsp; Valve response: <b class="red">none</b> &nbsp;·&nbsp; handling: <b>metadata only, do not seed</b>`;
  $('#dBar').style.width=g.pct+'%'; $('#dPct').textContent=g.pct+'%';
  $('#dDesc').textContent=g.desc;
  $('#dBuilds').innerHTML=g.buildsList.map(b=>`<div class="build-row"><span>${b[1]}</span><span class="b-date">${b[0]}</span></div>`).join('');
  $('#dFindings').innerHTML=g.finds.map(f=>`<li>${f}</li>`).join('');
  $('#dSources').innerHTML=`Sources: ${g.src}. Full index: <code>hiddenpalace.org</code> + <code>steam2-db.pages.dev</code>`;
  renderGameList();
}
$('#prevGame').onclick=()=>{gi=(gi-1+GAMES.length)%GAMES.length;selectGame(GAMES[gi].n);};
$('#nextGame').onclick=()=>{gi=(gi+1)%GAMES.length;selectGame(GAMES[gi].n);};
$('#gameSearch').oninput=e=>{gameFilter=e.target.value.toLowerCase();renderGameList();};
selectGame('Portal 2');

/* depots */
function renderDepots(q=''){
  const tb=$('#depotBody'); tb.innerHTML='';
  DEPOTS.filter(d=>(d[0]+d[1]+d[2]).toLowerCase().includes(q.toLowerCase())).forEach(d=>{
    const cls=d[3]==='ok'?'ok':(d[3]==='mid'?'mid':'low');
    const lab=d[3]==='ok'?'PAGED':(d[3]==='mid'?'FLAGGED':'FRAG');
    tb.innerHTML+=`<tr><td><b>${d[0]}</b></td><td>${d[1]}</td><td>${d[2]}</td><td><span class="pill ${cls}">${lab}</span></td><td>${d[4]}</td></tr>`;
  });
}
renderDepots();
$('#fileSearch').oninput=e=>renderDepots(e.target.value);
$('#globalSearch').oninput=e=>{ renderNews(e.target.value); };
$('#searchBtn').onclick=()=>{ gotoTab('tools'); $('#fileSearch').value=$('#globalSearch').value; renderDepots($('#fileSearch').value); };

/* timeline */
$('#timeline').innerHTML = TIMELINE.map(t=>`<div class="tl-item${t[3]?' major':''}"><div class="tl-date">${t[0]}</div><div class="tl-title">${t[1]}</div><div class="tl-desc">${t[2]}</div></div>`).join('');

/* triage calc */
function triage(){ const v=(4.2+Math.random()*1.8).toFixed(1); $('#triagePct').textContent=v; $('#triageFill').style.width=v+'%'; }
triage(); $('#triageFill').style.width=$('#triagePct').textContent+'%';

/* fake update */
const um=$('#updateModal'), uf=$('#updateFill'), ut=$('#updateText'), us=$('#updateSub');
function runUpdate(){
  um.classList.remove('hidden'); let p=0;
  const steps=['Contacting content servers…','Fetching Ars Technica canonical…','Scraping HiddenPalace category (132 rows)…','Probing steam2-db.pages.dev…','Diffing Portal 2 builds…','Done: no new Valve statement.'];
  const iv=setInterval(()=>{
    p+=Math.random()*22; if(p>=100){p=100;clearInterval(iv); ut.textContent='Update complete.'; us.textContent='Syncing live wiki…'; if(window.LiveTracker){window.LiveTracker.refresh(true).then(function(ok){ us.textContent = ok ? 'Live sync done. Valve: still silent.' : 'Live wiki unreachable — cache kept. Valve: still silent.'; setTimeout(()=>um.classList.add('hidden'),1400); });} else { $('#scrapeTime').textContent=new Date().toUTCString().slice(5,22)+' UTC'; triage(); setTimeout(()=>um.classList.add('hidden'),1400); } return;}
    uf.style.width=p+'%'; ut.textContent=steps[Math.min(steps.length-1,Math.floor(p/18))]; us.textContent=`${Math.floor(p)}% — metadata only, no binaries fetched`;
  },280);
}
$('#updateBtn').onclick=runUpdate; $('#rescrapeBtn').onclick=runUpdate;
$('#updateClose').onclick=()=>um.classList.add('hidden');

/* window buttons */
$('#btnClose').onclick=()=>$('#closeModal').classList.remove('hidden');
$('#closeOk').onclick=()=>$('#closeModal').classList.add('hidden');
$('#btnMin').onclick=()=>{ $('#steamWindow').style.transform='scale(.98)'; setTimeout(()=>$('#steamWindow').style.transform='',200); };
$('#btnMax').onclick=()=>{ document.querySelector('.desktop').style.maxWidth = document.querySelector('.desktop').style.maxWidth==='100%'?'1060px':'100%'; };
$('#fakeDlBtn').onclick=e=>{ e.target.textContent='✓ Understood — metadata only'; setTimeout(()=>e.target.textContent='I understand',2000); };
$('#statProtos').textContent = 132; $('#footCatalog').textContent='132 protos';
