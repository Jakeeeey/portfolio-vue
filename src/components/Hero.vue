<script setup>
import bg from "@/assets/images/background_image_code.mp4";
import profile from "@/assets/images/jake_profile.jpg";
import facebook from "@/assets/images/facebook.svg";
import whatsapp from "@/assets/images/whatsapp.svg";
import linkedin from "@/assets/images/linkedin.svg";
import github from "@/assets/images/github.svg";
</script>

<template>
  <section
    id="home"
    class="mt-[65px] flex justify-center bg-gradient-to-r from-blue-200 via-white to-blue-200 min-h-screen"
  >
    <MotionGroup preset="fadeVisible" :duration="1000">
      <div
        class="max-w-7xl px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-center gap-10 py-16"
      >
        <!-- Heading -->
        <div class="basis-1/2 flex flex-col justify-center max-lg:text-center lg:pe-20">
          <h3 class="text-5xl lg:text-7xl font-semibold mb-1">
            Hi, I'm
            <span class="text-blue-500">Jake</span>
          </h3>
          <h4 class="text-3xl lg:text-5xl font-semibold mb-3">Web Developer</h4>
          <p class="max-md:text-sm mb-3">
            Whether you’re starting from scratch or need help refining your ideas, I’m
            here to collaborate and deliver solutions that truly stand out. Let’s turn
            your vision into reality—reach out today!
          </p>

          <!-- Socials -->
          <div class="flex flex-row max-lg:justify-center gap-x-3 mt-2 mb-5">
            <a href="https://www.facebook.com/jakedave.deguzman.7/">
              <img :src="facebook" alt="" class="size-11 hover:scale-110" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=639510505308">
              <img :src="whatsapp" alt="" class="size-11 hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/jake-dave-de-guzman-6178a92bb/">
              <img :src="linkedin" alt="" class="size-11 hover:scale-110" />
            </a>
            <a href="https://github.com/Jakeeeey">
              <img :src="github" alt="" class="size-11 hover:scale-110" />
            </a>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col lg:flex-row gap-3 lg:gap-6">
            <a
              href="#contact"
              class="py-2 px-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
              >Get In Touch</a
            >
            <a
              href="#projects"
              class="py-2 px-3 border border-gray-400 rounded-lg bg-transparent hover:bg-gray-400 text-black"
              >View Projects</a
            >
          </div>
        </div>

        <!-- Picture -->
        <div class="basis-1/2 flex items-center justify-center lg:justify-end">
          <div
            class="size-[240px] md:size-[340px] lg:size-[500px] rounded-full border border-gray-300 overflow-hidden shadow-2xl"
          >
            <img
              :src="profile"
              alt=""
              class="-mt-32 md:-mt-36 lg:-mt-64 hover:scale-110 transition-all w-full"
            />
          </div>
        </div>
      </div>
    </MotionGroup>
  </section>
</template>
