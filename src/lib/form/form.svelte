<script lang="ts">
    //component types
    type formInput = {
        id: string;
        queryID: string;
    };
    type formOption = {
        id: string;
        value: any;
    };

    //component props
    export let endpoint: string = "";
    export let inputs: formInput[] = [];

    import { goto } from "$app/navigation";

    let formElement: HTMLFormElement;

    //gets the options from the inputs and formats in the form of formOption
    function getOptionsFromInputs(): formOption[] {
        let options: formOption[] = [];

        //loop through the inputs
        inputs.forEach(({ id, queryID }: formInput) => {
            //get it from the form
            const element: HTMLInputElement = formElement.querySelector(`[data-id=${id}]`)!;

            if (element === null) return;

            //push it to the options
            options.push({
                id: queryID,
                value: element.value,
            });
        });

        return options;
    }

    //handles the form submission
    function handleSubmit() {
        let options: formOption[] = getOptionsFromInputs();
        let optionsQuery: string = "";

        //create the query
        options.forEach(({ id, value }: formOption) => {
            optionsQuery = `${optionsQuery.length === 0 ? "" : "&"}${id}=${value}`;
        });

        //redirect to the endpoint
        goto(`${endpoint}?${optionsQuery}`);
    }
</script>

<form on:submit|preventDefault={handleSubmit} bind:this={formElement}>
    <slot />
</form>
