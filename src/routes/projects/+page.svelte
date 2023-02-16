<script lang="ts">
	import { projects } from './projects_list';
</script>

<div class="flex flex-col align-center justify-center p-10">
	{#each projects as { title, date, href, description }}
		<div
			class="p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
		>
			<a {href}>
				<h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
					{title}
				</h3>
				<time class="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
					{date}
				</time>
				<p>{description}</p>
			</a>
		</div>
	{/each}
</div>
