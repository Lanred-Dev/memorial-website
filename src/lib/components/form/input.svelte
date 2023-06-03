<script lang="ts">
    //component props
    export let classes: string = "";
    export let placeholder: string = "";
    export let id: string = "";
    export let type: string = "string";
    export let value: any = "";

    import { onMount } from "svelte";
    let input: HTMLInputElement;
    let clearButton: HTMLButtonElement;

    function clear() {
        input.value = "";
        toggleClearButton(false);
    }

    function toggleClearButton(enabled: boolean) {
        if (enabled === true) {
            clearButton.style.display = "block";
        } else if (enabled === false) {
            clearButton.style.display = "none";
        }
    }

    function focus() {
        if (input.value.length === 0) return toggleClearButton(false);

        toggleClearButton(true);
    }

    function unfocus() {
        toggleClearButton(false);
    }

    onMount(unfocus);
</script>

<div class="relative {classes}">
    <button class="absolute right-2 top-1/2 z-[1] aspect-square h-[60%] -translate-y-1/2" on:click|preventDefault={clear} bind:this={clearButton} type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-[#F5F5F5]"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" /></svg>
    </button>

    <input class="w-full bg-transparent placeholder-[#F5F5F5] outline-none" {placeholder} {type} {value} data-id={id} bind:this={input} on:focusin={focus} on:keyup={focus} />
</div>
