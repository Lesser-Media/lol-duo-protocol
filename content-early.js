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
      read: "Use this as a fast default before queue, then pivot only when the enemy draft or your support changes the matchup. The two bans protect the pair's planned window; neither is automatic every game.",
      why: "A queue card cuts indecision while keeping one clear response to enemy dive, damage profile, lane denial, and first-clear direction.",
      mechanic: "Before the loading screen ends, each player states one champion, one ban, one pivot trigger, and one wave or route sentence. Agree on a no-go condition for the first river fight.",
      art: "Vex",
      one: {
        mid: "Default to practiced Vex when she can punish enemy dashes and follow your partner's setup; pivot to Ekko for a safe side-lane flank or Xerath when allied frontline protects range. Say whether you can move on the first three waves rather than promising river priority from champion select.",
        adc: "Default to Jinx for sustained physical damage; pivot to Veigar bot only when your support can help survive lane and teammates supply physical damage. Tell Duo Two whether the first bot wave will be contested, held, or surrendered to a safe bounce."
      },
      two: {
        jungle: "Default to Wukong for physical engage; pivot to Rammus only against a favorable attack-heavy enemy draft with enough ally damage behind you. Announce the ending side of your first clear and whether that side has lane priority before you contest river.",
        top: "Default to Ornn for a reliable front line; pivot to Garen when the side matchup and team composition reward an opposite-side threat. State your first-three-wave plan and whether early Teleport is selected or must wait for the Top quest."
      },
      sync: {
        mj: "Before first-wave contact, Mid says 'hold or crash by first river'; Jungle says first-clear ending side. If those do not match, skip the first contested 2v2 and trade camps.",
        mt: "Before first-wave contact, Mid and Top each name the first wave they can crash. Do not promise an upper-river collapse until both solo waves and allied Jungle point there.",
        aj: "Before first-wave contact, ADC calls support and bot-wave plan; Jungle names first-clear ending side. If Jungle paths away, ADC plays bot as weak side until a later covered crash.",
        at: "Before first-wave contact, Top and ADC name safe first-three-wave states and likely enemy Jungle side. Top's first crash and ADC's protected bot farm are the paired opening."
      },
      go: "Both players can name their default locks, two justified bans, a pivot trigger, and the same opening wave or route call.",
      abort: "Either default is banned, your support or enemy composition breaks the pair's protection plan, or the first river fight requires priority neither lane can provide.",
      fallback: "Choose practiced pivots, lower the first-fight ambition, and protect assigned-lane experience while waiting for a synchronized crash.",
      convert: "Put the opening sentence into voice before minions meet, then update it after the first enemy Jungle sighting rather than following a locked-in script.",
      drill: "Review the first three minutes: did the two bans protect the actual loss condition, and did both players execute the agreed opening wave and route?"
    },
    {
      id: "draft-win-condition",
      label: "02 / SHARED WIN CONDITION",
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
      label: "03 / PICK ORDER",
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
        jungle: "Wukong can often lock early if his engage and physical damage already serve the draft; Rammus needs proof that enemy damage and attack patterns justify him. Tell Duo One whether you need adjacent-lane priority for the first contested river or can path away from an unfavorable fight.",
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
      label: "04 / TWO BANS, ONE PLAN",
      title: "Ban the answer to your shared win condition",
      read: "Do not ban the champion who annoyed one of you last game. Ask which opponent can break the pair's first planned play or late fight, then compare that threat with the matchup each player personally cannot execute.",
      why: "A ban is highest value when it protects both players' coordination window, such as a map-moving mid against Mid + Jungle or a hook lane that denies Jinx's bot quest and Jungle's dragon access.",
      mechanic: "Use two voice calls: 'Our pair wins through ___; their best denial is ___.' Then 'If that ban is unavailable, the second ban protects ___.' Refresh by patch and by your actual loss review.",
      art: "Jinx",
      one: {
        mid: "For Vex/Ekko, consider a map mover such as Twisted Fate if his side-lane arrival repeatedly beats your crash and follows. For Xerath, protect the immobile artillery plan against the actual assassin or hard-engage threat that your replays show you cannot respect; do not spend fear or stun on wave before a planned fight.",
        adc: "For Jinx, consider Blitzcrank when hook threat removes your ability to farm and your support cannot protect the wave. For Veigar bot, identify whether the real denial is a dive, heavy range, or a support matchup, then tell Duo Two the wave on which you need route cover or opposite-side pressure for a safe recall."
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
      drill: "Tag losses by actual cause: lane denial, failed paired fight, lost cross-map trade, or late engage. Reassign bans only when the same shared threat recurs."
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
        mid: "Tell Duo Two exactly which incoming wave you can hold and whether you have CC, mana, and health to follow. With Vex, preserve fear if the planned fight is one wave away; with Xerath, do not tank a large wave just to imitate a top-lane freeze.",
        adc: "Ask your support to last-hit and hold the wave near your turret rather than auto-pushing it out; ping the intent if voice is unavailable. As Jinx or Veigar, keep enough health and an escape route through the next wave, and do not walk beyond your support to maintain a freeze."
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
        mid: "Ask where Duo Two's next move ends, then build one mid wave before a planned river move rather than spending every spell for instant push. If the enemy can clear faster or your next wave is unsafe, call that early so the pair downgrades the play.",
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
      mechanic: "Clear the enemy wave quickly and escort your surviving minions all the way into turret range. Check enemy mid/support/jungle position before following the wave; use a nearby ally to cover an exposed crash point.",
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
      go: "The full allied wave reaches turret, the route is visible or covered, and both players know their connected next assignments.",
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
      go: "The relevant lane crash is real, both purchases matter, and the pair reaches its connected assignments before the enemy owns the next area.",
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
      why: "A scuttle or early invade is a small resource compared with losing a stacked lane wave and a losing numbers fight. The pair's edge is deciding the contest before the river collision.",
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
        jungle: "Track the missing champion's likely route and meet Duo One at a safe entrance if you can turn the fight. If you cannot arrive before the enemy, warn and trade their empty quadrant rather than starting an objective while Duo One is being collapsed on.",
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
        mid: "After a mid kill, decide whether to crash for enemy lost XP, take a turret segment, or move with Duo Two to a nearby objective. If the wave is already bouncing toward you, avoid clearing it into a bad position merely because an ally is still in lane; tell Duo Two the exact wave outcome you want.",
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
      go: "A live wave and allied health support the chosen gain, it can finish before enemy return, and both players agree on their connected targets.",
      abort: "No wave can reach a structure, the pair lacks required health or summoner spells, or reinforcements can contest the chosen gain before completion.",
      fallback: "Crash for lost enemy XP, collect a safe plate or deep ward, recall together, and return with items for the next contest.",
      convert: "Take the guaranteed structure or epic, then immediately set the next side wave and reset; do not chase another kill while a free tower segment or safe objective is available.",
      drill: "Mark every first kill in replay and write the next map gain. If the answer is 'nothing,' pause five seconds after the kill and choose the better wave-first call."
    }
  ]
};

// The operation shell shows these gates for every pairing. Keep a base field for
// the shared principle, then replace it where the two players occupy opposite
// sides of the map or where Top cannot act as a proximate Jungle substitute.
const duoEarlyPairOverrides = {
  "draft-queue-card": {
    mj: {
      read: "DEFAULT LOCKS: Vex + Wukong. STARTING BANS: Twisted Fate + Lillia when their map move and sleep threaten your shared river; replace either ban with a repeated loss threat from your own games.",
      why: "Vex can save fear for Wukong's arrival, and after level 6 his knockup can start her follow-up. Their early river still depends on Mid's wave, not the picks alone.",
      mechanic: "Mid says the first wave he can crash and whether fear is available; Jungle says first-clear ending side and the camp before arrival. If the routes disagree, call no first-river fight.",
      go: "Both own the picks, enemy Mid can be held or crashed against, and your team has enough sustained damage after the initial engage.",
      abort: "Vex is denied by lane shove, the enemy 2v2 wins before level 6, or Lillia/Twisted Fate can erase the planned river window.",
      fallback: "Try Ekko + Wukong for a viable flank, Xerath + Wukong with real frontline cover, or Rammus only into an attack-heavy enemy draft with ally damage.",
      convert: "Before first-wave contact: 'Mid crash on the wave before your ending camp; same-side river only if I move first.' Recheck after enemy Jungle shows.",
      drill: "At the first river contact, did Mid's wave and Jungle's clear actually meet, and did the bans address the threat that arrived?"
    },
    mt: {
      read: "DEFAULT LOCKS: Vex + Ornn. STARTING BANS: Twisted Fate + Kayle when they respectively break Mid's response or Top's lane pressure; change either ban for the actual matchup.",
      why: "Ornn can anchor Vex's follow-up in grouped fights, while two solo-lane waves can create upper-river priority. The pair's early value is synchronized wave access, not a guaranteed gank.",
      mechanic: "Mid and Top each state first crashable wave, then check allied Jungle's upper-side route. Top says whether Teleport was selected or must wait for quest completion.",
      go: "Both can play their lane matchups and allied composition has physical damage behind Vex + Ornn's magic-heavy pressure.",
      abort: "Top cannot reach a safe first crash, enemy Mid moves first, or the team has too little physical damage for a grouped fight.",
      fallback: "Use Garen if his side matchup and allied frontline support split pressure; use Ekko for a safe side flank or Xerath only with protection.",
      convert: "Before first-wave contact: 'Top crash and Mid crash on the same beat; upper river only if both lanes and our Jungle can move.'",
      drill: "At the first upper-side play, were both solo-lane waves safe, and did Ornn group only when Vex could follow?"
    },
    aj: {
      read: "DEFAULT LOCKS: Jinx + Wukong. STARTING BANS: Blitzcrank + Lillia when hook lane and sleep threaten Jinx's farm and Jungle's entry; adapt to the actual support and enemy draft.",
      why: "Jinx supplies the sustained physical damage Wukong's engage can unlock. Before Wukong has R, the pair plays for bot-wave cover and a supported crash rather than forcing a low-setup gank.",
      mechanic: "ADC calls support matchup, first bot-wave state, and Flash; Jungle calls first-clear ending side and whether the arrival is cover, gank, or river vision.",
      go: "Support can help Jinx farm through the opening lane and Jungle's first path does not demand a bot-side fight without bot priority.",
      abort: "Hook/dive denies safe bot farm, support cannot peel a forward wave, or enemy Mid can collapse before Wukong arrives.",
      fallback: "Keep Jinx and path Jungle for cover; use Rammus only into attack-heavy enemies with enough ally damage. Veigar bot needs safe support lane and physical damage elsewhere.",
      convert: "Before first-wave contact: 'Bot holds if you path away; if you path bot, crash with support before we enter river.'",
      drill: "At the first bot-side play, did ADC's wave and support position justify Jungle's route, and did both bans protect that plan?"
    },
    at: {
      read: "DEFAULT LOCKS: Jinx + Ornn. STARTING BANS: Blitzcrank + Kayle when hook lane denies Jinx's farm and Top cannot pressure Kayle; replace either for the actual draft.",
      why: "Ornn eventually gives Jinx a durable fight front; until they group, their edge is safe bot farm plus a Top wave that forces an answer. They should not treat opposite lanes as instant 2v2 help.",
      mechanic: "ADC calls bot support, wave safety, and Flash; Top calls the first Top crash and whether Teleport is selected or quest-gated. Name the earliest objective they can both reach.",
      go: "Jinx has a protected lane, Ornn can preserve Top XP, and the rest of the team gives the pair a usable route to its first grouped fight.",
      abort: "Top is pinned with no safe wave, ADC lacks bot peel, or enemies can reach Jinx while Ornn is still committed to a distant side lane.",
      fallback: "Use Garen for side pressure only if someone else can frontline for Jinx; use Veigar bot only with physical damage and a survivable support lane.",
      convert: "Before first-wave contact: 'Jinx holds protected bot; Ornn calls his Top crash. We group only after both waves and the route are safe.'",
      drill: "At the first cross-map call, did Top's wave create an answer while ADC stayed protected, or did one push alone into unseen enemies?"
    }
  },
  "draft-win-condition": {
    mj: {
      convert: "At load-in, Mid calls the first movable wave and Jungle states the ending quadrant of his clear; both name the first 2v2 they will accept.",
      drill: "Review your first three Mid + Jungle contacts: did the wave and route match the fight your two picks were drafted to win?"
    },
    mt: {
      mechanic: "Say whether Top will group with Mid or pressure a side wave, then name the wave that lets Mid move toward the same play. Vex + Ornn can group; Ekko + Garen needs the rest of the team to hold center.",
      fallback: "Choose your practiced lane picks, keep the first three waves safe, and plan one top-side collapse only when Mid and Top can both move.",
      convert: "At load-in, Top calls group or side; Mid calls the first wave he can crash. Both name the first top-side window they can reach without donating lane XP.",
      drill: "Review the first top-side play and the first grouped fight: did Top's wave and Mid's arrival support the same draft plan?"
    },
    aj: {
      mechanic: "Say whether Jungle will path bot or leave ADC weak side on first clear; name the bot wave that enables a protected dragon move. Jinx + Wukong wants sustained damage behind engage, while Veigar needs a physical-damage partner elsewhere.",
      fallback: "Choose practiced picks, tell ADC which first clear leaves bot weak side, and prioritize the bot quest wave before any uncertain river fight.",
      convert: "At load-in, ADC calls the first safe bot crash and Jungle calls first-clear ending side; agree whether the first bot play is cover, gank, or dragon vision.",
      drill: "Review the first bot-side play: did Jungle arrive on ADC's crash, and did ADC have the health and support position the draft required?"
    },
    at: {
      mechanic: "Say whether Top will group as Ornn or draw a side answer as Garen; ADC states who protects her while Top is away. Name the wave that will make center and side pressure land together.",
      fallback: "Choose practiced Jinx/Veigar and Ornn/Garen lines, keep both assigned-lane quest waves, and delay cross-map pressure until Top has a safe crash or Teleport.",
      convert: "At load-in, ADC calls the bot safety condition and Top calls his first wave plan; agree when Top will group or create an opposite-side answer.",
      drill: "Review the first two fights ADC joined: did Top's wave or arrival create an advantage, or was ADC left exposed while Top pushed alone?"
    }
  },
  "draft-pick-order": {
    mj: {
      fallback: "Keep the practiced blind champion; Mid lowers first-river ambition while Jungle reroutes away from the losing 2v2.",
      convert: "After the swap, name the enemy mid-jungle pair you learned and set Mid's first crash against Jungle's first-clear side."
    },
    mt: {
      fallback: "Keep practiced lane champions; Top holds an unsafe first wave and Mid cancels the matching upper-river play until both lanes can move.",
      convert: "After the swap, name the Top matchup and Mid wave that will govern the first top-side collapse."
    },
    aj: {
      fallback: "Keep the practiced Jinx/Veigar and Wukong/Rammus lines; ADC plays the exposed wave safely while Jungle paths for cover or trades the far side.",
      convert: "After the swap, name enemy bot dive risk and Jungle's first-clear ending side before choosing a bot crash."
    },
    at: {
      fallback: "Keep practiced ADC and Top picks; Duo Two protects his quest waves while Duo One asks the team for bot cover, then coordinate pressure after the first safe crashes.",
      convert: "After the swap, name Top's lane constraint and ADC's protection need; align the first cross-map pressure wave."
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
      convert: "After the gank, Mid decides hold or crash; Jungle helps only that wave plan, then both reset or take the nearby river gain.",
      drill: "Pause one wave before Jungle's arrival: did Mid still have fear/stun, HP, and a hold outside tower when the gank began?"
    },
    mt: {
      read: "One solo lane holds near turret while the other chooses whether to preserve priority or answer the same upper-river window. Mid and Top cannot treat a distant freeze as a guaranteed gank.",
      why: "A hold denies the opponent a safe last hit, but Mid + Top gain value only when it protects one lane while the other creates a timed collapse or cross-map answer.",
      go: "Top or Mid can hold without losing health, and the other names a crash or allied-jungle arrival on the same wave before proposing a collapse.",
      abort: "Either wave will crash before help can arrive, enemy jungle can make the top-side fight 2v3, or Mid cannot leave his current wave.",
      fallback: "The held player catches under turret; the other crashes safely or asks allied Jungle to cover, then both reset the top-side call after the next wave.",
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
      read: "Top or ADC holds a vulnerable side wave while the other operates across the map. Your duo wins the exchange by preserving the held player's XP and spending the enemy's revealed location on safe pressure elsewhere.",
      why: "The hold forces the enemy to choose between contesting that side lane and answering the other player's wave. It is useful when both players know which side is weak and neither overextends alone.",
      one: "Ask support to hold bot near turret and report the wave to Top. As Jinx or Veigar, preserve health and your exit; when enemy Jungle shows Top, push one safe bot wave with support rather than waiting for Top to arrive.",
      go: "The holding player can farm outside turret safely, and the remote partner has a named safe wave to push if the enemy jungle shows on the held side.",
      abort: "The held player faces a dive or cannot maintain XP safely; the other player has no vision for cross-map pressure.",
      fallback: "Give the unsafe last hits, let the wave crash, and have the remote partner take only the safe opposite-side wave or plate before both recheck enemy positions.",
      convert: "If Top's hold draws enemy Jungle, ADC/support take a safe bot crash; if ADC's hold draws pressure, Top takes a side wave or plate. Both reset once enemies leave vision.",
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
      convert: "ADC/support's stack pins enemy bot while Jungle takes a lit river ward or dragon window; if Mid cannot move, use the crash for recall instead."
    },
    at: {
      read: "Top builds an opposite-side stack while ADC and support prepare a protected center or bot crash. The two waves should land together so the enemy must answer one while the other pressures.",
      abort: "Top's side stack outruns ADC's center crash, enemies vanish into the side fog, or ADC cannot stand forward without protection.",
      fallback: "Top stops at the last safe vision line while ADC collects the next central wave; rebuild two-lane pressure after enemy positions show.",
      convert: "Top's stack draws a defender, then ADC and support crash center; if enemy sends two Top, ADC takes the safe objective space, otherwise Top takes the structure segment.",
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
      read: "Top and ADC each need a full crash on their assigned side before committing to two-lane pressure. A forward wave outside turret is not a move timer for either player.",
      why: "A Top-side crash and an ADC central crash can force two enemies to answer at once. Duo One and Duo Two do not need the same physical route; they need synchronized pressure and a stated regroup condition.",
      fallback: "The exposed wave owner retreats; the remote partner takes only a safe wave or structure segment, then both wait for the next paired crash.",
      convert: "After Top and ADC crashes land together, Top keeps hitting only while ADC is safe in center; if enemies collapse on Top, ADC takes the lit objective space or tower segment.",
      drill: "Freeze the replay when ADC or Top moves forward: had both waves reached turret, and which defender was forced to answer each one?"
    }
  },
  "wave-bounce": {
    mj: {
      go: "Mid's wave fully crashes, Jungle finishes the nearby camp or cover, and both complete purchases before entering the same river side.",
      convert: "Mid catches the returning wave while Jungle meets him from the same-side camp; both spend their bought items to enter the next lit river together."
    },
    mt: {
      why: "Mid and Top must spend gold without leaving both solo lanes open. Synchronized resets create a joint arrival window only after each player has fixed his own wave.",
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
      why: "Top and ADC can shop on the same wave cycle without physically regrouping. The edge is arriving at complementary lanes with purchases ready, not leaving a free tower while both are in base.",
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
      convert: "After the punish, fix the held wave; the partner crashes safely or joins only with a clear route.",
      drill: "One wave before the threatened dive, did Mid and Top choose defend or cross-map trade, and did each keep the required wave?"
    },
    aj: {
      go: "ADC and support can thin without losing peel, and Jungle can reach bot before the stacked wave becomes a dive.",
      convert: "After denying the bot dive, ADC/support call the outgoing crash and Jungle escorts it only if needed; then all three choose dragon vision or reset."
    },
    at: {
      read: "ADC or Top faces a stacked side wave while the other is across the map. The two-player call is defend if Teleport and a winning arrival exist, otherwise survive and trade pressure.",
      go: "The threatened player can keep XP safely, and the remote partner has either a confirmed winning Teleport route or a safe opposite-side wave to spend the enemy's commitment.",
      convert: "The defended player fixes his wave after the failed dive; the remote partner cashes a safe wave or turret segment, then both reset their side assignments.",
      drill: "One wave before the stack hit tower, did the threatened player call danger and did the remote partner choose a real Teleport or safe opposite-side gain?"
    }
  },
  "window-first-river": {
    mj: {
      go: "Mid's wave is crashed or held safely, Jungle and Mid can reach the same 2:55 river, and enemy Mid/support cannot arrive first.",
      abort: "Enemy Mid/support moves first, Mid would lose a large wave, or Wukong has no pre-6 CC chain to win the fight.",
      fallback: "Jungle trades the opposite Scuttle or camp while Mid collects XP, then both plan the next river entry after a full crash."
    },
    mt: {
      read: "At 2:55, Mid and Top judge whether both solo-lane waves allow an upper-river collapse with their allied jungler. They do not own Jungle's path and cannot promise him priority they lack.",
      why: "A Scuttle is worth less than two lost solo-lane quest waves and a losing 3v3. This pair's edge is telling allied Jungle whether upper river actually has two movable lanes.",
      mechanic: "On the prior wave, Mid and Top state who moves first and whether allied Jungle is actually upper side. If either lane is pinned, ping no-contest and collect the assigned-lane XP.",
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
      read: "At 2:55, Top and ADC are on opposite sides, so the pair cannot jointly rush one Scuttle. They compare lane priority, warn the allied jungler which river is actually supported, and spend the other lane's wave safely.",
      why: "A cross-map duo gains an edge by refusing false priority: the supported river gets the contest, while the other lane keeps quest XP and denies a free gank.",
      mechanic: "On the prior wave, Top and ADC each say hold/crash and enemy jungle's likely quadrant. Ping the allied jungler toward the lane that can move; the other player does not leave assigned-lane farm for a distant crab.",
      one: "Tell Top whether bot/support can move after the next wave; if bot is pinned, keep Jinx or Veigar in XP range and ping allied Jungle away from lower river. Use Top's report of upper-side enemy Jungle to take one safe bot push, not a blind dive.",
      go: "One side has real lane priority and allied Jungle can reach that river; the remote partner knows the weak-side wave and survives it.",
      abort: "Neither lane can move, the allied jungler is opposite the proposed contest, or the remote player would lose XP to chase a distant crab.",
      fallback: "Ping the allied jungler to trade the safer river or camp; Top and ADC both collect their lane waves and prepare the next synchronized crash.",
      convert: "After allied river control, the near-side player wards or crashes with Jungle; the remote player turns the enemy's revealed location into a safe wave or plate.",
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
      read: "Enemy Jungle is pathing toward one solo lane; the other solo laner can help only if his wave and travel time allow it. Otherwise they coordinate survival plus a safe cross-map punish.",
      why: "A mid/top pair cannot promise immediate cover across the whole map. Calling the likely quadrant a wave early lets the target retreat while the remote lane prepares a crash or a genuine collapse with allied Jungle.",
      mechanic: "Name the threatened solo lane, enemy jungle quadrant, wave size, and allied Jungle position. The remote player either crashes before rotating on a lit route or stays to punish while the target survives.",
      go: "The remote laner and allied Jungle can reach before the enemy commits, and the threatened wave plus cooldowns support a real turn.",
      abort: "The remote laner cannot crash first, allied Jungle is absent, or the target is already too low to survive the opening damage.",
      fallback: "The target gives unsafe last hits and lives; the remote laner crashes a safe wave or claims a turret segment, then both reset the upper-side plan.",
      convert: "After a won defense, the target fixes his wave while the partner spends the enemy Jungle's reveal on a safe ward, crash, or Top plate.",
      drill: "For each gank on Mid or Top, check the partner's wave one cycle earlier: was a rescue real, or should you have called survival and opposite pressure?"
    },
    aj: {
      go: "Jungle can shadow ADC/support before the enemy arrives, bot wave and peel favor the turn, and enemy Mid cannot join first.",
      abort: "Jungle is one camp late, support cannot follow, or ADC has already lost Flash/cage needed to survive the first engage.",
      convert: "After a won bot countergank, ADC/support set the wave while Jungle checks Mid priority and Smite; take dragon only if reinforcements cannot contest."
    },
    at: {
      read: "Enemy Jungle is pathing toward Top or Bot while your partner is across the map. The default duo action is a warning and survival; a Teleport defense is a special case after Top has access and a winning landing.",
      why: "Cross-map information has value even when neither can arrive in time. The threatened player can deny a kill while the remote player uses the revealed enemy position for a safe opposite-side wave.",
      mechanic: "Before the exposed wave, name the threatened side, enemy jungle quadrant, support roam, and Top's Teleport status. If no winning arrival exists, the target retreats and the remote player crashes only as far as vision permits.",
      go: "Top has a confirmed winning Teleport to a warded bot fight, or the remote player can trade a safe wave/plate while the target survives.",
      abort: "Teleport is unavailable or the landing is blind, the target cannot survive long enough, or the remote wave is exposed to unseen enemies.",
      fallback: "The threatened player gives space and lives; the remote partner takes one safe wave or plate, then both stop pushing until enemy Jungle disappears again.",
      convert: "After a successful defense or trade, the targeted player fixes the wave and the remote partner banks the opposite-side gain; reset side assignments before the next objective.",
      drill: "Tag each Top/Bot gank: did the target call it a wave early, and did the remote partner choose safe pressure instead of a hopeless late rescue?"
    }
  },
  "window-enemy-roam": {
    mj: {
      go: "Mid has a full crash and Jungle meets him on a lit route before the roamer reaches the target; both can win the numbers fight.",
      fallback: "Mid pings retreat and punishes the empty lane while Jungle covers the likely target or takes the vacated quadrant."
    },
    mt: {
      why: "Mid and Top share the warning before they share a fight: the threatened lane backs off, and the other uses its crash to choose a covered rotation or a tower punish.",
      mechanic: "Mid pings enemy path on first missing frame; Top says whether his wave allows defense. Follow only after Mid's full crash and an allied-jungle route, otherwise punish the empty lane.",
      go: "Enemy path points Top, Top has a defendable wave, and Mid can crash then reach through vision before the fight ends.",
      fallback: "Top yields the unsafe last hit while Mid crashes the empty lane and takes a safe plate or ward; both prepare for the roamer's return.",
      convert: "After the roam fails, Top fixes his wave while Mid spends the empty lane on a turret segment; if both defended, reset before the next upper-side move."
    },
    aj: {
      why: "ADC's first job is to survive the incoming roam; Jungle can cover the bot exit or trade the enemy's revealed quadrant. Their joint call happens when the missing ping arrives, before the dive starts.",
      mechanic: "ADC pings enemy Mid/Support missing toward bot and retreats to a protected line. Jungle calls 'cover bot now' if in range, otherwise 'give forward wave; I trade camps.'",
      go: "ADC has a safe retreat and Jungle reaches the bot exit before the roamer, or the pair has agreed on survival plus a safe camp trade.",
      fallback: "ADC/support retreat from the threatened bot wave while Jungle covers the safe exit or trades enemy camps; do not ask ADC to punish the roamer's empty Mid lane.",
      convert: "After the bot dive is avoided, ADC catches the returning wave while Jungle protects the next crash or takes a revealed camp."
    },
    at: {
      why: "The pair's first response is information: ADC retreats before the roamer reaches bot; Top checks if a warded, available Teleport can change the fight or cashes the free opposite-side wave.",
      mechanic: "ADC pings the incoming Mid/Support route and backs to a protected line. Top calls 'TP now' only with a winning landing and otherwise pushes the safe Top wave while ADC survives.",
      go: "ADC has already retreated and Top has a warded, winning Teleport before contact; otherwise the 'go' is Top's safe opposite-side crash while ADC lives.",
      abort: "Enemy route is hidden, Top's Teleport is unavailable or late, or an exposed ADC cannot survive the first engage.",
      fallback: "ADC/support give the forward bot wave and ping retreat; Top uses the enemy's bot commitment for one safe Top wave or plate, then both recheck vision.",
      convert: "After ADC survives, she collects the bounce while Top banks the side gain; if Top's Teleport turned the fight, ADC calls the bot crash before both reset.",
      drill: "For each bot roam, did ADC retreat before contact and did Top choose a real Teleport or safe Top gain rather than an empty chase?"
    }
  },
  "window-kill-conversion": {
    mj: {
      fallback: "Mid crashes for denied XP; Jungle takes a safe nearby ward or camp, then both shop before the next shared river entry."
    },
    mt: {
      mechanic: "Within five seconds, the killing laner calls his wave; the other solo laner calls whether his next crash can create a second demand. Only move together if both waves and allied Jungle permit it.",
      fallback: "The winner crashes for denied XP or a plate while the other keeps his own wave safe; both shop before the next top-side setup.",
      convert: "After Top or Mid secures the guaranteed structure, the other fixes the central/side wave on the same beat; regroup only when a covered route exists.",
      drill: "After each solo-lane kill, did the other player create a matching wave or remain safe, and what structure or objective did the pair actually gain?"
    },
    aj: {
      fallback: "ADC and support crash for denied XP while Jungle takes a safe nearby ward or camp; reset before the next bot-side objective."
    },
    at: {
      mechanic: "Within five seconds of a Top or Bot kill, the winner calls the wave and the remote partner calls the next safe central or side crash. Name the tower or objective these two pressures will threaten at the same time.",
      go: "The winning lane has a live wave, the remote partner can create a safe second demand, and both can bank their gains before enemy respawn.",
      abort: "The winner is too low to hit a structure, the remote wave cannot be pushed safely, or the two gains land at different times so enemies answer both.",
      fallback: "The winner fully crashes for enemy lost XP or a safe plate; the remote player preserves his own wave and both reset the cross-map call.",
      convert: "The killing lane takes its safe structure; the remote player crashes a second safe wave on the same beat. After respawn, Top retreats to vision and ADC returns to protected farm.",
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
