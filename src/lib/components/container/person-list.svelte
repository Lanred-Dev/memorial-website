<script lang="ts">
    //import components
    import PersonCard from "$lib/components/container/person-card.svelte";

    //component props
    export let people: any;
    export let compactCards: boolean = false;
    export let classes: string = "";

    import { twMerge } from "tailwind-merge";
</script>

<ul class={twMerge("flex flex-wrap justify-center items-start gap-10 px-10 lg:px-0", classes)}>
    {#each people as person}
        <PersonCard {person} compact={compactCards} />
    {/each}
</ul>
