<script lang="ts">
    //component props
    export let classes: string = "";
    export let placeholder: string = "";
    export let id: string = "";
    export let type: string = "string";
</script>

<input class="outline-none placeholder-slate-300 text-slate-50 bg-transparent {classes}" placeholder={placeholder} type={type} data-id={id} />
