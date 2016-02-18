import * as sass from 'node-sass';
import * as fs from 'fs';

const file = __dirname.replace("/_out", "") + '/ui/common.sass';
// console.log("Reading from: " + file);

const result = sass.renderSync({
  file,
  outputStyle: 'compressed',
  sourceMap: true, // or an absolute or relative (to outFile) path
});

fs.writeFileSync(__dirname + '/ui/common.css', result.css);
// TODO(ewinslow): Get sourcemaps working again
// fs.writeFileSync(__dirname + '/ui/common.css.map', result.map.toString());
