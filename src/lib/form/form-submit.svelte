<script lang="ts">
    export let classes: string = "";
</script>

<button class={classes} type="submit">
    <slot></slot>
</button>