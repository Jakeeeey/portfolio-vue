<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="w-20 flex flex-col space-y-2">
    <h1 class="text-2xl text-gray-400">Menu</h1>
    <RouterLink
      to="/"
      class="text-lg border-b border-gray-400 transition duration-150 ease-in-out transform hover:scale-105 hover:text-primary inline-flex items-center space-x-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-3 inline"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
      Home
    </RouterLink>
    <RouterLink
      to="/about"
      class="text-lg border-b border-gray-400 transition duration-150 ease-in-out transform hover:scale-105 hover:text-primary inline-flex items-center space-x-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-3 inline"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
      About
    </RouterLink>
    <RouterLink
      to="/skills"
      class="text-lg border-b border-gray-400 transition duration-150 ease-in-out transform hover:scale-105 hover:text-primary inline-flex items-center space-x-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-3 inline"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
      Skills
    </RouterLink>
    <RouterLink
      to="/portfolio"
      class="text-lg border-b border-gray-400 transition duration-150 ease-in-out transform hover:scale-105 hover:text-primary inline-flex items-center space-x-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-3 inline"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
      Portfolio
    </RouterLink>
    <RouterLink
      to="/contact"
      class="text-lg border-b border-gray-400 transition duration-150 ease-in-out transform hover:scale-105 hover:text-primary inline-flex items-center space-x-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-3 inline"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
      Contact
    </RouterLink>
  </div>
</template>
