<script lang="ts">
    //component props
    export let classes: string = "";
    export let variable: boolean = false;

    function toggle() {
        variable = !variable;
    }
</script>

<button class={classes} on:click={toggle}><slot /></button>
