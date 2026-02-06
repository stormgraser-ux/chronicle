// Chronicle — Content Data
// Edit this file to add/update projects. Scribe renders from this data.
// ─────────────────────────────────────────────────────────────────────

export const hero = {
  title: 'Chronicle',
  subtitle: 'Five weeks of building with Claude Code.',
  description: 'A solo developer and an AI pair-programming partner. What happens when you give them a month.',
}

export const stats = [
  { number: '10+', label: 'Claude Personas', icon: '🤖' },
  { number: '50+', label: 'MCP Tools', icon: '🔧' },
  { number: '8', label: 'Projects Shipped', icon: '📦' },
  { number: '1', label: 'Published Addon', icon: '🏆' },
]

// ─── Architecture Section ────────────────────────────────────────────

export const architecture = {
  intro: `The most interesting thing isn't any single project — it's the system that builds them. An orchestration layer called The Overlord coordinates specialized Claude instances, each with its own persona, domain knowledge, and toolset. One command launches everything.`,

  layers: [
    {
      id: 'overlord',
      name: 'Overlord',
      icon: '🏰',
      subtitle: 'Orchestration Layer',
      description: 'A meta-Claude that coordinates specialized project Claudes. Manages shared knowledge, cross-project patterns, and session handoffs through a chain of CLAUDE.md instruction files.',
      details: [
        'CLAUDE.md instruction chain — global → workspace → project',
        'Handoff system preserves context between sessions',
        'Cross-project knowledge sharing and pattern recognition',
        'Persona assignment and project-specific behavior tuning',
      ],
    },
    {
      id: 'personas',
      name: 'Persona Layer',
      icon: '🎭',
      subtitle: '10+ Named Instances',
      description: 'Each project gets its own Claude with a name, personality, and domain expertise. They don\'t just follow instructions — they understand their project deeply.',
      list: [
        { name: 'Goldsworth', emoji: '🪙', project: 'GoldMakersParadise', color: '#e8a948' },
        { name: 'Lucky', emoji: '💰', project: 'Sweepsites', color: '#4ecb71' },
        { name: 'Thistle', emoji: '🐛', project: 'BugGardenQuest', color: '#6db86d' },
        { name: 'Junk', emoji: '🚀', project: 'SalvageRun', color: '#d4634b' },
        { name: 'Volt', emoji: '⚡', project: 'SystemForge', color: '#4ba3d4' },
        { name: 'Operator', emoji: '🔄', project: 'ClaudeRelay', color: '#4bbcaa' },
        { name: 'Dr. Volatile', emoji: '🧪', project: 'EdgeTest', color: '#c4b840' },
        { name: 'Scribe', emoji: '📜', project: 'Chronicle', color: '#b8a888' },
      ],
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      icon: '⚙️',
      subtitle: 'The Foundation',
      description: 'The platform layer that makes everything work. MCP tools for system control, persistent memory for continuity, one-command launchers for each project.',
      components: [
        {
          name: 'MCP Tool Suite',
          stat: '50+ tools · 10+ servers',
          detail: 'Browser automation, desktop control, clipboard, notifications, system monitoring, persistent memory, file watching, project management, local AI via Ollama.',
        },
        {
          name: 'Launcher System',
          stat: '~/bin/ scripts',
          detail: 'One command per project. Checks ports, detects conflicts, starts servers, opens browsers, launches Claude with full context. See code below.',
        },
        {
          name: 'Memory Layer',
          stat: 'ChromaDB + auto-memory',
          detail: 'Persistent semantic memory across sessions. Each Claude remembers past work, decisions, and patterns through vector search and auto-memory files.',
        },
        {
          name: 'Subagent Watchdog',
          stat: 'PID-aware cleanup',
          detail: 'Detects and cleans orphaned Claude subprocesses (~400MB each). Parent chain walking distinguishes active work from abandoned processes.',
        },
      ],
    },
  ],
}

// Actual launcher code from ~/bin/chronicle — this is real, not a mockup
export const launcherCode = `#!/bin/bash
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
claude --dangerously-skip-permissions "$PROJECT_DIR"`

// ─── Projects ────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'gmp',
    name: 'GoldMakersParadise',
    persona: { name: 'Goldsworth', emoji: '🪙', color: '#e8a948' },
    weight: 'heavy',
    tagline: 'First real ship. Published on CurseForge.',
    description: 'A WoW TBC Classic addon for tracking gold-making sessions. Monitors income from every source — vendor sales, auction house, mail, looting — and presents it as real-time session data with historical trends and projections.',
    highlights: [
      'Published on CurseForge with multiple releases',
      'TradeSkillMaster API integration for live market pricing',
      'Mail scanning with fuzzy item name matching',
      'Sales velocity tracking and gold-per-hour projections',
      'Drop journal tracking loot by zone, mob, and item',
      'Minimap button with live session tooltip',
    ],
    tech: ['Lua', 'WoW API', 'LibDataBroker', 'LibDBIcon', 'TSM AppHelper'],
    screenshots: [
      { src: 'gmp-ingame-ui.png', caption: 'Main tracking interface — session income breakdown by source' },
      { src: 'gmp-curseforge-listing.png', caption: 'Live on CurseForge — published addon page' },
      { src: 'gmp-session-summary.png', caption: 'Session summary with per-source breakdown' },
      { src: 'gmp-drop-journal.png', caption: 'Drop journal — loot tracking by zone and mob' },
      { src: 'gmp-minimap-tooltip.png', caption: 'Minimap button with live gold/hour tooltip' },
    ],
  },
  {
    id: 'sweepsites',
    name: 'Sweepsites',
    persona: { name: 'Lucky', emoji: '💰', color: '#4ecb71' },
    weight: 'heavy',
    tagline: 'Browser automation at depth.',
    description: 'Automated sweepstakes entry system with a modular collector architecture. Each site gets a custom collector handling login, navigation, and entry. A central dashboard monitors status across all sites with error recovery and retry logic.',
    highlights: [
      'Collector architecture — each site is a pluggable module',
      'Dashboard showing collected / errored / needs-attention states',
      'Transaction history with search and filtering',
      'Tax estimation module for sweepstakes winnings',
      'Stake.us integration with balance tracking',
      'Multi-site parallel execution with error isolation',
    ],
    tech: ['Node.js', 'Puppeteer', 'Express', 'SQLite', 'Vanilla JS'],
    screenshots: [
      { src: 'sweepsites-dashboard-main.png', caption: 'Main dashboard — site status overview with collection states' },
      { src: 'sweepsites-collector-running.png', caption: 'Collector running — live browser automation' },
      { src: 'sweepsites-tax-estimator.png', caption: 'Tax estimation module for winnings reporting' },
      { src: 'sweepsites-transaction-history.png', caption: 'Transaction history with filtering' },
      { src: 'sweepsites-stake-dashboard.png', caption: 'Stake.us balance and activity dashboard' },
    ],
  },
  {
    id: 'lightlark',
    name: 'Lightlark',
    persona: { name: 'Grim', emoji: '🌑', color: '#a07ed4' },
    weight: 'medium',
    tagline: 'A local LLM with a voice of its own.',
    description: 'A persona engine that gives local AI models a consistent character. Grim isn\'t a Claude operator — he\'s the product. A local LLM running through Ollama with deep personality prompts, a text cleaning pipeline, fact extraction for persistent memory, and Chinese-to-English translation support.',
    highlights: [
      'Local LLM via Ollama with persistent character voice',
      'Text cleaning pipeline for natural conversation flow',
      'Fact extraction builds long-term character memory',
      'Chinese-to-English translation layer',
      'Mobile-optimized chat interface',
      'Multiple character art variants with distinct styles',
    ],
    tech: ['Node.js', 'Ollama', 'Express', 'WebSocket', 'Vanilla JS'],
    screenshots: [
      { src: 'lightlark-mobile-grim.jpg', caption: 'Chatting with Grim — local LLM with persistent character voice' },
      { src: 'lightlark-grim-art-variants.png', caption: 'Character art variants — multiple visual styles for Grim' },
    ],
  },
  {
    id: 'bgq',
    name: 'BugGardenQuest',
    persona: { name: 'Thistle', emoji: '🐛', color: '#6db86d' },
    weight: 'medium',
    tagline: 'A cozy card game. Built as a gift.',
    description: 'A cozy card/dice garden game built as a gift for a friend. Day/night cycles, a garden that grows as you play, daily challenges, and multiplayer rooms. Not everything is infrastructure — sometimes you build something because someone will smile.',
    highlights: [
      'Day/night visual cycle with ambient soundtrack',
      'Garden grows based on gameplay decisions',
      'Daily challenge system with unique modifiers',
      'Multiplayer room support for co-op play',
      'Built as a personal gift — not a portfolio piece',
    ],
    tech: ['Vanilla JS', 'HTML Canvas', 'CSS Animations', 'WebSocket'],
    screenshots: [
      { src: 'bgq-gameplay-day.png', caption: 'Daytime gameplay — garden in bloom' },
      { src: 'bgq-title-screen.png', caption: 'Title screen with atmospheric lighting' },
      { src: 'bgq-daily-challenge.png', caption: 'Daily challenge interface' },
    ],
  },
  {
    id: 'salvagerun',
    name: 'SalvageRun',
    persona: { name: 'Junk', emoji: '🚀', color: '#d4634b' },
    weight: 'light',
    tagline: 'The one Dad played.',
    description: 'Space salvage roguelite — Dad\'s already played this one. The interesting angle isn\'t the game itself, it\'s the telemetry system that auto-captures play sessions and posts them to Discord. Dad\'s sessions are in there too.',
    highlights: [
      'Auto-telemetry captures every play session',
      'Session data posted to Discord in real-time',
      'Check Discord for Dad\'s play sessions',
    ],
    tech: ['Vanilla JS', 'HTML Canvas', 'Discord Webhooks'],
    screenshots: [
      { src: 'salvagerun-title-screen.png', caption: 'SalvageRun title screen' },
      { src: 'salvagerun-gameplay.png', caption: 'Mid-run gameplay — enemies, loot, intensity rising' },
    ],
  },
  {
    id: 'systemforge',
    name: 'SystemForge',
    persona: { name: 'Volt', emoji: '⚡', color: '#4ba3d4' },
    weight: 'medium',
    tagline: 'Full hardware dashboard. Every sensor, every control.',
    description: 'A comprehensive system monitoring and control application. CPU core grid, GPU thermals, memory configuration, disk health, network stats, fan curves, power plans, voltage rails — all through LibreHardwareMonitor integration with real-time sensor data.',
    highlights: [
      'Per-core CPU monitoring with frequency and temperature',
      'GPU controls — power limit, clock locks, fan curves',
      'Memory DIMM configuration and channel detection',
      'System overview with board temps, fan RPMs, voltage rails',
      'Power plan management with preset switching',
      'Process manager with CPU/memory per-process stats',
    ],
    tech: ['Node.js', 'Express', 'LibreHardwareMonitor', 'WMI', 'Vanilla JS'],
    screenshots: [
      { src: 'systemforge-cpu-dashboard.png', caption: 'CPU dashboard — per-core frequencies, voltages, power draw' },
      { src: 'systemforge-gpu-dashboard.png', caption: 'GPU monitoring — temps, clocks, VRAM, power and fan controls' },
      { src: 'systemforge-sys-overview.png', caption: 'System overview — fans, board temps, voltage rails, process manager' },
      { src: 'systemforge-memory.png', caption: 'Memory tab — DIMM configuration, dual-channel detection' },
    ],
  },
  {
    id: 'clauderelay',
    name: 'ClaudeRelay',
    persona: { name: 'Operator', emoji: '🔄', color: '#4bbcaa' },
    weight: 'light',
    tagline: 'Let our AIs talk to each other.',
    description: 'A relay system built with a cousin so their AI instances can communicate across the web. Each person\'s Claude connects through Discord, and a tether system controls the conversation — free speak mode lets the AIs chat autonomously, manual mode requires click-to-approve each message, and break mode cuts the connection entirely.',
    highlights: [
      'Cross-web AI-to-AI communication via Discord',
      'Tether system — free speak, manual approve, or break',
      'Built for two people to connect their AI instances',
    ],
    tech: ['Node.js', 'Discord.js', 'Chrome DevTools Protocol'],
    screenshots: [],
  },
]

// ─── Journey Timeline ────────────────────────────────────────────────

export const journey = [
  {
    week: 'Week 1',
    title: 'First Contact',
    text: 'First Claude Code session. SalvageRun starts as an experiment — "let\'s see what this can actually do." Dad plays it.',
  },
  {
    week: 'Week 2',
    title: 'The System Emerges',
    text: 'One Claude per project wasn\'t enough. The Overlord pattern, persona system, and launcher ecosystem take shape. MCP tools start accumulating.',
  },
  {
    week: 'Week 3',
    title: 'First Ship',
    text: 'GoldMakersParadise published on CurseForge. A real addon, in the wild, with users. Sweepsites collector architecture solidifies.',
  },
  {
    week: 'Week 4',
    title: 'Full Parallel',
    text: 'Lightlark, BugGardenQuest, SystemForge, ClaudeRelay — all running simultaneously with their own Claude instances. The system proves itself.',
  },
  {
    week: 'Week 5',
    title: 'Chronicle',
    text: 'This app. Built by Scribe to document everything. The portfolio that\'s also part of the portfolio.',
  },
]
