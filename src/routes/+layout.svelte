<script lang="ts">
	import Modal from 'svelte-simple-modal';
	// We import Modal here at root layout, so we can use it everywhere in the app
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About me</a>
	<a href="/skills">Skills</a>
	<a href="/projects">Projects</a>
</nav>

<Modal
	styleWindow={{
		boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.15)',
		background: '#3D3A50'
	}}
	styleCloseButton={{
		background: '#f008',
		cursor: 'pointer'
	}}><slot /></Modal
>

<style>
	:global(body) {
		margin: 0;
	}
	:global(p) {
		color: #fff;
		font-family: 'Roboto', sans-serif;
		font-size: large;
		word-spacing: 0.1rem;
		line-height: 1.5rem;
	}
	:global(h1, h2, h3) {
		color: #fff;
		font-family: 'Roboto', sans-serif;
	}
	nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 5vh;
		background: #0ea2f6;
	}
	nav a {
		color: #000;
		font-size: larger;
		margin-right: 2rem;
		text-decoration: none;
	}
	nav a:hover {
		color: #f00;
		box-shadow: inset 0 -2px 0 0 #f00;
	}
</style>
