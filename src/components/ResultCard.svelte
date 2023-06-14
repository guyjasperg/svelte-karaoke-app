<script lang="ts">
	export let imgSrc: string = '';
	export let title: string = '';
	export let videoID: string = '';
	// export let description: string = '';
</script>

<div
	class="flex flex-col max-w-[320px] h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2 pb-4"
>
	<img class="rounded-t-lg h-70" src={imgSrc} alt="" />
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
