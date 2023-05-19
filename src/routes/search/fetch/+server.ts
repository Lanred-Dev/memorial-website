import { readFileSync } from "fs";
const people: Array<any> = JSON.parse(readFileSync("people.json") as unknown as string);

/** @type {import('./$types').RequestHandler} */
export function GET({ url }: any) {
    const params: { [key: string]: number } = {
        start: Number(url.searchParams.get("start") || 0),
        end: Number(url.searchParams.get("end") || 0),
    };

    return new Response(JSON.stringify(people));
}
