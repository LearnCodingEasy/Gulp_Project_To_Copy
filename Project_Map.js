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
  | npm install --global gulp-cli
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
[|----------------------------------------|]
  |--- Static Server
    |--- Run Local Server
    |--- Local Server اضافة خاص بى تشغيل ال
    |--- Link: [ https://www.npmjs.com/package/static-server ]
    |--- Download: [ npm i static-server -save ]
    |--- Create [server.js]
    |--- Import [...]
    |--- Use [require("./server.js");]
[|----------------------------------------|]
  |--- Live Reload
    |--- Run Live Reload
    |--- Live Reload اضافة خاص بى تشغيل ال
    |--- Link: [ https://www.npmjs.com/package/gulp-livereload ]
    |--- Download: [ npm install --save-dev gulp-livereload ]
    |--- Import [const livereload = require('gulp-livereload');]
    |--- Use In All Tasks [.pipe(livereload());]
    |--- Use In Tasks Watch [livereload.listen();]
    |--- Use In Index.Pug [script(src="http://localhost:35729/livereload.js")]
[|----------------------------------------|]
  |--- Source Maps
    |--- Create Source Maps
    |--- Source Maps اضافة خاص بى انشاء ال
    |--- Link: [ https://www.npmjs.com/package/gulp-sourcemaps ]
    |--- Download: [ npm i gulp-sourcemaps --save-dev ]
    |--- Import [const sourcemaps = require("gulp-sourcemaps");]
    |--- Use [.pipe(sourcemaps.init())]
    |--- Use [.pipe(sourcemaps.write("."))]
[|----------------------------------------|]
  |--- Notify
    |--- Show Notification With Notify
    |--- Notify اضافة تنبية بى انو التاسك تم الانتهاء
    |--- Link: [https://www.npmjs.com/package/gulp-notify]
    |--- Download: [ npm i gulp-notify --save-dev ]
    |--- Import [const notify = require("gulp-notify");]
    |--- Use [.pipe(notify("Task ... Is Done"));]
[|----------------------------------------|]
  |--- Zip
    |--- Compress Files With Zip
    |--- Zip اضافة لعمال المشروع مضغوط
    |--- Link: [https://www.npmjs.com/package/gulp-zip]
    |--- Download: [ npm i gulp-zip@5.1.0 ]
    |--- Import [const zip = require("gulp-zip");]
    |--- Use New Task []
[|----------------------------------------|]
  |--- Ftp
    |--- Upload Files With Ftp
    |--- Vinyl-Ftp اضافة تحميل الموقع على الاستضافة 
    |--- Link: [https://www.npmjs.com/package/vinyl-ftp]
    |--- Download: [ npm i vinyl-ftp ]
    |--- Import [const ftp = require('vinyl-ftp');]
    |--- Use New Task []
  


    
  
    
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
    |--- Import [import autoprefixer from 'gulp-autoprefixer';]
    |--- Use [.pipe(autoprefixer("last 2 versions"))]
  
  |--- [ Sass ]
    |--- Compile Sass Files
    |--- Sass اضافة خاص بى تشغيل ال
    |--- Link: [ https://www.npmjs.com/package/gulp-sass ]
    |--- Download: [ npm install sass gulp-sass --save-dev ]
    |--- Import [const sass = require("gulp-sass")(require("sass"));]
    |--- Use [.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))]
  

|--- [ JAVASCRIPT ]
  |--- Uglify
    |--- Minifying Js Files With Uglify
    |--- Uglify اضافة بتضغاط ملف الجافا اسكربت
    |--- Link: [ https://www.npmjs.com/package/gulp-uglify ]
    |--- Download: [ npm install --save-dev gulp-uglify ]
    |--- Import [const uglify = require("gulp-uglify");]
    |--- Use [.pipe(uglify())]
[|----------------------------------------|]
  |--- Babel
    |--- Conversion JavaScript Code  To ECMAScript 2015 
    |--- ECMAScript 2015 تحويل كود جافا سكريبت إلى 
    |--- Link: [ https://www.npmjs.com/package/gulp-babel ]
    |--- Download: [ npm i gulp-babel ]
    |--- Download: [ npm install --save-dev gulp-babel @babel/core @babel/preset-env ]
    |--- Import [const babel = require("gulp-babel");]
    |--- Use [.pipe(babel({ presets: ["@babel/preset-env"] }))]
[|----------------------------------------|]
  |--- Json Server
    |--- Create a JSON file as a data base
    |--- عمل ملف Json كا داتا بيس
    |--- Link: [ https://www.npmjs.com/package/gulp-json-server ]
    |--- Download Global: [ npm install -g json-server ]
    |--- Download Local: [ npm install json-server --save-dev ]
    |--- Create Folder [Data/Db.json]
    |--- Import [...]
    |--- Use [json-server --watch project/data/data.json]
    |--- Use New Task []


|--- [ Images ]
  |--- Webp
    |--- webp add-on for image compression
    |--- webp اضافة لضغط الصور
    |--- Link: [ https://www.npmjs.com/package/gulp-webp ]
    |--- Download: [ npm i gulp-webp@4.0.1 ]
    |--- Import [const webp = require("gulp-webp");]
    |--- Use New Task []



 */

/* 📁 Project Gulp Map:
|--- Dist
|    |--- Css
|    |--- Data
|    |--- Images
|    |--- Js
|    |--- Index.Html
|--- Project
|    |--- Css
|    |    |--- libraries
|    |    |--- Scss
|    |    |    |--- Footer
|    |    |    |--- Header
|    |    |    |    |--- 
|    |    |    |--- main
|    |    |    |    |--- 
|    |--- Data
|    |--- Html
|    |    |--- libraries
|    |    |--- Pug
|    |    |    |--- Footer
|    |    |    |--- Head
|    |    |    |    |--- Meta
|    |    |    |    |--- Libraries
|    |    |    |--- Header
|    |    |    |--- Main
|    |    |    |    |--- Section
|    |    |    |    |--- Slider
|    |    |    |--- Script
|    |    |    |    |--- Body
|    |    |    |    |--- Head
|    |    |    |--- Index.Pug
|    |--- Images
|    |--- Js
|    |    |--- libraries
|    |    |--- Script.js






|--- .gitignore
|--- Gulpfile.js
|--- package-lock.json
|--- package.json
|--- Project_Map.js
|--- server.js
|--- website.zip



*/
