# #!/usr/bin/env sh

# # 오류 발생시 중단한다.
# set -e

# # pull, commit, push
# git pull
# git add -A
# git commit -m "base url 변경"
# git push origin main

# # 문서를 build하여 html로 만든다
# yarn build

# # build가 output된 폴더로 이동한다.
# cd ./public

# # git init, commit, push($)
# git init
# git add -A
# git commit -m 'base url 변경'

# # 메인 브랜치여도 gh-pages는 master로 해야함
# git push -f https://github.com/GuSubeen/sampleblog.git master:gh-pages

# cd -


