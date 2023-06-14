import axios from 'axios';

const YT_URL =
	'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=';
const YT_KEY = 'AIzaSyDXXlsxXYjEqZdsXUI2uLKCCGHFgMFV-7g';

// let YT_RESULT: {
//     pageInfo: {
//         totalResults: number,
//         resultsPerPage: number
//     },
//     items: [{

//     }]
// }

export async function searchSongs(search: string) {
	let q = `${YT_URL}${search}&key=${YT_KEY}`;

	const response = await axios.get(q);
	//console.log(response)

	return response.data;
}
