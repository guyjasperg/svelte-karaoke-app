<script lang="ts">
	import '../app.css';
	import Header from '../components/+header.svelte';
</script>

<!-- <div class="m-auto py-5 flex flex-col justify-start h-screen items-center">
	<Header />
	<slot />
</div> -->
<Header />
<slot />
