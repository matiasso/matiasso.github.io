<script lang="ts">
	import Dialog from '../../../components/dialog.svelte';
	import ProjectGrid from '../projectgrid.svelte';

	const projectProps = {
		title: 'Software project at Beamex',
		date: '2022-2023',
		logo: '/projects/beamex/beamex_logo.svg',
		alt: 'Beamex logo'
	};
</script>

<!-- Return a floating dialog with information about the project -->

<Dialog>
	<ProjectGrid {...projectProps}>
		<p class="text-black dark:text-white">
			I got the change to work with Beamex through a "Software project" course at Aalto University.
			The course is taught in collaboration with multiple companies, and the students are divided
			into groups of roughly 8 students. Each group is assigned a company to work with, and the
			company provides a real-world problem for the students to work on. My group consists of 7
			computer science students.
			<br /><br />
			Beamex is a company that develops and sells calibration solutions and equipment for industrial
			use. Calibration technicians are responsible for ensuring that equipment is calibrated correctly
			and operates as intended. The calibration process can be complex and requires technicians to be
			precise in their work. The application that we are building will help the technicians to carry
			out their work more efficiently and accurately. We are building the application with React Native
			and TypeScript, because the target device is an Android-based Head mounted device. However, the
			application can also be used on iOS devices.
			<br /><br />
			Our goal during this course is not to build a final product, but instead build a proof-of-concept
			that demonstrates the feasibility of the idea. We will be working on the project for the duration
			of the course, which is roughly 7 months.
		</p>
	</ProjectGrid>
</Dialog>
