<script lang="ts">
    //component props
    export let link: string | null = null;
    export let biggerHighlight: boolean = false;

    let classes = biggerHighlight == true ? "rounded-md bg-highlight px-2 font-bold text-primary" : "rounded-sm bg-highlight px-0.5 font-bold text-primary";
</script>

{#if link !== null}
    <a class={classes} href={link}>
        <slot />
    </a>
{:else}
    <span class={classes}>
        <slot />
    </span>
{/if}
