<script setup>
import bg from '@/assets/images/background_image_code.mp4'
</script>

<template>
  <section class="flex flex-wrap justify-center items-center py-24 relative min-h-screen" id="home">
    <video :src="bg" autoplay loop muted
            class="object-cover blur-sm grayscale h-full absolute left-0 top-0"></video>
        <div class="container flex items-center py-5 flex-col-reverse xl:flex-row gap-20 z-10">
            <div class="basis-full xl:basis-1/2 space-y-7 max-xl:text-center">
                <div>
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-white">Hi, I'm <span class="text-primary">Jake De Guzman</span>,
                    </h2>
                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white">Bringing Ideas to Life Through Code.</h1>
                </div>
                <p class="text-md sm:text-xl text-white">An aspiring web developer specializing in crafting user-friendly and
                    dynamic web
                    solutions.</p>
                <div class="flex justify-center items-center flex-col md:flex-row gap-5">
                    <a href="#contact"
                        class="w-52 py-3 font-medium bg-blue-500 text-center text-white rounded-lg transition duration-150 ease-in-out md:hover:scale-105">Connect With
                        Me!</a>
                    <a href="#"
                        class="w-52 py-3 font-medium border border-white rounded-lg text-center text-white hover:bg-gray-100 hover:text-gray-900 transition duration-150 ease-in-out md:hover:scale-105">My Resume</a>
                </div>
            </div>
            <div class="basis-full xl:basis-1/2 flex flex-wrap justify-center">
                <!-- <div
                    class="justify-center size-48 sm:size-60 xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-center bg-cover bg-no-repeat bg-[url('../assets/images/wency.jpeg')]">
                </div> -->
                <div
                    class="justify-center size-48 sm:size-60 xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-center bg-cover bg-no-repeat bg-[url('../assets/images/wency.jpeg')]">
                </div>
            </div>
        </div>
  </section>
</template>