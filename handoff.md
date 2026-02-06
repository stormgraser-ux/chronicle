# Chronicle Handoff

## What Is This

A living portfolio app to show Dad (software engineer) what Stormgraser has built with Claude Code over the past month. Mobile-first web app, updated every couple months before lunch.

## Key Decisions Made

- **Name**: Chronicle. **Persona**: Scribe 📜
- **Audience**: Dad — professional software engineer. Understands code deeply. Present honestly, let architecture speak.
- **Stack**: Vite + vanilla HTML/CSS/JS. Port 5200.
- **Architecture is the centerpiece**: The individual projects are evidence, but the Overlord system / multi-Claude coordination / MCP tools / launcher ecosystem is the real story.
- **Living document**: Designed to be easily updated with new projects via data files, not hard-coded content.
- **Dark theme, mobile-first, professional but personal.**
- **Skip**: Aether and WorldTreeWardens (barely started).
- **SalvageRun**: Dad played it. Just a reminder card noting the telemetry/Discord integration.

## Priority for First Build (Feb 6, 2026)

Needs to be demo-ready by lunch tomorrow (Feb 7). Focus on:
1. Architecture showcase section (the wow factor)
2. Top project cards (GMP, Sweepsites, Lightlark, BugGardenQuest)
3. Light cards for remaining projects
4. Clean mobile navigation

## Screenshots

User will be adding curated screenshots to `public/screenshots/`. Some already available in `/home/redrumrogue/workspace/screenshots/`.

## Status

- [x] Project scaffolded
- [x] CLAUDE.md written
- [x] Launcher created (`chronicle`)
- [ ] First build — needs Scribe to build the app
- [ ] Screenshots curated and added
- [ ] Tested on phone via Tailscale
