//bring in gulp
const gulp = require("gulp");
//imagemin - compress/optimize images
const imagemin = require("gulp-imagemin");
//uglify - minify JS
const uglify = require("gulp-uglify");
//compile sass
const sass = require("gulp-sass");
//concat for all files
const concat = require("gulp-concat");

/*

-- top level functions ---
gulp.task - define a task
gulp.src - point to files to use
gulp.dest - point to folder to output
gulp.watch - watch files and folders for any changes

*/

//log a message
gulp.task("message", function() {
  return console.log("Gulp is running a task...");
});

//Copy all html files to dist folder for production
gulp.task("copyHTML", function() {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

// optimize images using image min - these can be written with arrow functions
gulp.task("imagemin", function() {
  gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

//minify JS
// gulp.task("minify", function() {
//   gulp
//     .src("src/js/*.js")
//     .pipe(
//       uglify().on("error", function(err) {
//         console.log(err);
//       })
//     )
//     .pipe(gulp.dest("dist/js"));
// });

//compile Sass -- will get compiled to regular css
gulp.task("sass", function() {
  gulp
    .src("src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
});

// minify and concat files together -- this example is for js
gulp.task("scripts", function() {
  gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(
      uglify().on("error", function(err) {
        console.log(err);
      })
    )
    .pipe(gulp.dest("dist/js"));
});

//array for executing all tasks
gulp.task("default", ["message", "copyHTML", "imagemin", "sass", "scripts"]);

// watch files for changes -- params are location to watch and the task to watch
gulp.task("watch", function() {
  gulp.watch("src/js/*.js", ["scripts"]);
  gulp.watch("src/images/*", ["imagemin"]);
  gulp.watch("src/sass/*.scsss", ["sass"]);
  gulp.watch("src/*.html", ["copyHTML"]);
});
