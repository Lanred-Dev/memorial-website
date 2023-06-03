<script lang="ts">
    //import components
    import PersonList from "$lib/components/container/person-list.svelte";

    //component props
    export let data: { validSearch: boolean; isSearch: boolean; people: Array<any> } = { validSearch: true, isSearch: false, people: [] };
</script>

{#if data.isSearch == true}
    <div class="h-full bg-modal py-10">
        {#if data.validSearch === true}
            {#if data.people.length === 0}
                <div class="text-light">
                    <h2>no results</h2>
                    <p>maybe try some different ones?</p>
                </div>
            {:else}
                <PersonList people={data.people} />
            {/if}
        {:else}
            <div class="text-light">
                <h2>invalid seach</h2>
                <p>your search pararmeters seem to be invalid, maybe try some different ones?</p>
            </div>
        {/if}
    </div>
{/if}
