#!/usr/bin/env sh

# 오류 발생시 중단한다.
set -e

# pull, commit, push
#git pull
#git add -A
#git commit -m "$1 $2 $3 --all.sh main"
#git push origin main

# 문서를 build하여 html로 만든다
#yarn build

# build가 output된 폴더로 이동한다.
# cd .publi

# git init, commit, push
git init
git add .
git commit -m 'deploy with vuepress'

git push -f https://github.com/GuSubeen/blog.git main:gh-pages

cd -


