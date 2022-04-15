(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{596:function(s,t,a){"use strict";a.r(t);var e=a(11),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"vuepress란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress란"}},[s._v("#")]),s._v(" Vuepress란?")]),s._v(" "),a("p",[s._v('Vuepress란 "Vue를 기반으로 하는 정적 사이트 생성기"이다.')]),s._v(" "),a("h3",{attrs:{id:"정적사이트-static-site"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정적사이트-static-site"}},[s._v("#")]),s._v(" 정적사이트(Static Site)")]),s._v(" "),a("p",[s._v("정적사이트(Static Site)란 HTML, CSS, Javascript로만 만들어진 사이트를 의미한다. 서버(Web Server)는 사용자의 요청(Request)에 해당하는 "),a("strong",[s._v("미리 저장된 파일")]),s._v("(HTML, 이미지, Javascript 등)을 그대로 전달하기 때문에 작성/수정/삭제 등은 불가능하며 페이지조회만 가능하다.\n대표적인 정적사이트로 "),a("code",[s._v("Github Page")]),s._v("가 있으며 Github Page는 github에 올라온 파일(HTML, CSS, Javascript)을 기반으로 작동한다.")]),s._v(" "),a("h3",{attrs:{id:"정적사이트-생성기-static-site-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정적사이트-생성기-static-site-generator"}},[s._v("#")]),s._v(" 정적사이트 생성기(Static Site Generator)")]),s._v(" "),a("p",[s._v("SSG란 정적사이트를 만들어주는 도구로 콘텐츠와 파일을 읽어 이를 HTML로 변환시키는 역할을 한다."),a("br"),s._v("\n대표적인 SSG로는 Ruby 기반의 "),a("code",[s._v("Jekyll")]),s._v("과 Go 기반의 "),a("code",[s._v("Hugo")]),s._v(", Vue 기반의 "),a("code",[s._v("Vuepress")]),s._v(" 등이 있다.")]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"vuepress-설치하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-설치하기"}},[s._v("#")]),s._v(" Vuepress 설치하기")]),s._v(" "),a("p",[s._v("Vuepress를 시작하려면 사전에 npm이나 yarn을 설치해야 한다."),a("br"),s._v("\n필자는 npm을 이용해 yarn을 설치하였다.")]),s._v(" "),a("h3",{attrs:{id:"yarn-설치하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn-설치하기"}},[s._v("#")]),s._v(" yarn 설치하기")]),s._v(" "),a("ol",[a("li",[s._v("파워쉘에서 아래의 코드를 입력한다.")])]),s._v(" "),a("div",{staticClass:"language-Bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm이 설치되어 있는지 확인")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn 설치")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" -v               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn이 잘 설치되었나 확인")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Myblog라는 이름의 폴더를 생성하여 폴더에서 터미널을 열어 yarn init 명령어를 입력한다.")])]),s._v(" "),a("div",{staticClass:"language-Bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"vuepress-quick-start-방식으로-프로젝트-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-quick-start-방식으로-프로젝트-생성"}},[s._v("#")]),s._v(" Vuepress Quick start 방식으로 프로젝트 생성")]),s._v(" "),a("p",[s._v("create-vuepress-site generator를 사용해 프로젝트를 생성한다. 이 패키지는 vuepress site에 필요한 기본 디렉토리 및 파일들을 생성한다.")]),s._v(" "),a("div",{staticClass:"language-Bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" create vuepress-site "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("optionalDirectoryName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("명령을 실행하고 vuepress site의 metatdata를 입력하면 프로젝트가 완성된다.\n이때, DirectoryName을 입력하지 않으면 docs로 기본생성된다.")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("project name\ndescription\nmaintainer email\nmaintainer name\nrepository url\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"package-json-파일에-scripts-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json-파일에-scripts-추가"}},[s._v("#")]),s._v(" package.json 파일에 scripts 추가")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"practice_Vuepress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"homepage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Vuepress 블로그 생성을 위한 샘플입니다."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"authors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"구수빈"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rntnqls9@naver.com"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"repository"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/GuSubeen.github.io/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash deploy.sh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eject"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress eject"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@vuepress/plugin-back-to-top"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.9.7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@vuepress/plugin-last-updated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.9.7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@vuepress/theme-default"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.9.7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.5.3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-plugin-authors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^0.0.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-plugin-fulltext-search"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^2.2.1"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"next-redux-wrapper"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^7.0.5"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("h3",{attrs:{id:"yarn-dev-하기-전에-yarn-install부터-해야한다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn-dev-하기-전에-yarn-install부터-해야한다"}},[s._v("#")]),s._v(" yarn dev 하기 전에 yarn install부터 해야한다.")]),s._v(" "),a("p",[s._v("안그러면 'vuepress'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. 라는 오류 발생함.(yarn dev시)")]),s._v(" "),a("h3",{attrs:{id:"내-디렉토리-구조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#내-디렉토리-구조"}},[s._v("#")]),s._v(" 내 디렉토리 구조")]),s._v(" "),a("p",[s._v("현재 default-theme의 구조이니 다른 테마의 경우 구조가 다를 수 있다.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docs\n├── node_modules\n├── package.json\n├── yarn.lock\n└── src \n    ├── .vuepress \n    │   ├── components \n    │   ├── theme\n    │   │  └── Layout.vue \n    │   ├── public\n    │   │  └── images  \n    │   ├── styles\n    │   │  ├── index.styl \n    │   │  └── palette.styl \n    │   ├── config.js\n    │   └── enhanceApp.js\n    └── index.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"실행-및-빌드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실행-및-빌드"}},[s._v("#")]),s._v(" 실행 및 빌드")]),s._v(" "),a("ul",[a("li",[s._v("개발모드로 실행")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("개발모드로 실행하는 경우 localhost:8080로 접속한다.")]),s._v(" "),a("ul",[a("li",[s._v("빌드(Build)"),a("br"),s._v("\nbuild와 deploy는 다음 포스트에 자세히 설명한다.")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("빌드를 하면 dist폴더가 갱신되며 이를 github에 올려 블로그를 생성한다.")]),s._v(" "),a("h2",{attrs:{id:"default-theme-확장하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-theme-확장하기"}},[s._v("#")]),s._v(" default-theme 확장하기")]),s._v(" "),a("ul",[a("li",[s._v("default-theme 패키지를 설치한다.")]),s._v(" "),a("li",[s._v(".vuepress 밑에 theme 폴더를 만들고 index.js를 만들어 다음과 같이 작성한다.")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/theme/index.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("extend")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vuepress/theme-default'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v(".vuepress 밑에 theme폴더를 만들어 필요한 폴더와 파일을 작성하면 자동으로 덮어씌워진다.")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("모든 폴더에는 README.md가 존재해야 한다. 없으면 404에러가 발생한다.")])]),a("p",[a("br"),a("br")]),s._v(" "),a("h3",{attrs:{id:"출처"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#출처"}},[s._v("#")]),s._v(" 출처")]),s._v(" "),a("hr"),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress.org"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://titus94.tistory.com/4",target:"_blank",rel:"noopener noreferrer"}},[s._v("Titus '열정의 공간: 정적인 페이지와 동적인 페이지의 차이점이란?"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://junilhwang.github.io/TIL/Vuepress/Starter/#%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%A8-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3-dynamic-site",target:"_blank",rel:"noopener noreferrer"}},[s._v("개발자 황준일의 TIL 블로그: Vuepress 시작하기"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://muyu.tistory.com/entry/Vuepress-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0",target:"_blank",rel:"noopener noreferrer"}},[s._v("날마다 새롭게 또 날마다 새롭게: Vuepress 시작하기"),a("OutboundLink")],1)])]),s._v(" "),a("comment")],1)}),[],!1,null,null,null);t.default=r.exports}}]);