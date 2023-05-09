<script lang="ts">
    //component props
    export let classes: string = "";
</script>

<button class={classes} type="submit">
    <slot />
</button>
