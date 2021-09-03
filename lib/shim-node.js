import { domShimSymbol, unshim } from './shim-node-dom.js';
import init from './shim-common.js';

const { document } = self[domShimSymbol];

init(document);

export { unshim };
