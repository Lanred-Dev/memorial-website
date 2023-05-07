<script lang="ts">
    //component props
    export let classes: string = "";
    export let placeholder: string = "";
    export let id: string = "";
    export let type: string = "string";
    export let value: any = "";
</script>

<input class="outline-none placeholder-slate-300 text-slate-50 bg-slate-700 {classes}" placeholder={placeholder} type={type} value={value} data-id={id} />
