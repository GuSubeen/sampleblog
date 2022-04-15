---
title: reco 테마로 Vuepress 시작하기
date: 2022-04-06
tags:
 - vuepress
author: 구수빈
categories: 구수빈
---
## vuepress 설치

### 레포지토리 생성하기
1. github에 repo 만들기
2. gh-pages 브랜치 생성

### git clone 하기
만들어진 레포지토리를 바탕화면에 git clone한다. 폴더를 따로 지정하지 않으면 레포지토리 이름으로 폴더가 자동 생성된다.
```bash
$ git clone <reco주소> <옵션: 폴더명>
```
### package.json 생성
생성된 폴더 아이콘에서 shift + 마우스 오른쪽을 누르면 나타나는 "여기에 PowerShell 창 열기"를 클릭하여 파워쉘을 열어 아래의 코드를 입력해 package.json 파일을 만든다.  
```bash
# package.json 생성
$ yarn init -y
```

### vuepress 설치하기
아래의 코트를 입력해 vuepress를 devDependency로 추가한다.
```bash
# vuepress 추가
$ yarn add -D vuepress 
```

## reco 테마 설치
### reco-theme 설치하기
vuepress 설치가 끝나면 reco 테마를 설치한다. 아래의 코드를 입력하면 여러 질문을 하는데 자신의 상황에 맞게 선택하면 된다.
```bash
# quick start
$ npx @vuepress-reco/theme-cli init
```

### yarn 설치
옵션 선택을 완료한 후 yarn을 설치한다.
```sh
# quick start
$ npx @vuepress-reco/theme-cli init
```

## 디렉토리 구조