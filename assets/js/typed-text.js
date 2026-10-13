/* ==========================================================================
   Typed Text — Typewriter effect for rotating text
   ========================================================================== */

/**
 * TypedText class for typewriter animation
 */
export class TypedText {
  /**
   * @param {object} options
   * @param {Element|string} options.element - Target element or selector
   * @param {string[]} options.strings - Strings to type
   * @param {number} options.typeSpeed - Typing speed (ms per char)
   * @param {number} options.deleteSpeed - Deleting speed (ms per char)
   * @param {number} options.pauseDelay - Pause before deleting (ms)
   * @param {number} options.startDelay - Delay before starting (ms)
   * @param {boolean} options.loop - Loop infinitely
   * @param {string} options.cursorChar - Cursor character
   * @param {Function} options.onComplete - Callback when a string completes
   * @param {Function} options.onLoop - Callback when loop restarts
   */
  constructor(options = {}) {
    this.element = typeof options.element === 'string'
      ? document.querySelector(options.element)
      : options.element;
    this.strings = options.strings || [];
    this.typeSpeed = options.typeSpeed ?? 65;
    this.deleteSpeed = options.deleteSpeed ?? 30;
    this.pauseDelay = options.pauseDelay ?? 1700;
    this.startDelay = options.startDelay ?? 350;
    this.loop = options.loop ?? true;
    this.cursorChar = options.cursorChar || '|';
    this.onComplete = options.onComplete || (() => {});
    this.onLoop = options.onLoop || (() => {});

    this.currentStringIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.isPaused = false;
    this.timeoutId = null;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Start the typewriter animation
   */
  start() {
    if (!this.element || !this.strings.length) return;
    if (this.reducedMotion) {
      this.element.textContent = this.strings.join(' | ');
      return;
    }

    // Add cursor element if not present
    if (!this.element.querySelector('.typed-cursor')) {
      const cursor = document.createElement('span');
      cursor.className = 'typed-cursor';
      cursor.textContent = this.cursorChar;
      cursor.setAttribute('aria-hidden', 'true');
      this.element.appendChild(cursor);
    }

    // Start after initial delay
    this.timeoutId = setTimeout(() => this.tick(), this.startDelay);
  }

  /**
   * Stop the animation
   */
  stop() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  /**
   * Main animation tick
   */
  tick() {
    const currentString = this.strings[this.currentStringIndex];
    const cursor = this.element.querySelector('.typed-cursor');

    if (this.isDeleting) {
      // Deleting phase
      this.currentCharIndex--;
      this.element.textContent = currentString.slice(0, this.currentCharIndex);
      if (cursor) this.element.appendChild(cursor);

      if (this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentStringIndex = (this.currentStringIndex + 1) % this.strings.length;
        this.onLoop(this.currentStringIndex);
        this.timeoutId = setTimeout(() => this.tick(), this.startDelay);
      } else {
        this.timeoutId = setTimeout(() => this.tick(), this.deleteSpeed);
      }
    } else {
      // Typing phase
      this.currentCharIndex++;
      this.element.textContent = currentString.slice(0, this.currentCharIndex);
      if (cursor) this.element.appendChild(cursor);

      if (this.currentCharIndex === currentString.length) {
        this.onComplete(this.currentStringIndex);
        if (this.loop) {
          this.isDeleting = true;
          this.timeoutId = setTimeout(() => this.tick(), this.pauseDelay);
        }
      } else {
        this.timeoutId = setTimeout(() => this.tick(), this.typeSpeed);
      }
    }
  }

  /**
   * Update strings and restart
   * @param {string[]} strings
   */
  setStrings(strings) {
    this.strings = strings;
    this.currentStringIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.stop();
    this.start();
  }
}

/**
 * Create and start a TypedText instance
 * @param {object} options - TypedText options
 * @returns {TypedText}
 */
export function createTypedText(options) {
  const tt = new TypedText(options);
  tt.start();
  return tt;
}

/**
 * Default typed text for hero role rotation
 */
export const heroTypedText = (element) => createTypedText({
  element,
  strings: [
    'System Administrator',
    'Linux Engineer (in progress)',
    'Bash Scripting Nerd',
    'Home Lab Builder',
    'Uptime Obsessive'
  ],
  typeSpeed: 65,
  deleteSpeed: 30,
  pauseDelay: 1700,
  startDelay: 350
});