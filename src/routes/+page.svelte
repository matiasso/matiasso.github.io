<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const imgRadius = tweened(50, {
		duration: 1000,
		easing: cubicOut
	});

	const squareCorners = () => {
		$imgRadius = 5;
	};

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

	export var balls = [...Array(8).keys()].map((i) => ({
		id: i,
		color: getRandomColor(),
		size: 50 + Math.random() * 200,
		location: {
			x: -1,
			y: -1
		}
	}));

	// A function that re-positions and re-colors the balls
	function randomizeBallLocationsAndColors() {
		for (var i = 0; i < balls.length; i++) {
			balls[i].color = getRandomColor();
			balls[i].location.x = Math.random() * window.innerWidth;
			balls[i].location.y = Math.random() * window.innerHeight;
		}
	}

	const animationDuration = 15;
	let scrollY = 0;
	onMount(() => {
		// Call the randomization after mounting
		randomizeBallLocationsAndColors();
		// Call the randomization during every animation interval
		const interval = setInterval(() => {
			randomizeBallLocationsAndColors();
		}, animationDuration * 1000);
		//If a function is returned from onMount, it will be called when the component is unmounted.
		return () => clearInterval(interval);
	});
</script>

<svelte:window bind:scrollY />

<div
	class="ballContainer"
	style={`position: absolute; z-index: -1; background-color: #303041; top: ${scrollY}px; left: 0px; width: 100%; height: 100vh; overflow: hidden; pointer-events: none`}
>
	{#each balls as ball}
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
<div class="fullscreenContainer">
	<div class="infoBoxContainer">
		<div class="nameContainer">
			<h1>Matias Södersved</h1>
			<h2>Student from Aalto University</h2>
		</div>

		<div class="imageContainer" on:mouseover={squareCorners} on:mouseout={roundCorners}>
			<img
				id="avatar"
				src="/profile_avatar.jpg"
				alt="Profile"
				style="border-radius: {$imgRadius}%"
			/>
		</div>

		<p id="contentText">
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
			<p>You can find me on:</p>
			<a href="https://github.com/matiasso">
				<img class="socialImg" src="/github_logo.png" alt="Github logo" />
			</a>
			<a href="https://www.linkedin.com/in/matias-sodersved/">
				<img class="socialImg" src="/linkedin_logo.png" alt="LinkedIn logo" />
			</a>
		</div>
	</div>
</div>

<style>
	.fullscreenContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 95vh;
		height: auto;
		width: 100%;
		background: none;
	}
	.infoBoxContainer {
		display: grid;
		width: 80vw;
		margin: 2rem 0 2rem 0;
		grid-template-columns: 3fr 1fr; /* two columns, first with 75% width and second with 25% width (for profile picture and socials)*/
		grid-template-rows: 10rem auto 50px;
		grid-template-areas:
			'header avatar'
			'content avatar'
			'footer footer';
		background: rgba(61, 58, 80, 0.85);
		border-radius: 16px;
		box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(30px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid white;
		padding: 1rem;
	}
	.imageContainer {
		grid-area: avatar;
		margin: 5px 5px 0px 10px;
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
	img.socialImg {
		padding-left: 10px;
		height: calc(30px + 1vw);
		width: calc(30px + 1vw);
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
	@media only screen and (max-width: 900px) {
		/* To target mobile phones and allow content to use more */
		#contentText {
			grid-column-end: 3;
		}
		.imageContainer {
			grid-row-end: 2;
		}
	}
	h1 {
		font-size: calc(16px + 3.5vw);
		margin: 0px;
	}
	h2 {
		font-size: calc(14px + 1.2vw);
		margin: 0.5rem 0 1rem 0;
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
