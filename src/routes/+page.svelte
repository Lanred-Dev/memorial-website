<script lang="ts">
    //import components
    import Header from "$lib/pages/index/header.svelte";
    import About from "$lib/pages/index/about.svelte";
    import WallOfFaces from "$lib/pages/index/wall-of-faces.svelte";

    //contains the list of people
    export let data: { people: Array<any> } = { people: [] };
</script>

<svelte:head>
    <title>Cullman Veteran Memorial</title>
</svelte:head>

<Header />
<About />
<WallOfFaces />
