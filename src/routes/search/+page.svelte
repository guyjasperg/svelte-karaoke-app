<script lang="ts">
	import { onMount } from 'svelte';
	import { searchSongs } from '../api/yt-api';
	import Searchbar from '../../components/Searchbar.svelte';
	import ResultCard from '../../components/ResultCard.svelte';

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

		ytV1 = [];
		const result = await searchSongs(searchString);
		ytV1 = result.items;
	};
</script>

<Searchbar on:search={handleSearch} />

<h1 class="font-bold text-2xl">Search Result</h1>
<div class="flex flex-wrap rounded-sm bg-white mt-2 w-[100%] p-4 h-screen">
	{#if ytV1.length > 0 && mounted}
		{#each ytV1 as yt}
			<ResultCard
				imgSrc={yt.snippet.thumbnails.high.url}
				title={yt.snippet.title}
				description={yt.snippet.description}
				videoID={yt.id.videoId}
			/>
			<div class="flex p-2 content-center flex-col">
				<!-- svelte-ignore a11y-missing-attribute -->
				<!-- <img class="w-[200px] mr-2" src={yt.snippet.thumbnails.high.url} />
				<h1>{yt.snippet.title}</h1> -->
			</div>
		{/each}
	{/if}
</div>
