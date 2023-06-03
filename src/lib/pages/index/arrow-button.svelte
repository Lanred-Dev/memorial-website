<script lang="ts">
    //component props
    export let classes: string = "";
    export let click: any = () => {};
</script>

<button class="absolute top-1/2 z-[2] -translate-y-1/2 rounded-lg border-[3px] border-modalSecondary bg-highlight {classes}" on:click={click}>
    <div class="aspect-square p-2">
        <slot />
    </div>
</button>
