#!/usr/bin/env bash
# ==========================================================================
# deploy.sh — Deploy portfolio to GitHub Pages
# Usage: ./scripts/deploy.sh [--dry-run]
# ==========================================================================

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BRANCH="gh-pages"
COMMIT_MSG="Deploy portfolio: $(date -u +'%Y-%m-%d %H:%M:%S UTC')"
DRY_RUN=false

# Parse arguments
for arg in "$@"; do
  case $arg in
    --dry-run) DRY_RUN=true ;;
    -h|--help)
      echo "Usage: $0 [--dry-run]"
      echo "  --dry-run    Show what would be deployed without pushing"
      exit 0
      ;;
  esac
done

log_info() { echo -e "${BLUE}[INFO]${NC} $*"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $*"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $*"; }
log_error() { echo -e "${RED}[ERROR]${NC} $*"; }

main() {
  cd "$REPO_ROOT"

  log_info "Starting deployment from $REPO_ROOT"

  # Check for uncommitted changes
  if ! git diff --quiet || ! git diff --cached --quiet; then
    log_warn "Working directory has uncommitted changes"
    if [ "$DRY_RUN" = false ]; then
      read -p "Continue anyway? (y/N) " -n 1 -r
      echo
      if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_info "Deployment cancelled"
        exit 1
      fi
    fi
  fi

  # Validate required files
  local required_files=("index.html" "assets/css/style.css" "assets/js/main.js" "assets/js/data.js")
  for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
      log_error "Required file missing: $file"
      exit 1
    fi
  done
  log_success "All required files present"

  # Create temporary directory for build
  local tmpdir
  tmpdir=$(mktemp -d)
  trap 'rm -rf "$tmpdir"' EXIT

  log_info "Copying files to temporary directory..."
  cp -r index.html 404.html robots.txt sitemap.xml assets "$tmpdir/"
  cp -r .github "$tmpdir/" 2>/dev/null || true

  # Verify copied files
  local file_count
  file_count=$(find "$tmpdir" -type f | wc -l)
  log_info "Copied $file_count files to $tmpdir"

  if [ "$DRY_RUN" = true ]; then
    log_warn "DRY RUN - Would deploy to branch '$BRANCH'"
    log_info "Files to deploy:"
    find "$tmpdir" -type f | sed "s|$tmpdir/||" | sort
    exit 0
  fi

  # Check if gh-pages branch exists locally or remotely
  if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
    log_info "Branch '$BRANCH' exists locally"
  elif git show-ref --verify --quiet "refs/remotes/origin/$BRANCH"; then
    log_info "Branch '$BRANCH' exists on remote, checking out..."
    git worktree add "$tmpdir/worktree" "$BRANCH" 2>/dev/null || {
      git worktree add "$tmpdir/worktree" -b "$BRANCH" origin/"$BRANCH"
    }
  else
    log_info "Creating new branch '$BRANCH'..."
    git worktree add "$tmpdir/worktree" -b "$BRANCH"
  fi

  # Clean worktree and copy new files
  local worktree="$tmpdir/worktree"
  rm -rf "$worktree"/*
  cp -r "$tmpdir"/* "$worktree/"

  # Commit and push
  cd "$worktree"
  git add -A
  if git diff --cached --quiet; then
    log_info "No changes to deploy"
    exit 0
  fi

  git config user.name "github-actions[bot]"
  git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
  git commit -m "$COMMIT_MSG"

  log_info "Pushing to origin/$BRANCH..."
  git push origin "$BRANCH" --force

  log_success "Deployment complete! Site should be live at https://aakash.dev"
  log_info "Commit: $COMMIT_MSG"
}

main "$@"