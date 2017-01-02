import gulp from 'gulp';
import eslint from 'gulp-eslint';
import nodemon from 'gulp-nodemon';

let jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('lint', () => {
    gulp.src(jsFiles)
        .pipe(eslint('.eslintrc'))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('inject', () => {
    let wiredep = require('wiredep').stream;
    let inject = require('gulp-inject');

    let injectSrc = gulp.src(
        ['./public/css/*.css', './public/js/*.js'],
        {read: false}
    );

    let injectOptions = {
        ignorePath: '/public',
    };

    let options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public',
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', () => {
    let options = {
        script: 'app.js',
        delayTime: 1, // seconds
        env: {
            'PORT': 3000,
        },
        watch: jsFiles,
        tasks: ['lint', 'inject'],
    };

    return nodemon(options);
});
