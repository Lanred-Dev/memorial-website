<script lang="ts">
    //import components
    import PersonCard from "$lib/components/container/person-card.svelte";

    //component props
    export let people: any;
    export let compact: boolean = false;
</script>

<ul class="flex flex-wrap justify-center items-start gap-10 px-10 lg:px-0">
    {#each people as person}
        <PersonCard {person} {compact} />
    {/each}
</ul>
