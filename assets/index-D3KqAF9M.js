(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const p={title:"Chronicle",subtitle:"Five weeks of building with Claude Code.",description:"A solo developer and an AI pair-programming partner. What happens when you give them a month."},f=[{number:"10+",label:"Claude Personas",icon:"🤖"},{number:"50+",label:"MCP Tools",icon:"🔧"},{number:"8",label:"Projects Shipped",icon:"📦"},{number:"1",label:"Published Addon",icon:"🏆"}],m={intro:"The most interesting thing isn't any single project — it's the system that builds them. An orchestration layer called The Overlord coordinates specialized Claude instances, each with its own persona, domain knowledge, and toolset. One command launches everything.",layers:[{id:"overlord",name:"Overlord",icon:"🏰",subtitle:"Orchestration Layer",description:"A meta-Claude that coordinates specialized project Claudes. Manages shared knowledge, cross-project patterns, and session handoffs through a chain of CLAUDE.md instruction files.",details:["CLAUDE.md instruction chain — global → workspace → project","Handoff system preserves context between sessions","Cross-project knowledge sharing and pattern recognition","Persona assignment and project-specific behavior tuning"]},{id:"personas",name:"Persona Layer",icon:"🎭",subtitle:"10+ Named Instances",description:"Each project gets its own Claude with a name, personality, and domain expertise. They don't just follow instructions — they understand their project deeply.",list:[{name:"Goldsworth",emoji:"🪙",project:"GoldMakersParadise",color:"#e8a948"},{name:"Lucky",emoji:"💰",project:"Sweepsites",color:"#4ecb71"},{name:"Thistle",emoji:"🐛",project:"BugGardenQuest",color:"#6db86d"},{name:"Junk",emoji:"🚀",project:"SalvageRun",color:"#d4634b"},{name:"Volt",emoji:"⚡",project:"SystemForge",color:"#4ba3d4"},{name:"Operator",emoji:"🔄",project:"ClaudeRelay",color:"#4bbcaa"},{name:"Dr. Volatile",emoji:"🧪",project:"EdgeTest",color:"#c4b840"},{name:"Scribe",emoji:"📜",project:"Chronicle",color:"#b8a888"}]},{id:"infrastructure",name:"Infrastructure",icon:"⚙️",subtitle:"The Foundation",description:"The platform layer that makes everything work. MCP tools for system control, persistent memory for continuity, one-command launchers for each project.",components:[{name:"MCP Tool Suite",stat:"50+ tools · 10+ servers",detail:"Browser automation, desktop control, clipboard, notifications, system monitoring, persistent memory, file watching, project management, local AI via Ollama."},{name:"Launcher System",stat:"~/bin/ scripts",detail:"One command per project. Checks ports, detects conflicts, starts servers, opens browsers, launches Claude with full context. See code below."},{name:"Memory Layer",stat:"ChromaDB + auto-memory",detail:"Persistent semantic memory across sessions. Each Claude remembers past work, decisions, and patterns through vector search and auto-memory files."},{name:"Subagent Watchdog",stat:"PID-aware cleanup",detail:"Detects and cleans orphaned Claude subprocesses (~400MB each). Parent chain walking distinguishes active work from abandoned processes."}]}]},y=`#!/bin/bash
# Launcher for Chronicle - Living Portfolio App (Scribe 📜)

PROJECT_DIR=~/workspace/projects/Chronicle
PORT=5200
EXPECTED_DIR=$(realpath "$PROJECT_DIR")

# Check if Claude is already running in this project
EXISTING_CLAUDE=$(pgrep -f "claude" | while read pid; do
    cwd=$(readlink -f /proc/$pid/cwd 2>/dev/null)
    if [ "$cwd" = "$EXPECTED_DIR" ]; then
        echo $pid
        break
    fi
done)

if [ -n "$EXISTING_CLAUDE" ]; then
    echo "📜 Chronicle already has a Claude session running"
    echo "   Switch to that tab instead."
    exit 0
fi

echo "📜 Starting Chronicle..."

# Check if dev server already running on port
if lsof -i :$PORT > /dev/null 2>&1; then
    EXISTING_PID=$(lsof -ti :$PORT | head -1)
    EXISTING_CWD=$(readlink -f /proc/$EXISTING_PID/cwd 2>/dev/null)

    if [ "$EXISTING_CWD" = "$EXPECTED_DIR" ]; then
        echo "   ✓ Dev server already running on port $PORT"
    else
        echo "⚠️  Port $PORT in use by another process"
        exit 1
    fi
else
    echo "🖥️  Starting Vite dev server on port $PORT..."
    cd "$PROJECT_DIR"
    npx vite --host 0.0.0.0 --port $PORT &
    sleep 2
fi

# Open in browser, launch Claude with full context
cmd.exe /c "start http://localhost:$PORT" 2>/dev/null &

cd "$PROJECT_DIR"
source ~/bin/.claude-launcher-common 2>/dev/null && setup_claude_session
claude --dangerously-skip-permissions "$PROJECT_DIR"`,h=[{id:"gmp",name:"GoldMakersParadise",persona:{name:"Goldsworth",emoji:"🪙",color:"#e8a948"},weight:"heavy",tagline:"First real ship. Published on CurseForge.",description:"A WoW TBC Classic addon for tracking gold-making sessions. Monitors income from every source — vendor sales, auction house, mail, looting — and presents it as real-time session data with historical trends and projections.",highlights:["Published on CurseForge with multiple releases","TradeSkillMaster API integration for live market pricing","Mail scanning with fuzzy item name matching","Sales velocity tracking and gold-per-hour projections","Drop journal tracking loot by zone, mob, and item","Minimap button with live session tooltip"],tech:["Lua","WoW API","LibDataBroker","LibDBIcon","TSM AppHelper"],screenshots:[{src:"gmp-ingame-ui.png",caption:"Main tracking interface — session income breakdown by source"},{src:"gmp-curseforge-listing.png",caption:"Live on CurseForge — published addon page"},{src:"gmp-session-summary.png",caption:"Session summary with per-source breakdown"},{src:"gmp-drop-journal.png",caption:"Drop journal — loot tracking by zone and mob"},{src:"gmp-minimap-tooltip.png",caption:"Minimap button with live gold/hour tooltip"}]},{id:"sweepsites",name:"Sweepsites",persona:{name:"Lucky",emoji:"💰",color:"#4ecb71"},weight:"heavy",tagline:"Browser automation at depth.",description:"Automated sweepstakes entry system with a modular collector architecture. Each site gets a custom collector handling login, navigation, and entry. A central dashboard monitors status across all sites with error recovery and retry logic.",highlights:["Collector architecture — each site is a pluggable module","Dashboard showing collected / errored / needs-attention states","Transaction history with search and filtering","Tax estimation module for sweepstakes winnings","Stake.us integration with balance tracking","Multi-site parallel execution with error isolation"],tech:["Node.js","Puppeteer","Express","SQLite","Vanilla JS"],screenshots:[{src:"sweepsites-dashboard-main.png",caption:"Main dashboard — site status overview with collection states"},{src:"sweepsites-collector-running.png",caption:"Collector running — live browser automation"},{src:"sweepsites-tax-estimator.png",caption:"Tax estimation module for winnings reporting"},{src:"sweepsites-transaction-history.png",caption:"Transaction history with filtering"},{src:"sweepsites-stake-dashboard.png",caption:"Stake.us balance and activity dashboard"}]},{id:"lightlark",name:"Lightlark",persona:{name:"Grim",emoji:"🌑",color:"#a07ed4"},weight:"medium",tagline:"A local LLM with a voice of its own.",description:"A persona engine that gives local AI models a consistent character. Grim isn't a Claude operator — he's the product. A local LLM running through Ollama with deep personality prompts, a text cleaning pipeline, fact extraction for persistent memory, and Chinese-to-English translation support.",highlights:["Local LLM via Ollama with persistent character voice","Text cleaning pipeline for natural conversation flow","Fact extraction builds long-term character memory","Chinese-to-English translation layer","Mobile-optimized chat interface","Multiple character art variants with distinct styles"],tech:["Node.js","Ollama","Express","WebSocket","Vanilla JS"],screenshots:[{src:"lightlark-mobile-grim.jpg",caption:"Chatting with Grim — local LLM with persistent character voice"},{src:"lightlark-grim-art-variants.png",caption:"Character art variants — multiple visual styles for Grim"}]},{id:"bgq",name:"BugGardenQuest",persona:{name:"Thistle",emoji:"🐛",color:"#6db86d"},weight:"medium",tagline:"A cozy card game. Built as a gift.",description:"A cozy card/dice garden game built as a gift for a friend. Day/night cycles, a garden that grows as you play, daily challenges, and multiplayer rooms. Not everything is infrastructure — sometimes you build something because someone will smile.",highlights:["Day/night visual cycle with ambient soundtrack","Garden grows based on gameplay decisions","Daily challenge system with unique modifiers","Multiplayer room support for co-op play","Built as a personal gift — not a portfolio piece"],tech:["Vanilla JS","HTML Canvas","CSS Animations","WebSocket"],screenshots:[{src:"bgq-gameplay-day.png",caption:"Daytime gameplay — garden in bloom"},{src:"bgq-title-screen.png",caption:"Title screen with atmospheric lighting"},{src:"bgq-daily-challenge.png",caption:"Daily challenge interface"}]},{id:"salvagerun",name:"SalvageRun",persona:{name:"Junk",emoji:"🚀",color:"#d4634b"},weight:"light",tagline:"The one Dad played.",description:"Space salvage roguelite — Dad's already played this one. The interesting angle isn't the game itself, it's the telemetry system that auto-captures play sessions and posts them to Discord. Dad's sessions are in there too.",highlights:["Auto-telemetry captures every play session","Session data posted to Discord in real-time","Check Discord for Dad's play sessions"],tech:["Vanilla JS","HTML Canvas","Discord Webhooks"],screenshots:[{src:"salvagerun-title-screen.png",caption:"SalvageRun title screen"},{src:"salvagerun-gameplay.png",caption:"Mid-run gameplay — enemies, loot, intensity rising"}]},{id:"systemforge",name:"SystemForge",persona:{name:"Volt",emoji:"⚡",color:"#4ba3d4"},weight:"medium",tagline:"Full hardware dashboard. Every sensor, every control.",description:"A comprehensive system monitoring and control application. CPU core grid, GPU thermals, memory configuration, disk health, network stats, fan curves, power plans, voltage rails — all through LibreHardwareMonitor integration with real-time sensor data.",highlights:["Per-core CPU monitoring with frequency and temperature","GPU controls — power limit, clock locks, fan curves","Memory DIMM configuration and channel detection","System overview with board temps, fan RPMs, voltage rails","Power plan management with preset switching","Process manager with CPU/memory per-process stats"],tech:["Node.js","Express","LibreHardwareMonitor","WMI","Vanilla JS"],screenshots:[{src:"systemforge-cpu-dashboard.png",caption:"CPU dashboard — per-core frequencies, voltages, power draw"},{src:"systemforge-gpu-dashboard.png",caption:"GPU monitoring — temps, clocks, VRAM, power and fan controls"},{src:"systemforge-sys-overview.png",caption:"System overview — fans, board temps, voltage rails, process manager"},{src:"systemforge-memory.png",caption:"Memory tab — DIMM configuration, dual-channel detection"}]},{id:"clauderelay",name:"ClaudeRelay",persona:{name:"Operator",emoji:"🔄",color:"#4bbcaa"},weight:"light",tagline:"Let our AIs talk to each other.",description:"A relay system built with a cousin so their AI instances can communicate across the web. Each person's Claude connects through Discord, and a tether system controls the conversation — free speak mode lets the AIs chat autonomously, manual mode requires click-to-approve each message, and break mode cuts the connection entirely.",highlights:["Cross-web AI-to-AI communication via Discord","Tether system — free speak, manual approve, or break","Built for two people to connect their AI instances"],tech:["Node.js","Discord.js","Chrome DevTools Protocol"],screenshots:[]}],b=[{week:"Week 1",title:"First Contact",text:`First Claude Code session. SalvageRun starts as an experiment — "let's see what this can actually do." Dad plays it.`},{week:"Week 2",title:"The System Emerges",text:"One Claude per project wasn't enough. The Overlord pattern, persona system, and launcher ecosystem take shape. MCP tools start accumulating."},{week:"Week 3",title:"First Ship",text:"GoldMakersParadise published on CurseForge. A real addon, in the wild, with users. Sweepsites collector architecture solidifies."},{week:"Week 4",title:"Full Parallel",text:"Lightlark, BugGardenQuest, SystemForge, ClaudeRelay — all running simultaneously with their own Claude instances. The system proves itself."},{week:"Week 5",title:"Chronicle",text:"This app. Built by Scribe to document everything. The portfolio that's also part of the portfolio."}],u=e=>document.querySelector(e),g=e=>[...document.querySelectorAll(e)];function w(e){return e.split(`
`).map(a=>/^\s*#/.test(a)?`<span class="sh-comment">${a}</span>`:a.replace(/"([^"]*?)"/g,'<span class="sh-string">"$1"</span>').replace(/\b(if|then|else|fi|done|do|while|for|in|echo|exit|cd|source|export|read|pgrep|lsof|sleep|npx)\b/g,'<span class="sh-keyword">$1</span>').replace(/(\$\w+|\$\{[^}]+\})/g,'<span class="sh-var">$1</span>')).join(`
`)}function k(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $(){return`
    <nav class="nav" id="nav">
      <div class="nav-inner">
        <a href="#top" class="nav-brand">Chronicle</a>
        <div class="nav-links">
          <a href="#system" class="nav-link" data-section="system">System</a>
          <a href="#projects" class="nav-link" data-section="projects">Work</a>
          <a href="#journey" class="nav-link" data-section="journey">Journey</a>
        </div>
      </div>
    </nav>
  `}function j(){return`
    <section class="hero" id="top">
      <div class="hero-content">
        <p class="hero-label">Portfolio — February 2026</p>
        <h1 class="hero-title">${p.title}</h1>
        <p class="hero-subtitle">${p.subtitle}</p>
        <p class="hero-description">${p.description}</p>
      </div>
      <div class="hero-stats">
        ${f.map(e=>`
          <div class="stat reveal">
            <span class="stat-number">${e.number}</span>
            <span class="stat-label">${e.label}</span>
          </div>
        `).join("")}
      </div>
      <div class="hero-scroll-hint">
        <span class="scroll-text">The system</span>
        <svg class="scroll-arrow" width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 4 L8 18 M2 14 L8 20 L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </section>
  `}function C(){const e=m.layers;return`
    <section class="section" id="system">
      <div class="section-header reveal">
        <h2 class="section-title">The System</h2>
        <p class="section-intro">${m.intro}</p>
      </div>

      <div class="arch-diagram">
        ${x(e[0])}
        <div class="arch-connector"><div class="arch-connector-line"></div></div>
        ${L(e[1])}
        <div class="arch-connector"><div class="arch-connector-line"></div></div>
        ${S(e[2])}
      </div>

      <div class="arch-screenshot reveal">
        <img
          src="/screenshots/architecture-multi-claude-terminals.png"
          alt="Multiple Claude instances running in parallel"
          loading="lazy"
          class="arch-screenshot-img clickable-img"
          data-caption="Multiple Claude personas running simultaneously — each in its own terminal with project context"
        />
        <p class="arch-screenshot-caption">Multiple Claude personas running simultaneously — each with its own project context</p>
      </div>

      <div class="terminal-block reveal">
        <div class="terminal-header">
          <div class="terminal-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <span class="terminal-title">~/bin/chronicle — actual launcher script</span>
        </div>
        <pre class="terminal-body"><code>${w(k(y))}</code></pre>
      </div>

      <p class="arch-footnote reveal">Every project has one of these. Type <code>salvagerun</code>, <code>sweepsites</code>, or <code>bgq</code> — and the entire environment spins up.</p>
    </section>
  `}function x(e){return`
    <div class="arch-layer reveal" data-layer="${e.id}">
      <div class="arch-node arch-node-primary">
        <span class="arch-node-icon">${e.icon}</span>
        <div class="arch-node-text">
          <span class="arch-node-name">${e.name}</span>
          <span class="arch-node-sub">${e.subtitle}</span>
        </div>
      </div>
      <p class="arch-layer-desc">${e.description}</p>
      <ul class="arch-details">
        ${e.details.map(a=>`<li>${a}</li>`).join("")}
      </ul>
    </div>
  `}function L(e){return`
    <div class="arch-layer reveal" data-layer="${e.id}">
      <div class="arch-node">
        <span class="arch-node-icon">${e.icon}</span>
        <div class="arch-node-text">
          <span class="arch-node-name">${e.name}</span>
          <span class="arch-node-sub">${e.subtitle}</span>
        </div>
      </div>
      <p class="arch-layer-desc">${e.description}</p>
      <div class="persona-grid">
        ${e.list.map(a=>{const o=h.find(s=>s.persona.name===a.name),t=o?o.id:"";return`
          <div class="persona-chip" style="--pc: ${a.color}" ${t?`data-goto-project="${t}"`:""}>
            <span class="persona-emoji">${a.emoji}</span>
            <span class="persona-name">${a.name}</span>
          </div>
        `}).join("")}
      </div>
    </div>
  `}function S(e){return`
    <div class="arch-layer reveal" data-layer="${e.id}">
      <div class="arch-node">
        <span class="arch-node-icon">${e.icon}</span>
        <div class="arch-node-text">
          <span class="arch-node-name">${e.name}</span>
          <span class="arch-node-sub">${e.subtitle}</span>
        </div>
      </div>
      <p class="arch-layer-desc">${e.description}</p>
      <div class="infra-grid">
        ${e.components.map(a=>`
          <div class="infra-card">
            <div class="infra-card-header">
              <span class="infra-card-name">${a.name}</span>
              <span class="infra-card-stat">${a.stat}</span>
            </div>
            <p class="infra-card-detail">${a.detail}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `}function T(){return`
    <section class="section" id="projects">
      <div class="section-header reveal">
        <h2 class="section-title">The Work</h2>
        <p class="section-intro">What the system produces. Each project was built with its own Claude persona — a dedicated AI partner with domain expertise and project memory.</p>
      </div>
      <div class="projects-list">
        ${h.map(E).join("")}
      </div>
    </section>
  `}function E(e){const a=e.screenshots.length>0,o=a?e.screenshots[0]:null,t=a?e.screenshots.slice(1):[];return`
    <article class="project-card reveal" data-weight="${e.weight}" style="--pc: ${e.persona.color}" id="project-${e.id}">
      <div class="project-card-accent"></div>

      <div class="project-card-preview" data-expand="${e.id}">
        <div class="project-header">
          <div class="project-persona">
            <span class="project-persona-emoji">${e.persona.emoji}</span>
            <span class="project-persona-name">${e.persona.name}</span>
          </div>
          <span class="project-expand-hint">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </div>

        <h3 class="project-name">${e.name}</h3>
        <p class="project-tagline">${e.tagline}</p>

        ${o?`
          <div class="project-screenshot-featured">
            <img
              src="/screenshots/${o.src}"
              alt="${o.caption}"
              loading="lazy"
              class="clickable-img"
              data-caption="${o.caption}"
              data-gallery="${e.id}"
              data-index="0"
            />
          </div>
        `:""}
      </div>

      <div class="project-card-details">
        <p class="project-description">${e.description}</p>

        <div class="project-highlights">
          ${e.highlights.map(s=>`
            <div class="highlight-item">
              <span class="highlight-marker"></span>
              <span>${s}</span>
            </div>
          `).join("")}
        </div>

        <div class="project-tech">
          ${e.tech.map(s=>`<span class="tech-tag">${s}</span>`).join("")}
        </div>

        ${t.length>0?`
          <div class="project-screenshot-strip-wrap">
            <div class="project-screenshot-strip">
              ${t.map((s,n)=>`
                <div class="screenshot-thumb">
                  <img
                    src="/screenshots/${s.src}"
                    alt="${s.caption}"
                    loading="lazy"
                    class="clickable-img"
                    data-caption="${s.caption}"
                    data-gallery="${e.id}"
                    data-index="${n+1}"
                  />
                </div>
              `).join("")}
            </div>
            <div class="screenshot-strip-fade"></div>
          </div>
        `:""}
      </div>
    </article>
  `}function P(){return`
    <section class="section" id="journey">
      <div class="section-header reveal">
        <h2 class="section-title">The Journey</h2>
        <p class="section-intro">Five weeks. Zero prior Claude Code experience. This is the timeline.</p>
      </div>
      <div class="timeline">
        ${b.map((e,a)=>`
          <div class="timeline-item reveal" style="--delay: ${a*80}ms">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-week">${e.week}</span>
              <h3 class="timeline-title">${e.title}</h3>
              <p class="timeline-text">${e.text}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `}function M(){return`
    <footer class="footer">
      <div class="footer-mobile reveal">
        <img
          src="/screenshots/mobile-claude-termius.jpg"
          alt="Running Claude from a phone via Termius SSH"
          loading="lazy"
          class="footer-mobile-img clickable-img"
          data-caption="Claude Code running from a phone via Termius SSH — the system works from anywhere"
        />
        <p class="footer-mobile-caption">The system works from anywhere. Claude Code via Termius SSH on a phone.</p>
      </div>
      <div class="footer-content reveal">
        <p class="footer-line">Built by Scribe <span class="footer-emoji">📜</span></p>
        <p class="footer-sub">Vanilla JS. No frameworks. The app is part of the portfolio.</p>
        <div class="footer-meta">
          <a href="https://github.com/stormgraser-ux" class="footer-link" target="_blank" rel="noopener">GitHub</a>
          <span class="footer-sep">·</span>
          <span class="footer-date">February 2026</span>
        </div>
      </div>
    </footer>
  `}function I(){const e=u("#app");e.innerHTML=`
    ${$()}
    <main class="main">
      ${j()}
      ${C()}
      ${T()}
      ${P()}
      ${M()}
    </main>
  `,D(),A(),R(),G(),B(),F()}function D(){const e=new IntersectionObserver(o=>{o.forEach(t=>{if(t.isIntersecting){const s=t.target.style.getPropertyValue("--delay")||"0ms";t.target.style.transitionDelay=s,t.target.classList.add("revealed"),e.unobserve(t.target)}})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});g(".reveal").forEach(o=>e.observe(o));const a=u(".persona-grid");if(a){const o=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(s.target.querySelectorAll(".persona-chip").forEach((i,c)=>{setTimeout(()=>i.classList.add("shimmer"),c*100)}),o.unobserve(s.target))})},{threshold:.3});o.observe(a)}}function A(){document.addEventListener("click",e=>{const a=e.target.closest(".clickable-img");if(!a)return;const o=a.src,t=a.dataset.caption||"",s=a.dataset.gallery,n=parseInt(a.dataset.index??-1);let i=[{src:o,caption:t}];if(s){const c=h.find(l=>l.id===s);c&&(i=c.screenshots.map(l=>({src:`/screenshots/${l.src}`,caption:l.caption})))}O(i,n>=0?n:0)})}function O(e,a){let o=a;const t=document.createElement("div");t.className="lightbox";function s(){const r=e[o],d=e.length>1;t.innerHTML=`
      <div class="lightbox-backdrop"></div>
      <div class="lightbox-content">
        ${d?`<button class="lightbox-nav lightbox-prev" ${o===0?"disabled":""}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>`:""}
        <div class="lightbox-image-wrap">
          <img src="${r.src}" alt="${r.caption}" class="lightbox-image" />
          ${r.caption?`<p class="lightbox-caption">${r.caption}</p>`:""}
          ${d?`<p class="lightbox-counter">${o+1} / ${e.length}</p>`:""}
        </div>
        ${d?`<button class="lightbox-nav lightbox-next" ${o===e.length-1?"disabled":""}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>`:""}
      </div>
      <button class="lightbox-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    `}s(),document.body.appendChild(t),document.body.style.overflow="hidden",requestAnimationFrame(()=>t.classList.add("lightbox-open"));function n(){t.classList.remove("lightbox-open"),document.body.style.overflow="",setTimeout(()=>t.remove(),250)}t.addEventListener("click",r=>{r.target.closest(".lightbox-prev")&&o>0?(o--,s()):r.target.closest(".lightbox-next")&&o<e.length-1?(o++,s()):(r.target.closest(".lightbox-close")||r.target.closest(".lightbox-backdrop"))&&n()});let i=0;t.addEventListener("touchstart",r=>{i=r.touches[0].clientX},{passive:!0}),t.addEventListener("touchend",r=>{const d=r.changedTouches[0].clientX-i;Math.abs(d)>60&&(d>0&&o>0?(o--,s()):d<0&&o<e.length-1&&(o++,s()))},{passive:!0});function c(r){r.key==="Escape"&&n(),r.key==="ArrowLeft"&&o>0&&(o--,s()),r.key==="ArrowRight"&&o<e.length-1&&(o++,s())}document.addEventListener("keydown",c),t.addEventListener("remove",()=>document.removeEventListener("keydown",c));const l=new MutationObserver(()=>{document.body.contains(t)||(document.removeEventListener("keydown",c),l.disconnect())});l.observe(document.body,{childList:!0})}function R(){const e=["system","projects","journey"],a=g(".nav-link"),o=new IntersectionObserver(n=>{n.forEach(i=>{if(i.isIntersecting){const c=i.target.id;a.forEach(l=>{l.classList.toggle("active",l.dataset.section===c)})}})},{threshold:0,rootMargin:"-30% 0px -60% 0px"});e.forEach(n=>{const i=document.getElementById(n);i&&o.observe(i)});let t=0;const s=u("#nav");window.addEventListener("scroll",()=>{const n=window.scrollY;s.classList.toggle("nav-scrolled",n>80),n>400?s.classList.toggle("nav-hidden",n>t&&n-t>5):s.classList.remove("nav-hidden"),t=n},{passive:!0})}function G(){document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();const o=document.querySelector(a.getAttribute("href"));o&&o.scrollIntoView({behavior:"smooth",block:"start"})})}function B(){document.addEventListener("click",e=>{if(e.target.closest(".clickable-img"))return;const a=e.target.closest(".project-card-preview");if(!a)return;const o=a.closest(".project-card");o&&v(o)})}function v(e,a=!1){const o=e.classList.contains("expanded");if(a&&o)return;const t=e.querySelector(".project-card-details");if(t)if(o&&!a)t.style.maxHeight=t.scrollHeight+"px",requestAnimationFrame(()=>{t.style.maxHeight="0px"}),e.classList.remove("expanded");else{e.classList.add("expanded"),t.style.maxHeight=t.scrollHeight+"px";const s=()=>{t.style.maxHeight="none",t.removeEventListener("transitionend",s)};t.addEventListener("transitionend",s)}}function F(){document.addEventListener("click",e=>{const a=e.target.closest("[data-goto-project]");if(!a)return;const o=a.dataset.gotoProject,t=document.getElementById(`project-${o}`);t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{v(t,!0),t.classList.add("highlight-pulse"),setTimeout(()=>t.classList.remove("highlight-pulse"),800)},400))})}I();
