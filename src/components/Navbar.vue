<script setup>
import logo from "@/assets/images/jake_logo.png";
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white">
    <div class="container mx-auto flex flex-wrap py-2 items-center justify-between">
      <div>
        <img :src="logo" alt="" />
      </div>
      <div class="max-md:hidden">
        <ul class="flex flex-row space-x-10">
          <li><a href="#hero" class="text-xl font-medium">Home</a></li>
          <li><a href="#about" class="text-xl font-medium">About</a></li>
          <li><a href="#services" class="text-xl font-medium">Services</a></li>
          <li><a href="#works" class="text-xl font-medium">Works</a></li>
        </ul>
      </div>
      <a href="#contact" class="py-3 px-5 bg-blue-500 rounded-xl font-medium text-white max-md:hidden hover:bg-blue-700 transition duration-150 ease-in-out transform hover:scale-110">Connect With Me!</a>
      <button class="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>
