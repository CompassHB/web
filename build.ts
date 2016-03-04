import * as browserify from "browserify";
import * as sass from 'node-sass';
import * as fs from 'fs';

// const commonCss = sass.renderSync({
//   file:  __dirname.replace("/_out", "") + '/ui/common.sass',
//   outputStyle: 'compressed',
//   sourceMap: true, // or an absolute or relative (to outFile) path
// });

// fs.writeFileSync(__dirname + '/ui/common.css', commonCss.css);
// TODO(ewinslow): Get sourcemaps working again
// fs.writeFileSync(__dirname + '/ui/common.css.map', result.map.toString());


const pages = [
  'index',
  'sermons/single',
];

pages.forEach(page => {
  return browserify(__dirname + `/ui/pages/${page}-browser.js`).bundle((err, buffer) => {
    fs.writeFileSync(__dirname + `/ui/pages/${page}-browser.bundle.js`, buffer);
  });
});
