/*
 * Duo Protocol coaching content for ranked Summoner's Rift, reviewed on patch 26.20.
 * Patch rules: https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes/
 * 2026 map, role quests, wave cadence, turrets, vision: https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/
 * Top role-quest Teleport cooldown: https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-19-notes/
 * Wave and jungle principles: https://mobalytics.gg/lol/guides/wave-management
 * Gank setup: https://mobalytics.gg/lol/guides/gank-setup
 * Lane priority: https://mobalytics.gg/lol/guides/how-to-lane-without-priority
 * Objective setup: https://mobalytics.gg/lol/guides/7-tips-to-secure-more-dragons
 * Side-lane pressure: https://mobalytics.gg/lol/guides/how-to-split-push
 * Community pain points, treated as questions rather than game rules:
 * https://www.reddit.com/r/summonerschool/comments/1w6o3o5/junglers_should_be_expected_to_neutralise/
 * https://www.reddit.com/r/summonerschool/comments/1sw8ai5/midlate_game_csing/
 * Times such as "one wave" and "two waves" below are coaching heuristics, not patch timers.
 */

window.DUO_LATE = {
  clock: [
    {
      id: 'clock-0-3', label: '00–03', title: 'Name the first side before the first wave',
      read: 'At loading screen, name both role plans, the likely jungle path, support readiness if bot, and Teleport status if top. Treat an enemy late arrival as a clue, not proof of their start.',
      readByPair: {
        mj: 'Name Mid’s first three-wave plan, Jungle’s first route, both mid–jungle 2v2s, and the enemy start evidence.',
        mt: 'Name each solo-lane wave plan, top-side 2v2 strength, enemy jungle start evidence, and whether Top has Teleport.',
        aj: 'Name bot’s first wave and support readiness, Jungle’s clear toward or away from bot, and enemy start evidence.',
        at: 'Name bot wave/support readiness and Top’s first waves/Teleport. Decide whether the pair connects later or trades separate lanes.'
      },
      why: 'The first advantage is knowing whether the two lane plans can connect, trade across the map, or must stabilize separately.',
      mechanic: '2026 ranked minions spawn at 0:30, buff camps at 0:55, and Scuttle at 2:55. The first cannon is wave three; lane quests reward time and farm in the assigned lane.',
      art: 'MonkeyKing',
      one: {
        mid: 'Tell Duo Two whether the first waves will push out, come in, or stay near center. Preserve health and your key control spell for the agreed river side; if Duo Two is Top, name whether you can support their top-side wave.',
        adc: 'Tell Duo Two whether bot can contest the first push and whether your support can trade or engage. Keep the opening wave safe for farm and quest progress; do not manufacture a bot fight to fit a jungle route.'
      },
      oneByPair: {
        mj: 'Call your first three-wave direction and the exact crash or hold that matches Jungle’s first route. Keep health and your key control spell for the possible 2v2.',
        mt: 'Call whether Mid can push toward top river on wave three. If Top is pinned, keep Mid’s wave and prevent the enemy mid from moving first.',
        aj: 'Call bot wave direction, health, and support engage or peel readiness. Preserve farm and quest progress while Jungle routes toward or away from your lane.',
        at: 'Call bot wave and support readiness; ask Top whether their wave can pressure or whether TP is actually available. Keep local farm instead of expecting an early cross-map rescue.'
      },
      two: {
        jungle: 'Announce your start camp, clear direction, and earliest realistic arrival before minions meet. Update the route if a lane loses health or wave control; do not treat first Scuttle as mandatory.',
        top: 'Announce whether your lane can push, hold, or only collect XP for the first three waves. Flag the enemy top Teleport and your own planned reset or top-side move before the wave commits.'
      },
      sync: {
        mj: 'One: “Mid wave three crashes in eight; my setup is ready.” Two: “I finish raptors into top river; we move only after the crash.”',
        mt: 'One: “I can push mid toward top river after this wave.” Two: “My third wave is coming in; no top-side contest until I catch it.”',
        aj: 'One: “Bot wave comes to us; support engage ready.” Two: “I finish bot side in twenty; hold it outside tower if safe.”',
        at: 'One: “Bot has first push, enemy jungle unknown.” Two: “Top cannot move; I will call if their jungle shows here so you can spend the bot window.”'
      },
      go: 'Both have named their first wave, resources, and whether this cycle is a connection or a cross-map trade.',
      goByPair: {
        mj: 'Mid can hold for a gank or crash for river as Jungle finishes toward that side; both have health and setup.',
        mt: 'Mid and Top name when their separate waves give top-side priority; neither leaves a large incoming wave.',
        aj: 'ADC has a bot wave plan and support status; Jungle routes toward a gank or bot river without forcing the lane.',
        at: 'ADC can use a bot window while Top keeps an independent wave or TP plan; neither assumes a cross-map walk.'
      },
      abort: 'One player says “no move,” the enemy has a clearer first move, or enemy jungle information contradicts the opening read.',
      abortByPair: {
        mj: 'Mid says no move for the river wave, or the enemy mid–jungle pair arrives first.',
        mt: 'Either wave is pinned; do not force a top-side connection. Keep the cross-map trade if it remains safe.',
        aj: 'Support cannot follow, bot wave is pinned, or Jungle arrives into an unseen enemy countergank.',
        at: 'Bot cannot spend its push or Top has no safe pressure/TP; do not invent an early cross-map join.'
      },
      fallback: 'Each player takes the safe local wave or camp, protects the threatened entrance, and names the next shared timing.',
      convert: 'After the first successful play, fix the affected wave, then choose one plate, ward, camp, or reset before defenders return.',
      drill: 'Replay the first three waves: did both know the route or Teleport, wave direction, and first connect or trade decision?'
    },
    {
      id: 'clock-3-8', label: '03–08', title: 'Fund the first move with a real crash',
      read: 'Before a gank, invade, or first epic monster, check the actual wave, both health bars, key CC, opposing jungle location, and whether the non-duo teammate can join.',
      readByPair: {
        mj: 'Before a gank or invade, check Mid wave, both health bars, key CC, and where enemy Jungle can counter.',
        mt: 'Before a top-side move, compare Mid and Top crash timing, both health bars, and where enemy Jungle can counter.',
        aj: 'Before a bot gank or dragon, check bot wave, support position, ADC health, and enemy mid–jungle response.',
        at: 'Before bot or top pressure, compare both waves, support status, Teleport timing, and enemy Jungle location.'
      },
      why: 'Lane priority helps only when it creates a real first move or a cross-map cost for the opponent. A ping cannot erase a stacked wave at tower.',
      mechanic: 'A gank has more lane length when the opponent is near center or your side. If your lane is pushed under enemy tower, convert the crash into vision or a reset unless a dive has a proven numbers and health advantage.',
      mechanicByPair: {
        mt: 'A stacked top wave holds the defender at tower while a separate mid crash frees Mid to move. Both waves must land close enough for a safe top-side action.',
        at: 'ADC’s bot crash buys a short local window; Top can only influence it by a timely safe Teleport. Otherwise Top converts their own wave into pressure.'
      },
      art: 'Vex',
      one: {
        mid: 'If your jungler is approaching for a gank, trim and hold near your side without losing health. For a shared river move or top-side trade, build a push and call when it actually reaches tower.',
        adc: 'Call support position and whether bot wave is holding, stacking, or crashing. Preserve your escape spell while the enemy jungle is missing; after a kill, explicitly ask for help crashing if the wave would freeze against you.'
      },
      oneByPair: {
        mj: 'Hold or trim Mid near your side for a named jungle gank; for an invade, crash before Jungle enters river. Call the actual arrival wave and your CC status.',
        mt: 'Build Mid’s crash to overlap Top’s stacked wave, then move top side only if your return wave is affordable. Otherwise pin enemy mid while Top takes the safe trade.',
        at: 'State bot wave, support readiness, and what local dragon pressure is possible. Ask Top for a timed TP or top-side trade; do not ask them to walk across the map.'
      },
      two: {
        jungle: 'Finish the camp toward the called lane window, not toward a theoretical fight. If nearby lanes are pinned, change route, cover a crash, or trade the opposite side instead of entering river alone.',
        top: 'Hold a gankable wave when the jungler approaches, or stack then crash before leaving for upper river. Tell Duo One whether you can move now, after a wave, or only with Teleport.'
      },
      sync: {
        mj: 'One: “Two waves stacking; crash in twelve.” Two: “I cover the crash, then we enter river together.”',
        mt: 'One: “Mid clears now; I lean top side.” Two: “Top crash is one wave later; wait for me before we force their jungle.”',
        aj: 'One: “Wave held near us, support has CC ready.” Two: “I am one camp away; do not change your lane posture early.”',
        at: 'One: “Bot crash gives me a short river window.” Two: “Top cannon crashes; I take the plate while you control bot. No cross-map walk.”'
      },
      go: 'The pair names the same timing and whether they are connecting or trading; the enemy cannot answer both for free.',
      goByPair: {
        mj: 'Mid crash lands as Jungle reaches river, or a held mid wave exposes the enemy to a gank.',
        mt: 'Mid and Top crashes overlap for upper river pressure, or each threatens a separate structure safely.',
        aj: 'Bot wave and support allow the gank or dragon entry when Jungle reaches the same side.',
        at: 'Bot crash and top crash create separate rewards; a top Teleport joins only with a safe landing and timing.'
      },
      abort: 'Enemy support or jungler is missing on the entry path, support cannot join bot, or the planned wave is stuck under your own tower.',
      abortByPair: {
        mj: 'Mid wave is pinned, opposing mid moves first, or enemy jungle is missing on the river entry.',
        mt: 'Either crash fails or enemy jungle can counter the top-side dive; trade waves instead.',
        aj: 'Support cannot follow, bot wave is pinned, or the countergank route is unwarded.',
        at: 'Top cannot walk into a bot play; without a safe TP, keep separate lane rewards or stabilize.'
      },
      fallback: 'Use the safer crash for a recall or ward and wait for the next lane alignment; conceding a low-value contest beats losing XP and dying.',
      convert: 'Record a burned Flash for the next viable wave; after a kill, crash before claiming a nearby objective or plate.',
      drill: 'Log each early duo commitment: could each player perform the promised job, and what wave, camp, or Teleport was paid for it?'
    },
    {
      id: 'clock-8-15', label: '08–15', title: 'Turn a lead into a structure, not another chase',
      read: 'After a pick, forced recall, or stacked wave, count enemy return time, resources, the next wave, nearby turret health, objective status, and role quest progress.',
      why: 'This is the window where a 15-minute finish becomes possible, but only if the pair spends each advantage before defenders return.',
      mechanic: 'In 2026, plates remain on lane turrets and the first destroyed turret grants extra gold. A short safe push can have value even if the whole tower cannot fall.',
      art: 'Jinx',
      one: {
        mid: 'Crash immediately after forcing enemy mid out, then move where Duo Two can cover or pressure at the same time. Vex or Ekko can use the exit window for a pick; Xerath can chip the reachable turret from vision rather than chase into fog.',
        adc: 'After a bot win, state whether your wave needs help to crash and whether support can escort forward. Take reachable plate damage only while the enemy jungle and mid response are accounted for; preserve your bot quest farm.'
      },
      oneByPair: {
        mj: 'Crash Mid after a pick and tell Jungle whether the wave buys a plate, ward, or same-side camp. Leave the turret before enemy mid returns.',
        mt: 'Crash Mid as Top’s stacked wave hits so defenders must answer both. Move top only if the dive has vision and a safe path; otherwise hit Mid and reset.'
      },
      two: {
        jungle: 'Choose the one conversion that can finish before the enemy returns: crash, plate/tower, nearby camp, or epic monster. If the lane needs a reset, cover its exit instead of forcing a second gank.',
        top: 'Use a built wave to threaten top plates or the first turret, then announce whether you can walk or Teleport to the next fight. Do not leave a stacked enemy wave for a speculative play elsewhere.'
      },
      sync: {
        mj: 'One: “Mid dead, wave hits in six.” Two: “I cover one plate and their raptors; reset before they return.”',
        mt: 'One: “I can pin mid for one wave.” Two: “My top stack crashes now; pressure both turrets, then back on the same beat.”',
        aj: 'One: “Bot dead; help me crash, then support and I can move.” Two: “I touch only the wave you call; dragon if mid also has first move.”',
        at: 'One: “Bot tower is one safe push away.” Two: “I hold top pressure; if their jungler shows top, you take tower and reset.”'
      },
      go: 'A lane wave reaches the target before the defender and the pair can leave safely after claiming value.',
      goByPair: {
        mj: 'Mid crash reaches tower while Jungle covers the collapse; both can leave before enemy mid returns.',
        mt: 'Mid and top waves pressure two turrets at once, or one crashes as the other player controls the response route.',
        aj: 'Bot wave reaches tower with support and Jungle covering; ADC keeps farm and has an exit after the plate.',
        at: 'Top pressure reveals enemy jungle or draws a defender as ADC’s covered bot wave reaches tower.'
      },
      abort: 'The wave is gone, the enemy returns before a safe hit pays, or a second enemy moves through unwarded space.',
      fallback: 'Bank the earned gold with a synchronized reset and protect the next incoming wave; do not extend a won play into a delayed death.',
      convert: 'After first tower, call the next lane assignment before walking out of base so the ADC, mid, and top do not share one wave.',
      drill: 'For every pre-15 advantage, record whether it became a crash, plate, tower, safe camp, objective, or only a chase.'
    },
    {
      id: 'clock-15-20', label: '15–20', title: 'Assign lanes; make the next move together',
      read: 'Identify which outer turrets fell, where the next two waves will meet, who can safely hold mid, and which side of the map the next objective occupies.',
      why: 'Unassigned lanes create the mid-game ARAM: two players share one wave while a side wave dies and the next fight starts without them.',
      mechanic: 'From 14:00, waves spawn every 25 seconds in 2026 ranked. The shorter cycle makes a side catch followed by a timely return more important than a long aimless roam.',
      art: 'Ekko',
      one: {
        mid: 'If your ADC and support take mid, collect the nearest safe side wave and say when you will return. Push only to the line supported by vision and Duo Two’s current position; Vex or Xerath should not disappear deep into fog.',
        adc: 'Take the short mid lane with support after bot tower falls when the rotation is safe. Farm the wave, then move with your escort toward vision or the next fight; avoid a solo deep side wave.'
      },
      two: {
        jungle: 'Cover the side exit or mid river the pair is using and track who on the enemy team must answer the pushed wave. Use your sweep with another player present; a solo face-check turns lane priority into a death.',
        top: 'Own the opposite side wave only while you can escape or join the next fight. Ornn should set a timely group/Teleport; Garen may hold a side defender but must call before the central team advances.'
      },
      sync: {
        mj: 'One: “I catch top side, back mid after this wave.” Two: “I sweep that exit and meet you at river; no fight before you return.”',
        mt: 'One: “ADC takes mid; I push bot to the safe line.” Two: “I push top on the same wave, then we both collapse toward the next objective.”',
        aj: 'One: “I have mid wave, support beside me.” Two: “I clear the entrance after you push; follow me only when it lands.”',
        at: 'One: “I hold mid with support; tell me when top wave hits.” Two: “Top crashes in fifteen; draw them there, then we step forward together.”'
      },
      go: 'The relevant waves are assigned, exits are known, and both know whether the ADC has an escort.',
      goByPair: {
        mj: 'Mid catches a safe side wave while Jungle protects the return route; both reconnect before the central fight.',
        mt: 'Mid and Top own different waves that reach useful pressure together; both can reach or trade the next fight.',
        aj: 'ADC farms mid with support while Jungle controls its adjacent entrance; the side wave has another owner.',
        at: 'ADC holds mid with escort as Top’s side wave advances; Top groups if the center cannot safely delay.'
      },
      abort: 'A carry must walk alone into darkness, the side pusher has no escape/Teleport, or the central team is already too far forward.',
      fallback: 'Catch the nearer wave under safer vision, ping back from a premature fight, and align the next 25-second cycle.',
      convert: 'Use the forced defender as a numbers window for a mid turret, controlled jungle entrance, or neutral setup rather than another shared mid wave.',
      drill: 'At 15:00 and 18:00 pause the replay: who owned each lane, and was one wave lost while two allies shared another?'
    },
    {
      id: 'clock-20-30', label: '20–30', title: 'Make Baron a consequence of pressure',
      read: 'Check the mid and opposite side waves, enemy jungler/Smite, major ultimates, sweep and Faelight availability, and who can turn on an entering enemy.',
      why: 'A rushed Baron is a long, visible commitment. Two synced players make the opponent answer a wave before it can contest the pit.',
      mechanic: 'Baron spawns at 20:00 in ranked. The 2026 season increased epic monster durability, so nearby lane priority and a safe entrance matter more than a blind start.',
      art: 'Ornn',
      one: {
        mid: 'Push mid before entering the team’s safe vision line; save the spell that denies the river entrance. If Duo Two is side, align that wave with your crash and call when you can connect or must trade.',
        adc: 'Arrive with the mid wave, an escort, and a clear damage or turn assignment. Jinx and Veigar should stand behind the controlled entrance, not walk first into the pit or jungle.'
      },
      oneByPair: {
        mj: 'Crash Mid before joining Jungle at a warded Baron entrance. Save your key control spell for the enemy approach and call if the return wave will pull you away.',
        mt: 'Crash Mid as Top’s side wave arrives or Top groups at the entrance. State whether you can join the Baron turn or must hold Mid while Top draws an answer.'
      },
      two: {
        jungle: 'Track enemy Smite and choose “burn,” “turn,” or “bait” before hitting Baron. Sweep with frontline cover while Duo One stays in follow-up range; stop damage when the enemy entry threatens a losing 50/50.',
        top: 'Ornn groups as a visible front line or flank with an exit; Garen pushes the opposite side only if the team can disengage and he can arrive or gain a structure. Call Teleport status before the first Baron step.'
      },
      sync: {
        mj: 'One: “Mid crashes now; my control covers their river ramp.” Two: “Sweep with me; turn if jungler walks in, burn only if they show bot.”',
        mt: 'One: “Mid wave on their tower; I can meet top river.” Two: “I hold top entrance with you; if I cannot start safely, make them walk in.”',
        aj: 'One: “Mid pushed, support beside me; I damage only on your burn call.” Two: “Enemy Smite unseen; hold the entrance and turn first.”',
        at: 'One: “We have mid push but cannot survive 4v5.” Two: “I group now; no side lane until your team can stall and my TP is usable.”'
      },
      go: 'The approach lanes are controlled, the required players can join or deliberately trade, and enemy Smite has an answer.',
      goByPair: {
        mj: 'Mid crash gives Jungle a protected Baron entrance; both agree turn or burn against enemy Smite.',
        mt: 'Mid controls the entrance while Top groups or pins a defender with an equal side wave and usable TP.',
        aj: 'ADC has mid wave and escort; Jungle holds Smite and a defensible entrance before calling burn or turn.',
        at: 'ADC has protected mid pressure; Top joins the Baron fight or draws defenders with a side wave the team can safely delay.'
      },
      abort: 'Enemy can enter unseen, your damage takes too long, Smite/ultimates are unavailable, or a side wave threatens your own base.',
      abortByPair: {
        mj: 'Enemy jungle can enter unseen, Jungle lacks Smite, or Mid has no wave/entrance control.',
        mt: 'Mid loses entrance control and Top cannot group or trade before the enemy finishes Baron.',
        aj: 'ADC has no escort, Jungle lacks Smite, or the pit becomes an exposed 50/50.',
        at: 'ADC cannot survive center without Top and Top has no timely TP or meaningful side trade.'
      },
      fallback: 'Hold safe vision, punish the next exposed warder, take structure value on a live wave, or coordinate item resets.',
      convert: 'After Baron, reset if needed and stagger two lanes so one defender cannot clear all empowered waves; preserve the buff carriers.',
      drill: 'On each Baron attempt, stop at first attack: were mid and side waves favorable, was the enemy jungler accounted for, and did both agree burn or turn?',
      drillByPair: {
        mt: 'At first Baron attack, did Mid have a crash and did Top correctly choose group, TP, or a side trade?',
        at: 'At first Baron attack, was ADC covered and did Top’s group/TP/side assignment actually improve the call?'
      }
    },
    {
      id: 'clock-30-45', label: '30–45', title: 'Play one wave and one death timer at a time',
      read: 'Before leaving base, count living enemies, defensive cooldowns, both side waves, the closest live tower, and whether one pick opens the Nexus route.',
      why: 'At this point a single unsupported death can decide the game; the duo edge is matching waves and protection for a high-certainty finish.',
      mechanic: 'From 30:00, 2026 waves spawn every 20 seconds. A long detour can miss multiple waves or expose a tower; short, repeated push-and-connect cycles are safer.',
      art: 'Garen',
      one: {
        mid: 'Clear the wave that protects your structure, then call whether Duo Two groups or creates matched side pressure. Take only a warded route; save Vex fear, Ekko stun setup, or Xerath stun for the first diver or flank.',
        adc: 'State which threat can reach you and require a named escort before crossing into enemy jungle. Hit the closest safe target and reassess towers and death timers immediately after the first takedown.'
      },
      oneByPair: {
        mj: 'Clear Mid, then take the warded route with Jungle on the same wave beat. Keep your control or escape ready for the first flank and call the finish before the next wave.',
        mt: 'Clear Mid and tell Top whether your next wave creates a safe group fight or matched side pressure. Save your control for the defender who can interrupt the finish.'
      },
      two: {
        jungle: 'Do not face-check or start a monster while Duo One is catching a wave. Protect the carry’s entry, track enemy Smite, and call whether the pick means Nexus, Baron, structure, or reset.',
        top: 'Keep the side wave level with the team, not far ahead of it. Ornn covers or starts the fight when Duo One can follow; Garen splits only with vision and a workable Teleport or safe trade.'
      },
      sync: {
        mj: 'One: “Mid clear in five; then my control spell is ready.” Two: “I wait at the warded entrance; no Baron start until you meet me.”',
        mt: 'One: “I have the next mid wave.” Two: “My side wave reaches their tower at the same time; step forward only then.”',
        aj: 'One: “Assassin Flash up; stay between me and their flank.” Two: “I peel first; after a kill we check Nexus wave before Baron.”',
        at: 'One: “I cannot fight 4v5 while you are side.” Two: “I group this wave; if they send two for me next cycle, you advance.”'
      },
      go: 'Both are on the same map beat, an exit is known, and the chosen reward can be taken before respawns.',
      goByPair: {
        mj: 'Mid clears then joins Jungle through a warded route; both can take the chosen reward before respawns.',
        mt: 'Mid and Top waves meet enemy structures together, or Top is already grouped for the decisive fight.',
        aj: 'ADC reaches the fight with escort as Jungle protects the entry and calls the next structure or Baron.',
        at: 'ADC is covered at center; Top groups or applies a matched side wave with TP and a safe central delay.'
      },
      abort: 'The first player is caught, the carry has no cover, the wave is not at the target, or a defender can return before the final tower falls.',
      abortByPair: {
        mj: 'Mid or Jungle is picked before the wave arrives; clear and defend instead of entering fog short-handed.',
        mt: 'Top is too far ahead of Mid’s wave or cannot join before a decisive central fight.',
        aj: 'ADC has no escort or the winning wave dies before structures can fall.',
        at: 'ADC cannot survive without Top while split, or Top’s side wave misses the central timing.'
      },
      fallback: 'Clear the safest wave, defend only the entrance you can cover, and wait for a forced enemy move rather than guessing in darkness.',
      convert: 'On a favorable pick, count the shortest legal path to Nexus through current waves and towers. Take Baron or another structure only when an immediate finish is unavailable.',
      drill: 'For every post-30 death, identify which partner was more than one response away and which wave or vision cue should have stopped the move.'
    }
  ],

  map: [
    {
      id: 'map-vision', label: 'VISION', title: 'Enter fog in pairs, after the wave',
      read: 'Which lane gives the first move? Where was enemy jungle last seen? Which brush or wall hides the actual approach, and who has a ward or sweep?',
      why: 'Vision has value when it protects the move the duo named. A pushed wave creates time for the entry player or reveals where defenders are going.',
      mechanic: 'Faelight wards reveal an extra region for 45 seconds and gain 25% radius in 2026 ranked. Mid river and side-lane locations create temporary information; the extra region expires.',
      art: 'Xerath',
      one: {
        mid: 'Crash mid or keep the opponent pinned before entering river with a nearby jungler. If Duo Two is Top, hold mid priority while they ward their side exit; place your own ward on the side you will actually play.',
        adc: 'Tell your support which wave you are crashing and remain behind the first person entering fog. Use safe long-range vision if available; do not walk alone to ward just because an objective timer is near.'
      },
      oneByPair: {
        mj: 'Crash Mid and escort Jungle only to the river edge you can defend together. Ward that route, then return before your next wave is lost.',
        mt: 'Hold Mid push while Top wards a side exit; place your own ward toward the same future objective. Do not leave Mid to chase Top through dark jungle.'
      },
      two: {
        jungle: 'Sweep the entrance only after your partner is in range to trade for a contest. If the enemy has lane priority, use a defensive ward line and wait for the wave to change.',
        top: 'Ward the exit that protects your planned side wave, including a side Faelight after it appears. If you are going to Teleport, identify a ward that will still be safe when the fight begins.'
      },
      sync: {
        mj: 'One: “Mid crashes, I walk with you to top banana brush.” Two: “Sweep now; if their mid leaves tower, we back together.”',
        mt: 'One: “I hold mid push.” Two: “I ward top-side exit as my wave advances; I stop at the same line as you.”',
        aj: 'One: “Bot wave is under them; support and I can escort river.” Two: “Sweep the pit entrance with us, then we choose dragon or reset.”',
        at: 'One: “We have bot river vision for one wave.” Two: “My TP ward is safe now; if it dies, I start moving early or trade top.”'
      },
      go: 'The relevant wave is pushed, the entry has cover or a safe cross-map counterpart, and vision serves the intended play.',
      goByPair: {
        mj: 'Mid crash lets Mid walk with Jungle to one river entrance; both can retreat if enemy mid moves.',
        mt: 'Mid owns top-side first move while Top wards the side exit, or their waves hold defenders on separate fronts.',
        aj: 'ADC crash and support cover let ADC escort Jungle to bot river without losing the return wave.',
        at: 'ADC can ward bot safely with support while Top wards the side exit or names a usable TP landing.'
      },
      abort: 'Your side is being pushed in, the enemy can collapse from two unknown angles, or the ward line is expiring before the play.',
      abortByPair: {
        mj: 'Mid loses first move or two enemies can collapse before Jungle’s sweep ends.',
        mt: 'Mid cannot hold the approach and Top’s side exit is dark; do not both enter fog.',
        aj: 'ADC lacks support escort or bot wave is coming in; Jungle takes defensive vision instead.',
        at: 'ADC’s bot entry is unsafe or Top’s TP ward is gone; protect separate exits.'
      },
      fallback: 'Place defensive vision, preserve health, and plan the next wave that can reopen the entrance.',
      convert: 'Use the information immediately for a pick, safe camp, structure, or objective setup; refresh the route if the move takes longer than the vision window.',
      drill: 'Count deaths while placing vision: was the entry protected or timed to the partner’s wave, and did the ward serve a declared play?'
    },
    {
      id: 'map-objective', label: 'EPIC OBJECTIVE', title: 'Crash, enter, turn or burn',
      read: 'Are adjacent waves crashed, who can physically contest, and who instead creates a cross-map trade? Locate enemy Smite, key ultimates, and the cost of giving the monster.',
      readByPair: {
        mj: 'Is Mid crashed as Jungle reaches the pit? Check enemy Smite, your 2v2, and which river entrance you can defend.',
        mt: 'Can Mid contest with the team while Top groups by safe TP, or will Top’s side wave create a stronger trade?',
        aj: 'Can ADC and support leave a crashed bot or mid wave as Jungle enters with Smite? Check enemy mid and jungle first move.',
        at: 'Can ADC contest locally with support, and is Top’s TP landing safe and timely? If not, what top structure is the trade?'
      },
      why: 'The strongest objective call often starts with a wave, then a vision line, then a choice to fight or take the monster.',
      mechanic: '2026 epic monsters gained durability, making the time spent inside the pit more punishable. Smite does not replace lane priority or a protected entrance.',
      art: 'Rammus',
      one: {
        mid: 'Push the nearby wave and announce when you can enter controlled river or support Duo Two’s opposite-side trade. Hold Vex fear, Ekko stun setup, or Xerath stun for an entrance or diver.',
        adc: 'Crash bot or mid with support, then enter behind your frontline. State whether you will hit the monster or hold damage for the approaching enemy; do not abandon a huge wave under your own tower for a speculative start.'
      },
      oneByPair: {
        mj: 'Crash Mid, then enter the controlled river with Jungle on the same beat. Hold your key spell for the enemy entrance and call “no move” if Mid is pinned.',
        mt: 'Crash Mid so the enemy mid must clear while Top groups by safe TP or threatens an opposite structure. Tell Top whether you can contest or only trade.',
        at: 'Crash bot or mid with support before entering the objective area. Ask Top for safe TP timing or a clear side trade; do not abandon a large incoming wave.'
      },
      two: {
        jungle: 'State the plan as “turn,” “burn,” or “trade” before first damage and announce Smite state. If lanes cannot leave, take a camp or opposite-side structure instead of asking them to pay two waves for a river coin flip.',
        top: 'Set the opposite side wave before a cross-map objective and call Teleport availability and landing safety. Group early if your team cannot stall, or pressure the structure if the contest is already lost.'
      },
      sync: {
        mj: 'One: “Mid crash in eight; I control their river ramp.” Two: “Wait eight, then we sweep; turn if their jungle arrives.”',
        mt: 'One: “Mid first move; I can enter river.” Two: “Top wave is under their tower, TP ready; I join when they commit, or take tower if two chase me.”',
        aj: 'One: “Bot crash now, support with me; I can hit dragon.” Two: “Enemy Smite top; burn after our ward lands, then reset.”',
        at: 'One: “Bot has push but their mid moves first.” Two: “I cannot TP into that river; we trade top tower and protect bot exit.”'
      },
      go: 'The contesting lanes can move, the entrance is defensible, and both players agree whether to contest or trade.',
      goByPair: {
        mj: 'Mid can move first and Jungle has Smite, health, and a protected entrance; both agree turn or burn.',
        mt: 'Mid contests when Top joins by safe TP; otherwise Mid delays safely while Top converts a side structure.',
        aj: 'ADC and support can leave the crashed wave while Jungle has Smite and a covered bot entrance.',
        at: 'ADC contests when Top joins by safe TP; otherwise ADC delays with the team as Top takes an opposite tower.'
      },
      abort: 'Required nearby priority is missing, enemy Smite has a winning entry, or the objective cannot die before a collapse.',
      abortByPair: {
        mj: 'Mid cannot move, enemy Jungle enters unseen, or allied Smite is unavailable.',
        mt: 'Mid loses nearby priority and Top cannot TP or force an equal opposite-side trade.',
        aj: 'ADC/support are pinned, Jungle lacks Smite, or bot-side vision cannot cover the entry.',
        at: 'ADC/support cannot contest and Top has neither timely TP nor a safe structure trade.'
      },
      fallback: 'Trade the opposite structure/camp or set vision for the next spawn; a defended wave may be worth more than a low-percentage contest.',
      fallbackByPair: {
        mj: 'Mid catches the wave while Jungle takes a safe camp or wards the next entrance; reconnect on the next crash.',
        mt: 'Mid holds the nearby wave as Top takes the safe opposite structure or groups early for the next spawn.',
        aj: 'ADC catches the bot wave while Jungle trades a safe camp or opposite objective; reset together later.',
        at: 'ADC protects local farm while Top converts their own wave into a safe tower hit or starts moving for the next spawn.'
      },
      convert: 'After securing the monster, leave through the known exit and reset or push the nearest live wave; do not give back the objective in an unplanned fight.',
      drill: 'For each lost epic monster fight, mark the lane waves at first attack and whether the pair had agreed turn, burn, or trade.'
    },
    {
      id: 'map-tower', label: 'TOWER', title: 'Use the minion wave as your third player',
      read: 'How many live minions reach the tower, where are the enemy jungler and support, which champion can hit safely, and how long until defenders return?',
      why: 'A single safe turret hit can bank plate or Overgrowth value; a prolonged siege without cover can erase the entire lead.',
      mechanic: '2026 lane turrets keep segmented plate rewards, and Crystalline Overgrowth adds damage to the next champion hit after charging. First turret destroyed also brings an extra reward.',
      art: 'Jinx',
      one: {
        mid: 'Crash a real wave before approaching the turret and use the enemy’s clear animation to choose a hit, ward, or reset. If the enemy jungle is missing on your side, take the wave value without standing in gank range.',
        adc: 'Hit only while support or Duo Two covers the approach and a wave is still tanking. Call your exit before the last minion dies; your farm and survival are worth more than a greedy extra plate.'
      },
      two: {
        jungle: 'Stand on the side from which the enemy can actually collapse, then state how many seconds of cover you have. After a kill, help the laner crash only when their wave call asks for it; do not tax the carry’s farm.',
        top: 'Build the wave before stepping to the tower, then identify who can answer your side pressure. Ornn can collect a safe hit and group; Garen can hold a defender only while Duo One’s lane is advancing too.'
      },
      sync: {
        mj: 'One: “Mid wave reaches tower; one safe hit, then back.” Two: “I cover their raptor entrance; leave when I ping missing.”',
        mt: 'One: “My mid wave hits now.” Two: “Top wave hits with it; force two answers, then retreat to our ward line.”',
        aj: 'One: “Help crash this wave, then let me take plate with support.” Two: “I cover tri-brush for one wave; leave on my danger ping.”',
        at: 'One: “Bot turret is one plate from falling.” Two: “Enemy jungle shows top; take your plate and recall before I lose track.”'
      },
      go: 'A wave is at the tower, the collapse path is known, and a safe retreat remains after the plate or tower falls.',
      goByPair: {
        mj: 'Mid wave tanks tower while Jungle covers the gank path; Mid leaves when the last safe hit is spent.',
        mt: 'Mid and Top waves reach their towers together, forcing separate defenders with known retreat paths.',
        aj: 'ADC wave and support reach bot tower while Jungle covers the actual collapse path for one wave.',
        at: 'Top pressure reveals the enemy response as ADC and support take a covered bot hit; both can exit.'
      },
      abort: 'Your last minion dies, enemy mid/support disappears, or the expected defender returns before the hit pays.',
      abortByPair: {
        mj: 'Mid’s last minion dies or Jungle loses sight of the collapse route.',
        mt: 'One wave dies before the other reaches tower or either player loses a safe exit.',
        aj: 'Bot’s last minion dies, support leaves, or Jungle loses collapse cover.',
        at: 'ADC has no support cover or Top cannot identify which enemy is leaving their lane.'
      },
      fallback: 'Use the crash for a ward, reset, or safe local resource; do not stay in turret range with no minion cover.',
      convert: 'After first tower, name the next lane assignment; enter the newly opened jungle only with a pushed wave and cover.',
      drill: 'For every death at a turret, freeze the replay at the last allied minion and check the pair’s cover and exit plan.'
    },
    {
      id: 'map-side', label: 'SIDE LANE', title: 'Pressure two places on the same beat',
      read: 'Will the side wave reach a defended structure while the central wave is also pushing? Can the side player escape or Teleport, and can the central group survive without them?',
      why: 'A lone deep push invites a collapse. Synchronized waves force defenders to choose between two real losses.',
      mechanic: 'Side pressure works when another lane or objective is threatened at the same time. Post-14 and post-30 faster waves shorten the time to catch and reconnect.',
      art: 'Garen',
      one: {
        mid: 'Catch one side wave, push to the deepest line your vision and partner allow, then return before the central fight. Ekko can threaten farther with an exit; Vex and Xerath should use shorter trips when darkness or enemy divers threaten.',
        adc: 'Own the safer mid wave with support or a frontline, then move only when the side wave forces a response. If your team cannot disengage while Duo Two is side, say so before it reaches enemy territory.'
      },
      two: {
        jungle: 'Track who answers the designated side wave, whether Duo One is Mid or another teammate supplies it. Take the vacated entrance only after Duo One can join; protect the center until then.',
        top: 'Build the side wave to meet Duo One’s mid push rather than running ahead of it. Call enemy count, Teleport, and whether you are drawing one defender or need immediate extraction.'
      },
      twoByPair: {
        mj: 'Track who answers Duo One’s side wave and hold the center until Mid returns. Enter the vacated river path only after Mid can follow.',
        aj: 'Track who answers the team’s side wave while ADC farms mid with support. Protect ADC’s center route before claiming the vacated river entrance.'
      },
      sync: {
        mj: 'One: “I push bot one wave; back to mid in ten.” Two: “I hold the center and do not engage until you return.”',
        mt: 'One: “Mid wave meets tower in twelve.” Two: “My top wave meets at twelve; we pressure both, then leave when two disappear.”',
        aj: 'One: “Mid wave pushed, I am behind support.” Two: “I use their side defender’s movement to enter river; you do not follow through fog.”',
        at: 'One: “I can safely hold mid, no hard engage from our team.” Two: “I push bot to tower, TP ready; if their mid vanishes I back off.”'
      },
      go: 'Both pressure points are live, the side player has vision or escape, and the remaining group can delay a fight.',
      goByPair: {
        mj: 'Mid’s side wave pressures as Jungle holds center until Mid reconnects; no fight begins during the gap.',
        mt: 'Mid and Top push different waves to the same depth; each has an exit or a way to join the next fight.',
        aj: 'ADC stays mid with support while Jungle uses an ally’s side wave to enter river; ADC never solos the deep side.',
        at: 'ADC and support hold the central wave; Top’s side wave reaches tower with vision and TP or a safe retreat.'
      },
      abort: 'Central wave is at your own tower, two enemies disappear toward the side player, or the grouped team cannot survive short-handed.',
      abortByPair: {
        mj: 'Jungle’s center cannot delay a fight before Mid returns, or two enemies vanish toward Mid.',
        mt: 'Mid and Top waves are out of phase or both retreat paths are dark.',
        aj: 'ADC is exposed mid while the team’s side player advances; Jungle protects ADC instead.',
        at: 'ADC’s group cannot delay 4v5, Top has no exit/TP, or two enemies disappear toward Top.'
      },
      fallback: 'Trim and collect the side wave at a safe line, group before the next fight, and reattempt on matched waves.',
      convert: 'When an enemy answers the side, spend the temporary numbers edge on a tower, controlled jungle entrance, or objective; if two answer, the side player exits while the team advances.',
      drill: 'At each split-push death, compare side and mid wave positions. Were they level, or was one player a full wave ahead of the team?'
    },
    {
      id: 'map-finish', label: 'INHIBITORS → NEXUS', title: 'Count the finish before taking another camp',
      read: 'Which enemy towers still stand, which allied wave is entering base, how many defenders are alive, when will they return, and who can safely damage structures?',
      why: 'The pair’s strongest call is sometimes “end now.” A won fight that becomes only another neutral objective can give the enemy a full reset.',
      mechanic: 'Inhibitors spawn super minions while down; Nexus turrets respawn with reduced health under the 2026 rules. Minion waves and death timers still determine whether a direct finish is possible.',
      art: 'Ornn',
      one: {
        mid: 'Clear the final defensive wave or escort the winning wave into base, depending on whose structures are threatened. Use control spells to block respawning defenders while the carry damages the nearest necessary structure.',
        adc: 'State your health, damage, and exact safe structure target before entering base. Jinx or Veigar hits the reachable structure behind frontline cover; Duo Two calls whether they join the finish or pin a defender side.'
      },
      oneByPair: {
        aj: 'Name the exact tower, inhibitor, or Nexus you can hit and your remaining health. Stay behind frontline while Jungle protects the flank and exit.',
        at: 'Name the exact structure your current wave can reach. Ask Top to join the finish if it is open; keep hitting only if Top’s side pressure actually pins a defender.'
      },
      two: {
        jungle: 'Call the live defender count and whether Smite is needed for another plan. Protect Duo One or the designated structure hitter and mark the exit; do not peel away for a camp during a live finishing wave.',
        top: 'Tank or threaten defenders while preserving enough health to stay with the structure push. If split, make your wave meet the central wave; Teleport only to a ward that lands before the fight is decided.'
      },
      sync: {
        mj: 'One: “Mid wave enters base; I hold my control for respawns.” Two: “I cover the flank. Tower, inhibitor, then Nexus if their timers allow.”',
        mt: 'One: “Their mid inhibitor is open, my wave enters now.” Two: “My side wave reaches their tower with it; we collapse only after they split.”',
        aj: 'One: “I have damage for Nexus if you screen two respawns.” Two: “I peel; ignore the chase and hit the structure.”',
        at: 'One: “Mid wave is in base, I can hit.” Two: “I join you now; no extra side wave when the Nexus is open.”'
      },
      go: 'A live wave can tank the route and the players at the base can remove remaining structures before defenders return.',
      goByPair: {
        mj: 'Mid and Jungle escort one live wave into base, with control and cover for respawning defenders.',
        mt: 'Mid’s wave can end with Top already grouped, or Top’s matched side wave pins the last defender.',
        aj: 'ADC can damage the remaining structures behind Jungle and frontline cover before respawns.',
        at: 'ADC has a live finishing wave and Top joins in time; a separate side push continues only if it pins a defender.'
      },
      abort: 'The wave dies, the carry is too low, or the necessary tower cannot fall before respawn.',
      abortByPair: {
        mj: 'Mid wave dies or the pair cannot cover remaining defenders before respawn.',
        mt: 'Mid and Top waves miss each other or Top cannot arrive before defenders respawn.',
        aj: 'ADC is too low to hit or the frontline cannot screen the last defender.',
        at: 'ADC’s finishing wave dies or Top cannot join or pin the remaining defender in time.'
      },
      fallback: 'Take only the safe structure, leave by known exits, reset on matching waves, and use the opened lane next. Do not donate shutdowns inside the base.',
      convert: 'Nexus is the final objective when open; otherwise set the next two-wave push and deny the enemy an uncontested reset.',
      drill: 'After every won fight past 20 minutes, pause before the first objective call: was Nexus already reachable with the current wave and death timers?'
    }
  ],

  recovery: [
    {
      id: 'recovery-no-prio', label: 'NO PRIORITY', title: 'Say “cannot move” early enough to reroute',
      read: 'Your wave is at your turret or the opponent controls the river entrance. Can either partner leave without losing XP, dying, or arriving after the fight?',
      readByPair: {
        mj: 'Mid is pinned: when can Mid clear, and can Jungle wait or reroute before crossing river?',
        mt: 'Which of Mid or Top is pinned, and can the free lane create a cross-map gain without demanding a late rotation?',
        aj: 'ADC is catching bot: can support move, and can Jungle delay dragon until the wave is repaired?',
        at: 'ADC cannot leave bot: can Top trade a top wave or use a real TP window without promising an impossible walk?'
      },
      why: 'The pair prevents a bad fight when the pinned player names the wave cost before the other commits to a contest or cross-map trade.',
      mechanic: 'The pushing lane can usually move first. Health, cooldowns, and enemy positions can override that apparent priority; wave location alone is not permission to fight.',
      art: 'Rammus',
      one: {
        mid: 'Call “no priority” with the wave and earliest safe arrival, then collect it. Ping the enemy mid path if they leave first; only follow after the wave is fixed and the route is visible.',
        adc: 'Do not leave a large wave under your turret because the jungler starts dragon. Tell Duo Two the wave cost and support status, then clear or request a safe cover to get out.'
      },
      two: {
        jungle: 'Stop the invade or neutral start when nearby lanes cannot move. Cover their crash, take an uncontested camp, or path to the other side; return after the next lane window.',
        top: 'Call whether you are stuck collecting top or can Teleport after it clears. If the partner’s lane is pinned, keep the opponent occupied without requiring an impossible rotation.'
      },
      sync: {
        mj: 'One: “No mid move for this wave; earliest after eight seconds.” Two: “I give river and clear my near camp; call the crash.”',
        mt: 'One: “Mid under tower; no top-side roam.” Two: “I hold top and do not start the dive until you actually have mid first move.”',
        aj: 'One: “Bot wave at my turret, support low; no dragon.” Two: “I cancel the start and cover your clear, then we reset.”',
        at: 'One: “Bot cannot move; enemy support is first to river.” Two: “I keep top pressure and save TP; we trade instead of arriving late.”'
      },
      go: 'The pinned wave is cleared or the pair has agreed to trade elsewhere, and the enemy response can be seen.',
      goByPair: {
        mj: 'Mid clears the pinned wave, then calls the first safe river step; Jungle waits or reroutes until then.',
        mt: 'Mid and Top repair their separate waves before an upper-river move, or one takes a cross-map structure.',
        aj: 'ADC clears bot with support before dragon; Jungle cancels a start that requires ADC to abandon the wave.',
        at: 'ADC clears bot while Top preserves top pressure; a TP contest needs a safe landing and bot first move.'
      },
      abort: 'The play would require walking through an unseen enemy or sacrificing a stacked wave for no guaranteed return.',
      abortByPair: {
        mj: 'Jungle would cross river before Mid can clear, or Mid must sacrifice a stacked wave.',
        mt: 'Mid or Top must abandon a stacked wave to reach the other; trade pressure instead.',
        aj: 'Jungle needs ADC to leave a stacked bot wave or support cannot leave lane.',
        at: 'Top cannot reach bot in time and ADC lacks local priority; do not treat a distant TP as guaranteed.'
      },
      fallback: 'Take the safe local wave or camp, ward defensively, and announce the next wave on which priority can change.',
      convert: 'If the opponent leaves, punish the tower-facing wave or take the opposite-side resource with a clear escape.',
      drill: 'Count contests started while a partner said or should have said “cannot move.” Identify the first moment the reroute was available.'
    },
    {
      id: 'recovery-behind', label: 'BEHIND', title: 'Shrink the loss, then reopen one side',
      read: 'Who has safe wave clear, who holds a shutdown, what towers are exposed, and which objective can be traded for gold, XP, or a plate?',
      why: 'A losing duo needs safe income in each assigned role and one protected next move, not separate comeback attempts in darkness.',
      mechanic: 'Before completion, 2026 role quests reward assigned-lane presence; permanent plates give incremental structure value. A defended wave and safe plate can keep a losing pair relevant.',
      art: 'Vex',
      one: {
        mid: 'Clear from safety and deny the enemy a free mid wave plus river entrance. Save your fear, stun, or escape for dives; take the first unguarded side wave only after Duo Two knows your route.',
        adc: 'Keep farm within vision and tell Duo Two when you must catch the next safe wave. Jinx and Veigar can scale through controlled clears; do not step past the support/frontline to recover one extra minion.'
      },
      two: {
        jungle: 'Protect the side that contains safe carry farm and trade away an unwinnable epic monster for camps or a different tower. Do not enter a dark losing jungle alone to force a steal.',
        top: 'Ornn preserves teamfight health and an engage or peel angle; Garen pushes only the safe wave and leaves before the collapse. Signal whether Teleport can turn the next defense or whether the team must give ground.'
      },
      sync: {
        mj: 'One: “I clear mid then can cover our blue entrance.” Two: “I sweep only with you; give dragon and keep our camps.”',
        mt: 'One: “I hold mid, no river contest.” Two: “I catch top and TP to defend only if they dive our tower.”',
        aj: 'One: “I need two safe mid waves for my item.” Two: “I hold your jungle exit; we do not chase their support into fog.”',
        at: 'One: “I farm mid with support; no 4v5.” Two: “I group for the tower defense; I split only when you can safely delay.”'
      },
      go: 'The pair can gain farm or defend a tower with an escape, or an enemy overextension creates a clear numbers advantage.',
      goByPair: {
        mj: 'Mid can clear safely while Jungle covers the same quadrant, then both punish an enemy overstep.',
        mt: 'Mid holds the center as Top collects a safe side wave or groups for a defended tower fight.',
        aj: 'ADC farms with support while Jungle protects the entrance; they fight only an enemy overstep.',
        at: 'ADC catches protected mid waves as Top groups for defense or pressures a side wave the enemy must answer.'
      },
      abort: 'A comeback play starts in unwarded enemy space or requires the weaker carry to lead the entry.',
      fallback: 'Concede the low-value contest, protect the next wave and your controlled map quadrant, then reset for item completion.',
      convert: 'After one pick or safe tower defense, push one lane far enough to place vision, then take the newly available camp, plate, or objective.',
      drill: 'After falling behind, mark the first two forced fights. Could the duo have gained safe waves or a camp instead, and did the carry reach the next item sooner?'
    },
    {
      id: 'recovery-failed', label: 'FAILED PLAY', title: 'End the failed play before it becomes three deaths',
      read: 'Did the committed play fail but burn a summoner or draw a defender? Who controls the next wave, which cooldowns are down, and where can each partner exit?',
      why: 'A failed play is information. The duo keeps its edge by repairing both wave plans before emotion drives a second, worse commitment.',
      mechanic: 'A burned Flash can create a future angle, but it does not repay a lost wave by itself. The next move still requires wave and route alignment.',
      art: 'Ekko',
      one: {
        mid: 'State the remaining enemy summoner and your wave status immediately. Collect or crash the next wave before agreeing to a repeat; if you used the escape spell, reduce river exposure.',
        adc: 'Call whether the bot wave will freeze against you and ask for a controlled crash if needed. Preserve health and tell your support the duo is exiting; do not chase an enemy under tower to rescue a missed gank.'
      },
      two: {
        jungle: 'Leave along the planned exit, finish an efficient camp or cover a requested wave fix, and re-evaluate enemy jungle position. Set a return timer around the next lane window rather than hovering visibly for a minute.',
        top: 'If your Teleport or ultimate was spent, announce the cooldown and repair the side wave. If the cross-map play failed, do not deepen the split to “make up for it” without central pressure.'
      },
      sync: {
        mj: 'One: “Their Flash down, my control down, wave coming to me.” Two: “We exit; I clear one camp and return when your setup and wave align.”',
        mt: 'One: “Roam failed, I lost mid push.” Two: “I stop the top dive and hold my wave; we retry after both crashes.”',
        aj: 'One: “No kill, enemy Heal down; I need this wave crashed.” Two: “I help only this wave, then reset with you.”',
        at: 'One: “Dragon fight lost; mid must be cleared.” Two: “I stop side pressure and cover the retreat, TP unavailable for the next cycle.”'
      },
      go: 'A second attempt has refreshed cooldowns, a new wave window, and confirmed enemy location.',
      goByPair: {
        mj: 'Mid control and wave are reset; Jungle’s next route is efficient and enemy jungle location is known.',
        mt: 'Mid and Top waves can be synchronized again; a second top play has vision and required cooldowns.',
        aj: 'ADC has repaired bot wave and support can join; Jungle approaches on a fresh route, not a visible hover.',
        at: 'ADC bot and Top side waves are reset; the next play is a timed trade or safe TP, not a revenge fight.'
      },
      abort: 'The only reason for the second attempt is frustration, or the opponent now has first move and more health.',
      fallback: 'Exit, collect the next safe wave/camp, reset, and plan one new objective together.',
      convert: 'Store the burned summoner or ward information and exploit it on a later synchronized wave; do not repay a mistake with another sacrifice.',
      drill: 'For each failed play, count the next 60 seconds: did the duo lose an extra death, wave, or resource after the original mistake?'
    },
    {
      id: 'recovery-one-pick', label: 'LATE PICK / FINISH', title: 'One pick: defend, end, or reset—call it now',
      read: 'Who died, whose damage remains, which wave is closest to base, which inhibitors and Nexus turrets are open, and how long before a defender returns?',
      why: 'The same pick can be a finish, a Baron, or merely a safe reset. Deciding together before either player wanders off preserves the window.',
      mechanic: 'Late death timers are long, while post-30 waves spawn every 20 seconds. A missed wave can invalidate an otherwise correct finishing call.',
      art: 'Ornn',
      one: {
        mid: 'If an ally was picked, clear the nearest threatening wave before the enemy can use it on your tower. If an enemy was picked, call the winning wave and whether Duo Two joins or pins defenders from another lane.',
        adc: 'If alive, state your DPS, health, and whether you can hit structures through the surviving threat. If dead, immediately communicate enemy cooldowns and let Duo Two defend waves rather than attempt a hero steal.'
      },
      oneByPair: {
        mj: 'If an ally is picked, clear the threatening Mid wave and keep Jungle from a short-handed Baron. If an enemy falls, call the live finish wave and hold control for remaining defenders.',
        mt: 'If an ally is picked, clear Mid while Top groups for defense. If an enemy falls, call the finishing wave and whether Top must join or can pin the last defender.'
      },
      two: {
        jungle: 'Count enemy and ally Smite status, keep Duo One’s route clear, and call “Nexus,” “Baron,” “tower,” or “reset” once. If the duo lost a member, defend the wave and delay rather than starting a short-handed monster.',
        top: 'Join the central wave when it can end; a side wave is useful only if it reaches a structure in the same window. If the carry was picked, front the remaining wave clear and do not offer the enemy a second death.'
      },
      sync: {
        mj: 'One: “Enemy jungler dead forty; mid wave entering.” Two: “Nexus route first; I cover remaining defenders, Baron only if wave dies.”',
        mt: 'One: “Our carry died; I clear mid from range.” Two: “I group for wave defense, no solo TP flank into five.”',
        aj: 'One: “I can hit inhibitor tower now if you screen assassin.” Two: “I peel the flank; we leave together when the wave dies.”',
        at: 'One: “Enemy carry dead, my wave at Nexus turret.” Two: “I leave side and join the finish; no extra top tower.”'
      },
      go: 'A live wave and remaining damage can finish the chosen structure before respawn, with the attacker covered and the partner’s pressure accounted for.',
      goByPair: {
        mj: 'Mid wave enters base while Jungle screens the remaining defenders; both can finish before respawn.',
        mt: 'Mid and Top have a finishing wave or matched base pressure; Top groups if the Nexus route is open.',
        aj: 'ADC can hit the final structure with frontline and Jungle cover before defenders return.',
        at: 'ADC has safe structure damage while Top either joins the finish or holds a defender on a matching side wave.'
      },
      abort: 'The wave dies, a key defender returns before the final structure, or your surviving carry cannot enter safely.',
      abortByPair: {
        mj: 'Mid wave dies or Mid and Jungle cannot hold the remaining defender long enough to finish.',
        mt: 'Top is still side when Mid’s base wave dies, or either lane lacks damage before respawn.',
        aj: 'ADC cannot enter safely or the wave dies before Jungle can protect the final hit.',
        at: 'ADC’s wave dies or Top cannot group or hold a defender before respawn.'
      },
      fallback: 'Take the reachable tower or objective without donating shutdowns, reset, and force the next matched wave.',
      convert: 'When Nexus is open, commit to it; otherwise bank the closest guaranteed structure or Baron, then use the next wave to finish.',
      drill: 'Review every post-30 pick and name the highest guaranteed reward visible at the moment of the pick, not after the team dispersed.'
    }
  ]
};
