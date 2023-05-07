<script lang="ts">
    //import components
    import SearchBar from "$lib/search-bar.svelte";
    import PersonList from "$lib/person-list.svelte";

    //contains the list of people
    export let data: { people: Array<any> } = { people: [] };
</script>

<svelte:head>
    <title>Cullman Veteran Memorial</title>
</svelte:head>

<section class="h-full">
    <header class="h-[75vh] lg:h-[60vh] flex flex-col justify-center items-center gap-8 px-5 py-[15%] md:py-10">
        <div class="flex flex-col items-center gap-4">
            <h1 class="text-4xl md:text-6xl">Cullman Veteran Memorial</h1>
            <p class="text-lg md:text-2xl lg:max-w-[60%]">The Cullman Veteran Memorial is dedicated to honoring every person whose name is insribed on the Cullman Veteran Memorial in Cullman, AL.</p>
        </div>

        <SearchBar classes="w-[80%]" simpleSearch={true} />
    </header>

    <div class="h-full pt-10 bg-zinc-900">
        <PersonList people={data.people} compact={true} />
    </div>
</section>

<!--<section class="flex flex-col w-full h-full overflow-y-auto children:py-10 children:px-2.5 lg:children:px-[5%] children:w-[100%]">
    <header class="h-[75vh] lg:min-h-[40vh] flex flex-col justify-center items-center gap-8 lg:gap-24 lg:py-[5%]">
        <div class="flex flex-col items-center gap-4">
            <h1 class="text-4xl md:text-6xl">Cullman Veteran Memorial</h1>
            <p class="text-lg md:text-2xl lg:max-w-[60%]">The Cullman Veteran Memorial is dedicated to honoring every person whose name is insribed on the Cullman Veteran Memorial in Cullman, AL.</p>
        </div>

        <SearchBar classes="w-full px-[5%] lg:px-[15%]" simpleSearch={true} />
    </header>

    <div class="pt-12">
        <PersonList people={data.people} compact={true} />
    </div>
</section>-->