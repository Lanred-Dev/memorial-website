<script lang="ts">
    export let person: any;

    import { format } from "date-fns";
</script>

<li class="w-32 aspect-square relative group">
    <img class="w-full h-full rounded-md group-hover:rounded-r-none" src={person.picture} alt={person.name} />

    <section class="w-auto h-full bg-black absolute right-0 translate-x-full top-0 px-8 py-2 hidden flex-col justify-between items-start group-hover:flex z-[1] text-left whitespace-nowrap">
        <header>
            <p class="text-lg">{person.name}</p>
            <p class="text-sm">{format(person.born, "MM/dd/yyyy")} - {format(person.died, "MM/dd/yyyy")}</p>
        </header>

        <button class="px-4 py-2 rounded-md bg-[#bf0a30] text-base">see profile</button>
    </section>
</li>
