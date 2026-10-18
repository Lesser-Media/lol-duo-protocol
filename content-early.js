// Standard ranked Summoner's Rift, reviewed for patch 26.20 (18 Oct 2026).
// Riot patch rules: https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes/
// Riot season systems: https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/
// Riot wave and quest follow-ups: https://www.leagueoflegends.com/en-gb/news/game-updates/league-of-legends-patch-26-9-notes/
// Riot mid quest follow-up: https://www.leagueoflegends.com/en-ph/news/game-updates/league-of-legends-patch-26-11-notes/
// Riot top TP updates: https://www.leagueoflegends.com/en-sg/news/game-updates/league-of-legends-patch-26-12-notes/
// Riot top TP cooldowns: https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-19-notes/
// Coaching concepts: https://mobalytics.gg/lol/guides/wave-management and https://mobalytics.gg/lol/guides/gank-setup
// Player pain points: https://www.reddit.com/r/summonerschool/comments/1w6o3o5/ and https://www.reddit.com/r/summonerschool/comments/1jvhqk8/
// These are conditional coaching heuristics, not measured duo win-rate claims.

window.DUO_EARLY = {
  draft: [
    {
      id: "draft-queue-card",
      label: "01 / QUEUE CARD",
      title: "Two locks. Two bans. One opening call.",
      read: "Before queue, Duo One and Duo Two set their default picks and bans. Change them when the enemy draft or your Support changes the shared play. Each ban should protect a window both of you intend to use.",
      why: "A shared draft plan keeps both players on the same answer to enemy dive, damage balance, lane pressure, and the opening route or side wave.",
      mechanic: "Before loading ends, each player names a pick, ban, reason to pivot, and opening wave or route. Agree on one reason to skip the first river fight.",
      art: "Vex",
      one: {
        mid: "Pick practiced Vex to punish dashes and follow Duo Two's setup. Choose Ekko for side-lane flanks or Xerath when allies can protect him. Say which of the first three waves lets you move; your pick alone does not give river priority.",
        adc: "Pick Jinx for sustained physical damage. Choose Veigar bot only with a safe support matchup and physical damage elsewhere. Tell Duo Two whether you can contest the first wave, must hold it, or need to let it return."
      },
      two: {
        jungle: "Pick Wukong for physical engage. Choose Rammus only against an attack-heavy team your allies can damage. Say where your first clear ends and whether the nearby lane can move before you contest river.",
        top: "Pick Ornn for a reliable front line. Choose Garen when the matchup and team need side pressure. State your first-three-wave plan and whether Teleport is selected or comes from the Top quest."
      },
      sync: {
        mj: "Before minions meet, Mid says which wave can hold or crash; Jungle says where the first clear ends. If the plans do not meet, skip the first 2v2 and trade camps.",
        mt: "Before minions meet, Mid and Top name their first safe crash. Call an upper-river fight only when both waves and allied Jungle allow it.",
        aj: "Before minions meet, ADC calls the bot wave and support plan; Jungle says where the first clear ends. If Jungle paths away, ADC farms safely until a covered crash.",
        at: "Before minions meet, Top and ADC name their first three waves and likely enemy Jungle side. Top works toward a safe crash while ADC protects bot farm."
      },
      go: "Both players know their picks, the two shared bans, when to pivot, and how their opening waves and routes connect.",
      abort: "A default is banned, Support or enemy composition breaks the pair's protection plan, or the first river fight needs priority neither of you can provide.",
      fallback: "Choose practiced pivots, skip the risky first fight, and protect lane XP until both players have a safe crash.",
      convert: "Say the opening plan before minions meet. Update it when you first spot the enemy Jungle.",
      drill: "Review the first three minutes together: did the bans protect your planned window, and did both players follow the agreed wave and route?"
    },
    {
      id: "draft-win-condition",
      label: "02 / SHARED WIN CONDITION",
      title: "Decide how your two picks win together",
      read: "Before either player locks, name the enemy's best engage and your team's sustained damage. Agree whether your two picks win grouped fights, picks, or side pressure and how each player contributes.",
      why: "The pair should create one repeatable advantage: engage and follow-up, safe damage behind peel, or a side wave that forces an answer while the other threatens an objective.",
      mechanic: "Name one way to win and one threat to avoid. Example: 'Wukong starts, Vex follows his knockup. If their support flanks, save R to peel.'",
      art: "Vex",
      one: {
        mid: "Use Vex to punish enemy dashes and follow engage, Ekko when you can reach a flank, or Xerath when allies can protect your range. Tell Duo Two if your first two waves allow a move. Xerath cannot safely enter dark river just because he has range.",
        adc: "Keep Jinx as the physical, sustained-damage anchor when the rest of the team leans AP. Use Veigar bot only when lane support and composition allow a mage carry; state who supplies sustained physical damage and who protects you from dives."
      },
      two: {
        jungle: "Use Wukong for physical engage; save Rammus for attack-heavy drafts where taunt matters. Say whether your first clear aims to cover a lane, gank, or contest river. Before level 6, Wukong has no reliable hard CC for a forced gank.",
        top: "Use Ornn when Duo One needs a durable front line and teamfight start; use Garen when a side-lane threat will make enemies leave the center of the map. State if you intend to group or create opposite-side pressure, and check whether an all-AP pair still has physical damage elsewhere."
      },
      sync: {
        mj: "Before either lock, choose your first winning window: river, level 6, or scaling. When enemy Mid and Jungle appear, adjust the first clear and remaining ban if the early 2v2 loses.",
        mt: "Before Mid or Top locks, decide whether Top is the front line for Mid or the opposite-side threat; after the enemy jungle is shown, agree which lane may play aggressively before the first river fight.",
        aj: "Before ADC locks, Duo Two confirms whether he can path bot on the first clear or whether Duo One must play weak side; after support and enemy jungle reveal, settle on the first bot-wave plan.",
        at: "Before the last of your picks, choose a two-lane win condition: Jinx plus Ornn fights together, or Jinx plus Garen creates center-and-side pressure; after enemy engage is revealed, agree who must protect the carry."
      },
      go: "Both players can name the same first winning window, their damage roles, and how they will fight or pressure the map.",
      abort: "Your picks demand incompatible fights, the team lacks sustained damage, or both players are exposed to the enemy's primary engage.",
      fallback: "Choose the most practiced safe pick, then lower the plan's aggression. A neutral early game with a clear scaling call beats a draft that requires an unwinnable 2v2.",
      convert: "Make the draft plan your first in-game call: 'Mid crashes before Wukong enters river,' or 'Jinx farms bot while Ornn saves TP for our next fight.'",
      drill: "After each game, compare your shared win condition with the first three fights. Did both players execute it, or did one enter a fight the other pick could not support?"
    },
    {
      id: "draft-pick-order",
      label: "03 / PICK ORDER",
      title: "Trade positions for useful information",
      read: "A later pick helps only if an enemy reveal changes your answer. Before swapping slots, both players name their safe blind and decide whose matchup needs more information.",
      why: "Top can lose many waves into a bad melee matchup; ADC may need to see dive or range; Mid + Jungle may lose early river if both are countered. Give the later slot to the player whose answer most changes your shared plan.",
      mechanic: "Name your safe blind pick and the champion you would choose after a reveal. Say: 'I can blind X. You pick later. If they show Z, we use our safe matchup plan.'",
      art: "Ornn",
      one: {
        mid: "If you blind Vex or Xerath, tell Duo Two which enemy pick would punish you and when you could first move. If an unknown Mid could deny river access, ask for the later slot and keep a practiced Ekko or Vex answer ready.",
        adc: "Blind Jinx only when the team already offers peel or the enemy dive is limited; keep the later ADC slot if bot matchup and enemy engage are unresolved. If you see a hostile dive lane, tell Duo Two that bot is a cover lane rather than a forced early kill lane."
      },
      two: {
        jungle: "Wukong can often lock early if his engage and physical damage already serve the draft; Rammus needs proof that enemy damage and attack patterns justify him. Tell Duo One whether you need adjacent-lane priority for the first contested river or can path away from an unfavorable fight.",
        top: "Ask for the later slot if the Top matchup could deny your first three waves or stop Garen's side plan. If you must blind, use your safest practiced Ornn or Garen line. Then ask Duo One which wave and objective you can play around."
      },
      sync: {
        mj: "Before trading slots, compare the unknown enemy Mid and Jungle. Give the later slot to the player whose counter would deny the first river move; the other names a safe blind pick.",
        mt: "Before trades lock, preserve Top's last pick when the lane matchup is unknown; if Mid takes last pick instead, Top calls a low-risk first-three-wave plan before loading screen.",
        aj: "Before trades lock, let Jungle blind Wukong if ADC needs to see enemy support and dive; if the enemy jungle is unknown and Rammus is conditional, hold Jungle instead and give ADC the safe Jinx line.",
        at: "Before trades lock, let Top use the later slot when his melee matchup is hidden unless the enemy bot duo is still unrevealed and Jinx cannot safely blind; the early picker states a weak-side fallback."
      },
      go: "The later player knows which enemy reveal will change the pair's plan, and the earlier player has a practiced blind option.",
      abort: "You trade solely to chase a theoretical counter but the earlier picker is pushed onto an unpracticed champion.",
      fallback: "Keep comfort picks and change lane posture, jungle route, or grouping plan after seeing the matchup.",
      convert: "After draft, record the revealed matchup that justified the swap and the exact first-wave or first-clear adjustment it caused.",
      drill: "Review five drafts together: did the later slot change either player's pick, rune, route, or win condition? If not, consider giving it to the other role next time."
    },
    {
      id: "draft-ban-protocol",
      label: "04 / TWO BANS, ONE PLAN",
      title: "Ban the answer to your shared win condition",
      read: "Duo One and Duo Two each name the champion most likely to break their part of the plan. Use your two bans on threats that interrupt the same early window or late fight, informed by repeated losses in your games.",
      why: "A strong shared ban protects both jobs. A roaming Mid can break Mid + Jungle's river timing; a hook lane can deny Jinx's farm and Jungle's bot-side access at once.",
      mechanic: "Say: 'We win through ___. Their best answer is ___.' Use the second ban on your next biggest shared threat. Revisit both bans after patch changes and replay reviews.",
      art: "Jinx",
      one: {
        mid: "For Vex or Ekko, consider Twisted Fate if his roam repeatedly beats your crash and follow. For Xerath, ban the assassin or hard engage your replays show you cannot safely answer. Save your key defensive spell for the planned fight.",
        adc: "For Jinx, consider Blitzcrank if his hook prevents safe farm and your support cannot protect the wave. For Veigar, identify whether dives, range, or a support matchup cause the loss. Tell Duo Two which wave needs cover or a cross-map trade."
      },
      two: {
        jungle: "Consider Lillia if her speed and sleep deny Wukong or Rammus entry; patch 26.20 increased her later-rank sleep. If lost fights start with a pinned lane, protect that lane or route away instead of treating Jungle as a solo matchup.",
        top: "Consider Kayle if she repeatedly survives Ornn/Garen's pressure and outscales the chosen side plan. If a more immediate ranged or lane-control counter prevents your Top quest and leaves Duo One exposed, protect the first three waves instead."
      },
      sync: {
        mj: "During bans, Mid names the enemy who could move first. Jungle names the opponent who wins the planned 2v2. Ban the one who breaks your first river play.",
        mt: "During bans, Mid protects the map from an unanswerable roam while Top protects his first-wave lane access; pick the ban that keeps both lanes able to sync for the first top-side play.",
        aj: "During bans, ADC names the support or dive threat that denies safe farm. Jungle names the threat to bot-side access. Ban the one that disrupts both jobs.",
        at: "During bans, Top names the matchup that pins his side lane. ADC names the engage that threatens her while Top is away. Ban the threat that breaks your planned two-lane pressure."
      },
      go: "Both players can state the play each ban protects and the enemy answer it removes, beyond popularity or win rate.",
      abort: "A ban fixes one lane but leaves the other player's only carry or engage path exposed.",
      fallback: "If your target is already banned, protect the next shared threat. If both threats remain, use safer picks, waves, and routes.",
      convert: "In loading screen, name the remaining threat, its first dangerous timing, and the wave or vision adjustment both players will make.",
      drill: "Review losses together: did a champion deny a lane, break your paired fight, win the cross-map trade, or start a late engage? Change bans when that shared threat repeats."
    }
  ],

  wave: [
    {
      id: "wave-hold",
      label: "01 / HOLD + FREEZE",
      title: "Make the enemy cross the lane",
      read: "The enemy wave is larger and moving toward one of your towers. The lane owner holds it outside turret; the partner calls whether they can punish an opponent who walks up. Mid holds break quickly, while side lanes can hold longer.",
      why: "The lane owner farms near safety while the opponent walks farther from theirs. The partner must use that extra distance for cover, a gank, or pressure across the map; otherwise the hold creates little duo value.",
      mechanic: "Last-hit and thin just enough to keep the wave outside tower. Recheck each arriving wave; a fixed 'leave three casters' rule fails when wave size, damage, or position changes.",
      art: "Rammus",
      one: {
        mid: "Tell Duo Two which wave you can hold and whether you have the health, mana, and CC to fight. Save Vex fear if a gank is one wave away. Do not tank a large wave as Xerath to force a freeze.",
        adc: "Ask your support to last-hit and hold the wave near your turret rather than auto-pushing it out; ping the intent if voice is unavailable. As Jinx or Veigar, keep enough health and an escape route through the next wave, and do not walk beyond your support to maintain a freeze."
      },
      two: {
        jungle: "Name the camp you will finish before reaching lane. Approach unseen once the enemy crosses midpoint. If they can crash before you arrive, cover that crash or countergank; do not ask Duo One to tank minions for you.",
        top: "If your own lane is holding, tell Duo One when the enemy top must walk up and whether your allied jungler is nearby; do not abandon an unrecoverable wave to help a distant fight. If Duo One is ADC, report enemy-jungle sightings top so bot can take a safe wave of pressure, not a blind dive."
      },
      sync: {
        mj: "One wave before Duo Two finishes the adjacent camp, Mid calls 'hold this wave, fear/stun ready'; Jungle confirms arrival before Mid spends health preserving it.",
        mt: "Before an upper-river call, Mid and Top each state whether their wave is held or moving. If both are held, protect the farm and skip the collapse.",
        aj: "One wave before the bot-side camp ends, ADC calls the held wave and support's position; Jungle enters only after the enemy bot pair commits forward and the 3v3 is favorable.",
        at: "At each new side-lane wave, Top reports a hold or crash and ADC reports bot safety; if enemy jungle appears Top, ADC can take one safe push with support before resetting the map."
      },
      go: "The wave holds outside tower, the enemy must cross midpoint, and both players agree whether the partner can arrive or gain pressure elsewhere.",
      abort: "The wave will crash before help arrives, the enemy can break the hold for free, or a larger enemy minion stack makes the fight lose even with your jungler.",
      fallback: "The lane owner catches under turret for XP. The partner covers the next outgoing crash or takes a safe gain across the map; cancel the gank window.",
      convert: "After the gank, the lane owner calls crash or hold. Then take a safe recall, plate, ward, or nearby objective.",
      drill: "Pause 10 seconds before the attempted play. Could the lane owner still hold the wave, and did the partner have a real arrival or safe trade?"
    },
    {
      id: "wave-slow-push",
      label: "02 / SLOW PUSH",
      title: "Build a wave for the next play",
      read: "One of your lanes has a small minion lead and the shared play is one or two waves away. The lane owner builds a stack; the partner times their route or second wave so both pressures land as the stack crashes.",
      why: "A larger wave helps the lane owner trade, then holds a defender under tower while the partner moves. Wave spawns speed up at 14 and 30 minutes, so both of you track the next meeting point instead of using a fixed timer.",
      mechanic: "Last-hit while keeping a small allied minion lead. Thin the enemy backline only enough to grow the stack. Finish with a fast crash before leaving; a wave left outside enemy tower can be frozen.",
      art: "Garen",
      one: {
        mid: "Ask where Duo Two plans to be. Build a mid wave before that river move instead of clearing instantly. If the enemy clears faster or the next wave is unsafe, warn Duo Two and reduce the play.",
        adc: "With support, build the bot wave while Duo Two clears toward your side or while Top prepares opposite-side pressure. Protect health and Flash during the stack; the big wave is only useful if you survive to crash it and can arrive at the objective after."
      },
      two: {
        jungle: "Tell Duo One which quadrant you will finish in and whether the stack is for a gank, river control, or a protected recall. Clear toward that side so you arrive as the stack reaches the enemy turret; do not invade earlier and demand a laner leave before the crash.",
        top: "Build a side wave before Duo One pressures the objective. Say whether you will walk, Teleport, or keep hitting the side tower. If enemies disappear before your crash, stop where vision ends and tell Duo One you cannot join."
      },
      sync: {
        mj: "As Jungle starts the last camp before river, Mid builds the wave. Crash it before either player enters fog.",
        mt: "Top begins the side stack roughly two waves before the planned objective; Mid times a later crash so enemy Top and Mid must clear at the same moment.",
        aj: "ADC and support begin the bot stack as Jungle paths through the nearby quadrant; Jungle arrives for the crash, then both move into river after the enemy bot is pinned.",
        at: "Top builds the opposite-side wave first. Once it draws a defender, ADC crashes the protected bot or mid wave and calls whether Top should Teleport or keep pushing."
      },
      go: "The stack will reach enemy tower before the play, and the partner is ready to move, cover, or crash another lane during that forced clear.",
      abort: "Enemy Jungle or Support can collapse on the lane owner, the partner cannot support the timed play, or the defender clears the stack before it buys a move.",
      fallback: "Crash one wave with cover, or let it return and collect it. Skip the objective if the move window is gone.",
      convert: "While the enemy clears, take one gain: a safe ward, supported invade, recall, tower damage, or objective start.",
      drill: "Replay the planned play: did the stack reach tower when the partner moved, and what did each player gain before the defender could follow?"
    },
    {
      id: "wave-crash",
      label: "03 / FAST PUSH + CRASH",
      title: "Buy the pair a move timer",
      read: "An enemy recalls, dies, or answers another lane, and your pair wants first move. The lane owner pushes a full wave into turret while the partner covers the crash or prepares the destination. Standing forward without a full crash gives neither of you a safe timer.",
      why: "The defender must clear under tower while both players act on the same window. If the crash fails, the enemy can freeze, leaving the lane owner short on XP and the partner alone at the objective.",
      mechanic: "Clear quickly and escort surviving minions into turret range. The lane owner checks enemy Mid, Support, and Jungle positions; the partner covers an exposed crash or names a safe route to the next play.",
      art: "Vex",
      one: {
        mid: "Name the exact wave you can clear and the spell you need afterward for the fight; Vex should not spend fear if the next river fight needs it. Once the wave touches tower, move toward the agreed warded side; if Xerath cannot enter fog, provide ranged cover and vision pings instead.",
        adc: "Tell your support to help finish the wave, then ping the move to Duo Two before leaving bot. If Jinx has no Flash or Veigar has no cage, state that you can provide objective damage only from a protected position, not a deep river chase."
      },
      two: {
        jungle: "If a wave cannot reach tower safely, spend a short window covering the crash from fog or showing to deny the enemy hold. Do not take last hits or break the owner's wave without asking; after the crash, lead the pair through the warded entrance toward the chosen play.",
        top: "Crash your side wave before walking or Teleporting to Duo One's fight; if the enemy top can hold it outside turret, ask for ally jungle help or abandon the roam. Report whether your crash gives a true numbers edge or merely trades a tower for your arrival."
      },
      sync: {
        mj: "Mid calls 'crash next wave' as Jungle clears the adjacent camp; only after minions enter tower do both walk into the same river quadrant.",
        mt: "Top crashes first to pin the enemy Top; Mid crashes the next mid wave, then both can converge with their jungler rather than leaving two free waves.",
        aj: "ADC and support crash the bot wave while Jungle is already near the river entrance; both move for dragon or vision before enemy bot can follow.",
        at: "Top crashes opposite side and reports the defender; ADC crashes central wave one beat later, creating two simultaneous answers before the pair calls fight or structure."
      },
      go: "The full wave reaches turret, the exit route is warded or covered, and both players know whether they are grouping or creating pressure in two lanes.",
      abort: "Enemy can freeze outside tower, you lack mana/health to finish, or a missing enemy makes the route to the crash lethal.",
      fallback: "The lane owner keeps the wave safe. The partner trades a camp, resets, or defends instead of entering the contested area alone.",
      convert: "Use the shared move for one gain: objective, ward line, pick, structure damage, or a joined recall. Then the lane owner returns for the bounce.",
      drill: "Freeze the replay as the lane owner leaves. Did minions reach turret, where was the partner, and which enemy could follow first?"
    },
    {
      id: "wave-bounce",
      label: "04 / BOUNCE + SHARED RESET",
      title: "Spend gold without losing the map",
      read: "After a full crash, the enemy wave should return toward the lane owner. Both players compare gold, health, and the next objective, then set recalls so they return with items for the same play.",
      why: "If one player buys while the other fights, your 2v2 becomes two separate 1v2s. A real crash lets the lane owner collect the returning wave while the partner prepares a joined arrival.",
      mechanic: "Confirm the full crash before either recall. Buy for the next fight and call your return side. If the enemy held the wave outside tower, cancel the expected bounce and help the lane owner recover it.",
      art: "Ekko",
      one: {
        mid: "Say 'crashed, basing, back on the next wave' and mark your purchase or ultimate cooldown for Duo Two. On return, catch the incoming wave before walking to river; do not give the opponent a free plate because your partner is already at the objective.",
        adc: "Use the crashed bot wave to recall with your support when possible, then tell Duo Two the earliest wave and item spike at which you can contest. Jinx's 2026 bot quest rewards lane farming, so do not sacrifice two waves for an unstarted dragon."
      },
      two: {
        jungle: "Finish the nearby camp before the paired reset or cover Duo One's vulnerable recall; shop before beginning the objective setup. Return through the side you agreed in voice, then help secure a safe vision line after Duo One has caught the bounce.",
        top: "Crash your lane before recalling or using Teleport. Tell Duo One your return route and Teleport status. If Duo One is ADC, time the reset so ADC has Support or allied cover for the next bot or mid wave."
      },
      sync: {
        mj: "After Mid's full crash, both recall within the same wave cycle; Jungle can finish one adjacent camp first only if both still reach the planned river before the enemy.",
        mt: "Top and Mid finish their respective crashes before shopping; on return, Mid catches center while Top goes to the chosen side so both waves are covered before a fight.",
        aj: "ADC's bot crash starts the reset call; Jungle shops after the nearby camp and meets ADC/support at the safe river entrance before dragon setup.",
        at: "Top and ADC each state 'crash complete' before resetting; avoid both leaving an unpushed lane, then arrive together at center or objective with item purchases finished."
      },
      go: "The crash is real, both players can buy meaningful items, and their return routes meet the next play before the enemy controls it.",
      abort: "One player is stuck on a held wave, an enemy is already on the objective, or recalling would concede a live tower with no cross-map gain.",
      fallback: "One player catches the immediate wave while the other covers and resets next; choose a later objective entry or trade rather than arrive one by one.",
      convert: "Use the bought items to set vision and contest from a joined position; if enemy has already taken the area, trade their exposed side instead of face-checking.",
      drill: "At each major fight, check both inventories and arrival times. Which wave should have been crashed before one player shopped or moved?"
    },
    {
      id: "wave-trim-pull",
      label: "05 / TRIM + PULL",
      title: "Protect the wave you cannot fight",
      read: "The enemy builds a large wave toward one of your towers. The lane owner thins safely and calls dive risk one wave early; the partner chooses cover or a safe gain across the map. Preserving XP and life matters more than forcing a freeze.",
      why: "A large enemy wave protects a dive. Trimming it reduces that advantage and gives the partner time to arrive or trade elsewhere. Pulling minions with your body is useful only when the enemy cannot punish it.",
      mechanic: "Damage the backline from safe range before the stack reaches tower; if alone and safe, briefly draw enemy minions just outside turret until your wave arrives, then drop aggro. Never pull through enemy poke, a missing jungler, or a lane where the enemy can all-in.",
      art: "Xerath",
      one: {
        mid: "Tell Duo Two 'big wave, cannot move' before his proposed river or side play, and clear what you can without giving a solo kill. Xerath can trim from range; Vex or Ekko must respect enemy engage and keep a spell for the next fight after the wave is safe.",
        adc: "Call the size of the incoming bot wave and ask support to help trim or protect the turret. Do not step beyond the wave for a pulled freeze while enemy support and jungle are missing; if the dive is credible, preserve health and ask Duo Two for cover or an explicit cross-map trade."
      },
      two: {
        jungle: "If Duo One faces a stacked wave, hold the nearby fog or show to dissuade a dive; a few seconds of cover can preserve more than a speculative invade. Ask the laner whether to leave the next wave bouncing, help crash, or simply let it die under turret before touching minions.",
        top: "When Top is the target of a stacked dive, call enemy wave size, enemy jungle sighting, and whether you can stand under turret; Duo One then either pushes the opposite lane safely or joins a defendable counterplay. If ADC is under the big wave, Top trades on the opposite map or readies Teleport if already available and the fight is winnable."
      },
      sync: {
        mj: "As soon as Mid sees the stack building, call 'cannot move for the next wave'; Jungle cancels same-side invade and covers the crash or trades across map.",
        mt: "Before a top-side move, both solo laners report their incoming wave size; if either faces a stacked crash, the other does not call an immediate 2v2 in river.",
        aj: "One wave before the bot stack reaches turret, ADC calls dive risk; Jungle chooses countergank cover or a declared cross-map trade, and ADC stops contesting outside turret.",
        at: "When either side receives a large stack, the other player asks 'can we defend or trade?' before pushing; Top uses Teleport only for a defendable fight and ADC never walks into fog to rescue an unsalvageable wave."
      },
      go: "The lane owner can thin safely, and the partner has confirmed cover or a safe cross-map trade before the stack arrives.",
      abort: "Enemy support/jungle is missing, the stacked wave grants lethal dive damage, or you must spend your only escape spell to hold the minions.",
      fallback: "The threatened player gives unsafe last hits and collects XP under turret. The partner takes a safe opposite-side wave or camp.",
      convert: "Once the dive is denied, crash the outgoing wave with cover, reset together if possible, and use the enemy's wasted time to claim vision or cross-map tempo.",
      drill: "For each stacked-wave death, pause one wave earlier. Did the lane owner warn the partner, and did the partner call cover or a concrete trade?"
    }
  ],

  windows: [
    {
      id: "window-first-river",
      label: "01 / FIRST RIVER",
      title: "Scuttle is a choice, not a command",
      read: "Scuttle spawns at 2:55. Before either player moves, compare your waves, levels, health, spells, enemy Support position, and both Jungles' likely routes. The spawn alone does not make a winning fight.",
      why: "A crab is worth less than two lost waves or a losing numbers fight. Your edge is a shared yes-or-no call before the enemy reaches river.",
      mechanic: "On the prior wave, each player states whether they can move and which side their Jungle can reach. Name the first CC chain. If the lanes cannot support it, trade the other crab or camp while the laner collects XP.",
      art: "MonkeyKing",
      one: {
        mid: "Call whether the wave can fully crash before 2:55, not merely whether you are standing farther forward. Vex may follow with fear if available, but Wukong cannot supply pre-6 knockup; Xerath can cover from range and should not blindly enter melee river fog.",
        adc: "Tell Duo Two whether bot's next wave is pushing, held, or crashing and whether support can leave with you. A bot duo pinned under tower cannot escort an early objective; stay for quest XP and communicate the no-go before Jungle starts it."
      },
      two: {
        jungle: "Before finishing the clear, announce which river you can reach with usable HP and Smite. If Duo One and the adjacent lane cannot move, take the uncontested side or recall rather than force a 1v2 while pinging a losing wave.",
        top: "Tell Duo One whether top's next wave can crash and if the opponent can follow to upper river. If your lane is under a stacked wave, hold XP and warn Mid/ADC that upper river is unavailable; do not abandon a top quest wave for a coin-flip crab."
      },
      sync: {
        mj: "On the wave immediately before 2:55, Mid says 'crash by crab' or 'no move'; Jungle either enters that river with Mid after the crash or paths to the other side.",
        mt: "Before 2:55, Top and Mid both report upper-river move timing; if either cannot move, tell the allied jungler through pings and decline a top-side 3v3.",
        aj: "Before the first bot-side river play, ADC reports bot/support priority while Jungle is one camp away; if bot cannot leave, Jungle trades the opposite river rather than pulling ADC off a quest wave.",
        at: "Before the first river contest, Top reports upper-side priority and ADC reports bot-side priority; use the side with actual lane support, while the other player holds the weak-side wave."
      },
      go: "The relevant waves are safe, your pair and nearby allies can arrive, and the enemy's faster-moving lane or Support cannot outnumber you.",
      abort: "Enemy Mid or Support moves first, a duo player would lose a large wave, or the pair lacks CC and damage to win the contact.",
      fallback: "The lane owner collects XP while the partner takes the other Scuttle, a safe camp, or lane cover. Plan the next river entry after a full crash.",
      convert: "If river is won, use the first move to place one useful ward, protect the next crash, or set a repeat gank; do not chase into an untracked enemy jungle.",
      drill: "At 2:40, name both players' waves, allied Jungle's route, and the side you called. Did both players make that call before contact?"
    },
    {
      id: "window-countergank",
      label: "02 / COUNTERGANK",
      title: "Call the gank before it lands",
      read: "Enemy Jungle's start, last sighting, or camp timing points toward an exposed lane. The threatened player calls the next wave; the partner decides whether cover can arrive before contact or whether to trade safely elsewhere.",
      why: "You do not need a perfect route prediction. A warning one wave early lets the target retreat or hold spells while the partner prepares a real countergank or cross-map gain.",
      mechanic: "Before the exposed wave, name enemy Jungle's quadrant, possible Support roam, summoner spells, and arrival order. If covering, the partner hides on the retreat path. If trading, the target gives space and survives.",
      art: "Rammus",
      one: {
        mid: "Tell Duo Two which side you warded and lean toward the covered quadrant while last-hitting. Hold Vex fear or Ekko W when a shadow is planned; if Xerath is low and immobile, ask for wave cover rather than pretending to bait a kill.",
        adc: "Call whether bot is exposed beyond river, whether support can peel, and whether Flash/cage/traps are available. If Duo Two cannot be there before the next wave, stop hitting the forward wave and let it return rather than invite a losing 2v3."
      },
      two: {
        jungle: "Compare your arrival with the enemy's likely arrival and check lane HP and minion count before shadowing. If the 2v2 or bot 3v3 is favorable, hide along Duo One's retreat route; if not, state the cross-map camp/vision trade before the gank lands.",
        top: "Report whether the enemy jungler showed top or top is the likely target, plus your wave and Teleport status. If Top is the target, ask Duo One to push the opposite lane only after the enemy commits; if Duo One is the target, Teleport only when available and the save/fight is winnable."
      },
      sync: {
        mj: "One wave before Mid crosses center, Jungle says 'I can cover after this camp' or 'play back, I am opposite'; Mid adjusts its shove immediately.",
        mt: "As enemy jungle is seen moving toward Top, Top announces hold/retreat before Mid's next wave; Mid crashes only if the opposite-side punish is safe or rotates with the allied jungler.",
        aj: "Before ADC's forward bot wave, Jungle gives an arrival time relative to the next camp; ADC either baits with support and cover or stops pushing until the enemy route is known.",
        at: "When the enemy jungler appears on one side, the targeted player calls survival first; the other uses exactly the next safe wave for pressure, then both reassess as soon as the enemy disappears."
      },
      go: "The enemy is likely to commit, the partner can arrive before or with them, allied wave and spells favor the turn, and no unseen Support can outnumber you.",
      abort: "Your partner is one camp or one wave too late, the enemy minion stack makes the fight bad, or the target has already spent the escape spell.",
      fallback: "The target gives space and lives. The partner uses the enemy Jungle's revealed side to take a safe camp, wave, ward, or plate across the map.",
      convert: "After a won countergank, fix the wave with its owner, then take the nearest guaranteed structure or objective before recalling together.",
      drill: "For each gank death, find the enemy Jungle's last sighting. One wave before contact, did the target warn the partner and did the partner choose cover or trade?"
    },
    {
      id: "window-enemy-roam",
      label: "03 / ENEMY ROAM",
      title: "Answer the roam before you follow it",
      read: "Enemy Mid or Support disappears after a crash. One of you warns the threatened lane; the other checks whether they can follow through vision before the enemy arrives. Do not turn one lost wave into two by chasing through fog.",
      why: "The early warning lets the target back off while the partner takes a safe answer: a covered follow, the empty lane, or a cross-map trade. Make that choice before the roamer reaches river.",
      mechanic: "Ping the path and likely target immediately. The lane owner calls whether they can crash; the partner calls a safe route or trade. Follow together only through known ground and with enough time to join the fight.",
      art: "Vex",
      one: {
        mid: "State 'mid missing to [side], I can/cannot follow' as soon as the opponent leaves, and ping the destination while you finish the crash. Vex may follow a confirmed fight from a safe angle; Xerath should avoid blind river corridors and use range to defend or punish the mid tower.",
        adc: "If enemy Mid or Support disappears toward bot, back off before they appear and tell Duo Two whether your wave is stuck forward. Jinx and Veigar survive first; afterward, collect the returning wave or push only when Jungle/Top confirms enemy positions."
      },
      two: {
        jungle: "Track the missing champion's likely route and meet Duo One at a safe entrance if you can turn the fight. If you cannot arrive before the enemy, warn and trade their empty quadrant rather than starting an objective while Duo One is being collapsed on.",
        top: "If the roam points top, call your own wave and retreat route so Duo One does not waste a blind rescue. If it points bot, report Teleport availability and whether a warded landing plus enemy commitment makes a real counterplay; otherwise collect your side wave and force an answer."
      },
      sync: {
        mj: "At the missing ping, Mid deals with the current wave while Jungle names his route immediately. Follow only if both can enter the same warded corridor.",
        mt: "When enemy Mid leaves toward Top, Mid pings path immediately and Top falls back before the next top last-hit; after Mid crashes, both decide on defend, follow, or tower trade.",
        aj: "On the first missing ping toward bot, ADC backs to a protected line and Jungle says 'cover now' or 'give wave, I trade' before enemy Mid reaches river.",
        at: "When a roam threatens ADC, Top checks Teleport and landing vision before the enemy reaches bot; if no winning arrival exists, ADC retreats and Top crashes the opposite wave."
      },
      go: "The target and route are known, the wave is safe, and both players can reach the fight through vision before or with the enemy.",
      abort: "The route is dark, either player would lose major farm, or the threatened ally has already escaped and there is no fight to join.",
      fallback: "Warn the target to retreat. One player punishes the empty lane while the other covers the target or takes a safe ward or camp.",
      convert: "After the roam fails, take the wave and nearby structure/vision while the enemy travels back; after a defended roam, reset together before the next objective.",
      drill: "For each enemy roam, did the warning reach the target before river? What did each player do, and was the chosen trade worth the waves you gave up?"
    },
    {
      id: "window-kill-conversion",
      label: "04 / KILL CONVERSION",
      title: "Spend the kill on the map",
      read: "An enemy dies or recalls. The winner calls the wave and health; the partner checks death timer, Smite or Teleport, and enemy reinforcements. Agree on one gain both actions can secure before the enemy returns.",
      why: "Permanent plates reward partial tower damage, while epic monsters take longer and can trap a low-health pair. A nearby guaranteed gain beats arriving at a distant objective after your advantage ends.",
      mechanic: "Within five seconds, call 'wave first, then plate, tower, objective, ward, or reset.' The lane owner sets the wave; the partner covers the route or creates a second safe demand.",
      art: "Jinx",
      one: {
        mid: "After a Mid kill, tell Duo Two whether you will crash to deny XP, take safe tower damage, or join a nearby objective. If the wave is already returning, do not push it into a bad position just because an ally is nearby; call the wave you need.",
        adc: "After bot kills, tell Duo Two whether your support can escort a full crash and how much health you have for dragon or tower. As Jinx, use safe DPS on the guaranteed structure; as Veigar, retain cage to block the enemy re-entry instead of chasing a second kill."
      },
      two: {
        jungle: "Ask the wave owner 'crash or hold?' immediately, then help only the requested fix. Check Smite, adjacent lane priority, enemy jungle location, and time to finish before calling dragon, Grubs, Herald, or Baron; otherwise take the plate/ward and reset.",
        top: "After a top kill, crash enough to deny the opponent and choose between plates, a safe recall, or a Teleport-supported move. If Duo One is ADC, report whether the enemy top can rejoin a bot/Baron fight before you leave side; your tower pressure should create a second demand at the same time as her center push."
      },
      sync: {
        mj: "Within five seconds of a mid kill, Mid calls the wave's fate and Jungle calls the nearest guaranteed objective; both leave before the enemy mid returns.",
        mt: "After a kill on either solo lane, the winner crashes while the partner prepares the adjacent wave; only converge if both can arrive before the enemy respawn/Teleport.",
        aj: "After a bot kill, ADC/support crash first while Jungle checks the other lanes and Smite; start dragon only if enemy reinforcements cannot beat the slower 2026 objective finish.",
        at: "After Top or Bot wins, the winner pushes a live wave while the other creates center/opposite-side pressure; name the tower or objective both actions threaten before the dead enemy returns."
      },
      go: "The wave and both players' health support the gain; it can finish before enemy return; each player knows whether to cover, hit, or pressure another lane.",
      abort: "No wave supports the play, either player lacks the needed health or spells, or enemy reinforcements arrive before you finish.",
      fallback: "The winner crashes to deny XP while the partner covers a safe plate or ward. Both reset before the next contest.",
      convert: "Take the guaranteed structure or epic, then immediately set the next side wave and reset; do not chase another kill while a free tower segment or safe objective is available.",
      drill: "After each first kill, record both players' next actions and the actual map gain. If there was none, pause five seconds after the kill and choose a better wave-first call."
    }
  ]
};

// The operation shell shows these gates for every pairing. Keep a base field for
// the shared principle, then replace it where the two players occupy opposite
// sides of the map or where Top cannot act as a proximate Jungle substitute.
const duoEarlyPairOverrides = {
  "draft-queue-card": {
    mj: {
      read: "DEFAULT PICKS: Vex + Wukong. STARTING BANS: Twisted Fate + Lillia if their roam and sleep break your river play. Replace a ban when your own losses reveal a bigger shared threat.",
      why: "Vex can save fear for Wukong's arrival, and after level 6 his knockup can start her follow-up. Their early river still depends on Mid's wave, not the picks alone.",
      mechanic: "Mid names the first crash and whether fear is ready. Jungle names the final camp and side of his first clear. If those timings do not meet, both call off the first river fight.",
      go: "Both players are practiced on the picks, Mid can hold or crash against the matchup, and the team has damage to finish Wukong's engage.",
      abort: "Vex is denied by lane shove, the enemy 2v2 wins before level 6, or Lillia/Twisted Fate can erase the planned river window.",
      fallback: "Try Ekko + Wukong for a viable flank, Xerath + Wukong with real frontline cover, or Rammus only into an attack-heavy enemy draft with ally damage.",
      convert: "Before minions meet, say: 'I crash as you finish your last camp. We enter that river only if I can move first.' Recheck when enemy Jungle shows.",
      drill: "At the first river contact, did Mid's wave and Jungle's clear actually meet, and did the bans address the threat that arrived?"
    },
    mt: {
      read: "DEFAULT PICKS: Vex + Ornn. STARTING BANS: Twisted Fate if his roam beats Mid's response; Kayle if she denies Top's side pressure. Change either ban for the actual draft.",
      why: "Ornn can anchor Vex's follow-up in grouped fights, while two solo-lane waves can create upper-river priority. The pair's early value is synchronized wave access, not a guaranteed gank.",
      mechanic: "Mid and Top each name their first safe crash, then check whether allied Jungle will be upper side. Top states whether Teleport was selected or comes from the quest.",
      go: "Both can play their lane matchups and allied composition has physical damage behind Vex + Ornn's magic-heavy pressure.",
      abort: "Top cannot reach a safe first crash, enemy Mid moves first, or the team has too little physical damage for a grouped fight.",
      fallback: "Use Garen if the matchup allows side pressure and another ally can front line. Use Ekko for a safe flank or Xerath only when allies can protect him.",
      convert: "Before minions meet, say: 'We crash Top and Mid together. We enter upper river only if both of us and our Jungle can move.'",
      drill: "At the first upper-side play, were both solo-lane waves safe, and did Ornn group only when Vex could follow?"
    },
    aj: {
      read: "DEFAULT PICKS: Jinx + Wukong. STARTING BANS: Blitzcrank if hook denies Jinx's farm; Lillia if sleep denies Wukong's entry. Adapt to the actual Support and draft.",
      why: "Jinx supplies the sustained physical damage Wukong's engage can unlock. Before Wukong has R, the pair plays for bot-wave cover and a supported crash rather than forcing a low-setup gank.",
      mechanic: "ADC calls the Support matchup, first bot wave, and Flash status. Jungle names where his clear ends and whether he is arriving to cover, gank, or ward river.",
      go: "Support can help Jinx farm through the opening lane and Jungle's first path does not demand a bot-side fight without bot priority.",
      abort: "Hook/dive denies safe bot farm, support cannot peel a forward wave, or enemy Mid can collapse before Wukong arrives.",
      fallback: "Keep Jinx and path Jungle for cover; use Rammus only into attack-heavy enemies with enough ally damage. Veigar bot needs safe support lane and physical damage elsewhere.",
      convert: "Before minions meet, say: 'If you path away, I hold bot safely. If you path bot, we crash with Support before entering river.'",
      drill: "At the first bot-side play, did ADC's wave and support position justify Jungle's route, and did both bans protect that plan?"
    },
    at: {
      read: "DEFAULT PICKS: Jinx + Ornn. STARTING BANS: Blitzcrank if hook denies Jinx's farm; Kayle if she stalls Ornn's side wave. Replace either for the actual draft.",
      why: "Ornn eventually gives Jinx a durable fight front; until they group, their edge is safe bot farm plus a Top wave that forces an answer. They should not treat opposite lanes as instant 2v2 help.",
      mechanic: "ADC calls Support's position, bot-wave safety, and Flash. Top calls his first crash and Teleport status. Together, name the first objective both can affect.",
      go: "Jinx has a protected lane, Ornn can preserve Top XP, and the rest of the team gives the pair a usable route to its first grouped fight.",
      abort: "Top is pinned with no safe wave, ADC lacks bot peel, or enemies can reach Jinx while Ornn is still committed to a distant side lane.",
      fallback: "Use Garen for side pressure only if someone else can frontline for Jinx; use Veigar bot only with physical damage and a survivable support lane.",
      convert: "Before minions meet, say: 'Jinx farms safely bot. Ornn calls the Top crash. We group when both waves and the route are safe.'",
      drill: "At the first cross-map call, did Top's wave create an answer while ADC stayed protected, or did one push alone into unseen enemies?"
    }
  },
  "draft-win-condition": {
    mj: {
      convert: "At load-in, Mid names the first wave that lets him move; Jungle names where the first clear ends. Together, name the first 2v2 you would take.",
      drill: "Review your first three Mid + Jungle contacts: did the wave and route match the fight your two picks were drafted to win?"
    },
    mt: {
      mechanic: "Top states whether he will join Mid or pressure a side wave. Mid names the crash that frees him to act. Vex + Ornn can group; Ekko + Garen needs the rest of the team to hold center.",
      fallback: "Choose your practiced lane picks, keep the first three waves safe, and plan one top-side collapse only when Mid and Top can both move.",
      convert: "At load-in, Top calls group or side pressure; Mid names his first crash. Together, choose an upper-side play that does not cost either lane a full wave.",
      drill: "Review the first top-side play and the first grouped fight: did Top's wave and Mid's arrival support the same draft plan?"
    },
    aj: {
      mechanic: "Jungle says whether his first clear ends bot. ADC names the wave that lets bot move safely toward dragon. Jinx deals sustained damage after Wukong engages; Veigar needs physical damage from another ally.",
      fallback: "Choose practiced picks, tell ADC which first clear leaves bot weak side, and prioritize the bot quest wave before any uncertain river fight.",
      convert: "At load-in, ADC names the first safe bot crash; Jungle names his clear's ending side. Agree whether the first bot play is cover, gank, or dragon vision.",
      drill: "Review the first bot-side play: did Jungle arrive on ADC's crash, and did ADC have the health and support position the draft required?"
    },
    at: {
      mechanic: "Top says whether Ornn will group or Garen will draw a side defender. ADC names who protects her while Top is away. Choose the wave when center and side pressure can land together.",
      fallback: "Choose practiced Jinx/Veigar and Ornn/Garen lines, keep both assigned-lane quest waves, and delay cross-map pressure until Top has a safe crash or Teleport.",
      convert: "At load-in, ADC names what makes bot safe; Top states his first-wave plan. Agree when Top will group or force an answer across the map.",
      drill: "Review the first two fights ADC joined: did Top's wave or arrival create an advantage, or was ADC left exposed while Top pushed alone?"
    }
  },
  "draft-pick-order": {
    mj: {
      fallback: "Keep the practiced blind champion; Mid lowers first-river ambition while Jungle reroutes away from the losing 2v2.",
      convert: "After the swap, name the revealed enemy Mid + Jungle matchup. Match Mid's first safe crash to the side where Jungle ends his clear."
    },
    mt: {
      fallback: "Keep practiced lane champions; Top holds an unsafe first wave and Mid cancels the matching upper-river play until both lanes can move.",
      convert: "After the swap, name Top's lane constraint and Mid's first safe crash. Use those timings to decide whether an upper-side collapse is possible."
    },
    aj: {
      fallback: "Keep the practiced Jinx/Veigar and Wukong/Rammus lines; ADC plays the exposed wave safely while Jungle paths for cover or trades the far side.",
      convert: "After the swap, ADC names the enemy bot dive threat; Jungle names the side where his first clear ends. Then choose a safe bot crash."
    },
    at: {
      fallback: "Keep practiced ADC and Top picks; Duo Two protects his quest waves while Duo One asks the team for bot cover, then coordinate pressure after the first safe crashes.",
      convert: "After the swap, Top states his lane constraint and ADC states what protection she needs. Pick the first wave when both can pressure safely."
    }
  },
  "draft-ban-protocol": {
    mt: {
      why: "Protect the two solo lanes' first synchronized move. A ban matters when it prevents Top from crashing or lets enemy Mid leave before Duo One can answer the upper river.",
      drill: "Review whether the unbanned threat pinned Top or let enemy Mid reach upper river first; adjust the pair's ban only for a repeated pattern."
    },
    mj: { drill: "Review whether the unbanned threat broke Mid's crash or Jungle's route in the first two river plays, then update your shared ban." },
    aj: { drill: "Review whether the unbanned threat denied ADC's bot wave or Jungle's bot-side entry, then update your shared ban." },
    at: {
      why: "Protect the center-and-side shape: Top must survive long enough to force a side answer, while ADC must farm and deal damage without being caught when Top is away.",
      drill: "Review whether the unbanned threat pinned Top or killed ADC while Top was away; change the ban only for a repeated shared failure."
    }
  },
  "wave-hold": {
    mj: {
      go: "Mid holds outside turret with HP and CC intact; Jungle reaches the lane on the called wave and the enemy must cross center.",
      abort: "The wave crashes before Jungle arrives, enemy Mid can break the hold, or the 2v2 loses through minion damage or support roam.",
      fallback: "Mid catches the crash while Jungle covers the outgoing wave or trades a camp; call the next gank only after a new hold forms.",
      convert: "After the gank, Mid calls hold or crash; Jungle helps fix that wave, then both reset or take nearby river vision or a camp.",
      drill: "Pause one wave before Jungle's arrival: did Mid still have fear/stun, HP, and a hold outside tower when the gank began?"
    },
    mt: {
      read: "Mid or Top holds a wave near turret. The other player calls whether their own wave allows a covered rotation or safe pressure elsewhere. A distant freeze alone does not create an upper-river fight.",
      why: "The holder can farm safely and make the enemy walk up. The partner's crash or allied Jungle's arrival determines whether you can punish that overstep together.",
      go: "The lane owner holds without losing health; the partner has a crash or allied Jungle's arrival timed to that wave before calling a collapse.",
      abort: "The held wave will crash before help arrives, enemy Jungle can outnumber the upper-side fight, or Mid cannot leave the current wave.",
      fallback: "The holder collects the wave under turret. The partner crashes safely or asks allied Jungle for cover, then both remake the upper-side call on the next wave.",
      convert: "If enemy Jungle answers the hold, the other laner crashes safely; after a won fight, fix the held wave.",
      drill: "Replay the first upper-river call: which solo lane was held, which could move, and did both commit only after those facts matched?"
    },
    aj: {
      go: "ADC and support can hold outside tower with HP intact; Jungle reaches bot as the enemy duo crosses center and the 3v3 is winnable.",
      abort: "The bot wave crashes before Jungle arrives, support cannot follow, or enemy Mid/Jungle can turn the gank into a losing numbers fight.",
      fallback: "ADC catches bot XP under cover; Jungle protects the next outgoing crash or trades the opposite camp instead of forcing through a stacked wave.",
      convert: "After a bot gank, ADC calls hold or full crash with support; Jungle uses the resulting move window for dragon only if Mid and enemy Jungle cannot contest.",
      drill: "Pause before Jungle enters bot: did ADC and support still hold the wave, and could all three follow the same target?"
    },
    at: {
      read: "Top or ADC holds a vulnerable side wave while the partner is across the map. The holder protects farm and reports enemy pressure; the partner takes only a safe opposite-side wave once the enemy's location is known.",
      why: "The hold keeps one lane's XP safe. The partner turns enemy pressure on that lane into a measured gain elsewhere, without pushing into unseen enemies.",
      one: "Ask Support to hold bot near turret and tell Top where the wave sits. As Jinx or Veigar, preserve health and an exit. If enemy Jungle shows Top, push one safe bot wave with Support; Top cannot arrive to help immediately.",
      go: "The holding player can farm outside turret safely, and the remote partner has a named safe wave to push if the enemy jungle shows on the held side.",
      abort: "The held player faces a dive or cannot maintain XP safely; the other player has no vision for cross-map pressure.",
      fallback: "Give the unsafe last hits, let the wave crash, and have the remote partner take only the safe opposite-side wave or plate before both recheck enemy positions.",
      convert: "If enemy Jungle pressures Top's hold, ADC and Support crash bot safely. If bot draws pressure, Top takes a safe side wave or plate. Both stop extending when enemies disappear.",
      drill: "At the wave before enemy jungle appeared, did the held player stay alive and did the remote partner gain a safe wave, plate, or vision line?"
    }
  },
  "wave-slow-push": {
    mj: {
      abort: "Enemy Mid clears the stack before Jungle can arrive, or enemy Jungle/support can collapse while Mid is extended.",
      fallback: "Mid trims and catches the return while Jungle finishes a safe camp; build the next crash only when the route again points Mid."
    },
    mt: {
      read: "Top builds a side stack while Mid prepares a later central crash. Their two waves should pin both enemy solo laners before an upper-river move or tower trade.",
      abort: "Top's stack is exposed before Mid can crash, or Mid is pinned under a wave when Top needs the upper-river move.",
      fallback: "Top finishes the safe crash or lets the wave return; Mid collects his wave and both delay the upper-river call one cycle.",
      convert: "Top's stacked wave pins the defender as Mid crashes center; together choose the warded upper-river move, group, or Top tower damage.",
      drill: "Replay the planned top-side move: did Top's stack and Mid's crash force two defenders to clear at once?"
    },
    aj: {
      abort: "Bot stack exposes ADC before Jungle reaches the quadrant, support cannot protect the crash, or Mid can follow first.",
      fallback: "ADC and support collect the return wave; Jungle covers the next crash or takes a safe far-side trade.",
      convert: "ADC and Support's stack pins enemy bot while Jungle wards a safe river entrance or starts dragon. If allied Mid cannot move, use the crash for recall instead."
    },
    at: {
      read: "Top builds an opposite-side stack while ADC and support prepare a protected center or bot crash. The two waves should land together so the enemy must answer one while the other pressures.",
      abort: "Top's side stack outruns ADC's center crash, enemies vanish into the side fog, or ADC cannot stand forward without protection.",
      fallback: "Top stops at the last safe vision line while ADC collects the next central wave; rebuild two-lane pressure after enemy positions show.",
      convert: "Top stacks as ADC and Support crash a safe wave. If two enemies answer Top, ADC takes warded objective space or safe tower damage; otherwise Top hits tower.",
      drill: "Replay the two waves before the objective: did Top's side wave draw an answer at the same time ADC reached center, or did one push alone?"
    }
  },
  "wave-crash": {
    mj: {
      fallback: "Mid keeps the wave safe; Jungle trades a camp or covers a later full crash instead of entering river alone."
    },
    mt: {
      why: "A completed Mid or Top crash pins one solo-lane opponent. The pair gains an upper-river move only when both waves let them leave before the enemy solo laners.",
      fallback: "The wave owner catches safely; the other solo laner keeps his wave neutral and both decline the upper-river fight until a joint crash exists.",
      convert: "After both solo-lane crashes, take a warded upper-river fight or a Top plate; the first player returning catches the bounce while the other covers the route.",
      drill: "At the upper-river move, were both Mid and Top waves inside enemy towers, or was one player donating a full wave to arrive?"
    },
    aj: {
      fallback: "ADC and support keep bot wave safe while Jungle trades a camp or waits in cover for a later full crash."
    },
    at: {
      read: "Top and ADC prepare crashes in separate lanes. Each calls when minions reach enemy tower; only then do they commit to two-lane pressure. A wave sitting outside turret gives the enemy room to freeze.",
      why: "Top's side crash and ADC's protected bot or mid crash can pull defenders to two places. You need matching wave timing and a clear regroup call, even when you cannot travel together.",
      fallback: "The exposed player retreats. The partner takes only a safe wave or tower damage, then both wait for the next paired crash.",
      convert: "After Top and ADC crash together, Top keeps hitting only while ADC is protected in center. If enemies collapse on Top, ADC takes the warded objective area or safe tower damage.",
      drill: "Freeze the replay when ADC or Top moves forward: had both waves reached turret, and which defender was forced to answer each one?"
    }
  },
  "wave-bounce": {
    mj: {
      go: "Mid's wave fully crashes, Jungle finishes the nearby camp or cover, and both complete purchases before entering the same river side.",
      convert: "Mid catches the returning wave while Jungle approaches from the same-side camp. With purchases complete, both enter the warded river together."
    },
    mt: {
      why: "Mid and Top buy before the same fight without opening both solo lanes to free tower damage. Each first fixes their own wave, then both choose a joined arrival.",
      mechanic: "Each laner confirms his own full crash before recalling. On return, Mid catches center while Top returns to the chosen side or Teleports to a warded fight if available.",
      go: "Both solo lanes have real crashes, purchases matter for the next upper-side play, and neither leaves a free wave behind.",
      fallback: "The player with the uncrashed wave stays to collect it; the other shops and returns to cover the planned upper-side route, then they swap reset timing.",
      convert: "Mid catches center and Top either joins a warded upper-river fight or pushes side on the same wave; if the setup is lost, both trade safe farm.",
      drill: "At the first objective after recall, did both players finish purchases and secure their own bounce before the joint upper-river call?"
    },
    aj: {
      go: "ADC/support fully crash bot, Jungle has cleared or covered the nearby camp, and both shop before taking the protected river entrance.",
      convert: "ADC/support catch the returning bot wave while Jungle meets them from the nearby quadrant; move into river only after all three can enter safely."
    },
    at: {
      why: "Top and ADC can shop on the same wave cycle without meeting. They return with purchases to complementary lanes while neither gives away a free tower.",
      mechanic: "Each player confirms his own full crash and purchase. ADC returns to protected bot/center farm; Top returns to side or holds Teleport for a warded regroup.",
      go: "Top and ADC each have a real crash or protected catch, both buy for the next wave, and their return assignments create pressure at the same time.",
      fallback: "The player with the threatened tower catches the wave while the other completes a safe reset; call the next two-lane pressure wave after both are back.",
      convert: "ADC takes protected center with items while Top builds the opposite-side wave; if enemy collapses Top, ADC uses that reveal to take a safe objective or tower segment.",
      drill: "At the next fight or tower trade, had both bought before their coordinated wave, or did one reset leave the other alone on an exposed lane?"
    }
  },
  "wave-trim-pull": {
    mj: {
      go: "Mid can thin without losing CC or health and Jungle confirms a cover route before the enemy stack reaches tower.",
      convert: "After denying the dive, Mid and Jungle fully crash the outgoing wave on Mid's call, then ward or reset together."
    },
    mt: {
      read: "Mid or Top faces a stacked crash while the partner is working another solo lane. They must call whether a same-side defense is reachable or whether the safe reply is pressure across the map.",
      go: "The wave owner can thin from safety; the remote solo laner either has a real route to defend before the crash or a named cross-map wave to punish.",
      convert: "After the dive fails, the threatened player fixes the wave. The partner crashes safely or joins only through a warded route.",
      drill: "One wave before the threatened dive, did Mid and Top choose defend or cross-map trade, and did each keep the required wave?"
    },
    aj: {
      go: "ADC and support can thin without losing peel, and Jungle can reach bot before the stacked wave becomes a dive.",
      convert: "After denying the bot dive, ADC/support call the outgoing crash and Jungle escorts it only if needed; then all three choose dragon vision or reset."
    },
    at: {
      read: "ADC or Top faces a stacked side wave while the other is across the map. The two-player call is defend if Teleport and a winning arrival exist, otherwise survive and trade pressure.",
      go: "The threatened player can collect XP safely; the partner has either a warded, winning Teleport or a safe opposite-side wave to take while enemies commit.",
      convert: "After the failed dive, the threatened player fixes the wave while the partner takes a safe wave or tower damage. Both then call their next lane assignments.",
      drill: "One wave before the stack hit tower, did the threatened player call danger and did the remote partner choose a real Teleport or safe opposite-side gain?"
    }
  },
  "window-first-river": {
    mj: {
      go: "Mid fully crashes before leaving, Jungle reaches the same river at 2:55, and enemy Mid or Support cannot arrive first.",
      abort: "Enemy Mid/support moves first, Mid would lose a large wave, or Wukong has no pre-6 CC chain to win the fight.",
      fallback: "Jungle trades the opposite Scuttle or camp while Mid collects XP, then both plan the next river entry after a full crash."
    },
    mt: {
      read: "At 2:55, Mid and Top compare solo-lane waves and allied Jungle's route before calling an upper-river fight. If either lane is pinned, tell Jungle early instead of promising help you cannot give.",
      why: "A Scuttle is worth less than two lost solo-lane waves and a losing 3v3. Your edge is giving allied Jungle an honest call about whether both lanes can move.",
      mechanic: "On the prior wave, Mid and Top each call crash or hold and check whether allied Jungle is upper side. If either player is pinned, ping no contest and collect lane XP.",
      one: "Call whether Mid can fully crash before 2:55 and whether Top can also move; standing forward without a crash is false priority. Preserve Vex fear or Ekko W for the actual upper-river fight, while Xerath covers from range rather than blind fog.",
      go: "Both solo lanes can move after a safe crash and allied Jungle is upper side with enough HP for the numbers fight.",
      abort: "Mid or Top is under a stacked wave, enemy Jungle arrives first, or the allied jungler is pathing away from upper river.",
      fallback: "The pinned solo laner catches XP; the other takes only a safe crash, and both ping allied Jungle away from the losing upper-river contest.",
      convert: "If upper river is won, Top protects his bounce while Mid wards the exit with allies; turn the move into a safe Top crash or Grubs setup later.",
      drill: "At 2:40, could both solo lanes move and was the allied jungler near upper river? Mark each contest called from only one lane's priority."
    },
    aj: {
      go: "ADC/support's bot wave can crash or stay safely held, and Jungle reaches lower river with Mid priority checked before touching Scuttle or an epic.",
      abort: "Bot is pinned under a large wave, enemy Mid/support arrives first, or ADC cannot leave without losing the bot quest wave.",
      fallback: "Jungle takes the far-side Scuttle or camp while ADC collects bot XP; call the next lower-river entry after bot's full crash."
    },
    at: {
      read: "At 2:55, Top and ADC are on opposite sides and cannot both contest one Scuttle. Each calls lane priority. Tell allied Jungle which river has nearby help; the other player protects their wave.",
      why: "The nearby lane supports the river contest. The other player keeps lane XP and avoids an exposed push, so the duo gains even without meeting at the same crab.",
      mechanic: "On the prior wave, Top and ADC each call hold or crash and enemy Jungle's likely side. Ping allied Jungle toward the supported river; the far-side player stays for farm.",
      one: "Tell Top whether bot/support can move after the next wave; if bot is pinned, keep Jinx or Veigar in XP range and ping allied Jungle away from lower river. Use Top's report of upper-side enemy Jungle to take one safe bot push, not a blind dive.",
      go: "One lane has a real move and allied Jungle can reach that river; the other player knows how to farm safely while enemies are out of sight.",
      abort: "Neither lane can move, the allied jungler is opposite the proposed contest, or the remote player would lose XP to chase a distant crab.",
      fallback: "Ping the allied jungler to trade the safer river or camp; Top and ADC both collect their lane waves and prepare the next synchronized crash.",
      convert: "After allied river control, the nearby player wards or crashes with Jungle. The far-side player takes a safe wave or plate if enemy positions allow it.",
      drill: "At 2:40, which of Top and Bot had priority, and did the other player survive while allied Jungle chose the supported river?"
    }
  },
  "window-countergank": {
    mj: {
      go: "Jungle can shadow Mid before enemy Jungle arrives, Mid keeps HP/CC for the turn, and enemy support cannot create a hidden 3v2.",
      abort: "Jungle is a camp late, Mid's wave is too large to fight through, or Mid already used the escape/CC spell.",
      convert: "After the won Mid countergank, Mid calls crash or hold; Jungle helps that fix, then both take nearby vision or structure before resetting."
    },
    mt: {
      read: "Enemy Jungle is heading toward Mid or Top. The threatened player calls the wave and retreats early; the other checks whether their crash and travel time allow a rescue or a safe cross-map gain.",
      why: "Mid and Top cannot cover each other instantly. A warning one wave early lets the target live while the partner prepares a safe crash or a real collapse with allied Jungle.",
      mechanic: "Name the threatened solo lane, enemy Jungle's quadrant, wave size, and allied Jungle's position. The partner either crashes before rotating on a warded route or stays to take a safe gain while the target survives.",
      go: "The remote laner and allied Jungle can reach before the enemy commits, and the threatened wave plus cooldowns support a real turn.",
      abort: "The remote laner cannot crash first, allied Jungle is absent, or the target is already too low to survive the opening damage.",
      fallback: "The target gives unsafe last hits and lives. The partner crashes a safe wave or takes tower damage; both then reset the upper-side plan.",
      convert: "After a won defense, the target fixes the wave. The partner uses enemy Jungle's revealed position for a safe ward, crash, or plate.",
      drill: "For each gank on Mid or Top, check the partner's wave one cycle earlier: was a rescue real, or should you have called survival and opposite pressure?"
    },
    aj: {
      go: "Jungle can shadow ADC/support before the enemy arrives, bot wave and peel favor the turn, and enemy Mid cannot join first.",
      abort: "Jungle is one camp late, support cannot follow, or ADC has already lost Flash/cage needed to survive the first engage.",
      convert: "After a won bot countergank, ADC/support set the wave while Jungle checks Mid priority and Smite; take dragon only if reinforcements cannot contest."
    },
    at: {
      read: "Enemy Jungle is heading toward Top or Bot while your partner is across the map. Warn the target early. Top joins a defense only with available Teleport, a safe warded landing, and a fight you can win; otherwise the remote player trades pressure.",
      why: "Even when Top and ADC cannot meet, the warning can prevent a death. The other player uses enemy Jungle's revealed side to take a safe wave across the map.",
      mechanic: "Before the exposed wave, name the threatened side, enemy jungle quadrant, support roam, and Top's Teleport status. If no winning arrival exists, the target retreats and the remote player crashes only as far as vision permits.",
      go: "Top has a confirmed winning Teleport to a warded bot fight, or the remote player can trade a safe wave/plate while the target survives.",
      abort: "Teleport is unavailable or the landing is blind, the target cannot survive long enough, or the remote wave is exposed to unseen enemies.",
      fallback: "The threatened player gives space and lives; the remote partner takes one safe wave or plate, then both stop pushing until enemy Jungle disappears again.",
      convert: "After a successful defense or trade, the targeted player fixes the wave while the partner takes the opposite-side gain. Name your next lanes before the objective.",
      drill: "Tag each Top/Bot gank: did the target call it a wave early, and did the remote partner choose safe pressure instead of a hopeless late rescue?"
    }
  },
  "window-enemy-roam": {
    mj: {
      go: "Mid fully crashes and Jungle meets him on a warded route before the roamer reaches the target; both can win the numbers fight.",
      fallback: "Mid pings retreat and punishes the empty lane while Jungle covers the likely target or takes the vacated quadrant."
    },
    mt: {
      why: "Mid's warning gives Top time to step back. Mid can then use a full crash to follow on a warded route or take tower damage while the roamer is gone.",
      mechanic: "Mid pings the path as soon as the enemy disappears. Top calls wave and retreat route. Mid follows only after a full crash with allied Jungle on a safe route; otherwise Mid punishes the empty lane.",
      go: "Enemy path points Top, Top has a defendable wave, and Mid can crash then reach through vision before the fight ends.",
      fallback: "Top yields the unsafe last hit while Mid crashes the empty lane and takes a safe plate or ward; both prepare for the roamer's return.",
      convert: "After the roam fails, Top fixes the wave while Mid takes safe tower damage. If both defended together, reset before the next upper-side move."
    },
    aj: {
      why: "ADC's first job is to survive the incoming roam; Jungle can cover the bot exit or trade the enemy's revealed quadrant. Their joint call happens when the missing ping arrives, before the dive starts.",
      mechanic: "ADC pings enemy Mid/Support missing toward bot and retreats to a protected line. Jungle calls 'cover bot now' if in range, otherwise 'give forward wave; I trade camps.'",
      go: "ADC has a safe retreat and Jungle reaches the bot exit before the roamer, or the pair has agreed on survival plus a safe camp trade.",
      fallback: "ADC/support retreat from the threatened bot wave while Jungle covers the safe exit or trades enemy camps; do not ask ADC to punish the roamer's empty Mid lane.",
      convert: "After the bot dive is avoided, ADC catches the returning wave while Jungle protects the next crash or takes a revealed camp."
    },
    at: {
      why: "The warning lets ADC retreat before the roamer reaches bot. Top then checks for a warded, winning Teleport; otherwise he takes a safe wave across the map.",
      mechanic: "ADC pings the incoming Mid/Support route and backs to a protected line. Top calls 'TP now' only with a winning landing and otherwise pushes the safe Top wave while ADC survives.",
      go: "ADC has already retreated and Top has a warded, winning Teleport before contact; otherwise the 'go' is Top's safe opposite-side crash while ADC lives.",
      abort: "Enemy route is hidden, Top's Teleport is unavailable or late, or an exposed ADC cannot survive the first engage.",
      fallback: "ADC/support give the forward bot wave and ping retreat; Top uses the enemy's bot commitment for one safe Top wave or plate, then both recheck vision.",
      convert: "After ADC survives, ADC collects the returning wave while Top takes the safe side gain. If Top's Teleport won the fight, ADC calls the bot crash before both reset.",
      drill: "For each bot roam, did ADC retreat before contact and did Top choose a real Teleport or safe Top gain rather than an empty chase?"
    }
  },
  "window-kill-conversion": {
    mj: {
      fallback: "Mid crashes for denied XP; Jungle takes a safe nearby ward or camp, then both shop before the next shared river entry."
    },
    mt: {
      mechanic: "Within five seconds of a Mid or Top kill, the winner calls the wave. The partner names a safe second crash. Converge only if both waves and allied Jungle allow it.",
      fallback: "The winner crashes to deny XP or take a plate while the partner protects their own wave. Both shop before the next upper-side setup.",
      convert: "While the winner takes safe structure damage, the partner fixes the Mid or Top wave during the same wave cycle. Regroup only through a covered route.",
      drill: "After each solo-lane kill, did the other player create a matching wave or remain safe, and what structure or objective did the pair actually gain?"
    },
    aj: {
      fallback: "ADC and support crash for denied XP while Jungle takes a safe nearby ward or camp; reset before the next bot-side objective."
    },
    at: {
      mechanic: "Within five seconds of a Top or Bot kill, the winner calls the wave. The partner names the next safe crash in their own lane. Choose the tower or objective those two waves can threaten together.",
      go: "The winning lane has a live wave, the remote partner can create a safe second demand, and both can bank their gains before enemy respawn.",
      abort: "The winner is too low to hit a structure, the remote wave cannot be pushed safely, or the two gains land at different times so enemies answer both.",
      fallback: "The winner fully crashes for enemy lost XP or a safe plate; the remote player preserves his own wave and both reset the cross-map call.",
      convert: "The winning lane takes safe structure damage while the partner crashes a second wave. Before the enemy respawns, Top retreats to vision and ADC returns to protected farm.",
      drill: "After every Top or Bot kill, did the remote player create simultaneous pressure, or did one player chase while the other had no safe wave?"
    }
  }
};

for (const chapter of Object.values(window.DUO_EARLY)) {
  for (const operation of chapter) {
    const byPair = duoEarlyPairOverrides[operation.id];
    if (!byPair) continue;
    for (const [pair, fields] of Object.entries(byPair)) {
      for (const [field, copy] of Object.entries(fields)) {
        const key = field + "ByPair";
        (operation[key] ||= {})[pair] = copy;
      }
    }
  }
}
