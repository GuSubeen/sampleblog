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
```js
module.exports = {
  themeConfig: {
    subSidebar: 'auto', 
    // sidebar: {
    //   '/blog/1-vue-start/': [
    //     '1-installation','2-deploy','3-plugin'
    //   ]
    // },  
    sidebar:require("./sidebar"),
    // {
    //   '/blog/getting-vuepress/': getSideBar("blog/getting-vuepress","뷰프레스 만들기")
    // },
}  
```
### 개선한 Sidebar 방법(1)
[techformist 블로그](https://techformist.com/automatic-dynamic-sidebar-vuepress/) 방법을 사용할 경우
```js
module.exports = {
  themeConfig: {
    sidebar:
    {
      '/blog/getting-vuepress/': getSideBar("blog/getting-vuepress","뷰프레스 만들기")
    },
}  
```
- 장점: 디렉토리의 파일을 읽어 자동으로 리스트를 만들어준다.
- 단점:   
  blog 하위 디렉토리가 여러 개일 경우 각 디렉토리마다 페이지가 필요하다.  
  즉, blog 페이지 안에 blog/dir1, blog/dir2를 같이 넣을 수 없고, blog/dir1, blog/dir2 페이지를 따로 만들어서 드롭다운 형식으로 blog에 붙여야 한다.

### 최종 개선 방법
위의 코드의 아쉬운 점을 보완하여 blog 페이지에 파일을 모두 담을 수 있도록 하였다.  
이에 대한 자세한 코드와 정리는 `사이드바 항목 자동화` 페이지에서 다루도록 하겠다.
- config.js 파일
```js
module.exports = {
  // docs/.vuepress/config.js
  themeConfig: {
    sidebar:require("./sidebar"), //sidebar 모듈 불러오기
}  
```
- sidebar.js 파일
```js
module.exports={
'/blog/': [
    //'',
    {
      title: "뷰프레스 시작하기",
      //collapsable: false,
      children: getSideBar("blog/1-getting-start")
    },
    {
      title: "뷰프레스 꾸미기",
      //collapsable: false,
      children: getSideBar("blog/2-customizing")
    },
    {
      title: "기능 추가하기",
      collapsable: false,
      children: getSideBar("blog/3-addFunction")
    },
    {
      title: "추가 작업들",
      collapsable: false,
      children: getSideBar("blog/4-additionalWork")
    },
    {
      title: "샘플",
      collapsable: false,
      children: getSideBar("blog/getting-vuepress")
              //'getting-vuepress/1-installation','getting-vuepress/2-deploy'
    }

  ]
}
```

### Subsidebar 사용하기
```js
module.exports = {
  themeConfig: {
    subSidebar: 'auto', //오른쪽에 h2,h3 사이드바 만들어짐
}  
```

## 기타
작성자, 블로그 테마, 404 이미지 비활성화, 로고, 언어설정, 태그와 카테고리 관리, 기본검색 옵션 설정, 플러그인 추가 등

```js
module.exports = {
  base:'/sampleblog/',
  // 언어설정
  locales:{
    '/': {
      lang: 'ko-KR' //한국어
    }
  },
  theme: 'reco',
  themeConfig: {
    blogConfig: {
      category: {
        location: 4, // 네비게이션 메뉴에서 차지하는 위치, 왼쪽에서 4번째 
        text: '작성자', // 기본 "카테고리"
      },
      tag: {
        location: 2, // 네비게이션 메뉴에서 차지하는 위치, 왼쪽에서 2번째
        text: '태그' // 기본 "태그"
      }
    }, 
    logo: '/mydog.jpg', //Nav로고
    noFoundPageByTencent: false, // 404 에러이미지 안뜨게함.
    // 검색설정
    search: true,
    searchMaxSuggestions: 10,
    // sidebar: 'auto', // sidebar 자동 생성
    lastUpdated: 'Last Updated', // 마지막 업데이트 시간
    // 작성자
    author: '구수빈', // 여기는 글로벌 작성자, 페이지별 다른 작성자도 가능함
    authorAvatar: '/images/subeen.jpg', // 작성자 프로필 이미지, 화면 축소시 메뉴바 누르면 보임
    record: '1234', // 등록번호, footer 표시 
  },
  markdown: {
    lineNumbers: true // 포스팅한 코드에 번호붙음
  },
  plugins: [
    'vuepress-plugin-code-copy',// code 복사 플러그인
   ] 
}  
```


### 참고
- [techformist 블로그: Automatic Dynamic Sidebars in Vuepress](https://techformist.com/automatic-dynamic-sidebar-vuepress/)