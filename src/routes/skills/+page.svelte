<div class="fullscreenContainer">
	<h1>Programming languages & frameworks</h1>
	<div class="skillTypeContainer">
		<div class="skillContainer">
			<img class="skillImg" src="/skills/scala_logo.png" alt="C++" />
			<p>Scala</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/python_logo.png" alt="C++" />
			<p>Python</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/typescript_logo.png" alt="C++" />
			<p>Typescript</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/react-native_logo.png" alt="C++" />
			<p>React Native</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/svelte_logo.png" alt="C++" />
			<p>Svelte</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/r_logo.png" alt="C++" />
			<p>R</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/cpp_logo.png" alt="C++" />
			<p>C++</p>
		</div>
	</div>
	<h1>Useful skills</h1>
	<div class="skillTypeContainer">
		<div class="skillContainer">
			<img class="skillImg" src="/skills/git_logo.png" alt="C++" />
			<p>Git</p>
		</div>

		<div class="skillContainer">
			<img class="skillImg" src="/skills/figma_logo.svg" alt="C++" />
			<p>Figma</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/gimp_logo.png" alt="C++" />
			<p>Gimp</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/regex_logo.png" alt="C++" />
			<p>Regex</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/sql_logo.png" alt="C++" />
			<p>SQL</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/linux_logo.png" alt="C++" />
			<p>Linux</p>
		</div>
	</div>
	<h1>Other skills</h1>
	<div class="skillTypeContainer">
		<div class="skillContainer">
			<img class="skillImg" src="/skills/rubiks_cube.png" alt="C++" />
			<p>Rubik's cube</p>
		</div>
		<div class="skillContainer">
			<img class="skillImg" src="/skills/photography.png" alt="C++" />
			<p>Photography</p>
		</div>
	</div>
</div>

<style>
	.fullscreenContainer {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		min-height: 95vh;
		height: auto;
		width: 100%;
		background: #303041; /* TODO: Add animated background later*/
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
	.skillContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}
	.skillImg {
		max-height: 10vh;
		max-width: 10vw;
		padding: 20px;
		aspect-ratio: 1/1;
		border: 2px solid #fff;
		border-radius: 50%;
		object-fit: contain;
	}
	.skillImg:hover {
		border: 2px solid rgb(173, 255, 126);
		animation: wiggle 0.4s 2;
	}
	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(5deg);
			scale: calc(1.2);
		}
		50% {
			transform: rotate(0deg);
			scale: calc(1);
		}
		75% {
			transform: rotate(-5deg);
			scale: calc(1.2);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	h1 {
		margin: 1rem;
	}
</style>
