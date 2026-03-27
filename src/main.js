import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Nav: glassmorphism intensifies on scroll ──────────────────────────────────
const header = document.querySelector('header')
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.style.backdropFilter = 'blur(24px)'
    header.style.webkitBackdropFilter = 'blur(24px)'
    header.style.boxShadow = '0 8px 40px rgba(0,0,0,0.08)'
  } else {
    header.style.backdropFilter = 'blur(12px)'
    header.style.webkitBackdropFilter = 'blur(12px)'
    header.style.boxShadow = '0 8px 30px rgba(0,0,0,0.04)'
  }
}, { passive: true })

// ── Hero: entrance animation ──────────────────────────────────────────────────
const heroTl = gsap.timeline({ delay: 0.2, defaults: { ease: 'power3.out' } })

// Overline label
heroTl.from('section:first-of-type .font-label', {
  y: 16, opacity: 0, duration: 0.6
}, 0)

// Split headline into words for staggered reveal
const h1 = document.querySelector('h1')
if (h1) {
  // Wrap each word in a clip container manually
  const text = h1.innerHTML
  // Animate the whole h1 with a clip + slide effect
  heroTl.from(h1, {
    y: 60,
    opacity: 0,
    duration: 1.1,
    ease: 'power4.out',
  }, 0.1)
}

// Hero subtext
heroTl.from('section:first-of-type p', {
  y: 24, opacity: 0, duration: 0.8
}, 0.5)

// Hero image panel
heroTl.from('section:first-of-type .lg\\:col-span-4', {
  x: 50, opacity: 0, duration: 1.0, ease: 'power3.out'
}, 0.3)

// ── Parallax: hero image slow drift on scroll ─────────────────────────────────
const heroImg = document.querySelector('section:first-of-type .lg\\:col-span-4 img')
if (heroImg) {
  gsap.to(heroImg, {
    yPercent: -12,
    ease: 'none',
    scrollTrigger: {
      trigger: 'section:first-of-type',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    }
  })
}

// ── Technology section ────────────────────────────────────────────────────────
const techSection = document.querySelector('section.bg-surface-container-low')
if (techSection) {
  // Section header
  gsap.from(techSection.querySelectorAll('h2, p, a'), {
    scrollTrigger: { trigger: techSection, start: 'top 75%', toggleActions: 'play none none none' },
    y: 30, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out'
  })

  // Tech cards stagger up
  gsap.from(techSection.querySelectorAll('.md\\:col-span-2, .bg-primary'), {
    scrollTrigger: { trigger: techSection, start: 'top 65%', toggleActions: 'play none none none' },
    y: 50, opacity: 0, duration: 0.85, stagger: 0.18, ease: 'power3.out'
  })

  // Tech card image subtle zoom on scroll
  const techImg = techSection.querySelector('img')
  if (techImg) {
    gsap.fromTo(techImg,
      { scale: 1.08 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: techImg,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      }
    )
  }
}

// ── Impact section ────────────────────────────────────────────────────────────
const impactSection = document.querySelector('section.py-32.overflow-hidden')
if (impactSection) {
  // Left column: headline + stats slide in from left
  gsap.from(impactSection.querySelector('h2'), {
    scrollTrigger: { trigger: impactSection, start: 'top 70%', toggleActions: 'play none none none' },
    x: -40, opacity: 0, duration: 0.9, ease: 'power3.out'
  })

  gsap.from(impactSection.querySelectorAll('.flex.gap-6'), {
    scrollTrigger: { trigger: impactSection, start: 'top 65%', toggleActions: 'play none none none' },
    x: -30, opacity: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out'
  })

  gsap.from(impactSection.querySelector('button'), {
    scrollTrigger: { trigger: impactSection, start: 'top 60%', toggleActions: 'play none none none' },
    y: 20, opacity: 0, duration: 0.6, ease: 'power3.out'
  })

  // Right column: circle image scale in + float
  const circle = impactSection.querySelector('.aspect-square')
  if (circle) {
    gsap.from(circle, {
      scrollTrigger: { trigger: impactSection, start: 'top 70%', toggleActions: 'play none none none' },
      scale: 0.88, opacity: 0, duration: 1.1, ease: 'power3.out'
    })

    // Gentle continuous float
    gsap.to(circle, {
      y: -14,
      duration: 3.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })
  }

  // Quote card slides up
  const quoteCard = impactSection.querySelector('.absolute.-bottom-8')
  if (quoteCard) {
    gsap.from(quoteCard, {
      scrollTrigger: { trigger: impactSection, start: 'top 60%', toggleActions: 'play none none none' },
      y: 30, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out'
    })
  }

  // Parallax on impact circle image
  const impactImg = impactSection.querySelector('.aspect-square img')
  if (impactImg) {
    gsap.to(impactImg, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: impactSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      }
    })
  }
}

// ── News section ──────────────────────────────────────────────────────────────
const newsSection = document.querySelector('section.bg-surface')
if (newsSection) {
  gsap.from(newsSection.querySelector('h2'), {
    scrollTrigger: { trigger: newsSection, start: 'top 75%', toggleActions: 'play none none none' },
    y: 24, opacity: 0, duration: 0.7, ease: 'power3.out'
  })

  gsap.from(newsSection.querySelectorAll('.min-w-\\[400px\\]'), {
    scrollTrigger: { trigger: newsSection, start: 'top 70%', toggleActions: 'play none none none' },
    y: 40, opacity: 0, duration: 0.75, stagger: 0.15, ease: 'power3.out'
  })
}

// ── CTA section ───────────────────────────────────────────────────────────────
const ctaSection = document.querySelector('section.py-40')
if (ctaSection) {
  gsap.from(ctaSection.querySelector('h2'), {
    scrollTrigger: { trigger: ctaSection, start: 'top 70%', toggleActions: 'play none none none' },
    y: 60, opacity: 0, duration: 1.1, ease: 'power4.out'
  })

  gsap.from(ctaSection.querySelectorAll('button'), {
    scrollTrigger: { trigger: ctaSection, start: 'top 65%', toggleActions: 'play none none none' },
    y: 24, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out'
  })

  // Animated glow blobs in CTA background
  const blobs = ctaSection.querySelectorAll('.absolute .rounded-full')
  if (blobs.length) {
    gsap.to(blobs[0], { x: 40, y: -30, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    if (blobs[1]) gsap.to(blobs[1], { x: -30, y: 20, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  }
}

// ── Footer fade in ────────────────────────────────────────────────────────────
gsap.from('footer', {
  scrollTrigger: { trigger: 'footer', start: 'top 90%', toggleActions: 'play none none none' },
  y: 20, opacity: 0, duration: 0.6, ease: 'power2.out'
})

// ── Magnetic hover effect on primary buttons ──────────────────────────────────
document.querySelectorAll('button, a').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(el, { x: x * 0.18, y: y * 0.18, duration: 0.3, ease: 'power2.out' })
  })
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
  })
})
