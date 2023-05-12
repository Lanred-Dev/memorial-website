import { readFileSync } from "fs";
const people: Array<any> = JSON.parse(readFileSync("people.json") as unknown as string);

function filterParam(databaseValue: any, userValue: any): boolean {
    if (typeof databaseValue === "string") {
        return databaseValue.toLowerCase().includes((userValue as string).toLowerCase());
    } else if (databaseValue instanceof Date || typeof databaseValue === "number") {
        if (isNaN(userValue) || isNaN(userValue.getTime())) {
            return false;
        } else {
            return (typeof databaseValue === "number" ? databaseValue : databaseValue.getTime()) == userValue.getTime();
        }
    }

    return false;
}

function checkLengthIfString(value: any) {
    if (typeof value === "string") {
        return value.length < 1;
    } else {
        return true;
    }
}

/** @type {import('./$types').PageLoad} */
export function load({ url }: any) {
    //get the params from the url
    const params: { [key: string]: string | Date | null } = {
        name: url.searchParams.get("name") || null,
        county: url.searchParams.get("county") || null,
        town: url.searchParams.get("town") || null,
        deathLocation: url.searchParams.get("deathLocation") || null,
        dob: url.searchParams.get("dob") ? new Date(parseInt(url.searchParams.get("dob"))) : null,
        dod: url.searchParams.get("dod") ? new Date(parseInt(url.searchParams.get("dod"))) : null,
    };
    //allows the user to know if their search worked
    let validSearch: boolean = false;
    //to be filtered by the params
    let filtered: Array<any> = people;
    console.log(url.searchParams.get("dob"))
    Object.keys(params).forEach((param: string) => {
        //check to make sure the param value is valid
        if ((params[param] instanceof Date) !== true && typeof params[param] !== "string" && checkLengthIfString(params[param]) === true) return;

        //was a valid search as it contained a valid param
        validSearch = true;
        //filter out the param
        filtered = filtered.filter((person: any) => filterParam(person[param], params[param]));
    });

    return {
        validSearch,
        people: validSearch !== false ? filtered : null,
    };
}
