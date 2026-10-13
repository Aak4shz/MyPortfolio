/* ============================================================
   assets/js/matrix.js
   Hero ke peeche subtle "matrix rain" — performance friendly:
   tab hidden ya screen se bahar ho to pause, reduced-motion me off.
   ============================================================ */
(function () {
  const canvas = document.getElementById("matrix-canvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.remove();
    return;
  }

  const ctx = canvas.getContext("2d");
  const GLYPHS = "01<>{}[]/\\$#;无效アイウエオカキクケコ".split("");
  let cols = 0, dropY = [], w = 0, h = 0, frame = 0, raf = 0, inView = false;

  function resize() {
    w = canvas.width = canvas.offsetWidth || 800;
    h = canvas.height = canvas.offsetHeight || 600;
    cols = Math.ceil(w / 16);
    dropY = Array.from({ length: cols }, () => (Math.random() * h) / 16);
  }

  function draw() {
    if (!inView || document.hidden) { raf = 0; return; }
    frame++;
    if (frame % 2 === 0) { /* ~30fps — battery friendly */
      ctx.fillStyle = "rgba(7, 11, 18, 0.16)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = "13px 'JetBrains Mono', monospace";
      for (let i = 0; i < cols; i++) {
        const bright = Math.random() < 0.03;
        ctx.fillStyle = bright ? "rgba(0, 255, 65, 0.6)" : "rgba(0, 255, 65, 0.12)";
        ctx.fillText(GLYPHS[(Math.random() * GLYPHS.length) | 0], i * 16, dropY[i] * 16);
        if (dropY[i] * 16 > h && Math.random() > 0.976) dropY[i] = 0;
        else dropY[i]++;
      }
    }
    raf = requestAnimationFrame(draw);
  }

  function start() { inView = true; if (!raf) raf = requestAnimationFrame(draw); }
  function stop() { inView = false; if (raf) { cancelAnimationFrame(raf); raf = 0; } }

  resize();
  addEventListener("resize", resize);

  new IntersectionObserver(
    (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
    { threshold: 0.02 }
  ).observe(canvas);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else if (canvas.getBoundingClientRect().top < innerHeight) start();
  });
})();
