<script lang="ts">
    //import components
    import PersonList from "$lib/components/container/person-list.svelte";

    //component props
    export let data: { people: Array<any> } = { people: [] };
</script>

<div class="bg-backgroundSecondary w-full h-[80vh]" />
