import gulp from "gulp";
import { spawn } from "child_process";
import hugoBin from "hugo-bin";
import gutil from "gulp-util";
import flatten from "gulp-flatten";
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import cssnext from "postcss-cssnext";
import cssNested from "postcss-nested";
import BrowserSync from "browser-sync";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";

const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", blackBox => buildSite(blackBox));
gulp.task("hugo-preview", blackBox => buildSite(blackBox, hugoArgsPreview));

// updating from gulp 3 to 4 
// array of dependency tasks now need to use gulp.series 
// gulp.task("taskName", gulp.series(["otherTasks"], function () {
//     /* other code */
// }))
// AND task undefined error when respective dependency tasks defined below use in gulp.series

// so here moved to top:
// tasks used in gulp.series: 

// Compile CSS with PostCSS
gulp.task("css", () =>
  gulp
    .src("./src/css/*.css")
    .pipe(
      postcss([
        cssImport({ from: "./src/css/main.css" }),
        cssNested(),
        cssnext()
      ])
    )
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
);
// Compile Javascript
gulp.task("js", blackBox => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log(
      "[webpack]",
      stats.toString({
        colors: true,
        progress: true
      })
    );
    browserSync.reload();
    blackBox();
  });
});

// Move all fonts in a flattened directory
gulp.task("fonts", () =>
  gulp
    .src("./src/fonts/**/*")
    .pipe(flatten())
    .pipe(gulp.dest("./dist/fonts"))
    .pipe(browserSync.stream())
);

// Move all videos in a flattened directory
gulp.task("videos", () =>
  gulp
    .src("./src/videos/**/*")
    .pipe(gulp.dest("./dist/videos"))
    .pipe(browserSync.stream())
);

// Move all images in a flattened directory
gulp.task("images", () =>
  gulp
    .src("./src/img/**/*")
    .pipe(gulp.dest("./dist/img"))
    .pipe(browserSync.stream())
);


// Run server tasks
gulp.task("server", gulp.series(["hugo", "css", "js", "fonts", "videos", "images"], blackBox =>
  runServer(blackBox))
);


gulp.task(
  "server-preview",
  gulp.series(["hugo-preview", "css", "js", "fonts", "videos", "images"],
  blackBox => runServer(blackBox))
);

// Build/production tasks
gulp.task("build", gulp.series(["css", "js", "fonts", "videos", "images"], blackBox =>
  buildSite(blackBox, [], "production"))
);
gulp.task("build-preview", gulp.series(["css", "js", "fonts", "videos", "images"], blackBox =>
  buildSite(blackBox, hugoArgsPreview, "production"))
);


// Development server with browsersync
function runServer() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("./src/js/**/*.js", gulp.parallel(["js"]));
  gulp.watch("./src/css/**/*.css", gulp.parallel(["css"]));
  gulp.watch("./src/fonts/**/*", gulp.parallel(["fonts"]));
  gulp.watch("./src/img/**/*", gulp.parallel(["images"]));
  gulp.watch("./src/videos/**/*", gulp.parallel(["videos"]));
  gulp.watch("./site/**/*", gulp.parallel(["hugo"]));
}

/**
 * Run hugo and build the site
 */
function buildSite(blackBox, options, environment = "development") {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;

  return spawn(hugoBin, args, { stdio: "inherit" }).on("close", code => {
    if (code === 0) {
      browserSync.reload();
      blackBox();
    } else {
      browserSync.notify("Hugo build failed :(");
      blackBox("Hugo build failed");
    }
  });
}
