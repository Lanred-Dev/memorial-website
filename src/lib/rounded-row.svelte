<script lang="ts">
    //component props
    export let classes: string = "";
    export let rounded: "md" | "lg" | "full" = "lg";

    //cant use tailwind as it wont detect it as a class so wont put the class in the css
    let roundSizes: { [key: string]: string } = {
        md: "0.375rem",
        ld: "0.5rem",
        full: "999999px",
    };
</script>

<div class="bg-slate-700 border-[3px] border-gray-600 flex overflow-hidden {classes}" style="border-radius: {roundSizes[rounded]};">
    <slot />
</div>
