<script lang="ts">
    //import components
    import "$lib/tailwind.css";

    import { onMount } from "svelte";

    let heightScreenElements: HTMLElement[];
    let classRegex: RegExp = /(lg|sm|md)\:h\-/gm;
    let selectorRegex: RegExp = /(lg|sm|md)/gm;

    function checkIfSelectorMatch(element: HTMLElement): boolean {
        const classMatches: any = classRegex.exec(element.classList.toString());

        if (classMatches === null) return false;

        let result: boolean = false;

        classMatches.forEach((string: string) => {
            const selectorMatches: any = selectorRegex.exec(string);

            if (selectorMatches === null) {
                result = result === true ? true : false;
                return;
            }

            switch (selectorMatches[0]) {
                case "lg":
                    result = window.innerWidth > 1024;
                    break;
                case "md":
                    result = window.innerWidth > 768;
                    break;
                case "sm":
                    result = window.innerWidth > 640;
                    break;
            }
        });

        return result;
    }

    //fixes bug on IOS where the viewport space is bigger than the innerHeight
    function updateHeightElements() {
        heightScreenElements = Array.from(document.querySelectorAll(".h-screen") as unknown as HTMLCollectionOf<HTMLElement>);
        heightScreenElements.forEach((element: HTMLElement) => {
            const selectorMatch: boolean = checkIfSelectorMatch(element);

            if (selectorMatch === true) {
                element.style.height = null as any;
                return;
            };

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
