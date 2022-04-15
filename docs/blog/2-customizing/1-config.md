---
title: Config.js 수정하기
date: 2022-04-08
tags:
 - 커스터마이징
author: 구수빈
categories: 구수빈
---
## Config.js 소개
블로그의 주요 커스터마이징은 docs/.vuepress 안에 위치한 config.js 파일을 이용해서 이루어지며 이번장에서는 이에 대해 다루어 볼 것이다.

## 블로그 title 설정
```js
module.exports ={
    ...
    title: "MY Blog", // 블로그의 제목 설정
    ...
}
```
## Navbar 수정하기
```js
module.exports = {
  ...
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: '게시판', link: '/notice/', icon: 'reco-tongzhi'},
      { text: '블로그',link: '/blog/', icon: 'reco-document'
        // items: [
        //   { text: '뷰프레스 만들기', link: '/blog/getting-vuepress/' },
        //   { text: '여러가지 에러들', link: '/blog/errors-occurred/' },
        //   { text: '드롭다운 샘플2', link: '/blog/sample2/' }
        // ]
      },
      { text: '타임라인', link: '/timeline/', icon: 'reco-date' },
      { text: '깃허브', link: 'https://github.com/GuSubeen', icon: 'reco-github' }
    ],
}  
```

## Sidebar 수정하기

### 기본 Sidebar 방법

### 개선한 Sidebar 방법

### Subsidebar 사용하기

## 기타 등등

### 작성자

### 블로그 테마

### 404 이미지 비활성화

### 로고

### 언어설정



### 참고