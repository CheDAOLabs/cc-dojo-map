/*
  @license
	Rollup.js v4.8.0
	Mon, 11 Dec 2023 06:24:24 GMT - commit 62b648e1cc6a1f00260bb85aa2050097bb4afd2b

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

require('node:fs/promises');
require('node:path');
require('node:process');
require('node:url');
require('./shared/rollup.js');
require('./shared/parseAst.js');
const loadConfigFile_js = require('./shared/loadConfigFile.js');
require('tty');
require('path');
require('node:perf_hooks');
require('./native.js');
require('./getLogFilter.js');



exports.loadConfigFile = loadConfigFile_js.loadConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
