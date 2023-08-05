<script lang="ts">
    //import components
    import Highlight from "$lib/components/label/highlight.svelte";
</script>

<section class="flex flex-col items-center justify-between gap-10 bg-modal px-5 py-20 text-light lg:gap-20 lg:px-20">
    <div class="h-[16rem] w-[90%] overflow-hidden rounded-lg border-[3px] border-modalSecondary bg-backgroundSecondaryComplement md:h-[27rem] lg:w-[50%]">
        <img class="object-fit" src="https://raw.githubusercontent.com/Lanred-Dev/memorial-website/Interactive-Map-Test/Vietnam_Test_Map.jpg" alt="memorial" />
    </div>

    <header class="w-[90%] lg:w-[50%]">
        <p class="text-center text-base md:text-xl">
            <Highlight>The Cullman Veteran Memorial</Highlight> is a powerful and moving tribute to the brave men and women who have served their country. Located in <Highlight link="https://www.google.com/maps/place/Cullman+Veterans+Memorial+Park/@34.192462,-86.8593861,21z/data=!4m6!3m5!1s0x8889cb831f53fec5:0xee84cc7c9d130c3a!8m2!3d34.1924137!4d-86.8593794!16s%2Fg%2F11cnxg27bs?entry=tts&shorturl=1">Cullman, Alabama</Highlight>, the memorial features a <Highlight>granite wall with the names of every individual from Alabama</Highlight> who has served in the military during the <Highlight>Vietnam War</Highlight>, along with several monuments and beautifully landscaped grounds.<br /><br />The memorial is a place of reflection and honor, providing a space for veterans, their families, and the community to pay their respects and remember those who have served and sacrificed for our nation. The Cullman Veteran Memorial is a testament to the unwavering dedication and bravery of our service members and a reminder of the debt of gratitude we owe them for their service to our country.
        </p>
    </header>
</section>
