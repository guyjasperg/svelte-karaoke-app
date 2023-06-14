<script lang="ts">
	import { onMount } from 'svelte';
	import { searchSongs } from '../api/yt-api';

	// let ytVids = {};
	let searchString = '';

	let ytV1 = [
		{
			id: { videoId: String },
			snippet: {
				title: String,
				description: String,
				channelTitle: String,
				thumbnails: {
					high: { url: String, height: Number, width: Number }
				}
			}
		}
	];

	onMount(() => {
		ytV1 = [];
	});

	const handleClick = async () => {
		console.log('handleClick', searchString);
		if (!searchString) return;

		const result = await searchSongs(searchString);
		// ytVids = result.items;
		// console.log(ytVids);
		ytV1 = result.items;
		// console.log(ytV1);
	};
</script>

<div class="w-screen py-5 flex justify-center px-5 border-b-2 border-gray-400">
	<div>
		<input
			id="search"
			type="text"
			bind:value={searchString}
			class="shadow appearance-none border rounded w-full p-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		/>
	</div>
	<div>
		<button
			class="text-xl bg-[darkcyan] text-[white] p-2.5 px-8 rounded-[10px] border-[none]"
			on:click={handleClick}>Search</button
		>
	</div>
</div>
<div class="rounded-sm bg-white mt-5 w-[100%] text-center items-center p-4 h-screen">
	<h1 class="font-bold text-2xl">Search Result</h1>
	<!-- {ytV1.length} -->
	{#if ytV1.length > 0}
		{#each ytV1 as yt}
			<div class="flex items-center text-center p-2 content-center flex-col">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="w-[200px] mr-2" src={yt.snippet.thumbnails.high.url} />
				<h1>{yt.snippet.title}</h1>
			</div>
		{/each}
	{/if}
</div>

<style>
	/* Buttons */
	.btn,
	.btn-sm {
		@apply font-medium inline-flex items-center justify-center border border-transparent rounded;
	}

	.btn {
		@apply px-6 py-1 shadow-lg;
	}
	/* 
	.btn-sm {
		@apply px-4 py-2 shadow;
	} */
</style>
