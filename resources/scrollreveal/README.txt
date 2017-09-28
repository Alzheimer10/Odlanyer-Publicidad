https://scrollrevealjs.org/
https://github.com/jlmakes/scrollreveal

1.2. The Basics

<!-- HTML -->
	<div class="foo"> Foo </div>
	<div class="bar"> Bar </div>

// JavaScript
	window.sr = ScrollReveal();
	sr.reveal('.foo');
	sr.reveal('.bar');
	2. Configuration


2.1. Practical Example

	// Changing the defaults
	window.sr = ScrollReveal({ reset: true });

	// Customizing a reveal set
	sr.reveal('.foo', { duration: 200 });

	