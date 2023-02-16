<script lang="ts">
	import SkilltypeContainer from './skillInfoContainer.svelte';

	const skills = {
		programming: [
			{
				name: 'Scala',
				img: '/skills/scala_logo.png',
				alt: 'Scala logo',
				description: `Scala is maybe one of my strongest programming languages, because at Aalto University 
				most of the programming courses require you to write Scala code, so I have become quite familiar with it.`
			},
			{
				name: 'Python',
				img: '/skills/python_logo.png',
				alt: 'Python logo',
				description: `Python was the first programming language that I learned back in 2018, and I have been using it for small everyday scripts since then. 
					I also used it in the "Machine learning" course at Aalto University, where we learned some basics of the scikit-learn library.`
			},
			{
				name: 'TypeScript',
				img: '/skills/typescript_logo.png',
				alt: 'TypeScript logo',
				description: `TypeScript is quite new addition to my skills. I completed the "Web Software Development" course at Aalto University (2021-2022), 
				where we learned some JavaScript. After that I learned the basics of TypeScript during a "Software project" course at Aalto University (2022-2023). 
				During that course we worked as a 7 member team and built an application for Android-based glasses with React Native and TypeScript.
				This website is also in-fact built with TypeScript (and SvelteKit).`
			},
			{
				name: 'React',
				img: '/skills/react-native_logo.png',
				alt: 'React logo',
				description: `I got to know React and React Native during a "Software project" course at Aalto University (2022-2023). 
				During that project we worked as a 7 member team and built an application for Android-based glasses with React Native and TypeScript.`
			},
			{
				name: 'Svelte',
				img: '/skills/svelte_logo.png',
				alt: 'Svelte logo',
				description: `After learning React and React Native I decided to try something new, and heard about Svelte. 
				This website is built with SvelteKit (and TypeScript). So far I'm still a beginner with Svelte, but I'm really enjoying it.`
			},
			{
				name: 'R',
				img: '/skills/r_logo.png',
				alt: 'R logo',
				description: `I have learned the basics of R during 2022-2023, when three of my mathemathics courses required us to use R.
				I will continue to learn more R during my master's studies.`
			},
			{
				name: 'C++',
				img: '/skills/cpp_logo.png',
				alt: 'C++ logo',
				description: `I have completed the "Basics of C++" course, which also included a group project, 
				in which we built a simple Tower Defense game.`
			}
		],
		useful: [
			{
				name: 'Git',
				img: '/skills/git_logo.png',
				alt: 'Git logo',
				description: `I have used Git for version control in most of my personal projects. 
				I have also used Git during all the group projects at Aalto University.`
			},
			{
				name: 'Figma',
				img: '/skills/figma_logo.svg',
				alt: 'Figma logo',
				description: `Figma is a tool that I really love. I have used it for designing this website, 
				and for sketching out some design visions during our group projects at Aalto University.`
			},
			{
				name: 'Gimp',
				img: '/skills/gimp_logo.png',
				alt: 'Gimp logo',
				description: `I have always enjoyed photographing a variety of things, especially nature and animals. That lead me to learning how to edit photos with Gimp.
				I would say that I'm pretty good at using all the features of Gimp (layers, masks, filters, etc.).`
			},
			{
				name: 'RegEx',
				img: '/skills/regex_logo.png',
				alt: 'RegEx logo',
				description: `I learned RegEx originally in 2019, when I was writing some Python scripts for personal use and I needed to parse some text files.
				I found that RegEx is a very powerful tool for parsing text files, and I have been using it ever since for many everyday string operations.`
			},
			{
				name: 'SQL',
				img: '/skills/sql_logo.png',
				alt: 'SQL logo',
				description: `I have learned the basics of SQL during 2022, when I had "Databases" -course at Aalto University. We had lots of exercises, 
				where we had to write SQL queries to fetch data from a database. I haven't had the opportunity to use SQL in any of my projects yet, but I have a few projects
				in mind, in which I could use SQL.`
			},
			{
				name: 'Linux',
				img: '/skills/linux_logo.png',
				alt: 'Linux logo',
				description: `I had been using Windows as a daily-driver until 2021, but then I decided to try Linux, because in many cases
				it seemed to be simpler than Windows to setup for different programming environments. Ever since the switch I have been using Linux as my daily-driver. 
				I started with Ubuntu 20.04, updated it to the new LTS version 22.04, and enjoyed using it till the end of 2022. After that I got interested in other 
				Linux distributions, and decided to switch to Fedora Linux (KDE spin). Apart from a few minor issues and bugs, I have been loving both Ubuntu and Fedora.`
			}
		],
		other: [
			{
				name: "Rubik's cube",
				img: '/skills/rubiks_cube.png',
				alt: "An icon containing a Rubik's cube",
				description: `I remember when I found my old Rubik's cube in the closet and decided to give it a go. 
				It took some time to solve, but with the help of online tutorials I managed to quickly learn the "Beginner's method" for solving it. 
				I used that method and got a little bit faster at solving the cube, but then I decided to learn the "CFOP method" for solving the cube. 
				That method is a bit more complicated (meaning it has more algorithms you have to memorize), but it is also a lot faster. 
				I have been using the CFOP method for solving the cube ever since and most of my solves range around 40 and 60 seconds, which is not great, but decent.
				At some point I got an idea to learn the cube blindfolded, and I spent a few hours learning "Pochmann method" and later "M2 method" 
				which are both meant for blindfolded solving. I learned both methods pretty quickly, but I think I have forgotten some of the algorithms already.`
			},
			{
				name: 'Photography',
				img: '/skills/photography.png',
				alt: 'An icon about Photography',
				description: `I have always enjoyed photographing a variety of things, especially nature and animals. As a kid I owned a compact camera, which
				I used to record lots of memories. I quickly got interested in photography and wanted to learn more so I could get higher quality images. 
				I wanted to learn how the camera settings affect the final image, and how to manipulate the image in post-processing.
				When I was 14 years old I got my first DSLR camera, which gave me a huge motivation boost to continue photographing. 
				I still own that DSLR and I have bought a few new lenses for it.`
			}
		]
	};
</script>

<div class="fullscreenContainer">
	<h1 class="text-black dark:text-white">Programming languages & frameworks</h1>
	<div class="skillTypeContainer">
		{#each skills.programming as skill}
			<SkilltypeContainer {skill} />
		{/each}
	</div>
	<h1 class="text-black dark:text-white">Useful skills</h1>
	<div class="skillTypeContainer">
		{#each skills.useful as skill}
			<SkilltypeContainer {skill} />
		{/each}
	</div>
	<h1 class="text-black dark:text-white">Other skills</h1>
	<div class="skillTypeContainer">
		{#each skills.other as skill}
			<SkilltypeContainer {skill} />
		{/each}
	</div>
</div>

<style>
	.fullscreenContainer {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		min-height: 80vh;
		height: auto;
		width: 100%;
	}
	.skillTypeContainer {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 80vw;
		margin: 0.5rem;
	}
	h1 {
		margin: 1rem 0 0 0;
		font-size: calc(22px + 0.6vw);
		text-align: center;
	}
</style>
