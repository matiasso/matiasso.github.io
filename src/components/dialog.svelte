<div class="flex justify-center items-center min-h-[90%] w-full">
	<div class="dialogContainer bg-white/70 dark:bg-darkwindow">
		<slot />
	</div>
</div>

<style>
	.dialogContainer {
		display: block;
		width: 80%;
		margin: 2rem 0 2rem 0; /* top right bottom left */
		border-radius: 16px;
		box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(30px);
		-webkit-backdrop-filter: blur(30px);
		padding: 1.2rem;
	}
</style>
