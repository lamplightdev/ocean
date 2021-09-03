import {
  domShimSymbol,
  unshim,
} from '../../dom-shim/lib/mod.js?global&props=customElements,document,window,Document,Element,HTMLElement,HTMLTemplateElement,Node,requestAnimationFrame,Text';
import init from './shim-common.js';

const { document } = self[domShimSymbol];

init(document);

const url = new URL(import.meta.url);
if (!url.searchParams.has('global')) {
  unshim();
}

export { unshim };
