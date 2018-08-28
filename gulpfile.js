var gulp = require('gulp');
var sass = require('gulp-sass'); // require the gulp-sass plugin
let uglify = require('gulp-uglify-es').default; // minified the es6 .js files
var useref = require('gulp-useref'); //concat all the included files (.js and .css)
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano'); // minified .css files
var imagemin = require('gulp-imagemin'); // optimasi gambar
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass()) // using gulp-sass
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('watch', ['browserSync','sass'], function() {
	gulp.watch('app/scss/**/*.scss',['sass']);
	gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/css/**/*.css', browserSync.reload);
});

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: "app"
		},
	})
})

gulp.task("useref", function () {
  return gulp.src('app/*.html')
    	.pipe(useref())
    	.pipe(gulpIf('*.js', uglify()))		// minifies the js file
    	.pipe(gulpIf('*.css', cssnano())) // minifies only the css file
        .pipe(gulp.dest("50k"));
});

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|JPEG|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('50k/images'))
});

gulp.task('clean:50k', function() {
  return del.sync('50k');
});

gulp.task('build', function (callback) {
  runSequence('clean:50k', 
    ['sass', 'useref', 'images'],
    callback
  )
});

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});