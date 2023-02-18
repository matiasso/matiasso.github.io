<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Dialog from '../components/dialog.svelte';

	// Tweening for the profile picture avatar
	const imgRadius = tweened(50, {
		duration: 1000,
		easing: cubicOut
	});

	// A function that sets the rounding to 5%
	const squareCorners = () => {
		$imgRadius = 5;
	};

	// A function that sets the rounding to 50%
	const roundCorners = () => {
		$imgRadius = 50;
	};

	// A function that returns a random color in hex format
	const getRandomColor = () => {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * letters.length)];
		}
		return color;
	};

	// An array of balls, which will be rendered on z-index -1
	// Just a nice dynamic background effect
	export var balls = [...Array(8).keys()].map((i) => ({
		id: i,
		color: getRandomColor(),
		size: 50 + Math.random() * 200,
		location: {
			x: -1,
			y: -1
		}
	}));

	// A function that re-positions and re-colors the balls, this is called at every animation interval
	function randomizeBallLocationsAndColors() {
		for (var i = 0; i < balls.length; i++) {
			balls[i].color = getRandomColor();
			balls[i].location.x = Math.random() * window.innerWidth;
			balls[i].location.y = Math.random() * window.innerHeight;
		}
	}

	// Bind the scroll also so I can keep the background balls in place
	let scrollY = 0;
	const animationDuration = 15;
	onMount(() => {
		// Call the randomization after mounting
		randomizeBallLocationsAndColors();

		// Call the randomization during every animation interval
		const interval = setInterval(() => {
			randomizeBallLocationsAndColors();
		}, animationDuration * 1000);
		// When the component is unmounted, clear the interval
		return () => clearInterval(interval);
	});
</script>

<svelte:window bind:scrollY />

<!-- A Div containing the balls, it will have z-index: -1 so that it is rendered "below" the main window -->
<div
	class="bg-lightbg dark:bg-darkbg"
	style={`position: absolute; z-index: -1; top: ${scrollY}px; left: 0px; width: 100%; height: 100vh; overflow: hidden; pointer-events: none`}
>
	{#each balls as ball}
		<!-- Only render the balls if they dont have the initial value -1 anymore -->
		{#if ball.location.x >= 0 && ball.location.y >= 0}
			<div
				class="ball"
				style={`background: ${ball.color}; width: ${ball.size}px; height: ${ball.size}px; 
			position: absolute; top: ${ball.location.y}px; left: ${ball.location.x}px;
			border-radius:50%; filter: blur(0.7vmax); animation: up-down ${animationDuration}s infinite;`}
			/>
		{/if}
	{/each}
</div>
<!-- This Dialog component creates the blurred window -->
<Dialog fullScreen={true}>
	<div class="infoContainer">
		<div class="nameContainer">
			<h1 class="text-gray-700 dark:text-gray-200">Matias Södersved</h1>
			<h2 class="text-gray-600 dark:text-gray-300">Student from Aalto University</h2>
		</div>

		<div
			class="imageContainer"
			on:mouseover={squareCorners}
			on:focus={squareCorners}
			on:mouseleave={roundCorners}
			on:blur={roundCorners}
		>
			<img
				id="avatar"
				width="512"
				height="512"
				src="/profile_avatar.jpg"
				alt="Profile"
				style="border-radius: {$imgRadius}%"
			/>
		</div>

		<p id="contentText" class="text-black dark:text-white">
			I'm a 3rd year computer science student at Aalto University, with minors in Data Science and
			Mathematics. I'm a highly motivated individual who is passionate about exploring the limitless
			possibilities that technology has to offer. During my studies, I have developed a good
			understanding of programming languages such as Python, Scala and TypeScript, which has enabled
			me to take on projects ranging from simple web applications to more-complex algorithms.
			<br /><br />
			As a part of my academic journey, I have had the opportunity to work on exciting projects such
			as the implementation of a tool for calibration technicians at Beamex. The project involved using
			React Native to develop an android-based application for calibration technicians to perform their
			work more efficiently. The experience allowed me to understand the significance of solving real-world
			problems and the importance of collaboration in the process. I learned how to work as a team and
			contribute towards a common goal.
			<br /><br />
			One of my core strengths is my ability to work with Git and collaborate effectively with team members.
			I understand that each team member brings their unique skill set and perspective to the table,
			and it is crucial to consider everyone's input while working on a project. I believe that being
			transparent, communicating effectively, and ensuring equal participation from all members of the
			team is the key to successful collaboration.
			<br /><br />
			I'm interested in exploring new frameworks and technologies and continuously strive to expand my
			knowledge in the field. I strongly believe that technology has the power to bring positive change
			to the world, and I hope to contribute to this through my work.
		</p>
		<div class="footerContainer">
			<p class="text-black dark:text-white">You can find me on:</p>
			<a href="https://github.com/matiasso">
				<img class="socialIcon" src="/github_logo.png" alt="Github logo" height="512" width="512" />
			</a>
			<a href="https://www.linkedin.com/in/matias-sodersved/">
				<img
					class="socialIcon"
					src="/linkedin_logo.png"
					alt="LinkedIn logo"
					height="512"
					width="512"
				/>
			</a>
		</div>
	</div>
</Dialog>

<style>
	.infoContainer {
		display: grid;
		grid-template-columns: 3fr 1fr; /* two columns, first with 75% width and second with 25% width (for profile picture and socials)*/
		grid-template-rows: 12rem auto 50px;
		grid-template-areas:
			'header avatar'
			'content avatar'
			'footer footer';
	}
	.imageContainer {
		grid-area: avatar;
		margin: 5px 5px 0px 10px; /* top right bottom left */
		justify-self: end;
		max-height: 160px;
		min-height: 80px;
		height: auto;
		align-self: start;
	}
	.nameContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.footerContainer {
		grid-area: footer;
		justify-self: end;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	img.socialIcon {
		margin-left: 10px;
		aspect-ratio: 1/1;
		height: calc(30px + 1vw);
		width: calc(30px + 1vw);
	}
	img.socialIcon:hover {
		transform: scale(1.1);
	}
	img#avatar {
		min-width: 100px;
		min-height: 100px;
		max-height: 100%;
		max-width: 100%;
		height: auto;
		width: auto;
	}
	#contentText {
		grid-area: content;
	}
	@media only screen and (max-width: 850px) {
		/* On mobile phones the profile picture is smaller and content can have full width of the infobox */
		#contentText {
			grid-column-end: 3;
		}
		.imageContainer {
			grid-row-end: 2;
		}
	}
	/* I give some initial pixel values to h1 and h2, but scale them up as the width of the screen grows */
	h1 {
		font-size: calc(16px + 3.5vw);
		margin: 0;
		padding: 0;
	}
	h2 {
		font-size: calc(14px + 1.2vw);
		margin: 0.5rem 0 1.5rem 0;
	}

	@keyframes -global-up-down {
		0% {
			opacity: 0;
		}
		50% {
			transform: scale(5);
			opacity: 0.75;
		}
		100% {
			opacity: 0;
		}
	}
</style>
