#!/bin/sh

rm -rf out || exit 0;
mkdir out;
NODE_ENV=production npm run build

(
cd out
git init
git config user.name "Travis-CI"
git config user.email "travis@example.com"
#cp ../CNAME .
#cp ../index.html .
cp -rf ../static/dist .
git add .
git commit -m "Deployed to Github Pages"
echo "pushing"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)

