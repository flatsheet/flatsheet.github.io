var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var pkg = require('./package.json');

gulp.task('deploy', function () {
  var opts = { remoteUrl: pkg.repository.url, branch: 'master' };
  gulp.src("./dist/**/*").pipe(deploy(opts));
});