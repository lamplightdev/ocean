import Shim, { domShimSymbol } from '../../dom-shim/lib/shim.js';

const { unshim } = Shim(
  [
    'customElements',
    'document',
    'window',
    'Document',
    'Element',
    'HTMLElement',
    'HTMLTemplateElement',
    'Node',
    'requestAnimationFrame',
    'Text',
  ],
  true
);

export { domShimSymbol, unshim };
