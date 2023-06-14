import { json } from '@sveltejs/kit';

export function GET() {
	return new Response('Hello from demo API');
}

export async function POST(req) {
	const { request } = req;

	const text = await request.json();
	console.log(text);

	return new Response('Success');
}
