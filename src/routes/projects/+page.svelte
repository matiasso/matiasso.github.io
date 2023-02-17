<script lang="ts">
	import { projects } from './projects_list';
</script>

<!-- This is designed in a way that new elements get automatically added as they are added to projects_list.ts -->
<!-- TODO: Here it could be cool to have a different layout for mobile and desktop? For mobile this is fine
But for desktops it could be better to show the projects in a horizontal wrapping flex box -->
<div class="flex flex-col items-center w-full justify-center p-6">
	{#each projects as { title, date, href, description, src, alt }}
		<div
			class="containerGrid p-6 mb-6 bg-gray-50 w-[90vw] rounded-lg border border-gray-100 dark:bg-slate-900 dark:border-gray-700"
		>
			<a {href}><img class="techImage" {src} {alt} /></a>
			<a {href} class="w-fit">
				<div class="informationContainer flex flex-col items-start justify-start">
					<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
						{title}
					</h3>
					<time
						class="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500"
					>
						{date}
					</time>
				</div>
			</a>

			<p class="descriptionText text-gray-900 dark:text-white">{description}</p>
		</div>
	{/each}
</div>

<style>
	.containerGrid {
		display: grid;
		grid-template-columns: 4vw auto; /* two columns, first with 75% width and second with 25% width (for profile picture and socials)*/
		grid-template-rows: 6rem auto;
		grid-template-areas:
			'picture info'
			'content content';
	}
	.techImage {
		grid-area: picture;
		min-width: 40px;
		object-fit: contain;
		aspect-ratio: 1/1;
	}
	.informationContainer {
		margin-left: 2rem;
		grid-area: info;
	}
	.descriptionText {
		grid-area: content;
	}
</style>
