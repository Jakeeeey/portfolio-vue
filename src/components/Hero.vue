<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import bg from '@/assets/images/background_image_code.mp4'
import CTA from './CTA.vue';

defineProps({
    heading: {
        type: String,
    },
    subHeading: {
        type: String,
    }
});

//const bg1 = bg
</script>

<template>
  <section class="flex flex-wrap justify-center items-center py-24 relative min-h-screen">
    <video :src="bg" autoplay loop muted
            class="object-cover blur-sm grayscale h-full absolute left-0 top-0"></video>
        <div class="container flex items-center py-5 flex-col-reverse xl:flex-row gap-20 z-50">
            <div class="basis-full xl:basis-1/2 space-y-7">
                <div>
                    <h2 class="text-4xl 2xl:text-5xl text-white">Hi, I'm <span class="text-primary">Jake De Guzman</span>,
                    </h2>
                    <h1 class="text-7xl 2xl:text-8xl text-white">Bringing Ideas to Life Through Code.</h1>
                </div>
                <p class="text-lg text-white">An aspiring web developer specializing in crafting user-friendly and
                    dynamic web
                    solutions.</p>
                <div class="flex justify-center items-center flex-col xl:flex-row gap-5 lg:gap-12">
                    <RouterLink to="#"
                        class="w-3/4 xl:w-1/4 py-3 font-medium px-5 border border-white rounded-lg text-center text-white hover:bg-gray-100 hover:text-gray-900 transition duration-150 ease-in-out transform hover:scale-110">Learn
                        More</RouterLink>
                    <RouterLink to="/contact"
                        class="w-3/4 xl:w-1/4 py-3 font-medium px-5 bg-primary text-center text-white rounded-lg transition duration-150 ease-in-out transform hover:scale-110">Contact
                        Me</RouterLink>
                </div>
            </div>
            <div class="basis-full xl:basis-1/2 flex flex-wrap justify-center">
                <div
                    class="justify-center size-80 xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-center bg-cover bg-no-repeat bg-[url('../assets/images/wency.jpeg')]">
                </div>
            </div>
        </div>
  </section>
</template>
