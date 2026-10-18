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
      read: 'At loading screen, identify both mid–jungle 2v2s, bot support engage, top matchup, and the likely first clear side. Recheck enemy start from actual vision; a late arrival is only a clue.',
      why: 'The first advantage is knowing whether your partner can actually arrive on the wave you intend to use.',
      mechanic: '2026 ranked minions spawn at 0:30, buff camps at 0:55, and Scuttle at 2:55. The first cannon is wave three; lane quests reward time and farm in the assigned lane.',
      art: 'MonkeyKing',
      one: {
        mid: 'Tell Duo Two whether the first waves will push out, come in, or stay near center. Preserve enough health and your key control spell for the side where their first route ends.',
        adc: 'Tell Duo Two whether bot can contest the first push and whether your support can trade or engage. Keep the opening wave safe for farm and quest progress; do not manufacture a bot fight to fit a jungle route.'
      },
      two: {
        jungle: 'Announce your start camp, clear direction, and earliest realistic arrival before minions meet. Update the route if a lane loses health or wave control; do not treat first Scuttle as mandatory.',
        top: 'Announce whether your lane can push, hold, or only collect XP for the first three waves. Flag the enemy top Teleport and your own planned reset or top-side move before the wave commits.'
      },
      sync: {
        mj: 'One: “Mid wave three crashes in eight; fear ready.” Two: “I finish raptors into top river; we move only after the crash.”',
        mt: 'One: “I can push mid toward top river after this wave.” Two: “My third wave is coming in; no top-side contest until I catch it.”',
        aj: 'One: “Bot wave comes to us; support engage ready.” Two: “I finish bot side in twenty; hold it outside tower if safe.”',
        at: 'One: “Bot has first push, enemy jungle unknown.” Two: “Top cannot move; I will call if their jungle shows here so you can spend the bot window.”'
      },
      go: 'Both can arrive with health, cooldowns, and a wave that will not cost the lane more than the play can earn.',
      abort: 'One player says “no move,” the enemy has a clearer first move, or enemy jungle information contradicts the opening read.',
      fallback: 'Take the safe wave and camp, place a defensive ward on the threatened side, and name the next meeting wave.',
      convert: 'After a successful gank, agree on the crash before touching the wave; then choose one plate, ward, camp, or reset that fits the respawn window.',
      drill: 'Replay the first three waves: did both players know the route, wave direction, and first possible move before the river fight?'
    },
    {
      id: 'clock-3-8', label: '03–08', title: 'Fund the first move with a real crash',
      read: 'Before a gank, invade, or first epic monster, check the actual wave, both health bars, key CC, opposing jungle location, and whether the non-duo teammate can join.',
      why: 'Lane priority is useful only when the laner can leave alive and arrive before the opponent. A ping cannot erase a stacked wave at tower.',
      mechanic: 'A gank has more lane length when the opponent is near center or your side. If your lane is pushed under enemy tower, convert the crash into vision or a reset unless a dive has a proven numbers and health advantage.',
      art: 'Vex',
      one: {
        mid: 'If Duo Two wants a gank, trim and hold the wave near your side without losing health. If they want river or an invade, build a push and call when it actually reaches the enemy tower.',
        adc: 'Call support position and whether bot wave is holding, stacking, or crashing. Preserve your escape spell while the enemy jungle is missing; after a kill, explicitly ask for help crashing if the wave would freeze against you.'
      },
      two: {
        jungle: 'Finish the camp toward the called lane window, not toward a theoretical fight. If nearby lanes are pinned, change route, cover a crash, or trade the opposite side instead of entering river alone.',
        top: 'Hold a gankable wave when the jungler approaches, or stack then crash before leaving for upper river. Tell Duo One whether you can move now, after a wave, or only with Teleport.'
      },
      sync: {
        mj: 'One: “Two waves stacking; crash in twelve.” Two: “I cover the crash, then we enter river together.”',
        mt: 'One: “Mid clears now; I lean top side.” Two: “Top crash is one wave later; wait for me before we force their jungle.”',
        aj: 'One: “Wave held near us, support has hook.” Two: “I am one camp away; do not change your lane posture early.”',
        at: 'One: “Bot crash gives me a short river window.” Two: “I can move from top after my cannon, otherwise take bot vision and reset.”'
      },
      go: 'The pair names the same destination and arrival wave, and the enemy cannot rotate first for free.',
      abort: 'Enemy support or jungler is missing on the entry path, support cannot join bot, or the planned wave is stuck under your own tower.',
      fallback: 'Use the safer crash for a recall or ward and wait for the next camp/wave alignment; conceding one river camp is better than losing lane XP and dying.',
      convert: 'A burned Flash becomes a timed repeat only if the next route is efficient; a kill becomes a crash first, then a nearby objective or plate.',
      drill: 'Log each early river entry: could both players move when the entry began, and what minions or camps were paid for it?'
    },
    {
      id: 'clock-8-15', label: '08–15', title: 'Turn a lead into a structure, not another chase',
      read: 'After a pick, count enemy return time, your health and mana, the next wave, nearby turret health, objective status, and each role quest’s progress.',
      why: 'This is the window where a 15-minute finish becomes possible, but only if the pair spends each advantage before defenders return.',
      mechanic: 'In 2026, plates remain on lane turrets and the first destroyed turret grants extra gold. A short safe push can have value even if the whole tower cannot fall.',
      art: 'Jinx',
      one: {
        mid: 'Crash immediately after forcing enemy mid out, then move on the side Duo Two can cover. With Vex or Ekko, use the exit window for a two-player pick; with Xerath, chip the reachable turret from vision rather than chasing into fog.',
        adc: 'After a bot win, state whether your wave needs help to crash and whether support can escort forward. Take reachable plate damage only while the enemy jungle and mid response are accounted for; preserve your bot quest farm.'
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
      abort: 'The wave is gone, the enemy returns before the structure falls, or a second enemy moves through unwarded space.',
      fallback: 'Bank the earned gold with a synchronized reset and protect the next incoming wave; do not extend a won play into a delayed death.',
      convert: 'After first tower, call the next lane assignment before walking out of base so the ADC, mid, and top do not share one wave.',
      drill: 'For every pre-15 kill, record whether it became a crash, plate, tower, safe camp, objective, or only a chase.'
    },
    {
      id: 'clock-15-20', label: '15–20', title: 'Assign lanes; make the next move together',
      read: 'Identify which outer turrets fell, where the next two waves will meet, who can safely hold mid, and which side of the map the next objective occupies.',
      why: 'Unassigned lanes create the mid-game ARAM: two players share one wave while a side wave dies and the next fight starts without them.',
      mechanic: 'From 14:00, waves spawn every 25 seconds in 2026 ranked. The shorter cycle makes a side catch followed by a timely return more important than a long aimless roam.',
      art: 'Ekko',
      one: {
        mid: 'If your ADC and support take mid, collect the nearest safe side wave and say when you will return. Push only as far as Duo Two can cover; Vex or Xerath should not disappear deep into a dark side lane.',
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
      go: 'The two relevant waves are caught and pushed, exits are warded, and both know who is protecting the ADC.',
      abort: 'A carry must walk alone into darkness, the side pusher has no escape/Teleport, or the central team is already too far forward.',
      fallback: 'Catch the nearer wave under safer vision, ping the team back from a premature fight, and reconnect on the next 25-second cycle.',
      convert: 'Use the forced defender as a numbers window for a mid turret, controlled jungle entrance, or neutral setup rather than another shared mid wave.',
      drill: 'At 15:00 and 18:00 pause the replay: who owned each lane, and was one wave lost while two allies shared another?'
    },
    {
      id: 'clock-20-30', label: '20–30', title: 'Make Baron a consequence of pressure',
      read: 'Check the mid and opposite side waves, enemy jungler/Smite, major ultimates, sweep and Faelight availability, and who can turn on an entering enemy.',
      why: 'A rushed Baron is a long, visible commitment. Two synced players can force the opponent to answer a wave first and enter the river second.',
      mechanic: 'Baron spawns at 20:00 in ranked. The 2026 season increased epic monster durability, so nearby lane priority and a safe entrance matter more than a blind start.',
      art: 'Ornn',
      one: {
        mid: 'Push mid before joining Duo Two’s vision line; save the spell that denies the river entrance. If your lane cannot move, call it early so the pair can threaten a pick or tower instead of starting Baron.',
        adc: 'Arrive with the mid wave, an escort, and a clear damage or turn assignment. Jinx and Veigar should stand behind the controlled entrance, not walk first into the pit or jungle.'
      },
      two: {
        jungle: 'Track enemy Smite and choose “burn,” “turn,” or “bait” before hitting Baron. Sweep with your partner at the edge you can defend; stop damaging the monster when the enemy entry threatens a losing 50/50.',
        top: 'Ornn groups as a visible front line or flank with an exit; Garen pushes the opposite side only if the team can disengage and he can arrive or gain a structure. Call Teleport status before the first Baron step.'
      },
      sync: {
        mj: 'One: “Mid crashes now; fear covers their river ramp.” Two: “Sweep with me; we turn if jungler walks in, burn only if they show bot.”',
        mt: 'One: “Mid wave on their tower; I can meet top river.” Two: “I am grouped with R ready; take position before Baron, not after contact.”',
        aj: 'One: “Mid pushed, support beside me; I damage only on your burn call.” Two: “Enemy Smite unseen; hold the entrance and turn first.”',
        at: 'One: “We have mid push but cannot survive 4v5.” Two: “I group now; no side lane until your team can stall and my TP is usable.”'
      },
      go: 'At least the approach lanes are controlled, key players are present, and there is a clear plan for the enemy jungler.',
      abort: 'Enemy can enter unseen, your damage takes too long, Smite/ultimates are unavailable, or a side wave threatens your own base.',
      fallback: 'Hold vision, pick the player who must ward, take a tower plate/structure on the live wave, or reset together for items.',
      convert: 'After Baron, reset if needed and stagger two lanes so one defender cannot clear all empowered waves; preserve the buff carriers.',
      drill: 'On each Baron attempt, stop at first attack: were mid and side waves favorable, was the enemy jungler accounted for, and did both agree burn or turn?'
    },
    {
      id: 'clock-30-45', label: '30–45', title: 'Play one wave and one death timer at a time',
      read: 'Before leaving base, count living enemies, defensive cooldowns, both side waves, the closest live tower, and whether one pick opens the Nexus route.',
      why: 'At this point a single unsupported death can decide the game; the duo edge is arriving together for a high-certainty finish.',
      mechanic: 'From 30:00, 2026 waves spawn every 20 seconds. A long detour can miss multiple waves or expose a tower; short, repeated push-and-connect cycles are safer.',
      art: 'Garen',
      one: {
        mid: 'Clear the wave that protects your structure, then move with Duo Two through the warded route. Save Vex fear, Ekko stun setup, or Xerath stun for the first diver or flank; a late pick is worth more than poke into fog.',
        adc: 'State which threat can reach you and require a named escort before crossing into enemy jungle. Hit the closest safe target and reassess towers and death timers immediately after the first takedown.'
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
      abort: 'The first player is caught, the carry has no cover, the wave is not at the target, or a defender can return before the final tower falls.',
      fallback: 'Clear and reset the safest wave, defend the next entrance as two, and wait for a forced enemy move rather than guessing in darkness.',
      convert: 'On a favorable pick, count the shortest legal path to Nexus through current waves and towers. Take Baron or another structure only when an immediate finish is unavailable.',
      drill: 'For every post-30 death, identify which partner was more than one response away and which wave or vision cue should have stopped the move.'
    }
  ],

  map: [
    {
      id: 'map-vision', label: 'VISION', title: 'Enter fog in pairs, after the wave',
      read: 'Which lane gives the first move? Where was enemy jungle last seen? Which brush or wall hides the actual approach, and who has a ward or sweep?',
      why: 'Vision is a route the duo can defend, not a ward score. One player draws the enemy response with a wave while the other secures the entrance.',
      mechanic: 'Faelight wards reveal an extra region for 45 seconds and gain 25% radius in 2026 ranked. Mid river and side-lane locations create temporary information; the extra region expires.',
      art: 'Xerath',
      one: {
        mid: 'Crash mid or keep the opponent pinned before escorting Duo Two to the river edge. Place the ward on the side you will actually play, then return in time to catch the next wave.',
        adc: 'Tell your support which wave you are crashing and remain behind the first person entering fog. Use safe long-range vision if available; do not walk alone to ward just because an objective timer is near.'
      },
      two: {
        jungle: 'Sweep the entrance only after your partner is in range to trade for a contest. If the enemy has lane priority, use a defensive ward line and wait for the wave to change.',
        top: 'Ward the exit that protects your planned side wave, including a side Faelight after it appears. If you are going to Teleport, identify a ward that will still be safe when the fight begins.'
      },
      sync: {
        mj: 'One: “Mid crashes, I walk with you to top banana brush.” Two: “Sweep now; if their mid leaves tower, we back together.”',
        mt: 'One: “I hold mid push.” Two: “I ward top-side exit as my wave advances; I stop at the same line as you.”',
        aj: 'One: “Bot wave is under them; support and I can escort river.” Two: “Sweep the pit entrance with us, then we choose dragon or reset.”',
        at: 'One: “We have bot river vision for one wave.” Two: “I have a safe TP ward; if it dies, I will group on foot rather than promise a flank.”'
      },
      go: 'The relevant wave is pushed, both players can protect each other at the entrance, and the vision covers the intended play.',
      abort: 'Your side is being pushed in, the enemy can collapse from two unknown angles, or the ward line is expiring before the play.',
      fallback: 'Place defensive vision, preserve health, and plan the next wave that can reopen the entrance.',
      convert: 'Use the information immediately for a pick, safe camp, structure, or objective setup; refresh the route if the move takes longer than the vision window.',
      drill: 'Count deaths while placing vision: was a partner in trade range, and had the adjacent wave already given first move?'
    },
    {
      id: 'map-objective', label: 'EPIC OBJECTIVE', title: 'Crash, enter, turn or burn',
      read: 'Is the adjacent mid and side wave crashed? Can both players arrive? Where is enemy Smite, who has key ultimates, and what does the enemy trade if they give the monster?',
      why: 'The strongest objective call often starts with a wave, then a vision line, then a choice to fight or take the monster.',
      mechanic: '2026 epic monsters gained durability, making the time spent inside the pit more punishable. Smite does not replace lane priority or a protected entrance.',
      art: 'Rammus',
      one: {
        mid: 'Push the nearby wave and move with the jungler on the controlled side. Hold Vex fear, Ekko stun setup, or Xerath stun for an entrance or diver; announce if an enemy shove denies your first move.',
        adc: 'Crash bot or mid with support, then enter behind your frontline. State whether you will hit the monster or hold damage for the approaching enemy; do not abandon a huge wave under your own tower for a speculative start.'
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
      go: 'Adjacent lanes can move, the entrance is defensible, and both players agree on the enemy-jungler response.',
      abort: 'A partner says no priority, Smite is unavailable against a nearby enemy jungler, or the objective cannot die before a collapse.',
      fallback: 'Trade the opposite structure/camp or set vision for the next spawn; a defended wave may be worth more than a low-percentage contest.',
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
      abort: 'Your last minion dies, enemy mid/support disappears, or the expected defender returns before the hit pays.',
      fallback: 'Use the crash for a ward, reset, or counterjungle camp; do not stay in turret range with no minion cover.',
      convert: 'After first tower, name the next lane assignment and enter the newly opened jungle only on a pushed wave.',
      drill: 'For every turret death, freeze the replay at the last allied minion and note whether the pair still had a cover and exit plan.'
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
        jungle: 'Track which enemy moves to answer Duo One’s side wave and be ready to take the vacated entrance. Do not start a fight while your partner is still returning; protect the center until they reconnect.',
        top: 'Build the side wave to meet Duo One’s mid push rather than running ahead of it. Call enemy count, Teleport, and whether you are drawing one defender or need immediate extraction.'
      },
      sync: {
        mj: 'One: “I push bot one wave; back to mid in ten.” Two: “I hold the center and do not engage until you return.”',
        mt: 'One: “Mid wave meets tower in twelve.” Two: “My top wave meets at twelve; we pressure both, then leave when two disappear.”',
        aj: 'One: “Mid wave pushed, I am behind support.” Two: “I use their side defender’s movement to enter river; you do not follow through fog.”',
        at: 'One: “I can safely hold mid, no hard engage from our team.” Two: “Garen pushes bot to tower, TP ready; if their mid vanishes I back off.”'
      },
      go: 'Both pressure points are live, the side pusher has vision or escape, and the four-player group can delay a fight.',
      abort: 'Central wave is at your own tower, two enemies disappear toward the side player, or the grouped team cannot survive a 4v5.',
      fallback: 'Trim and collect the side wave at a safe line, group for the current fight, and reattempt on the next matched pair of waves.',
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
        adc: 'State your health, damage, and exact safe structure target before entering base. Jinx or Veigar should hit the reachable tower/inhibitor/Nexus while a partner screens the flank; do not chase a retreating kill past the wave.'
      },
      two: {
        jungle: 'Call the live defender count and whether Smite is needed for a different plan. Protect the carry and mark the exit if Nexus is not possible; do not peel away for a camp during a live finishing wave.',
        top: 'Tank or threaten defenders while preserving enough health to stay with the structure push. If split, make your wave meet the central wave; Teleport only to a ward that lands before the fight is decided.'
      },
      sync: {
        mj: 'One: “Mid wave enters base; I hold cage on their respawn.” Two: “I cover the flank. Tower, inhibitor, then Nexus if their timers allow.”',
        mt: 'One: “Their mid inhibitor is open, my wave enters now.” Two: “My side wave reaches their tower with it; we collapse only after they split.”',
        aj: 'One: “I have damage for Nexus if you screen two respawns.” Two: “I peel; ignore the chase and hit the structure.”',
        at: 'One: “Mid wave is in base, I can hit.” Two: “I join you now; no extra side wave when the Nexus is open.”'
      },
      go: 'A live wave can tank the route and the pair can remove remaining structures before enough defenders return.',
      abort: 'The wave dies, the carry is too low, or the necessary tower cannot fall before respawn.',
      fallback: 'Take only the safe structure, leave together, reset, then use the opened lane to pressure the next objective. Do not donate shutdowns inside the base.',
      convert: 'Nexus is the final objective when open; otherwise set the next two-wave push and deny the enemy an uncontested reset.',
      drill: 'After every won fight past 20 minutes, pause before the first objective call: was Nexus already reachable with the current wave and death timers?'
    }
  ],

  recovery: [
    {
      id: 'recovery-no-prio', label: 'NO PRIORITY', title: 'Say “cannot move” early enough to reroute',
      read: 'Your wave is at your turret or the opponent controls the river entrance. Can either partner leave without losing XP, dying, or arriving after the fight?',
      why: 'The pair prevents a bad fight when the lane player names the cost before Duo Two crosses the river.',
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
      go: 'The pinned wave is cleared, both can still reach the play, and an enemy collapse can be seen.',
      abort: 'The play would require walking through an unseen enemy or sacrificing a stacked wave for no guaranteed return.',
      fallback: 'Take the wave and local camp, ward defensively, and announce the next wave on which priority can change.',
      convert: 'If the opponent leaves, punish the tower-facing wave or take the opposite-side resource with a clear escape.',
      drill: 'Count contests started while a partner said or should have said “cannot move.” Identify the first moment the reroute was available.'
    },
    {
      id: 'recovery-behind', label: 'BEHIND', title: 'Shrink the loss, then reopen one side',
      read: 'Who has safe wave clear, who holds a shutdown, what towers are exposed, and which objective can be traded for gold, XP, or a plate?',
      why: 'A losing duo needs shared access to income and one protected route, not five separate comeback attempts in darkness.',
      mechanic: '2026 role quests reward assigned-lane presence, and permanent plates give incremental structure value. A defended wave and safe plate can keep a losing pair relevant.',
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
      abort: 'A comeback play starts in unwarded enemy space or requires the weaker carry to lead the entry.',
      fallback: 'Concede the low-value contest, protect the next wave and own jungle quadrant, then reset for item completion.',
      convert: 'After one pick or safe tower defense, push one lane far enough to place vision, then take the newly available camp, plate, or objective.',
      drill: 'After falling behind, mark the first two forced fights. Could the duo have gained a wave and camp instead, and did the carry reach their next item sooner?'
    },
    {
      id: 'recovery-failed', label: 'FAILED PLAY', title: 'End the failed play before it becomes three deaths',
      read: 'Did the gank fail but burn a summoner, did the opponent keep wave control, are key ultimates down, and where is the next safe wave?',
      why: 'A failed engage is information. The duo keeps its edge by resetting the plan before emotion drives a second, worse entry.',
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
        mj: 'One: “Their Flash down, my fear down, wave coming to me.” Two: “We exit; I clear one camp and return only when fear and wave align.”',
        mt: 'One: “Roam failed, I lost mid push.” Two: “I stop the top dive and hold my wave; we retry after both crashes.”',
        aj: 'One: “No kill, enemy Heal down; I need this wave crashed.” Two: “I help only this wave, then reset with you.”',
        at: 'One: “Dragon fight lost; mid must be cleared.” Two: “I stop side pressure and cover the retreat, TP unavailable for the next cycle.”'
      },
      go: 'A second attempt has refreshed cooldowns, a new wave window, and confirmed enemy location.',
      abort: 'The only reason for the second attempt is frustration, or the opponent now has first move and more health.',
      fallback: 'Exit, collect the next safe wave/camp, reset, and plan one new objective together.',
      convert: 'Store the burned summoner or ward information and exploit it on a later synchronized wave; do not repay a mistake with another sacrifice.',
      drill: 'For each failed early play, count the next 60 seconds: did the duo lose an extra death, wave, or camp after the original mistake?'
    },
    {
      id: 'recovery-one-pick', label: 'LATE PICK / FINISH', title: 'One pick: defend, end, or reset—call it now',
      read: 'Who died, whose damage remains, which wave is closest to base, which inhibitors and Nexus turrets are open, and how long before a defender returns?',
      why: 'The same pick can be a finish, a Baron, or merely a safe reset. Deciding together before either player wanders off preserves the window.',
      mechanic: 'Late death timers are long, while post-30 waves spawn every 20 seconds. A missed wave can invalidate an otherwise correct finishing call.',
      art: 'Ornn',
      one: {
        mid: 'If an ally was picked, clear the nearest threatening wave before the enemy can use it on your tower. If an enemy was picked, move with Duo Two on the live winning wave and hold control for the remaining defenders.',
        adc: 'If alive, state your DPS, health, and whether you can hit structures through the surviving threat. If dead, immediately communicate enemy cooldowns and let Duo Two defend waves rather than attempt a hero steal.'
      },
      two: {
        jungle: 'Count enemy and ally Smite status, keep the carry’s route clear, and call “Nexus,” “Baron,” “tower,” or “reset” once. If the duo lost a member, defend the wave and delay rather than starting a short-handed monster.',
        top: 'Join the central wave when it can end; a side wave is useful only if it reaches a structure in the same window. If the carry was picked, front the remaining wave clear and do not offer the enemy a second death.'
      },
      sync: {
        mj: 'One: “Enemy jungler dead forty; mid wave entering.” Two: “Nexus route first; I cover remaining defenders, Baron only if wave dies.”',
        mt: 'One: “Our carry died; I clear mid from range.” Two: “I group for wave defense, no solo TP flank into five.”',
        aj: 'One: “I can hit inhibitor tower now if you screen assassin.” Two: “I peel the flank; we leave together when the wave dies.”',
        at: 'One: “Enemy carry dead, my wave at Nexus turret.” Two: “I leave side and join the finish; no extra top tower.”'
      },
      go: 'A live wave and remaining damage can finish the chosen structure before respawn, with both players in cover range.',
      abort: 'The wave dies, a key defender returns before the final structure, or your surviving carry cannot enter safely.',
      fallback: 'Take the reachable tower or objective without donating shutdowns, reset, and force the next matched wave.',
      convert: 'When Nexus is open, commit to it; otherwise bank the closest guaranteed structure or Baron, then use the next wave to finish.',
      drill: 'Review every post-30 pick and name the highest guaranteed reward visible at the moment of the pick, not after the team dispersed.'
    }
  ]
};
