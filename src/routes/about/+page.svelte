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
