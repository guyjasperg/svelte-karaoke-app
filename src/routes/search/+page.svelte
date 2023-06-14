<script lang="ts">
	import { onMount } from 'svelte';
	import { searchSongs } from '../api/yt-api';
	import Searchbar from '../../components/Searchbar.svelte';
	import { comma } from 'postcss/lib/list';

	// let ytVids = {};
	let searchString = '';
	let mounted = false;

	onMount(() => {
		console.log('onMount');
		mounted = true;
		ytV1.length = 0;
	});

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

	const handleSearch = async (event) => {
		searchString = event.detail.text;
		console.log('handleSearch', searchString);

		if (!searchString) return;

		const result = await searchSongs(searchString);
		ytV1 = result.items;
	};
</script>

<Searchbar on:search={handleSearch} />

<div class="rounded-sm bg-white mt-5 w-[100%] text-center items-center p-4 h-screen">
	<h1 class="font-bold text-2xl">Search Result</h1>
	{#if ytV1.length > 0 && mounted}
		{console.log('Inside if 2')}
		{#each ytV1 as yt}
			<div class="flex items-center text-center p-2 content-center flex-col">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="w-[200px] mr-2" src={yt.snippet.thumbnails.high.url} />
				<h1>{yt.snippet.title}</h1>
			</div>
		{/each}
	{/if}
</div>
