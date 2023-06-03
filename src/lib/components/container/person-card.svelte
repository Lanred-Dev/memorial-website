<script lang="ts">
    //component props
    export let person: any;
    export let compact: boolean = false;

    import { onMount } from "svelte";
    import { format } from "date-fns";

    //determine if we need to swap to compact mode due to screen size
    function determineCompact() {
        if (window.innerWidth <= 650) {
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

<li class="overflow-hidden rounded-lg border-[3px] border-modalSecondary {compact === false ? 'h-36 w-[100%] bg-backgroundSecondaryComplement lg:w-[40%]' : 'aspect-square w-28 lg:w-36'}">
    <a class="flex h-full w-full" href="/person/">
        <img class="h-full group-hover:rounded-r-none" src={person.picture} alt={person.name} />

        {#if compact === false}
            <section class="h-full w-full border-l-[2px] border-modalSecondary p-5 px-7 text-left">
                <header class="mb-2">
                    <p class="text-lg">{person.name}</p>
                    <p class="text-sm text-secondary">{format(person.dob, "MM/dd/yyyy")} - {format(person.dod, "MM/dd/yyyy")}</p>
                </header>

                <p>{person.bio !== undefined ? person.bio : "This person has no bio."}</p>
            </section>
        {/if}
    </a>
</li>
