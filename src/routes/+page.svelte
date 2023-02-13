<div class="fullscreenContainer">
	<div class="infoBoxContainer">
		<div class="infoBoxHeaderContainer">
			<p id="nameText">Matias Södersved</p>
			<p>Student from Aalto University</p>
			<img
				src="https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190415714/happyvector071190415714.jpg?ver=6"
				alt="Avatar template"
				style="width: 200px"
			/>
		</div>
		<div class="infoBoxContent">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget posuere metus, et
				dictum elit. Vestibulum nec ornare nibh. Maecenas magna ante, lacinia eget sagittis in,
				ullamcorper eget neque. Cras feugiat interdum lectus, quis porta metus bibendum sed. Orci
				varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris
				pharetra imperdiet augue quis pharetra. Nam at ante id dolor pellentesque iaculis. Vivamus
				eget malesuada tellus, mattis finibus dolor. Pellentesque faucibus felis turpis, dictum
				finibus tellus interdum ut. Suspendisse vestibulum vehicula neque. Vivamus blandit lobortis
				nibh nec bibendum. Maecenas nisi sem, pellentesque vitae viverra at, fermentum non elit.
				Vivamus et egestas est, eu efficitur dui. Pellentesque quis nisl in elit vestibulum euismod.
				Aliquam mattis interdum nisl, eu bibendum magna blandit at. Orci varius natoque penatibus et
				magnis dis parturient montes, nascetur ridiculus mus. Curabitur lectus sapien, aliquet vitae
				ex a, dignissim malesuada sapien. Donec fermentum iaculis massa, et euismod nisl cursus et.
				Proin augue libero, posuere in nisl a, aliquet egestas sem. Integer vehicula enim ante, in
				pharetra sapien sagittis nec. Mauris non ullamcorper libero, at hendrerit metus. Mauris
				euismod, metus non auctor tristique, sem eros mattis augue, id blandit mauris nisi vitae
				dui. Aliquam sem eros, vestibulum non aliquam interdum, feugiat sed felis. Nulla facilisi.
				Integer auctor, mauris elementum cursus fringilla, purus ipsum malesuada velit, non gravida
				velit leo laoreet nisl. Vivamus ornare maximus massa, et pellentesque arcu sagittis id.
				Phasellus dapibus lacus in tincidunt aliquam. Ut id blandit diam, ut malesuada mauris. Nam
				et erat vel eros suscipit vestibulum. Sed aliquet luctus mi at facilisis. Sed tempus
				pharetra diam, at faucibus arcu ornare nec. Suspendisse ac condimentum ex. Nullam quis
				mauris porttitor, malesuada libero quis, feugiat odio. Nulla rutrum eu lectus et convallis.
				Sed mollis mauris sit amet consequat varius. Ut magna eros, pellentesque vitae euismod et,
				semper sit amet erat. Aliquam viverra turpis ut sapien semper mattis. Aliquam vitae
				porttitor sapien. Praesent eu imperdiet neque. Quisque est tortor, pharetra sit amet ipsum
				vitae, ultrices porta nisl. Donec sed porta eros. Sed vitae quam enim. Sed tempus molestie
				mollis. Phasellus non diam quis purus condimentum sollicitudin. Fusce nec malesuada ante.
			</p>
		</div>
	</div>
</div>

<style>
	.fullscreenContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 95vh;
		width: 100vw;
		flex-grow: 1;
		background: #303041; /* TODO: Add animated background*/
	}
	.infoBoxContainer {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		height: 80vh;
		width: 80vw;
		background: #3d3a50;
		padding: 2rem;
		border-radius: 10px;
		border: 1px solid #fff;
	}
	.infoBoxHeaderContainer {
		height: 30%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-self: flex-start;
		flex-wrap: wrap;
	}
	.infoBoxContent {
		height: 70%;
	}
	#nameText {
		font-size: 2.5rem;
	}
	img {
		margin-left: auto;
	}
</style>
