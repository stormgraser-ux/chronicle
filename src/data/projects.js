// Chronicle — Content Data
// Edit this file to add/update projects. Scribe renders from this data.
// ─────────────────────────────────────────────────────────────────────

export const hero = {
  title: 'What I\'ve Been Building',
  subtitle: 'Since I last showed you TheColdBetween, things have grown a bit.',
  description: 'I work with an AI partner called Claude. Together we\'ve built 23 projects in about two months — games, tools, phone apps, and automation that runs on its own.',
}

export const stats = [
  { number: '23', label: 'Projects Built' },
  { number: '114K', label: 'Lines (One Game)' },
  { number: '93', label: 'Daily Automations' },
  { number: '1', label: 'Published Addon' },
]

// ─── How I Work Section ─────────────────────────────────────────────

export const howIWork = {
  intro: 'I work with an AI called Claude Code. It\'s like having a programming partner — I describe what I want to build, and Claude writes the code while I guide what it should do. Each project gets its own AI assistant with a name and personality. One command launches everything for that project.',

  personas: [
    { name: 'Junk', emoji: '🚀', project: 'TheColdBetween', color: '#d4634b' },
    { name: 'Goldsworth', emoji: '🪙', project: 'GoldMakersParadise', color: '#e8a948' },
    { name: 'Thistle', emoji: '🐛', project: 'BugGardenQuest', color: '#6db86d' },
    { name: 'Bridge', emoji: '🌉', project: 'Conduit', color: '#7a9ec4' },
    { name: 'Lucky', emoji: '💰', project: 'Sweepsites', color: '#4ecb71' },
    { name: 'Volt', emoji: '⚡', project: 'SystemForge', color: '#4ba3d4' },
    { name: 'Shard', emoji: '🔸', project: 'ShatteredAccord', color: '#c47a4e' },
    { name: 'Yggdrasil', emoji: '🌳', project: 'WorldTreeWardens', color: '#5a9e5a' },
{ name: 'Ink', emoji: '✒️', project: 'Jot', color: '#8a8aaa' },
    { name: 'Wraith', emoji: '🌊', project: 'Meridian', color: '#5a8ac4' },
    { name: 'Operator', emoji: '🔄', project: 'ClaudeRelay', color: '#4bbcaa' },
    { name: 'Hunter', emoji: '🎯', project: 'Logged', color: '#d45a5a' },
    { name: 'Tav', emoji: '🎲', project: 'Tav', color: '#9a7acc' },
    { name: 'Scribe', emoji: '📜', project: 'Chronicle', color: '#b8a888' },
  ],
}

// ─── Projects ────────────────────────────────────────────────────────

export const projects = [
  // ── Heavy ──────────────────────────────────────────────────────────

  {
    id: 'thecoldBetween',
    name: 'TheColdBetween',
    persona: { name: 'Junk', emoji: '🚀', color: '#d4634b' },
    weight: 'heavy',
    tagline: 'You\'ve seen this one — it\'s grown.',
    description: 'The space salvage game I showed you before. Since then it\'s grown to over 114,000 lines of code. You fly through asteroid fields collecting scrap, upgrading your ship, and fighting off pirates. It has a full upgrade system, multiple weapon types, and procedurally generated levels that get harder as you go.',
    highlights: [
      'Over 114,000 lines of code in a single project',
      'Procedurally generated levels — every run is different',
      'Full ship upgrade system with multiple weapon types',
      'Automatic play session recording that posts to Discord',
      'Started as an experiment — became the biggest project',
    ],
    tech: ['JavaScript', 'HTML Canvas', 'Discord Webhooks'],
    screenshots: [
      { src: 'salvagerun-title-screen.png', caption: 'TheColdBetween title screen' },
      { src: 'salvagerun-gameplay.png', caption: 'Mid-run gameplay — dodging, shooting, collecting' },
    ],
  },
  {
    id: 'gmp',
    name: 'GoldMakersParadise',
    persona: { name: 'Goldsworth', emoji: '🪙', color: '#e8a948' },
    weight: 'heavy',
    tagline: 'Published addon with real users.',
    description: 'A World of Warcraft addon that tracks how much gold you\'re making per hour. It watches every source of income — selling items, picking up loot, receiving mail — and shows you exactly where your gold is coming from. Published on CurseForge where anyone can download it.',
    highlights: [
      'Published on CurseForge — a real addon site with real users',
      'Tracks gold income from every source automatically',
      'Shows gold-per-hour with historical trends',
      'Integrates with TradeSkillMaster (a popular WoW market tool)',
      'Multiple releases with bug fixes and new features',
    ],
    tech: ['Lua', 'WoW API', 'LibDataBroker', 'TSM Integration'],
    screenshots: [
      { src: 'gmp-ingame-ui.png', caption: 'Main tracking interface — income breakdown by source' },
      { src: 'gmp-curseforge-listing.png', caption: 'Live on CurseForge — published for anyone to download' },
      { src: 'gmp-session-summary.png', caption: 'Session summary showing where the gold came from' },
      { src: 'gmp-drop-journal.png', caption: 'Tracks every item drop by location' },
      { src: 'gmp-minimap-tooltip.png', caption: 'Quick glance at gold per hour from the minimap' },
    ],
  },
  {
    id: 'bgq',
    name: 'BugGardenQuest',
    persona: { name: 'Thistle', emoji: '🐛', color: '#6db86d' },
    weight: 'heavy',
    tagline: 'A cozy card game. Built as a gift.',
    description: 'A relaxing card and dice game where you grow a garden by playing cards and rolling dice. Day and night cycles change the mood, your garden grows based on how you play, and there are daily challenges to keep it fresh. Built it as a gift for a friend — not everything has to be infrastructure.',
    highlights: [
      'Day and night visual cycles with ambient sounds',
      'Your garden grows based on gameplay decisions',
      'Daily challenges with unique twists',
      'Multiplayer rooms for playing together',
      'Built as a personal gift — made someone smile',
    ],
    tech: ['JavaScript', 'HTML Canvas', 'CSS Animations', 'WebSocket'],
    screenshots: [
      { src: 'bgq-gameplay-day.png', caption: 'Daytime gameplay — garden in bloom' },
      { src: 'bgq-title-screen.png', caption: 'Title screen with atmospheric lighting' },
      { src: 'bgq-daily-challenge.png', caption: 'Daily challenge interface' },
    ],
  },
  {
    id: 'conduit',
    name: 'Conduit',
    persona: { name: 'Bridge', emoji: '🌉', color: '#7a9ec4' },
    weight: 'heavy',
    tagline: 'My own phone app. Replaced a paid one.',
    description: 'A phone app that lets me control my computer from anywhere. I was paying $15/month for an app called Termius that did this, so I built my own and cancelled the subscription. Works on any phone browser, connects securely over my own private network, and handles everything the paid app did.',
    highlights: [
      'Replaced a $15/month subscription with my own app',
      'Works from any phone — just open the browser',
      'Secure connection through a private network (Tailscale)',
      'Handles disconnections and reconnects automatically',
      'Android app version in progress',
    ],
    tech: ['Node.js', 'Express', 'WebSocket', 'PWA', 'Tailscale'],
    screenshots: [],
  },
  {
    id: 'sweepsites',
    name: 'Sweepsites',
    persona: { name: 'Lucky', emoji: '💰', color: '#4ecb71' },
    weight: 'heavy',
    tagline: '93 sites. Every day. Automatically.',
    description: 'Enters online sweepstakes for me automatically — 93 different websites, every single day, without me touching anything. Each site gets its own custom automation that handles logging in, navigating to the right page, and entering. A dashboard shows what worked, what needs attention, and tracks everything over time.',
    highlights: [
      '93 different sweepstakes sites automated',
      'Runs every day completely on its own',
      'Dashboard shows status across all sites at a glance',
      'Tracks winnings and estimates taxes',
      'Each site gets custom automation that handles its quirks',
    ],
    tech: ['Node.js', 'Playwright', 'Express', 'SQLite'],
    screenshots: [
      { src: 'sweepsites-dashboard-main.png', caption: 'Dashboard — status across all 93 sites' },
      { src: 'sweepsites-collector-running.png', caption: 'Automation running — entering a sweepstakes' },
      { src: 'sweepsites-tax-estimator.png', caption: 'Tax estimation for winnings' },
      { src: 'sweepsites-transaction-history.png', caption: 'Transaction history with search and filtering' },
      { src: 'sweepsites-stake-dashboard.png', caption: 'Stake.us activity tracking' },
    ],
  },

  // ── Medium ─────────────────────────────────────────────────────────

  {
    id: 'grimoire',
    name: 'Grimoire',
    persona: { name: 'Grimoire', emoji: '📖', color: '#8b6ec4' },
    weight: 'medium',
    tagline: 'AI dungeon master. Real dice.',
    description: 'A tabletop RPG engine where an AI plays the dungeon master. Multiple players connect through their browsers, the AI describes the world and responds to what you do, and all dice rolls use real randomness — not AI-generated numbers. Has a "Book" system for building out campaign worlds.',
    highlights: [
      'AI dungeon master that responds to anything you try',
      'Real dice rolls — cryptographically random, not faked',
      'Multiple players can join through invite codes',
      'Book system for building persistent campaign worlds',
    ],
    tech: ['Node.js', 'Express', 'WebSocket', 'SQLite', 'Claude API'],
    screenshots: [
      { src: 'grimoire-campaign-session.png', caption: 'Live campaign — the AI dungeon master sets the scene in Ashenmoor' },
      { src: 'grimoire-title-screen.png', caption: 'Campaign Engine — title screen' },
      { src: 'grimoire-character-creation.png', caption: 'Character creation — AI helps build your backstory and personality' },
    ],
  },
  {
    id: 'tav',
    name: 'Tav',
    persona: { name: 'Tav', emoji: '🎲', color: '#9a7acc' },
    weight: 'medium',
    tagline: 'Baldur\'s Gate 3 companion tool.',
    description: 'A companion app for Baldur\'s Gate 3 that helps with character builds, gear recommendations, and party strategy. Can connect directly to the game to read what\'s happening and give real-time advice on what to level into or what gear to look for.',
    highlights: [
      'Build advisor — knows what to level into next',
      'Gear finder — recommends equipment for your build',
      'Can connect directly to the running game',
      'Knows the BG3 wiki and game mechanics deeply',
    ],
    tech: ['Node.js', 'Express', 'BG3 Script Extender', 'Claude API'],
    screenshots: [
      { src: 'tav-gear-finder.png', caption: 'Gear finder — searchable equipment database with rarity and build tags' },
      { src: 'tav-build-planner.png', caption: 'Build planner — full level 1–12 path with class, subclass, and feat choices' },
    ],
  },
  {
    id: 'systemforge',
    name: 'SystemForge',
    persona: { name: 'Volt', emoji: '⚡', color: '#4ba3d4' },
    weight: 'medium',
    tagline: 'See everything inside the computer.',
    description: 'A dashboard that shows everything happening inside my computer in real time — every CPU core\'s temperature and speed, GPU performance, memory usage, fan speeds, power draw. Can also control things like fan curves and power plans.',
    highlights: [
      'Real-time monitoring of every CPU core',
      'GPU temperature, speed, and power controls',
      'Fan speed monitoring and curve adjustment',
      'Memory configuration and health status',
    ],
    tech: ['Node.js', 'Express', 'LibreHardwareMonitor', 'WMI'],
    screenshots: [
      { src: 'systemforge-cpu-dashboard.png', caption: 'CPU dashboard — every core, temperature, and speed' },
      { src: 'systemforge-gpu-dashboard.png', caption: 'GPU monitoring — temps, clocks, power draw' },
      { src: 'systemforge-sys-overview.png', caption: 'System overview — fans, temperatures, processes' },
      { src: 'systemforge-memory.png', caption: 'Memory configuration and status' },
    ],
  },
  {
    id: 'ledger',
    name: 'Ledger',
    persona: { name: 'Ledger', emoji: '📊', color: '#5aaa7a' },
    weight: 'medium',
    tagline: 'Tracks finances. Finds forgotten subscriptions.',
    description: 'A personal finance tracker that can scan Gmail for subscription emails and find recurring charges you might have forgotten about. Categorizes spending, shows trends over time, and gives a clear picture of where money goes.',
    highlights: [
      'Scans Gmail to find subscription charges',
      'Categorizes spending automatically',
      'Shows spending trends over time',
      'Catches subscriptions you forgot you were paying for',
    ],
    tech: ['Node.js', 'Express', 'SQLite', 'Gmail API'],
    screenshots: [],
  },

  // ── Light ──────────────────────────────────────────────────────────

  {
    id: 'shatteredaccord',
    name: 'ShatteredAccord',
    persona: { name: 'Shard', emoji: '🔸', color: '#c47a4e' },
    weight: 'light',
    tagline: 'Dark fantasy mobile game.',
    description: 'An idle roguelite game with dark fantasy classes — each with unique abilities that combine in interesting ways. Designed for phone, targeting the Google Play Store.',
    highlights: [
      'Class-based ability system with unique combos',
      'Designed for mobile — Play Store target',
    ],
    tech: ['JavaScript', 'Vite', 'Canvas'],
    screenshots: [
      { src: 'shatteredaccord-paladin.png', caption: 'Paladin class — bless the shattered land, collect shards, ascend' },
    ],
  },
  {
    id: 'worldtreewardens',
    name: 'WorldTreeWardens',
    persona: { name: 'Yggdrasil', emoji: '🌳', color: '#5a9e5a' },
    weight: 'light',
    tagline: 'Protect the World Tree.',
    description: 'A survivors-style tower defense game. You play as magical wardens defending a giant tree from waves of enemies. Choose between Wolf and Faeri playstyles. Targeting itch.io release.',
    highlights: [
      'Two distinct playstyles — Wolf and Faeri',
      'Waves of enemies with escalating difficulty',
    ],
    tech: ['JavaScript', 'HTML Canvas'],
    screenshots: [
      { src: 'worldtreewardens-gameplay.png', caption: 'Wolf warden defending the World Tree from waves of enemies' },
      { src: 'worldtreewardens-faeri.png', caption: 'Faeri warden — fire sprite playstyle' },
    ],
  },
  {
    id: 'pantry',
    name: 'Pantry',
    persona: { name: 'Pantry', emoji: '🥘', color: '#d4a04b' },
    weight: 'light',
    tagline: 'Grocery list that syncs across phones.',
    description: 'A shared grocery and meal planning app. Add items from your phone, and it instantly appears on the other phone. Works offline too — syncs up when you\'re back online.',
    highlights: [
      'Real-time sync between devices',
      'Works offline — syncs when reconnected',
      'Hosted for free on GitHub Pages',
    ],
    tech: ['JavaScript', 'Supabase', 'PWA'],
    screenshots: [
      { src: 'pantry-grocery-list.png', caption: 'Inventory tracker — running low vs. stocked status for everything' },
      { src: 'pantry-shopping-list.png', caption: 'Shopping list — organized by aisle with checkboxes' },
      { src: 'pantry-meal-planner.png', caption: 'Weekly meal planner with recipe management' },
    ],
  },
  {
    id: 'jot',
    name: 'Jot',
    persona: { name: 'Ink', emoji: '✒️', color: '#8a8aaa' },
    weight: 'light',
    tagline: 'Press a key, take a note.',
    description: 'A quick-capture note app. Press Alt+J from anywhere and a little overlay pops up. Type your thought, it saves automatically. Gets out of the way when you\'re done.',
    highlights: [
      'One hotkey opens it from anywhere — Alt+J',
      'Saves automatically, disappears when done',
    ],
    tech: ['Electron', 'JavaScript'],
    screenshots: [
      { src: 'jot-notes-list.png', caption: 'Notes tagged by project — quick search and capture' },
    ],
  },
  {
    id: 'monad',
    name: 'Monad',
    persona: { name: 'Monad', emoji: '🔧', color: '#7a7a9a' },
    weight: 'light',
    tagline: 'Manages and updates my other apps.',
    description: 'An app that installs, launches, and auto-updates my other desktop tools. Like a personal app store for the things I build. Keeps everything current without manual work.',
    highlights: [
      'One place to manage all my desktop tools',
      'Auto-updates from GitHub releases',
    ],
    tech: ['Electron', 'Node.js', 'GitHub API'],
    screenshots: [
      { src: 'monad-dashboard.png', caption: 'App manager — install, launch, stop, and update everything from one place' },
    ],
  },
  {
    id: 'meridian',
    name: 'Meridian',
    persona: { name: 'Wraith', emoji: '🌊', color: '#5a8ac4' },
    weight: 'light',
    tagline: 'Custom AI chat interface.',
    description: 'A clean chat interface for talking to Claude. Remembers context from past conversations and injects relevant memories automatically — so it feels like talking to someone who knows you.',
    highlights: [
      'Remembers past conversations and context',
      'Clean, distraction-free chat interface',
    ],
    tech: ['Node.js', 'Claude CLI', 'Electron'],
    screenshots: [
      { src: 'meridian-chat.png', caption: 'Clean conversation view with model selector and usage tracking' },
      { src: 'meridian-history.png', caption: 'Conversation history — organized by topic with model tags' },
    ],
  },
  {
    id: 'clauderelay',
    name: 'ClaudeRelay',
    persona: { name: 'Operator', emoji: '🔄', color: '#4bbcaa' },
    weight: 'light',
    tagline: 'Let our AIs talk to each other.',
    description: 'Built with a cousin so our AI assistants can talk to each other across the internet. A tether system controls the conversation — you can let them chat freely, require approval for each message, or cut the connection.',
    highlights: [
      'AI-to-AI communication across the web',
      'Three modes — free chat, approval required, or disconnected',
    ],
    tech: ['Node.js', 'Discord.js', 'Chrome DevTools'],
    screenshots: [
      { src: 'clauderelay-launcher.png', caption: 'Terminal launcher — Claude and Adam connected via Discord relay' },
    ],
  },
  {
    id: 'logged',
    name: 'Logged',
    persona: { name: 'Hunter', emoji: '🎯', color: '#d45a5a' },
    weight: 'light',
    tagline: 'Tracks job applications passively.',
    description: 'A Chrome extension that automatically detects when you submit a job application and logs it. No manual entry — it watches for confirmation pages and records everything for you.',
    highlights: [
      'Detects job submissions automatically',
      'No manual tracking — it just watches',
    ],
    tech: ['Chrome Extension', 'JavaScript'],
    screenshots: [
      { src: 'logged-applications.png', caption: 'Application tracker — company, role, source, and salary all captured automatically' },
      { src: 'logged-analytics.png', caption: 'Analytics — application velocity, response rates, and source effectiveness' },
      { src: 'logged-settings.png', caption: 'Settings — auto-detection for LinkedIn, Indeed, Greenhouse, Lever, and Workday' },
    ],
  },
]

// ─── Journey Timeline ────────────────────────────────────────────────

export const journey = [
  {
    phase: 'January',
    title: 'The First Game',
    text: 'Started with TheColdBetween — a space shooter built as an experiment. "Let\'s see what building with AI actually feels like." It felt like the future.',
  },
  {
    phase: 'Early February',
    title: 'The System Takes Shape',
    text: 'One project wasn\'t enough. Built a system where each project gets its own AI assistant, its own launcher, its own workspace. One command spins everything up.',
  },
  {
    phase: 'Mid February',
    title: 'First Real Ship',
    text: 'GoldMakersParadise published on CurseForge — a real addon, available for anyone to download. First time putting something out there for real users.',
  },
  {
    phase: 'Late February',
    title: 'Building Everything',
    text: 'Phone apps, automation, games, browser extensions, finance tools — projects started multiplying. Sweepsites hit 93 daily collectors. TheColdBetween passed 100,000 lines.',
  },
  {
    phase: 'March',
    title: '23 Projects and Counting',
    text: 'Two months in. An AI dungeon master, a grocery app, a privacy-first notes app, a game companion tool. Still building. Still learning. Every project teaches something new.',
  },
]
