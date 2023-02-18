<script lang="ts">
	import Dialog from '../../../components/dialog.svelte';
	import ProjectGrid from '../projectgrid.svelte';

	const projectProps = {
		title: 'Image resizer for Windows',
		date: '2017',
		logo: '/skills/csharp_logo.svg  ',
		alt: 'C sharp logo'
	};
</script>

<!-- Return a floating dialog with information about the project -->

<Dialog>
	<ProjectGrid {...projectProps}>
		<p class="text-black dark:text-white leading-relaxed">
			After getting interested in photography, I needed a quick way to resize my images to specific
			size so that I could upload smaller images to cloud storage and share them with friends. I
			decided to write a small program to do this for me. I used C# and Visual Studio IDE to create
			a Windows Forms application.
			<br /><br />
			The program allows the user to select multiple images at once, and then choose a desired resolution
			in pixels or percentages. The user can also select whether to overwrite the existing images, or
			to save them in a different folder. After clicking on "start", the program will start a background
			worker, which makes sure the UI is responsive. The program will then resize all images and show
			which images are currently being processed. There is also a progress bar to show the progress of
			the resizing.
			<br /><br />
		</p>
	</ProjectGrid>
</Dialog>
