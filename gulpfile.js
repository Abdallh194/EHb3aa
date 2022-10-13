const gulp = require("gulp");
const gulp_sass = require("gulp-sass");
const sass = require("sass");
gulp.task("sass", function () {
  gulp.src("index.scss").pipe(sass()).pipe(gulp.dest("css"));
});
