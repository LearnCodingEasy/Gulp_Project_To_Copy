/** Gulp Help
 * 
 * 
 * 
 * 
 * 3
 * Done: Compile Sass Files
 * 
 * 
 * 
 * 
 * 5
 * Done: Local Server
 * Local Server اضافة خاص بى تشغيل ال
 * Link: (https://www.npmjs.com/package/static-server)
 * Local Server تنزيل الاضافة
 * => npm i static-server -save
 * File: Work With Gulp File
 * انشاء ملف
 * => server.js
 * داخل الملف
 * => var StaticServer = require("static-server");
 * => var server = new StaticServer({
          rootPath: "./dist/",
          port: 1010,
      });
 * => server.start(function() {
        console.log("Server Started At Port ", server.port);
      });
 * Local Server استخدام
 * => require("./server.js");
 *
 * 
 * 6
 * Done: Live Reload
 * Live Reload اضافة خاص بى تشغيل ال
 * Link: (https://www.npmjs.com/package/gulp-livereload)
 * Live Reload تنزيل الاضافة
 * => npm install --save-dev gulp-livereload
 * File: Work With Gulp File
 * live Reload استدعاء
 * => const livereload = require('gulp-livereload');
 * live Reload استخدام
 * Tasks استخدام الاضافة فى جميع ال
 * => .pipe(livereload());
 * Tasks Watch استخدام الاضافة فى
 * =>  livereload.listen();
 * Live Reload اضافة الاسكرابت الخاص بى ال
 * Index.Pug فى ملف ال 
 * =>  script(src="http://localhost:35729/livereload.js")
 *
 *
 * 7
 * Done: Source Maps
 * Source Maps اضافة خاص بى تشغيل ال
 * Link: (https://www.npmjs.com/package/gulp-sourcemaps)
 * Source Maps تنزيل الاضافة
 * => npm i gulp-sourcemaps --save-dev
 * File: Work With Gulp File
 * Source Maps استدعاء
 * => const sourcemaps = require("gulp-sourcemaps");
 * Source Maps استخدام
 * => .pipe(sourcemaps.init())
 * => .pipe(sourcemaps.write("."))
 *
 *
 * 8
 * Done: Minifying Js Files With Uglify
 * Uglify اضافة بتضغاط ملف الجافا اسكربت
 * Link: (https://www.npmjs.com/package/gulp-uglify)
 * Uglify تنزيل الاضافة
 * => npm install --save-dev gulp-uglify
 * File: Work With Gulp File
 * Uglify استدعاء
 * => const uglify = require("gulp-uglify");
 * Uglify استخدام
 * => .pipe(uglify())
 *
 *
 * 9
 * Done: Show Notification With Notify
 * Notify اضافة تنبية بى انو التاسك تم الانتهاء
 * Link: (https://www.npmjs.com/package/gulp-notify)
 * Notify تنزيل الاضافة
 * => npm i gulp-notify --save-dev
 * File: Work With Gulp File
 * Notify استدعاء
 * => const notify = require("gulp-notify");
 * Notify استخدام
 * => .pipe(notify("Task ... Is Done"));
 *
 *
 * 10
 * Done: Babel
 * Babel اضافة تنبية بى انو التاسك تم الانتهاء
 * ECMAScript 2015+ الى كود JavaScript تحويل  كود
 * Link: (https://www.npmjs.com/package/gulp-babel)
 * Babel تنزيل الاضافة
 * => npm i gulp-babel
 * => npm install --save-dev gulp-babel @babel/core @babel/preset-env
 * File: Work With Gulp File
 * Babel استدعاء
 * => const babel = require("gulp-babel");
 * Babel استخدام
 * => .pipe(babel({presets: ["@babel/preset-env"],}))
 *
 *
 * Number-11
 * Done: Compress Files With Zip
 * Zip اضافة لعمال المشروع مضغوط
 * Link: (https://www.npmjs.com/package/gulp-zip)
 * Babel تنزيل الاضافة
 * => npm install --save-dev gulp-zip
 * File: Work With Gulp File
 * Zip استدعاء
 * => const zip = require("gulp-zip");
 * Compress فى تاسك الى  Zip استخدام
 * => // ===== Task Zpi Compress =====
    gulp.task("compress", function () {
    return gulp
        .src("dist/**\/*")
        .pipe(zip("website.zip"))
        .pipe(gulp.dest("."))
        .pipe(notify("Files Is Compressed To Zip "));
    });
 * 
 * Number-12
 * Done: Upload Files With Ftp 
 * Vinyl-Ftp اضافة تحميل الموقع على الاستضافة 
 * Link: (https://www.npmjs.com/package/vinyl-ftp)
 * Vinyl-Ftp تنزيل الاضافة
 * => npm i vinyl-ftp 
 * File: Work With Gulp File
 * Vinyl-Ftp استدعاء
 * => const ftp = require('vinyl-ftp');
 * Vinyl-Ftp استخدام
 * => .pipe(babel({presets: ["@babel/preset-env"],}))
 *
 *
 * Number-13
 * Done: typescript
 * typescript 
 * Link: (https://www.npmjs.com/package/gulp-typescript)
 * typescript تنزيل الاضافة
 * => npm install gulp-typescript
 * File: Work With Gulp File
 * typescript استدعاء
 * => const ts = require("gulp-typescript");
 * typescript استخدام
 * => .pipe(ts({noImplicitAny: true, removeComments: false, sourceMap: true, noImplicitReturns: true, noUnusedLocals: true, noUnusedParameters: false, allowUnreachableCode: false, outFile: 'output.js' }))
 *
 * 
 * => var ts = require('gulp-typescript');
 * 
 * Number-14
 * Done: webp
 * webp اضافة لضغط الصور
 * Link: (https://www.npmjs.com/package/gulp-webp)
 * webp تنزيل الاضافة
 * => npm install --save-dev gulp-webp
 * File: Work With Gulp File
 * webp استدعاء
 * => const webp = require("gulp-webp");
 * webp استخدام
 * => .pipe(webp())
 * 
 * Number-15
 * ? Json Server
 * Json Server اضافة لعمال ملاف جسان كا دات بيس
 * Link: (https://www.npmjs.com/package/gulp-json-server)
 * Json Server تنزيل الاضافة
 * => npm install -g json-server
 * => npm i gulp-json-server
 * Json Server استخدام
 * json-server --watch db.json
 *
 *
 * Done: Input And Output
 * هو مصدار الملفات اللى انت شغال عليه Src
 * => .src("project/pug/*.pug")
 *
 * هى  ميثاد بياخد مناك الملف و تعمل عليه التعديلات Pipe
 * المطلوبة فى جميع التاسكات ورا بعض
 *
 *  اللى هو مسار الفلدار اللى هيخارج فية الملاف Gulp.Dest
 * => .pipe(gulp.dest("dist"))
 * !: طريقة اختيار الملفات
 * نقل ملف من خلال اسم الملف
 * => .src("project/index.html")
 * Html نقل جميع الملفات اللى نوعها
 * => .src("project/*.html")
 * نقل جميع الملفات بجميع الامتدادات
 * => .src("project/*.*")
 * نقل ملفات معينة انت عاوز تنقلها هى بس
 * => .src(['project/index.html', 'project/style.css'])
 * نقل جميع الملفات ما عدا ملف معين
 * => .src(['project/scss/**\/*.scss', '!test.scss'])
 *
 * =>
 * Link: Tasks
 *
// ===== Task Html =====
gulp.task("html", function () {
  return gulp
    .src("project/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload())
    .pipe(notify("Html Task Is Done"));
});

// ===== Task Scss  =====
gulp.task("scss", function () {
  return gulp
    .src("project/css/scss/**\/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss Task Is Done"));
});

// ===== Task Libs Css =====
gulp.task("libs-css", function () {
  return gulp
    .src("project/libs-css/**\/*")
    .pipe(gulp.dest("dist/css/libs"))
    .pipe(livereload())
    .pipe(notify("Libs Css Task Is Done"));
});

// ===== Task Js =====
gulp.task("js", function () {
  return gulp
    .src("project/js/**\/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("Js Task Is Done"))
    .pipe(livereload());
});

// ===== Task Ts =====
gulp.task("ts", function () {
  return (
    gulp
      .src("project/ts/**\/*.ts")
      .pipe(
        ts({
          // 9 قم بتمكين الإبلاغ عن الخطأ عن التعبيرات والإعلانات بنوع
          // 9 'any' type.
          // 9 Enable error reporting for expressions and declarations with an implied 'any' type.
          noImplicitAny: true,
          // 9 إزالة التعليقات في ملف
          // 9 JavaScript
          // 9 Remove Comments In File Javascript
          removeComments: false,
          // 9 خريطة المصدر للملف
          // 9 JavaScript
          // 9 Source Map For File Javascript
          sourceMap: true,
          // 9 سوف تحقق من جميع مسارات التعليمات البرمجية في
          // 9 Function
          // 9 لضمان إرجاع قيمة
          // 9 Will Check All Code Paths In A Function To Ensure They Return A Value
          noImplicitReturns: true,
          // 9 الإبلاغ عن الأخطاء عن المتغيرات المحلية غير المستخدمة
          // 9 Report Errors On Unused Local Variables
          noUnusedLocals: true,
          // 9 الإبلاغ عن الأخطاء على
          // 9 Parameters
          // 9 غير المستخدمة في
          // 9 Function .
          // 9 Report Errors On Unused Parameters In Functions.
          noUnusedParameters: false,
          // 9 قم بتعطيل الإبلاغ عن الخطأ للحصول على رمز لا يمكن الوصول إليها
          // 9 Disable error reporting for unreachable code
          allowUnreachableCode: false,
          // outFile: "../js/testTs1.js",
          outFile: "output.js",
          // outFile: "output.js",
          // outFile: "output.js",
        })
      )
      .pipe(
        babel({
          presets: ["@babel/preset-env"],
        })
      )
      // .pipe(flatten())
      // .pipe(sourcemaps.init())
      .pipe(concat("scriptTsToJs.js"))
      .pipe(uglify())
      // .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist/js"))
      .pipe(notify("Ts Task Is Done"))
      .pipe(livereload())
  );
});

// ===== Task Libs Js =====
gulp.task("libs-js", function () {
  return gulp
    .src("project/libs-js/**\/*")
    .pipe(gulp.dest("dist/js/libs"))
    .pipe(livereload())
    .pipe(notify("Libs js Task Is Done"));
});

// ===== Task Images Compress =====
gulp.task("compressImages", function () {
  return gulp
    .src("project/images/**\/*")

    .pipe(webp())
    .pipe(gulp.dest("dist/images"));
});

// ===== Task Zpi Compress =====
gulp.task("compress", function () {
  return gulp
    .src("dist/**\/*")
    .pipe(zip("website.zip"))
    .pipe(gulp.dest("."))
    .pipe(notify("Files Is Compressed To Zip "));
});

// ===== Task Ftp =====
gulp.task("deploy", function () {
  var conn = ftp.create({
    host: "ftpupload.net",
    user: "epiz_29431807",
    password: "vz5QI9xYpD",
    parallel: 10,
  });

  return (
    gulp
      .src(["dist/**\/*.*"], { base: ".", buffer: false })
      // .pipe(conn.newer("/public_html"))
      // .pipe(conn.newer("/htdocs/output"))
      .pipe(conn.newer("/htdocs"))
      //   .pipe(conn.dest("/public_html"))
      // .pipe(conn.dest("/htdocs/output"))
      .pipe(conn.dest("/htdocs"))

      .pipe(livereload())
      .pipe(notify("Files Is Upload To Host "))
  );
});

// ===== Task Watch =====
gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  // = Html
  gulp.watch("project/pug/**\/*.pug", gulp.series("html"));
  // = Css
  gulp.watch("project/css/scss/**\/*.scss", gulp.series("scss"));
  gulp.watch("project/libs-css/**\/*", gulp.series("libs-css"));
  // = Javascript
  gulp.watch("project/js/**\/*.js", gulp.series("js"));
  // gulp.watch("project/ts/**\/*.ts", gulp.series("ts"));
  gulp.watch("project/libs-js/**\/*", gulp.series("libs-js"));
  // = Images
  gulp.watch("project/images/**\/*", gulp.series("compressImages"));
  // = Zip
  gulp.watch("dist/**\/*.*", gulp.series("compress"));
  // = Upload
  // gulp.watch("dist/**\/*.*", gulp.series("deploy"));
});
// = Default
gulp.task("default", gulp.series("watch"));

 * To Run 
 * => gulp watch
 */
