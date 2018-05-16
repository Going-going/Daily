var gulp = require('gulp');
var browserSync = require('browser-sync');


//css
gulp.task('css', function(callback){
	gulp.src(['./lib/mescroll/*.css', './lib/swiper/css/*.css'])
		.pipe(gulp.dest('./dist'))
})

// browser 刷新
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: './views/index.html'
		}
	})
})