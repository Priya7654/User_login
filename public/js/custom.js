<div>
  &lt;&gt;(function (i, s, o, g, r, a, m) {'{'} i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {'{'} (i[r].q = i[r].q || []).push(arguments) {'}'}, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) {'}'})(window, document, 'script', '../../../../www.google-analytics.com/analytics.js', 'ga'); ga('create', 'UA-120909275-1', 'auto'); ga('send', 'pageview'); $("body").on("contextmenu", function (e) {'{'} return false; {'}'}); $(document).keydown(function (e) {'{'}
  if (e.ctrlKey &amp;&amp; (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {'{'} return false; {'}'}
  if (e.which === 123) {'{'} return false; {'}'}
  if (e.metaKey) {'{'} return false; {'}'}
  if (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; e.keyCode == 73) {'{'} return false; {'}'}
  if (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; e.keyCode == 74) {'{'} return false; {'}'}
  if (e.keyCode == 83 &amp;&amp; (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {'{'} return false; {'}'}
  if (e.keyCode == 224 &amp;&amp; (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {'{'} return false; {'}'}
  if (e.ctrlKey &amp;&amp; e.keyCode == 85) {'{'} return false; {'}'}
  if (event.keyCode == 123) {'{'} return false; {'}'}
  {'}'}); (function ($) {'{'}
  "use strict"; $(document).on('click', '#sidebarToggle', function (e) {'{'} e.preventDefault(); $("body").toggleClass("sidebar-toggled"); $(".sidebar").toggleClass("toggled"); {'}'}); $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {'{'} if ($window.width() &gt; 768) {'{'} var e0 = e.originalEvent, delta = e0.wheelDelta || -e0.detail; this.scrollTop += (delta &lt; 0 ? 1 : -1) * 30; e.preventDefault(); {'}'} {'}'}); const objowlcarousel = $('.owl-carousel-category'); if (objowlcarousel.length &gt; 0) {'{'} objowlcarousel.owlCarousel({'{'} responsive: {'{'} 0: {'{'} items: 1, {'}'}, 600: {'{'} items: 3, nav: false {'}'}, 1000: {'{'} items: 4, {'}'}, 1200: {'{'} items: 8, {'}'}, {'}'}, loop: true, lazyLoad: true, autoplay: true, autoplaySpeed: 1000, autoplayTimeout: 2000, autoplayHoverPause: true, nav: true, navText: ["<i className="fa fa-chevron-left" />", "<i className="fa fa-chevron-right" />"], {'}'}); {'}'}
  const mainslider = $('.owl-carousel-login'); if (mainslider.length &gt; 0) {'{'} mainslider.owlCarousel({'{'} items: 1, lazyLoad: true, loop: true, autoplay: true, autoplaySpeed: 1000, autoplayTimeout: 2000, autoplayHoverPause: true, {'}'}); {'}'}
  $('[data-toggle="tooltip"]').tooltip()
  $(document).on('scroll', function () {'{'} var scrollDistance = $(this).scrollTop(); if (scrollDistance &gt; 100) {'{'} $('.scroll-to-top').fadeIn(); {'}'} else {'{'} $('.scroll-to-top').fadeOut(); {'}'} {'}'}); $(document).on('click', 'a.scroll-to-top', function (event) {'{'} var $anchor = $(this); $('html, body').stop().animate({'{'} scrollTop: ($($anchor.attr('href')).offset().top) {'}'}, 1000, 'easeInOutExpo'); event.preventDefault(); {'}'});
  {'}'})(jQuery);
</div>
