/* 01
Create Folder For Project Name
*/
// ___________________________________
/* 02
Start Building A New Project
  | npm init
*/
// ___________________________________
/* 03
Install Gulp
  | npm i gulp -g
  | npm i --save-dev gulp
*/
// ___________________________________
/* 04
Create Folder
  | project
  | dist
*/
// ___________________________________
/* 05
Create File
  | gulpfile.js
      Import Gulp || Gulp استدعاء
        const gulp = require("gulp");
      My First Task
      gulp.task("firstTask", function () {
        console.log("My First Task");
      });
      To Run Task Type On Terminal [gulp firstTask]
*/
// ___________________________________
/*
06 - 
___________________________________
0 -
___________________________________
0 - 
___________________________________
0 -
___________________________________
0 - 
___________________________________
1 -
___________________________________
1 - 
___________________________________
1 - 
___________________________________
1 -
___________________________________

*/

/* 📁 Gulp Plugins Map:


|--- [ * ]
  |--- Concat
    |--- Concat All Files In One File
    |--- Css & Js اضافة لدامج الملفات زاى ملفات
    |--- Link: [ https://www.npmjs.com/package/gulp-concat ]
    |--- Download: [ npm install --save-dev gulp-concat ]
    |--- Import [const concat = require("gulp-concat");]
    |--- Use [.pipe(concat("all.js"))]
  
    
  
    
|--- [ HTML ]
  |--- Pug
    |--- Compile Pug
    |--- Pug اضافة خاص بى تشغيل ال
    |--- Link: [ https://www.npmjs.com/package/gulp-pug ]
    |--- Download: [ npm i gulp-pug ]
    |--- Import [const pug = require("gulp-pug");]
    |--- Use [.pipe(pug({ pretty: true }))]
  
    


|--- [ CSS ]
  |--- AutoPrefixer
    |--- AutoPrefixer For Css 3 Properties
    |--- [Prefixer] CSS3 اضافة خاصة بى خواص ال 
    |--- Link: [ https://www.npmjs.com/package/gulp-autoprefixer ]
    |--- Download: [ npm install --save-dev gulp-autoprefixer ]
    |--- Import [const autoprefixer = require("gulp-autoprefixer");]
    |--- Use [.pipe(autoprefixer("last 2 versions"))]
  
  |--- Sass
    |--- Compile Sass Files
    |--- Sass اضافة خاص بى تشغيل ال
    |--- Link: [ https://www.npmjs.com/package/gulp-sass ]
    |--- Download: [ npm install sass gulp-sass --save-dev ]
    |--- Import [const sass = require("gulp-sass")(require("sass"));]
    |--- Use [.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))]
  

|--- [ JAVASCRIPT ]
    |--- Concat

 */

/* 📁 Project Map:
|--- Dist
|--- Project
|    |--- Pug
|    |--- Pug
|--- .gitignore
|--- Gulpfile.js
|--- package-lock.json
|--- package.json
|--- Project_Map.js
|--- Project_Map.js



*/
