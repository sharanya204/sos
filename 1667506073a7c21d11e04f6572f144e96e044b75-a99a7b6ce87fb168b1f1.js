(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var o,i=n(r("PJYZ")),a=n(r("VbXa")),l=n(r("8OQS")),s=n(r("pVnL")),c=n(r("q1tI")),u=n(r("17x9")),f=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,o=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),o&&(t.loading="eager"),t.fluid&&(t.fluid=_([].concat(t.fluid))),t.fixed&&(t.fixed=_([].concat(t.fixed))),t},d=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(d);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=f(e),r=p(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,b=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,o=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:o,srcSet:n,sizes:i}),c.default.createElement("source",{media:o,srcSet:r,sizes:i}))}))}function _(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function k(e,t){var r=e.srcSet,n=e.srcSetWebp,o=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(o?'media="'+o+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var r=(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),o);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',a=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+c+a+l+r+n+t+i+o+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,o=e.generateSources,i=e.spreadProps,a=e.ariaHidden,l=c.default.createElement(C,(0,s.default)({ref:t,src:r},i,{ariaHidden:a}));return n.length>1?c.default.createElement("picture",null,o(n),l):l})),C=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,o=e.src,i=e.style,a=e.onLoad,u=e.onError,f=e.loading,d=e.draggable,p=e.ariaHidden,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:o},h,{onLoad:a,onError:u,ref:t,loading:f,draggable:d,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&b&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,o=e.style,i=void 0===o?{}:o,a=e.imgStyle,l=void 0===a?{}:a,u=e.placeholderStyle,d=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,b=e.Tag,S=e.itemProp,_=e.loading,k=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,s.default)({opacity:x?1:0,transition:P?"opacity "+v+"ms":"none"},l),j="boolean"==typeof y?"lightgray":y,N={transitionDelay:v+"ms"},M=(0,s.default)({opacity:this.state.imgLoaded?0:1},P&&N,{},l,{},d),R={title:t,alt:this.state.isVisible?"":r,style:M,className:p,itemProp:S};if(m){var V=m,A=h(m);return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),j&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&N)}),A.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:A.base64,spreadProps:R,imageVariants:V,generateSources:O}),A.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:A.tracedSVG,spreadProps:R,imageVariants:V,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,w(V),c.default.createElement(C,{alt:r,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:_,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)({alt:r,title:t,loading:_},A,{imageVariants:V}))}}))}if(g){var B=g,q=h(g),W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete W.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},j&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},P&&N)}),q.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:R,imageVariants:B,generateSources:O}),q.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:R,imageVariants:B,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,w(B),c.default.createElement(C,{alt:r,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:_,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)({alt:r,title:t,loading:_},q,{imageVariants:B}))}}))}return null},t}(c.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});P.propTypes={resolutions:T,sizes:j,fixed:u.default.oneOfType([T,u.default.arrayOf(T)]),fluid:u.default.oneOfType([j,u.default.arrayOf(j)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=P;t.default=N},Ac7g:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var n=r("q1tI"),o=r.n(n),i=r("Bi3C"),a=r.n(i),l=r("YIkO"),s=r.n(l),c=r("DDoQ"),u=(r("84bF"),r("vOnD")),f=u.c.nav.withConfig({displayName:"style__Nav",componentId:"sc-1d7bfl4-0"})(["padding:16px 0;background-color:",";position:fixed;width:100%;top:0;z-index:1000;"],(function(e){return e.theme.color.primary})),d=Object(u.c)(c.a).withConfig({displayName:"style__StyledContainer",componentId:"sc-1d7bfl4-1"})(["display:flex;justify-content:space-between;align-items:center;"]),p=u.c.div.withConfig({displayName:"style__NavListWrapper",componentId:"sc-1d7bfl4-2"})(["ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:row;",";}"],(function(e){return e.mobile&&"\n        flex-direction: column;\n        margin-top: 1em;\n\n        > "+h+" {\n          margin: 0;\n          margin-top: 0.75em;\n        }\n      "})),h=u.c.li.withConfig({displayName:"style__NavItem",componentId:"sc-1d7bfl4-3"})(["margin:0 0.75em;font-family:",";",";a{text-decoration:none;opacity:0.7;color:",";}&.active{a{opacity:1;}}"],(function(e){return e.theme.font.secondary}),(function(e){return e.theme.font_size.small}),(function(e){return e.theme.color.black.regular})),m=u.c.div.withConfig({displayName:"style__MobileMenu",componentId:"sc-1d7bfl4-4"})(["width:100%;background:",";"],(function(e){return e.theme.color.primary})),g=u.c.div.withConfig({displayName:"style__Brand",componentId:"sc-1d7bfl4-5"})(["font-family:",";",";"],(function(e){return e.theme.font.primary}),(function(e){return e.theme.font_size.large})),y=u.c.div.withConfig({displayName:"style__Mobile",componentId:"sc-1d7bfl4-6"})(["display:none;@media (max-width:","){display:block;}",""],(function(e){return e.theme.screen.md}),(function(e){return e.hide&&"\n    display: block;\n\n    @media (max-width: "+e.theme.screen.md+") {\n      display: none;\n    }\n  "}));function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var b=o.a.createElement("path",{d:"M3 12h18M3 6h18M3 18h18"}),S=function(e){return o.a.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"menu_svg__feather menu_svg__feather-menu"},e),b)};var w=["Description","Drivers","Team"],_=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={mobileMenuOpen:!1},t.toggleMobileMenu=function(){t.setState((function(e){return{mobileMenuOpen:!e.mobileMenuOpen}}))},t.closeMobileMenu=function(){t.state.mobileMenuOpen&&t.setState({mobileMenuOpen:!1})},t.getNavAnchorLink=function(e){return o.a.createElement(a.a,{href:"#"+e.toLowerCase(),onClick:t.closeMobileMenu},e)},t.getNavList=function(e){var r=e.mobile,n=void 0!==r&&r;return o.a.createElement(p,{mobile:n},o.a.createElement(s.a,{items:w.map((function(e){return e.toLowerCase()})),currentClassName:"active",mobile:n,offset:-64},w.map((function(e){return o.a.createElement(h,{key:e},t.getNavAnchorLink(e))}))))},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.state.mobileMenuOpen;return o.a.createElement(f,this.props,o.a.createElement(d,null,o.a.createElement(g,null,"SOS"),o.a.createElement(y,null,o.a.createElement("button",{onClick:this.toggleMobileMenu,style:{color:"black"}},o.a.createElement(S,null))),o.a.createElement(y,{hide:!0},this.getNavList({}))),o.a.createElement(y,null,e&&o.a.createElement(m,null,o.a.createElement(c.a,null,this.getNavList({mobile:!0})))))},n}(n.Component)},Bi3C:function(e,t,r){var n;r("Oyvg"),r("eM6i"),r("2Spj"),r("/SS/"),r("hHhE"),r("V+eJ"),r("91GP"),r("HAE/"),"undefined"!=typeof self&&self,n=function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(2),l=(n=a)&&n.__esModule?n:{default:n},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.smoothScroll=r.smoothScroll.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){r(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var r=function(){return 0};void 0!==this.props.offset&&(r=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var n=e.currentTarget.getAttribute("href").slice(1),o=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:o-r(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["offset"]));return l.default.createElement("a",o({},t,{onClick:this.smoothScroll}))}}]),t}(a.Component);t.default=s},function(t,r){t.exports=e},function(e,t,r){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var r,n=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(r=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var r=d(this),n=r.getBoundingClientRect(),i=this.getBoundingClientRect();r!==t.body?(h.call(this,r,r.scrollLeft+i.left-n.left,r.scrollTop+i.top-n.top),"fixed"!==e.getComputedStyle(r).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function u(t,r){var n=e.getComputedStyle(t,null)["overflow"+r];return"auto"===n||"scroll"===n}function f(e){var t=c(e,"Y")&&u(e,"Y"),r=c(e,"X")&&u(e,"X");return t||r}function d(e){var r;do{r=(e=e.parentNode)===t.body}while(!1===r&&!1===f(e));return r=null,e}function p(t){var r,n,o,a,l=(i()-t.startTime)/468;a=l=l>1?1:l,r=.5*(1-Math.cos(Math.PI*a)),n=t.startX+(t.x-t.startX)*r,o=t.startY+(t.y-t.startY)*r,t.method.call(t.scrollable,n,o),n===t.x&&o===t.y||e.requestAnimationFrame(p.bind(e,t))}function h(r,n,a){var s,c,u,f,d=i();r===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=o.scroll):(s=r,c=r.scrollLeft,u=r.scrollTop,f=l),p({scrollable:s,method:f,startTime:d,startX:c,startY:u,x:n,y:a})}}}}()}])},e.exports=n(r("q1tI"))},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EK0E:function(e,t,r){"use strict";var n,o=r("dyZX"),i=r("CkkT")(0),a=r("KroJ"),l=r("Z6vF"),s=r("czNK"),c=r("ZD67"),u=r("0/R4"),f=r("s5qY"),d=r("s5qY"),p=!o.ActiveXObject&&"ActiveXObject"in o,h=l.getWeak,m=Object.isExtensible,g=c.ufstore,y=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=h(e);return!0===t?g(f(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(f(this,"WeakMap"),e,t)}},b=e.exports=r("4LiD")("WeakMap",y,v,c,!0,!0);d&&p&&(s((n=c.getConstructor(y,"WeakMap")).prototype,v),l.NEED=!0,i(["delete","has","get","set"],(function(e){var t=b.prototype,r=t[e];a(t,e,(function(t,o){if(u(t)&&!m(t)){this._f||(this._f=new n);var i=this._f[e](t,o);return"set"==e?this:i}return r.call(this,t,o)}))})))},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,r){"use strict";r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var o=+new Date;!!t&&o<t+n?(clearTimeout(r),r=setTimeout((function(){t=o,e()}),n)):(t=o,e())}};t.default=n},INYr:function(e,t,r){"use strict";var n=r("XKFU"),o=r("CkkT")(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),n(n.P+n.F*a,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),i=r("ZhPi"),a=r("Bnag");e.exports=function(e){return n(e)||o(e)||i(e)||a()}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},TSYQ:function(e,t,r){var n;r("LK8F"),function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},YIkO:function(e,t,r){"use strict";r("V+eJ"),r("dZ+Y"),r("bWfx"),r("2Spj"),r("LK8F"),r("HAE/");var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("pVnL")),i=n(r("lSNA")),a=n(r("RIqP")),l=n(r("lwsE")),s=n(r("a1gu")),c=n(r("Nsbk")),u=n(r("PJYZ")),f=n(r("W8MJ")),d=n(r("7W2i")),p=n(r("17x9")),h=n(r("q1tI")),m=n(r("TSYQ")),g=n(r("Fxm3"));var y=function(e){function t(e){var r;return(0,l.default)(this,t),(r=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},r._handleSpy=r._handleSpy.bind((0,u.default)(r)),r}return(0,d.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:p.default.arrayOf(p.default.string).isRequired,currentClassName:p.default.string.isRequired,scrolledPastClassName:p.default.string,style:p.default.object,componentTag:p.default.oneOfType([p.default.string,p.default.element]),offset:p.default.number,rootEl:p.default.string,onUpdate:p.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var r=[],n=0,o=e.length;n<o;n++)r[n]=t;return r}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],r=[],n=[],o=e||this.state.targetItems,i=!1,l=0,s=o.length;l<s;l++){var c=o[l],u=!i&&this._isInView(c);u?(i=!0,t.push(c)):r.push(c);var f=l===s-1,d=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&f&&d&&(r.pop(),r.push.apply(r,(0,a.default)(t)),t=[c],n=this._fillArray(n,!1),u=!0),n.push(u)}return{inView:t,outView:r,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,r=this.props,n=r.rootEl,o=r.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var i=e.getBoundingClientRect(),a=n?t.height:window.innerHeight,l=this._getScrollDimension().scrollTop,s=l+a,c=n?i.top+l-t.top+o:i.top+l+o,u=c+e.offsetHeight;return c<s&&u>l}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),r=t.scrollTop,n=t.scrollHeight;return r+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,r=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:r.viewStatusList,isScrolledPast:r.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,r;(t=this.state.inViewState,r=e,t.length===r.length&&t.every((function(e,t){return e===r[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,g.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,r=this.props,n=r.children,a=r.className,l=r.scrolledPastClassName,s=r.style,c=0,u=h.default.Children.map(n,(function(t,r){var n;if(!t)return null;var a=t.type,s=l&&e.state.isScrolledPast[r],u=(0,m.default)((n={},(0,i.default)(n,"".concat(t.props.className),t.props.className),(0,i.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[r]),(0,i.default)(n,"".concat(e.props.scrolledPastClassName),s),n));return h.default.createElement(a,(0,o.default)({},t.props,{className:u,key:c++}),t.props.children)})),f=(0,m.default)((0,i.default)({},"".concat(a),a));return h.default.createElement(t,{className:f,style:s},u)}}]),t}(h.default.Component);t.default=y},ZD67:function(e,t,r){"use strict";var n=r("3Lyj"),o=r("Z6vF").getWeak,i=r("y3w9"),a=r("0/R4"),l=r("9gX7"),s=r("SlkY"),c=r("CkkT"),u=r("aagx"),f=r("s5qY"),d=c(5),p=c(6),h=0,m=function(e){return e._l||(e._l=new g)},g=function(){this.a=[]},y=function(e,t){return d(e.a,(function(e){return e[0]===t}))};g.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var r=y(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var c=e((function(e,n){l(e,c,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=n&&s(n,r,e[i],e)}));return n(c.prototype,{delete:function(e){if(!a(e))return!1;var r=o(e);return!0===r?m(f(this,t)).delete(e):r&&u(r,this._i)&&delete r[this._i]},has:function(e){if(!a(e))return!1;var r=o(e);return!0===r?m(f(this,t)).has(e):r&&u(r,this._i)}}),c},def:function(e,t,r){var n=o(i(t),!0);return!0===n?m(e).set(t,r):n[e._i]=r,e},ufstore:m}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},cDf5:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}}]);
//# sourceMappingURL=1667506073a7c21d11e04f6572f144e96e044b75-a99a7b6ce87fb168b1f1.js.map