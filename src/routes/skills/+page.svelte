<script lang="ts">
	const skills = {
		programming: [
			{
				name: 'Scala',
				img: '/skills/scala_logo.png',
				alt: 'Scala'
			},
			{
				name: 'Python',
				img: '/skills/python_logo.png',
				alt: 'Python'
			},
			{
				name: 'Typescript',
				img: '/skills/typescript_logo.png',
				alt: 'Typescript'
			},
			{
				name: 'React Native',
				img: '/skills/react-native_logo.png',
				alt: 'React Native'
			},
			{
				name: 'Svelte',
				img: '/skills/svelte_logo.png',
				alt: 'Svelte'
			},
			{
				name: 'R',
				img: '/skills/r_logo.png',
				alt: 'R'
			},
			{
				name: 'C++',
				img: '/skills/cpp_logo.png',
				alt: 'C++'
			}
		],
		useful: [
			{
				name: 'Git',
				img: '/skills/git_logo.png',
				alt: 'Git'
			},
			{
				name: 'Figma',
				img: '/skills/figma_logo.svg',
				alt: 'Figma'
			},
			{
				name: 'Gimp',
				img: '/skills/gimp_logo.png',
				alt: 'Gimp'
			},
			{
				name: 'Regex',
				img: '/skills/regex_logo.png',
				alt: 'Regex'
			},
			{
				name: 'SQL',
				img: '/skills/sql_logo.png',
				alt: 'SQL'
			},
			{
				name: 'Linux',
				img: '/skills/linux_logo.png',
				alt: 'Linux'
			}
		],
		other: [
			{
				name: "Rubik's cube",
				img: '/skills/rubiks_cube.png',
				alt: "Rubik's cube"
			},
			{
				name: 'Photography',
				img: '/skills/photography.png',
				alt: 'Photography'
			}
		]
	};
</script>

<div class="fullscreenContainer">
	<h1>Programming languages & frameworks</h1>
	<div class="skillTypeContainer">
		{#each skills.programming as skill}
			<div class="skillContainer">
				<div class="skillImgHolder">
					<img class="skillImgIcon" src={skill.img} alt={skill.alt} />
				</div>

				<p>{skill.name}</p>
			</div>
		{/each}
	</div>
	<h1>Useful skills</h1>
	<div class="skillTypeContainer">
		{#each skills.useful as skill}
			<div class="skillContainer">
				<div class="skillImgHolder">
					<img class="skillImgIcon" src={skill.img} alt={skill.alt} />
				</div>

				<p>{skill.name}</p>
			</div>
		{/each}
	</div>
	<h1>Other skills</h1>
	<div class="skillTypeContainer">
		{#each skills.other as skill}
			<div class="skillContainer">
				<div class="skillImgHolder">
					<img class="skillImgIcon" src={skill.img} alt={skill.alt} />
				</div>

				<p>{skill.name}</p>
			</div>
		{/each}
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
	.skillImgHolder {
		max-height: 10vh;
		max-width: 20vw;
		padding: 20px;
		aspect-ratio: 1/1;
		border: 2px solid #fff;
		border-radius: 50%;
		object-fit: contain;
	}
	.skillImgHolder:hover {
		border: 2px solid rgb(173, 255, 126);
		animation: wiggle 0.4s 2;
	}
	.skillImgIcon {
		max-height: 100%;
		max-width: 100%;
		aspect-ratio: 1/1;
		object-fit: contain;
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
