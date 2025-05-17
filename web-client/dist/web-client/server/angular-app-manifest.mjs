
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25957, hash: '77f0e9cc3305f32c222b36614dabc2720dc65c182aaca1a7a3715ca13639cca7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2945, hash: '773fe14380d3f023d4bb7cf8117545451a875c1bd7312a43280b89a5baf9e483', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49361, hash: 'dd0281d049a8c8ac10695e2d69ec8a8032271258a3d0edb6e1ca7c817f13022c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6FX6CELJ.css': {size: 27949, hash: 'dFmIh5lxybw', text: () => import('./assets-chunks/styles-6FX6CELJ_css.mjs').then(m => m.default)}
  },
};
