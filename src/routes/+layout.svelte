<script lang="ts">
	import '@fontsource/inter';
	import '@fontsource/abril-fatface';
	import '../app.css';
	import Modal from 'svelte-simple-modal';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="/home.svg" class="mr-3 h-6 sm:h-9" alt="Home icon" />
	</NavBrand>
	<DarkMode />
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/about" active={true}>About</NavLi>
		<NavLi href="/skills">Skills</NavLi>
		<NavLi href="/projects">Projects</NavLi>
	</NavUl>
</Navbar>

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
</style>
