<script setup>
import { ref } from "vue";

const toggle = ref(false);
const toggleMenu = () => {
  toggle.value = !toggle.value;
  //alert(toggle.value)
};
</script>

<template>
  <div v-if="!toggle" class="sticky top-0 bg-gray-500 flex flex-row justify-between py-2 opacity-80 z-50">
    <button @click="toggleMenu" class="ms-5">
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
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </button>
    <img src="/src/assets/images/jake_logo.png" alt="" class="me-5 h-9">
  </div>

  <div v-if="toggle" class="sticky top-0 z-50">
    <div class="relative">
      <div class="w-52 min-h-screen bg-gray-200 opacity-95 absolute top-0 left-0">
        <div class="mb-5 flex flex-row justify-between px-4">
          <img src="/src/assets/images/logo.png" alt="" class="size-12" />
          <button @click="toggleMenu">
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
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>

        <div class="">
          <ul class="flex flex-col justify-center divide-y-2">
            <a href="#home" class="hover:bg-gray-500 py-3"
              ><span class="ms-5 font-medium">Home</span></a
            >
            <a href="#about" class="hover:bg-gray-500 py-3"
              ><span class="ms-5 font-medium">About</span></a
            >
            <a href="#services" class="hover:bg-gray-500 py-3"
              ><span class="ms-5 font-medium">Services</span></a
            >
            <a href="#works" class="hover:bg-gray-500 py-3"
              ><span class="ms-5 font-medium">Works</span></a
            >
          </ul>
        </div>
        <div class="mt-8 text-center">
          <a href="#contact" class="py-3 px-5 bg-blue-500 rounded-2xl font-medium text-white transition duration-150 ease-in-out transform hover:scale-105">Work With Me!</a>
        </div>
      </div>
    </div>
  </div>
</template>
