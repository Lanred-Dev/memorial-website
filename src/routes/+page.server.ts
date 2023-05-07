import { readFileSync } from "fs";
const people: Array<any> = JSON.parse(readFileSync("people.json") as any);

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        people
    };
}
