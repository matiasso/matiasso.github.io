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
		<p class="text-black dark:text-white leading-relaxed">
			I got the chance to work with Beamex through a "Software project" course at Aalto University.
			The course is taught in collaboration with multiple companies, and the students are divided
			into groups of roughly 8 students. Each group is assigned a company to work with, and the
			company provides a real-world problem for the students to work on. My group consists of 7
			computer science students.
			<br /><br />
			Beamex is a company that develops and sells calibration solutions and equipment for industrial
			use. Calibration technicians are responsible for ensuring that equipment is calibrated correctly
			and operates as intended. The calibration process can be complex and requires technicians to be
			precise in their work. That's where our application comes in. It is an application that runs on
			a Head Mounted Display (HMD) and provides the technician with instructions about the calibration
			process. It also provides the technician with a way to record the results of the calibration process
			via the camera module. The images are then processed with an AI model, which returns the output
			values to the user who then checks that everything looks fine. There is no need to manually write
			any values down, which reduces the risk of human error.
			<br /><br />
			Our goal during this course is not to build a final product, but instead build a proof-of-concept
			that demonstrates the feasibility of the idea. We are using React Native and TypeScript, because
			the HMD is an android-based device. This way we can also enable the users to run the application
			on other Android or even iOS devices.
			<br /><br />
			The challenge in this project is probably the fact that we are developing a project primarily for
			a HMD device. The interactions are very different from a regular mobile device, where you can tap
			on the screen, because on this specific HMD you can only interact with the device by using voice
			commands. The screen is also very small, which forces us to design the application in a way that
			all the information is easily accessible and understandable.
		</p>
		<img
			src="/projects/beamex/ar_tech.jpg"
			alt="A user with Head mounted device"
			class="w-3/4 my-4 object-contain rounded-lg mx-auto"
			width="500"
			height="500"
		/>
	</ProjectGrid>
</Dialog>
