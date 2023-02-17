<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte';
	let defaultModal = false;

	// These empty strings will be replaced by the +page.svelte file which imports and uses this component
	export let skill = {
		name: '',
		img: '',
		alt: '',
		description: ''
	};
</script>

<div class="flex flex-col items-center justify-center p-2">
	<button
		class="max-h-[15vh] max-w-[30vw] min-w-[40px] min-h-[40px] p-[15%] aspect-square cursor-pointer border-2 border-gray-800 dark:border-white rounded-full object-contain hover:border-green-600 dark:hover:border-green-400 hover:animate-wiggle bg-white/70 dark:bg-secondary/10"
		on:click={() => {
			defaultModal = true;
		}}
	>
		<img
			class="max-h-[100%] max-w-[100%] aspect-square object-contain drop-shadow-lg"
			draggable="false"
			src={skill.img}
			alt={skill.alt}
		/>
	</button>

	<p class="text-black dark:text-white p-3">{skill.name}</p>
</div>

<!-- Show this fullscreen Modal with information about the current skill, if the image is clicked -->
<Modal title={`About ${skill.name}`} bind:open={defaultModal} autoclose>
	<p class="text-base text-lg leading-relaxed text-gray-500 dark:text-gray-400">
		{skill.description}
	</p>
	<svelte:fragment slot="footer">
		<Button class="mx-auto" gradient color="cyanToBlue">Close</Button>
	</svelte:fragment>
</Modal>
