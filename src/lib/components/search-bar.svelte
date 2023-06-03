<script lang="ts">
    //import components
    import ToggleButton from "$lib/components/button/toggle.svelte";
    import RoundedRow from "$lib/components/container/rounded-row.svelte";
    import Input from "$lib/components/form/input.svelte";
    import Form from "$lib/components/form/form.svelte";
    import FormSubmit from "$lib/components/form/form-submit.svelte";

    //component props
    export let classes: string = "";
    export let simpleSearch: boolean = true;

    import { page } from "$app/stores";
    let queryParams: URLSearchParams = null as any;
    const inputs: { id: string; queryID: string; placeholder: string }[] = [
        { id: "county-input", queryID: "county", placeholder: "county" },
        { id: "town-input", queryID: "town", placeholder: "town" },
        { id: "deathLocation-input", queryID: "deathLocation", placeholder: "casualty province" },
        { id: "dob-input", queryID: "dob", placeholder: "date of birth" },
        { id: "dod-input", queryID: "dod", placeholder: "date of death" },
    ];
    let showAdvancedSearch: boolean = !simpleSearch;

    function getValueFromQuery(queryID: string): any {
        if (queryParams === null) {
            queryParams = new URLSearchParams($page.url.searchParams);
        }

        return queryParams.get(queryID);
    }
</script>

<div class="inline-block {classes}">
    <Form
        classes="{showAdvancedSearch === false ? 'mb-3' : ''} text-light"
        endpoint="search"
        inputs={[{ id: "name-input", queryID: "name" }].concat(
            inputs.map(({ id, queryID }) => {
                return {
                    id,
                    queryID,
                };
            })
        )}
    >
        <RoundedRow classes="w-full text-xl border-[3px] border-modalSecondary bg-modal" rounded="full">
            <Input classes="px-5 py-2 w-full bg-transparent" placeholder="name" id="name-input" value={getValueFromQuery("name")} />

            <FormSubmit classes="w-[64px] h-[44px] flex justify-center items-center py-2.5 bg-accent">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="aspect-square h-full fill-white"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" /></svg>
            </FormSubmit>
        </RoundedRow>

        {#if showAdvancedSearch === true}
            <div class="mt-3 flex w-full flex-col justify-between gap-1.5 lg:gap-3 px-3 lg:flex-row lg:px-12">
                {#each inputs as input}
                    <Input classes="px-5 py-2 w-full rounded-full border-[3px] border-modalSecondary bg-modal text-sm md:text-base" placeholder={input.placeholder} id={input.id} value={getValueFromQuery(input.queryID)} />
                {/each}
            </div>
        {/if}
    </Form>

    {#if simpleSearch === true}
        <ToggleButton classes="ml-2 text-base text-left w-full" bind:variable={showAdvancedSearch}>{showAdvancedSearch === true ? "hide " : ""}advanced search</ToggleButton>
    {/if}
</div>
