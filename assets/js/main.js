/* ============================================================
   assets/js/main.js
   UX + rendering: nav, scroll progress, reveals, hero animations,
   custom cursor, card tilt, aur data.js se content render karna.
   ============================================================ */
(function () {
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- content render (from assets/js/data.js) ---------- */
  const bento = document.getElementById("bento");
  if (bento && typeof SKILL_GROUPS !== "undefined") {
    bento.innerHTML = SKILL_GROUPS.map(function (g) {
      var chips = g.chips.map(function (c) {
        return '<li class="chip">' + c + "</li>";
      }).join("");
      return (
        '<article class="card bento-card" style="--span:' + g.span + '">' +
          '<h3 class="card-title"><span class="ico">' + g.icon + "</span>" + g.title + "</h3>" +
          '<p class="card-desc muted">' + g.desc + "</p>" +
          '<ul class="chips">' + chips + "</ul>" +
        "</article>"
      );
    }).join("");
  }

  const projGrid = document.getElementById("proj-grid");
  if (projGrid && typeof PROJECTS !== "undefined") {
    projGrid.innerHTML = PROJECTS.map(function (p) {
      var chips = p.tags.map(function (t) {
        return '<li class="chip">' + t + "</li>";
      }).join("");
      var links = "";
      if (p.repo) links += '<a href="' + p.repo + '" target="_blank" rel="noopener">[ code ]</a>';
      if (p.demo) links += '<a href="' + p.demo + '" target="_blank" rel="noopener">[ live ]</a>';
      return (
        '<article class="card proj-card" data-tilt>' +
          '<div class="proj-top"><h3 class="mono">' + p.name + '</h3><span class="proj-arrow" aria-hidden="true">\u2197</span></div>' +
          '<p class="muted">' + p.desc + "</p>" +
          '<ul class="chips">' + chips + "</ul>" +
          '<div class="proj-links mono">' + links + "</div>" +
        "</article>"
      );
    }).join("");
  }

  const timeline = document.getElementById("timeline");
  if (timeline && typeof ROADMAP !== "undefined") {
    var icon = { done: "\u2705", doing: "\uD83D\uDD04", next: "\u23F3" };
    timeline.innerHTML = ROADMAP.map(function (r) {
      return (
        '<li class="tl-item ' + r.status + '">' +
          '<span class="tl-dot" aria-hidden="true"></span>' +
          '<p class="tl-status mono">' + icon[r.status] + "</p>" +
          '<p class="tl-text">' + r.text + "</p>" +
        "</li>"
      );
    }).join("");
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- nav: scroll state + progress bar ---------- */
  const nav = document.getElementById("nav");
  const bar = document.getElementById("progress-bar");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- mobile menu ---------- */
  const navLinks = document.getElementById("nav-links");
  const burger = document.getElementById("nav-burger");
  burger.addEventListener("click", function () {
    const open = navLinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      navLinks.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- active nav link (section spy) ---------- */
  const spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      document.querySelectorAll(".nav-link").forEach(function (l) {
        l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id);
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });

  /* ---------- scroll reveal ---------- */
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .reveal-stagger").forEach(function (el) { io.observe(el); });

  /* ---------- rotating roles typing ---------- */
  const roleEl = document.getElementById("typed-role");
  if (roleEl && !REDUCED && typeof SITE !== "undefined") {
    let i = 0, pos = 0, deleting = false;
    (function tick() {
      const word = SITE.roles[i];
      roleEl.textContent = word.slice(0, pos);
      if (!deleting && pos < word.length) { pos++; setTimeout(tick, 65); }
      else if (!deleting) { deleting = true; setTimeout(tick, 1700); }
      else if (pos > 0) { pos--; setTimeout(tick, 30); }
      else { deleting = false; i = (i + 1) % SITE.roles.length; setTimeout(tick, 350); }
    })();
  }

  /* ---------- hero boot-log terminal ---------- */
  const boot = document.getElementById("boot-term");
  if (boot) {
    const lines = [
      { cmd: "ssh guest@aakash-arch", out: ["Arch Linux 6.x (GNU/Linux 6.x.x-arch1-1 x86_64)", "Last login: just now — welcome to the terminal."] },
      { cmd: "whoami", out: ["aakash — BCA student, Arch Linux devotee, future Linux Engineer"] },
      { cmd: "cat ~/.mission", out: ["Build Umbrella-Corporation_OS. Self-host everything. Land first Linux role."] },
      { cmd: "neofetch --one-liner", out: ["Arch Linux (btw) · 14 distros tested · homelab 24/7 · I chose the terminal
    ];
    const PROMPT = '<span class="t-p">guest@aakash-arch:~$</span> ';
    if (REDUCED) return; /* HTML me static fallback lines pehle se hain */

    function addLine(cls) {
      const d = document.createElement("div");
      d.className = "iline " + cls;
      boot.appendChild(d);
      return d;
    }
    boot.replaceChildren();
    let li = 0;
    function typeNext() {
      if (li >= lines.length) {
        const d = addLine("");
        d.innerHTML = PROMPT + '<span class="caret" aria-hidden="true"></span>';
        return;
      }
      const item = lines[li];
      const d = addLine("t-cmd");
      let c = 0;
      (function step() {
        if (c <= item.cmd.length) {
          d.innerHTML = PROMPT + item.cmd.slice(0, c);
          c++;
          setTimeout(step, 26);
        } else {
          item.out.forEach(function (o) {
            const p = document.createElement("div");
            p.className = "iline t-out";
            p.textContent = o;
            boot.appendChild(p);
          });
          li++;
          setTimeout(typeNext, 450);
        }
      })();
    }
    typeNext();
  }

  /* ---------- 3D tilt cards ---------- */
  if (FINE && !REDUCED) {
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          "perspective(700px) rotateX(" + (-y * 6).toFixed(2) + "deg) rotateY(" + (x * 6).toFixed(2) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () { card.style.transform = ""; });
    });
  }

  /* ---------- custom cursor ---------- */
  if (FINE && !REDUCED) {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    let x = 0, y = 0, rx = 0, ry = 0, scale = 1;
    window.addEventListener("mousemove", function (e) {
      x = e.clientX; y = e.clientY;
      document.body.classList.add("custom-cursor");
      dot.style.transform = "translate(" + x + "px," + y + "px)";
    });
    (function follow() {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.style.transform = "translate(" + rx + "px," + ry + "px) scale(" + scale + ")";
      requestAnimationFrame(follow);
    })();
    document.querySelectorAll("a, button, .chip, input").forEach(function (el) {
      el.addEventListener("mouseenter", function () { scale = 1.5; });
      el.addEventListener("mouseleave", function () { scale = 1; });
    });
    document.addEventListener("mousedown", function () { document.body.classList.add("pressing"); });
    document.addEventListener("mouseup", function () { document.body.classList.remove("pressing"); });
  }
})();
