<script lang="ts">
    //import components
    import Footer from "$lib/components/footer.svelte";
    import "$lib/tailwind.css";

    import { onMount } from "svelte";

    let heightScreenElements: HTMLElement[];

    //fixes bug on IOS where the viewport space is bigger than the innerHeight
    function updateHeightElements() {
        heightScreenElements = Array.from(document.querySelectorAll(".h-screen") as unknown as HTMLCollectionOf<HTMLElement>);
        heightScreenElements.forEach((element: HTMLElement) => {
            element.style.height = `${window.innerHeight}px`;
        });
    }

    onMount(() => {
        updateHeightElements();

        //update the height whenever the window is resized
        window.addEventListener("resize", updateHeightElements);
    });
</script>

<svelte:head>
    <title>Cullman Veteran Memorial</title>
</svelte:head>

<main class="w-full h-auto overflow-hidden select-text font-salmaPro text-center text-primary">
    <slot />
</main>

<Footer />
