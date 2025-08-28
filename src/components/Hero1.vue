<script setup>
import bg from "@/assets/images/background_image_code.mp4";
import profile from "@/assets/images/jake_profile.jpg";
import facebook from "@/assets/images/facebook.svg";
import linkedin from "@/assets/images/linkedin.svg";
import github from "@/assets/images/github.svg";
</script>

<template>
  <section
    class="mt-[65px] container min-h-screen flex flex-row justify-center gap-10 bg-red-200"
  >

    <!-- Heading -->
    <div class="border basis-3/4 flex flex-col justify-center p-20">
      <h3 class="text-7xl font-semibold">Hi, I'm Jake</h3>
      <h4 class="text-5xl font-semibold">Web Developer</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident blanditiis et
        quia voluptatum facere temporibus pariatur earum similique repellendus praesentium
        inventore, tempora enim asperiores quaerat necessitatibus ad ratione cum sint.
      </p>

      <!-- Socials -->
      <div class="flex flex-row gap-x-3">
        <a href="">
          <img :src="facebook" alt="" class="size-11 hover:scale-110">
        </a>
        <a href="">
          <img :src="linkedin" alt="" class="size-11 hover:scale-110">
        </a>
        <a href="">
          <img :src="github" alt="" class="size-11 hover:scale-110">
        </a>
      </div>
      
      <!-- CTA Buttons -->
      <div class="flex flex-row justify-center gap-6">
        <a href="" class="py-2 px-3 rounded-sm bg-blue-500 hover:bg-blue-600 text-white">Hire Me Now!</a>
        <a href="" class="py-2 px-3 border border-gray-400 rounded-sm bg-transparent hover:bg-gray-400 text-black">View Projects</a>
      </div>
    </div>

    <!-- Picture -->
    <div class="border basis-1/2 flex items-center">
      <div class="size-[500px] rounded-full overflow-hidden">
        <img :src="profile" alt="" class="-mt-80" />
      </div>
    </div>
  </section>
</template>
