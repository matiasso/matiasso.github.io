<script lang="ts">
	import { projects } from './projects_list';
</script>

<!-- This is designed in a way that new elements get automatically added as they are added to projects_list.ts -->
<!-- TODO: Here it could be cool to have a different layout for mobile and desktop? For mobile this is fine
But for desktops it could be better to show the projects in a horizontal wrapping flex box -->
<div class="flex flex-col items-center w-full justify-center p-6">
	{#each projects as { title, date, href, description }}
		<div
			class="p-6 mb-4 bg-gray-50 w-[90vw] rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
		>
			<a {href}>
				<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
					{title}
				</h3>
				<time class="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
					{date}
				</time>
				<p class="text-gray-900 dark:text-white">{description}</p>
			</a>
		</div>
	{/each}
</div>
