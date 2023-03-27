<script lang="ts">
    export let data: { people: Array<any> } = { people: [] };

    import { onMount } from "svelte";
    import * as THREE from "three";
    import fog from "vanta/dist/vanta.fog.min";

    onMount(() => {
        /*
        const backgroundCanvas: HTMLCanvasElement = document.querySelector(`[data-id="background-canvas"]`)!;

        fog({
            el: backgroundCanvas,
            THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0x002868,
            midtoneColor: 0xbf0a30,
            lowlightColor: 0x002868,
            baseColor: 0xbf0a30,
            blurFactor: 0.9,
            zoom: 0.3,
        });
        */
    });
</script>

<svelte:head>
    <title>deeper</title>
</svelte:head>

<div class="w-full h-full absolute top-0 left-0 z-[-1] opacity-10" data-id="background-canvas" />

<header class="h-[40%] pt-[10%] flex flex-col justify-center items-center gap-4 px-[20%]">
    <h1 class="text-6xl">Cullman Veteran Memorial</h1>
    <p class="text-2xl">The Cullman Veteran Memorial is dedicated to honoring every person whose name is insribed on the Cullman Veteran Memorial in Cullman, AL.</p>
</header>

<div class="pt-12">
    <div class="flex justify-center items-start pb-8 gap-4">
        <div class="flex flex-col justify-start items-start gap-2 text-xl">
            <input class="px-4 py-2 rounded-md" placeholder="name" />
            <button class="ml-2 text-base">advanced search</button>
        </div>

        <button class="px-4 py-2 rounded-md bg-[#bf0a30] text-xl">search</button>
    </div>

    <ul class="flex flex-wrap justify-center items-start gap-8">
        {#each data.people as person}
            <li class="w-28 aspect-square rounded-md overflow-hidden relative">
                <img class="w-full h-full" src={person.picture} alt={person.name} />

                <div class="absolute right-0">
                    <p></p>
                </div>
            </li>
        {/each}
    </ul>
</div>
