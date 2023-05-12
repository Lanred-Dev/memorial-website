<script lang="ts">
    //import components
    import SearchBar from "$lib/components/search-bar.svelte";
</script>

<header class="bg-backgroundSecondary flex flex-col justify-center items-center gap-8 h-[70vh] px-5 py-[15%] md:py-10">
    <h1 class="text-4xl md:text-6xl">Search</h1>
    <SearchBar classes="w-[80%]" simpleSearch={false} />
</header>
