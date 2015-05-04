var dependencies = [
	{ src: 'reveal.js/plugin/highlight/highlight.js', async: true, condition: function () { return !!document.querySelector('pre code'); }, callback: function () { hljs.initHighlightingOnLoad(); } },
	{ src: 'reveal.js/plugin/notes/notes.js', async: true }
];

if(window.location.search === '?wave') {
	dependencies.push({ src: 'reveal.js/plugin/wave/webcam-swiper-0.1.js' });
	dependencies.push({ src: 'reveal.js/plugin/wave/client.js' });
}

/* global Reveal */
Reveal.initialize({
	controls: false,
	progress: false,
	transition: 'slide',
	dependencies: dependencies
});
