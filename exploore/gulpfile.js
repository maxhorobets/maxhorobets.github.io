
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autopref = require('gulp-autoprefixer'),
      csso = require('gulp-csso'),
      rename = require('gulp-rename'),
      plumber = require('gulp-plumber'),
      browserSync = require('browser-sync'),
      less = require('gulp-less'); 

gulp.task('css', function() {
   return gulp.src('src/scss/main.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autopref({
         browsers: ['last 10 versions']
      }))
      .pipe(csso())
      .pipe(rename({
         extname: '.css',
         suffix: '.min'
      }))
      .pipe(gulp.dest('dist/css')) 
      .pipe(browserSync.stream());
});

gulp.task('browser-sync', ['css'], function() {

	browserSync({
		server: {
			baseDir: './dist'
		},
		notify: true
	});
});

gulp.task('watch', ['browser-sync', 'css'], function () {

	gulp.watch('src/scss/**/*.scss', ['css']);
	gulp.watch('dist/*.html', browserSync.reload);
});


// gulp.task('sass', function () {
//       return sass('src/scss/main.scss')
//             .on('error', function (err) { console.log(err.message); })    
//             .pipe(plumber())        
//             .pipe(autopref({
//                   browsers: ['last 10 versions']
//             }))
//             .pipe(csso())
//             .pipe(rename({
//                   extname: '.css',
//                   suffix: '.min'
//             }))            
//             .pipe(gulp.dest('dist/css/gulp_css'))
//             .pipe(browserSync.stream());
// });