<template>
    <div class="flex flex-col h-64 rounded-2xl overflow-hidden bg-base-300 shadow-xl " id="testimonial">
        <div class="flex justify-between gap-2 sm:gap-0 items-center width-full h-[4rem] bg-base-content border-b-2 border-base-300 px-2 sm:px-4 py-2">
            <div class="avatar">
                <div class="w-11 rounded-full">
                    <img :src="`${ imageSrc }`" />
                </div>
            </div>
            <h1 class="text-md font-bold sm:font-normal sm:text-xl text-[#B3AE98] max-w-auto">{{ name }}</h1>
        </div>
        <div class="flex flex-col justify-between px-4 py-2 h-[12rem]">
            <p class="text-2xl">{{ testimonialText }}</p>
            <p v-if="$device.isDesktop" class="self-end text-lg">{{ timeSince }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'name',
            'timeSince',
            'testimonialText',
            'imageSrc',
        ],
    }
</script>