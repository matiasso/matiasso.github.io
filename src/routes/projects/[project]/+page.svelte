<script lang="ts">
	import { page } from '$app/stores';
	import { Alert } from 'flowbite-svelte';
</script>

<!-- Here we show an error alert if the path doesn't lead to anywhere -->
<div class="m-5">
	<Alert class="max-w-[80%] p-6 mx-auto" color="red">
		<span class="text-lg"><strong>Error:</strong> project "{$page.params.project}" not found!</span>
	</Alert>
</div>
