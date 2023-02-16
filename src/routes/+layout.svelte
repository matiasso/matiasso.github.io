<script lang="ts">
	import '@fontsource/inter';
	import '@fontsource/abril-fatface';
	import Modal from 'svelte-simple-modal';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="relative px-8">
	<Navbar
		navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
		let:hidden
		let:toggle
	>
		<NavBrand href="/">
			<img src="/home.svg" class="mr-3 h-6 sm:h-9" alt="Home icon" />
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi href="/about" active={true}>About me</NavLi>
			<NavLi href="/skills">Skills</NavLi>
			<NavLi href="/projects">Projects</NavLi>
		</NavUl>
	</Navbar>
</div>

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
