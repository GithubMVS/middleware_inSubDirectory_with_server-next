(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[535],{4191:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return i}});var o=t(5213),d=t(1992),n=d.middleware||d.default;if("function"!==typeof n)throw new Error('The Middleware "pages/redirect/_middleware" must export a `middleware` or a `default` function');function i(e){return(0,o.V)({...e,page:"/redirect/_middleware",handler:n})}},1992:function(e,r,t){"use strict";t.r(r),t.d(r,{middleware:function(){return d}});t(3399);var o=t(3013);function d(e){var r;console.log("This is run at the edge!!!");const t=(null===(r=e.ua.browser.name)||void 0===r?void 0:r.toLowerCase())||"Safari";return console.log(t),"chrome"===t?o.NextResponse.redirect("/chrome/demo"):"safari"===t?o.NextResponse.redirect("/safari/demo"):"edge"===t?o.NextResponse.redirect("/edge/demo"):"firefox"===t?o.NextResponse.redirect("/firefox/demo"):o.NextResponse.redirect("/unsupported_browser/demo")}}},function(e){e.O(0,[213],(function(){return r=4191,e(e.s=r);var r}));var r=e.O();(_ENTRIES="undefined"===typeof _ENTRIES?{}:_ENTRIES)["middleware_pages/redirect/_middleware"]=r}]);