<script lang="ts">
	import { onMount } from 'svelte';

	const getRandomColor = () => {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * letters.length)];
		}
		// Then we add the alpha, but we want it to be above 0.5
		color += Math.floor(128 + Math.random() * 128).toString(16);
		return color;
	};

	export const balls = [...Array(30).keys()].map((i) => ({
		id: i,
		color: getRandomColor(),
		size: 10 + Math.random() * 50,
		location: {
			x: 8 + Math.random() * 84,
			y: 8 + Math.random() * 84
		}
	}));
</script>

{#each balls as ball}
	<div
		class="ball"
		style={`background: ${ball.color}; width: ${ball.size}px; height: ${ball.size}px; 
			position: absolute; top: ${ball.location.y}%; left: ${ball.location.x}%;
			border-radius:50%; filter: blur(1.7vmax); animation: up-down 15s infinite;`}
	/>
{/each}
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
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare suscipit lectus,
			vitae pharetra massa. Aenean ligula eros, sagittis a molestie a, lobortis id quam. Fusce
			rhoncus dolor in tempor pulvinar. Fusce in ipsum vestibulum, venenatis orci nec, auctor ante.
			Ut nisl quam, tristique ut feugiat non, commodo ac felis. Mauris vulputate molestie massa ac
			auctor. Etiam semper finibus felis, nec luctus nunc facilisis nec. Vivamus tristique arcu quis
			tincidunt sollicitudin. Aliquam dignissim, justo in malesuada mollis, lacus libero eleifend
			velit, in convallis elit tortor et leo. Maecenas efficitur erat urna, eget cursus enim
			interdum ac. Donec quam purus, maximus ut viverra quis, bibendum non leo. Cras vulputate diam
			in volutpat finibus. Curabitur vehicula varius risus, sit amet elementum arcu tempor
			facilisis. Fusce fermentum malesuada leo. Duis id auctor justo, ac sodales nulla. Donec neque
			ante, aliquet vitae erat quis, placerat imperdiet risus.
			<br /><br />
			Suspendisse volutpat sagittis urna, sed sagittis velit venenatis a. Praesent aliquam orci non finibus
			auctor. Maecenas quis turpis vulputate, luctus ligula sed, rhoncus quam. Aliquam erat volutpat.
			Maecenas id orci blandit, interdum enim eu, elementum purus. Nullam varius nisi venenatis, dignissim
			ipsum ac, molestie nulla. Nulla lacinia orci ut tincidunt vestibulum. Proin fermentum placerat
			posuere. Morbi mattis a diam quis faucibus.
			<br /><br />
			Etiam interdum placerat dolor nec iaculis. Aenean dapibus finibus nibh eu placerat. Sed finibus
			metus vitae orci semper, et consectetur dui hendrerit. Maecenas consequat augue ante, ut scelerisque
			leo ornare vitae. Praesent sit amet magna dictum, tempus est ac, vulputate ipsum. Proin congue
			mattis consectetur. Ut aliquet ante ex, sed sodales tellus lacinia consequat. Quisque iaculis,
			augue sed auctor aliquam, erat quam ultricies ligula, eu convallis ipsum sapien id tellus. Donec
			elementum consectetur libero, sed tempor orci. Curabitur bibendum mi ex, quis vulputate ligula
			pharetra et. Morbi semper tortor ac dui malesuada pretium at vitae erat. Nulla quis nulla dui.
			Duis ac augue nec nisl suscipit tempor.
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
		width: 100vw;
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
			opacity: 1;
		}
		50% {
			transform: scale(3);
			opacity: 0.3;
		}
		100% {
			opacity: 1;
		}
	}
</style>
