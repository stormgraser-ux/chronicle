(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const k={title:"What I've Been Building",subtitle:"Since I last showed you TheColdBetween, things have grown a bit.",description:"I work with an AI partner called Claude. Together we've built 23 projects in about two months — games, tools, phone apps, and automation that runs on its own."},B=[{number:"23",label:"Projects Built"},{number:"114K",label:"Lines (One Game)"},{number:"93",label:"Daily Automations"},{number:"1",label:"Published Addon"}],T={intro:"I work with an AI called Claude Code. It's like having a programming partner — I describe what I want to build, and Claude writes the code while I guide what it should do. Each project gets its own AI assistant with a name and personality. One command launches everything for that project.",personas:[{name:"Junk",emoji:"🚀",project:"TheColdBetween",color:"#d4634b"},{name:"Goldsworth",emoji:"🪙",project:"GoldMakersParadise",color:"#e8a948"},{name:"Thistle",emoji:"🐛",project:"BugGardenQuest",color:"#6db86d"},{name:"Bridge",emoji:"🌉",project:"Conduit",color:"#7a9ec4"},{name:"Lucky",emoji:"💰",project:"Sweepsites",color:"#4ecb71"},{name:"Volt",emoji:"⚡",project:"SystemForge",color:"#4ba3d4"},{name:"Shard",emoji:"🔸",project:"ShatteredAccord",color:"#c47a4e"},{name:"Yggdrasil",emoji:"🌳",project:"WorldTreeWardens",color:"#5a9e5a"},{name:"Ink",emoji:"✒️",project:"Jot",color:"#8a8aaa"},{name:"Wraith",emoji:"🌊",project:"Meridian",color:"#5a8ac4"},{name:"Operator",emoji:"🔄",project:"ClaudeRelay",color:"#4bbcaa"},{name:"Hunter",emoji:"🎯",project:"Logged",color:"#d45a5a"},{name:"Tav",emoji:"🎲",project:"Tav",color:"#9a7acc"},{name:"Scribe",emoji:"📜",project:"Chronicle",color:"#b8a888"}]},x=[{id:"thecoldBetween",name:"TheColdBetween",persona:{name:"Junk",emoji:"🚀",color:"#d4634b"},weight:"heavy",tagline:"You've seen this one — it's grown.",description:"The space salvage game I showed you before. Since then it's grown to over 114,000 lines of code. You fly through asteroid fields collecting scrap, upgrading your ship, and fighting off pirates. It has a full upgrade system, multiple weapon types, and procedurally generated levels that get harder as you go.",highlights:["Over 114,000 lines of code in a single project","Procedurally generated levels — every run is different","Full ship upgrade system with multiple weapon types","Automatic play session recording that posts to Discord","Started as an experiment — became the biggest project"],tech:["JavaScript","HTML Canvas","Discord Webhooks"],screenshots:[{src:"salvagerun-title-screen.png",caption:"TheColdBetween title screen"},{src:"salvagerun-gameplay.png",caption:"Mid-run gameplay — dodging, shooting, collecting"}]},{id:"gmp",name:"GoldMakersParadise",persona:{name:"Goldsworth",emoji:"🪙",color:"#e8a948"},weight:"heavy",tagline:"Published addon with real users.",description:"A World of Warcraft addon that tracks how much gold you're making per hour. It watches every source of income — selling items, picking up loot, receiving mail — and shows you exactly where your gold is coming from. Published on CurseForge where anyone can download it.",highlights:["Published on CurseForge — a real addon site with real users","Tracks gold income from every source automatically","Shows gold-per-hour with historical trends","Integrates with TradeSkillMaster (a popular WoW market tool)","Multiple releases with bug fixes and new features"],tech:["Lua","WoW API","LibDataBroker","TSM Integration"],screenshots:[{src:"gmp-ingame-ui.png",caption:"Main tracking interface — income breakdown by source"},{src:"gmp-curseforge-listing.png",caption:"Live on CurseForge — published for anyone to download"},{src:"gmp-session-summary.png",caption:"Session summary showing where the gold came from"},{src:"gmp-drop-journal.png",caption:"Tracks every item drop by location"},{src:"gmp-minimap-tooltip.png",caption:"Quick glance at gold per hour from the minimap"}]},{id:"bgq",name:"BugGardenQuest",persona:{name:"Thistle",emoji:"🐛",color:"#6db86d"},weight:"heavy",tagline:"A cozy card game. Built as a gift.",description:"A relaxing card and dice game where you grow a garden by playing cards and rolling dice. Day and night cycles change the mood, your garden grows based on how you play, and there are daily challenges to keep it fresh. Built it as a gift for a friend — not everything has to be infrastructure.",highlights:["Day and night visual cycles with ambient sounds","Your garden grows based on gameplay decisions","Daily challenges with unique twists","Multiplayer rooms for playing together","Built as a personal gift — made someone smile"],tech:["JavaScript","HTML Canvas","CSS Animations","WebSocket"],screenshots:[{src:"bgq-gameplay-day.png",caption:"Daytime gameplay — garden in bloom"},{src:"bgq-title-screen.png",caption:"Title screen with atmospheric lighting"},{src:"bgq-daily-challenge.png",caption:"Daily challenge interface"}]},{id:"conduit",name:"Conduit",persona:{name:"Bridge",emoji:"🌉",color:"#7a9ec4"},weight:"heavy",tagline:"My own phone app. Replaced a paid one.",description:"A phone app that lets me control my computer from anywhere. I was paying $15/month for an app called Termius that did this, so I built my own and cancelled the subscription. Works on any phone browser, connects securely over my own private network, and handles everything the paid app did.",highlights:["Replaced a $15/month subscription with my own app","Works from any phone — just open the browser","Secure connection through a private network (Tailscale)","Handles disconnections and reconnects automatically","Android app version in progress"],tech:["Node.js","Express","WebSocket","PWA","Tailscale"],screenshots:[]},{id:"sweepsites",name:"Sweepsites",persona:{name:"Lucky",emoji:"💰",color:"#4ecb71"},weight:"heavy",tagline:"93 sites. Every day. Automatically.",description:"Enters online sweepstakes for me automatically — 93 different websites, every single day, without me touching anything. Each site gets its own custom automation that handles logging in, navigating to the right page, and entering. A dashboard shows what worked, what needs attention, and tracks everything over time.",highlights:["93 different sweepstakes sites automated","Runs every day completely on its own","Dashboard shows status across all sites at a glance","Tracks winnings and estimates taxes","Each site gets custom automation that handles its quirks"],tech:["Node.js","Playwright","Express","SQLite"],screenshots:[{src:"sweepsites-dashboard-main.png",caption:"Dashboard — status across all 93 sites"},{src:"sweepsites-collector-running.png",caption:"Automation running — entering a sweepstakes"},{src:"sweepsites-tax-estimator.png",caption:"Tax estimation for winnings"},{src:"sweepsites-transaction-history.png",caption:"Transaction history with search and filtering"},{src:"sweepsites-stake-dashboard.png",caption:"Stake.us activity tracking"}]},{id:"grimoire",name:"Grimoire",persona:{name:"Grimoire",emoji:"📖",color:"#8b6ec4"},weight:"medium",tagline:"AI dungeon master. Real dice.",description:'A tabletop RPG engine where an AI plays the dungeon master. Multiple players connect through their browsers, the AI describes the world and responds to what you do, and all dice rolls use real randomness — not AI-generated numbers. Has a "Book" system for building out campaign worlds.',highlights:["AI dungeon master that responds to anything you try","Real dice rolls — cryptographically random, not faked","Multiple players can join through invite codes","Book system for building persistent campaign worlds"],tech:["Node.js","Express","WebSocket","SQLite","Claude API"],screenshots:[{src:"grimoire-campaign-session.png",caption:"Live campaign — the AI dungeon master sets the scene in Ashenmoor"},{src:"grimoire-title-screen.png",caption:"Campaign Engine — title screen"},{src:"grimoire-character-creation.png",caption:"Character creation — AI helps build your backstory and personality"}]},{id:"tav",name:"Tav",persona:{name:"Tav",emoji:"🎲",color:"#9a7acc"},weight:"medium",tagline:"Baldur's Gate 3 companion tool.",description:"A companion app for Baldur's Gate 3 that helps with character builds, gear recommendations, and party strategy. Can connect directly to the game to read what's happening and give real-time advice on what to level into or what gear to look for.",highlights:["Build advisor — knows what to level into next","Gear finder — recommends equipment for your build","Can connect directly to the running game","Knows the BG3 wiki and game mechanics deeply"],tech:["Node.js","Express","BG3 Script Extender","Claude API"],screenshots:[{src:"tav-gear-finder.png",caption:"Gear finder — searchable equipment database with rarity and build tags"},{src:"tav-build-planner.png",caption:"Build planner — full level 1–12 path with class, subclass, and feat choices"}]},{id:"systemforge",name:"SystemForge",persona:{name:"Volt",emoji:"⚡",color:"#4ba3d4"},weight:"medium",tagline:"See everything inside the computer.",description:"A dashboard that shows everything happening inside my computer in real time — every CPU core's temperature and speed, GPU performance, memory usage, fan speeds, power draw. Can also control things like fan curves and power plans.",highlights:["Real-time monitoring of every CPU core","GPU temperature, speed, and power controls","Fan speed monitoring and curve adjustment","Memory configuration and health status"],tech:["Node.js","Express","LibreHardwareMonitor","WMI"],screenshots:[{src:"systemforge-cpu-dashboard.png",caption:"CPU dashboard — every core, temperature, and speed"},{src:"systemforge-gpu-dashboard.png",caption:"GPU monitoring — temps, clocks, power draw"},{src:"systemforge-sys-overview.png",caption:"System overview — fans, temperatures, processes"},{src:"systemforge-memory.png",caption:"Memory configuration and status"}]},{id:"ledger",name:"Ledger",persona:{name:"Ledger",emoji:"📊",color:"#5aaa7a"},weight:"medium",tagline:"Tracks finances. Finds forgotten subscriptions.",description:"A personal finance tracker that can scan Gmail for subscription emails and find recurring charges you might have forgotten about. Categorizes spending, shows trends over time, and gives a clear picture of where money goes.",highlights:["Scans Gmail to find subscription charges","Categorizes spending automatically","Shows spending trends over time","Catches subscriptions you forgot you were paying for"],tech:["Node.js","Express","SQLite","Gmail API"],screenshots:[]},{id:"shatteredaccord",name:"ShatteredAccord",persona:{name:"Shard",emoji:"🔸",color:"#c47a4e"},weight:"light",tagline:"Dark fantasy mobile game.",description:"An idle roguelite game with dark fantasy classes — each with unique abilities that combine in interesting ways. Designed for phone, targeting the Google Play Store.",highlights:["Class-based ability system with unique combos","Designed for mobile — Play Store target"],tech:["JavaScript","Vite","Canvas"],screenshots:[{src:"shatteredaccord-paladin.png",caption:"Paladin class — bless the shattered land, collect shards, ascend"}]},{id:"worldtreewardens",name:"WorldTreeWardens",persona:{name:"Yggdrasil",emoji:"🌳",color:"#5a9e5a"},weight:"light",tagline:"Protect the World Tree.",description:"A survivors-style tower defense game. You play as magical wardens defending a giant tree from waves of enemies. Choose between Wolf and Faeri playstyles. Targeting itch.io release.",highlights:["Two distinct playstyles — Wolf and Faeri","Waves of enemies with escalating difficulty"],tech:["JavaScript","HTML Canvas"],screenshots:[{src:"worldtreewardens-gameplay.png",caption:"Wolf warden defending the World Tree from waves of enemies"},{src:"worldtreewardens-faeri.png",caption:"Faeri warden — fire sprite playstyle"}]},{id:"pantry",name:"Pantry",persona:{name:"Pantry",emoji:"🥘",color:"#d4a04b"},weight:"light",tagline:"Grocery list that syncs across phones.",description:"A shared grocery and meal planning app. Add items from your phone, and it instantly appears on the other phone. Works offline too — syncs up when you're back online.",highlights:["Real-time sync between devices","Works offline — syncs when reconnected","Hosted for free on GitHub Pages"],tech:["JavaScript","Supabase","PWA"],screenshots:[{src:"pantry-grocery-list.png",caption:"Inventory tracker — running low vs. stocked status for everything"},{src:"pantry-shopping-list.png",caption:"Shopping list — organized by aisle with checkboxes"},{src:"pantry-meal-planner.png",caption:"Weekly meal planner with recipe management"}]},{id:"jot",name:"Jot",persona:{name:"Ink",emoji:"✒️",color:"#8a8aaa"},weight:"light",tagline:"Press a key, take a note.",description:"A quick-capture note app. Press Alt+J from anywhere and a little overlay pops up. Type your thought, it saves automatically. Gets out of the way when you're done.",highlights:["One hotkey opens it from anywhere — Alt+J","Saves automatically, disappears when done"],tech:["Electron","JavaScript"],screenshots:[{src:"jot-notes-list.png",caption:"Notes tagged by project — quick search and capture"}]},{id:"monad",name:"Monad",persona:{name:"Monad",emoji:"🔧",color:"#7a7a9a"},weight:"light",tagline:"Manages and updates my other apps.",description:"An app that installs, launches, and auto-updates my other desktop tools. Like a personal app store for the things I build. Keeps everything current without manual work.",highlights:["One place to manage all my desktop tools","Auto-updates from GitHub releases"],tech:["Electron","Node.js","GitHub API"],screenshots:[{src:"monad-dashboard.png",caption:"App manager — install, launch, stop, and update everything from one place"}]},{id:"meridian",name:"Meridian",persona:{name:"Wraith",emoji:"🌊",color:"#5a8ac4"},weight:"light",tagline:"Custom AI chat interface.",description:"A clean chat interface for talking to Claude. Remembers context from past conversations and injects relevant memories automatically — so it feels like talking to someone who knows you.",highlights:["Remembers past conversations and context","Clean, distraction-free chat interface"],tech:["Node.js","Claude CLI","Electron"],screenshots:[{src:"meridian-chat.png",caption:"Clean conversation view with model selector and usage tracking"},{src:"meridian-history.png",caption:"Conversation history — organized by topic with model tags"}]},{id:"clauderelay",name:"ClaudeRelay",persona:{name:"Operator",emoji:"🔄",color:"#4bbcaa"},weight:"light",tagline:"Let our AIs talk to each other.",description:"Built with a cousin so our AI assistants can talk to each other across the internet. A tether system controls the conversation — you can let them chat freely, require approval for each message, or cut the connection.",highlights:["AI-to-AI communication across the web","Three modes — free chat, approval required, or disconnected"],tech:["Node.js","Discord.js","Chrome DevTools"],screenshots:[{src:"clauderelay-launcher.png",caption:"Terminal launcher — Claude and Adam connected via Discord relay"}]},{id:"logged",name:"Logged",persona:{name:"Hunter",emoji:"🎯",color:"#d45a5a"},weight:"light",tagline:"Tracks job applications passively.",description:"A Chrome extension that automatically detects when you submit a job application and logs it. No manual entry — it watches for confirmation pages and records everything for you.",highlights:["Detects job submissions automatically","No manual tracking — it just watches"],tech:["Chrome Extension","JavaScript"],screenshots:[{src:"logged-applications.png",caption:"Application tracker — company, role, source, and salary all captured automatically"},{src:"logged-analytics.png",caption:"Analytics — application velocity, response rates, and source effectiveness"},{src:"logged-settings.png",caption:"Settings — auto-detection for LinkedIn, Indeed, Greenhouse, Lever, and Workday"}]}],W=[{phase:"January",title:"The First Game",text:`Started with TheColdBetween — a space shooter built as an experiment. "Let's see what building with AI actually feels like." It felt like the future.`},{phase:"Early February",title:"The System Takes Shape",text:"One project wasn't enough. Built a system where each project gets its own AI assistant, its own launcher, its own workspace. One command spins everything up."},{phase:"Mid February",title:"First Real Ship",text:"GoldMakersParadise published on CurseForge — a real addon, available for anyone to download. First time putting something out there for real users."},{phase:"Late February",title:"Building Everything",text:"Phone apps, automation, games, browser extensions, finance tools — projects started multiplying. Sweepsites hit 93 daily collectors. TheColdBetween passed 100,000 lines."},{phase:"March",title:"23 Projects and Counting",text:"Two months in. An AI dungeon master, a grocery app, a privacy-first notes app, a game companion tool. Still building. Still learning. Every project teaches something new."}],C=e=>document.querySelector(e),M=e=>[...document.querySelectorAll(e)];function G(){return`
    <nav class="nav" id="nav">
      <div class="nav-inner">
        <a href="#top" class="nav-brand">Chronicle</a>
        <div class="nav-links">
          <a href="#how-it-works" class="nav-link" data-section="how-it-works">How It Works</a>
          <a href="#projects" class="nav-link" data-section="projects">Work</a>
          <a href="#journey" class="nav-link" data-section="journey">Journey</a>
        </div>
      </div>
    </nav>
  `}function H(){return`
    <section class="hero" id="top">
      <div class="hero-content">
        <p class="hero-label">March 2026</p>
        <h1 class="hero-title">${k.title}</h1>
        <p class="hero-subtitle">${k.subtitle}</p>
        <p class="hero-description">${k.description}</p>
      </div>
      <div class="hero-stats">
        ${B.map(e=>`
          <div class="stat reveal">
            <span class="stat-number">${e.number}</span>
            <span class="stat-label">${e.label}</span>
          </div>
        `).join("")}
      </div>
      <div class="hero-scroll-hint">
        <span class="scroll-text">Keep scrolling</span>
        <svg class="scroll-arrow" width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 4 L8 18 M2 14 L8 20 L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </section>
  `}function q(){return`
    <section class="section" id="how-it-works">
      <div class="section-header reveal">
        <h2 class="section-title">How I Work</h2>
        <p class="section-intro">${T.intro}</p>
      </div>

      <div class="persona-grid-standalone reveal">
        <p class="persona-grid-label">Each project has its own AI partner:</p>
        <div class="persona-grid">
          ${T.personas.map(e=>{const s=x.find(t=>t.persona.name===e.name),a=s?s.id:"";return`
            <div class="persona-chip" style="--pc: ${e.color}" ${a?`data-goto-project="${a}"`:""}>
              <span class="persona-emoji">${e.emoji}</span>
              <span class="persona-name">${e.name}</span>
            </div>
          `}).join("")}
        </div>
      </div>
    </section>
  `}function N(){return`
    <section class="section" id="projects">
      <div class="section-header reveal">
        <h2 class="section-title">The Work</h2>
        <p class="section-intro">Everything I've built since TheColdBetween. Tap any card to see more.</p>
      </div>
      <div class="projects-list">
        ${x.map(F).join("")}
      </div>
    </section>
  `}function F(e){const s=e.screenshots.length>0,a=s?e.screenshots[0]:null,t=s?e.screenshots.slice(1):[];return`
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

        ${a?`
          <div class="project-screenshot-featured">
            <img
              src="/screenshots/${a.src}"
              alt="${a.caption}"
              loading="lazy"
              class="clickable-img"
              data-caption="${a.caption}"
              data-gallery="${e.id}"
              data-index="0"
            />
          </div>
        `:""}
      </div>

      <div class="project-card-details">
        <p class="project-description">${e.description}</p>

        <div class="project-highlights">
          ${e.highlights.map(o=>`
            <div class="highlight-item">
              <span class="highlight-marker"></span>
              <span>${o}</span>
            </div>
          `).join("")}
        </div>

        <div class="project-tech">
          ${e.tech.map(o=>`<span class="tech-tag">${o}</span>`).join("")}
        </div>

        ${t.length>0?`
          <div class="project-screenshot-strip-wrap">
            <div class="project-screenshot-strip">
              ${t.map((o,n)=>`
                <div class="screenshot-thumb">
                  <img
                    src="/screenshots/${o.src}"
                    alt="${o.caption}"
                    loading="lazy"
                    class="clickable-img"
                    data-caption="${o.caption}"
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
  `}function D(){return`
    <section class="section" id="journey">
      <div class="section-header reveal">
        <h2 class="section-title">The Journey</h2>
        <p class="section-intro">From one experimental game to 23 projects in two months.</p>
      </div>
      <div class="timeline">
        ${W.map((e,s)=>`
          <div class="timeline-item reveal" style="--delay: ${s*80}ms">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-week">${e.phase}</span>
              <h3 class="timeline-title">${e.title}</h3>
              <p class="timeline-text">${e.text}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `}function O(){return`
    <footer class="footer">
      <div class="footer-content reveal">
        <p class="footer-line">Built with Claude Code</p>
        <div class="footer-meta">
          <a href="https://github.com/stormgraser-ux" class="footer-link" target="_blank" rel="noopener">GitHub</a>
          <span class="footer-sep">·</span>
          <span class="footer-date">March 2026</span>
        </div>
      </div>
    </footer>
  `}function J(){const e=C("#app");e.innerHTML=`
    ${G()}
    <main class="main">
      ${H()}
      ${q()}
      ${N()}
      ${D()}
      ${O()}
    </main>
  `,R(),Y(),K(),Q(),U(),V()}function R(){const e=new IntersectionObserver(a=>{a.forEach(t=>{if(t.isIntersecting){const o=t.target.style.getPropertyValue("--delay")||"0ms";t.target.style.transitionDelay=o,t.target.classList.add("revealed"),e.unobserve(t.target)}})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});M(".reveal").forEach(a=>e.observe(a));const s=C(".persona-grid");if(s){const a=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(o.target.querySelectorAll(".persona-chip").forEach((r,d)=>{setTimeout(()=>r.classList.add("shimmer"),d*100)}),a.unobserve(o.target))})},{threshold:.3});a.observe(s)}}let j=!1;function Y(){document.addEventListener("click",e=>{const s=e.target.closest(".clickable-img");if(!s)return;e.stopPropagation();const a=s.src,t=s.dataset.caption||"",o=s.dataset.gallery,n=parseInt(s.dataset.index??-1);let r=[{src:a,caption:t}];if(o){const d=x.find(c=>c.id===o);d&&(r=d.screenshots.map(c=>({src:`/screenshots/${c.src}`,caption:c.caption})))}z(r,n>=0?n:0)})}function z(e,s){let a=s;j=!0;const t=document.createElement("div");t.className="lightbox";function o(){const i=e[a],l=t.querySelector(".lightbox-image"),h=t.querySelector(".lightbox-caption"),S=t.querySelector(".lightbox-counter"),E=t.querySelector(".lightbox-prev"),$=t.querySelector(".lightbox-next");l&&(l.src=i.src,l.alt=i.caption),h&&(h.textContent=i.caption||""),S&&(S.textContent=`${a+1} / ${e.length}`),E&&(E.disabled=a===0),$&&($.disabled=a===e.length-1)}const n=e[a],r=e.length>1,d=document.createElement("div");d.className="lightbox-backdrop";const c=document.createElement("div");c.className="lightbox-content";let p=null;r&&(p=document.createElement("button"),p.className="lightbox-nav lightbox-prev",a===0&&(p.disabled=!0),p.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',c.appendChild(p));const g=document.createElement("div");g.className="lightbox-image-wrap";const m=document.createElement("img");if(m.src=n.src,m.alt=n.caption,m.className="lightbox-image",g.appendChild(m),n.caption){const i=document.createElement("p");i.className="lightbox-caption",i.textContent=n.caption,g.appendChild(i)}if(r){const i=document.createElement("p");i.className="lightbox-counter",i.textContent=`${a+1} / ${e.length}`,g.appendChild(i)}c.appendChild(g);let u=null;r&&(u=document.createElement("button"),u.className="lightbox-nav lightbox-next",a===e.length-1&&(u.disabled=!0),u.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',c.appendChild(u));const v=document.createElement("button");v.className="lightbox-close",v.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',t.appendChild(d),t.appendChild(c),t.appendChild(v),document.body.appendChild(t),document.body.style.overflow="hidden",requestAnimationFrame(()=>t.classList.add("lightbox-open"));function L(){t.classList.remove("lightbox-open"),document.body.style.overflow="",t.style.pointerEvents="none",setTimeout(()=>{t.remove(),setTimeout(()=>{j=!1},100)},250)}let y=!1;t.addEventListener("click",i=>{if(y){y=!1;return}i.target.closest(".lightbox-prev")&&a>0?(a--,o()):i.target.closest(".lightbox-next")&&a<e.length-1?(a++,o()):(i.target.closest(".lightbox-close")||i.target.closest(".lightbox-backdrop"))&&L()});let f=0,w=0,b=!1;t.addEventListener("touchstart",i=>{f=i.touches[0].clientX,w=i.touches[0].clientY,b=!1,y=!1},{passive:!0}),t.addEventListener("touchmove",i=>{const l=Math.abs(i.touches[0].clientX-f),h=Math.abs(i.touches[0].clientY-w);(l>10||h>10)&&(b=!0,y=!0)},{passive:!0}),t.addEventListener("touchend",i=>{if(!b)return;const l=i.changedTouches[0].clientX-f,h=Math.abs(i.changedTouches[0].clientY-w);Math.abs(l)>80&&Math.abs(l)>h*1.5&&(l>0&&a>0?(a--,o()):l<0&&a<e.length-1&&(a++,o()))},{passive:!0});function A(i){i.key==="Escape"&&L(),i.key==="ArrowLeft"&&a>0&&(a--,o()),i.key==="ArrowRight"&&a<e.length-1&&(a++,o())}document.addEventListener("keydown",A);const I=new MutationObserver(()=>{document.body.contains(t)||(document.removeEventListener("keydown",A),I.disconnect())});I.observe(document.body,{childList:!0})}function K(){const e=["how-it-works","projects","journey"],s=M(".nav-link"),a=new IntersectionObserver(n=>{n.forEach(r=>{if(r.isIntersecting){const d=r.target.id;s.forEach(c=>{c.classList.toggle("active",c.dataset.section===d)})}})},{threshold:0,rootMargin:"-30% 0px -60% 0px"});e.forEach(n=>{const r=document.getElementById(n);r&&a.observe(r)});let t=0;const o=C("#nav");window.addEventListener("scroll",()=>{const n=window.scrollY;o.classList.toggle("nav-scrolled",n>80),n>400?o.classList.toggle("nav-hidden",n>t&&n-t>5):o.classList.remove("nav-hidden"),t=n},{passive:!0})}function Q(){document.addEventListener("click",e=>{const s=e.target.closest('a[href^="#"]');if(!s)return;e.preventDefault();const a=document.querySelector(s.getAttribute("href"));a&&a.scrollIntoView({behavior:"smooth",block:"start"})})}function U(){document.addEventListener("click",e=>{if(e.target.closest(".clickable-img")||j)return;const s=e.target.closest(".project-card-preview");if(!s)return;const a=s.closest(".project-card");a&&P(a)})}function P(e,s=!1){const a=e.classList.contains("expanded");if(s&&a)return;const t=e.querySelector(".project-card-details");if(t)if(a&&!s)t.style.maxHeight=t.scrollHeight+"px",requestAnimationFrame(()=>{t.style.maxHeight="0px"}),e.classList.remove("expanded");else{e.classList.add("expanded"),t.style.maxHeight=t.scrollHeight+"px";const o=()=>{t.style.maxHeight="none",t.removeEventListener("transitionend",o)};t.addEventListener("transitionend",o)}}function V(){document.addEventListener("click",e=>{const s=e.target.closest("[data-goto-project]");if(!s)return;const a=s.dataset.gotoProject,t=document.getElementById(`project-${a}`);t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{P(t,!0),t.classList.add("highlight-pulse"),setTimeout(()=>t.classList.remove("highlight-pulse"),800)},400))})}J();
