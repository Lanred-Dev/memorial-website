<script lang="ts">
    //import the components
    import SearchBar from "$lib/search-bar.svelte";
    import PersonCard from "$lib/person-card.svelte";

    //contains the list of people
    export let data: { validSearch: boolean; people: Array<any> } = { validSearch: true, people: [] };
</script>

<section class="h-full">
    <header class="flex flex-col justify-center items-center gap-8 h-[40%] px-5 py-[15%] md:py-10">
        <h1 class="text-5xl">Search</h1>
        <SearchBar classes="w-[80%]" />
    </header>

    <div class="h-full pt-[15%] md:pt-10 bg-zinc-900">
        {#if data.validSearch === true}
            <ul class="flex flex-wrap justify-center items-start gap-8">
                {#each data.people as person}
                    <PersonCard {person} />
                {/each}
            </ul>
        {:else}
            <div>
                <h2>invalid seach</h2>
                <p>your search pararmeters seem to be invalid, maybe try some different ones?</p>
            </div>
        {/if}
    </div>
</section>