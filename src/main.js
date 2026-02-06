// Chronicle — Scribe 📜
// Living portfolio app — renders from data/projects.js
// ─────────────────────────────────────────────────────

import { hero, stats, architecture, launcherCode, projects, journey } from './data/projects.js'

const $ = (sel) => document.querySelector(sel)
const $$ = (sel) => [...document.querySelectorAll(sel)]

// ─── Render Helpers ──────────────────────────────────

function highlightBash(code) {
  return code.split('\n').map(line => {
    // Comment lines get one class, no further processing
    if (/^\s*#/.test(line)) {
      return `<span class="sh-comment">${line}</span>`
    }
    return line
      .replace(/"([^"]*?)"/g, '<span class="sh-string">"$1"</span>')
      .replace(/\b(if|then|else|fi|done|do|while|for|in|echo|exit|cd|source|export|read|pgrep|lsof|sleep|npx)\b/g, '<span class="sh-keyword">$1</span>')
      .replace(/(\$\w+|\$\{[^}]+\})/g, '<span class="sh-var">$1</span>')
  }).join('\n')
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// ─── Section Renderers ───────────────────────────────

function renderNav() {
  return `
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
  `
}

function renderHero() {
  return `
    <section class="hero" id="top">
      <div class="hero-content">
        <p class="hero-label">Portfolio — February 2026</p>
        <h1 class="hero-title">${hero.title}</h1>
        <p class="hero-subtitle">${hero.subtitle}</p>
        <p class="hero-description">${hero.description}</p>
      </div>
      <div class="hero-stats">
        ${stats.map(s => `
          <div class="stat reveal">
            <span class="stat-number">${s.number}</span>
            <span class="stat-label">${s.label}</span>
          </div>
        `).join('')}
      </div>
      <div class="hero-scroll-hint">
        <span class="scroll-text">The system</span>
        <svg class="scroll-arrow" width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 4 L8 18 M2 14 L8 20 L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </section>
  `
}

function renderArchitecture() {
  const layers = architecture.layers

  return `
    <section class="section" id="system">
      <div class="section-header reveal">
        <h2 class="section-title">The System</h2>
        <p class="section-intro">${architecture.intro}</p>
      </div>

      <div class="arch-diagram">
        ${renderArchLayer(layers[0])}
        <div class="arch-connector"><div class="arch-connector-line"></div></div>
        ${renderPersonaLayer(layers[1])}
        <div class="arch-connector"><div class="arch-connector-line"></div></div>
        ${renderInfraLayer(layers[2])}
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
        <pre class="terminal-body"><code>${highlightBash(escapeHtml(launcherCode))}</code></pre>
      </div>

      <p class="arch-footnote reveal">Every project has one of these. Type <code>salvagerun</code>, <code>sweepsites</code>, or <code>bgq</code> — and the entire environment spins up.</p>
    </section>
  `
}

function renderArchLayer(layer) {
  return `
    <div class="arch-layer reveal" data-layer="${layer.id}">
      <div class="arch-node arch-node-primary">
        <span class="arch-node-icon">${layer.icon}</span>
        <div class="arch-node-text">
          <span class="arch-node-name">${layer.name}</span>
          <span class="arch-node-sub">${layer.subtitle}</span>
        </div>
      </div>
      <p class="arch-layer-desc">${layer.description}</p>
      <ul class="arch-details">
        ${layer.details.map(d => `<li>${d}</li>`).join('')}
      </ul>
    </div>
  `
}

function renderPersonaLayer(layer) {
  return `
    <div class="arch-layer reveal" data-layer="${layer.id}">
      <div class="arch-node">
        <span class="arch-node-icon">${layer.icon}</span>
        <div class="arch-node-text">
          <span class="arch-node-name">${layer.name}</span>
          <span class="arch-node-sub">${layer.subtitle}</span>
        </div>
      </div>
      <p class="arch-layer-desc">${layer.description}</p>
      <div class="persona-grid">
        ${layer.list.map(p => {
          // Find the matching project to link the chip
          const proj = projects.find(pr => pr.persona.name === p.name)
          const linkId = proj ? proj.id : ''
          return `
          <div class="persona-chip" style="--pc: ${p.color}" ${linkId ? `data-goto-project="${linkId}"` : ''}>
            <span class="persona-emoji">${p.emoji}</span>
            <span class="persona-name">${p.name}</span>
          </div>
        `}).join('')}
      </div>
    </div>
  `
}

function renderInfraLayer(layer) {
  return `
    <div class="arch-layer reveal" data-layer="${layer.id}">
      <div class="arch-node">
        <span class="arch-node-icon">${layer.icon}</span>
        <div class="arch-node-text">
          <span class="arch-node-name">${layer.name}</span>
          <span class="arch-node-sub">${layer.subtitle}</span>
        </div>
      </div>
      <p class="arch-layer-desc">${layer.description}</p>
      <div class="infra-grid">
        ${layer.components.map(c => `
          <div class="infra-card">
            <div class="infra-card-header">
              <span class="infra-card-name">${c.name}</span>
              <span class="infra-card-stat">${c.stat}</span>
            </div>
            <p class="infra-card-detail">${c.detail}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
}

function renderProjects() {
  return `
    <section class="section" id="projects">
      <div class="section-header reveal">
        <h2 class="section-title">The Work</h2>
        <p class="section-intro">What the system produces. Each project was built with its own Claude persona — a dedicated AI partner with domain expertise and project memory.</p>
      </div>
      <div class="projects-list">
        ${projects.map(renderProjectCard).join('')}
      </div>
    </section>
  `
}

function renderProjectCard(project) {
  const hasScreenshots = project.screenshots.length > 0
  const featured = hasScreenshots ? project.screenshots[0] : null
  const extras = hasScreenshots ? project.screenshots.slice(1) : []

  return `
    <article class="project-card reveal" data-weight="${project.weight}" style="--pc: ${project.persona.color}" id="project-${project.id}">
      <div class="project-card-accent"></div>

      <div class="project-card-preview" data-expand="${project.id}">
        <div class="project-header">
          <div class="project-persona">
            <span class="project-persona-emoji">${project.persona.emoji}</span>
            <span class="project-persona-name">${project.persona.name}</span>
          </div>
          <span class="project-expand-hint">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </div>

        <h3 class="project-name">${project.name}</h3>
        <p class="project-tagline">${project.tagline}</p>

        ${featured ? `
          <div class="project-screenshot-featured">
            <img
              src="/screenshots/${featured.src}"
              alt="${featured.caption}"
              loading="lazy"
              class="clickable-img"
              data-caption="${featured.caption}"
              data-gallery="${project.id}"
              data-index="0"
            />
          </div>
        ` : ''}
      </div>

      <div class="project-card-details">
        <p class="project-description">${project.description}</p>

        <div class="project-highlights">
          ${project.highlights.map(h => `
            <div class="highlight-item">
              <span class="highlight-marker"></span>
              <span>${h}</span>
            </div>
          `).join('')}
        </div>

        <div class="project-tech">
          ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        ${extras.length > 0 ? `
          <div class="project-screenshot-strip-wrap">
            <div class="project-screenshot-strip">
              ${extras.map((s, i) => `
                <div class="screenshot-thumb">
                  <img
                    src="/screenshots/${s.src}"
                    alt="${s.caption}"
                    loading="lazy"
                    class="clickable-img"
                    data-caption="${s.caption}"
                    data-gallery="${project.id}"
                    data-index="${i + 1}"
                  />
                </div>
              `).join('')}
            </div>
            <div class="screenshot-strip-fade"></div>
          </div>
        ` : ''}
      </div>
    </article>
  `
}

function renderJourney() {
  return `
    <section class="section" id="journey">
      <div class="section-header reveal">
        <h2 class="section-title">The Journey</h2>
        <p class="section-intro">Five weeks. Zero prior Claude Code experience. This is the timeline.</p>
      </div>
      <div class="timeline">
        ${journey.map((m, i) => `
          <div class="timeline-item reveal" style="--delay: ${i * 80}ms">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-week">${m.week}</span>
              <h3 class="timeline-title">${m.title}</h3>
              <p class="timeline-text">${m.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `
}

function renderFooter() {
  return `
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
  `
}

// ─── App Init ────────────────────────────────────────

function init() {
  const app = $('#app')
  app.innerHTML = `
    ${renderNav()}
    <main class="main">
      ${renderHero()}
      ${renderArchitecture()}
      ${renderProjects()}
      ${renderJourney()}
      ${renderFooter()}
    </main>
  `

  setupScrollReveal()
  setupLightbox()
  setupNavHighlight()
  setupSmoothScroll()
  setupCardExpand()
  setupPersonaLinks()
}

// ─── Scroll Reveal Animation ─────────────────────────

function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.style.getPropertyValue('--delay') || '0ms'
        entry.target.style.transitionDelay = delay
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
  })

  $$('.reveal').forEach(el => observer.observe(el))

  // Staggered shimmer on persona chips when they scroll into view
  const personaGrid = $('.persona-grid')
  if (personaGrid) {
    const chipObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chips = entry.target.querySelectorAll('.persona-chip')
          chips.forEach((chip, i) => {
            setTimeout(() => chip.classList.add('shimmer'), i * 100)
          })
          chipObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })
    chipObserver.observe(personaGrid)
  }
}

// ─── Image Lightbox ──────────────────────────────────

function setupLightbox() {
  document.addEventListener('click', (e) => {
    const img = e.target.closest('.clickable-img')
    if (!img) return

    const src = img.src
    const caption = img.dataset.caption || ''
    const gallery = img.dataset.gallery
    const index = parseInt(img.dataset.index ?? -1)

    // Collect all images in this gallery
    let galleryImages = [{ src, caption }]
    if (gallery) {
      const project = projects.find(p => p.id === gallery)
      if (project) {
        galleryImages = project.screenshots.map(s => ({
          src: `/screenshots/${s.src}`,
          caption: s.caption,
        }))
      }
    }

    openLightbox(galleryImages, index >= 0 ? index : 0)
  })
}

function openLightbox(images, startIndex) {
  let current = startIndex

  const overlay = document.createElement('div')
  overlay.className = 'lightbox'

  function render() {
    const img = images[current]
    const hasMultiple = images.length > 1
    overlay.innerHTML = `
      <div class="lightbox-backdrop"></div>
      <div class="lightbox-content">
        ${hasMultiple ? `<button class="lightbox-nav lightbox-prev" ${current === 0 ? 'disabled' : ''}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>` : ''}
        <div class="lightbox-image-wrap">
          <img src="${img.src}" alt="${img.caption}" class="lightbox-image" />
          ${img.caption ? `<p class="lightbox-caption">${img.caption}</p>` : ''}
          ${hasMultiple ? `<p class="lightbox-counter">${current + 1} / ${images.length}</p>` : ''}
        </div>
        ${hasMultiple ? `<button class="lightbox-nav lightbox-next" ${current === images.length - 1 ? 'disabled' : ''}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>` : ''}
      </div>
      <button class="lightbox-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    `
  }

  render()
  document.body.appendChild(overlay)
  document.body.style.overflow = 'hidden'
  requestAnimationFrame(() => overlay.classList.add('lightbox-open'))

  function close() {
    overlay.classList.remove('lightbox-open')
    document.body.style.overflow = ''
    setTimeout(() => overlay.remove(), 250)
  }

  overlay.addEventListener('click', (e) => {
    if (e.target.closest('.lightbox-prev') && current > 0) {
      current--
      render()
    } else if (e.target.closest('.lightbox-next') && current < images.length - 1) {
      current++
      render()
    } else if (e.target.closest('.lightbox-close') || e.target.closest('.lightbox-backdrop')) {
      close()
    }
  })

  // Touch swipe support
  let touchStartX = 0
  overlay.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX
  }, { passive: true })

  overlay.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX
    if (Math.abs(diff) > 60) {
      if (diff > 0 && current > 0) { current--; render() }
      else if (diff < 0 && current < images.length - 1) { current++; render() }
    }
  }, { passive: true })

  // Keyboard support
  function onKey(e) {
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowLeft' && current > 0) { current--; render() }
    if (e.key === 'ArrowRight' && current < images.length - 1) { current++; render() }
  }
  document.addEventListener('keydown', onKey)
  overlay.addEventListener('remove', () => document.removeEventListener('keydown', onKey))

  // Clean up key listener when overlay is removed
  const obs = new MutationObserver(() => {
    if (!document.body.contains(overlay)) {
      document.removeEventListener('keydown', onKey)
      obs.disconnect()
    }
  })
  obs.observe(document.body, { childList: true })
}

// ─── Nav Highlight on Scroll ─────────────────────────

function setupNavHighlight() {
  const sections = ['system', 'projects', 'journey']
  const links = $$('.nav-link')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        links.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id)
        })
      }
    })
  }, {
    threshold: 0,
    rootMargin: '-30% 0px -60% 0px',
  })

  sections.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  // Show/hide nav on scroll
  let lastScroll = 0
  const nav = $('#nav')

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    nav.classList.toggle('nav-scrolled', scrollY > 80)

    if (scrollY > 400) {
      nav.classList.toggle('nav-hidden', scrollY > lastScroll && scrollY - lastScroll > 5)
    } else {
      nav.classList.remove('nav-hidden')
    }
    lastScroll = scrollY
  }, { passive: true })
}

// ─── Smooth Scroll for Nav Links ─────────────────────

function setupSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return
    e.preventDefault()
    const target = document.querySelector(link.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

// ─── Card Expand/Collapse ────────────────────────────

function setupCardExpand() {
  document.addEventListener('click', (e) => {
    // Don't expand when clicking images (lightbox handles those)
    if (e.target.closest('.clickable-img')) return

    const preview = e.target.closest('.project-card-preview')
    if (!preview) return

    const card = preview.closest('.project-card')
    if (!card) return

    toggleCard(card)
  })
}

function toggleCard(card, forceOpen = false) {
  const isExpanded = card.classList.contains('expanded')
  if (forceOpen && isExpanded) return

  const details = card.querySelector('.project-card-details')
  if (!details) return

  if (isExpanded && !forceOpen) {
    // Collapse
    details.style.maxHeight = details.scrollHeight + 'px'
    requestAnimationFrame(() => {
      details.style.maxHeight = '0px'
    })
    card.classList.remove('expanded')
  } else {
    // Expand
    card.classList.add('expanded')
    details.style.maxHeight = details.scrollHeight + 'px'
    // After transition, remove max-height so content can reflow
    const onEnd = () => {
      details.style.maxHeight = 'none'
      details.removeEventListener('transitionend', onEnd)
    }
    details.addEventListener('transitionend', onEnd)
  }
}

// ─── Persona Chip → Project Card Links ───────────────

function setupPersonaLinks() {
  document.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-goto-project]')
    if (!chip) return

    const projectId = chip.dataset.gotoProject
    const card = document.getElementById(`project-${projectId}`)
    if (!card) return

    // Scroll to card
    card.scrollIntoView({ behavior: 'smooth', block: 'center' })

    // Expand it after a short delay (let scroll settle)
    setTimeout(() => {
      toggleCard(card, true)
      // Brief highlight pulse
      card.classList.add('highlight-pulse')
      setTimeout(() => card.classList.remove('highlight-pulse'), 800)
    }, 400)
  })
}

// ─── Boot ────────────────────────────────────────────

init()
