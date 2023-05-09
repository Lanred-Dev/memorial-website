<script lang="ts">
    //component props
    export let person: any;
    export let compact: boolean = false;

    import { onMount } from "svelte";
    import { format } from "date-fns";

    let startingCompact: boolean = compact;

    onMount(() => {
        startingCompact = compact

        if (startingCompact === true) return;

        //update the height whenever the window is resized
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 500) {
                compact = true;
            } else {
                compact = false;
            }
        });
    });
</script>

{#if compact === false}
    <li class="w-[100%] lg:w-[40%] h-36 rounded-lg bg-slate-700 border-[3px] border-gray-600 flex overflow-hidden">
        <img class="h-full group-hover:rounded-r-none" src={person.picture} alt={person.name} />

        <!--info container-->
        <section class="w-full h-full px-10 py-5 text-left">
            <header class="mb-2">
                <p class="text-lg">{person.name}</p>
                <p class="text-sm text-gray-300">{format(person.dob, "MM/dd/yyyy")} - {format(person.dod, "MM/dd/yyyy")}</p>
            </header>

            <p>{person.name}</p>
        </section>
    </li>
{:else}
    <li class="w-28 lg:w-36 aspect-square rounded-lg overflow-hidden">
        <img class="h-full group-hover:rounded-r-none" src={person.picture} alt={person.name} />

        <!--info container-->
        <section class="w-full h-full px-10 py-5 text-left hidden">
            <header class="mb-2">
                <p class="text-lg">{person.name}</p>
                <p class="text-sm text-gray-300">{format(person.dob, "MM/dd/yyyy")} - {format(person.dod, "MM/dd/yyyy")}</p>
            </header>

            <p>{person.name}</p>
        </section>
    </li>
{/if}
