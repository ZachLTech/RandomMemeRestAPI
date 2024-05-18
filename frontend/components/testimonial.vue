<template>
    <div class="flex flex-col h-64 rounded-2xl overflow-hidden bg-base-300 shadow-xl" id="testimonial">
        <div class="flex justify-between items-center width-full h-[4rem] bg-base-content border-b-2 border-base-300 px-4 py-2">
            <div class="avatar">
                <div class="w-11 rounded-full">
                    <img :src="`${ imageSrc }`" />
                </div>
            </div>
            <h1 class="text-xl text-[#B3AE98] max-w-auto">{{ name }}</h1>
        </div>
        <div class="flex flex-col justify-between px-4 py-2 h-[12rem]">
            <p class="text-2xl">{{ testimonialText }}</p>
            <p class="self-end text-lg">{{ timeSince }}</p>
        </div>
    </div>
</template>

<style scoped>
    #testimonial{
        width: v-bind(width);
    }
</style>

<script>
    export default {
        props: [
            'width',
            'name',
            'timeSince',
            'testimonialText',
            'imageSrc',
        ],
    }
</script>