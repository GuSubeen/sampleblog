//사이드바 목록 자동화
const fs = require("fs"); //파일시스템 처리를 위한 fs 모듈: 파일 및 폴더를 읽기/쓰기/삭제 가능
const path = require("path"); // 파일의 경로를 다루기 위한 path 모듈

module.exports = {
  base:'/sampleblog/',
  locales:{// 언어설정
    '/': {
      lang: 'ko-KR' //한국어
    }
  },
  title: "MY Blog",
  description: 'A simple and beautiful vuepress blog theme .', //로딩중 뜨는 문장
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: 'images/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
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
    subSidebar: 'auto', //오른쪽에 하위 사이드바 생성 
    // sidebar: {
    //   '/blog/1-vue-start/': [
    //     '1-installation','2-deploy','3-plugin'
    //   ]
    // },  
    sidebar:require("./sidebar"),
    // {
    //   '/blog/getting-vuepress/': getSideBar("blog/getting-vuepress","뷰프레스 만들기")
    // },
    // type: 'blog', // 홈 형식이 블로그 형식이 됨.
    // 블로그설정
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
    friendLink: [ // 블로그 타입으로 지정시 표시됨
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    // logo: 'images/mydog.jpg', //로고
    noFoundPageByTencent: false, // 404 에러이미지 안뜨게함.
    // 검색설정
    search: true,
    searchMaxSuggestions: 10,
    // sidebar: 'auto', // sidebar 자동 생성
    lastUpdated: 'Last Updated', // 마지막 업데이트 시간
    // 작성자
    author: '구수빈', // 여기는 글로벌 작성자, 페이지별 다른 작성자도 가능함
    authorAvatar: 'images/avatar.png', // 작성자 프로필 이미지, 블로그 타입시 표시됨
    record: '1234', // 등록번호, footer 표시
    
    startYear: '2022' // 프로젝트 기간, footer 표시
    /**
     * 암호 (if your blog is private) // 블로그를 비공개 하고 싶다면 사용
     */
    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment ) // valine 코멘트 추가시 사용 
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  

//사이드바 항목 자동화 -- 디렉토리를 읽어서 그 안의 파일을 반환시켜주는 코드
//출처: https://techformist.com/automatic-dynamic-sidebar-vuepress/
function getSideBar(folder, title) {
  const extension = [".md"]; //확장자는 md파일임을 지정

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );

  return [{ title: title, children: [ ...files] }];
}
