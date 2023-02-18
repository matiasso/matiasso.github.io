<script lang="ts">
	import Dialog from '../../../components/dialog.svelte';
	import ProjectGrid from '../projectgrid.svelte';

	const projectProps = {
		title: 'Tower Defense game written in C++',
		date: '2021 September - 2021 December',
		logo: '/skills/cpp_logo.png',
		alt: 'A picture of C++ logo'
	};
	const imgCount = [1, 2];
</script>

<!-- Return a floating dialog with information about the project -->

<Dialog>
	<ProjectGrid {...projectProps}>
		<p class="text-black dark:text-white leading-relaxed">
			Ut sunt consequat do qui ipsum aliquip ipsum nostrud in nostrud do id. Ipsum tempor ullamco
			veniam occaecat esse esse culpa aliqua mollit eu. Magna minim ad aliqua ullamco occaecat.
			<br /><br />
			Consequat anim consectetur nisi do minim est eu. Nulla nisi anim consequat in eu cillum mollit
			occaecat aliqua amet ea. Lorem sit quis tempor Lorem ut esse id pariatur veniam. Quis dolore voluptate
			ea occaecat esse. Ipsum consequat commodo veniam aute.
			<br /><br />
			Here are some screenshots of the game:
		</p>
		<div class="flex flex-row flex-wrap justify-center">
			{#each imgCount as imgIndex}
				<img
					src="/projects/tower-defense/tower_defense_ss{imgIndex}.png"
					alt="A screenshot of the tower defense game"
					class="w-3/4 my-4 object-contain rounded-lg "
					width="500"
					height="500"
				/>
			{/each}
		</div>
	</ProjectGrid>
</Dialog>
