# The Duo Protocol

A static, responsive League of Legends duo queue playbook for **Duo One (Mid / ADC)** and **Duo Two (Jungle / Top)**. Choose one of four role pairings once; every chapter updates both players' jobs and their shared call. Desktop uses full-screen chapters with a left rail; mobile stacks the content and scrolls normally.

The guide contains **28 two-player operations** across draft, route × wave, play windows, a 0–45 minute clock, map conversion, and recovery. Every operation has a state read, both players' actions, a spoken sync, go/abort/fallback gates, a conversion target, and a replay check. Coach Depth opens the underlying mechanic and reasoning. The Evidence chapter holds direct sources and the patch 26.20 champion-rate snapshot.

## Run locally

Serve the repository root with any static HTTP server, then open `index.html`. For example:

```sh
npx serve .
```

Vercel can deploy this repository as a **static site** with the root directory and no build command.

## Patch and sources

Reviewed **October 18, 2026** for standard ranked Summoner's Rift on **patch 26.20**. Riot schedules 26.21 for October 21. Champion rates are from Mobalytics Emerald+ ranked solo, all regions, on 26.20. Rates are snapshot data and should be reviewed after each patch. Use Riot's patch notes for current system timings; some evergreen coaching guides retain older exact numbers.

- [Riot 26.20 notes](https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes/)
- [Riot 2026 season systems](https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/)
- [Riot 26.9 wave and quest updates](https://www.leagueoflegends.com/en-gb/news/game-updates/league-of-legends-patch-26-9-notes/)
- [Riot 26.11 mid quest update](https://www.leagueoflegends.com/en-ph/news/game-updates/league-of-legends-patch-26-11-notes/)
- [Riot 26.12 Top Teleport update](https://www.leagueoflegends.com/en-sg/news/game-updates/league-of-legends-patch-26-12-notes/)
- [Riot 26.19 Teleport updates](https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-19-notes/)
- [Riot patch schedule](https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends)
- [Mobalytics tier list](https://mobalytics.gg/lol/tier-list)
- [Mobalytics wave management](https://mobalytics.gg/lol/guides/wave-management)
- [Mobalytics mid map impact](https://mobalytics.gg/lol/guides/4-tips-to-impact-the-map-as-the-mid-laner)
- [Mobalytics gank setup](https://mobalytics.gg/lol/guides/gank-setup)
- [Mobalytics recall timing](https://mobalytics.gg/lol/guides/5-best-recall-timers)
- [Mobalytics split push guide](https://mobalytics.gg/lol/guides/how-to-split-push)
- [Mobalytics warding guide](https://mobalytics.gg/lol/guides/warding-guide)
- [Summoner School: roaming midlane (March 2026)](https://www.reddit.com/r/summonerschool/comments/1rkzstn/roaming_midlane/)
- [Summoner School: midlane fundamentals (August 2026)](https://www.reddit.com/r/summonerschool/comments/1vk44qv/midlane_fundamentals/)
- [Summoner School: ADC mid-game (June 2026)](https://www.reddit.com/r/summonerschool/comments/1u194el/mid_game_adc/)
- [Summoner School: side-lane timing (October 2026)](https://www.reddit.com/r/summonerschool/comments/1x1i5nf/midlane_how_to_farm_in_the_sidelane_without/)
- [Summoner School: mid game conversion (July 2026)](https://www.reddit.com/r/summonerschool/comments/1v2d7xe/how_to_play_midgame/)

The community links identify recurring player questions. The play calls and decision tools are editorial heuristics, not statistical claims. The site links to original guides and discussion threads rather than reproducing their text.

Content is stored in content-early.js and content-late.js; script.js renders the selected pairing and chapter. The pairing is encoded in the pair query parameter (mj, mt, aj, or at), with the chapter in the URL hash.

Champion splash art loads from Riot's Data Dragon CDN. This is an independent fan guide and is not endorsed by Riot Games or Mobalytics.
