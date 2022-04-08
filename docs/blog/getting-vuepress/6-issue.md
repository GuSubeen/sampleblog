---
title: 발생한 문제
date: 2022-03-24
tags:
 - 태그1
author: 양세모
categories: 
 - 양세모
---
## 1. 검색 기능 확장하기
Now:
1) 헤더와 h2(소제목)만 검색 가능 -- 내용검색 불가능
2) 표시되는 검색 개수 5개 -- 조절가능  

To-be:
1) 콘텐츠 검색 가능
2) 관련 콘텐츠 모두 표시

Try:
1) full-search plugin 사용해봄
   - 한글 검색어 표시 잘 안됨
   - search layout 지저분함
2) default search기능 false 시키고 새로운 plugin이나 검색기능 달기

<br>

## 2. sidebar 항목 자동화  
<br><br>

## 3. 페이지를 이동해도 댓글에 대한 브라우저 갱신이 안됨(새로고침 해야됨)
Now:
1) 개별적 설정: 포스트 작성할 때마다 `<Comment />`를 표시해야함.   
   ~~(그러나 각 포스트에 달린 댓글은 독립적이다. -- 불확실함)~~   
2) 전체 설정:  
   페이지를 이동해도 이전포스트의 댓글이 유지됨 (새로고침을 해주어야 바뀜)
 - 원인분석:
   - vuepress는 SPA이기 때문에 페이지를 이동해도 브라우저 갱신이 일어나지 않았던 것!  
     utterances 코드는 브라우저 첫 로딩때만 동작하도록 되어있기 때문에 갱신이 제대로 일어나지 않음.
   - SPA란 Single Page Application의 약자로 웹사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가면 표현하는 것. 무언가를 클릭하거나 스크롤하면, 상호작용하기위한 최소한의 요소만 변경이 일어남.  
  
To-be:
1) 전체 설정임에도 포스트별 댓글이 독립적이도록 만듬

Try:  
1) [유기체님 블로그](https://62che.com/blog/vuepress/%EB%8C%93%EA%B8%80-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0.html#%E1%84%92%E1%85%A2%E1%84%80%E1%85%A7%E1%86%AF%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%92%E1%85%A1%E1%84%8C%E1%85%A1)에서 동일한 issue에 대한 해답 코드를 발견하여 적용해보았으나 실패, 그러나 원인은 파악함.

2) vue router부분을 수정하여 페이지가 로딩되게 만들어야함. enhanceApp.js 손대면 될 듯


- window.Comment.reset({reload:true}) 부분이 동작하지 않음.

## 4. 빌드&push 방식 변경 필요


### 출처
- [유기체의 다락방 : 댓글 시스템 연동하기](https://62che.com/blog/vuepress/%EB%8C%93%EA%B8%80-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0.html#%E1%84%80%E1%85%A7%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB)
- [SPA란?](https://www.huskyhoochu.com/what-is-spa/)  


<comment/>