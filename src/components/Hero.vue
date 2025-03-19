<script setup>
import { defineProps } from 'vue';
//import bg from '@assets/images/background_image_code.mp4'
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
  <div class="min-h-screen bg-sky-300 flex justify-center items-center">
    <div class="container flex flex-col md:flex-row justify-center items-center gap-10">
      <div class="basis-full flex flex-col justify-center items-center border border-red-400">
        <video src="../assets/images/background_image_code.mp4"></video>
        <h2 class="text-5xl">{{ heading }}</h2>
        <h4 class="text-2xl">{{ subHeading }}</h4>
        <div class="flex flex-col md:flex-row gap-5">
          <CTA name="Contact" classType="px-4 py-2 font-medium bg-sky-500 hover:bg-white hover:text-black text-red-500 rounded-md"/>
          <CTA name="Learn More" classType="px-4 py-2 font-medium hover:bg-white hover:text-black text-red-500 border rounded-md"/>
        </div>
      </div>
      <div class="basis-full flex justify-center items-center border border-red-400">
        <img class="size-96" src="../assets/images/wency.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>
