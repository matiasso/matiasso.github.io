<script lang="ts">
	import Modal from 'svelte-simple-modal';
	import '@fontsource/inter';
	import '@fontsource/abril-fatface';
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
		background: '#f00D',
		cursor: 'pointer'
	}}><slot /></Modal
>

<style>
	:global(body) {
		margin: 0;
		background-color: #303041;
	}
	:global(p) {
		color: #fff;
		font-family: 'Inter', sans-serif;
		font-size: large;
		word-spacing: 0.1rem;
		line-height: 1.5rem;
	}
	:global(h1, h2, h3) {
		color: #fff;
		font-family: 'Abril Fatface', sans-serif;
		font-weight: normal;
		letter-spacing: 0.1rem;
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
		font-family: 'Inter', sans-serif;
		margin-right: 1.5rem;
		text-decoration: none;
	}
	nav a:hover {
		color: #f00;
		box-shadow: inset 0 -2px 0 0 #f00;
	}
</style>
