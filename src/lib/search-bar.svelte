<script lang="ts">
    //import components
    import RoundedRow from "./rounded-row.svelte";
    import Input from "./input.svelte";
    import Form from "./form.svelte";
    import FormSubmit from "./form-submit.svelte";

    //component props
    export let classes = "";

    //get the name input
    let showAdvancedSearch: boolean = false;
</script>

<div class="inline-block {classes}">
    <Form endpoint="search" inputs={[{ id: "name-input", queryID: "name" }]}>
        <RoundedRow classes="w-full text-xl mb-1">
            <Input classes="px-5 py-2 w-full" placeholder="name" id="name-input" />

            <FormSubmit classes={"w-[64px] h-[44px] flex justify-center items-center py-2.5 bg-[#bf0a30]"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-full aspect-square"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="rgba(255,255,255,1)" /></svg>
            </FormSubmit>
        </RoundedRow>
    </Form>

    <button
        class="ml-2 text-base text-left w-full"
        on:click={() => {
            showAdvancedSearch != showAdvancedSearch;
        }}>advanced search</button
    >
</div>
