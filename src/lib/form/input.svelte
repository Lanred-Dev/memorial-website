<script lang="ts">
    //component props
    export let classes: string = "";
    export let placeholder: string = "";
    export let id: string = "";
    export let type: string = "string";
    export let value: any = "";
</script>

<input class="outline-none placeholder-[#F5F5F5] {classes}" placeholder={placeholder} type={type} value={value} data-id={id} />
