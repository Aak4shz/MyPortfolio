/* ==========================================================================
   Scroll Reveal — IntersectionObserver based reveal animations
   ========================================================================== */

/**
 * ScrollReveal class for managing scroll-triggered animations
 */
export class ScrollReveal {
  /**
   * @param {object} options
   * @param {string} options.selector - CSS selector for elements to reveal
   * @param {number} options.threshold - IntersectionObserver threshold (0-1)
   * @param {string} options.rootMargin - Root margin for observer
   * @param {number} options.delay - Base delay between staggered items (ms)
   * @param {Function} options.onReveal - Callback when element is revealed
   */
  constructor(options = {}) {
    this.selector = options.selector || '.reveal, .reveal-stagger';
    this.threshold = options.threshold ?? 0.12;
    this.rootMargin = options.rootMargin || '0px 0px -10% 0px';
    this.delay = options.delay ?? 80;
    this.onReveal = options.onReveal || (() => {});
    this.observer = null;
    this.elements = [];
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Initialize the observer and start watching elements
   */
  init() {
    if (this.reducedMotion) {
      this.revealAllInstantly();
      return;
    }

    this.elements = Array.from(document.querySelectorAll(this.selector));
    if (!this.elements.length) return;

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
      threshold: this.threshold,
      rootMargin: this.rootMargin
    });

    this.elements.forEach(el => this.observer.observe(el));
  }

  /**
   * Handle intersection events
   * @param {IntersectionObserverEntry[]} entries
   */
  handleIntersect(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      this.observer.unobserve(el);

      // Handle stagger containers
      if (el.classList.contains('reveal-stagger')) {
        this.revealStaggerChildren(el);
      } else {
        this.revealElement(el);
      }
    });
  }

  /**
   * Reveal a single element
   * @param {Element} el
   */
  revealElement(el) {
    requestAnimationFrame(() => {
      el.classList.add('is-visible');
      this.onReveal(el);
    });
  }

  /**
   * Reveal stagger children with delay
   * @param {Element} container
   */
  revealStaggerChildren(container) {
    const children = Array.from(container.children);
    children.forEach((child, index) => {
      setTimeout(() => {
        this.revealElement(child);
      }, index * this.delay);
    });
  }

  /**
   * Reveal all elements instantly (for reduced motion)
   */
  revealAllInstantly() {
    this.elements = Array.from(document.querySelectorAll(this.selector));
    this.elements.forEach(el => {
      el.classList.add('is-visible');
      if (el.classList.contains('reveal-stagger')) {
        Array.from(el.children).forEach(child => child.classList.add('is-visible'));
      }
    });
  }

  /**
   * Add new elements to observe (for dynamic content)
   * @param {Element|Element[]} elements
   */
  observe(elements) {
    const els = Array.isArray(elements) ? elements : [elements];
    if (this.reducedMotion) {
      els.forEach(el => this.revealElement(el));
      return;
    }
    els.forEach(el => {
      if (this.observer) this.observer.observe(el);
    });
  }

  /**
   * Destroy the observer
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

/**
 * Create and initialize a ScrollReveal instance
 * @param {object} options - ScrollReveal options
 * @returns {ScrollReveal}
 */
export function createScrollReveal(options) {
  const sr = new ScrollReveal(options);
  sr.init();
  return sr;
}

/**
 * Default scroll reveal instance for the portfolio
 */
export const defaultScrollReveal = createScrollReveal({
  selector: '.reveal, .reveal-stagger',
  threshold: 0.12,
  rootMargin: '0px 0px -50px 0px',
  delay: 80
});