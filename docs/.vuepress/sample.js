// sidebar.js 테스트용 
 
const fs = require("fs"); //파일시스템 처리를 위한 fs 모듈: 파일 및 폴더를 읽기/쓰기/삭제 가능
const path = require("path"); // 파일의 경로를 다루기 위한 path 모듈

const folder = "blog/getting-vuepress";
const extension = [".md"]; //확장자는 md파일임을 지정
const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
    (item) =>
      item.toLowerCase() != "readme.md" &&
      fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
      extension.includes(path.extname(item))
  );
  if(folder.includes("blog/")){
    var finalpath= folder.replace("blog/","");
  }
let a =[];
for(var i=0; i<files.length; i++){
    a.push(finalpath+'/'+files[i])
}
console.log(files);
console.log(a);
