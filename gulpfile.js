// Import [Gulp] استدعاء
const gulp = require("gulp");

// Import [Concat] استدعاء
const concat = require("gulp-concat");

// Import [Auto Prefixer] استدعاء
const autoprefixer = require("gulp-autoprefixer");
// import autoprefixer from "gulp-autoprefixer";

// Import [Sass] استدعاء
var sass = require("gulp-sass")(require("sass"));

// Import [Pug] استدعاء
const pug = require("gulp-pug");

// Import [Live Reload] استدعاء
const livereload = require("gulp-livereload");

// Import [Source Maps] استدعاء
const sourcemaps = require("gulp-sourcemaps");

// Import [Uglify] استدعاء
const uglify = require("gulp-uglify");

// Import [notify] استدعاء
const notify = require("gulp-notify");

// Import [Babel] استدعاء
const babel = require("gulp-babel");

// Import [Json Server] استدعاء
// const jsonServer = require("gulp-json-server");

// Import [Webp] استدعاء
const webp = require("gulp-webp");

// Import [Zip] استدعاء
const zip = require("gulp-zip");

// Import [Vinyl Ftp] استدعاء
const ftp = require("vinyl-ftp");

// ===== Task Html =====
gulp.task("html", function () {
  return gulp
    .src("project/html/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(notify("Html Task Is Done"))
    .pipe(livereload())
    .pipe(notify("Html Task Is Done"));
});
// To Run => gulp html

// ===== Task Css =====
gulp.task("css", function () {
  return gulp
    .src("project/css/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(notify("Css Task Is Done"))
    .pipe(livereload());
});
// To Run => gulp css

// ===== Task Js =====
gulp.task("js", function () {
  return gulp
    .src("project/js/**/*.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(sourcemaps.init())
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("Js Task Is Done"))
    .pipe(livereload());
});
// To Run => gulp js

// ===== Task Json Server =====
gulp.task("jsonServer", function () {
  return gulp
    .src("project/data/*.json")
    .pipe(concat("data.json"))
    .pipe(gulp.dest("dist/data"))
    .pipe(livereload())
    .pipe(notify("Task Json Server Is Done"));
});

// ===== Task Images Compress =====
gulp.task("compressImages", function () {
  return gulp
    .src("project/images/**/*")
    .pipe(webp())
    .pipe(gulp.dest("dist/images"))
    .pipe(notify("Task Images Compress Done "));
});

// ===== Task Compress Files =====
gulp.task("compress", function () {
  return gulp
    .src("dist/**/*.*")
    .pipe(zip("website.zip"))
    .pipe(gulp.dest("."))
    .pipe(notify("Files Is Compressed To Zip "));
});
// To Run => gulp compress

// ===== Task Ftp =====
gulp.task("deploy", function () {
  var conn = ftp.create({
    host: "ftpupload.net",
    user: "epiz_29431807",
    password: "vz5QI9xYpD",
    parallel: 10
  });

  return (
    gulp
      .src(["dist/**/*.*"], { base: ".", buffer: false })
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
// To Run => gulp deploy

// ===== Task Watch =====
gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  // Html
  gulp.watch("project/html/pug/**/*.pug", gulp.series("html"));
  // Css
  gulp.watch("project/css/scss/**/*.scss", gulp.series("css"));
  // gulp.watch("project/libs-css/**/*", gulp.series("libs-css"));
  // Javascript
  gulp.watch("project/js/**/*.js", gulp.series("js"));
  // gulp.watch("project/ts/**\/*.ts", gulp.series("ts"));
  // gulp.watch("project/libs-js/**/*", gulp.series("libs-js"));
  // Json Server
  gulp.watch("project/data/*.json", gulp.series("jsonServer"));
  // Images
  gulp.watch("project/images/**/*", gulp.series("compressImages"));
  // Zip
  gulp.watch("dist/**/*.*", gulp.series("compress"));
  // = Upload
  // gulp.watch("dist/**\/*.*", gulp.series("deploy"));
});
// = Default
gulp.task("default", gulp.series("watch"));

// To Run => gulp watch
