<script lang="ts">
    //import components
    import Header from "$lib/pages/search/header.svelte";
    import List from "$lib/pages/search/list.svelte";

    export let data: any;
</script>

<Header />
<List {data} />
