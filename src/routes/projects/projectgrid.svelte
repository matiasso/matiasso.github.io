<script lang="ts">
	export let title: string;
	export let date: string;
	export let logo: string;
	export let alt: string;
</script>

<div class="gridContainer">
	<div class="titleContent">
		<h1 class="text-gray-700 dark:text-gray-200 text-4xl ">{title}</h1>
		<h2 class="text-gray-600 dark:text-gray-300 text-2xl">Date: {date}</h2>
	</div>
	<img class="imgContent" src={logo} {alt} width="400" height="400" />

	<div class="content">
		<slot />
	</div>
</div>

<style>
	h1,
	h2 {
		margin-bottom: 1rem;
		margin-right: 1rem;
	}
	.gridContainer {
		display: grid;
		grid-template-columns: auto 20%;
		grid-template-rows: auto auto;
		grid-template-areas:
			'title logo'
			'content content';
	}
	.titleContent {
		grid-area: title;
	}
	.content {
		grid-area: content;
	}
	.imgContent {
		grid-area: logo;
		max-width: 100%;
		max-height: 2rem;
		min-height: 50px;
		min-width: 50px;
		object-fit: contain;
		object-position: right;
	}
</style>
