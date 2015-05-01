/* global Reveal */
Reveal.initialize({
	controls: false,
	progress: false,
	transition: 'slide',
	dependencies: [
		{ src: 'reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'reveal.js/plugin/notes/notes.js', async: true },
		{ src: 'reveal.js/plugin/wave/webcam-swiper-0.1.js'}, { src: 'plugin/wave/client.js'}
	]
});
