Reveal.initialize({
	controls: false,
	progress: false,
	transition: 'slide',
	dependencies: [
		{ src: 'reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'reveal.js/plugin/notes/notes.js', async: true }
	]
});
