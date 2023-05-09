<script lang="ts">
    //import components
    import Highlight from "$lib/components/label/highlight.svelte";
</script>

<section class="bg-modal px-5 lg:px-20 py-20 gap-10 lg:gap-20 flex flex-col items-center justify-between text-light">
    <div class="w-[90%] lg:w-[50%] h-[16rem] md:h-[27rem] bg-backgroundSecondaryComplement rounded-lg overflow-hidden border-[3px] border-modalSecondary">
        <img class="object-cover" src="https://raw.githubusercontent.com/Lanred-Dev/memorial-website/Interactive-Map-Test/Vietnam_Test_Map.jpg" alt="memorial" />
    </div>

    <header class="w-[90%] lg:w-[50%]">
        <p class="text-base md:text-xl text-center">
            <Highlight>The Cullman Veteran Memorial</Highlight> is a powerful and moving tribute to the brave men and women who have served their country. Located in <Highlight>Cullman, Alabama</Highlight>, the memorial features a <Highlight>granite wall with the names of every individual from Alabama</Highlight> who has served in the military during the <Highlight>Vietnam War</Highlight>, along with several monuments and beautifully landscaped grounds.<br /><br />The memorial is a place of reflection and honor, providing a space for veterans, their families, and the community to pay their respects and remember those who have served and sacrificed for our nation. The Cullman Veteran Memorial is a testament to the unwavering dedication and bravery of our service members and a reminder of the debt of gratitude we owe them for their service to our country.
        </p>
    </header>
</section>
