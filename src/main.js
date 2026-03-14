// Chronicle — Scribe 📜
// Living portfolio app — renders from data/projects.js
// ─────────────────────────────────────────────────────

import { hero, stats, howIWork, projects, journey } from './data/projects.js'

const $ = (sel) => document.querySelector(sel)
const $$ = (sel) => [...document.querySelectorAll(sel)]
const base = import.meta.env.BASE_URL

// ─── Section Renderers ───────────────────────────────

function renderNav() {
  return `
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
  `
}

function renderHero() {
  return `
    <section class="hero" id="top">
      <div class="hero-content">
        <p class="hero-label">March 2026</p>
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
        <span class="scroll-text">Keep scrolling</span>
        <svg class="scroll-arrow" width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 4 L8 18 M2 14 L8 20 L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </section>
  `
}

function renderHowIWork() {
  return `
    <section class="section" id="how-it-works">
      <div class="section-header reveal">
        <h2 class="section-title">How I Work</h2>
        <p class="section-intro">${howIWork.intro}</p>
      </div>

      <div class="persona-grid-standalone reveal">
        <p class="persona-grid-label">Each project has its own AI partner:</p>
        <div class="persona-grid">
          ${howIWork.personas.map(p => {
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
    </section>
  `
}

function renderProjects() {
  return `
    <section class="section" id="projects">
      <div class="section-header reveal">
        <h2 class="section-title">The Work</h2>
        <p class="section-intro">Everything I've built since TheColdBetween. Tap any card to see more.</p>
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
              src="${base}screenshots/${featured.src}"
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
                    src="${base}screenshots/${s.src}"
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
        <p class="section-intro">From one experimental game to 23 projects in two months.</p>
      </div>
      <div class="timeline">
        ${journey.map((m, i) => `
          <div class="timeline-item reveal" style="--delay: ${i * 80}ms">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-week">${m.phase}</span>
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
      <div class="footer-content reveal">
        <p class="footer-line">Built with Claude Code</p>
        <div class="footer-meta">
          <a href="https://github.com/stormgraser-ux" class="footer-link" target="_blank" rel="noopener">GitHub</a>
          <span class="footer-sep">·</span>
          <span class="footer-date">March 2026</span>
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
      ${renderHowIWork()}
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

// Track whether the lightbox is open so card-expand can ignore ghost clicks
let lightboxOpen = false

function setupLightbox() {
  document.addEventListener('click', (e) => {
    const img = e.target.closest('.clickable-img')
    if (!img) return

    // Stop the click from bubbling to card-expand handler
    e.stopPropagation()

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
          src: `${base}screenshots/${s.src}`,
          caption: s.caption,
        }))
      }
    }

    openLightbox(galleryImages, index >= 0 ? index : 0)
  })
}

function openLightbox(images, startIndex) {
  let current = startIndex
  lightboxOpen = true

  const overlay = document.createElement('div')
  overlay.className = 'lightbox'

  // Update image/caption/counter in-place instead of replacing the DOM.
  // This prevents touch state from being nuked mid-gesture.
  function updateImage() {
    const img = images[current]
    const imgEl = overlay.querySelector('.lightbox-image')
    const captionEl = overlay.querySelector('.lightbox-caption')
    const counterEl = overlay.querySelector('.lightbox-counter')
    const prevBtn = overlay.querySelector('.lightbox-prev')
    const nextBtn = overlay.querySelector('.lightbox-next')

    if (imgEl) {
      imgEl.src = img.src
      imgEl.alt = img.caption
    }
    if (captionEl) captionEl.textContent = img.caption || ''
    if (counterEl) counterEl.textContent = `${current + 1} / ${images.length}`
    if (prevBtn) prevBtn.disabled = current === 0
    if (nextBtn) nextBtn.disabled = current === images.length - 1
  }

  // Build the initial DOM (only runs once)
  const img = images[current]
  const hasMultiple = images.length > 1

  const backdrop = document.createElement('div')
  backdrop.className = 'lightbox-backdrop'

  const content = document.createElement('div')
  content.className = 'lightbox-content'

  let prevBtn = null
  if (hasMultiple) {
    prevBtn = document.createElement('button')
    prevBtn.className = 'lightbox-nav lightbox-prev'
    if (current === 0) prevBtn.disabled = true
    prevBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    content.appendChild(prevBtn)
  }

  const imageWrap = document.createElement('div')
  imageWrap.className = 'lightbox-image-wrap'

  const imgEl = document.createElement('img')
  imgEl.src = img.src
  imgEl.alt = img.caption
  imgEl.className = 'lightbox-image'
  imageWrap.appendChild(imgEl)

  if (img.caption) {
    const captionEl = document.createElement('p')
    captionEl.className = 'lightbox-caption'
    captionEl.textContent = img.caption
    imageWrap.appendChild(captionEl)
  }

  if (hasMultiple) {
    const counterEl = document.createElement('p')
    counterEl.className = 'lightbox-counter'
    counterEl.textContent = `${current + 1} / ${images.length}`
    imageWrap.appendChild(counterEl)
  }

  content.appendChild(imageWrap)

  let nextBtn = null
  if (hasMultiple) {
    nextBtn = document.createElement('button')
    nextBtn.className = 'lightbox-nav lightbox-next'
    if (current === images.length - 1) nextBtn.disabled = true
    nextBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    content.appendChild(nextBtn)
  }

  const closeBtn = document.createElement('button')
  closeBtn.className = 'lightbox-close'
  closeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'

  overlay.appendChild(backdrop)
  overlay.appendChild(content)
  overlay.appendChild(closeBtn)

  document.body.appendChild(overlay)
  document.body.style.overflow = 'hidden'
  requestAnimationFrame(() => overlay.classList.add('lightbox-open'))

  function close() {
    overlay.classList.remove('lightbox-open')
    document.body.style.overflow = ''
    // Kill pointer events during close animation so taps don't fall through
    // to cards underneath (the "ghost click" problem on mobile)
    overlay.style.pointerEvents = 'none'
    setTimeout(() => {
      overlay.remove()
      // Extra delay before clearing the flag so any lingering
      // ghost click on the card below gets caught and ignored
      setTimeout(() => { lightboxOpen = false }, 100)
    }, 250)
  }

  // Track whether touch moved — distinguishes taps from swipes
  let didTouchMove = false

  overlay.addEventListener('click', (e) => {
    // If the user was swiping, don't treat it as a tap
    if (didTouchMove) {
      didTouchMove = false
      return
    }

    if (e.target.closest('.lightbox-prev') && current > 0) {
      current--
      updateImage()
    } else if (e.target.closest('.lightbox-next') && current < images.length - 1) {
      current++
      updateImage()
    } else if (e.target.closest('.lightbox-close') || e.target.closest('.lightbox-backdrop')) {
      close()
    }
  })

  // Touch swipe — properly track movement to avoid false triggers
  let touchStartX = 0
  let touchStartY = 0
  let touchMoved = false

  overlay.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
    touchMoved = false
    didTouchMove = false
  }, { passive: true })

  overlay.addEventListener('touchmove', (e) => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX)
    const dy = Math.abs(e.touches[0].clientY - touchStartY)
    // 10px dead zone — sloppy taps won't count as movement
    if (dx > 10 || dy > 10) {
      touchMoved = true
      didTouchMove = true
    }
  }, { passive: true })

  overlay.addEventListener('touchend', (e) => {
    if (!touchMoved) return // Clean tap — let click handler deal with it

    const dx = e.changedTouches[0].clientX - touchStartX
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY)

    // Swipe: horizontal > 80px AND mostly horizontal (not diagonal scroll)
    if (Math.abs(dx) > 80 && Math.abs(dx) > dy * 1.5) {
      if (dx > 0 && current > 0) { current--; updateImage() }
      else if (dx < 0 && current < images.length - 1) { current++; updateImage() }
    }
  }, { passive: true })

  // Keyboard support
  function onKey(e) {
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowLeft' && current > 0) { current--; updateImage() }
    if (e.key === 'ArrowRight' && current < images.length - 1) { current++; updateImage() }
  }
  document.addEventListener('keydown', onKey)

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
  const sections = ['how-it-works', 'projects', 'journey']
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

    // Ignore ghost clicks that fall through after lightbox closes
    if (lightboxOpen) return

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
