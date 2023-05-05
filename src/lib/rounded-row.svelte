<script lang="ts">
    //component props
    export let classes: string = "";
</script>

<div class="bg-slate-700 border-[3px] border-gray-600 flex rounded-lg overflow-hidden {classes}">
    <slot />
</div>
