/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

/**
 * Bridget makes jQuery widgets
 * v1.0.1
 */


(function(window) {



// -------------------------- utils -------------------------- //

    var slice = Array.prototype.slice;

    function noop() {
    }

// -------------------------- definition -------------------------- //

    function defineBridget($) {

// bail if no jQuery
        if (!$) {
            return;
        }

// -------------------------- addOptionMethod -------------------------- //

        /**
         * adds option method -> $().plugin('option', {...})
         * @param {Function} PluginClass - constructor class
         */
        function addOptionMethod(PluginClass) {
            // don't overwrite original option method
            if (PluginClass.prototype.option) {
                return;
            }

            // option setter
            PluginClass.prototype.option = function(opts) {
                // bail out if not an object
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            };
        }


// -------------------------- plugin bridge -------------------------- //

// helper function for logging errors
// $.error breaks jQuery chaining
        var logError = typeof console === 'undefined' ? noop :
                function(message) {
                    console.error(message);
                };

        /**
         * jQuery plugin bridge, access methods like $elem.plugin('method')
         * @param {String} namespace - plugin name
         * @param {Function} PluginClass - constructor class
         */
        function bridge(namespace, PluginClass) {
            // add to jQuery fn namespace
            $.fn[ namespace ] = function(options) {
                if (typeof options === 'string') {
                    // call plugin method when first argument is a string
                    // get arguments for method
                    var args = slice.call(arguments, 1);

                    for (var i = 0, len = this.length; i < len; i++) {
                        var elem = this[i];
                        var instance = $.data(elem, namespace);
                        if (!instance) {
                            logError("cannot call methods on " + namespace + " prior to initialization; " +
                                    "attempted to call '" + options + "'");
                            continue;
                        }
                        if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                            logError("no such method '" + options + "' for " + namespace + " instance");
                            continue;
                        }

                        // trigger method with arguments
                        var returnValue = instance[ options ].apply(instance, args);

                        // break look and return first value if provided
                        if (returnValue !== undefined) {
                            return returnValue;
                        }
                    }
                    // return this if no return value
                    return this;
                } else {
                    return this.each(function() {
                        var instance = $.data(this, namespace);
                        if (instance) {
                            // apply options & init
                            instance.option(options);
                            instance._init();
                        } else {
                            // initialize new instance
                            instance = new PluginClass(this, options);
                            $.data(this, namespace, instance);
                        }
                    });
                }
            };

        }

// -------------------------- bridget -------------------------- //

        /**
         * converts a Prototypical class into a proper jQuery plugin
         *   the class must have a ._init method
         * @param {String} namespace - plugin name, used in $().pluginName
         * @param {Function} PluginClass - constructor class
         */
        $.bridget = function(namespace, PluginClass) {
            addOptionMethod(PluginClass);
            bridge(namespace, PluginClass);
        };

        return $.bridget;

    }

// transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('jquery-bridget/jquery.bridget', ['jquery'], defineBridget);
    } else {
        // get jquery from browser global
        defineBridget(window.jQuery);
    }

})(window);

/*!
 * eventie v1.0.5
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

(function(window) {



    var docElem = document.documentElement;

    var bind = function() {
    };

    function getIEEvent(obj) {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement || obj;
        return event;
    }

    if (docElem.addEventListener) {
        bind = function(obj, type, fn) {
            obj.addEventListener(type, fn, false);
        };
    } else if (docElem.attachEvent) {
        bind = function(obj, type, fn) {
            obj[ type + fn ] = fn.handleEvent ?
                    function() {
                        var event = getIEEvent(obj);
                        fn.handleEvent.call(fn, event);
                    } :
                    function() {
                        var event = getIEEvent(obj);
                        fn.call(obj, event);
                    };
            obj.attachEvent("on" + type, obj[ type + fn ]);
        };
    }

    var unbind = function() {
    };

    if (docElem.removeEventListener) {
        unbind = function(obj, type, fn) {
            obj.removeEventListener(type, fn, false);
        };
    } else if (docElem.detachEvent) {
        unbind = function(obj, type, fn) {
            obj.detachEvent("on" + type, obj[ type + fn ]);
            try {
                delete obj[ type + fn ];
            } catch (err) {
                // can't delete window object properties
                obj[ type + fn ] = undefined;
            }
        };
    }

    var eventie = {
        bind: bind,
        unbind: unbind
    };

// ----- module definition ----- //

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('eventie/eventie', eventie);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = eventie;
    } else {
        // browser global
        window.eventie = eventie;
    }

})(this);

/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false */

(function(window) {



    var document = window.document;
// collection of functions to be triggered on ready
    var queue = [];

    function docReady(fn) {
        // throw out non-functions
        if (typeof fn !== 'function') {
            return;
        }

        if (docReady.isReady) {
            // ready now, hit it
            fn();
        } else {
            // queue function when ready
            queue.push(fn);
        }
    }

    docReady.isReady = false;

// triggered on various doc ready events
    function init(event) {
        // bail if IE8 document is not ready just yet
        var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
        if (docReady.isReady || isIE8NotReady) {
            return;
        }
        docReady.isReady = true;

        // process queue
        for (var i = 0, len = queue.length; i < len; i++) {
            var fn = queue[i];
            fn();
        }
    }

    function defineDocReady(eventie) {
        eventie.bind(document, 'DOMContentLoaded', init);
        eventie.bind(document, 'readystatechange', init);
        eventie.bind(window, 'load', init);

        return docReady;
    }

// transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        // if RequireJS, then doc is already ready
        docReady.isReady = typeof requirejs === 'function';
        define('doc-ready/doc-ready', ['eventie/eventie'], defineDocReady);
    } else {
        // browser global
        window.docReady = defineDocReady(window.eventie);
    }

})(this);

/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function() {


    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {
    }

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in it's storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after it's first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of it's properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define('eventEmitter/EventEmitter', [], function() {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = EventEmitter;
    }
    else {
        this.EventEmitter = EventEmitter;
    }
}.call(this));

/*!
 * getStyleProperty v1.0.3
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

(function(window) {



    var prefixes = 'Webkit Moz ms Ms O'.split(' ');
    var docElemStyle = document.documentElement.style;

    function getStyleProperty(propName) {
        if (!propName) {
            return;
        }

        // test standard property first
        if (typeof docElemStyle[ propName ] === 'string') {
            return propName;
        }

        // capitalize
        propName = propName.charAt(0).toUpperCase() + propName.slice(1);

        // test vendor specific properties
        var prefixed;
        for (var i = 0, len = prefixes.length; i < len; i++) {
            prefixed = prefixes[i] + propName;
            if (typeof docElemStyle[ prefixed ] === 'string') {
                return prefixed;
            }
        }
    }

// transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('get-style-property/get-style-property', [], function() {
            return getStyleProperty;
        });
    } else if (typeof exports === 'object') {
        // CommonJS for Component
        module.exports = getStyleProperty;
    } else {
        // browser global
        window.getStyleProperty = getStyleProperty;
    }

})(window);

/**
 * getSize v1.1.7
 * measure size of elements
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false */

(function(window, undefined) {



// -------------------------- helpers -------------------------- //

    var getComputedStyle = window.getComputedStyle;
    var getStyle = getComputedStyle ?
            function(elem) {
                return getComputedStyle(elem, null);
            } :
            function(elem) {
                return elem.currentStyle;
            };

// get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf('%') === -1 && !isNaN(num);
        return isValid && num;
    }

// -------------------------- measurements -------------------------- //

    var measurements = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
    ];

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0, len = measurements.length; i < len; i++) {
            var measurement = measurements[i];
            size[ measurement ] = 0;
        }
        return size;
    }



    function defineGetSize(getStyleProperty) {

// -------------------------- box sizing -------------------------- //

        var boxSizingProp = getStyleProperty('boxSizing');
        var isBoxSizeOuter;

        /**
         * WebKit measures the outer-width on style.width on border-box elems
         * IE & Firefox measures the inner-width
         */
        (function() {
            if (!boxSizingProp) {
                return;
            }

            var div = document.createElement('div');
            div.style.width = '200px';
            div.style.padding = '1px 2px 3px 4px';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px 2px 3px 4px';
            div.style[ boxSizingProp ] = 'border-box';

            var body = document.body || document.documentElement;
            body.appendChild(div);
            var style = getStyle(div);

            isBoxSizeOuter = getStyleSize(style.width) === 200;
            body.removeChild(div);
        })();


// -------------------------- getSize -------------------------- //

        function getSize(elem) {
            // use querySeletor if elem is string
            if (typeof elem === 'string') {
                elem = document.querySelector(elem);
            }

            // do not proceed on non-objects
            if (!elem || typeof elem !== 'object' || !elem.nodeType) {
                return;
            }

            var style = getStyle(elem);

            // if hidden, everything is 0
            if (style.display === 'none') {
                return getZeroSize();
            }

            var size = {};
            size.width = elem.offsetWidth;
            size.height = elem.offsetHeight;

            var isBorderBox = size.isBorderBox = !!(boxSizingProp &&
                    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box');

            // get all measurements
            for (var i = 0, len = measurements.length; i < len; i++) {
                var measurement = measurements[i];
                var value = style[ measurement ];
                value = mungeNonPixel(elem, value);
                var num = parseFloat(value);
                // any 'auto', 'medium' value will be 0
                size[ measurement ] = !isNaN(num) ? num : 0;
            }

            var paddingWidth = size.paddingLeft + size.paddingRight;
            var paddingHeight = size.paddingTop + size.paddingBottom;
            var marginWidth = size.marginLeft + size.marginRight;
            var marginHeight = size.marginTop + size.marginBottom;
            var borderWidth = size.borderLeftWidth + size.borderRightWidth;
            var borderHeight = size.borderTopWidth + size.borderBottomWidth;

            var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

            // overwrite width and height if we can get it from style
            var styleWidth = getStyleSize(style.width);
            if (styleWidth !== false) {
                size.width = styleWidth +
                        // add padding and border unless it's already including it
                                (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
                    }

                    var styleHeight = getStyleSize(style.height);
                    if (styleHeight !== false) {
                        size.height = styleHeight +
                                // add padding and border unless it's already including it
                                        (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
                            }

                            size.innerWidth = size.width - (paddingWidth + borderWidth);
                            size.innerHeight = size.height - (paddingHeight + borderHeight);

                            size.outerWidth = size.width + marginWidth;
                            size.outerHeight = size.height + marginHeight;

                            return size;
                        }

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
                        function mungeNonPixel(elem, value) {
                            // IE8 and has percent value
                            if (getComputedStyle || value.indexOf('%') === -1) {
                                return value;
                            }
                            var style = elem.style;
                            // Remember the original values
                            var left = style.left;
                            var rs = elem.runtimeStyle;
                            var rsLeft = rs && rs.left;

                            // Put in the new values to get a computed value out
                            if (rsLeft) {
                                rs.left = elem.currentStyle.left;
                            }
                            style.left = value;
                            value = style.pixelLeft;

                            // Revert the changed values
                            style.left = left;
                            if (rsLeft) {
                                rs.left = rsLeft;
                            }

                            return value;
                        }

                        return getSize;

                    }

// transport
                    if (typeof define === 'function' && define.amd) {
                        // AMD for RequireJS
                        define('get-size/get-size', ['get-style-property/get-style-property'], defineGetSize);
                    } else if (typeof exports === 'object') {
                        // CommonJS for Component
                        module.exports = defineGetSize(require('get-style-property'));
                    } else {
                        // browser global
                        window.getSize = defineGetSize(window.getStyleProperty);
                    }

                })(window);

        /**
         * matchesSelector helper v1.0.1
         *
         * @name matchesSelector
         *   @param {Element} elem
         *   @param {String} selector
         */

        /*jshint browser: true, strict: true, undef: true, unused: true */
        /*global define: false */

        (function(global, ElemProto) {



            var matchesMethod = (function() {
                // check un-prefixed
                if (ElemProto.matchesSelector) {
                    return 'matchesSelector';
                }
                // check vendor prefixes
                var prefixes = ['webkit', 'moz', 'ms', 'o'];

                for (var i = 0, len = prefixes.length; i < len; i++) {
                    var prefix = prefixes[i];
                    var method = prefix + 'MatchesSelector';
                    if (ElemProto[ method ]) {
                        return method;
                    }
                }
            })();

            // ----- match ----- //

            function match(elem, selector) {
                return elem[ matchesMethod ](selector);
            }

            // ----- appendToFragment ----- //

            function checkParent(elem) {
                // not needed if already has parent
                if (elem.parentNode) {
                    return;
                }
                var fragment = document.createDocumentFragment();
                fragment.appendChild(elem);
            }

            // ----- query ----- //

            // fall back to using QSA
            // thx @jonathantneal https://gist.github.com/3062955
            function query(elem, selector) {
                // append to fragment if no parent
                checkParent(elem);

                // match elem with all selected elems of parent
                var elems = elem.parentNode.querySelectorAll(selector);
                for (var i = 0, len = elems.length; i < len; i++) {
                    // return true if match
                    if (elems[i] === elem) {
                        return true;
                    }
                }
                // otherwise return false
                return false;
            }

            // ----- matchChild ----- //

            function matchChild(elem, selector) {
                checkParent(elem);
                return match(elem, selector);
            }

            // ----- matchesSelector ----- //

            var matchesSelector;

            if (matchesMethod) {
                // IE9 supports matchesSelector, but doesn't work on orphaned elems
                // check for that
                var div = document.createElement('div');
                var supportsOrphans = match(div, 'div');
                matchesSelector = supportsOrphans ? match : matchChild;
            } else {
                matchesSelector = query;
            }

            // transport
            if (typeof define === 'function' && define.amd) {
                // AMD
                define('matches-selector/matches-selector', [], function() {
                    return matchesSelector;
                });
            } else {
                // browser global
                window.matchesSelector = matchesSelector;
            }

        })(this, Element.prototype);

        /**
         * Outlayer Item
         */

        (function(window) {



// ----- get style ----- //

            var getComputedStyle = window.getComputedStyle;
            var getStyle = getComputedStyle ?
                    function(elem) {
                        return getComputedStyle(elem, null);
                    } :
                    function(elem) {
                        return elem.currentStyle;
                    };


// extend objects
            function extend(a, b) {
                for (var prop in b) {
                    a[ prop ] = b[ prop ];
                }
                return a;
            }

            function isEmptyObj(obj) {
                for (var prop in obj) {
                    return false;
                }
                prop = null;
                return true;
            }

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
            function toDash(str) {
                return str.replace(/([A-Z])/g, function($1) {
                    return '-' + $1.toLowerCase();
                });
            }

// -------------------------- Outlayer definition -------------------------- //

            function outlayerItemDefinition(EventEmitter, getSize, getStyleProperty) {

// -------------------------- CSS3 support -------------------------- //

                var transitionProperty = getStyleProperty('transition');
                var transformProperty = getStyleProperty('transform');
                var supportsCSS3 = transitionProperty && transformProperty;
                var is3d = !!getStyleProperty('perspective');

                var transitionEndEvent = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'otransitionend',
                    transition: 'transitionend'
                }[ transitionProperty ];

// properties that could have vendor prefix
                var prefixableProperties = [
                    'transform',
                    'transition',
                    'transitionDuration',
                    'transitionProperty'
                ];

// cache all vendor properties
                var vendorProperties = (function() {
                    var cache = {};
                    for (var i = 0, len = prefixableProperties.length; i < len; i++) {
                        var prop = prefixableProperties[i];
                        var supportedProp = getStyleProperty(prop);
                        if (supportedProp && supportedProp !== prop) {
                            cache[ prop ] = supportedProp;
                        }
                    }
                    return cache;
                })();

// -------------------------- Item -------------------------- //

                function Item(element, layout) {
                    if (!element) {
                        return;
                    }

                    this.element = element;
                    // parent layout class, i.e. Masonry, Isotope, or Packery
                    this.layout = layout;
                    this.position = {
                        x: 0,
                        y: 0
                    };

                    this._create();
                }

// inherit EventEmitter
                extend(Item.prototype, EventEmitter.prototype);

                Item.prototype._create = function() {
                    // transition objects
                    this._transn = {
                        ingProperties: {},
                        clean: {},
                        onEnd: {}
                    };

                    this.css({
                        position: 'absolute'
                    });
                };

// trigger specified handler for event type
                Item.prototype.handleEvent = function(event) {
                    var method = 'on' + event.type;
                    if (this[ method ]) {
                        this[ method ](event);
                    }
                };

                Item.prototype.getSize = function() {
                    this.size = getSize(this.element);
                };

                /**
                 * apply CSS styles to element
                 * @param {Object} style
                 */
                Item.prototype.css = function(style) {
                    var elemStyle = this.element.style;

                    for (var prop in style) {
                        // use vendor property if available
                        var supportedProp = vendorProperties[ prop ] || prop;
                        elemStyle[ supportedProp ] = style[ prop ];
                    }
                };

                // measure position, and sets it
                Item.prototype.getPosition = function() {
                    var style = getStyle(this.element);
                    var layoutOptions = this.layout.options;
                    var isOriginLeft = layoutOptions.isOriginLeft;
                    var isOriginTop = layoutOptions.isOriginTop;
                    var x = parseInt(style[ isOriginLeft ? 'left' : 'right' ], 10);
                    var y = parseInt(style[ isOriginTop ? 'top' : 'bottom' ], 10);

                    // clean up 'auto' or other non-integer values
                    x = isNaN(x) ? 0 : x;
                    y = isNaN(y) ? 0 : y;
                    // remove padding from measurement
                    var layoutSize = this.layout.size;
                    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
                    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

                    this.position.x = x;
                    this.position.y = y;
                };

// set settled position, apply padding
                Item.prototype.layoutPosition = function() {
                    var layoutSize = this.layout.size;
                    var layoutOptions = this.layout.options;
                    var style = {};

                    if (layoutOptions.isOriginLeft) {
                        style.left = (this.position.x + layoutSize.paddingLeft) + 'px';
                        // reset other property
                        style.right = '';
                    } else {
                        style.right = (this.position.x + layoutSize.paddingRight) + 'px';
                        style.left = '';
                    }

                    if (layoutOptions.isOriginTop) {
                        style.top = (this.position.y + layoutSize.paddingTop) + 'px';
                        style.bottom = '';
                    } else {
                        style.bottom = (this.position.y + layoutSize.paddingBottom) + 'px';
                        style.top = '';
                    }

                    this.css(style);
                    this.emitEvent('layout', [this]);
                };


// transform translate function
                var translate = is3d ?
                        function(x, y) {
                            return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
                        } :
                        function(x, y) {
                            return 'translate(' + x + 'px, ' + y + 'px)';
                        };


                Item.prototype._transitionTo = function(x, y) {
                    this.getPosition();
                    // get current x & y from top/left
                    var curX = this.position.x;
                    var curY = this.position.y;

                    var compareX = parseInt(x, 10);
                    var compareY = parseInt(y, 10);
                    var didNotMove = compareX === this.position.x && compareY === this.position.y;

                    // save end position
                    this.setPosition(x, y);

                    // if did not move and not transitioning, just go to layout
                    if (didNotMove && !this.isTransitioning) {
                        this.layoutPosition();
                        return;
                    }

                    var transX = x - curX;
                    var transY = y - curY;
                    var transitionStyle = {};
                    // flip cooridinates if origin on right or bottom
                    var layoutOptions = this.layout.options;
                    transX = layoutOptions.isOriginLeft ? transX : -transX;
                    transY = layoutOptions.isOriginTop ? transY : -transY;
                    transitionStyle.transform = translate(transX, transY);

                    this.transition({
                        to: transitionStyle,
                        onTransitionEnd: {
                            transform: this.layoutPosition
                        },
                        isCleaning: true
                    });
                };

// non transition + transform support
                Item.prototype.goTo = function(x, y) {
                    this.setPosition(x, y);
                    this.layoutPosition();
                };

// use transition and transforms if supported
                Item.prototype.moveTo = supportsCSS3 ?
                        Item.prototype._transitionTo : Item.prototype.goTo;

                Item.prototype.setPosition = function(x, y) {
                    this.position.x = parseInt(x, 10);
                    this.position.y = parseInt(y, 10);
                };

// ----- transition ----- //

                /**
                 * @param {Object} style - CSS
                 * @param {Function} onTransitionEnd
                 */

// non transition, just trigger callback
                Item.prototype._nonTransition = function(args) {
                    this.css(args.to);
                    if (args.isCleaning) {
                        this._removeStyles(args.to);
                    }
                    for (var prop in args.onTransitionEnd) {
                        args.onTransitionEnd[ prop ].call(this);
                    }
                };

                /**
                 * proper transition
                 * @param {Object} args - arguments
                 *   @param {Object} to - style to transition to
                 *   @param {Object} from - style to start transition from
                 *   @param {Boolean} isCleaning - removes transition styles after transition
                 *   @param {Function} onTransitionEnd - callback
                 */
                Item.prototype._transition = function(args) {
                    // redirect to nonTransition if no transition duration
                    if (!parseFloat(this.layout.options.transitionDuration)) {
                        this._nonTransition(args);
                        return;
                    }

                    var _transition = this._transn;
                    // keep track of onTransitionEnd callback by css property
                    for (var prop in args.onTransitionEnd) {
                        _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
                    }
                    // keep track of properties that are transitioning
                    for (prop in args.to) {
                        _transition.ingProperties[ prop ] = true;
                        // keep track of properties to clean up when transition is done
                        if (args.isCleaning) {
                            _transition.clean[ prop ] = true;
                        }
                    }

                    // set from styles
                    if (args.from) {
                        this.css(args.from);
                        // force redraw. http://blog.alexmaccaw.com/css-transitions
                        var h = this.element.offsetHeight;
                        // hack for JSHint to hush about unused var
                        h = null;
                    }
                    // enable transition
                    this.enableTransition(args.to);
                    // set styles that are transitioning
                    this.css(args.to);

                    this.isTransitioning = true;

                };

                var itemTransitionProperties = transformProperty && (toDash(transformProperty) +
                        ',opacity');

                Item.prototype.enableTransition = function(/* style */) {
                    // only enable if not already transitioning
                    // bug in IE10 were re-setting transition style will prevent
                    // transitionend event from triggering
                    if (this.isTransitioning) {
                        return;
                    }

                    // make transition: foo, bar, baz from style object
                    // TODO uncomment this bit when IE10 bug is resolved
                    // var transitionValue = [];
                    // for ( var prop in style ) {
                    //   // dash-ify camelCased properties like WebkitTransition
                    //   transitionValue.push( toDash( prop ) );
                    // }
                    // enable transition styles
                    // HACK always enable transform,opacity for IE10
                    this.css({
                        transitionProperty: itemTransitionProperties,
                        transitionDuration: this.layout.options.transitionDuration
                    });
                    // listen for transition end event
                    this.element.addEventListener(transitionEndEvent, this, false);
                };

                Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

                Item.prototype.onwebkitTransitionEnd = function(event) {
                    this.ontransitionend(event);
                };

                Item.prototype.onotransitionend = function(event) {
                    this.ontransitionend(event);
                };

// properties that I munge to make my life easier
                var dashedVendorProperties = {
                    '-webkit-transform': 'transform',
                    '-moz-transform': 'transform',
                    '-o-transform': 'transform'
                };

                Item.prototype.ontransitionend = function(event) {
                    // disregard bubbled events from children
                    if (event.target !== this.element) {
                        return;
                    }
                    var _transition = this._transn;
                    // get property name of transitioned property, convert to prefix-free
                    var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

                    // remove property that has completed transitioning
                    delete _transition.ingProperties[ propertyName ];
                    // check if any properties are still transitioning
                    if (isEmptyObj(_transition.ingProperties)) {
                        // all properties have completed transitioning
                        this.disableTransition();
                    }
                    // clean style
                    if (propertyName in _transition.clean) {
                        // clean up style
                        this.element.style[ event.propertyName ] = '';
                        delete _transition.clean[ propertyName ];
                    }
                    // trigger onTransitionEnd callback
                    if (propertyName in _transition.onEnd) {
                        var onTransitionEnd = _transition.onEnd[ propertyName ];
                        onTransitionEnd.call(this);
                        delete _transition.onEnd[ propertyName ];
                    }

                    this.emitEvent('transitionEnd', [this]);
                };

                Item.prototype.disableTransition = function() {
                    this.removeTransitionStyles();
                    this.element.removeEventListener(transitionEndEvent, this, false);
                    this.isTransitioning = false;
                };

                /**
                 * removes style property from element
                 * @param {Object} style
                 **/
                Item.prototype._removeStyles = function(style) {
                    // clean up transition styles
                    var cleanStyle = {};
                    for (var prop in style) {
                        cleanStyle[ prop ] = '';
                    }
                    this.css(cleanStyle);
                };

                var cleanTransitionStyle = {
                    transitionProperty: '',
                    transitionDuration: ''
                };

                Item.prototype.removeTransitionStyles = function() {
                    // remove transition
                    this.css(cleanTransitionStyle);
                };

// ----- show/hide/remove ----- //

// remove element from DOM
                Item.prototype.removeElem = function() {
                    this.element.parentNode.removeChild(this.element);
                    this.emitEvent('remove', [this]);
                };

                Item.prototype.remove = function() {
                    // just remove element if no transition support or no transition
                    if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
                        this.removeElem();
                        return;
                    }

                    // start transition
                    var _this = this;
                    this.on('transitionEnd', function() {
                        _this.removeElem();
                        return true; // bind once
                    });
                    this.hide();
                };

                Item.prototype.reveal = function() {
                    delete this.isHidden;
                    // remove display: none
                    this.css({display: ''});

                    var options = this.layout.options;
                    this.transition({
                        from: options.hiddenStyle,
                        to: options.visibleStyle,
                        isCleaning: true
                    });
                };

                Item.prototype.hide = function() {
                    // set flag
                    this.isHidden = true;
                    // remove display: none
                    this.css({display: ''});

                    var options = this.layout.options;
                    this.transition({
                        from: options.visibleStyle,
                        to: options.hiddenStyle,
                        // keep hidden stuff hidden
                        isCleaning: true,
                        onTransitionEnd: {
                            opacity: function() {
                                // check if still hidden
                                // during transition, item may have been un-hidden
                                if (this.isHidden) {
                                    this.css({display: 'none'});
                                }
                            }
                        }
                    });
                };

                Item.prototype.destroy = function() {
                    this.css({
                        position: '',
                        left: '',
                        right: '',
                        top: '',
                        bottom: '',
                        transition: '',
                        transform: ''
                    });
                };

                return Item;

            }

// -------------------------- transport -------------------------- //

            if (typeof define === 'function' && define.amd) {
                // AMD
                define('outlayer/item', [
                    'eventEmitter/EventEmitter',
                    'get-size/get-size',
                    'get-style-property/get-style-property'
                ],
                        outlayerItemDefinition);
            } else {
                // browser global
                window.Outlayer = {};
                window.Outlayer.Item = outlayerItemDefinition(
                        window.EventEmitter,
                        window.getSize,
                        window.getStyleProperty
                        );
            }

        })(window);

        /*!
         * Outlayer v1.2.0
         * the brains and guts of a layout library
         * MIT license
         */

        (function(window) {



// ----- vars ----- //

            var document = window.document;
            var console = window.console;
            var jQuery = window.jQuery;

            var noop = function() {
            };

// -------------------------- helpers -------------------------- //

// extend objects
            function extend(a, b) {
                for (var prop in b) {
                    a[ prop ] = b[ prop ];
                }
                return a;
            }


            var objToString = Object.prototype.toString;
            function isArray(obj) {
                return objToString.call(obj) === '[object Array]';
            }

// turn element or nodeList into an array
            function makeArray(obj) {
                var ary = [];
                if (isArray(obj)) {
                    // use object if already an array
                    ary = obj;
                } else if (obj && typeof obj.length === 'number') {
                    // convert nodeList to array
                    for (var i = 0, len = obj.length; i < len; i++) {
                        ary.push(obj[i]);
                    }
                } else {
                    // array of single index
                    ary.push(obj);
                }
                return ary;
            }

// http://stackoverflow.com/a/384380/182183
            var isElement = (typeof HTMLElement === 'object') ?
                    function isElementDOM2(obj) {
                        return obj instanceof HTMLElement;
                    } :
                    function isElementQuirky(obj) {
                        return obj && typeof obj === 'object' &&
                                obj.nodeType === 1 && typeof obj.nodeName === 'string';
                    };

// index of helper cause IE8
            var indexOf = Array.prototype.indexOf ? function(ary, obj) {
                return ary.indexOf(obj);
            } : function(ary, obj) {
                for (var i = 0, len = ary.length; i < len; i++) {
                    if (ary[i] === obj) {
                        return i;
                    }
                }
                return -1;
            };

            function removeFrom(obj, ary) {
                var index = indexOf(ary, obj);
                if (index !== -1) {
                    ary.splice(index, 1);
                }
            }

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
            function toDashed(str) {
                return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
                    return $1 + '-' + $2;
                }).toLowerCase();
            }


            function outlayerDefinition(eventie, docReady, EventEmitter, getSize, matchesSelector, Item) {

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
                var GUID = 0;
// internal store of all Outlayer intances
                var instances = {};


                /**
                 * @param {Element, String} element
                 * @param {Object} options
                 * @constructor
                 */
                function Outlayer(element, options) {
                    // use element as selector string
                    if (typeof element === 'string') {
                        element = document.querySelector(element);
                    }

                    // bail out if not proper element
                    if (!element || !isElement(element)) {
                        if (console) {
                            console.error('Bad ' + this.constructor.namespace + ' element: ' + element);
                        }
                        return;
                    }

                    this.element = element;

                    // options
                    this.options = extend({}, this.constructor.defaults);
                    this.option(options);

                    // add id for Outlayer.getFromElement
                    var id = ++GUID;
                    this.element.outlayerGUID = id; // expando
                    instances[ id ] = this; // associate via id

                    // kick it off
                    this._create();

                    if (this.options.isInitLayout) {
                        this.layout();
                    }
                }

// settings are for internal use only
                Outlayer.namespace = 'outlayer';
                Outlayer.Item = Item;

// default options
                Outlayer.defaults = {
                    containerStyle: {
                        position: 'relative'
                    },
                    isInitLayout: true,
                    isOriginLeft: true,
                    isOriginTop: true,
                    isResizeBound: true,
                    isResizingContainer: true,
                    // item options
                    transitionDuration: '0.4s',
                    hiddenStyle: {
                        opacity: 0,
                        transform: 'scale(0.001)'
                    },
                    visibleStyle: {
                        opacity: 1,
                        transform: 'scale(1)'
                    }
                };

// inherit EventEmitter
                extend(Outlayer.prototype, EventEmitter.prototype);

                /**
                 * set options
                 * @param {Object} opts
                 */
                Outlayer.prototype.option = function(opts) {
                    extend(this.options, opts);
                };

                Outlayer.prototype._create = function() {
                    // get items from children
                    this.reloadItems();
                    // elements that affect layout, but are not laid out
                    this.stamps = [];
                    this.stamp(this.options.stamp);
                    // set container style
                    extend(this.element.style, this.options.containerStyle);

                    // bind resize method
                    if (this.options.isResizeBound) {
                        this.bindResize();
                    }
                };

// goes through all children again and gets bricks in proper order
                Outlayer.prototype.reloadItems = function() {
                    // collection of item elements
                    this.items = this._itemize(this.element.children);
                };


                /**
                 * turn elements into Outlayer.Items to be used in layout
                 * @param {Array or NodeList or HTMLElement} elems
                 * @returns {Array} items - collection of new Outlayer Items
                 */
                Outlayer.prototype._itemize = function(elems) {

                    var itemElems = this._filterFindItemElements(elems);
                    var Item = this.constructor.Item;

                    // create new Outlayer Items for collection
                    var items = [];
                    for (var i = 0, len = itemElems.length; i < len; i++) {
                        var elem = itemElems[i];
                        var item = new Item(elem, this);
                        items.push(item);
                    }

                    return items;
                };

                /**
                 * get item elements to be used in layout
                 * @param {Array or NodeList or HTMLElement} elems
                 * @returns {Array} items - item elements
                 */
                Outlayer.prototype._filterFindItemElements = function(elems) {
                    // make array of elems
                    elems = makeArray(elems);
                    var itemSelector = this.options.itemSelector;
                    var itemElems = [];

                    for (var i = 0, len = elems.length; i < len; i++) {
                        var elem = elems[i];
                        // check that elem is an actual element
                        if (!isElement(elem)) {
                            continue;
                        }
                        // filter & find items if we have an item selector
                        if (itemSelector) {
                            // filter siblings
                            if (matchesSelector(elem, itemSelector)) {
                                itemElems.push(elem);
                            }
                            // find children
                            var childElems = elem.querySelectorAll(itemSelector);
                            // concat childElems to filterFound array
                            for (var j = 0, jLen = childElems.length; j < jLen; j++) {
                                itemElems.push(childElems[j]);
                            }
                        } else {
                            itemElems.push(elem);
                        }
                    }

                    return itemElems;
                };

                /**
                 * getter method for getting item elements
                 * @returns {Array} elems - collection of item elements
                 */
                Outlayer.prototype.getItemElements = function() {
                    var elems = [];
                    for (var i = 0, len = this.items.length; i < len; i++) {
                        elems.push(this.items[i].element);
                    }
                    return elems;
                };

// ----- init & layout ----- //

                /**
                 * lays out all items
                 */
                Outlayer.prototype.layout = function() {
                    this._resetLayout();
                    this._manageStamps();

                    // don't animate first layout
                    var isInstant = this.options.isLayoutInstant !== undefined ?
                            this.options.isLayoutInstant : !this._isLayoutInited;
                    this.layoutItems(this.items, isInstant);

                    // flag for initalized
                    this._isLayoutInited = true;
                };

// _init is alias for layout
                Outlayer.prototype._init = Outlayer.prototype.layout;

                /**
                 * logic before any new layout
                 */
                Outlayer.prototype._resetLayout = function() {
                    this.getSize();
                };


                Outlayer.prototype.getSize = function() {
                    this.size = getSize(this.element);
                };

                /**
                 * get measurement from option, for columnWidth, rowHeight, gutter
                 * if option is String -> get element from selector string, & get size of element
                 * if option is Element -> get size of element
                 * else use option as a number
                 *
                 * @param {String} measurement
                 * @param {String} size - width or height
                 * @private
                 */
                Outlayer.prototype._getMeasurement = function(measurement, size) {
                    var option = this.options[ measurement ];
                    var elem;
                    if (!option) {
                        // default to 0
                        this[ measurement ] = 0;
                    } else {
                        // use option as an element
                        if (typeof option === 'string') {
                            elem = this.element.querySelector(option);
                        } else if (isElement(option)) {
                            elem = option;
                        }
                        // use size of element, if element
                        this[ measurement ] = elem ? getSize(elem)[ size ] : option;
                    }
                };

                /**
                 * layout a collection of item elements
                 * @api public
                 */
                Outlayer.prototype.layoutItems = function(items, isInstant) {
                    items = this._getItemsForLayout(items);

                    this._layoutItems(items, isInstant);

                    this._postLayout();
                };

                /**
                 * get the items to be laid out
                 * you may want to skip over some items
                 * @param {Array} items
                 * @returns {Array} items
                 */
                Outlayer.prototype._getItemsForLayout = function(items) {
                    var layoutItems = [];
                    for (var i = 0, len = items.length; i < len; i++) {
                        var item = items[i];
                        if (!item.isIgnored) {
                            layoutItems.push(item);
                        }
                    }
                    return layoutItems;
                };

                /**
                 * layout items
                 * @param {Array} items
                 * @param {Boolean} isInstant
                 */
                Outlayer.prototype._layoutItems = function(items, isInstant) {
                    var _this = this;
                    function onItemsLayout() {
                        _this.emitEvent('layoutComplete', [_this, items]);
                    }

                    if (!items || !items.length) {
                        // no items, emit event with empty array
                        onItemsLayout();
                        return;
                    }

                    // emit layoutComplete when done
                    this._itemsOn(items, 'layout', onItemsLayout);

                    var queue = [];

                    for (var i = 0, len = items.length; i < len; i++) {
                        var item = items[i];
                        // get x/y object from method
                        var position = this._getItemLayoutPosition(item);
                        // enqueue
                        position.item = item;
                        position.isInstant = isInstant || item.isLayoutInstant;
                        queue.push(position);
                    }

                    this._processLayoutQueue(queue);
                };

                /**
                 * get item layout position
                 * @param {Outlayer.Item} item
                 * @returns {Object} x and y position
                 */
                Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
                    return {
                        x: 0,
                        y: 0
                    };
                };

                /**
                 * iterate over array and position each item
                 * Reason being - separating this logic prevents 'layout invalidation'
                 * thx @paul_irish
                 * @param {Array} queue
                 */
                Outlayer.prototype._processLayoutQueue = function(queue) {
                    for (var i = 0, len = queue.length; i < len; i++) {
                        var obj = queue[i];
                        this._positionItem(obj.item, obj.x, obj.y, obj.isInstant);
                    }
                };

                /**
                 * Sets position of item in DOM
                 * @param {Outlayer.Item} item
                 * @param {Number} x - horizontal position
                 * @param {Number} y - vertical position
                 * @param {Boolean} isInstant - disables transitions
                 */
                Outlayer.prototype._positionItem = function(item, x, y, isInstant) {
                    if (isInstant) {
                        // if not transition, just set CSS
                        item.goTo(x, y);
                    } else {
                        item.moveTo(x, y);
                    }
                };

                /**
                 * Any logic you want to do after each layout,
                 * i.e. size the container
                 */
                Outlayer.prototype._postLayout = function() {
                    this.resizeContainer();
                };

                Outlayer.prototype.resizeContainer = function() {
                    if (!this.options.isResizingContainer) {
                        return;
                    }
                    var size = this._getContainerSize();
                    if (size) {
                        this._setContainerMeasure(size.width, true);
                        this._setContainerMeasure(size.height, false);
                    }
                };

                /**
                 * Sets width or height of container if returned
                 * @returns {Object} size
                 *   @param {Number} width
                 *   @param {Number} height
                 */
                Outlayer.prototype._getContainerSize = noop;

                /**
                 * @param {Number} measure - size of width or height
                 * @param {Boolean} isWidth
                 */
                Outlayer.prototype._setContainerMeasure = function(measure, isWidth) {
                    if (measure === undefined) {
                        return;
                    }

                    var elemSize = this.size;
                    // add padding and border width if border box
                    if (elemSize.isBorderBox) {
                        measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                                elemSize.borderLeftWidth + elemSize.borderRightWidth :
                                elemSize.paddingBottom + elemSize.paddingTop +
                                elemSize.borderTopWidth + elemSize.borderBottomWidth;
                    }

                    measure = Math.max(measure, 0);
                    this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
                };

                /**
                 * trigger a callback for a collection of items events
                 * @param {Array} items - Outlayer.Items
                 * @param {String} eventName
                 * @param {Function} callback
                 */
                Outlayer.prototype._itemsOn = function(items, eventName, callback) {
                    var doneCount = 0;
                    var count = items.length;
                    // event callback
                    var _this = this;
                    function tick() {
                        doneCount++;
                        if (doneCount === count) {
                            callback.call(_this);
                        }
                        return true; // bind once
                    }
                    // bind callback
                    for (var i = 0, len = items.length; i < len; i++) {
                        var item = items[i];
                        item.on(eventName, tick);
                    }
                };

// -------------------------- ignore & stamps -------------------------- //


                /**
                 * keep item in collection, but do not lay it out
                 * ignored items do not get skipped in layout
                 * @param {Element} elem
                 */
                Outlayer.prototype.ignore = function(elem) {
                    var item = this.getItem(elem);
                    if (item) {
                        item.isIgnored = true;
                    }
                };

                /**
                 * return item to layout collection
                 * @param {Element} elem
                 */
                Outlayer.prototype.unignore = function(elem) {
                    var item = this.getItem(elem);
                    if (item) {
                        delete item.isIgnored;
                    }
                };

                /**
                 * adds elements to stamps
                 * @param {NodeList, Array, Element, or String} elems
                 */
                Outlayer.prototype.stamp = function(elems) {
                    elems = this._find(elems);
                    if (!elems) {
                        return;
                    }

                    this.stamps = this.stamps.concat(elems);
                    // ignore
                    for (var i = 0, len = elems.length; i < len; i++) {
                        var elem = elems[i];
                        this.ignore(elem);
                    }
                };

                /**
                 * removes elements to stamps
                 * @param {NodeList, Array, or Element} elems
                 */
                Outlayer.prototype.unstamp = function(elems) {
                    elems = this._find(elems);
                    if (!elems) {
                        return;
                    }

                    for (var i = 0, len = elems.length; i < len; i++) {
                        var elem = elems[i];
                        // filter out removed stamp elements
                        removeFrom(elem, this.stamps);
                        this.unignore(elem);
                    }

                };

                /**
                 * finds child elements
                 * @param {NodeList, Array, Element, or String} elems
                 * @returns {Array} elems
                 */
                Outlayer.prototype._find = function(elems) {
                    if (!elems) {
                        return;
                    }
                    // if string, use argument as selector string
                    if (typeof elems === 'string') {
                        elems = this.element.querySelectorAll(elems);
                    }
                    elems = makeArray(elems);
                    return elems;
                };

                Outlayer.prototype._manageStamps = function() {
                    if (!this.stamps || !this.stamps.length) {
                        return;
                    }

                    this._getBoundingRect();

                    for (var i = 0, len = this.stamps.length; i < len; i++) {
                        var stamp = this.stamps[i];
                        this._manageStamp(stamp);
                    }
                };

// update boundingLeft / Top
                Outlayer.prototype._getBoundingRect = function() {
                    // get bounding rect for container element
                    var boundingRect = this.element.getBoundingClientRect();
                    var size = this.size;
                    this._boundingRect = {
                        left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
                        top: boundingRect.top + size.paddingTop + size.borderTopWidth,
                        right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
                        bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
                    };
                };

                /**
                 * @param {Element} stamp
                 **/
                Outlayer.prototype._manageStamp = noop;

                /**
                 * get x/y position of element relative to container element
                 * @param {Element} elem
                 * @returns {Object} offset - has left, top, right, bottom
                 */
                Outlayer.prototype._getElementOffset = function(elem) {
                    var boundingRect = elem.getBoundingClientRect();
                    var thisRect = this._boundingRect;
                    var size = getSize(elem);
                    var offset = {
                        left: boundingRect.left - thisRect.left - size.marginLeft,
                        top: boundingRect.top - thisRect.top - size.marginTop,
                        right: thisRect.right - boundingRect.right - size.marginRight,
                        bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
                    };
                    return offset;
                };

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
                Outlayer.prototype.handleEvent = function(event) {
                    var method = 'on' + event.type;
                    if (this[ method ]) {
                        this[ method ](event);
                    }
                };

                /**
                 * Bind layout to window resizing
                 */
                Outlayer.prototype.bindResize = function() {
                    // bind just one listener
                    if (this.isResizeBound) {
                        return;
                    }
                    eventie.bind(window, 'resize', this);
                    this.isResizeBound = true;
                };

                /**
                 * Unbind layout to window resizing
                 */
                Outlayer.prototype.unbindResize = function() {
                    if (this.isResizeBound) {
                        eventie.unbind(window, 'resize', this);
                    }
                    this.isResizeBound = false;
                };

// original debounce by John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

// this fires every resize
                Outlayer.prototype.onresize = function() {
                    if (this.resizeTimeout) {
                        clearTimeout(this.resizeTimeout);
                    }

                    var _this = this;
                    function delayed() {
                        _this.resize();
                        delete _this.resizeTimeout;
                    }

                    this.resizeTimeout = setTimeout(delayed, 100);
                };

// debounced, layout on resize
                Outlayer.prototype.resize = function() {
                    // don't trigger if size did not change
                    // or if resize was unbound. See #9
                    if (!this.isResizeBound || !this.needsResizeLayout()) {
                        return;
                    }

                    this.layout();
                };

                /**
                 * check if layout is needed post layout
                 * @returns Boolean
                 */
                Outlayer.prototype.needsResizeLayout = function() {
                    var size = getSize(this.element);
                    // check that this.size and size are there
                    // IE8 triggers resize on body size change, so they might not be
                    var hasSizes = this.size && size;
                    return hasSizes && size.innerWidth !== this.size.innerWidth;
                };

// -------------------------- methods -------------------------- //

                /**
                 * add items to Outlayer instance
                 * @param {Array or NodeList or Element} elems
                 * @returns {Array} items - Outlayer.Items
                 **/
                Outlayer.prototype.addItems = function(elems) {
                    var items = this._itemize(elems);
                    // add items to collection
                    if (items.length) {
                        this.items = this.items.concat(items);
                    }
                    return items;
                };

                /**
                 * Layout newly-appended item elements
                 * @param {Array or NodeList or Element} elems
                 */
                Outlayer.prototype.appended = function(elems) {
                    var items = this.addItems(elems);
                    if (!items.length) {
                        return;
                    }
                    // layout and reveal just the new items
                    this.layoutItems(items, true);
                    this.reveal(items);
                };

                /**
                 * Layout prepended elements
                 * @param {Array or NodeList or Element} elems
                 */
                Outlayer.prototype.prepended = function(elems) {
                    var items = this._itemize(elems);
                    if (!items.length) {
                        return;
                    }
                    // add items to beginning of collection
                    var previousItems = this.items.slice(0);
                    this.items = items.concat(previousItems);
                    // start new layout
                    this._resetLayout();
                    this._manageStamps();
                    // layout new stuff without transition
                    this.layoutItems(items, true);
                    this.reveal(items);
                    // layout previous items
                    this.layoutItems(previousItems);
                };

                /**
                 * reveal a collection of items
                 * @param {Array of Outlayer.Items} items
                 */
                Outlayer.prototype.reveal = function(items) {
                    var len = items && items.length;
                    if (!len) {
                        return;
                    }
                    for (var i = 0; i < len; i++) {
                        var item = items[i];
                        item.reveal();
                    }
                };

                /**
                 * hide a collection of items
                 * @param {Array of Outlayer.Items} items
                 */
                Outlayer.prototype.hide = function(items) {
                    var len = items && items.length;
                    if (!len) {
                        return;
                    }
                    for (var i = 0; i < len; i++) {
                        var item = items[i];
                        item.hide();
                    }
                };

                /**
                 * get Outlayer.Item, given an Element
                 * @param {Element} elem
                 * @param {Function} callback
                 * @returns {Outlayer.Item} item
                 */
                Outlayer.prototype.getItem = function(elem) {
                    // loop through items to get the one that matches
                    for (var i = 0, len = this.items.length; i < len; i++) {
                        var item = this.items[i];
                        if (item.element === elem) {
                            // return item
                            return item;
                        }
                    }
                };

                /**
                 * get collection of Outlayer.Items, given Elements
                 * @param {Array} elems
                 * @returns {Array} items - Outlayer.Items
                 */
                Outlayer.prototype.getItems = function(elems) {
                    if (!elems || !elems.length) {
                        return;
                    }
                    var items = [];
                    for (var i = 0, len = elems.length; i < len; i++) {
                        var elem = elems[i];
                        var item = this.getItem(elem);
                        if (item) {
                            items.push(item);
                        }
                    }

                    return items;
                };

                /**
                 * remove element(s) from instance and DOM
                 * @param {Array or NodeList or Element} elems
                 */
                Outlayer.prototype.remove = function(elems) {
                    elems = makeArray(elems);

                    var removeItems = this.getItems(elems);
                    // bail if no items to remove
                    if (!removeItems || !removeItems.length) {
                        return;
                    }

                    this._itemsOn(removeItems, 'remove', function() {
                        this.emitEvent('removeComplete', [this, removeItems]);
                    });

                    for (var i = 0, len = removeItems.length; i < len; i++) {
                        var item = removeItems[i];
                        item.remove();
                        // remove item from collection
                        removeFrom(item, this.items);
                    }
                };

// ----- destroy ----- //

// remove and disable Outlayer instance
                Outlayer.prototype.destroy = function() {
                    // clean up dynamic styles
                    var style = this.element.style;
                    style.height = '';
                    style.position = '';
                    style.width = '';
                    // destroy items
                    for (var i = 0, len = this.items.length; i < len; i++) {
                        var item = this.items[i];
                        item.destroy();
                    }

                    this.unbindResize();

                    delete this.element.outlayerGUID;
                    // remove data for jQuery
                    if (jQuery) {
                        jQuery.removeData(this.element, this.constructor.namespace);
                    }

                };

// -------------------------- data -------------------------- //

                /**
                 * get Outlayer instance from element
                 * @param {Element} elem
                 * @returns {Outlayer}
                 */
                Outlayer.data = function(elem) {
                    var id = elem && elem.outlayerGUID;
                    return id && instances[ id ];
                };


// -------------------------- create Outlayer class -------------------------- //

                /**
                 * create a layout class
                 * @param {String} namespace
                 */
                Outlayer.create = function(namespace, options) {
                    // sub-class Outlayer
                    function Layout() {
                        Outlayer.apply(this, arguments);
                    }
                    // inherit Outlayer prototype, use Object.create if there
                    if (Object.create) {
                        Layout.prototype = Object.create(Outlayer.prototype);
                    } else {
                        extend(Layout.prototype, Outlayer.prototype);
                    }
                    // set contructor, used for namespace and Item
                    Layout.prototype.constructor = Layout;

                    Layout.defaults = extend({}, Outlayer.defaults);
                    // apply new options
                    extend(Layout.defaults, options);
                    // keep prototype.settings for backwards compatibility (Packery v1.2.0)
                    Layout.prototype.settings = {};

                    Layout.namespace = namespace;

                    Layout.data = Outlayer.data;

                    // sub-class Item
                    Layout.Item = function LayoutItem() {
                        Item.apply(this, arguments);
                    };

                    Layout.Item.prototype = new Item();

                    // -------------------------- declarative -------------------------- //

                    /**
                     * allow user to initialize Outlayer via .js-namespace class
                     * options are parsed from data-namespace-option attribute
                     */
                    docReady(function() {
                        var dashedNamespace = toDashed(namespace);
                        var elems = document.querySelectorAll('.js-' + dashedNamespace);
                        var dataAttr = 'data-' + dashedNamespace + '-options';

                        for (var i = 0, len = elems.length; i < len; i++) {
                            var elem = elems[i];
                            var attr = elem.getAttribute(dataAttr);
                            var options;
                            try {
                                options = attr && JSON.parse(attr);
                            } catch (error) {
                                // log error, do not initialize
                                if (console) {
                                    console.error('Error parsing ' + dataAttr + ' on ' +
                                            elem.nodeName.toLowerCase() + (elem.id ? '#' + elem.id : '') + ': ' +
                                            error);
                                }
                                continue;
                            }
                            // initialize
                            var instance = new Layout(elem, options);
                            // make available via $().data('layoutname')
                            if (jQuery) {
                                jQuery.data(elem, namespace, instance);
                            }
                        }
                    });

                    // -------------------------- jQuery bridge -------------------------- //

                    // make into jQuery plugin
                    if (jQuery && jQuery.bridget) {
                        jQuery.bridget(namespace, Layout);
                    }

                    return Layout;
                };

// ----- fin ----- //

// back in global
                Outlayer.Item = Item;

                return Outlayer;

            }

// -------------------------- transport -------------------------- //

            if (typeof define === 'function' && define.amd) {
                // AMD
                define('outlayer/outlayer', [
                    'eventie/eventie',
                    'doc-ready/doc-ready',
                    'eventEmitter/EventEmitter',
                    'get-size/get-size',
                    'matches-selector/matches-selector',
                    './item'
                ],
                        outlayerDefinition);
            } else {
                // browser global
                window.Outlayer = outlayerDefinition(
                        window.eventie,
                        window.docReady,
                        window.EventEmitter,
                        window.getSize,
                        window.matchesSelector,
                        window.Outlayer.Item
                        );
            }

        })(window);

        /**
         * Isotope Item
         **/

        (function(window) {



// -------------------------- Item -------------------------- //

            function itemDefinition(Outlayer) {

// sub-class Outlayer Item
                function Item() {
                    Outlayer.Item.apply(this, arguments);
                }

                Item.prototype = new Outlayer.Item();

                Item.prototype._create = function() {
                    // assign id, used for original-order sorting
                    this.id = this.layout.itemGUID++;
                    Outlayer.Item.prototype._create.call(this);
                    this.sortData = {};
                };

                Item.prototype.updateSortData = function() {
                    if (this.isIgnored) {
                        return;
                    }
                    // default sorters
                    this.sortData.id = this.id;
                    // for backward compatibility
                    this.sortData['original-order'] = this.id;
                    this.sortData.random = Math.random();
                    // go thru getSortData obj and apply the sorters
                    var getSortData = this.layout.options.getSortData;
                    var sorters = this.layout._sorters;
                    for (var key in getSortData) {
                        var sorter = sorters[ key ];
                        this.sortData[ key ] = sorter(this.element, this);
                    }
                };

                return Item;

            }

// -------------------------- transport -------------------------- //

            if (typeof define === 'function' && define.amd) {
                // AMD
                define('isotope/js/item', [
                    'outlayer/outlayer'
                ],
                        itemDefinition);
            } else {
                // browser global
                window.Isotope = window.Isotope || {};
                window.Isotope.Item = itemDefinition(
                        window.Outlayer
                        );
            }

        })(window);

        (function(window) {



// --------------------------  -------------------------- //

            function layoutModeDefinition(getSize, Outlayer) {

                // layout mode class
                function LayoutMode(isotope) {
                    this.isotope = isotope;
                    // link properties
                    if (isotope) {
                        this.options = isotope.options[ this.namespace ];
                        this.element = isotope.element;
                        this.items = isotope.filteredItems;
                        this.size = isotope.size;
                    }
                }

                /**
                 * some methods should just defer to default Outlayer method
                 * and reference the Isotope instance as `this`
                 **/
                (function() {
                    var facadeMethods = [
                        '_resetLayout',
                        '_getItemLayoutPosition',
                        '_manageStamp',
                        '_getContainerSize',
                        '_getElementOffset',
                        'needsResizeLayout'
                    ];

                    for (var i = 0, len = facadeMethods.length; i < len; i++) {
                        var methodName = facadeMethods[i];
                        LayoutMode.prototype[ methodName ] = getOutlayerMethod(methodName);
                    }

                    function getOutlayerMethod(methodName) {
                        return function() {
                            return Outlayer.prototype[ methodName ].apply(this.isotope, arguments);
                        };
                    }
                })();

                // -----  ----- //

                // for horizontal layout modes, check vertical size
                LayoutMode.prototype.needsVerticalResizeLayout = function() {
                    // don't trigger if size did not change
                    var size = getSize(this.isotope.element);
                    // check that this.size and size are there
                    // IE8 triggers resize on body size change, so they might not be
                    var hasSizes = this.isotope.size && size;
                    return hasSizes && size.innerHeight !== this.isotope.size.innerHeight;
                };

                // ----- measurements ----- //

                LayoutMode.prototype._getMeasurement = function() {
                    this.isotope._getMeasurement.apply(this, arguments);
                };

                LayoutMode.prototype.getColumnWidth = function() {
                    this.getSegmentSize('column', 'Width');
                };

                LayoutMode.prototype.getRowHeight = function() {
                    this.getSegmentSize('row', 'Height');
                };

                /**
                 * get columnWidth or rowHeight
                 * segment: 'column' or 'row'
                 * size 'Width' or 'Height'
                 **/
                LayoutMode.prototype.getSegmentSize = function(segment, size) {
                    var segmentName = segment + size;
                    var outerSize = 'outer' + size;
                    // columnWidth / outerWidth // rowHeight / outerHeight
                    this._getMeasurement(segmentName, outerSize);
                    // got rowHeight or columnWidth, we can chill
                    if (this[ segmentName ]) {
                        return;
                    }
                    // fall back to item of first element
                    var firstItemSize = this.getFirstItemSize();
                    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
                            // or size of container
                            this.isotope.size[ 'inner' + size ];
                };

                LayoutMode.prototype.getFirstItemSize = function() {
                    var firstItem = this.isotope.filteredItems[0];
                    return firstItem && firstItem.element && getSize(firstItem.element);
                };

                // ----- methods that should reference isotope ----- //

                LayoutMode.prototype.layout = function() {
                    this.isotope.layout.apply(this.isotope, arguments);
                };

                LayoutMode.prototype.getSize = function() {
                    this.isotope.getSize();
                    this.size = this.isotope.size;
                };

                // -------------------------- create -------------------------- //

                LayoutMode.modes = {};

                LayoutMode.create = function(namespace, options) {

                    function Mode() {
                        LayoutMode.apply(this, arguments);
                    }

                    Mode.prototype = new LayoutMode();

                    // default options
                    if (options) {
                        Mode.options = options;
                    }

                    Mode.prototype.namespace = namespace;
                    // register in Isotope
                    LayoutMode.modes[ namespace ] = Mode;

                    return Mode;
                };


                return LayoutMode;

            }

            if (typeof define === 'function' && define.amd) {
                // AMD
                define('isotope/js/layout-mode', [
                    'get-size/get-size',
                    'outlayer/outlayer'
                ],
                        layoutModeDefinition);
            } else {
                // browser global
                window.Isotope = window.Isotope || {};
                window.Isotope.LayoutMode = layoutModeDefinition(
                        window.getSize,
                        window.Outlayer
                        );
            }


        })(window);

        /*!
         * Masonry v3.1.5
         * Cascading grid layout library
         * http://masonry.desandro.com
         * MIT License
         * by David DeSandro
         */

        (function(window) {



// -------------------------- helpers -------------------------- //

            var indexOf = Array.prototype.indexOf ?
                    function(items, value) {
                        return items.indexOf(value);
                    } :
                    function(items, value) {
                        for (var i = 0, len = items.length; i < len; i++) {
                            var item = items[i];
                            if (item === value) {
                                return i;
                            }
                        }
                        return -1;
                    };

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
            function masonryDefinition(Outlayer, getSize) {
                // create an Outlayer layout class
                var Masonry = Outlayer.create('masonry');

                Masonry.prototype._resetLayout = function() {
                    this.getSize();
                    this._getMeasurement('columnWidth', 'outerWidth');
                    this._getMeasurement('gutter', 'outerWidth');
                    this.measureColumns();

                    // reset column Y
                    var i = this.cols;
                    this.colYs = [];
                    while (i--) {
                        this.colYs.push(0);
                    }

                    this.maxY = 0;
                };

                Masonry.prototype.measureColumns = function() {
                    this.getContainerWidth();
                    // if columnWidth is 0, default to outerWidth of first item
                    if (!this.columnWidth) {
                        var firstItem = this.items[0];
                        var firstItemElem = firstItem && firstItem.element;
                        // columnWidth fall back to item of first element
                        this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth ||
                                // if first elem has no width, default to size of container
                                this.containerWidth;
                    }

                    this.columnWidth += this.gutter;

                    this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth);
                    this.cols = Math.max(this.cols, 1);
                };

                Masonry.prototype.getContainerWidth = function() {
                    // container is parent if fit width
                    var container = this.options.isFitWidth ? this.element.parentNode : this.element;
                    // check that this.size and size are there
                    // IE8 triggers resize on body size change, so they might not be
                    var size = getSize(container);
                    this.containerWidth = size && size.innerWidth;
                };

                Masonry.prototype._getItemLayoutPosition = function(item) {
                    item.getSize();
                    // how many columns does this brick span
                    var remainder = item.size.outerWidth % this.columnWidth;
                    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
                    // round if off by 1 pixel, otherwise use ceil
                    var colSpan = Math[ mathMethod ](item.size.outerWidth / this.columnWidth);
                    colSpan = Math.min(colSpan, this.cols);

                    var colGroup = this._getColGroup(colSpan);
                    // get the minimum Y value from the columns
                    var minimumY = Math.min.apply(Math, colGroup);
                    var shortColIndex = indexOf(colGroup, minimumY);

                    // position the brick
                    var position = {
                        x: this.columnWidth * shortColIndex,
                        y: minimumY
                    };

                    // apply setHeight to necessary columns
                    var setHeight = minimumY + item.size.outerHeight;
                    var setSpan = this.cols + 1 - colGroup.length;
                    for (var i = 0; i < setSpan; i++) {
                        this.colYs[ shortColIndex + i ] = setHeight;
                    }

                    return position;
                };

                /**
                 * @param {Number} colSpan - number of columns the element spans
                 * @returns {Array} colGroup
                 */
                Masonry.prototype._getColGroup = function(colSpan) {
                    if (colSpan < 2) {
                        // if brick spans only one column, use all the column Ys
                        return this.colYs;
                    }

                    var colGroup = [];
                    // how many different places could this brick fit horizontally
                    var groupCount = this.cols + 1 - colSpan;
                    // for each group potential horizontal position
                    for (var i = 0; i < groupCount; i++) {
                        // make an array of colY values for that one group
                        var groupColYs = this.colYs.slice(i, i + colSpan);
                        // and get the max value of the array
                        colGroup[i] = Math.max.apply(Math, groupColYs);
                    }
                    return colGroup;
                };

                Masonry.prototype._manageStamp = function(stamp) {
                    var stampSize = getSize(stamp);
                    var offset = this._getElementOffset(stamp);
                    // get the columns that this stamp affects
                    var firstX = this.options.isOriginLeft ? offset.left : offset.right;
                    var lastX = firstX + stampSize.outerWidth;
                    var firstCol = Math.floor(firstX / this.columnWidth);
                    firstCol = Math.max(0, firstCol);
                    var lastCol = Math.floor(lastX / this.columnWidth);
                    // lastCol should not go over if multiple of columnWidth #425
                    lastCol -= lastX % this.columnWidth ? 0 : 1;
                    lastCol = Math.min(this.cols - 1, lastCol);
                    // set colYs to bottom of the stamp
                    var stampMaxY = (this.options.isOriginTop ? offset.top : offset.bottom) +
                            stampSize.outerHeight;
                    for (var i = firstCol; i <= lastCol; i++) {
                        this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
                    }
                };

                Masonry.prototype._getContainerSize = function() {
                    this.maxY = Math.max.apply(Math, this.colYs);
                    var size = {
                        height: this.maxY
                    };

                    if (this.options.isFitWidth) {
                        size.width = this._getContainerFitWidth();
                    }

                    return size;
                };

                Masonry.prototype._getContainerFitWidth = function() {
                    var unusedCols = 0;
                    // count unused columns
                    var i = this.cols;
                    while (--i) {
                        if (this.colYs[i] !== 0) {
                            break;
                        }
                        unusedCols++;
                    }
                    // fit container to columns that have been used
                    return (this.cols - unusedCols) * this.columnWidth - this.gutter;
                };

                Masonry.prototype.needsResizeLayout = function() {
                    var previousWidth = this.containerWidth;
                    this.getContainerWidth();
                    return previousWidth !== this.containerWidth;
                };

                return Masonry;
            }

// -------------------------- transport -------------------------- //

            if (typeof define === 'function' && define.amd) {
                // AMD
                define('masonry/masonry', [
                    'outlayer/outlayer',
                    'get-size/get-size'
                ],
                        masonryDefinition);
            } else {
                // browser global
                window.Masonry = masonryDefinition(
                        window.Outlayer,
                        window.getSize
                        );
            }

        })(window);

        /*!
         * Masonry layout mode
         * sub-classes Masonry
         * http://masonry.desandro.com
         */

        (function(window) {



// -------------------------- helpers -------------------------- //

// extend objects
            function extend(a, b) {
                for (var prop in b) {
                    a[ prop ] = b[ prop ];
                }
                return a;
            }

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
            function masonryDefinition(LayoutMode, Masonry) {
                // create an Outlayer layout class
                var MasonryMode = LayoutMode.create('masonry');

                // save on to these methods
                var _getElementOffset = MasonryMode.prototype._getElementOffset;
                var layout = MasonryMode.prototype.layout;
                var _getMeasurement = MasonryMode.prototype._getMeasurement;

                // sub-class Masonry
                extend(MasonryMode.prototype, Masonry.prototype);

                // set back, as it was overwritten by Masonry
                MasonryMode.prototype._getElementOffset = _getElementOffset;
                MasonryMode.prototype.layout = layout;
                MasonryMode.prototype._getMeasurement = _getMeasurement;

                var measureColumns = MasonryMode.prototype.measureColumns;
                MasonryMode.prototype.measureColumns = function() {
                    // set items, used if measuring first item
                    this.items = this.isotope.filteredItems;
                    measureColumns.call(this);
                };

                // HACK copy over isOriginLeft/Top options
                var _manageStamp = MasonryMode.prototype._manageStamp;
                MasonryMode.prototype._manageStamp = function() {
                    this.options.isOriginLeft = this.isotope.options.isOriginLeft;
                    this.options.isOriginTop = this.isotope.options.isOriginTop;
                    _manageStamp.apply(this, arguments);
                };

                return MasonryMode;
            }

// -------------------------- transport -------------------------- //

            if (typeof define === 'function' && define.amd) {
                // AMD
                define('isotope/js/layout-modes/masonry', [
                    '../layout-mode',
                    'masonry/masonry'
                ],
                        masonryDefinition);
            } else {
                // browser global
                masonryDefinition(
                        window.Isotope.LayoutMode,
                        window.Masonry
                        );
            }

        })(window);

        (function(window) {



            function fitRowsDefinition(LayoutMode) {

                var FitRows = LayoutMode.create('fitRows');

                FitRows.prototype._resetLayout = function() {
                    this.x = 0;
                    this.y = 0;
                    this.maxY = 0;
                };

                FitRows.prototype._getItemLayoutPosition = function(item) {
                    item.getSize();

                    // if this element cannot fit in the current row
                    if (this.x !== 0 && item.size.outerWidth + this.x > this.isotope.size.innerWidth) {
                        this.x = 0;
                        this.y = this.maxY;
                    }

                    var position = {
                        x: this.x,
                        y: this.y
                    };

                    this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
                    this.x += item.size.outerWidth;

                    return position;
                };

                FitRows.prototype._getContainerSize = function() {
                    return {height: this.maxY};
                };

                return FitRows;

            }

            if (typeof define === 'function' && define.amd) {
                // AMD
                define('isotope/js/layout-modes/fit-rows', [
                    '../layout-mode'
                ],
                        fitRowsDefinition);
            } else {
                // browser global
                fitRowsDefinition(
                        window.Isotope.LayoutMode
                        );
            }

        })(window);

        (function(window) {



            function verticalDefinition(LayoutMode) {

                var Vertical = LayoutMode.create('vertical', {
                    horizontalAlignment: 0
                });

                Vertical.prototype._resetLayout = function() {
                    this.y = 0;
                };

                Vertical.prototype._getItemLayoutPosition = function(item) {
                    item.getSize();
                    var x = (this.isotope.size.innerWidth - item.size.outerWidth) *
                            this.options.horizontalAlignment;
                    var y = this.y;
                    this.y += item.size.outerHeight;
                    return {x: x, y: y};
                };

                Vertical.prototype._getContainerSize = function() {
                    return {height: this.y};
                };

                return Vertical;

            }

            if (typeof define === 'function' && define.amd) {
                // AMD
                define('isotope/js/layout-modes/vertical', [
                    '../layout-mode'
                ],
                        verticalDefinition);
            } else {
                // browser global
                verticalDefinition(
                        window.Isotope.LayoutMode
                        );
            }

        })(window);

        /*!
         * Isotope v2.0.0
         * Filter & sort magical layouts
         * http://isotope.metafizzy.co
         */

        (function(window) {



// -------------------------- vars -------------------------- //

            var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

// extend objects
            function extend(a, b) {
                for (var prop in b) {
                    a[ prop ] = b[ prop ];
                }
                return a;
            }

            var trim = String.prototype.trim ?
                    function(str) {
                        return str.trim();
                    } :
                    function(str) {
                        return str.replace(/^\s+|\s+$/g, '');
                    };

            var docElem = document.documentElement;

            var getText = docElem.textContent ?
                    function(elem) {
                        return elem.textContent;
                    } :
                    function(elem) {
                        return elem.innerText;
                    };

            var objToString = Object.prototype.toString;
            function isArray(obj) {
                return objToString.call(obj) === '[object Array]';
            }

// index of helper cause IE8
            var indexOf = Array.prototype.indexOf ? function(ary, obj) {
                return ary.indexOf(obj);
            } : function(ary, obj) {
                for (var i = 0, len = ary.length; i < len; i++) {
                    if (ary[i] === obj) {
                        return i;
                    }
                }
                return -1;
            };

// turn element or nodeList into an array
            function makeArray(obj) {
                var ary = [];
                if (isArray(obj)) {
                    // use object if already an array
                    ary = obj;
                } else if (obj && typeof obj.length === 'number') {
                    // convert nodeList to array
                    for (var i = 0, len = obj.length; i < len; i++) {
                        ary.push(obj[i]);
                    }
                } else {
                    // array of single index
                    ary.push(obj);
                }
                return ary;
            }

            function removeFrom(obj, ary) {
                var index = indexOf(ary, obj);
                if (index !== -1) {
                    ary.splice(index, 1);
                }
            }

// -------------------------- isotopeDefinition -------------------------- //

// used for AMD definition and requires
            function isotopeDefinition(Outlayer, getSize, matchesSelector, Item, LayoutMode) {
                // create an Outlayer layout class
                var Isotope = Outlayer.create('isotope', {
                    layoutMode: "masonry",
                    isJQueryFiltering: true,
                    sortAscending: true
                });

                Isotope.Item = Item;
                Isotope.LayoutMode = LayoutMode;

                Isotope.prototype._create = function() {
                    this.itemGUID = 0;
                    // functions that sort items
                    this._sorters = {};
                    this._getSorters();
                    // call super
                    Outlayer.prototype._create.call(this);

                    // create layout modes
                    this.modes = {};
                    // start filteredItems with all items
                    this.filteredItems = this.items;
                    // keep of track of sortBys
                    this.sortHistory = ['original-order'];
                    // create from registered layout modes
                    for (var name in LayoutMode.modes) {
                        this._initLayoutMode(name);
                    }
                };

                Isotope.prototype.reloadItems = function() {
                    // reset item ID counter
                    this.itemGUID = 0;
                    // call super
                    Outlayer.prototype.reloadItems.call(this);
                };

                Isotope.prototype._itemize = function() {
                    var items = Outlayer.prototype._itemize.apply(this, arguments);
                    // assign ID for original-order
                    for (var i = 0, len = items.length; i < len; i++) {
                        var item = items[i];
                        item.id = this.itemGUID++;
                    }
                    this._updateItemsSortData(items);
                    return items;
                };


                // -------------------------- layout -------------------------- //

                Isotope.prototype._initLayoutMode = function(name) {
                    var Mode = LayoutMode.modes[ name ];
                    // set mode options
                    // HACK extend initial options, back-fill in default options
                    var initialOpts = this.options[ name ] || {};
                    this.options[ name ] = Mode.options ?
                            extend(Mode.options, initialOpts) : initialOpts;
                    // init layout mode instance
                    this.modes[ name ] = new Mode(this);
                };


                Isotope.prototype.layout = function() {
                    // if first time doing layout, do all magic
                    if (!this._isLayoutInited && this.options.isInitLayout) {
                        this.arrange();
                        return;
                    }
                    this._layout();
                };

                // private method to be used in layout() & magic()
                Isotope.prototype._layout = function() {
                    // don't animate first layout
                    var isInstant = this._getIsInstant();
                    // layout flow
                    this._resetLayout();
                    this._manageStamps();
                    this.layoutItems(this.filteredItems, isInstant);

                    // flag for initalized
                    this._isLayoutInited = true;
                };

                // filter + sort + layout
                Isotope.prototype.arrange = function(opts) {
                    // set any options pass
                    this.option(opts);
                    this._getIsInstant();
                    // filter, sort, and layout
                    this.filteredItems = this._filter(this.items);
                    this._sort();
                    this._layout();
                };
                // alias to _init for main plugin method
                Isotope.prototype._init = Isotope.prototype.arrange;

                // HACK
                // Don't animate/transition first layout
                // Or don't animate/transition other layouts
                Isotope.prototype._getIsInstant = function() {
                    var isInstant = this.options.isLayoutInstant !== undefined ?
                            this.options.isLayoutInstant : !this._isLayoutInited;
                    this._isInstant = isInstant;
                    return isInstant;
                };

                // -------------------------- filter -------------------------- //

                Isotope.prototype._filter = function(items) {
                    var filter = this.options.filter;
                    filter = filter || '*';
                    var matches = [];
                    var hiddenMatched = [];
                    var visibleUnmatched = [];

                    var test = this._getFilterTest(filter);

                    // test each item
                    for (var i = 0, len = items.length; i < len; i++) {
                        var item = items[i];
                        if (item.isIgnored) {
                            continue;
                        }
                        // add item to either matched or unmatched group
                        var isMatched = test(item);
                        // item.isFilterMatched = isMatched;
                        // add to matches if its a match
                        if (isMatched) {
                            matches.push(item);
                        }
                        // add to additional group if item needs to be hidden or revealed
                        if (isMatched && item.isHidden) {
                            hiddenMatched.push(item);
                        } else if (!isMatched && !item.isHidden) {
                            visibleUnmatched.push(item);
                        }
                    }

                    var _this = this;
                    function hideReveal() {
                        _this.reveal(hiddenMatched);
                        _this.hide(visibleUnmatched);
                    }

                    if (this._isInstant) {
                        this._noTransition(hideReveal);
                    } else {
                        hideReveal();
                    }

                    return matches;
                };

                // get a jQuery, function, or a matchesSelector test given the filter
                Isotope.prototype._getFilterTest = function(filter) {
                    if (jQuery && this.options.isJQueryFiltering) {
                        // use jQuery
                        return function(item) {
                            return jQuery(item.element).is(filter);
                        };
                    }
                    if (typeof filter === 'function') {
                        // use filter as function
                        return function(item) {
                            return filter(item.element);
                        };
                    }
                    // default, use filter as selector string
                    return function(item) {
                        return matchesSelector(item.element, filter);
                    };
                };

                // -------------------------- sorting -------------------------- //

                /**
                 * @params {Array} elems
                 * @public
                 */
                Isotope.prototype.updateSortData = function(elems) {
                    this._getSorters();
                    // update item sort data
                    // default to all items if none are passed in
                    elems = makeArray(elems);
                    var items = this.getItems(elems);
                    // if no items found, update all items
                    items = items.length ? items : this.items;
                    this._updateItemsSortData(items);
                };

                Isotope.prototype._getSorters = function() {
                    var getSortData = this.options.getSortData;
                    for (var key in getSortData) {
                        var sorter = getSortData[ key ];
                        this._sorters[ key ] = mungeSorter(sorter);
                    }
                };

                /**
                 * @params {Array} items - of Isotope.Items
                 * @private
                 */
                Isotope.prototype._updateItemsSortData = function(items) {
                    for (var i = 0, len = items.length; i < len; i++) {
                        var item = items[i];
                        item.updateSortData();
                    }
                };

                // ----- munge sorter ----- //

                // encapsulate this, as we just need mungeSorter
                // other functions in here are just for munging
                var mungeSorter = (function() {
                    // add a magic layer to sorters for convienent shorthands
                    // `.foo-bar` will use the text of .foo-bar querySelector
                    // `[foo-bar]` will use attribute
                    // you can also add parser
                    // `.foo-bar parseInt` will parse that as a number
                    function mungeSorter(sorter) {
                        // if not a string, return function or whatever it is
                        if (typeof sorter !== 'string') {
                            return sorter;
                        }
                        // parse the sorter string
                        var args = trim(sorter).split(' ');
                        var query = args[0];
                        // check if query looks like [an-attribute]
                        var attrMatch = query.match(/^\[(.+)\]$/);
                        var attr = attrMatch && attrMatch[1];
                        var getValue = getValueGetter(attr, query);
                        // use second argument as a parser
                        var parser = Isotope.sortDataParsers[ args[1] ];
                        // parse the value, if there was a parser
                        sorter = parser ? function(elem) {
                            return elem && parser(getValue(elem));
                        } :
                                // otherwise just return value
                                        function(elem) {
                                            return elem && getValue(elem);
                                        };

                                return sorter;
                            }

                    // get an attribute getter, or get text of the querySelector
                    function getValueGetter(attr, query) {
                        var getValue;
                        // if query looks like [foo-bar], get attribute
                        if (attr) {
                            getValue = function(elem) {
                                return elem.getAttribute(attr);
                            };
                        } else {
                            // otherwise, assume its a querySelector, and get its text
                            getValue = function(elem) {
                                var child = elem.querySelector(query);
                                return child && getText(child);
                            };
                        }
                        return getValue;
                    }

                    return mungeSorter;
                })();

                // parsers used in getSortData shortcut strings
                Isotope.sortDataParsers = {
                    'parseInt': function(val) {
                        return parseInt(val, 10);
                    },
                    'parseFloat': function(val) {
                        return parseFloat(val);
                    }
                };

                // ----- sort method ----- //

                // sort filteredItem order
                Isotope.prototype._sort = function() {
                    var sortByOpt = this.options.sortBy;
                    if (!sortByOpt) {
                        return;
                    }
                    // concat all sortBy and sortHistory
                    var sortBys = [].concat.apply(sortByOpt, this.sortHistory);
                    // sort magic
                    var itemSorter = getItemSorter(sortBys, this.options.sortAscending);
                    this.filteredItems.sort(itemSorter);
                    // keep track of sortBy History
                    if (sortByOpt !== this.sortHistory[0]) {
                        // add to front, oldest goes in last
                        this.sortHistory.unshift(sortByOpt);
                    }
                };

                // returns a function used for sorting
                function getItemSorter(sortBys, sortAsc) {
                    return function sorter(itemA, itemB) {
                        // cycle through all sortKeys
                        for (var i = 0, len = sortBys.length; i < len; i++) {
                            var sortBy = sortBys[i];
                            var a = itemA.sortData[ sortBy ];
                            var b = itemB.sortData[ sortBy ];
                            if (a > b || a < b) {
                                // if sortAsc is an object, use the value given the sortBy key
                                var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
                                var direction = isAscending ? 1 : -1;
                                return (a > b ? 1 : -1) * direction;
                            }
                        }
                        return 0;
                    };
                }

                // -------------------------- methods -------------------------- //

                // get layout mode
                Isotope.prototype._mode = function() {
                    var layoutMode = this.options.layoutMode;
                    var mode = this.modes[ layoutMode ];
                    if (!mode) {
                        // TODO console.error
                        throw new Error('No layout mode: ' + layoutMode);
                    }
                    // HACK sync mode's options
                    // any options set after init for layout mode need to be synced
                    mode.options = this.options[ layoutMode ];
                    return mode;
                };

                Isotope.prototype._resetLayout = function() {
                    // trigger original reset layout
                    Outlayer.prototype._resetLayout.call(this);
                    this._mode()._resetLayout();
                };

                Isotope.prototype._getItemLayoutPosition = function(item) {
                    return this._mode()._getItemLayoutPosition(item);
                };

                Isotope.prototype._manageStamp = function(stamp) {
                    this._mode()._manageStamp(stamp);
                };

                Isotope.prototype._getContainerSize = function() {
                    return this._mode()._getContainerSize();
                };

                Isotope.prototype.needsResizeLayout = function() {
                    return this._mode().needsResizeLayout();
                };

                // -------------------------- adding & removing -------------------------- //

                // HEADS UP overwrites default Outlayer appended
                Isotope.prototype.appended = function(elems) {
                    var items = this.addItems(elems);
                    if (!items.length) {
                        return;
                    }
                    var filteredItems = this._filterRevealAdded(items);
                    // add to filteredItems
                    this.filteredItems = this.filteredItems.concat(filteredItems);
                };

                // HEADS UP overwrites default Outlayer prepended
                Isotope.prototype.prepended = function(elems) {
                    var items = this._itemize(elems);
                    if (!items.length) {
                        return;
                    }
                    // add items to beginning of collection
                    var previousItems = this.items.slice(0);
                    this.items = items.concat(previousItems);
                    // start new layout
                    this._resetLayout();
                    this._manageStamps();
                    // layout new stuff without transition
                    var filteredItems = this._filterRevealAdded(items);
                    // layout previous items
                    this.layoutItems(previousItems);
                    // add to filteredItems
                    this.filteredItems = filteredItems.concat(this.filteredItems);
                };

                Isotope.prototype._filterRevealAdded = function(items) {
                    var filteredItems = this._noTransition(function() {
                        return this._filter(items);
                    });
                    // layout and reveal just the new items
                    this.layoutItems(filteredItems, true);
                    this.reveal(filteredItems);
                    return items;
                };

                /**
                 * Filter, sort, and layout newly-appended item elements
                 * @param {Array or NodeList or Element} elems
                 */
                Isotope.prototype.insert = function(elems) {
                    var items = this.addItems(elems);
                    if (!items.length) {
                        return;
                    }
                    // append item elements
                    var i, item;
                    var len = items.length;
                    for (i = 0; i < len; i++) {
                        item = items[i];
                        this.element.appendChild(item.element);
                    }
                    // filter new stuff
                    /*
                     // this way adds hides new filtered items with NO transition
                     // so user can't see if new hidden items have been inserted
                     var filteredInsertItems;
                     this._noTransition( function() {
                     filteredInsertItems = this._filter( items );
                     // hide all new items
                     this.hide( filteredInsertItems );
                     });
                     // */
                    // this way hides new filtered items with transition
                    // so user at least sees that something has been added
                    var filteredInsertItems = this._filter(items);
                    // hide all newitems
                    this._noTransition(function() {
                        this.hide(filteredInsertItems);
                    });
                    // */
                    // set flag
                    for (i = 0; i < len; i++) {
                        items[i].isLayoutInstant = true;
                    }
                    this.arrange();
                    // reset flag
                    for (i = 0; i < len; i++) {
                        delete items[i].isLayoutInstant;
                    }
                    this.reveal(filteredInsertItems);
                };

                var _remove = Isotope.prototype.remove;
                Isotope.prototype.remove = function(elems) {
                    elems = makeArray(elems);
                    var removeItems = this.getItems(elems);
                    // do regular thing
                    _remove.call(this, elems);
                    // bail if no items to remove
                    if (!removeItems || !removeItems.length) {
                        return;
                    }
                    // remove elems from filteredItems
                    for (var i = 0, len = removeItems.length; i < len; i++) {
                        var item = removeItems[i];
                        // remove item from collection
                        removeFrom(item, this.filteredItems);
                    }
                };

                /**
                 * trigger fn without transition
                 * kind of hacky to have this in the first place
                 * @param {Function} fn
                 * @returns ret
                 * @private
                 */
                Isotope.prototype._noTransition = function(fn) {
                    // save transitionDuration before disabling
                    var transitionDuration = this.options.transitionDuration;
                    // disable transition
                    this.options.transitionDuration = 0;
                    // do it
                    var returnValue = fn.call(this);
                    // re-enable transition for reveal
                    this.options.transitionDuration = transitionDuration;
                    return returnValue;
                };

                // -----  ----- //

                return Isotope;
            }

// -------------------------- transport -------------------------- //

            if (typeof define === 'function' && define.amd) {
                // AMD
                define([
                    'outlayer/outlayer',
                    'get-size/get-size',
                    'matches-selector/matches-selector',
                    'isotope/js/item',
                    'isotope/js/layout-mode',
                    // include default layout modes
                    'isotope/js/layout-modes/masonry',
                    'isotope/js/layout-modes/fit-rows',
                    'isotope/js/layout-modes/vertical'
                ],
                        isotopeDefinition);
            } else {
                // browser global
                window.Isotope = isotopeDefinition(
                        window.Outlayer,
                        window.getSize,
                        window.matchesSelector,
                        window.Isotope.Item,
                        window.Isotope.LayoutMode
                        );
            }

        })(window);
/*!
    SlickNav Responsive Mobile Menu v1.0.1
    (c) 2014 Josh Cope
    licensed under MIT
*/

;(function ($, document, window) {
    var
    // default settings object.
        defaults = {
            label: 'MENU',
            duplicate: true,
            duration: 200,
            easingOpen: 'swing',
            easingClose: 'swing',
            closedSymbol: '&#9658;',
            openedSymbol: '&#9660;',
            prependTo: 'body',
            parentTag: 'a',
            closeOnClick: false,
            allowParentLinks: false,
            nestedParentLinks: true,
            showChildren: false,
            init: function () {},
            open: function () {},
            close: function () {}
        },
        mobileMenu = 'slicknav',
        prefix = 'slicknav';

    function Plugin(element, options) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = mobileMenu;

        this.init();
    }

    Plugin.prototype.init = function () {
        var $this = this,
            menu = $(this.element),
            settings = this.settings,
            iconClass,
            menuBar;

        // clone menu if needed
        if (settings.duplicate) {
            $this.mobileNav = menu.clone();
            //remove ids from clone to prevent css issues
            $this.mobileNav.removeAttr('id');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('id');
            });
        } else {
            $this.mobileNav = menu;
        }

        // styling class for the button
        iconClass = prefix + '_icon';

        if (settings.label === '') {
            iconClass += ' ' + prefix + '_no-text';
        }

        if (settings.parentTag == 'a') {
            settings.parentTag = 'a href="#"';
        }

        // create menu bar
        $this.mobileNav.attr('class', prefix + '_nav');
        menuBar = $('<div class="' + prefix + '_menu"></div>');
        $this.btn = $(
            ['<' + settings.parentTag + ' aria-haspopup="true" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed">',
                '<span class="' + prefix + '_menutxt">' + settings.label + '</span>',
                '<span class="' + iconClass + '">',
                    '<span class="' + prefix + '_icon-bar"></span>',
                    '<span class="' + prefix + '_icon-bar"></span>',
                    '<span class="' + prefix + '_icon-bar"></span>',
                '</span>',
            '</' + settings.parentTag + '>'
            ].join('')
        );
        $(menuBar).append($this.btn);
        $(settings.prependTo).prepend(menuBar);
        menuBar.append($this.mobileNav);

        // iterate over structure adding additional structure
        var items = $this.mobileNav.find('li');
        $(items).each(function () {
            var item = $(this),
                data = {};
            data.children = item.children('ul').attr('role', 'menu');
            item.data('menu', data);

            // if a list item has a nested menu
            if (data.children.length > 0) {

                // select all text before the child menu
                // check for anchors

                var a = item.contents(),
                    containsAnchor = false;
                    nodes = [];

                $(a).each(function () {
                    if (!$(this).is('ul')) {
                        nodes.push(this);
                    } else {
                        return false;
                    }

                    if($(this).is("a")) {
                        containsAnchor = true;
                    }
                });

                var wrapElement = $(
                    '<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>'
                );

                // wrap item text with tag and add classes unless we are separating parent links
                if ((!settings.allowParentLinks || settings.nestedParentLinks) || !containsAnchor) {
                    var $wrap = $(nodes).wrapAll(wrapElement).parent();
                    $wrap.addClass(prefix+'_row');
                } else
                    $(nodes).wrapAll('<span class="'+prefix+'_parent-link '+prefix+'_row"/>').parent();

                item.addClass(prefix+'_collapsed');
                item.addClass(prefix+'_parent');

                // create parent arrow. wrap with link if parent links and separating
                var arrowElement = $('<span class="'+prefix+'_arrow">'+settings.closedSymbol+'</span>');

                if (settings.allowParentLinks && !settings.nestedParentLinks && containsAnchor)
                    arrowElement = arrowElement.wrap(wrapElement).parent();

                //append arrow
                $(nodes).last().after(arrowElement);


            } else if ( item.children().length === 0) {
                 item.addClass(prefix+'_txtnode');
            }

            // accessibility for links
            item.children('a').attr('role', 'menuitem').click(function(event){
                //Ensure that it's not a parent
                if (settings.closeOnClick && !$(event.target).parent().closest('li').hasClass(prefix+'_parent')) {
                        //Emulate menu close if set
                        $($this.btn).click();
                    }
            });

            //also close on click if parent links are set
            if (settings.closeOnClick && settings.allowParentLinks) {
                item.children('a').children('a').click(function (event) {
                    //Emulate menu close
                    $($this.btn).click();
                });

                item.find('.'+prefix+'_parent-link a:not(.'+prefix+'_item)').click(function(event){
                    //Emulate menu close
                        $($this.btn).click();
                });
            }
        });

        // structure is in place, now hide appropriate items
        $(items).each(function () {
            var data = $(this).data('menu');
            if (!settings.showChildren){
                $this._visibilityToggle(data.children, null, false, null, true);
            }
        });

        // finally toggle entire menu
        $this._visibilityToggle($this.mobileNav, null, false, 'init', true);

        // accessibility for menu button
        $this.mobileNav.attr('role','menu');

        // outline prevention when using mouse
        $(document).mousedown(function(){
            $this._outlines(false);
        });

        $(document).keyup(function(){
            $this._outlines(true);
        });

        // menu button click
        $($this.btn).click(function (e) {
            e.preventDefault();
            $this._menuToggle();
        });

        // click on menu parent
        $this.mobileNav.on('click', '.' + prefix + '_item', function (e) {
            e.preventDefault();
            $this._itemClick($(this));
        });

        // check for enter key on menu button and menu parents
        $($this.btn).keydown(function (e) {
            var ev = e || event;
            if(ev.keyCode == 13) {
                e.preventDefault();
                $this._menuToggle();
            }
        });

        $this.mobileNav.on('keydown', '.'+prefix+'_item', function(e) {
            var ev = e || event;
            if(ev.keyCode == 13) {
                e.preventDefault();
                $this._itemClick($(e.target));
            }
        });

        // allow links clickable within parent tags if set
        if (settings.allowParentLinks && settings.nestedParentLinks) {
            $('.'+prefix+'_item a').click(function(e){
                    e.stopImmediatePropagation();
            });
        }
    };

    //toggle menu
    Plugin.prototype._menuToggle = function (el) {
        var $this = this;
        var btn = $this.btn;
        var mobileNav = $this.mobileNav;

        if (btn.hasClass(prefix+'_collapsed')) {
            btn.removeClass(prefix+'_collapsed');
            btn.addClass(prefix+'_open');
        } else {
            btn.removeClass(prefix+'_open');
            btn.addClass(prefix+'_collapsed');
        }
        btn.addClass(prefix+'_animating');
        $this._visibilityToggle(mobileNav, btn.parent(), true, btn);
    };

    // toggle clicked items
    Plugin.prototype._itemClick = function (el) {
        var $this = this;
        var settings = $this.settings;
        var data = el.data('menu');
        if (!data) {
            data = {};
            data.arrow = el.children('.'+prefix+'_arrow');
            data.ul = el.next('ul');
            data.parent = el.parent();
            //Separated parent link structure
            if (data.parent.hasClass(prefix+'_parent-link')) {
                data.parent = el.parent().parent();
                data.ul = el.parent().next('ul');
            }
            el.data('menu', data);
        }
        if (data.parent.hasClass(prefix+'_collapsed')) {
            data.arrow.html(settings.openedSymbol);
            data.parent.removeClass(prefix+'_collapsed');
            data.parent.addClass(prefix+'_open');
            data.parent.addClass(prefix+'_animating');
            $this._visibilityToggle(data.ul, data.parent, true, el);
        } else {
            data.arrow.html(settings.closedSymbol);
            data.parent.addClass(prefix+'_collapsed');
            data.parent.removeClass(prefix+'_open');
            data.parent.addClass(prefix+'_animating');
            $this._visibilityToggle(data.ul, data.parent, true, el);
        }
    };

    // toggle actual visibility and accessibility tags
    Plugin.prototype._visibilityToggle = function(el, parent, animate, trigger, init) {
        var $this = this;
        var settings = $this.settings;
        var items = $this._getActionItems(el);
        var duration = 0;
        if (animate) {
            duration = settings.duration;
        }

        if (el.hasClass(prefix+'_hidden')) {
            el.removeClass(prefix+'_hidden');
            el.slideDown(duration, settings.easingOpen, function(){

                $(trigger).removeClass(prefix+'_animating');
                $(parent).removeClass(prefix+'_animating');

                //Fire open callback
                if (!init) {
                    settings.open(trigger);
                }
            });
            el.attr('aria-hidden','false');
            items.attr('tabindex', '0');
            $this._setVisAttr(el, false);
        } else {
            el.addClass(prefix+'_hidden');
            el.slideUp(duration, this.settings.easingClose, function() {
                el.attr('aria-hidden','true');
                items.attr('tabindex', '-1');
                $this._setVisAttr(el, true);
                el.hide(); //jQuery 1.7 bug fix

                $(trigger).removeClass(prefix+'_animating');
                $(parent).removeClass(prefix+'_animating');

                //Fire init or close callback
                if (!init){
                    settings.close(trigger);
                }
                else if (trigger == 'init'){
                    settings.init();
                }
            });
        }
    };

    // set attributes of element and children based on visibility
    Plugin.prototype._setVisAttr = function(el, hidden) {
        var $this = this;

        // select all parents that aren't hidden
        var nonHidden = el.children('li').children('ul').not('.'+prefix+'_hidden');

        // iterate over all items setting appropriate tags
        if (!hidden) {
            nonHidden.each(function(){
                var ul = $(this);
                ul.attr('aria-hidden','false');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '0');
                $this._setVisAttr(ul, hidden);
            });
        } else {
            nonHidden.each(function(){
                var ul = $(this);
                ul.attr('aria-hidden','true');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '-1');
                $this._setVisAttr(ul, hidden);
            });
        }
    };

    // get all 1st level items that are clickable
    Plugin.prototype._getActionItems = function(el) {
        var data = el.data("menu");
        if (!data) {
            data = {};
            var items = el.children('li');
            var anchors = items.find('a');
            data.links = anchors.add(items.find('.'+prefix+'_item'));
            el.data('menu', data);
        }
        return data.links;
    };

    Plugin.prototype._outlines = function(state) {
        if (!state) {
            $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','none');
        } else {
            $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','');
        }
    };

    Plugin.prototype.toggle = function(){
        var $this = this;
        $this._menuToggle();
    };

    Plugin.prototype.open = function(){
        var $this = this;
        if ($this.btn.hasClass(prefix+'_collapsed')) {
            $this._menuToggle();
        }
    };

    Plugin.prototype.close = function(){
        var $this = this;
        if ($this.btn.hasClass(prefix+'_open')) {
            $this._menuToggle();
        }
    };

    $.fn[mobileMenu] = function ( options ) {
        var args = arguments;

        // Is the first parameter an object (options), or was omitted, instantiate a new instance
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {

                // Only allow the plugin to be instantiated once due to methods
                if (!$.data(this, 'plugin_' + mobileMenu)) {

                    // if it has no instance, create a new one, pass options to our plugin constructor,
                    // and store the plugin instance in the elements jQuery data object.
                    $.data(this, 'plugin_' + mobileMenu, new Plugin( this, options ));
                }
            });

        // If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

            // Cache the method call to make it possible to return a value
            var returns;

            this.each(function () {
                var instance = $.data(this, 'plugin_' + mobileMenu);

                // Tests that there's already a plugin-instance and checks that the requested public method exists
                if (instance instanceof Plugin && typeof instance[options] === 'function') {

                    // Call the method of our plugin instance, and pass it the supplied arguments.
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
            });

            // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };
}(jQuery, document, window));
// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: ' sticky-wrapper',
      center: false,
      getWidthFrom: ''
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('position', '')
              .css('top', '');
            s.stickyElement.parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();
    },
    methods = {
      init: function(options) {
        var o = $.extend(defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom
          });
        });
      },
      update: scroller
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);
(function($){

    /**
* Copyright 2012, Digital Fusion
* Licensed under the MIT license.
* http://teamdf.com/jquery-plugins/license/
*
* @author Sam Sehnert
* @desc A small plugin that checks whether elements are within
* the user visible viewport of a web browser.
* only accounts for vertical position, not horizontal.
*/
    var $w = $(window);
    $.fn.visible = function(partial,hidden,direction){

        if (this.length < 1)
            return;

        var $t = this.length > 1 ? this.eq(0) : this,
            t = $t.get(0),
            vpWidth = $w.width(),
            vpHeight = $w.height(),
            direction = (direction) ? direction : 'both',
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = rec.top >= 0 && rec.top < vpHeight,
                bViz = rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = rec.left >= 0 && rec.left < vpWidth,
                rViz = rec.right > 0 && rec.right <= vpWidth,
                vVisible = partial ? tViz || bViz : tViz && bViz,
                hVisible = partial ? lViz || lViz : lViz && rViz;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop = $w.scrollTop(),
                viewBottom = viewTop + vpHeight,
                viewLeft = $w.scrollLeft(),
                viewRight = viewLeft + vpWidth,
                offset = $t.offset(),
                _top = offset.top,
                _bottom = _top + $t.height(),
                _left = offset.left,
                _right = _left + $t.width(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom,
                compareLeft = partial === true ? _right : _left,
                compareRight = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

   var addAnimation = function(element){
    $(element).each(function(i, el){
      var el = $(el);
      if (el.visible(true)) {
        el.removeClass('visible').addClass('animated'); 
      } 
    });
   }

   var checkVisible = function(element){
    $(element).each(function(i, el) {
      var el = $(el);
         if (el.visible(false)) {
        el.addClass("visible"); 
      } 
    });     
   }

   $(window).load(function(){
    checkVisible('.animate');
   });

   $(window).load(function(){
    addAnimation('.animate');
   });

   $(window).scroll(function(event) {
      addAnimation('.animate');
   });

})(jQuery);
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */

;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.cssanimations=function(){return F("animationName")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* Portfolio */

$(window).load(function() {
    var $cont = $('.portfolio-group');
    
    $cont.isotope({
        itemSelector: '.portfolio-group .portfolio-item',
        masonry: {columnWidth: $('.isotope-item:first').width(), gutterWidth: -20, isFitWidth: true},
        filter: '*',
    });

    $('.portfolio-filter-container a').click(function() {
        $cont.isotope({
            filter: this.getAttribute('data-filter')
        });

        return false;
    });

    var lastClickFilter = null;
    $('.portfolio-filter a').click(function() {

        //first clicked we don't know which element is selected last time
        if (lastClickFilter === null) {
            $('.portfolio-filter a').removeClass('portfolio-selected');
        }
        else {
            $(lastClickFilter).removeClass('portfolio-selected');
        }

        lastClickFilter = this;
        $(this).addClass('portfolio-selected');
    });

});

/* Image Hover  - Add hover class on hover */
$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".image-hover figure").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".image-hover figure").hasClass("hover")) {
                $(this).closest(".image-hover figure").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".image-hover figure").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

// thumbs animations
$(function () {
    
    $(".thumbs-gallery i").animate({
             opacity: 0
    
          }, {
             duration: 300,
             queue: false
          });

   $(".thumbs-gallery").parent().hover(
       function () {},
       function () {
          $(".thumbs-gallery i").animate({
             opacity: 0
          }, {
             duration: 300,
             queue: false
          });
   });
 
   $(".thumbs-gallery i").hover(
      function () {
          $(this).animate({
             opacity: 0
    
          }, {
             duration: 300,
             queue: false
          });

          $(".thumbs-gallery i").not( $(this) ).animate({
             opacity: 0.4         }, {
             duration: 300,
             queue: false
          });
      }, function () {
      }
   );

});

// Mobile Menu
    $(function(){
        $('#hornavmenu').slicknav();
        $( "div.slicknav_menu" ).addClass( "hidden-lg" );
    });

// Sticky Div
  $(window).load(function(){
    $("#hornav").sticky({ topSpacing: 0 });
  });
/*!
	Slimbox v2.05 - The ultimate lightweight Lightbox clone for jQuery
	(c) 2007-2013 Christophe Beyls <http://www.digitalia.be>
	MIT-style license.
*/

(function(w){var E=w(window),u,f,F=-1,n,x,D,v,y,L,r,m=!window.XMLHttpRequest,s=[],l=document.documentElement,k={},t=new Image(),J=new Image(),H,a,g,p,I,d,G,c,A,K;w(function(){w("body").append(w([H=w('<div id="lbOverlay" />').click(C)[0],a=w('<div id="lbCenter" />')[0],G=w('<div id="lbBottomContainer" />')[0]]).css("display","none"));g=w('<div id="lbImage" />').appendTo(a).append(p=w('<div style="position: relative;" />').append([I=w('<a id="lbPrevLink" href="#" />').click(B)[0],d=w('<a id="lbNextLink" href="#" />').click(e)[0]])[0])[0];c=w('<div id="lbBottom" />').appendTo(G).append([w('<a id="lbCloseLink" href="#" />').click(C)[0],A=w('<div id="lbCaption" />')[0],K=w('<div id="lbNumber" />')[0],w('<div style="clear: both;" />')[0]])[0]});w.slimbox=function(O,N,M){u=w.extend({loop:false,overlayOpacity:0.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image {x} of {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},M);if(typeof O=="string"){O=[[O,N]];N=0}y=E.scrollTop()+(E.height()/2);L=u.initialWidth;r=u.initialHeight;w(a).css({top:Math.max(0,y-(r/2)),width:L,height:r,marginLeft:-L/2}).show();v=m||(H.currentStyle&&(H.currentStyle.position!="fixed"));if(v){H.style.position="absolute"}w(H).css("opacity",u.overlayOpacity).fadeIn(u.overlayFadeDuration);z();j(1);f=O;u.loop=u.loop&&(f.length>1);return b(N)};w.fn.slimbox=function(M,P,O){P=P||function(Q){return[Q.href,Q.title]};O=O||function(){return true};var N=this;return N.unbind("click").click(function(){var S=this,U=0,T,Q=0,R;T=w.grep(N,function(W,V){return O.call(S,W,V)});for(R=T.length;Q<R;++Q){if(T[Q]==S){U=Q}T[Q]=P(T[Q],Q)}return w.slimbox(T,U,M)})};function z(){var N=E.scrollLeft(),M=E.width();w([a,G]).css("left",N+(M/2));if(v){w(H).css({left:N,top:E.scrollTop(),width:M,height:E.height()})}}function j(M){if(M){w("object").add(m?"select":"embed").each(function(O,P){s[O]=[P,P.style.visibility];P.style.visibility="hidden"})}else{w.each(s,function(O,P){P[0].style.visibility=P[1]});s=[]}var N=M?"bind":"unbind";E[N]("scroll resize",z);w(document)[N]("keydown",o)}function o(O){var N=O.which,M=w.inArray;return(M(N,u.closeKeys)>=0)?C():(M(N,u.nextKeys)>=0)?e():(M(N,u.previousKeys)>=0)?B():null}function B(){return b(x)}function e(){return b(D)}function b(M){if(M>=0){F=M;n=f[F][0];x=(F||(u.loop?f.length:0))-1;D=((F+1)%f.length)||(u.loop?0:-1);q();a.className="lbLoading";k=new Image();k.onload=i;k.src=n}return false}function i(){a.className="";w(g).css({backgroundImage:"url("+n+")",visibility:"hidden",display:""});w(p).width(k.width);w([p,I,d]).height(k.height);w(A).html(f[F][1]||"");w(K).html((((f.length>1)&&u.counterText)||"").replace(/{x}/,F+1).replace(/{y}/,f.length));if(x>=0){t.src=f[x][0]}if(D>=0){J.src=f[D][0]}L=g.offsetWidth;r=g.offsetHeight;var M=Math.max(0,y-(r/2));if(a.offsetHeight!=r){w(a).animate({height:r,top:M},u.resizeDuration,u.resizeEasing)}if(a.offsetWidth!=L){w(a).animate({width:L,marginLeft:-L/2},u.resizeDuration,u.resizeEasing)}w(a).queue(function(){w(G).css({width:L,top:M+r,marginLeft:-L/2,visibility:"hidden",display:""});w(g).css({display:"none",visibility:"",opacity:""}).fadeIn(u.imageFadeDuration,h)})}function h(){if(x>=0){w(I).show()}if(D>=0){w(d).show()}w(c).css("marginTop",-c.offsetHeight).animate({marginTop:0},u.captionAnimationDuration);G.style.visibility=""}function q(){k.onload=null;k.src=t.src=J.src=n;w([a,g,c]).stop(true);w([I,d,g,G]).hide()}function C(){if(F>=0){q();F=x=D=-1;w(a).hide();w(H).stop().fadeOut(u.overlayFadeDuration,j)}return false}})(jQuery);

// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
	jQuery(function($) {
		$("a[rel^='lightbox']").slimbox({/* Put custom options here */}, null, function(el) {
			return (this == el) || ((this.rel.length > 8) && (this.rel == el.rel));
		});
	});
}
;









