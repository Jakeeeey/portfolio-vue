<script setup>
import { ref } from "vue";
import logo from "@/assets/images/jake_logo_black.svg";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <!-- Navbar -->
  <nav
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 text-xl font-bold">
          <a href="#home">
            <img :src="logo" alt="Logo" class="w-32" />
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="#home" class="hover:text-blue-600 font-semibold">Home</a>
          <a href="#services" class="hover:text-blue-600 font-semibold">Services</a>
          <a href="#stack" class="hover:text-blue-600 font-semibold">Tech Stack</a>
          <a href="#projects" class="hover:text-blue-600 font-semibold">Projects</a>
          <a
            href="#contact"
            class="py-1.5 px-2 text-white rounded-lg bg-blue-500 hover:bg-blue-600"
            >Contact</a
          >
        </div>

        <!-- Mobile Hamburger -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="focus:outline-none">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="border-b border-gray-200">
        <div class="px-4 pt-2 pb-4 space-y-2">
          <a href="#home" class="p-3 block hover:bg-gray-300 rounded-sm">Home</a>
          <a href="#services" class="p-3 block hover:bg-gray-300 rounded-sm">Services</a>
          <a href="#stack" class="p-3 block hover:bg-gray-300 rounded-sm">Tech Stack</a>
          <a href="#projects" class="p-3 block hover:bg-gray-300 rounded-sm">Projects</a>
          <!-- <a href="#" class="p-3 block hover:bg-gray-300 rounded-sm">Contact</a> -->
          <a
            href="#contact"
            class="p-3 block bg-blue-500 text-center text-white rounded-sm"
            >Contact</a
          >
        </div>
      </div>
    </transition>
  </nav>
</template>
