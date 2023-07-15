<script>
	import YouTube from 'svelte-youtube';

	const options = {
		height: '390',
		width: '640',
		//  see https://developers.google.com/youtube/player_parameters
		playerVars: {
			autoplay: 0
		}
	};
	let yt = null;
	let sFunction = 'Play';
	function onReady(event) {
		console.log('onReady', event);
		// event.detail.target.playVideo();
		yt = event.detail.target;
		// access to player in all event handlers via event.target
		// event.target.pauseVideo();
	}

	const handlePlay = () => {
		if (yt) {
			if (sFunction === 'Play') {
				sFunction = 'Pause';
				yt.playVideo();
			} else {
				sFunction = 'Play';
				yt.pauseVideo();
			}
		}
		yt.playVideo();
	};
	const onEnd = () => {
		console.log('onEnd');
	};
	const onStateChange = (event) => {
		console.log('onStateChange', event);
	};
</script>

<div class="bg-gray-400 p-5">
	Parent
	<div class="child1 bg-green-200">
		Child 1
		<button class="p-2 rounded-lg bg-blue-300 m-1">Click Me</button>
		<button class="p-2 rounded-lg bg-blue-300 m-1">Click Me</button>
		<p>ajdhasjkdha</p>
		<button class="p-2 rounded-lg bg-blue-300 m-1">Click Me</button>
		<button class="p-2 rounded-lg bg-blue-300 m-1 hover:rounded-full">Click Me</button>
	</div>
	<div class="child2 bg-red-200">Child 2</div>
	<div class="child3 bg-blue-200">Child 3</div>
	<div class="flex flex-col items-center">
		<p>line 1</p>
		<p>line 2</p>
		<p>line 3</p>
	</div>
	<div class="flex flex-row">
		Child 4
		<p>line 1</p>
		<button>Click Me</button>
		<p>line 2</p>
		<p>line 3</p>
	</div>
	<div class="bg-blue-200 relative">
		Child 5
		<p>line 1</p>
		<div class="w-fit bg-blue-400 translate-x-1/2]">
			<button class="p-2 rounded-lg bg-blue-300 m-1">Click Me</button>
			<button class="p-2 rounded-lg bg-blue-300 m-1">Click Me</button>
		</div>
	</div>
</div>

<h1 class="text-2xl">About</h1>
<p>Karaoke App v1.0</p>

<!-- <div>
	<iframe
		width="560"
		height="315"
		src="https://www.youtube.com/embed/C3wW_NwkJjw?start=1"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
</div> -->

<YouTube
	videoId="2g811Eo7K8U"
	{options}
	on:ready={onReady}
	on:end={onEnd}
	on:stateChange={onStateChange}
/>
<button on:click={handlePlay}>{sFunction}</button>
