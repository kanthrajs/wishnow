'use strict';

var gulp = require("gulp"),
    rename = require("gulp-rename"),
    cleanCSS = require('gulp-clean-css');




gulp.task("minifyCss", function(){
  gulp.src("public/css/style.css")
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename("styles.min.css"))
      .pipe(gulp.dest("public/css/"))
})

gulp.task("default", ["minifyCss"], function() {
  console.log("this is default task running other parallel tasks and at last you got MINIFIED concat_minified files!");
});
