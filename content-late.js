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
      id: 'clock-0-3', label: '00–03', title: 'Agree on the first three waves',
      read: 'In loading screen, Duo One calls the first wave and support readiness if bot. Duo Two calls the jungle route or Top wave and Teleport. An enemy arriving late hints at their jungle start; it does not prove it.',
      readByPair: {
        mj: 'Call Mid’s first three waves, Jungle’s opening route, your 2v2 strength, and any clue about the enemy start.',
        mt: 'Call both solo-lane wave plans, your top-side 2v2 strength, enemy jungle clues, and Top’s Teleport status.',
        aj: 'Call bot’s first wave, support readiness, Jungle’s route toward or away from bot, and enemy jungle clues.',
        at: 'Call bot wave and support readiness, plus Top’s first waves and Teleport. Plan a later join or separate trades.'
      },
      why: 'Before lanes meet, agree whether Duo One’s wave can support Duo Two’s route, whether you trade on opposite sides, or whether both farm safely.',
      mechanic: '2026 ranked minions spawn at 0:30, buff camps at 0:55, and Scuttle at 2:55. The first cannon is wave three; lane quests reward time and farm in the assigned lane.',
      art: 'MonkeyKing',
      one: {
        mid: 'Tell Duo Two whether your wave will push, come in, or stay near center. Keep health and your control spell for the agreed river side. If Duo Two is Top, say whether you can move toward them.',
        adc: 'Tell Duo Two whether bot can win the first push and whether support can trade or engage. Farm the opening wave; do not force a fight just because Jungle is pathing bot.'
      },
      oneByPair: {
        mj: 'Call whether Mid will crash wave three or hold it for Jungle’s first route. Keep health and your control spell for the possible 2v2.',
        mt: 'Call whether Mid can push wave three and move toward top river. If Top is pinned, keep Mid pushed so the enemy mid cannot move first.',
        aj: 'Call bot wave direction, health, and support engage or peel readiness. Preserve farm and quest progress while Jungle routes toward or away from your lane.',
        at: 'Call bot wave and support readiness. Ask whether Top can pressure and whether Teleport is ready. Farm bot instead of expecting an early rescue from across the map.'
      },
      two: {
        jungle: 'Announce your start camp, clear direction, and earliest realistic arrival before minions meet. Update the route if a lane loses health or wave control; do not treat first Scuttle as mandatory.',
        top: 'Call whether you can push, hold, or only collect XP for the first three waves. Track both top Teleports and announce a planned reset or river move before you leave.'
      },
      sync: {
        mj: 'One: “Mid wave three crashes in eight seconds; my stun is ready.” Two: “I finish raptors into top river; we move after your crash.”',
        mt: 'One: “I can push mid toward top river after this wave.” Two: “My third wave is coming in; no top-side contest until I catch it.”',
        aj: 'One: “Bot wave comes to us; support engage is ready.” Two: “I finish bot side in 20 seconds; hold it outside tower if safe.”',
        at: 'One: “Bot has first push; enemy jungle is missing.” Two: “I cannot leave top. If their jungler shows here, use your bot window.”'
      },
      go: 'Duo One names the first wave and support or control spell; Duo Two names the route or Teleport. Both know whether they meet or trade.',
      goByPair: {
        mj: 'Mid can hold for a gank or crash for river as Jungle finishes toward that side; both have health and setup.',
        mt: 'Mid and Top name when their separate waves give top-side priority; neither leaves a large incoming wave.',
        aj: 'ADC has a bot wave plan and support status; Jungle routes toward a gank or bot river without forcing the lane.',
        at: 'ADC can use a bot window while Top manages their own wave or Teleport; neither plans a cross-map walk.'
      },
      abort: 'Duo One cannot move on the called wave, Duo Two cannot arrive, or new enemy jungle information breaks the opening plan.',
      abortByPair: {
        mj: 'Mid says no move for the river wave, or the enemy mid–jungle pair arrives first.',
        mt: 'Either wave is pinned. Skip the top-side play; take separate safe rewards if available.',
        aj: 'Support cannot follow, bot wave is pinned, or Jungle arrives into an unseen enemy countergank.',
        at: 'Bot cannot use its push, or Top has no safe pressure or Teleport. Play your own waves.'
      },
      fallback: 'Duo One farms the safe wave while Duo Two finishes a camp or holds Top. Both call the next wave on which they can meet.',
      convert: 'After the first successful play, Duo One fixes the wave and Duo Two covers the exit. Together choose a plate, ward, camp, or reset before defenders return.',
      drill: 'Replay the first three waves: did Duo One call wave direction, Duo Two call route or Teleport, and both agree on meeting or trading?'
    },
    {
      id: 'clock-3-8', label: '03–08', title: 'Set the wave before the first play',
      read: 'Duo One calls wave position, health, control spell, and support status if bot. Duo Two calls arrival time, enemy jungler location, and whether nearby allies can join.',
      readByPair: {
        mj: 'Before a gank or invade, check Mid wave, both health bars, control spells, and where the enemy jungler could counter.',
        mt: 'Before a top-side play, compare Mid and Top crash times, both health bars, and the enemy jungler’s likely route.',
        aj: 'Before a bot gank or dragon, check bot wave, support position, ADC health, and enemy mid–jungle response.',
        at: 'Before bot or top pressure, compare both waves, support status, Teleport timing, and enemy Jungle location.'
      },
      why: 'A pushed wave gives you time to move. If your partner is catching a stacked wave under tower, a river ping will not make them available.',
      mechanic: 'A gank has more room when the enemy laner is near center or your tower. When your wave reaches their tower, use the crash for vision or a reset. Dive only with a clear health and numbers edge.',
      mechanicByPair: {
        mt: 'A stacked top wave holds its defender at tower; a Mid crash frees Mid to move. Time both waves so the top-side play is safe.',
        at: 'A bot crash gives ADC a short window. Top can join by a safe, timely Teleport; otherwise Top uses their own wave for pressure.'
      },
      art: 'Vex',
      one: {
        mid: 'When Jungle approaches for a gank, trim the wave and hold it near your side. For a river play or a Top trade, push and call when the wave reaches enemy tower.',
        adc: 'Call support position and whether bot wave is holding, stacking, or crashing. Preserve your escape spell while the enemy jungle is missing; after a kill, explicitly ask for help crashing if the wave would freeze against you.'
      },
      oneByPair: {
        mj: 'Hold Mid near your side for a called Jungle gank. For an invade, crash before Jungle enters river. Call your wave timing and control spell.',
        mt: 'Time Mid’s crash with Top’s. Move top only if you can return for the next Mid wave; otherwise keep the enemy mid in lane while Top trades.',
        at: 'Call bot wave, support readiness, and whether you can contest dragon. Ask Top for a timed Teleport or a top-side trade.'
      },
      two: {
        jungle: 'Path toward the lane window you both called. If nearby lanes are pinned, change route, cover their wave, or trade elsewhere. Do not enter river alone.',
        top: 'Hold a gankable wave when the jungler approaches, or stack then crash before leaving for upper river. Tell Duo One whether you can move now, after a wave, or only with Teleport.'
      },
      sync: {
        mj: 'One: “Two waves stacking; I crash in 12 seconds.” Two: “I cover your crash, then we enter river together.”',
        mt: 'One: “I clear Mid now, then move top.” Two: “My Top crash is one wave later. Wait before we enter their jungle.”',
        aj: 'One: “Wave held near us, support has CC ready.” Two: “I am one camp away; do not change your lane posture early.”',
        at: 'One: “Bot crash gives me a short river window.” Two: “My top cannon crashes. I take a plate while you control bot.”'
      },
      go: 'Duo One’s crash or held wave matches Duo Two’s arrival, or both have named safe rewards on opposite sides.',
      goByPair: {
        mj: 'Mid crash lands as Jungle reaches river, or a held mid wave exposes the enemy to a gank.',
        mt: 'Mid and Top crashes overlap for upper river pressure, or each threatens a separate structure safely.',
        aj: 'Bot wave and support allow the gank or dragon entry when Jungle reaches the same side.',
        at: 'Bot and top waves both crash. Top joins only if Teleport has a safe landing and arrives on time.'
      },
      abort: 'Duo One is pinned or support cannot follow; Duo Two would enter a missing enemy jungler or support alone.',
      abortByPair: {
        mj: 'Mid wave is pinned, opposing mid moves first, or enemy jungle is missing on the river entry.',
        mt: 'Either crash fails or enemy jungle can counter the top-side dive; trade waves instead.',
        aj: 'Support cannot follow, bot wave is pinned, or the countergank route is unwarded.',
        at: 'Top cannot reach bot on foot. Without a safe Teleport, take separate lane rewards or farm safely.'
      },
      fallback: 'Duo One farms or recalls on the safer wave; Duo Two wards, covers, or changes route. Reconnect on the next matching waves.',
      convert: 'After a kill, Duo One crashes while Duo Two covers. Note a burned Flash and choose the plate or objective that fits the next wave.',
      drill: 'Review each early play: could Duo One reach the wave and Duo Two reach the lane on time? What wave, camp, or Teleport did it cost?'
    },
    {
      id: 'clock-8-15', label: '08–15', title: 'Spend the lead before they return',
      read: 'After a kill or forced recall, Duo One calls the next wave and turret health. Duo Two calls enemy return time, nearby objective, and how long they can cover.',
      why: 'Both players spend the same window: one pushes the wave while the other covers, takes a nearby camp, or pressures a second lane.',
      mechanic: 'In 2026, plates remain on lane turrets and the first destroyed turret grants extra gold. A short safe push can have value even if the whole tower cannot fall.',
      art: 'Jinx',
      one: {
        mid: 'Crash after forcing enemy mid out. Move only where Duo Two can cover or pressure at the same time. Vex or Ekko can look for a pick; Xerath can hit the turret from safety.',
        adc: 'After a bot win, say whether you need help crashing and whether support can escort you. Hit the plate only while enemy Mid and Jungle are accounted for. Keep farming bot for your quest.'
      },
      oneByPair: {
        mj: 'Crash Mid after a pick. Tell Jungle whether the wave gives you time for a plate, ward, or nearby camp. Leave before enemy mid returns.',
        mt: 'Crash Mid as Top’s stack reaches tower so both lanes demand an answer. Move top only for a safe, warded dive; otherwise hit Mid and reset.'
      },
      two: {
        jungle: 'Choose one reward you can finish before the enemy returns: crash, plate, tower, nearby camp, or monster. If your laner needs to reset, cover their exit.',
        top: 'Use a built wave to threaten top plates or the first turret, then announce whether you can walk or Teleport to the next fight. Do not leave a stacked enemy wave for a speculative play elsewhere.'
      },
      sync: {
        mj: 'One: “Mid is dead; my wave hits in six seconds.” Two: “I cover one plate. We reset before they return.”',
        mt: 'One: “I keep their Mid here for one wave.” Two: “My top stack crashes now. We hit both turrets, then reset.”',
        aj: 'One: “Bot is dead; help me crash, then support and I can move.” Two: “I help crash. Dragon only if our Mid can move first.”',
        at: 'One: “Bot tower is one safe push away.” Two: “I hold top pressure; if their jungler shows top, you take tower and reset.”'
      },
      go: 'Duo One’s wave reaches the target before its defender; Duo Two can cover or draw another enemy, and both can leave safely.',
      goByPair: {
        mj: 'Mid crash reaches tower while Jungle covers the collapse; both can leave before enemy mid returns.',
        mt: 'Mid and top waves pressure two turrets at once, or one crashes as the other player controls the response route.',
        aj: 'Bot wave reaches tower with support and Jungle covering; ADC keeps farm and has an exit after the plate.',
        at: 'Top draws an enemy or reveals Jungle while ADC’s covered bot wave reaches tower.'
      },
      abort: 'Duo One’s wave dies, Duo Two loses track of a second enemy, or the defender returns before the hit is safe.',
      fallback: 'Duo Two covers Duo One’s exit, then both reset with the gold earned. Call the next wave before leaving base.',
      convert: 'After first tower, assign Duo One and Duo Two to their next jobs before leaving base. Keep ADC, Mid, and Top from sharing one wave.',
      drill: 'For each pre-15 advantage, did Duo One crash while Duo Two covered or traded? Record the plate, tower, camp, objective, or missed reward.'
    },
    {
      id: 'clock-15-20', label: '15–20', title: 'Assign lanes before moving together',
      read: 'Duo One names who farms Mid and who catches a side wave. Duo Two names the covered exit or matching Top wave. Check the next objective before either leaves lane.',
      why: 'When both players know their lane jobs, neither misses farm or arrives late. Without that call, two allies share Mid while a side wave dies.',
      mechanic: 'From 14:00, waves spawn every 25 seconds in 2026 ranked. The shorter cycle makes a side catch followed by a timely return more important than a long aimless roam.',
      art: 'Ekko',
      one: {
        mid: 'If ADC and support take Mid, collect the nearest safe side wave and call your return time. Push only as far as vision and Duo Two’s position allow; Vex or Xerath cannot escape deep fog easily.',
        adc: 'Take the short mid lane with support after bot tower falls when the rotation is safe. Farm the wave, then move with your escort toward vision or the next fight; avoid a solo deep side wave.'
      },
      two: {
        jungle: 'Cover the side exit or Mid river your partner will use. Track who answers the pushed wave. Sweep with an ally in range; do not face-check alone.',
        top: 'Take the opposite side wave only if you can escape or join the next fight. Ornn should group or Teleport on time. Garen can keep a defender side if the team can wait.'
      },
      sync: {
        mj: 'One: “I catch the Top wave, then return Mid.” Two: “I cover your exit. No fight until you return.”',
        mt: 'One: “ADC takes Mid; I push Bot to our ward line.” Two: “I push Top on the same wave, then we meet at the next objective.”',
        aj: 'One: “I have mid wave, support beside me.” Two: “I clear the entrance after you push; follow me only when it lands.”',
        at: 'One: “I hold Mid with support; call your Top crash.” Two: “Top crashes in 15 seconds. When they answer, you step forward.”'
      },
      go: 'Duo One and Duo Two have separate wave or cover jobs, both exits are known, and ADC has an escort if they hold Mid.',
      goByPair: {
        mj: 'Mid catches a safe side wave while Jungle protects the return route; both reconnect before the central fight.',
        mt: 'Mid and Top own different waves that reach useful pressure together; both can reach or trade the next fight.',
        aj: 'ADC farms mid with support while Jungle controls its adjacent entrance; the side wave has another owner.',
        at: 'ADC holds mid with escort as Top’s side wave advances; Top groups if the center cannot safely delay.'
      },
      abort: 'Duo One must cross fog alone, Duo Two cannot cover or rejoin, or the central group advances before the side player returns.',
      fallback: 'Duo One catches the nearer safe wave; Duo Two guards the return route or farms Top. Both ping off an early fight and align the next cycle.',
      convert: 'When an enemy answers Duo One or Duo Two’s side wave, the other calls a Mid turret, warded entrance, or objective setup.',
      drill: 'At 15:00 and 18:00, pause: did Duo One and Duo Two know their lane jobs, or did two allies share Mid while a side wave died?'
    },
    {
      id: 'clock-20-30', label: '20–30', title: 'Push waves before starting Baron',
      read: 'Duo One calls Mid push, side waves, and control spells. Duo Two calls enemy Smite, sweep or Faelight vision, and whether Top joins or pressures side.',
      why: 'Duo One’s pushed wave makes the enemy clear; Duo Two then controls the Baron entrance. Starting before that wave commits both players to a slow, visible fight.',
      mechanic: 'Baron spawns at 20:00 in ranked. The 2026 season increased epic monster durability, so nearby lane priority and a safe entrance matter more than a blind start.',
      art: 'Ornn',
      one: {
        mid: 'Push Mid before moving to your warded river entrance. Save your control spell for enemy entry. If Duo Two is side, match their wave and call whether you can join or must trade.',
        adc: 'Arrive with the Mid wave and an escort. Know whether you are damaging Baron or turning to fight. Jinx and Veigar stay behind the covered entrance.'
      },
      oneByPair: {
        mj: 'Crash Mid before joining Jungle at a warded Baron entrance. Save your key control spell for the enemy approach and call if the return wave will pull you away.',
        mt: 'Crash Mid when Top’s side wave arrives or Top groups at the entrance. Call whether you join the Baron fight or hold Mid while Top draws a defender.'
      },
      two: {
        jungle: 'Before hitting Baron, call “burn” to finish it, “turn” to fight, or “bait” to draw them in. Track enemy Smite. Sweep with frontline cover and stop damage if the enemy can force a 50/50.',
        top: 'Ornn groups to front line or flank with an exit. Garen stays side only if the team can disengage and he can join or take a structure. Call Teleport before Baron starts.'
      },
      sync: {
        mj: 'One: “Mid crashes now; I cover their river ramp.” Two: “Sweep with me. Turn if Jungle enters; finish Baron if they show Bot.”',
        mt: 'One: “My Mid wave is on tower; I can meet you top river.” Two: “I cover the entrance. We draw them in before starting.”',
        aj: 'One: “Mid pushed; support is with me. I hit Baron on your call.” Two: “Enemy Smite is missing. Hold damage and turn if they enter.”',
        at: 'One: “We have Mid push, but cannot fight 4v5.” Two: “I group now. I split again only when you can delay and my Teleport is ready.”'
      },
      go: 'Duo One’s wave reaches a defender, Duo Two has a protected entrance or matched side pressure, and both know how to handle enemy Smite.',
      goByPair: {
        mj: 'Mid crash gives Jungle a covered Baron entrance; both agree to finish Baron or turn on enemy Jungle.',
        mt: 'Mid controls the entrance while Top groups or pins a defender with an equal side wave and usable TP.',
        aj: 'ADC has mid wave and escort; Jungle holds Smite and a defensible entrance before calling burn or turn.',
        at: 'ADC has protected mid pressure; Top joins the Baron fight or draws defenders with a side wave the team can safely delay.'
      },
      abort: 'Duo One cannot hold Mid, Duo Two cannot control the entrance, enemy Smite can enter unseen, or your base is losing a side wave.',
      abortByPair: {
        mj: 'Enemy jungle can enter unseen, Jungle lacks Smite, or Mid has no wave/entrance control.',
        mt: 'Mid loses entrance control and Top cannot group or trade before the enemy finishes Baron.',
        aj: 'ADC has no escort, Jungle lacks Smite, or the pit becomes an exposed 50/50.',
        at: 'ADC cannot survive center without Top and Top has no timely TP or meaningful side trade.'
      },
      fallback: 'Duo One pushes the next safe wave while Duo Two holds the ward line or resets for items. Punish a defender only if both can reach them.',
      convert: 'After Baron, assign Duo One and Duo Two to two waves and protect both buff carriers. One defender should not be able to clear both pushes.',
      drill: 'At first Baron damage, did Duo One’s wave free them and Duo Two’s setup cover the pit? Did both agree to finish or turn?',
      drillByPair: {
        mt: 'At first Baron attack, did Mid have a crash and did Top correctly choose group, TP, or a side trade?',
        at: 'At first Baron attack, was ADC covered and did Top’s group/TP/side assignment actually improve the call?'
      }
    },
    {
      id: 'clock-30-45', label: '30–45', title: 'Match the wave, then count the finish',
      read: 'Duo One calls the live wave, structure damage, and threat to the carry. Duo Two calls enemy count, side pressure, defensive cooldowns, and the route to regroup.',
      why: 'A late isolation death can end the game. Match waves, keep the damage dealer covered, and count the Nexus route before committing to Baron.',
      mechanic: 'From 30:00, 2026 waves spawn every 20 seconds. A long detour can miss multiple waves or expose a tower; short, repeated push-and-connect cycles are safer.',
      art: 'Garen',
      one: {
        mid: 'Clear the wave threatening your tower. Call whether Duo Two groups or pushes a matching side wave. Use a warded route and save control for the first diver.',
        adc: 'State which threat can reach you and require a named escort before crossing into enemy jungle. Hit the closest safe target and reassess towers and death timers immediately after the first takedown.'
      },
      oneByPair: {
        mj: 'Clear Mid, then enter river with Jungle through a warded route. Keep control or escape ready for the first flank. Check the finish before the next wave.',
        mt: 'Clear Mid and tell Top whether your next wave creates a safe group fight or matched side pressure. Save your control for the defender who can interrupt the finish.'
      },
      two: {
        jungle: 'Wait while Duo One catches a wave. Cover their entrance, track enemy Smite, and call the reward after a pick: Nexus, Baron, tower, or reset.',
        top: 'Keep your side wave even with the team’s wave. Ornn starts or covers a fight when Duo One can follow. Garen splits only with vision, a safe exit, and a useful trade or Teleport.'
      },
      sync: {
        mj: 'One: “I clear Mid in five seconds; then I can move.” Two: “I wait at the warded entrance. No Baron until you meet me.”',
        mt: 'One: “I have the next mid wave.” Two: “My side wave reaches their tower at the same time; step forward only then.”',
        aj: 'One: “Assassin Flash up; stay between me and their flank.” Two: “I peel first; after a kill we check Nexus wave before Baron.”',
        at: 'One: “I cannot fight 4v5 while you are side.” Two: “I group this wave. I split next cycle only if you can wait.”'
      },
      go: 'Duo One’s wave and Duo Two’s side pressure or cover arrive together; both have an exit and can take the reward before respawns.',
      goByPair: {
        mj: 'Mid clears then joins Jungle through a warded route; both can take the chosen reward before respawns.',
        mt: 'Mid and Top waves meet enemy structures together, or Top is already grouped for the decisive fight.',
        aj: 'ADC reaches the fight with escort as Jungle protects the entry and calls the next structure or Baron.',
        at: 'ADC is covered at center; Top groups or applies a matched side wave with TP and a safe central delay.'
      },
      abort: 'Duo One has no cover or wave at the target, Duo Two is too far to respond, or a defender returns before the final tower falls.',
      abortByPair: {
        mj: 'Mid or Jungle is picked before the wave arrives; clear and defend instead of entering fog short-handed.',
        mt: 'Top is too far ahead of Mid’s wave or cannot join before a decisive central fight.',
        aj: 'ADC has no escort or the winning wave dies before structures can fall.',
        at: 'ADC cannot survive without Top while split, or Top’s side wave misses the central timing.'
      },
      fallback: 'Duo One clears the safest wave while Duo Two guards its warded entrance. Wait for enemy positions before moving into fog.',
      convert: 'After a pick, Duo One names the live finishing wave; Duo Two counts defenders and covers the route. End if possible, otherwise take Baron or a tower.',
      drill: 'For each post-30 death, identify which partner could not respond and which wave, ward, or cooldown call should have stopped the move.'
    }
  ],

  map: [
    {
      id: 'map-vision', label: 'VISION', title: 'Enter fog in pairs, after the wave',
      read: 'Which of your lanes can move first? Where was the enemy jungler last seen? Name the entrance Duo Two will ward or sweep and the wave Duo One will push to cover it.',
      why: 'Duo One’s pushed wave buys Duo Two time to place vision. The ward then lets both players take the next step or leave together.',
      mechanic: 'Faelight wards reveal an extra region for 45 seconds and gain 25% radius in 2026 ranked. Mid river and side-lane locations create temporary information; the extra region expires.',
      art: 'Xerath',
      one: {
        mid: 'Crash Mid or keep the opponent clearing before joining Jungle in river. If Duo Two is Top, hold Mid push while they ward their side exit. Ward the side where you will actually play.',
        adc: 'Tell support which wave you will crash, then follow the person entering fog. Use a blue trinket from safety if available; never walk alone to ward before an objective.'
      },
      oneByPair: {
        mj: 'Crash Mid and escort Jungle only to the river edge you can defend together. Ward that route, then return before your next wave is lost.',
        mt: 'Hold Mid push while Top wards a side exit; place your own ward toward the same future objective. Do not leave Mid to chase Top through dark jungle.'
      },
      two: {
        jungle: 'Sweep the entrance only when Duo One or another ally can follow. If enemy lanes move first, place defensive wards and wait for your partner’s next crash.',
        top: 'Ward the exit for your planned side wave, including a side Faelight when available. If you plan to Teleport, name a landing that will still be safe when the fight starts.'
      },
      sync: {
        mj: 'One: “Mid crashes; I can walk with you to top river.” Two: “I sweep the entrance. If their Mid moves, we leave together.”',
        mt: 'One: “I hold Mid push so their Mid must clear.” Two: “I ward my top exit, then push only while you can cover river.”',
        aj: 'One: “Bot wave is under them; support and I can escort river.” Two: “Sweep the pit entrance with us, then we choose dragon or reset.”',
        at: 'One: “Support and I control bot river for one wave.” Two: “My TP ward is safe. If they clear it, I trade top instead.”'
      },
      go: 'Duo One has pushed or covered the wave; Duo Two has a safe warding route. Both know what play the vision supports.',
      goByPair: {
        mj: 'Mid crash lets Mid walk with Jungle to one river entrance; both can retreat if enemy mid moves.',
        mt: 'Mid owns top-side first move while Top wards the side exit, or their waves hold defenders on separate fronts.',
        aj: 'ADC crash and support cover let ADC escort Jungle to bot river without losing the return wave.',
        at: 'ADC can ward bot safely with support while Top wards the side exit or names a usable TP landing.'
      },
      abort: 'Duo One loses the wave, Duo Two has no cover at the entrance, or two unseen enemies can collapse before the ward is placed.',
      abortByPair: {
        mj: 'Mid loses first move or two enemies can collapse before Jungle’s sweep ends.',
        mt: 'Mid cannot hold the approach and Top’s side exit is dark; do not both enter fog.',
        aj: 'ADC lacks support escort or bot wave is coming in; Jungle takes defensive vision instead.',
        at: 'ADC’s bot entry is unsafe or Top’s TP ward is gone; protect separate exits.'
      },
      fallback: 'Duo Two wards the safe side of the map while Duo One catches the wave. Call the next crash that will reopen the entrance.',
      convert: 'When the ward reveals an opening, both call the reward: a pick, safe camp, tower, or objective. Recheck the route if the ward expires.',
      drill: 'At each vision death, check Duo One’s wave and Duo Two’s entry. Could they cover each other, and what play was the ward meant to enable?'
    },
    {
      id: 'map-objective', label: 'EPIC OBJECTIVE', title: 'Crash, enter, turn or burn',
      read: 'Can Duo One leave a crashed wave? Can Duo Two enter with Smite or safe Teleport? If one cannot join, name the opposite-side reward before committing.',
      readByPair: {
        mj: 'Is Mid crashed as Jungle reaches the pit? Check enemy Smite, your 2v2, and which river entrance you can defend.',
        mt: 'Can Mid contest with the team while Top joins by safe Teleport? If Top stays side, can Mid delay without dying?',
        aj: 'Can ADC and support leave a crashed bot or mid wave as Jungle enters with Smite? Check enemy mid and jungle first move.',
        at: 'Can ADC contest locally with support, and is Top’s TP landing safe and timely? If not, what top structure is the trade?'
      },
      why: 'Duo One creates the lane window; Duo Two secures or trades the objective. Both agree whether to finish it, turn to fight, or leave.',
      mechanic: '2026 epic monsters gained durability, making the time spent inside the pit more punishable. Smite does not replace lane priority or a protected entrance.',
      art: 'Rammus',
      one: {
        mid: 'Push the nearby wave and announce when you can enter controlled river or support Duo Two’s opposite-side trade. Hold Vex fear, Ekko stun setup, or Xerath stun for an entrance or diver.',
        adc: 'Crash Bot or Mid with support, then enter behind your frontline. Tell Duo Two whether you can hit the monster or must hold damage for a fight. Never abandon a large wave under your tower for a speculative start.'
      },
      oneByPair: {
        mj: 'Crash Mid, then enter the controlled river as Jungle arrives. Hold your key spell for the enemy entrance and call “no move” if Mid is pinned.',
        mt: 'Crash Mid so the enemy mid must clear while Top groups by safe TP or threatens an opposite structure. Tell Top whether you can contest or only trade.',
        at: 'Crash bot or mid with support before entering the objective area. Ask Top for safe TP timing or a clear side trade; do not abandon a large incoming wave.'
      },
      two: {
        jungle: 'Before first damage, call “burn” to finish, “turn” to fight entrants, or “trade” elsewhere; say whether Smite is ready. If Duo One is pinned, stop the start and take a safer reward.',
        top: 'Set the opposite side wave and call Teleport status and landing safety. Group early if Duo One cannot hold a 4v5; otherwise make the enemy pay a tower for the monster.'
      },
      sync: {
        mj: 'One: “Mid crashes in eight seconds; I can cover their river ramp.” Two: “I wait for you, then sweep. We turn if their Jungle enters.”',
        mt: 'One: “Mid first move; I can enter river.” Two: “Top wave is under their tower, TP ready; I join when they commit, or take tower if two chase me.”',
        aj: 'One: “Bot crash now, support with me; I can hit dragon.” Two: “Enemy Smite top; burn after our ward lands, then reset.”',
        at: 'One: “Bot is pushed, but their Mid reaches river first.” Two: “I cannot Teleport safely. I take Top tower; you protect the Bot exit.”'
      },
      go: 'Duo One has a movable wave; Duo Two has a covered entrance, Smite or Teleport if needed; both agree to contest or trade.',
      goByPair: {
        mj: 'Mid can move first and Jungle has Smite, health, and a protected entrance; both agree turn or burn.',
        mt: 'Mid contests when Top joins by safe TP; otherwise Mid delays safely while Top converts a side structure.',
        aj: 'ADC and support can leave the crashed wave while Jungle has Smite and a covered bot entrance.',
        at: 'ADC contests when Top joins by safe TP; otherwise ADC delays with the team as Top takes an opposite tower.'
      },
      abort: 'Duo One is pinned, Duo Two cannot enter safely, enemy Smite can force a coin flip, or the monster will not die before a collapse.',
      abortByPair: {
        mj: 'Mid cannot move, enemy Jungle enters unseen, or allied Smite is unavailable.',
        mt: 'Mid loses nearby priority and Top cannot TP or force an equal opposite-side trade.',
        aj: 'ADC/support are pinned, Jungle lacks Smite, or bot-side vision cannot cover the entry.',
        at: 'ADC/support cannot contest and Top has neither timely TP nor a safe structure trade.'
      },
      fallback: 'Duo One catches the threatened wave while Duo Two takes a safe camp, tower, or vision for the next spawn. Call the next time both can move.',
      fallbackByPair: {
        mj: 'Mid catches the wave while Jungle takes a safe camp or wards the next entrance; reconnect on the next crash.',
        mt: 'Mid holds the nearby wave as Top takes the safe opposite structure or groups early for the next spawn.',
        aj: 'ADC catches the bot wave while Jungle trades a safe camp or opposite objective; reset together later.',
        at: 'ADC protects local farm while Top converts their own wave into a safe tower hit or starts moving for the next spawn.'
      },
      convert: 'After securing it, Duo Two calls the exit and Duo One calls the nearest live wave or reset. Leave together before the enemy can punish low health.',
      drill: 'At first damage on each lost objective, mark Duo One’s wave, Duo Two’s entry, and whether you had agreed to finish, fight, or trade.'
    },
    {
      id: 'map-tower', label: 'TOWER', title: 'Use the minion wave as your third player',
      read: 'Can Duo One bring a live wave to the tower? Can Duo Two cover the enemy approach or force a second response? Count missing enemies and defender return time.',
      why: 'Duo One damages the tower while Duo Two covers the collapse or pressures elsewhere. The pair leaves when the wave or cover runs out.',
      mechanic: '2026 lane turrets keep segmented plate rewards, and Crystalline Overgrowth adds damage to the next champion hit after charging. First turret destroyed also brings an extra reward.',
      art: 'Jinx',
      one: {
        mid: 'Crash a full wave before approaching the turret. While the defender clears, choose a hit, ward, or reset with Duo Two. If enemy Jungle is missing, do not stand in gank range.',
        adc: 'Hit while a wave tanks and support or Duo Two covers the approach. Call your exit before the last minion dies; keep your farm and shutdown safe.'
      },
      two: {
        jungle: 'Cover the actual enemy approach and tell Duo One how long you can stay. After a kill, help crash only when your laner asks; do not take the carry’s farm.',
        top: 'Build a wave before hitting your tower and name who can answer you. Ornn can take a safe hit then group; Garen can hold a defender while Duo One’s wave also advances.'
      },
      sync: {
        mj: 'One: “Mid wave reaches tower; one safe hit, then back.” Two: “I cover their raptor entrance; leave when I ping missing.”',
        mt: 'One: “My mid wave hits now.” Two: “Top wave hits with it; force two answers, then retreat to our ward line.”',
        aj: 'One: “Help crash this wave, then let me take plate with support.” Two: “I cover tri-brush for one wave; leave on my danger ping.”',
        at: 'One: “Bot tower needs one more safe wave.” Two: “Their Jungle shows Top. Take your plate, then recall before they disappear.”'
      },
      go: 'Duo One has minions tanking the tower; Duo Two covers the collapse route or pins a defender elsewhere; both have an exit.',
      goByPair: {
        mj: 'Mid wave tanks tower while Jungle covers the gank path; Mid leaves when the last safe hit is spent.',
        mt: 'Mid and Top waves reach their towers together, forcing separate defenders with known retreat paths.',
        aj: 'ADC wave and support reach bot tower while Jungle covers the actual collapse path for one wave.',
        at: 'Top pressure reveals the enemy response as ADC and support take a covered bot hit; both can exit.'
      },
      abort: 'Duo One’s last minion dies, Duo Two loses collapse vision, or a missing enemy can arrive before the next hit.',
      abortByPair: {
        mj: 'Mid’s last minion dies or Jungle loses sight of the collapse route.',
        mt: 'One wave dies before the other reaches tower or either player loses a safe exit.',
        aj: 'Bot’s last minion dies, support leaves, or Jungle loses collapse cover.',
        at: 'ADC has no support cover or Top cannot identify which enemy is leaving their lane.'
      },
      fallback: 'Duo One uses the crash to reset or ward; Duo Two keeps the exit clear. Leave turret range before the wave dies.',
      convert: 'After first tower, assign both players’ next lanes. Enter the opened jungle only when Duo One pushes and Duo Two can cover.',
      drill: 'At every turret death, freeze the replay as the last minion dies. Was Duo One still hitting while Duo Two had lost cover?'
    },
    {
      id: 'map-side', label: 'SIDE LANE', title: 'Pressure two places at once',
      read: 'Which of you owns the side wave, and who protects Mid? Will both waves reach enemy structures together? Name the side player’s exit and whether the central group can wait.',
      why: 'The side player pushes when the other can threaten Mid or an objective. Matched waves force the enemy to answer two losses at once.',
      mechanic: 'Side pressure works when another lane or objective is threatened at the same time. Post-14 and post-30 faster waves shorten the time to catch and reconnect.',
      art: 'Garen',
      one: {
        mid: 'Catch one side wave, push only to the line your vision and Duo Two can protect, then return before the central fight. Ekko can go farther with an exit; Vex and Xerath need shorter trips into fog.',
        adc: 'Hold the safer Mid wave with support or frontline. Advance when Duo Two’s side wave draws a response. If your group cannot disengage 4v5, tell Duo Two before they push deep.'
      },
      two: {
        jungle: 'Track who answers the side wave, whether Duo One or another ally pushes it. Protect Mid until Duo One can join you; only then enter the space a defender vacates.',
        top: 'Build your side wave to meet Duo One’s Mid push. Call how many enemies answer, whether Teleport is ready, and whether you can exit alone.'
      },
      twoByPair: {
        mj: 'Track who answers Duo One’s side wave and hold the center until Mid returns. Enter the vacated river path only after Mid can follow.',
        aj: 'Track who answers your team’s side wave while ADC farms Mid with support. Cover ADC’s route before entering the river space it opens.'
      },
      sync: {
        mj: 'One: “I push bot one wave; back to mid in ten.” Two: “I hold the center and do not engage until you return.”',
        mt: 'One: “My Mid wave hits tower in 12 seconds.” Two: “My Top wave hits with it. We pressure both, then leave if two disappear.”',
        aj: 'One: “Mid is pushed; support is with me.” Two: “Their side defender moved. I ward river first; stay behind support.”',
        at: 'One: “I can safely hold mid, no hard engage from our team.” Two: “I push bot to tower, TP ready; if their mid vanishes I back off.”'
      },
      go: 'The side and Mid waves hit together. The side player has an exit, and the other can keep the central group from forcing a 4v5.',
      goByPair: {
        mj: 'Mid’s side wave pressures as Jungle holds center until Mid reconnects; no fight begins during the gap.',
        mt: 'Mid and Top push different waves to the same depth; each has an exit or a way to join the next fight.',
        aj: 'ADC stays mid with support while Jungle uses an ally’s side wave to enter river; ADC never solos the deep side.',
        at: 'ADC and support hold the central wave; Top’s side wave reaches tower with vision and TP or a safe retreat.'
      },
      abort: 'Mid wave is at your tower, two enemies disappear toward the side player, or the central group cannot survive without them.',
      abortByPair: {
        mj: 'Jungle’s center cannot delay a fight before Mid returns, or two enemies vanish toward Mid.',
        mt: 'Mid and Top waves are out of phase or both retreat paths are dark.',
        aj: 'ADC is exposed mid while the team’s side player advances; Jungle protects ADC instead.',
        at: 'ADC’s group cannot delay 4v5, Top has no exit/TP, or two enemies disappear toward Top.'
      },
      fallback: 'The side player farms at a safe line while the other holds Mid. Group before the next fight, then try again on matched waves.',
      convert: 'When one enemy answers side, the Mid player calls a tower, warded entrance, or objective. If two chase side, the side player exits while Mid advances.',
      drill: 'At each side-lane death, compare both waves. Did one partner push a full wave ahead, leaving the other unable to threaten Mid?'
    },
    {
      id: 'map-finish', label: 'INHIBITORS → NEXUS', title: 'Count the finish before taking another camp',
      read: 'Which wave can enter base, which towers remain, and when do defenders respawn? Decide who damages structures and who blocks the surviving defenders.',
      why: 'Both must make the finish call before one player turns toward a camp or monster. A won fight can become the Nexus if the wave and death timers allow it.',
      mechanic: 'Inhibitors spawn super minions while down; Nexus turrets respawn with reduced health under the 2026 rules. Minion waves and death timers still determine whether a direct finish is possible.',
      art: 'Ornn',
      one: {
        mid: 'Clear the last enemy wave threatening your base or escort your winning wave in. Tell Duo Two which defender you can stop while the structure hitter works.',
        adc: 'Call your health, damage, and exact tower or Nexus target. Hit it behind frontline cover while Duo Two either joins you or holds a defender on side.'
      },
      oneByPair: {
        aj: 'Name the exact tower, inhibitor, or Nexus you can hit and your remaining health. Stay behind frontline while Jungle protects the flank and exit.',
        at: 'Name the exact structure your current wave can reach. Ask Top to join the finish if it is open; keep hitting only if Top’s side pressure actually pins a defender.'
      },
      two: {
        jungle: 'Count living defenders and cover Duo One or the structure hitter. Call the exit if the wave dies; do not leave a live finishing wave for a camp.',
        top: 'Block defenders while staying healthy enough to finish with Duo One. If side, match your wave to the central wave and Teleport only to a safe, timely landing.'
      },
      sync: {
        mj: 'One: “Mid wave enters base. I save control for respawns.” Two: “I cover the flank. Tower, inhibitor, then Nexus if we beat their timers.”',
        mt: 'One: “Their mid inhibitor is open, my wave enters now.” Two: “My side wave reaches their tower with it; we collapse only after they split.”',
        aj: 'One: “I have damage for Nexus if you screen two respawns.” Two: “I peel; ignore the chase and hit the structure.”',
        at: 'One: “Mid wave is in base, I can hit.” Two: “I join you now; no extra side wave when the Nexus is open.”'
      },
      go: 'Duo One has a live finishing wave, Duo Two can cover or join its route, and you can destroy the remaining structures before respawns.',
      goByPair: {
        mj: 'Mid and Jungle escort one live wave into base, with control and cover for respawning defenders.',
        mt: 'Mid’s wave can end with Top already grouped, or Top’s matched side wave pins the last defender.',
        aj: 'ADC can damage the remaining structures behind Jungle and frontline cover before respawns.',
        at: 'ADC has a live finishing wave and Top joins in time; a separate side push continues only if it pins a defender.'
      },
      abort: 'Duo One’s wave dies, the structure hitter is too low, or Duo Two cannot block defenders before they return.',
      abortByPair: {
        mj: 'Mid wave dies or the pair cannot cover remaining defenders before respawn.',
        mt: 'Mid and Top waves miss each other or Top cannot arrive before defenders respawn.',
        aj: 'ADC is too low to hit or the frontline cannot screen the last defender.',
        at: 'ADC’s finishing wave dies or Top cannot join or pin the remaining defender in time.'
      },
      fallback: 'Take the safe structure, then both leave by the known exit. Reset and build matching waves instead of dying inside the enemy base.',
      convert: 'If the Nexus opens, both commit to ending. If it does not, call the next two-wave push before the enemy gets a free reset.',
      drill: 'After each won fight past 20 minutes, pause before either player moves. Could Duo One’s wave and Duo Two’s cover reach Nexus before respawns?'
    }
  ],

  recovery: [
    {
      id: 'recovery-no-prio', label: 'NO PRIORITY', title: 'Say “cannot move” early enough to reroute',
      read: 'Which partner is pinned under tower? Call the wave they must catch, the earliest safe move, and where the free partner can go instead.',
      readByPair: {
        mj: 'Mid is pinned: when can Mid clear, and can Jungle wait or reroute before crossing river?',
        mt: 'Is Mid or Top pinned? Can the free lane gain a tower or wave without forcing the pinned partner to arrive late?',
        aj: 'ADC is catching Bot: can support move, and will Jungle delay dragon until ADC clears the wave?',
        at: 'ADC cannot leave bot: can Top trade a top wave or use a real TP window without promising an impossible walk?'
      },
      why: 'The pinned player saves the pair by calling “cannot move” before the free partner enters river or starts a monster.',
      mechanic: 'The pushing lane can usually move first. Health, cooldowns, and enemy positions can override that apparent priority; wave location alone is not permission to fight.',
      art: 'Rammus',
      one: {
        mid: 'Call “no Mid move until this wave is cleared.” Ping the enemy Mid path if they leave first; tell Duo Two your earliest safe arrival before following.',
        adc: 'Tell Duo Two how much Bot farm you would lose to leave now and whether support can move. Clear the wave or ask for cover before joining dragon.'
      },
      two: {
        jungle: 'Cancel the invade or monster start when Duo One cannot move. Cover their wave, take a safe camp, or route away; return on the next lane window.',
        top: 'Call whether you are catching Top or can Teleport after the wave. If Duo One is pinned, pressure your own lane without asking them to rotate late.'
      },
      sync: {
        mj: 'One: “I cannot leave Mid for eight seconds; wave at my tower.” Two: “I give river and clear my near camp. Call your crash.”',
        mt: 'One: “Mid under tower; no top-side roam.” Two: “I hold top and do not start the dive until you actually have mid first move.”',
        aj: 'One: “Bot wave at my turret, support low; no dragon.” Two: “I cancel the start and cover your clear, then we reset.”',
        at: 'One: “I cannot leave Bot; their support reaches river first.” Two: “I keep Top pressure and save Teleport. We trade instead of arriving late.”'
      },
      go: 'The pinned partner has cleared the wave and can join, or both agreed that the free partner takes a safe reward elsewhere.',
      goByPair: {
        mj: 'Mid clears the pinned wave, then calls the first safe river step; Jungle waits or reroutes until then.',
        mt: 'Mid and Top repair their separate waves before an upper-river move, or one takes a cross-map structure.',
        aj: 'ADC clears bot with support before dragon; Jungle cancels a start that requires ADC to abandon the wave.',
        at: 'ADC clears bot while Top preserves top pressure; a TP contest needs a safe landing and bot first move.'
      },
      abort: 'One partner must drop a stacked wave or enter unseen enemies to reach the other. The free partner cancels the contest.',
      abortByPair: {
        mj: 'Jungle would cross river before Mid can clear, or Mid must sacrifice a stacked wave.',
        mt: 'Mid or Top must abandon a stacked wave to reach the other; trade pressure instead.',
        aj: 'Jungle needs ADC to leave a stacked bot wave or support cannot leave lane.',
        at: 'Top cannot reach bot in time and ADC lacks local priority; do not treat a distant TP as guaranteed.'
      },
      fallback: 'The pinned partner takes the wave; the free partner takes a safe camp, ward, or lane trade. Name the next wave that may let you meet.',
      convert: 'If the enemy leaves first, the pinned partner pushes the tower-facing wave while the free partner takes a safe opposite-side reward.',
      drill: 'Review fights started while either player could not move. Did the pinned partner call early enough for the other to reroute?'
    },
    {
      id: 'recovery-behind', label: 'BEHIND', title: 'Shrink the loss, then reopen one side',
      read: 'Which wave can Duo One farm safely? Which entrance can Duo Two cover? Check exposed towers, shutdowns, and whether a lost monster can be traded for gold or XP.',
      why: 'Both players need income and one protected path back into the map. Separate comeback attempts through fog give the enemy two easy picks.',
      mechanic: 'Before completion, 2026 role quests reward assigned-lane presence; permanent plates give incremental structure value. A defended wave and safe plate can keep a losing pair relevant.',
      art: 'Vex',
      one: {
        mid: 'Clear Mid from safety so the enemy cannot take the wave and river for free. Save control for a dive. Tell Duo Two your route before catching an unguarded side wave.',
        adc: 'Tell Duo Two which safe wave you need for your next item. Farm behind vision and support; do not step past frontline for one extra minion.'
      },
      two: {
        jungle: 'Cover Duo One’s farming route. If an epic monster is unwinnable, trade it for safe camps or a tower. Do not enter your dark jungle alone for a desperate steal.',
        top: 'Ornn keeps health for the next defense; Garen pushes only to a safe line and leaves before a collapse. Tell Duo One whether Teleport can join the next tower defense.'
      },
      sync: {
        mj: 'One: “I clear mid then can cover our blue entrance.” Two: “I sweep only with you; give dragon and keep our camps.”',
        mt: 'One: “I hold mid, no river contest.” Two: “I catch top and TP to defend only if they dive our tower.”',
        aj: 'One: “I need two safe Mid waves for my item.” Two: “I cover your Mid entrance. We do not chase support into fog.”',
        at: 'One: “I farm mid with support; no 4v5.” Two: “I group for the tower defense; I split only when you can safely delay.”'
      },
      go: 'Duo One can farm with Duo Two covering the route, or both can defend a tower with a clear exit and enemy numbers known.',
      goByPair: {
        mj: 'Mid can clear safely while Jungle covers the same quadrant, then both punish an enemy overstep.',
        mt: 'Mid holds the center as Top collects a safe side wave or groups for a defended tower fight.',
        aj: 'ADC farms with support while Jungle protects the entrance; they fight only an enemy overstep.',
        at: 'ADC catches protected mid waves as Top groups for defense or pressures a side wave the enemy must answer.'
      },
      abort: 'The only path goes through enemy fog or Duo One must lead the entry without Duo Two or frontline cover.',
      fallback: 'Give the low-value contest. Duo One catches the next safe wave while Duo Two guards the nearby entrance; reset when the item is ready.',
      convert: 'After a pick or tower defense, Duo One pushes one lane and Duo Two wards its new edge. Then take the camp, plate, or objective that becomes safe.',
      drill: 'After falling behind, review the first two fights. Could Duo One have reached the next item from safe waves while Duo Two covered the route?'
    },
    {
      id: 'recovery-failed', label: 'FAILED PLAY', title: 'End the failed play before it becomes three deaths',
      read: 'What did the failed play gain: a burned spell, ward, or drawn defender? Which wave must Duo One fix, and where can Duo Two exit or cover?',
      why: 'The pair can use that information later. First, both repair their waves and route so a failed play does not become a second death.',
      mechanic: 'A burned Flash can create a future angle, but it does not repay a lost wave by itself. The next move still requires wave and route alignment.',
      art: 'Ekko',
      one: {
        mid: 'Call the enemy spell you burned and your next wave. Clear or crash before a repeat; if your escape is down, tell Duo Two you cannot cover river yet.',
        adc: 'Call whether Bot wave will freeze against you. Ask Duo Two for a controlled crash if needed, then leave with support; do not chase under tower to rescue a missed gank.'
      },
      two: {
        jungle: 'Leave by the safe exit, then take a camp or cover Duo One’s requested wave fix. Recheck enemy Jungle and return on the next lane window rather than hovering in vision.',
        top: 'Call the spent Teleport or ultimate, then repair your side wave. If a cross-map play failed, match Duo One’s next push before going deeper side.'
      },
      sync: {
        mj: 'One: “Their Flash is down, but my control is down too. Wave comes to me.” Two: “We exit. I take one camp and return on your next crash.”',
        mt: 'One: “Roam failed, I lost mid push.” Two: “I stop the top dive and hold my wave; we retry after both crashes.”',
        aj: 'One: “No kill, enemy Heal down; I need this wave crashed.” Two: “I help only this wave, then reset with you.”',
        at: 'One: “Dragon fight lost; I must clear Mid.” Two: “I stop pushing side and cover the retreat. My Teleport is down next cycle.”'
      },
      go: 'Duo One has repaired the wave, Duo Two has a new route, both have needed spells, and the enemy location is known.',
      goByPair: {
        mj: 'Mid control and wave are reset; Jungle’s next route is efficient and enemy jungle location is known.',
        mt: 'Mid and Top waves can be synchronized again; a second top play has vision and required cooldowns.',
        aj: 'ADC has repaired bot wave and support can join; Jungle approaches on a fresh route, not a visible hover.',
        at: 'ADC bot and Top side waves are reset; the next play is a timed trade or safe TP, not a revenge fight.'
      },
      abort: 'Duo One has no wave window, Duo Two is still visible on the failed route, or the enemy now has more health and first move.',
      fallback: 'Both leave. Duo One takes the safe wave; Duo Two takes a camp or covers the crash. Reset and call a new timing.',
      convert: 'Remember the burned summoner and cleared ward. Use that information when your next waves and routes align; do not force an immediate repeat.',
      drill: 'Review the minute after each failed play. Did both exit and recover income, or did one chase and give up another death or wave?'
    },
    {
      id: 'recovery-one-pick', label: 'LATE PICK / FINISH', title: 'One pick: defend, end, or reset—call it now',
      read: 'Who died, which wave is nearest a base, and what damage remains? Duo One calls the wave and structure; Duo Two calls defenders and the exit or objective.',
      why: 'A pick might open Nexus, Baron, a tower, or only a reset. Both players choose one reward before either walks away from the wave.',
      mechanic: 'Late death timers are long, while post-30 waves spawn every 20 seconds. A missed wave can invalidate an otherwise correct finishing call.',
      art: 'Ornn',
      one: {
        mid: 'If an ally died, clear the wave threatening your tower. If an enemy died, call your live finishing wave and tell Duo Two whether to join you or pin a defender elsewhere.',
        adc: 'If alive, call your health, damage, and safe structure target. If dead, tell Duo Two which enemy spells were spent so they can defend waves instead of forcing a steal.'
      },
      oneByPair: {
        mj: 'If an ally is picked, clear the threatening Mid wave and keep Jungle from a short-handed Baron. If an enemy falls, call the live finish wave and hold control for remaining defenders.',
        mt: 'If an ally is picked, clear Mid while Top groups for defense. If an enemy falls, call the finishing wave and whether Top must join or can pin the last defender.'
      },
      two: {
        jungle: 'Count living defenders and both Smite spells. Cover Duo One’s route, then call one reward: Nexus, Baron, tower, or reset. If Duo One died, defend the wave instead of starting short-handed.',
        top: 'Join Duo One’s finishing wave if it can end. Stay side only if your wave hits a structure in the same window. If Duo One died, front the wave defense without giving the enemy a second pick.'
      },
      sync: {
        mj: 'One: “Enemy Jungler is dead for 40 seconds; Mid wave enters base.” Two: “Nexus first. I cover defenders; Baron only if the wave dies.”',
        mt: 'One: “Our carry died; I clear mid from range.” Two: “I group for wave defense, no solo TP flank into five.”',
        aj: 'One: “I can hit inhibitor tower now if you screen assassin.” Two: “I peel the flank; we leave together when the wave dies.”',
        at: 'One: “Enemy carry dead, my wave at Nexus turret.” Two: “I leave side and join the finish; no extra top tower.”'
      },
      go: 'Duo One has a live wave and enough damage; Duo Two can cover the route or pin a defender until the structure falls.',
      goByPair: {
        mj: 'Mid wave enters base while Jungle screens the remaining defenders; both can finish before respawn.',
        mt: 'Mid and Top have a finishing wave or matched base pressure; Top groups if the Nexus route is open.',
        aj: 'ADC can hit the final structure with frontline and Jungle cover before defenders return.',
        at: 'ADC has safe structure damage while Top either joins the finish or holds a defender on a matching side wave.'
      },
      abort: 'Duo One’s wave dies, Duo Two cannot cover a returning defender, or the damage dealer cannot reach the final structure safely.',
      abortByPair: {
        mj: 'Mid wave dies or Mid and Jungle cannot hold the remaining defender long enough to finish.',
        mt: 'Top is still side when Mid’s base wave dies, or either lane lacks damage before respawn.',
        aj: 'ADC cannot enter safely or the wave dies before Jungle can protect the final hit.',
        at: 'ADC’s wave dies or Top cannot group or hold a defender before respawn.'
      },
      fallback: 'Both take the reachable tower or safe objective, then reset without giving up shutdowns. Set the next matched wave before splitting.',
      convert: 'When Nexus is open, both commit. Otherwise choose one reward together: the nearest safe structure or Baron. Regroup on the next wave.',
      drill: 'At every post-30 pick, pause before either player moves. What was the highest safe reward your wave, cover, and respawn timer allowed?'
    }
  ]
};
