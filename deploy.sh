#!/bin/bash

# Build the Next.js site
echo "Building the Next.js site..."
npm run build

# Create a temporary directory for deployment
echo "Preparing for deployment..."
mkdir -p deploy
cp -r out/* deploy/

# Initialize git in deploy directory
cd deploy
git init
git checkout -b main
git add -A
git commit -m "Deploy to GitHub Pages"

# Add your GitHub repository URL
# Replace with your actual repository URL
git remote add origin https://github.com/eloreflorist/eloreflorist.github.io.git

# Push to GitHub Pages branch
echo "Pushing to GitHub Pages..."
git push -f origin main:gh-pages

echo "Deployment complete! Your site will be available at:"
echo "https://eloreflorist.github.io/"