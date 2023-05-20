<script lang="ts">
    //component props
    export let person: any;
    export let compact: boolean = false;

    import { onMount } from "svelte";
    import { format } from "date-fns";

    //determine if we need to swap to compact mode due to screen size
    function determineCompact() {
        if (window.innerWidth <= 500) {
            compact = true;
        } else {
            compact = false;
        }
    }

    onMount(() => {
        //already compact no need for this then
        if (compact === true) return;

        window.addEventListener("resize", determineCompact);
    });
</script>

<li class="border-[3px] rounded-lg border-modalSecondary overflow-hidden {compact === false ? 'w-[100%] lg:w-[40%] h-36 bg-backgroundSecondaryComplement' : 'w-28 lg:w-36 aspect-square'}">
    <a class="w-full h-full flex" href="/person/">
        <img class="h-full group-hover:rounded-r-none" src={person.picture} alt={person.name} />

        {#if compact === false}
            <section class="w-full h-full px-7 p-5 text-left border-l-[2px] border-modalSecondary">
                <header class="mb-2">
                    <p class="text-lg">{person.name}</p>
                    <p class="text-sm text-secondary">{format(person.dob, "MM/dd/yyyy")} - {format(person.dod, "MM/dd/yyyy")}</p>
                </header>

                <p>{person.bio !== undefined ? person.bio : "This person has no bio."}</p>
            </section>
        {/if}
    </a>
</li>
