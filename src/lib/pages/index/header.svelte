<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    let date: string = new Date().toLocaleString([], { timeZone: "America/Chicago" });
    let dateInterval: NodeJS.Timer;

    onMount(() => {
        //update the date in realtime
        dateInterval = setInterval(() => {
            date = new Date().toLocaleString([], { timeZone: "America/Chicago" });
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(dateInterval);
    });
</script>

<header class="bg-backgroundSecondary h-full lg:h-[80vh] flex flex-col justify-center items-center gap-8 px-12 py-[15%] md:py-10 relative">
    <div class="flex flex-col items-center gap-4 z-[1]">
        <h1 class="text-4xl md:text-6xl">Cullman Veteran Memorial</h1>
        <p class="text-lg md:text-2xl lg:max-w-[60%]">The Cullman Veteran Memorial is dedicated to honoring every person whose name is insribed on the Cullman Veteran Memorial in Cullman, AL.</p>
    </div>

    <div class="absolute bottom-20 bg-highlight p-1 px-3 rounded-md z-[1]">
        <p class="text-primary font-bold">{date}</p>
    </div>
</header>
