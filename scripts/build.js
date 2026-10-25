#!/usr/bin/env node
/* ==========================================================================
   build.js — Simple dev server and build script
   Usage: node scripts/build.js [serve|build]
   ========================================================================== */

import { createServer } from 'http';
import { readFileSync, existsSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'fs';
import { join, extname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function getMimeType(filePath) {
  return MIME_TYPES[extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function serveFile(res, filePath, statusCode = 200) {
  try {
    const content = readFileSync(filePath);
    res.writeHead(statusCode, { 'Content-Type': getMimeType(filePath) });
    res.end(content);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}

function serveDev(req, res) {
  let filePath = join(ROOT, req.url === '/' ? '/index.html' : req.url);

  // Handle SPA routing - fallback to index.html for non-asset paths
  if (!existsSync(filePath) && !extname(filePath)) {
    filePath = join(ROOT, 'index.html');
  }

  if (existsSync(filePath)) {
    serveFile(res, filePath);
  } else {
    serveFile(res, join(ROOT, '404.html'), 404);
  }
}

function build() {
  console.log('🔨 Building for production...');

  // Clean dist
  if (existsSync(DIST)) rmSync(DIST, { recursive: true });
  mkdirSync(DIST, { recursive: true });

  // Copy all files except dev-only
  const excludeDirs = ['.git', 'scripts', 'components', '.github', 'node_modules'];
  const excludeFiles = ['.md', 'LICENSE', 'README.md'];

  function copyDir(src, dest) {
    const entries = readFileSync(src, { encoding: 'utf8', recursive: true });
    // This is a simplified copy - in reality you'd use a proper recursive copy
    // For now, just copy the main structure
  }

  // Simple copy of required files/dirs
  const toCopy = [
    'index.html',
    '404.html',
    'robots.txt',
    'sitemap.xml',
    'CNAME',
    'assets'
  ];

  for (const item of toCopy) {
    const src = join(ROOT, item);
    const dest = join(DIST, item);
    if (existsSync(src)) {
      cpSync(src, dest, { recursive: true });
      console.log(`  ✅ Copied ${item}`);
    }
  }

  console.log(`✨ Build complete! Output in ${DIST}`);
  console.log('📦 Deploy with: npx gh-pages -d dist');
}

function startServer(port = 3000) {
  const server = createServer(serveDev);
  server.listen(port, () => {
    console.log(`🚀 Dev server running at http://localhost:${port}`);
    console.log('📁 Serving from:', ROOT);
    console.log('⚡ Press Ctrl+C to stop');
  });

  process.on('SIGINT', () => {
    console.log('\n👋 Shutting down...');
    server.close(() => process.exit(0));
  });
}

const command = process.argv[2] || 'serve';

switch (command) {
  case 'build':
    build();
    break;
  case 'serve':
    startServer(3000);
    break;
  default:
    console.log('Usage: node scripts/build.js [serve|build]');
    process.exit(1);
}