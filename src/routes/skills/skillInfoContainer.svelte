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

<div class="skillContainer">
	<button
		class="skillImgHolder"
		on:click={() =>
			openModal({
				title: `About ${skill.name}`,
				description: `${skill.description}`
			})}
	>
		<img class="skillImgIcon" src={skill.img} alt={skill.alt} />
	</button>

	<p>{skill.name}</p>
</div>

<style>
	.skillContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}
	.skillImgHolder {
		background: none;
		max-height: 15vh;
		max-width: 30vw;
		padding: 15%;
		aspect-ratio: 1/1;
		cursor: pointer;
		border: 2px solid #fff;
		border-radius: 50%;
		object-fit: contain;
	}
	.skillImgHolder:hover {
		border: 2px solid rgb(173, 255, 126);
		animation: wiggle 0.35s 1;
	}
	.skillImgIcon {
		max-height: 100%;
		max-width: 100%;
		aspect-ratio: 1/1;
		object-fit: contain;
	}
	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(5deg);
			scale: calc(1.2);
		}
		50% {
			transform: rotate(0deg);
			scale: calc(1);
		}
		75% {
			transform: rotate(-5deg);
			scale: calc(1.2);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
