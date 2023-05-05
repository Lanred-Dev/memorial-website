import { readFileSync } from "fs";
const people: Array<string> = JSON.parse(readFileSync("people.json") as unknown as string);

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        people
    };
}
