<script lang="ts">
	export let fullScreen = false;
</script>

<div class="flex justify-center items-center {fullScreen ? 'min-h-[90vh]' : ''} w-full">
	<div class="dialogContainer">
		<slot />
	</div>
</div>

<style>
	/* Frosted glass pane: translucent fill, a light edge and a soft highlight along the top.
	The blur is strong enough that the background colours never compete with the text */
	.dialogContainer {
		display: block;
		width: 90%;
		margin: 2rem 0 2rem 0; /* top right bottom left */
		border-radius: 16px;
		padding: 1.2rem;
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0) 45%),
			rgba(255, 255, 255, 0.45);
		border: 1px solid rgba(255, 255, 255, 0.6);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.7),
			0 8px 32px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(40px) saturate(160%);
		-webkit-backdrop-filter: blur(40px) saturate(160%);
	}
	:global(.dark) .dialogContainer {
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0) 45%),
			rgba(61, 58, 80, 0.55);
		border-color: rgba(255, 255, 255, 0.12);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.12),
			0 8px 32px rgba(0, 0, 0, 0.45);
	}
	@media only screen and (min-width: 850px) {
		.dialogContainer {
			width: 70%;
		}
	}
</style>
