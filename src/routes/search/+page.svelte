<script lang="ts">
    //import components
    import SearchBar from "$lib/search-bar.svelte";
    import PersonList from "$lib/person-list.svelte";

    export let data: { validSearch: boolean; people: Array<any> } = { validSearch: true, people: [] };
</script>

<section class="h-auto min-h-full overflow-auto bg-modal">
    <header class="bg-backgroundSecondary flex flex-col justify-center items-center gap-8 h-[70vh] px-5 py-[15%] md:py-10">
        <h1 class="text-4xl md:text-6xl">Search</h1>
        <SearchBar classes="w-[80%]" simpleSearch={false} />
    </header>

    <div class="h-full py-10 bg-modal">
        {#if data.validSearch === true}
            <PersonList people={data.people} />
        {:else}
            <div class="text-light">
                <h2>invalid seach</h2>
                <p>your search pararmeters seem to be invalid, maybe try some different ones?</p>
            </div>
        {/if}
    </div>
</section>
