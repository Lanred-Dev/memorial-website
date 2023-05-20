<script lang="ts">
    //component props
    export let classes: string = "";
    export let click: any = () => {};
</script>

<button class="absolute z-[2] top-1/2 -translate-y-1/2 bg-highlight border-[3px] rounded-lg border-modalSecondary {classes}" on:click={click}>
    <div class="aspect-square p-2">
        <slot />
    </div>
</button>
