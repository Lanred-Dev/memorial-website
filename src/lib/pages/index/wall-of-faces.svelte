<script lang="ts">
    //import components
    import PersonList from "$lib/components/container/person-list.svelte";
    import ArrowButton from "./arrow-button.svelte";

    import { onMount, onDestroy } from "svelte";
    let people: Array<any> = [];
    let container: HTMLDivElement;
    let scrollContainer: HTMLDivElement;
    let scrollPosition: number = 0;

    async function fetchPeople(start: number, end: number) {
        try {
            const response = await fetch(`/search/fetch?start=${start}&end=${end}`).then((response) => response.json());
            return response;
        } catch (error) {
            console.error("Error fetching people:", error);
            return [];
        }
    }

    function scroll(amount: number) {
        let targetPosition: number = scrollPosition + amount;

        if (targetPosition >= 0) {
            targetPosition = 0;
        } else if (targetPosition <= -scrollContainer.clientWidth) {
            targetPosition = -(scrollContainer.clientWidth - (150));
        }

        scrollPosition = targetPosition;
        scrollContainer.style.left = `${scrollPosition}px`;
    }

    function scrollLeft() {
        scroll(container.clientWidth - 150);
    }

    function scrollRight() {
        scroll(-(container.clientWidth - 150));
    }

    onMount(async () => {
        people = await fetchPeople(0, 25);
        scrollContainer.style.left = "0px";
    });
</script>

<div class="bg-backgroundSecondary w-full h-[80vh] relative">
    <ArrowButton classes="left-10" click={scrollLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="rgba(0,0,0,1)" /></svg>
    </ArrowButton>

    <ArrowButton classes="right-10" click={scrollRight}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="rgba(0,0,0,1)" /></svg>
    </ArrowButton>

    <div class="h-full px-32 py-24" bind:this={container}>
        <div class="h-full w-fit flex flex-col justify-center items-start gap-10 transition-[left] duration-300 relative" bind:this={scrollContainer}>
            {#each Array(3) as _, rowIndex}
                <PersonList classes="w-fit flex-nowrap" people={people.slice(rowIndex * Math.floor(people.length / 3), rowIndex * Math.floor(people.length / 3) + Math.floor(people.length / 3))} compactCards={true} />
            {/each}
        </div>
    </div>
</div>
