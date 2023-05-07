<script lang="ts">
    //import the tailwind file for CSS
    import "$lib/tailwind.css";

    import { onMount } from "svelte";

    let heightScreenElements: HTMLElement[];

    //fixes bug on IOS where the viewport space is bigger than the innerHeight
    function resizeContent(heightFulls: HTMLElement[]) {
        heightFulls.forEach((element: HTMLElement) => {
            element.style.height = `${window.innerHeight}px`;
        });
    }

    function updateHeightElements() {
        heightScreenElements = Array.from(document.querySelectorAll(".h-screen") as unknown as HTMLCollectionOf<HTMLElement>);
        resizeContent(heightScreenElements);
    }

    onMount(() => {
        updateHeightElements();

        //update the height whenever the window is resized
        window.addEventListener("resize", updateHeightElements);
    });
</script>

<main class="w-screen h-screen overflow-hidden select-text font-salmaPro text-center text-primary">
    <slot />
</main>
