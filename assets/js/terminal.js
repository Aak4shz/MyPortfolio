/* ============================================================
   assets/js/terminal.js
   Interactive terminal — visitor real commands run kar sakta hai.
   Commands: help, whoami, about, skills, projects, neofetch,
             uname, ls, cat <file>, contact, sudo hire-me, clear…
   ============================================================ */
(function () {
  const body = document.getElementById("iterm");
  if (!body) return;
  const out = document.getElementById("iterm-out");
  const form = document.getElementById("iterm-form");
  const input = document.getElementById("iterm-input");

  const hist = [];
  let hIdx = -1;

  function print(text, cls) {
    const div = document.createElement("div");
    div.className = "iline " + (cls || "t-out");
    div.textContent = text;
    out.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function cmdLine(text) {
    const div = document.createElement("div");
    div.className = "iline t-cmd";
    const p = document.createElement("span");
    p.className = "t-p";
    p.textContent = "guest@aakash-arch:~$ ";
    div.appendChild(p);
    div.appendChild(document.createTextNode(text));
    out.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  const commands = {
    help: function () {
      return [
        "Available commands:",
        "  help           show this list",
        "  whoami         who is this guy",
        "  about          my story (why Arch, why Linux)",
        "  skills         languages, tools, security toolkit",
        "  projects       what I've built",
        "  neofetch       system info (the important one)",
        "  uname -a       kernel info",
        "  ls             list files",
        "  cat about.md   read a file",
        "  contact        how to reach me",
        "  sudo hire-me   the important one",
        "  pacman -Syu    update system (this is Arch)",
        "  clear          clear the screen"
      ].join("\n");
    },
    whoami: function () {
      return "aakash — BCA student, Arch Linux devotee, future Linux Engineer";
    },
    about: function () {
      return [
        "In 2023, I bought my first laptop. Six months later, Windows had",
        "quietly eaten most of my system. I installed Arch. Never looked back.",
        "",
        "Over the next year, I tested 14 distros — Arch, NixOS, Gentoo, Kali,",
        "BlackArch, Fedora, Debian, and more. Each one taught me something about",
        "control, transparency, and how a system should be built.",
        "",
        "Now I'm building Umbrella-Corporation_OS (custom Arch distro), running",
        "a self-hosted homelab that replaced all my subscriptions, and working",
        "toward my first Linux Engineer role.",
        "",
        "I use Arch, btw."
      ].join("\n");
    },
    skills: function () {
      return [
        "languages    Java · C · C++ · Python · Bash/Zsh · QML",
        "linux        Arch (daily) · NixOS · Fedora · Gentoo · Kali · BlackArch (14 distros tested)",
        "tools        Vim · VSCodium · Kate · Claude Code · Git · GitHub",
        "security     Nmap · Burp Suite · Metasploit · Wireshark · John the Ripper (BlackArch: 49+ tools)",
        "devops       Docker (production) · Kubernetes (learning) · self-hosting · systemd"
      ].join("\n");
    },
    projects: function () {
      return [
        "~/projects:",
        "  Umbrella-Corporation_OS    custom Arch distro (Red Queen theme, bootable ISO)",
        "  homelab                    self-hosted server · replaced all subscriptions",
        "  local-ai-chatbot           Z.ai (GLM) · no cloud, no subscriptions",
        "  Java-Archives-by-AakasH    GitHub practice archive · consistent discipline",
        "",
        "> scroll up to #projects for details"
      ].join("\n");
    },
    neofetch: function () {
      return [
        "                   -`                   aakash@arch-portfolio",
        "                  .o+`                  ---------------------",
        "                 `ooo/                  OS: Arch Linux (btw)",
        "                `+oooo:                 Host: Custom build",
        "               `+oooooo:                Kernel: 6.x",
        "               -+oooooo+:               Uptime: 24/7 (homelab)",
        "             `/:-:++oooo+:              Shell: bash / zsh",
        "            `/++++/+++++++:             Resolution: terminal green",
        "           `/++++++++++++++:            DE: KDE Plasma",
        "          `/+++ooooooooooooo/`          Theme: Umbrella Corp (WIP)",
        "         ./ooosssso++osssssso+`         Current project: Umbrella-Corporation_OS",
        "        .oossssso-````/ossssss+`        Distros tested: 14 (Arch won)",
        "       -osssssso.      :ssssssso.       Goal: Linux Engineer",
        "      :osssssss/        osssso+++.      Discipline: 2hr/day · 5km runs · Russian",
        "     /ossssssss/        +ssssooo/-      Subscriptions: 0 (self-hosted everything)",
        "   `/ossssso+/:-        -:/+osssso+-    -------------------------",
        "  `+sso+:-`                 `.-/+oso:   I use Arch, btw.",
        " `++:.                           `-/+/",
        " .`                                 `/",
        ""
      ].join("\n");
    },
    uname: function () {
      return "Linux aakash-arch 6.x.x-arch1-1 #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux";
    },
    ls: function () {
      return "about.md   skills.md   projects.md   roadmap.md   .dotfiles/";
    },
    cat: function (args) {
      const f = (args[0] || "").toLowerCase();
      if (f.indexOf("about.md") !== -1) return commands.about();
      if (f.indexOf("skills.md") !== -1) return commands.skills();
      if (f.indexOf("projects.md") !== -1) return commands.projects();
      if (f.indexOf("roadmap.md") !== -1) return [
        "✅ Switched to Arch (2023)",
        "✅ Distro-hopping year: 14 distros tested",
        "✅ Built self-hosted homelab",
        "🔄 Umbrella-Corporation_OS (building)",
        "🔄 Docker → Kubernetes",
        "⏳ Land first Linux Engineer role",
        "⏳ RHCSA → LPIC-1",
        "⏳ Master Kubernetes"
      ].join("\n");
      return "cat: " + (f || "?") + ": No such file or directory   (try: ls)";
    },
    contact: function () {
      return [
        "github    → " + SITE.github,
        "linkedin  → " + SITE.linkedin,
        "mail      → " + SITE.email,
        "location  → Ranchi, Jharkhand, India",
        "",
        "> Fellow Linux engineers, distro hoppers, self-hosting evangelists —",
        "> or anyone who believes the terminal is the only real interface.",
        "> Let's talk."
      ].join("\n");
    },
    sudo: function (args) {
      if (args[0] === "hire-me") {
        return "[sudo] permission granted ✓ — " + SITE.email + " — let's build something reliable together. (I use Arch, btw.)";
      }
      return "sudo: try `sudo hire-me`";
    },
    "hire-me": function () {
      return commands.sudo(["hire-me"]);
    },
    pacman: function (args) {
      if (args[0] === "-Syu") {
        return ":: Synchronizing package databases... done.\n:: Starting full system upgrade... all packages up to date.\n:: I use Arch, btw.";
      }
      return "pacman: try `pacman -Syu` (this is Arch, after all)";
    },
    btw: function () {
      return "Yes, I use Arch. Thanks for asking.";
    },
    arch: function () {
      return commands.btw();
    },
    echo: function (args) { return args.join(" "); },
    date: function () { return new Date().toString(); },
    history: function () {
      return hist.map(function (h, i) { return (i + 1) + "  " + h; }).join("\n");
    },
    clear: function () {
      out.replaceChildren();
      return null;
    }
  };

  function run(raw) {
    const line = raw.trim();
    if (!line) return;
    hist.unshift(line);
    hIdx = -1;
    cmdLine(line);
    const parts = line.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    const fn = commands[cmd];
    if (fn) {
      const res = fn(args);
      if (res) print(res, "t-out");
    } else {
      print("bash: " + cmd + ": command not found   (try: help)", "t-err");
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    run(input.value);
    input.value = "";
  });

  body.addEventListener("click", function () { input.focus(); });

  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (hIdx < hist.length - 1) { hIdx++; input.value = hist[hIdx]; }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIdx > 0) { hIdx--; input.value = hist[hIdx]; }
      else { hIdx = -1; input.value = ""; }
    }
  });

  /* welcome banner */
  print("Arch Linux 6.x (tty1)");
  print("Last login: " + new Date().toLocaleString());
  print("Type 'help' for available commands. Try 'neofetch' (you'll like it).");
})();
