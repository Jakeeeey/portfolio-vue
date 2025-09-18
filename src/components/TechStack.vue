<script setup>
import javascript from "@/assets/images/javascript.svg";
import vue from "@/assets/images/vue-js.svg";
import tailwind from "@/assets/images/tailwind.svg";
import bootstrap from "@/assets/images/bootstrap.svg";
import php from "@/assets/images/php.png";
import laravel from "@/assets/images/laravel.png";
import inertia from "@/assets/images/inertia-js.png";
import vite from "@/assets/images/vite.svg";
import mysql from "@/assets/images/mysql.svg";
import wordpress from "@/assets/images/wordpress.svg";
</script>
<template>
  <section id="stack" class="py-16 flex justify-center items-center">
    <MotionGroup preset="slideVisibleRight" :duration="1000">
      <div
        class="max-w-7xl px-6 lg:px-8 flex flex-col justify-center items-center flex-wrap"
      >
        <div class="text-center mb-16 space-y-2">
          <h3 class="text-3xl font-bold text-gray-800">Technological Stack</h3>
          <h5 class="text-xl text-gray-600">
            Tools and Frameworks I use to create quality website.
          </h5>
        </div>
        <div class="flex flex-row flex-wrap justify-center gap-8">
          <div class="flex flex-col justify-center items-center">
            <img
              :src="javascript"
              alt=""
              class="size-24 p-2 border border-gray-200 shadow-xs shadow-gray-500 rounded-md"
            />
            <p class="text-center mt-1">JavaScript</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              :src="vue"
              alt=""
              class="size-24 p-2 border border-gray-200 shadow-xs shadow-gray-500 rounded-md"
            />
            <p class="text-center mt-1">Vue JS</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              :src="tailwind"
              alt=""
              class="size-24 p-2 border border-gray-200 shadow-xs shadow-gray-500 rounded-md"
            />
            <p class="text-center mt-1">Tailwind CSS</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              :src="bootstrap"
              alt=""
              class="size-24 p-2 border border-gray-200 shadow-xs shadow-gray-500 rounded-md"
            />
            <p class="text-center mt-1">Bootstrap</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              :src="php"
              alt=""
              class="size-24 p-2 border border-gray-200 shadow-xs shadow-gray-500 rounded-md"
            />
            <p class="text-center mt-1">PHP</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              :src="laravel"
              alt=""
              class="size-24 p-2 border border-gray-200 shadow-xs shadow-gray-500 rounded-md"
            />
            <p class="text-center mt-1">Laravel</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              :src="inertia"
              alt=""
              class="size-24 p-2 border border-gray-200 shadow-xs shadow-gray-500 rounded-md"
            />
            <p class="text-center mt-1">Inertia JS</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              :src="vite"
              alt=""
              class="size-24 p-2 border border-gray-200 shadow-xs shadow-gray-500 rounded-md"
            />
            <p class="text-center mt-1">Vite</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              :src="mysql"
              alt=""
              class="size-24 p-2 border border-gray-200 shadow-xs shadow-gray-500 rounded-md"
            />
            <p class="text-center mt-1">MySQL</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img
              :src="wordpress"
              alt=""
              class="size-24 p-2 border border-gray-200 shadow-xs shadow-gray-500 rounded-md"
            />
            <p class="text-center mt-1">WordPress</p>
          </div>
        </div>
      </div>
    </MotionGroup>
  </section>
</template>
