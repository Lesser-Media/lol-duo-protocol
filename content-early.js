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
      id: "draft-win-condition",
      label: "01 / SHARED WIN CONDITION",
      title: "Decide how your two picks win together",
      read: "Before either lock, name the enemy's best engage, the ally who will deal sustained damage, and whether your pair wins through front-to-back fights, a pick, or side pressure. A strong solo champion is not enough if your two picks ask for opposite fights.",
      why: "The pair should create one repeatable advantage: engage and follow-up, safe damage behind peel, or a side wave that forces an answer while the other threatens an objective.",
      mechanic: "Choose one lead condition and one failure mode in voice. Example: 'Wukong starts, Vex follows after knockup; if their support can flank, we hold R to peel.'",
      art: "Vex",
      one: {
        mid: "Use Vex when enemy dashes give her punish windows and the team needs follow-up; use Ekko when side pressure and flank access are real; use Xerath when your frontline can protect artillery. Tell Duo Two whether your first two levels can move, because Xerath's range does not make him a safe blind river fighter.",
        adc: "Keep Jinx as the physical, sustained-damage anchor when the rest of the team leans AP. Use Veigar bot only when lane support and composition allow a mage carry; state who supplies sustained physical damage and who protects you from dives."
      },
      two: {
        jungle: "Use Wukong as the default physical engage and skirmish bridge; reserve Rammus for enemy auto-attack-heavy drafts where taunt has high value. Announce whether your first clear is for cover, a gank, or a river contest; Wukong has no reliable pre-6 hard CC, so do not draft him as an automatic level-3 kill button.",
        top: "Use Ornn when Duo One needs a durable front line and teamfight start; use Garen when a side-lane threat will make enemies leave the center of the map. State if you intend to group or create opposite-side pressure, and check whether an all-AP pair still has physical damage elsewhere."
      },
      sync: {
        mj: "Before the first duo lock, say 'first river / level-6 fight / scaling' and choose the mid-jungle pair for that window; after the enemy mid and jungle reveal, revise the first clear and ban if the 2v2 loses.",
        mt: "Before Mid or Top locks, decide whether Top is the front line for Mid or the opposite-side threat; after the enemy jungle is shown, agree which lane may play aggressively before the first river fight.",
        aj: "Before ADC locks, Duo Two confirms whether he can path bot on the first clear or whether Duo One must play weak side; after support and enemy jungle reveal, settle on the first bot-wave plan.",
        at: "Before the last of your picks, choose a two-lane win condition: Jinx plus Ornn fights together, or Jinx plus Garen creates center-and-side pressure; after enemy engage is revealed, agree who must protect the carry."
      },
      go: "Both players can state the same first playable window, damage profile, and teamfight shape in one sentence.",
      abort: "Your two picks need incompatible fights, your team lacks sustained damage, or neither player can survive the enemy's primary engage.",
      fallback: "Choose the most practiced safe pick, then lower the plan's aggression. A neutral early game with a clear scaling call beats a draft that requires an unwinnable 2v2.",
      convert: "Write the draft's win condition as the first in-game call: 'We get Mid crash for Wukong river,' or 'Jinx farms bot quest while Ornn keeps TP for the next grouped fight.'",
      drill: "After each game, compare your intended two-player win condition with the first three fights. Mark whether the draft failed, the execution failed, or you fought outside the drafted window."
    },
    {
      id: "draft-pick-order",
      label: "02 / PICK ORDER",
      title: "Trade positions for useful information",
      read: "A late pick has value only if it changes your answer to the enemy draft. Before swapping pick slots, identify which of your two roles has the sharper counterpick risk and what information the later slot will reveal.",
      why: "Top matchups can trap a melee champion for many waves; an ADC slot can reveal lane dive or range; mid-jungle pairs can lose every river contest if both are countered. Spend last pick where it changes the plan most.",
      mechanic: "Name a blind pick and a conditional pick before trading. Keep a short swap script: 'I can blind X. You hold Y for their reveal. If they show Z, we switch to the safe line.'",
      art: "Ornn",
      one: {
        mid: "If you blind Vex or Xerath, tell Duo Two the lane that can punish you and the earliest wave you expect to move. If the enemy mid is still hidden and a counter would remove your river access, request the later slot and keep Ekko/Vex as the conditional answer.",
        adc: "Blind Jinx only when the team already offers peel or the enemy dive is limited; keep the later ADC slot if bot matchup and enemy engage are unresolved. If you see a hostile dive lane, tell Duo Two that bot is a cover lane rather than a forced early kill lane."
      },
      two: {
        jungle: "Wukong can often lock early if his engage and physical damage already serve the draft; Rammus needs proof that enemy damage and attack patterns justify him. Tell Duo One whether you need mid priority for the first contested river or can path away from an unfavorable 2v2.",
        top: "Ask for the later slot when the enemy top matchup could deny your first three waves or make Garen's side plan nonviable. If forced to blind, prefer your practiced Ornn/Garen safe line, then explicitly ask Duo One which wave and objective you can synchronize around."
      },
      sync: {
        mj: "Before trades lock, compare the unknown enemy Mid and Jungle; whoever's counter would remove the first river move gets the later slot, and the other names a blind pick now.",
        mt: "Before trades lock, preserve Top's last pick when the lane matchup is unknown; if Mid takes last pick instead, Top calls a low-risk first-three-wave plan before loading screen.",
        aj: "Before trades lock, let Jungle blind Wukong if ADC needs to see enemy support and dive; if the enemy jungle is unknown and Rammus is conditional, hold Jungle instead and give ADC the safe Jinx line.",
        at: "Before trades lock, let Top use the later slot when his melee matchup is hidden unless the enemy bot duo is still unrevealed and Jinx cannot safely blind; the early picker states a weak-side fallback."
      },
      go: "The later slot has a specific decision it will answer, and the earlier picker has a practiced blind option.",
      abort: "You trade solely to chase a theoretical counter but the earlier picker is pushed onto an unpracticed champion.",
      fallback: "Keep comfort picks and change lane posture, jungle route, or grouping plan after seeing the matchup.",
      convert: "After draft, record the revealed matchup that justified the swap and the exact first-wave or first-clear adjustment it caused.",
      drill: "Review five drafts: did the later pick change champion, rune, route, or win condition? If not, that pick slot was probably spent elsewhere next time."
    },
    {
      id: "draft-ban-protocol",
      label: "03 / TWO BANS, ONE PLAN",
      title: "Ban the answer to your shared win condition",
      read: "Do not ban the champion who annoyed one of you last game. Ask which opponent can break the pair's first planned play or late fight, then compare that threat with the matchup each player personally cannot execute.",
      why: "A ban is highest value when it protects both players' coordination window, such as a map-moving mid against Mid + Jungle or a hook lane that denies Jinx's bot quest and Jungle's dragon access.",
      mechanic: "Use two voice calls: 'Our pair wins through ___; their best denial is ___.' Then 'If that ban is unavailable, the second ban protects ___.' Refresh by patch and by your actual loss review.",
      art: "Jinx",
      one: {
        mid: "For Vex/Ekko, consider a map mover such as Twisted Fate if his side-lane arrival repeatedly beats your crash and follows. For Xerath, protect the immobile artillery plan against the actual assassin or hard-engage threat that your replays show you cannot respect; do not spend fear or stun on wave before a known 2v2.",
        adc: "For Jinx, consider Blitzcrank when hook threat removes your ability to farm and your support cannot protect the wave. For Veigar bot, identify whether the real denial is a dive, heavy range, or a support matchup, then ask Duo Two to protect the lane's first safe recall."
      },
      two: {
        jungle: "Consider Lillia when her movement and sleep can deny both Wukong and Rammus entry; 26.20 buffed her ultimate's later-rank sleep. If your actual losses come from lanes that cannot move, ban or route around that lane's best denial instead of treating every jungle matchup as a solo duel.",
        top: "Consider Kayle if she repeatedly survives Ornn/Garen's pressure and outscales the chosen side plan. If a more immediate ranged or lane-control counter prevents your Top quest and leaves Duo One exposed, protect the first three waves instead."
      },
      sync: {
        mj: "During bans, Duo One names the mid who can move first; Duo Two names the jungle that beats the planned 2v2, and you ban whichever removes the shared first-river play.",
        mt: "During bans, Mid protects the map from an unanswerable roam while Top protects his first-wave lane access; pick the ban that keeps both lanes able to sync for the first top-side play.",
        aj: "During bans, ADC names the support/dive that removes safe bot farm, Jungle names the objective denial; ban the one that prevents both bot priority and the first planned bot-side move.",
        at: "During bans, Top names the side-lane matchup that can pin him, ADC names the engage that kills her when Top is away; select the threat that breaks the intended center-and-side setup."
      },
      go: "You can say what the ban protects in a specific pair scenario, not merely its popularity or win rate.",
      abort: "The proposed ban solves a solo matchup but leaves the duo's only carry or only engage path exposed.",
      fallback: "If the target is already banned, protect the second shared failure mode; if both are open, draft a lower-risk route and wave plan instead of overpromising a counterpick.",
      convert: "In loading screen, name the remaining threat, its first dangerous timing, and the wave or vision adjustment both players will make.",
      drill: "Tag losses by actual cause: lane denial, failed 2v2, uncontested roam, or late engage. Reassign bans only when the same threat recurs across games."
    }
  ],

  wave: [
    {
      id: "wave-hold",
      label: "01 / HOLD + FREEZE",
      title: "Make the enemy cross the lane",
      read: "Enemy minions outnumber yours and the wave is coming toward your turret; your pair wants the opponent to walk forward into a gank or lose last hits. Mid's short lane makes a freeze brief and easy to break, while side lanes can hold longer.",
      why: "A controlled hold reduces your exposure while extending the opponent's path to safety. It is useful only if your duo can actually punish the overstep or protect the hold.",
      mechanic: "Last-hit and trim enemy minions only enough to keep the meeting point just outside turret range. Recheck each reinforcement wave; fixed 'leave three casters' rules are unreliable when wave size, damage, and position change.",
      art: "Rammus",
      one: {
        mid: "Tell Duo Two exactly which incoming wave you can hold and whether you have CC, mana, and health to follow. With Vex, preserve fear if the gank is one wave away; with Xerath, do not tank a large wave just to imitate a top-lane freeze.",
        adc: "Ask your support to last-hit and hold the wave near your turret rather than auto-pushing it out; ping the intent if voice is unavailable. As Jinx or Veigar, keep enough health and an escape route to survive until Duo Two arrives, and do not walk beyond your support to maintain a freeze."
      },
      two: {
        jungle: "Call the camp after which you can actually reach the lane, then approach through unseen terrain only after the enemy has crossed the lane midpoint. If the enemy can crash before you arrive, cover the crash or countergank instead of asking Duo One to tank minions for a failed gank.",
        top: "If your own lane is holding, tell Duo One when the enemy top must walk up and whether your allied jungler is nearby; do not abandon an unrecoverable wave to help a distant fight. If Duo One is ADC, report enemy-jungle sightings top so bot can take a safe wave of pressure, not a blind dive."
      },
      sync: {
        mj: "One wave before Duo Two finishes the adjacent camp, Mid calls 'hold this wave, fear/stun ready'; Jungle confirms arrival before Mid spends health preserving it.",
        mt: "Before the first top-side river decision, both solo laners state whether their wave is held or moving; if both are held, Mid does not promise a top collapse and Top protects the wave.",
        aj: "One wave before the bot-side camp ends, ADC calls the held wave and support's position; Jungle enters only after the enemy bot pair commits forward and the 3v3 is favorable.",
        at: "At each new side-lane wave, Top reports a hold or crash and ADC reports bot safety; if enemy jungle appears Top, ADC can take one safe push with support before resetting the map."
      },
      go: "Wave stays outside tower, opponent must cross center, and both duo players can arrive with usable health, cooldowns, and numbers.",
      abort: "The wave will crash before help arrives, the enemy can break the hold for free, or a larger enemy minion stack makes the fight lose even with your jungler.",
      fallback: "Catch under turret, preserve XP, and ask Duo Two for cover on the next outgoing crash; give up the gank window rather than lose the wave and a death.",
      convert: "After a successful gank, ask the wave owner whether to crash together or leave a safe hold; then turn the kill into recall, plates, vision, or a nearby objective.",
      drill: "Pause each failed gank 10 seconds before arrival. Was the wave still outside tower, and did both players have enough HP and CC to finish?"
    },
    {
      id: "wave-slow-push",
      label: "02 / SLOW PUSH",
      title: "Build a wave for the next play",
      read: "Your wave has a small advantage and the next action is one or two waves away. You want a stacked crash that forces the opponent to clear while your pair moves, recalls, wards, or attacks a tower.",
      why: "A wave is a temporary third teammate: it protects trades now and can pin the opponent later. Since standard-SR waves accelerate at 14 and 30 minutes, judge the next meeting point rather than memorizing old-minute scripts.",
      mechanic: "Last-hit while keeping a modest allied minion advantage; remove enemy backline minions only as needed so your wave grows without racing ahead. Convert to a fast crash before leaving; a half-pushed wave stranded outside enemy tower can be held against you.",
      art: "Garen",
      one: {
        mid: "Ask where Duo Two's path ends, then build one mid wave before a planned river move rather than spending every spell for instant push. If the enemy can clear faster or your next wave is unsafe, call that early so the pair downgrades the play.",
        adc: "With support, build the bot wave while Duo Two clears toward your side or while Top prepares opposite-side pressure. Protect health and Flash during the stack; the big wave is only useful if you survive to crash it and can arrive at the objective after."
      },
      two: {
        jungle: "Tell Duo One which quadrant you will finish in and whether the stack is for a gank, river control, or a protected recall. Clear toward that side so you arrive as the stack reaches the enemy turret; do not invade earlier and demand a laner leave before the crash.",
        top: "Build your side wave before the objective that Duo One will pressure, then say whether you will walk, Teleport, or continue taking the side tower. If you cannot finish the stack before enemies disappear, stop at the vision line and warn Duo One not to start an unsupported fight."
      },
      sync: {
        mj: "As Jungle begins the final camp toward a river play, Mid starts a small slow push; crash the next wave together before either crosses into fog.",
        mt: "Top begins the side stack roughly two waves before the planned objective; Mid times a later crash so enemy Top and Mid must clear at the same moment.",
        aj: "ADC and support begin the bot stack as Jungle paths through the nearby quadrant; Jungle arrives for the crash, then both move into river after the enemy bot is pinned.",
        at: "Top begins the opposite-side stack before ADC needs central pressure; ADC crashes mid/bot after Top's wave draws an answer, then calls whether Top should Teleport or keep hitting."
      },
      go: "Your built wave will reach the enemy turret before the contested play, and both players can move or pressure on the same beat.",
      abort: "Enemy jungle/support can collapse on the stack, your partner is pathing away, or the enemy clears it before it creates a move window.",
      fallback: "Shorten the plan: safely thin and crash one wave with cover, or let the wave return and collect it without contesting the objective.",
      convert: "After the crash, use the forced enemy clear for one specific gain: safe ward, invade with numbers, recall, tower damage, or objective start with lane priority.",
      drill: "Review whether the stacked wave actually hit tower before the duo moved. Record every river move made while the wave was still catchable by the opponent."
    },
    {
      id: "wave-crash",
      label: "03 / FAST PUSH + CRASH",
      title: "Buy the pair a move timer",
      read: "The enemy has recalled, died, or must answer another play, or your pair needs first move to a nearby fight. A complete crash into turret is the exit ticket; simply standing far forward is not lane priority.",
      why: "When the enemy must last-hit under turret, your pair can reach river first without giving away as much lane gold and XP. A failed crash can let the opponent hold the wave and force you to choose between the objective and your lane.",
      mechanic: "Clear the enemy wave quickly and escort your surviving minions all the way into turret range. Check enemy mid/support/jungle position before following the wave; use Jungle or Top cover if the crash point is exposed.",
      art: "Vex",
      one: {
        mid: "Name the exact wave you can clear and the spell you need afterward for the fight; Vex should not spend fear if the next river 2v2 needs it. Once the wave touches tower, move through the side where Duo Two is present; if Xerath cannot enter fog, provide ranged cover and vision pings instead.",
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
      go: "The full allied wave reaches turret, the route is visible or covered, and both players know the same destination.",
      abort: "Enemy can freeze outside tower, you lack mana/health to finish, or a missing enemy makes the route to the crash lethal.",
      fallback: "Keep the wave on your safe side and tell the partner to trade camps, reset, or defend; do not spend a life to manufacture priority.",
      convert: "After moving, choose one result and return for the bounce: objective, ward line, pick, plate/tower, or synchronized recall.",
      drill: "On each roam replay, freeze the frame as Duo One leaves lane. Did allied minions actually enter turret range, and which enemy could follow first?"
    },
    {
      id: "wave-bounce",
      label: "04 / BOUNCE + SHARED RESET",
      title: "Spend gold without losing the map",
      read: "Your completed crash will cause the next enemy wave to move toward you; the pair has a recall or movement window. This is strongest when both players have gold to spend before the same objective or major fight.",
      why: "Two players returning with items at different times turn a 2v2 into staggered 1v2s. A synchronized reset preserves lane farm and objective arrival, but only if the wave really crashes.",
      mechanic: "Verify that the whole wave enters turret, then recall while the opponent clears; buy toward the next fight and run toward the same side. Re-evaluate on return: if the opponent held the wave outside tower, the bounce did not happen.",
      art: "Ekko",
      one: {
        mid: "Say 'crashed, basing, back on the next wave' and mark your purchase or ultimate cooldown for Duo Two. On return, catch the incoming wave before walking to river; do not give the opponent a free plate because your partner is already at the objective.",
        adc: "Use the crashed bot wave to recall with your support when possible, then tell Duo Two the earliest wave and item spike at which you can contest. Jinx's 2026 bot quest rewards lane farming, so do not sacrifice two waves for an unstarted dragon."
      },
      two: {
        jungle: "Finish the nearby camp before the paired reset or cover Duo One's vulnerable recall; shop before beginning the objective setup. Return through the side you agreed in voice, then help secure a safe vision line after Duo One has caught the bounce.",
        top: "Crash your lane before recalling or using Teleport; report your return path and whether Teleport will be available for the upcoming play. If Duo One is ADC, arrange the reset so her central wave is protected when you leave side."
      },
      sync: {
        mj: "After Mid's full crash, both recall within the same wave cycle; Jungle can finish one adjacent camp first only if both still reach the planned river before the enemy.",
        mt: "Top and Mid finish their respective crashes before shopping; on return, Mid catches center while Top goes to the chosen side so both waves are covered before a fight.",
        aj: "ADC's bot crash starts the reset call; Jungle shops after the nearby camp and meets ADC/support at the safe river entrance before dragon setup.",
        at: "Top and ADC each state 'crash complete' before resetting; avoid both leaving an unpushed lane, then arrive together at center or objective with item purchases finished."
      },
      go: "Both crashes are real, purchases matter, and the pair will reach the next play before the opponent can establish vision.",
      abort: "One player is stuck on a held wave, an enemy is already on the objective, or recalling would concede a live tower with no cross-map gain.",
      fallback: "One player catches the immediate wave while the other covers and resets next; choose a later objective entry or trade rather than arrive one by one.",
      convert: "Use the bought items to set vision and contest from a joined position; if enemy has already taken the area, trade their exposed side instead of face-checking.",
      drill: "Mark each major fight where one duo member had unspent gold or was still in base. Trace it back to the wave that should have been crashed first."
    },
    {
      id: "wave-trim-pull",
      label: "05 / TRIM + PULL",
      title: "Protect the wave you cannot fight",
      read: "The enemy is stacking a crash, your partner is not yet in position, or you need to keep minions outside turret briefly. The job is to preserve XP and stop a dive, not to make a glamorous freeze at any cost.",
      why: "A large enemy wave is a combat advantage and dive tool. Trimming it reduces the enemy's protection; briefly drawing aggro can reposition the meeting point, but body-tanking in an unsafe lane turns wave control into a death.",
      mechanic: "Damage the backline from safe range before the stack reaches tower; if alone and safe, briefly draw enemy minions just outside turret until your wave arrives, then drop aggro. Never pull through enemy poke, a missing jungler, or a lane where the enemy can all-in.",
      art: "Xerath",
      one: {
        mid: "Tell Duo Two 'big wave, cannot move' before he enters river, and clear what you can without giving a solo kill. Xerath can trim from range; Vex or Ekko must respect enemy engage and keep a spell for the 2v2 after the wave is safe.",
        adc: "Call the size of the incoming bot wave and ask support to help trim or protect the turret. Do not step beyond the wave for a pulled freeze while enemy support and jungle are missing; if the dive is credible, preserve health and ask Duo Two to cover, not to start dragon."
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
      go: "You can thin safely, have a confirmed cover route, and still keep enough minions alive to control the next meeting point.",
      abort: "Enemy support/jungle is missing, the stacked wave grants lethal dive damage, or you must spend your only escape spell to hold the minions.",
      fallback: "Give up a few last hits, keep experience range where safe, clear under turret, and let the partner secure the opposite-side wave or camp.",
      convert: "Once the dive is denied, crash the outgoing wave with cover, reset together if possible, and use the enemy's wasted time to claim vision or cross-map tempo.",
      drill: "Review every death under a stacked wave. Was the danger visible a wave earlier, and did the second duo player answer with cover or an explicit trade?"
    }
  ],

  windows: [
    {
      id: "window-first-river",
      label: "01 / FIRST RIVER",
      title: "Scuttle is a choice, not a command",
      read: "Standard-SR Scuttle spawns at 2:55, but a spawn timer is not permission to fight. Check mid and adjacent lane wave priority, champion level, HP, cooldowns, enemy support position, and whether both junglers are actually headed to the same side.",
      why: "A scuttle or early invade is a small resource compared with losing a stacked lane wave and giving an enemy 2v2 kill. The pair's edge is deciding the contest before the river collision.",
      mechanic: "At the prior wave, say where each jungler likely ends, which laner moves first, and who wins the first crowd-control chain. If the lane cannot crash, Jungle takes the other crab/camp or plays defense while the laner collects XP.",
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
      go: "The wave is crashed or safely held, your pair arrives together, and the enemy's faster-moving lane or support cannot turn the play against you.",
      abort: "Enemy mid/support can arrive first, Duo One would miss a large wave, or Wukong's pre-6 engage has no reliable follow-up.",
      fallback: "Trade the opposite Scuttle or a safe camp, cover the vulnerable lane, and plan the next river entry after a joint crash.",
      convert: "If river is won, use the first move to place one useful ward, protect the next crash, or set a repeat gank; do not chase into an untracked enemy jungle.",
      drill: "Review the frame 15 seconds before 2:55: which lanes could move, and did your duo choose the same side before contact?"
    },
    {
      id: "window-countergank",
      label: "02 / COUNTERGANK",
      title: "Turn their obvious gank into your numbers",
      read: "An enemy jungler's start, last sighting, or camp timing points to a lane where your side is extended; the wave is about to cross center. The best response may be a shadow, a thinner wave, or an immediate cross-map trade, depending on whether your pair reaches the fight in time.",
      why: "You do not need to guess every path. Calling the likely quadrant one wave early lets Duo One stop walking into the gank while Duo Two decides whether a real 2v2/3v3 can be won.",
      mechanic: "Before the exposed wave, name enemy jungle quadrant, support roam possibility, sums, and who can arrive first. If covering, Duo Two stays unseen until the enemy commits; if trading, Duo One gives space and preserves life.",
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
      go: "The enemy is likely to commit, your partner is within the fight window, allied wave/HP/cooldowns support the turn, and no unseen support makes it a 3v2.",
      abort: "Your partner is one camp or one wave too late, the enemy minion stack makes the fight bad, or the target has already spent the escape spell.",
      fallback: "Live through the gank and trade the opposite camp, ward line, wave, or turret segment; the enemy's revealed location is information to spend, not a reason to chase.",
      convert: "After a won countergank, fix the wave with its owner, then take the nearest guaranteed structure or objective before recalling together.",
      drill: "Tag every gank death with the enemy's last sighting and the first wave where your duo could have made a cover-or-trade call."
    },
    {
      id: "window-enemy-roam",
      label: "03 / ENEMY ROAM",
      title: "Answer the roam before you follow it",
      read: "Enemy Mid or Support vanishes after a crash, but the destination and numbers are uncertain. Following through fog while behind the wave can create two losing lanes instead of one saved lane.",
      why: "Your pair controls the response: warn the target, determine who arrives first, then punish the empty lane or move together through known ground. The information arrives before the champion does.",
      mechanic: "Ping the missing path and likely target immediately. If you can crash and meet your partner on a lit route, follow; otherwise push the abandoned wave, take vision/plate, or defend the threatened lane from a safe angle.",
      art: "Vex",
      one: {
        mid: "State 'mid missing to [side], I can/cannot follow' as soon as the opponent leaves, and ping the destination while you finish the crash. Vex may follow a confirmed fight from a safe angle; Xerath should avoid blind river corridors and use range to defend or punish the mid tower.",
        adc: "If enemy Mid or Support disappears toward bot, back off before they appear and tell Duo Two whether your wave is stuck forward. Jinx and Veigar survive first; afterward, collect the returning wave or push only when Jungle/Top confirms enemy positions."
      },
      two: {
        jungle: "Track the missing champion's likely route and meet Duo One at a safe entrance if you can turn the fight. If you cannot arrive before the enemy, warn and trade their empty quadrant rather than starting an objective while your ADC is being collapsed on.",
        top: "If the roam points top, call your own wave and retreat route so Duo One does not waste a blind rescue. If it points bot, report Teleport availability and whether a warded landing plus enemy commitment makes a real counterplay; otherwise collect your side wave and force an answer."
      },
      sync: {
        mj: "At the missing ping, Mid finishes or catches the current wave while Jungle states the route within one beat; follow only after both can enter the same lit corridor.",
        mt: "When enemy Mid leaves toward Top, Mid pings path immediately and Top falls back before the next top last-hit; after Mid crashes, both decide on defend, follow, or tower trade.",
        aj: "On the first missing ping toward bot, ADC backs to a protected line and Jungle says 'cover now' or 'give wave, I trade' before enemy Mid reaches river.",
        at: "When a roam threatens ADC, Top checks Teleport and landing vision before the enemy reaches bot; if no winning arrival exists, ADC retreats and Top crashes the opposite wave."
      },
      go: "You know the route and target, Duo One's wave is safe, and both partners can arrive before or with the enemy through vision.",
      abort: "Fog hides the opponent, Duo One would lose multiple waves, or the threatened ally has already retreated and there is no fight to join.",
      fallback: "Ping retreat, crash and punish the empty lane, take a safe ward/turret segment, then protect the next wave from the returning roamer.",
      convert: "After the roam fails, take the wave and nearby structure/vision while the enemy travels back; after a defended roam, reset together before the next objective.",
      drill: "For each roam conceded, measure whether the first missing ping happened before the enemy crossed river and whether your chosen punish actually paid more than the lost wave."
    },
    {
      id: "window-kill-conversion",
      label: "04 / KILL CONVERSION",
      title: "Spend the kill on the map",
      read: "One enemy is dead or recalled. The next action depends on wave position, death timer, your pair's health, Smite/Teleport, and whether other enemies can contest; a kill with no conversion is only partial value.",
      why: "In 2026, permanent plates extend partial structure rewards, while team epic monsters are more durable and can trap a low-health pair. Taking the nearest guaranteed gain is stronger than walking to a distant objective after the window closes.",
      mechanic: "Within five seconds, call 'wave first, then [plate/tower/epic/ward/reset].' Crash with the lane owner when needed; choose one result you can finish before enemy respawn, then leave together.",
      art: "Jinx",
      one: {
        mid: "After a mid kill, decide whether to crash for enemy lost XP, take a turret segment, or move with Duo Two to a nearby objective. If the wave is already bouncing toward you, avoid clearing it into a bad position merely because Jungle is still in lane; tell him the exact wave outcome you want.",
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
      go: "A live wave and allied health support the chosen gain, the objective can finish before enemy return, and both players agree on the same target.",
      abort: "No wave can reach a structure, your pair lacks health/Smite, or enemy reinforcements can contest the slower objective before completion.",
      fallback: "Crash for lost enemy XP, collect a safe plate or deep ward, recall together, and return with items for the next contest.",
      convert: "Take the guaranteed structure or epic, then immediately set the next side wave and reset; do not chase another kill while a free tower segment or safe objective is available.",
      drill: "Mark every first kill in replay and write the next map gain. If the answer is 'nothing,' pause five seconds after the kill and choose the better wave-first call."
    }
  ]
};
