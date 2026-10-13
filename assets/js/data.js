/* ============================================================
   assets/js/data.js
   APNA PURA CONTENT YAHAN EDIT KARO — single source of truth.
   Content badalne ke liye baaki kisi file ko chhoona nahi hai.
   ============================================================ */

const SITE = {
  name: "Aakash",
  tagline: "I use Arch, btw.",
  location: "Ranchi, Jharkhand, India",
  roles: [
    "Linux Engineer (in the making)",
    "Arch Linux Devotee",
    "System Administrator",
    "Self-Hosting Evangelist",
    "Distro Hopper (Reformed)"
  ],
  email: "aakash@example.com",              // TODO: apni real email
  github: "https://github.com/aakash",      // TODO: real GitHub profile
  linkedin: "https://linkedin.com/in/aakash" // TODO: real LinkedIn profile
};

/* Skills — bento grid me render hote hain.
   span = kitni columns khaata hai (total grid 6 columns ka hai). */
const SKILL_GROUPS = [
  {
    id: "languages", icon: "⚡", title: "Languages", span: 3,
    desc: "From system-level to scripting — the languages I speak.",
    chips: ["Java", "C", "C++", "Python", "Bash/Zsh", "QML"]
  },
  {
    id: "linux", icon: "🐧", title: "Linux Systems", span: 3,
    desc: "Arch daily driver + 14 distros tested. I chose the harder path.",
    chips: ["Arch Linux", "NixOS", "Fedora", "Debian", "Alpine", "Gentoo", "ParrotOS", "Kali", "BlackArch"]
  },
  {
    id: "tools", icon: "🛠️", title: "Daily Tools", span: 2,
    desc: "Terminal-first workflow. VSCodium when I need to.",
    chips: ["Vim", "VSCodium", "VS Code", "Kate", "Claude Code", "Git", "GitHub"]
  },
  {
    id: "security", icon: "🔐", title: "Security Toolkit", span: 2,
    desc: "BlackArch ecosystem (49+ tools). These three are my go-to.",
    chips: ["Nmap", "Burp Suite", "Metasploit", "Wireshark", "John the Ripper"]
  },
  {
    id: "devops", icon: "🚀", title: "DevOps & Containers", span: 2,
    desc: "Learning Kubernetes. Docker's already in production on my homelab.",
    chips: ["Docker", "Kubernetes (WIP)", "systemd", "networking", "self-hosting"]
  }
];

/* Projects — repo me apne real GitHub links daal do (abhi "#" hai). */
const PROJECTS = [
  {
    name: "Umbrella-Corporation_OS",
    desc: "Custom Arch distro themed around Red Queen / Umbrella Corp aesthetic. Pre-bundles JDK 17, Python, Git, Ollama, Aider, Claude Code. Bootable ISO via archiso, with a from-scratch SDDM login (animated biohazard logo, red grid scanlines). Academic capstone + genuine technical flex.",
    tags: ["Arch Linux", "archiso", "SDDM", "KDE Plasma", "Red Queen theme"],
    repo: "#", demo: ""
  },
  {
    name: "Homelab (Personal Server)",
    desc: "Self-hosted server replacing all my subscriptions — entertainment, music, movies, cloud storage. Own your data, own your tools. Running 24/7, backing up everything that matters.",
    tags: ["self-hosting", "Linux server", "privacy-first", "backup"],
    repo: "#", demo: ""
  },
  {
    name: "Local AI Chatbot",
    desc: "Self-hosted AI chatbot on Z.ai (GLM backend) — no cloud API, no subscriptions. Runs from my own infrastructure. Privacy-first AI assistant that never phones home.",
    tags: ["Z.ai", "GLM", "self-hosted AI", "Python"],
    repo: "#", demo: ""
  },
  {
    name: "Java-Archives-by-AakasH",
    desc: "Running GitHub archive of my Java practice over time. A visible record of consistent, disciplined coding — proof that progress is a daily system, not a burst of motivation.",
    tags: ["Java", "practice archive", "GitHub", "programming fundamentals"],
    repo: "#", demo: ""
  }
];

/* Roadmap — status: "done" | "doing" | "next" */
const ROADMAP = [
  { status: "done", text: "Switched to Arch Linux (2023) — never looked back" },
  { status: "done", text: "Distro-hopping year: 14 distros tested (Arch, NixOS, Gentoo, Kali, BlackArch, ...)" },
  { status: "done", text: "Built self-hosted homelab — replaced all subscriptions" },
  { status: "doing", text: "Umbrella-Corporation_OS (custom Arch ISO) — capstone project" },
  { status: "doing", text: "Docker in production, learning Kubernetes" },
  { status: "next", text: "Land first Linux Engineer / Sysadmin role" },
  { status: "next", text: "Linux certifications: target RHCSA → LPIC-1" },
  { status: "next", text: "Master Kubernetes + expand homelab infrastructure" }
];
