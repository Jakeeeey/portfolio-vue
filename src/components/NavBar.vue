<script setup>
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/jake_logo_black.svg'

const home = "https://google.com"
</script>

<template>
    <div>
        <nav class="bg-white py-2">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse ms-3">
                
                <img :src="logo" class="h-11" alt="Jake Dave Logo" />
                
            </RouterLink>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <RouterLink to="/contact"
                    class="font-medium py-2 px-5 bg-primary hover:bg-hover text-center text-white rounded-lg transition duration-150 ease-in-out transform hover:scale-110">
                    Contact Me!
                </RouterLink>
                <button data-collapse-toggle="navbar-cta" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul
                    class="flex md:items-center flex-col max-md:divide-y font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-bg md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                    <li class="group inline-block relative max-md:hover:bg-hover">
                        <RouterLink to="/"
                            class="py-2 px-3 md:p-3 max-md:w-full inline-block text-lg font-semibold text-gray-800 max-md:group-hover:text-white md:group-hover:text-primary">
                            Home
                            <span
                                class="max-md:hidden absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300 ease-in-out">
                            </span>
                        </RouterLink>
                    </li>
                    <li class="group inline-block relative max-md:hover:bg-hover">
                        <RouterLink to="/about"
                            class="py-2 px-3 md:p-3 max-md:w-full inline-block text-lg font-semibold text-gray-800 max-md:group-hover:text-white md:group-hover:text-primary">
                            About
                            <span
                                class="max-md:hidden absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300 ease-in-out">
                            </span>
                        </RouterLink>
                    </li>
                    <!-- <li class="group inline-block relative max-md:hover:bg-hover">
                        <RouterLink to="/skills"
                            class="py-2 px-3 md:p-3 max-md:w-full inline-block text-lg font-semibold text-gray-800 max-md:group-hover:text-white md:group-hover:text-primary">
                            Skills
                            <span
                                class="max-md:hidden absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300 ease-in-out">
                            </span>
                        </RouterLink>
                    </li>
                    <li class="group inline-block relative max-md:hover:bg-hover">
                        <RouterLink to="/portfolio"
                            class="py-2 px-3 md:p-3 max-md:w-full inline-block text-lg font-semibold text-gray-800 max-md:group-hover:text-white md:group-hover:text-primary">
                            Portfolio
                            <span
                                class="max-md:hidden absolute left-0 bottom-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300 ease-in-out">
                            </span>
                        </RouterLink>
                    </li> -->
                </ul>
            </div>
            </div>
        </nav>
        <hr class="border border-blue-500">
    </div>
</template>