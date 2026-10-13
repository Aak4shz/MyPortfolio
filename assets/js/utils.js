/* ==========================================================================
   Utils — Shared utility functions
   ========================================================================== */

/**
 * Debounce function execution
 * @param {Function} fn - Function to debounce
 * @param {number} wait - Wait time in ms
 * @param {boolean} immediate - Execute on leading edge
 * @returns {Function} Debounced function
 */
export function debounce(fn, wait = 200, immediate = false) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) fn.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) fn.apply(context, args);
  };
}

/**
 * Throttle function execution
 * @param {Function} fn - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function} Throttled function
 */
export function throttle(fn, limit = 200) {
  let inThrottle;
  return function (...args) {
    const context = this;
    if (!inThrottle) {
      fn.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if element is in viewport
 * @param {Element} el - Element to check
 * @param {number} offset - Offset from viewport edge
 * @returns {boolean}
 */
export function isInViewport(el, offset = 0) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= offset &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) - offset &&
    rect.right >= offset
  );
}

/**
 * Smooth scroll to element
 * @param {string|Element} target - Selector or element
 * @param {number} offset - Offset from top
 */
export function smoothScrollTo(target, offset = 0) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Generate random ID
 * @param {number} length - ID length
 * @returns {string}
 */
export function generateId(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

/**
 * Format date for display
 * @param {Date|string|number} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string}
 */
export function formatDate(date, options = {}) {
  const d = date instanceof Date ? date : new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options
  });
}

/**
 * Escape HTML to prevent XSS
 * @param {string} str - String to escape
 * @returns {string}
 */
export function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Create element with attributes and children
 * @param {string} tag - Tag name
 * @param {object} attrs - Attributes object
 * @param {...(string|Element)} children - Child elements or text
 * @returns {Element}
 */
export function createElement(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'class') el.className = value;
    else if (key === 'style' && typeof value === 'object') Object.assign(el.style, value);
    else if (key.startsWith('on') && typeof value === 'function') el.addEventListener(key.slice(2).toLowerCase(), value);
    else el.setAttribute(key, value);
  });
  children.forEach(child => {
    if (child instanceof Node) el.appendChild(child);
    else el.appendChild(document.createTextNode(String(child)));
  });
  return el;
}

/**
 * Query selector with optional scope
 * @param {string} selector - CSS selector
 * @param {Element} scope - Scope element (default: document)
 * @returns {Element|null}
 */
export function $(selector, scope = document) {
  return scope.querySelector(selector);
}

/**
 * Query selector all with optional scope
 * @param {string} selector - CSS selector
 * @param {Element} scope - Scope element (default: document)
 * @returns {NodeList}
 */
export function $$(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

/**
 * Add class(es) to element
 * @param {Element} el - Element
 * @param {...string} classes - Classes to add
 */
export function addClass(el, ...classes) {
  el.classList.add(...classes);
}

/**
 * Remove class(es) from element
 * @param {Element} el - Element
 * @param {...string} classes - Classes to remove
 */
export function removeClass(el, ...classes) {
  el.classList.remove(...classes);
}

/**
 * Toggle class on element
 * @param {Element} el - Element
 * @param {string} className - Class to toggle
 * @param {boolean} force - Force add/remove
 * @returns {boolean} New state
 */
export function toggleClass(el, className, force) {
  return el.classList.toggle(className, force);
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check if device supports hover
 * @returns {boolean}
 */
export function supportsHover() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

/**
 * Wait for DOM ready
 * @returns {Promise<void>}
 */
export function domReady() {
  return new Promise(resolve => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', resolve, { once: true });
    } else {
      resolve();
    }
  });
}

/**
 * Wait for images to load
 * @param {Element} container - Container element
 * @returns {Promise<void>}
 */
export function imagesLoaded(container = document) {
  const images = container.querySelectorAll('img');
  const promises = Array.from(images).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true });
    });
  });
  return Promise.all(promises);
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    } catch {
      document.body.removeChild(textarea);
      return false;
    }
  }
}