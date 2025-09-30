'use strict';

/** @type {import('./index.d.ts').AsyncGeneratorFunctionConstructor | false} */
var cached;

/** @type {import('./index.d.ts')} */
module.exports = function getAsyncGeneratorFunction() {
	if (typeof cached === 'undefined') {
		try {
			// eslint-disable-next-line no-new-func
			cached = Function('return async function* () {}')().constructor;
		} catch (e) {
			cached = false;
		}
	}
	return cached;
};

