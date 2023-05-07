import { readFileSync } from "fs";
const people: Array<any> = JSON.parse(readFileSync("people.json") as unknown as string);

//TODO: find a different way to filter through the people array, current way may cause problems with a bigger list

/** @type {import('./$types').PageLoad} */
export function load({ url }: any) {
    //get the params from the url
    const params: { [key: string]: string } = {
        name: url.searchParams.get("name") || null,
        county: url.searchParams.get("county") || null,
        town: url.searchParams.get("town") || null,
        deathLocation: url.searchParams.get("deathLocation") || null,
        dob: url.searchParams.get("dob") || null,
        dod: url.searchParams.get("dod") || null,
    };
    //allows the user to know if their search worked
    let validSearch: boolean = false;
    //to be filtered by the params
    let filtered: Array<any> = people;

    Object.keys(params).forEach((param: string) => {
        //check to make sure the param value is valid
        if (typeof params[param] !== "string" || params[param].length < 1) return;

        //was a valid search as it contained a valid param
        validSearch = true;
        //filter out the param
        filtered = filtered.filter((person: any) => person[param].includes(params[param]));
    });

    return {
        validSearch,
        people: validSearch !== false ? filtered : null,
    };
}
