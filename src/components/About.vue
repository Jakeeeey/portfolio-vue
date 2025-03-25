<script setup>
import wency from "@/assets/images/wency.jpeg";
</script>

<template>
  <section class="py-24" id="about">
    <div class="container mx-auto">
      <h1 class="text-center text-4xl lg:text-5xl xl:text-6xl mb-16">About Me</h1>
      <div class="flex flex-col justify-center items-center lg:flex-row gap-10">
        <div class="basis-full lg:basis-1/4 xl:basis-1/6 max-md:hidden">
          <img :src="wency" alt="" class="w-xs mx-auto" />
        </div>
        <div class="basis-full lg:basis-3/4 space-y-8">
          <div>
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste cum
              sunt iure illum. Doloremque odit ad architecto quam aperiam molestias
              repellat, id ipsa reiciendis necessitatibus, dignissimos ex incidunt? Id?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident eum
              laboriosam iure rerum! Non excepturi omnis et nostrum unde dolor corrupti
              consequuntur, assumenda beatae eos dolorum quasi aut ab dolorem!
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-x-5">
              <p class="w-32">HTML & CSS</p>
              <div class="w-full h-3 border rounded-full overflow-hidden">
                <div class="w-[85%] h-full bg-blue-500"></div>
              </div>
            </div>
            <div class="flex items-center gap-x-5">
              <p class="w-32">JavaScript</p>
              <div class="w-full h-3 border rounded-full overflow-hidden">
                <div class="w-[50%] h-full bg-blue-500"></div>
              </div>
            </div>
            <div class="flex items-center gap-x-5">
              <p class="w-32">Vue JS</p>
              <div class="w-full h-3 border rounded-full overflow-hidden">
                <div class="w-[60%] h-full bg-blue-500"></div>
              </div>
            </div>
            <div class="flex items-center gap-x-5">
              <p class="w-32">PHP</p>
              <div class="w-full h-3 border rounded-full overflow-hidden">
                <div class="w-[50%] h-full bg-blue-500"></div>
              </div>
            </div>
            <div class="flex items-center gap-x-5">
              <p class="w-32">Laravel</p>
              <div class="w-full h-3 border rounded-full overflow-hidden">
                <div class="w-[70%] h-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
