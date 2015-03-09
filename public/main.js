Reveal.initialize({
	controls: false,
	progress: false,
	transition: 'slide',
	dependencies: [
		{ src: '/dist/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: '/dist/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: '/dist/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: '/dist/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: '/dist/reveal.js/plugin/zoom-js/zoom.js', async: true },
		{ src: '/dist/reveal.js/plugin/notes/notes.js', async: true }
	]
});
