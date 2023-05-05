<script lang="ts">
    //import the components
    import SearchBar from "$lib/search-bar.svelte";
    import PersonCard from "$lib/person-card.svelte";

    //contains the list of people
    export let data: { people: Array<any> } = { people: [] };
</script>

<svelte:head>
    <title>Cullman Veteran Memorial</title>
</svelte:head>

<section class="flex flex-col lg:flex-row lg:justify-between w-full h-full children:py-10 children:px-2.5 lg:children:px-[5%] children:w-[100%] lg:children:w-[50%] children:h-full">
    <!--left container-->
    <header class="flex flex-col justify-start items-center gap-8 lg:gap-24 lg:py-[5%] pb-5 lg:pb-0">
        <!--title container-->
        <div class="flex flex-col items-center gap-4">
            <h1 class="text-4xl md:text-6xl">Cullman Veteran Memorial</h1>
            <p class="text-lg md:text-2xl">The Cullman Veteran Memorial is dedicated to honoring every person whose name is insribed on the Cullman Veteran Memorial in Cullman, AL.</p>
        </div>

        <SearchBar classes="w-full px-[5%] lg:px-[15%]" />
    </header>

    <!--right container-->
    <div class="pt-12 bg-slate-900">
        <ul class="flex flex-wrap justify-center items-start gap-8">
            {#each data.people as person}
                <PersonCard {person} />
            {/each}
        </ul>
    </div>
</section>
