//사이드바 목록 자동화
//참고: https://techformist.com/automatic-dynamic-sidebar-vuepress/
const fs = require("fs"); //파일시스템 처리를 위한 fs 모듈: 파일 및 폴더를 읽기/쓰기/삭제 가능
const path = require("path"); // 파일의 경로를 다루기 위한 path 모듈

module.exports={
'/blog/': [
    {
      title: "뷰프레스 만들기",
      children: getSideBar("blog/getting-vuepress")
              //'getting-vuepress/1-installation','getting-vuepress/2-deploy'
    },
    {
      title: "오류잡기",
      children: getSideBar("blog/errors-occurred")
    },
    {
      title: "샘플2",
      children: getSideBar("blog/using-reco")
    }
  ]
}

function getSideBar(folder) {
    const extension = [".md"]; //확장자는 md파일임을 지정
  
    const files = fs
      .readdirSync(path.join(`${__dirname}/../${folder}`))
      .filter(
        (item) =>
          item.toLowerCase() != "readme.md" &&
          fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
          extension.includes(path.extname(item))
      );   
  // 상위경로 제거
  if(folder.includes("blog/")){
  var finalpath= folder.replace("blog/","");
}
  // files 앞에 folder 경로 붙이기  
  let a =[];
  for(var i=0; i<files.length; i++){
  a.push(finalpath+'/'+files[i])
  }
  return [ ...a];
    //return [{children: [ ...files] }];
    //return [...files];
    //const final = `${__dirname}/../${folder}/${files}`
  }
