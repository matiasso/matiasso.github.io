<script lang="ts">
	import { page } from '$app/stores';
	import { Alert } from 'flowbite-svelte';
	import type { ComponentType } from 'svelte';
	import Beamex from '../beamex.svelte';

	const projectComponents: { [key: string]: ComponentType } = {
		beamex: Beamex
	};
</script>

{#if $page.params.project in projectComponents}
	<svelte:component this={projectComponents[$page.params.project]} />
{:else}
	<div class="m-5">
		<Alert class="max-w-[80%] p-6 mx-auto" color="red">
			<span class="font-medium">Error:</span> project "{$page.params.project}" not found!
		</Alert>
	</div>
{/if}
