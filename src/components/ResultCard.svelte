<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import imgBG from '$lib/assets/placeholder-image.png';
	export let imgSrc: String = '';
	export let title: String = '';
	export let videoID: String = '';
	export let description: String = '';

	let loaded = false;
	let thisImage: HTMLImageElement;

	onMount(() => {
		console.log('onMount()', videoID);

		thisImage.onload = () => {
			console.log('loaded');
			loaded = true;
			thisImage.classList.add('loaded');
		};
	});

	onDestroy(() => {
		console.log('onDestroy()', videoID);
	});
</script>

<div
	class="flex flex-col max-w-[300px] h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2 pb-4"
>
	<div
		class="blurred-img bg-gray-400 w-[300px] rounded-t-lg h-70 bg-[url('$lib/assets/placeholder-image.png')] bg-cover bg-no-repeat"
		id="container"
	>
		<img
			class={`rounded-t-lg h-70 opacity-0`}
			src={imgSrc.toString()}
			alt=""
			loading="lazy"
			id="imgID"
			bind:this={thisImage}
		/>
	</div>

	<div class="pb-4 pt-2 text-center">
		<h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
			{title}
		</h5>
	</div>

	<div class="text-center pb-2">
		<a
			class="text-sm font-thin border-b border-b-blue-300"
			target="_blank"
			href={`https://www.youtube.com/watch?v=${videoID}`}
		>
			Watch in YT
		</a>
	</div>
	<div class="mt-auto mx-auto">
		<a
			href="#"
			class="inline-flex items-center px-3 py-2 text-sm font-medium align-bottom text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			Add to Queue
		</a>
	</div>
</div>

<style>
	.blurred-image {
		/* background-image: ${imgBG}; */
		/* background-repeat: no-repeat;
		background-size: cover; */
	}
	img {
		transition: opacity 1000ms ease-in-out;
	}
	.loaded {
		opacity: 1;
	}
</style>
