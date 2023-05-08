<script lang="ts">
    //import components
    import SearchBar from "$lib/search-bar.svelte";
    import PersonList from "$lib/person-list.svelte";
    import Highlight from "$lib/highlight.svelte";
    import { onDestroy, onMount } from "svelte";

    //contains the list of people
    export let data: { people: Array<any> } = { people: [] };

    let date: string = new Date().toLocaleString([], { timeZone: "America/Chicago" });
    let dateInterval: NodeJS.Timer;

    onMount(() => {
        dateInterval = setInterval(() => {
            date = new Date().toLocaleString([], { timeZone: "America/Chicago" });
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(dateInterval);
    });
</script>

<svelte:head>
    <title>Cullman Veteran Memorial</title>
</svelte:head>

<header class="bg-backgroundSecondary h-full lg:h-[80vh] flex flex-col justify-center items-center gap-8 px-12 py-[15%] md:py-10 relative">
    <div class="flex flex-col items-center gap-4 z-[1]">
        <h1 class="text-4xl md:text-6xl">Cullman Veteran Memorial</h1>
        <p class="text-lg md:text-2xl lg:max-w-[60%]">The Cullman Veteran Memorial is dedicated to honoring every person whose name is insribed on the Cullman Veteran Memorial in Cullman, AL.</p>
    </div>

    <div class="absolute bottom-20 bg-highlight p-1 px-3 rounded-md z-[1]">
        <p class="text-primary font-bold">{date}</p>
    </div>
</header>

<section class="bg-modal px-5 lg:px-20 py-20 gap-10 lg:gap-20 flex flex-col items-center justify-between text-light">
    <div class="w-[90%] lg:w-[50%] h-[16rem] md:h-[27rem] bg-backgroundSecondaryComplement rounded-lg overflow-hidden border-[3px] border-modalSecondary">
        <img class="object-cover" src="https://raw.githubusercontent.com/Lanred-Dev/memorial-website/Interactive-Map-Test/Vietnam_Test_Map.jpg" alt="memorial" />
    </div>

    <header class="w-[90%] lg:w-[50%]">
        <p class="text-base md:text-xl text-center">
            <Highlight>The Cullman Veteran Memorial</Highlight> is a powerful and moving tribute to the brave men and women who have served their country. Located in <Highlight>Cullman, Alabama</Highlight>, the memorial features a <Highlight>granite wall with the names of every individual from Alabama</Highlight> who has served in the military during the <Highlight>Vietnam War</Highlight>, along with several monuments and beautifully landscaped grounds.<br /><br />The memorial is a place of reflection and honor, providing a space for veterans, their families, and the community to pay their respects and remember those who have served and sacrificed for our nation. The Cullman Veteran Memorial is a testament to the unwavering dedication and bravery of our service members and a reminder of the debt of gratitude we owe them for their service to our country.
        </p>
    </header>
</section>

<div class="bg-backgroundSecondary w-full h-[80vh]" />
