<script lang="ts">
	import { getContext } from 'svelte';
	import type Modal from 'svelte-simple-modal';
	import SkillPopup from './skillPopup.svelte';

	const { open }: Modal = getContext('simple-modal');
	type popup_content = {
		title: string;
		description: string;
	};
	const openModal = (props: popup_content) => {
		open(SkillPopup, props);
	};

	// These dummy values will be replaced by the +page.svelte file which imports this component
	export let skill = {
		name: 'Skill name',
		img: '/skills/skill_logo.png',
		alt: 'Skill logo',
		description: 'Skill description'
	};
</script>

<div class="flex flex-col items-center justify-center p-2">
	<button
		class="max-h-[15vh] max-w-[30vw] min-w-[40px] min-h-[40px] p-[15%] aspect-square cursor-pointer border-2 border-gray-800 dark:border-white rounded-full object-contain hover:border-green-400 hover:animate-wiggle"
		on:click={() =>
			openModal({
				title: `About ${skill.name}`,
				description: `${skill.description}`
			})}
	>
		<img
			class="max-h-[100%] max-w-[100%] aspect-square object-contain"
			src={skill.img}
			alt={skill.alt}
		/>
	</button>

	<p class="text-black dark:text-white p-3">{skill.name}</p>
</div>
