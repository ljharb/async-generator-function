'use strict';

// eslint-disable-next-line no-extra-parens, no-empty-function
const cached = /** @type {import('.').AsyncGeneratorFunctionConstructor} */ (async function* () {}.constructor);

/** @type {import('.')} */
module.exports = () => cached;

