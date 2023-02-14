<script lang="ts">
	import { onMount } from 'svelte';

	// A function that returns a random color in hex format
	const getRandomColor = () => {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * letters.length)];
		}
		return color;
	};

	export var balls = [...Array(10).keys()].map((i) => ({
		id: i,
		color: getRandomColor(),
		size: 40 + Math.random() * 100,
		location: {
			x: 0,
			y: 0
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
		// Call the randomization after every animation interval
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
	style={`position: absolute; top: ${scrollY}px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none`}
>
	{#each balls as ball}
		<div
			class="ball"
			style={`background: ${ball.color}; width: ${ball.size}px; height: ${ball.size}px; 
			position: absolute; top: ${ball.location.y}px; left: ${ball.location.x}px;
			border-radius:50%; filter: blur(1.5vmax); animation: up-down ${animationDuration}s infinite;`}
		/>
	{/each}
</div>
<div class="fullscreenContainer">
	<div class="infoBoxContainer">
		<div class="nameContainer">
			<h1>Matias Södersved</h1>
			<h2>Student from Aalto-University</h2>
		</div>

		<div class="imageContainer">
			<img
				id="avatar"
				src="https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190415714/happyvector071190415714.jpg?ver=6"
				alt="Avatar template"
			/>
		</div>

		<p id="contentText">
			I'm a 3rd year computer science student at Aalto-University, with minors in Data Science and
			Mathematics. I'm a highly motivated individual who is passionate about exploring the limitless
			possibilities that technology has to offer. During my studies, I have developed a good
			understanding of programming languages such as Python, Scala, Typescript and C++, which has
			enabled me to take on projects ranging from simple web applications to more-complex
			algorithms.
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
			<p>You can find me here:</p>
			<a href="https://github.com/matiasso">
				<img
					class="socialImg"
					src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
					alt="Github logo"
					height="50px"
				/>
			</a>
			<a href="https://www.linkedin.com/in/matias-sodersved/">
				<img
					class="socialImg"
					src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
					alt="LinkedIn logo"
					height="50px"
				/>
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
		width: '100%';
		background: #303041; /* TODO: Add animated background later*/
	}
	.infoBoxContainer {
		display: grid;
		width: 80vw;
		margin: 2rem 0 2rem 0;
		grid-template-columns: 3fr 1fr; /* two columns, first with 75% width and second with 25% width (for profile picture and socials)*/
		grid-template-rows: 10rem auto 50px;
		grid-template-areas:
			'header avatar'
			'content content'
			'footer footer';

		background: #3d3a50;
		padding: 1rem;
		border-radius: 10px;
		border: 1px solid #fff;
	}
	.imageContainer {
		grid-area: avatar;
		justify-self: end;
		max-height: 160px;
		min-height: 80px;
		height: auto;
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
	}
	img.socialImg {
		padding-left: 10px;
	}
	img#avatar {
		margin-left: 10px;
		border-radius: 50%;
		min-width: 60px;
		min-height: 60px;
		max-height: 100%;
		max-width: 100%;
		height: auto;
		width: auto;
	}
	#contentText {
		grid-area: content;
	}
	h1,
	h2 {
		color: #fff;
	}

	@keyframes -global-up-down {
		0% {
			opacity: 0;
		}
		50% {
			transform: scale(5);
			opacity: 0.25;
		}
		100% {
			opacity: 0;
		}
	}
</style>
