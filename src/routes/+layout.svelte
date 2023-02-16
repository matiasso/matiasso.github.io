<script lang="ts">
	import '@fontsource/inter';
	import '@fontsource/abril-fatface';
	import '../app.css';
	import Modal from 'svelte-simple-modal';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Button } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<Navbar
	let:hidden
	let:toggle
	navClass="bg-primary px-2 sm:px-3 py-1 w-full"
	navDivClass="mx-auto flex flex-wrap justify-between"
>
	<NavBrand href="/">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-7 h-7"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M5.77778 10.2222V18C5.77778 19.1046 6.67321 20 7.77778 20H12M5.77778 10.2222L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L17.5 9.5M5.77778 10.2222L4 12M18.2222 10.2222V18C18.2222 19.1046 17.3268 20 16.2222 20H12M18.2222 10.2222L20 12M18.2222 10.2222L17.5 9.5M17.5 9.5V6M12 20V15"
			/>
		</svg>
	</NavBrand>
	<DarkMode class="" />
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
