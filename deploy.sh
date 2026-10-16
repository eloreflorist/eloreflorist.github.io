#!/bin/bash
set -e

echo "Building the Next.js site..."
npm run build

# Add .nojekyll so GitHub Pages doesn't ignore _next/ assets
touch out/.nojekyll

echo "Deploying to gh-pages branch..."

# Use git worktree for a clean, reliable deploy
REPO_URL=$(git remote get-url origin)
DEPLOY_DIR=$(mktemp -d)

git worktree add "$DEPLOY_DIR" gh-pages 2>/dev/null || {
  # gh-pages branch doesn't exist yet — create an orphan
  git worktree add --orphan -b gh-pages "$DEPLOY_DIR"
}

# Clear old content and copy new build
rm -rf "$DEPLOY_DIR"/*
cp -r out/. "$DEPLOY_DIR/"

cd "$DEPLOY_DIR"
git add -A
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M:%S')" --allow-empty

echo "Pushing to GitHub Pages..."
git push -f origin gh-pages

# Cleanup worktree
cd -
git worktree remove "$DEPLOY_DIR" --force

echo "Deployment complete! Your site will be available at:"
echo "https://eloreflorist.github.io/"