// shims to support server-side rendering
export default `
globalThis.window = typeof window === "undefined" ? { dispatchEvent: function() {
  return false;
} } : window;
globalThis.HTMLElement = typeof HTMLElement === "undefined" ? class HTMLElement2 {
} : HTMLElement;
globalThis.document = typeof document === "undefined" ? {
  head: { appendChild: function() {
  } },
  createTreeWalker() {
    return {};
  },
  querySelector: function() {
    return {};
  },
  querySelectorAll: function() {
    return [];
  }
} : document;
globalThis.CSSStyleSheet = typeof CSSStyleSheet === "undefined" ? class CSSStyleSheet2 {
  replace() {
  }
} : CSSStyleSheet;
globalThis.customElements = typeof customElements === "undefined" ? { define: function() {
}, get: function() {
} } : customElements;`
