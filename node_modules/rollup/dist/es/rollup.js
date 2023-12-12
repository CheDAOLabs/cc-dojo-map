/*
  @license
	Rollup.js v4.8.0
	Mon, 11 Dec 2023 06:24:24 GMT - commit 62b648e1cc6a1f00260bb85aa2050097bb4afd2b

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
import 'tty';
