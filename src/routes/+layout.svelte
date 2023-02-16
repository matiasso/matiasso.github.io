<script lang="ts">
	import '@fontsource/inter';
	import '@fontsource/abril-fatface';
	import '../app.css';
	import Modal from 'svelte-simple-modal';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<Navbar
	let:hidden
	let:toggle
	navClass="bg-[#1E1E2F] dark:bg-primary"
	navDivClass="mx-auto flex flex-wrap justify-between items-center"
>
	<NavBrand href="/">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			class="w-7 h-7 stroke-white dark:stroke-black"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M5.77778 10.2222V18C5.77778 19.1046 6.67321 20 7.77778 20H12M5.77778 10.2222L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L17.5 9.5M5.77778 10.2222L4 12M18.2222 10.2222V18C18.2222 19.1046 17.3268 20 16.2222 20H12M18.2222 10.2222L20 12M18.2222 10.2222L17.5 9.5M17.5 9.5V6M12 20V15"
			/>
		</svg>
	</NavBrand>
	<DarkMode class="text-lg hover:bg-transparent dark:hover:bg-transparent">
		<svelte:fragment slot="lightIcon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.5em"
				height="1.5em"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 32 32"
				><path
					fill="black"
					d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
				/></svg
			>
		</svelte:fragment>
		<svelte:fragment slot="darkIcon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.5em"
				height="1.5em"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 32 32"
				class="hover:fill-none"
				><path
					fill="white"
					d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
				/></svg
			>
		</svelte:fragment>
	</DarkMode>
	<NavHamburger on:click={toggle} class="text-white dark:text-gray-900" />
	<NavUl {hidden} class="bg-[#1E1E2F] dark:bg-primary border-0">
		<NavLi class="text-white dark:text-gray-900 text-lg" href="/about">About</NavLi>
		<NavLi class="text-white dark:text-gray-900 text-lg" href="/skills">Skills</NavLi>
		<NavLi class="text-white dark:text-gray-900 text-lg" href="/projects">Projects</NavLi>
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
	}}
>
	<slot />
</Modal>

<style>
	:global(p) {
		font-family: 'Inter', sans-serif;
		font-size: large;
		line-height: 1.5rem;
	}
	:global(h1, h2, h3) {
		font-family: 'Abril Fatface', sans-serif;
		font-weight: normal;
		letter-spacing: 0.1rem;
	}
</style>
