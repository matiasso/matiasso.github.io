<script lang="ts">
	import { projects } from './projects_list';
</script>

<!-- This is designed in a way that new elements get automatically added as they are added to projects_list.ts -->
<!-- TODO: Here it could be cool to have a different layout for mobile and desktop? For mobile this is fine
But for desktops it could be better to show the projects in a horizontal wrapping flex box -->
<div class="flex flex-col items-center w-full justify-center p-6 gap-6">
	{#each projects as { title, date, href, description, src, alt, isPrivate }}
		<a {href}
			><div
				class="containerGrid p-6 w-[90vw] rounded-lg border bg-white border-gray-200 hover:bg-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-slate-700"
			>
				<img class="techImage" {src} {alt} height="512" width="512" />
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

				<p class="descriptionText text-gray-900 dark:text-white">{description}</p>
				<p
					class="footerText flex flex-row items-center text-md font-normal leading-none text-gray-400 dark:text-gray-500"
				>
					{#if isPrivate}
						<svg
							class="h-5 aspect-square object-contain stroke-black dark:stroke-white"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20 14.8335C21.3082 13.3317 22 12 22 12C22 12 18.3636 5 12 5C11.6588 5 11.3254 5.02013 11 5.05822C10.6578 5.09828 10.3244 5.15822 10 5.23552M12 9C12.3506 9 12.6872 9.06015 13 9.17071C13.8524 9.47199 14.528 10.1476 14.8293 11C14.9398 11.3128 15 11.6494 15 12M3 3L21 21M12 15C11.6494 15 11.3128 14.9398 11 14.8293C10.1476 14.528 9.47198 13.8524 9.1707 13C9.11386 12.8392 9.07034 12.6721 9.04147 12.5M4.14701 9C3.83877 9.34451 3.56234 9.68241 3.31864 10C2.45286 11.1282 2 12 2 12C2 12 5.63636 19 12 19C12.3412 19 12.6746 18.9799 13 18.9418"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Show more
					{:else}
						<svg
							class="h-5 aspect-square object-contain stroke-black dark:stroke-white"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						View on GitHub
					{/if}
				</p>
			</div>
		</a>
	{/each}
</div>

<style>
	.containerGrid {
		display: grid;
		grid-template-columns: 3vw auto; /* two columns, first with 75% width and second with 25% width (for profile picture and socials)*/
		grid-template-rows: auto auto auto;
		grid-template-areas:
			'picture info'
			'content content'
			'footer footer';
		grid-row-gap: 0.5rem;
	}
	.techImage {
		grid-area: picture;
		align-self: center;
		min-width: 40px;
		width: 100%;
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
	.footerText {
		grid-area: footer;
	}
</style>
