<script setup>
import facebook from "@/assets/images/facebook.svg";
import whatsapp from "@/assets/images/whatsapp.svg";
import linkedin from "@/assets/images/linkedin.svg";
import github from "@/assets/images/github.svg";

</script>
<template>
    <div class="flex flex-col space-y-1 lg:space-y-2">
      <h1 class="text-xl lg:text-2xl text-gray-400">Connect</h1>
  
      <a
        href="https://www.facebook.com/jakedave.deguzman.7/"
        target="_blank"
        class="md:text-lg transition duration-150 ease-in-out md:hover:scale-95 md:hover:text-blue-500 inline-flex items-center space-x-2"
      >
        <img :src="facebook" alt="facebook" class="size-8 md:size-10">
        <span class="inline align-middle text-lg">Facebook</span>
      </a>
  
      <a
        href="https://api.whatsapp.com/send?phone=639510505308"
        target="_blank"
        class="md:text-lg transition duration-150 ease-in-out md:hover:scale-95 md:hover:text-blue-500 inline-flex items-center space-x-2"
      >
        <img :src="whatsapp" alt="facebook" class="size-8 md:size-10">
        <span class="inline align-middle text-lg">WhatsApp</span>
      </a>
  
      <a
        href="https://www.linkedin.com/in/jake-dave-de-guzman-6178a92bb/"
        target="_blank"
        class="text-lg transition duration-150 ease-in-out md:hover:scale-95 md:hover:text-blue-500 inline-flex items-center space-x-2"
      >
        <img :src="linkedin" alt="linkedin" class="size-8 md:size-10">
        <span class="inline align-middle text-md lg:text-lg">Linkedin</span>
      </a>

      <a
        href="https://github.com/Jakeeeey"
        target="_blank"
        class="text-lg transition duration-150 ease-in-out md:hover:scale-95 md:hover:text-blue-500 inline-flex items-center space-x-2 md:space-x-3"
      >
        <div class="md:ms-0.5 size-8 flex justify-center items-center rounded-full bg-gray-300">
            <img :src="github" alt="github" class="size-full">
        </div>
        <span class="inline align-middle text-md lg:text-lg">Github</span>
      </a>
    </div>
  </template>
  