<script setup>
import taxStoreLakemba from "@/assets/images/taxStoreLakemba";
import todolist from "@/assets/images/toDoList.png";
import calculator from "@/assets/images/calculator.png";
</script>

<template>
  <MotionGroup preset="fadeVisible" :duration="1000">
    <section id="projects" class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Section Title -->
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-800">
            Featured Projects
          </h2>
          <p class="mt-4 text-sm md:text-base text-gray-600">
            Here are some of the projects I’ve worked on recently.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Project Card -->
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              :src="todolist"
              alt="Project Screenshot"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">To-Do List App</h3>
              <p class="mt-3 text-gray-600 text-sm md:text-base">
                A Vue.js task manager that lets users add, edit, complete, and delete tasks in a clean and responsive interface.
              </p>
              <div class="mt-4 flex gap-4">
                <a href="https://to-do-list-vue-gilt.vercel.app/" target="_blank" class="text-blue-600 hover:underline text-sm md:text-base">View Demo</a>
                <a href="https://github.com/Jakeeeey/to-do-list-vue" target="_blank" class="text-gray-600 hover:underline text-sm md:text-base">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project Card -->
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              :src="TaxStoreLakemba"
              alt="Project Screenshot"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Tax Store Lakemba</h3>
              <p class="mt-3 text-gray-600 text-sm md:text-base">
                Custom WordPress website developed for an accounting firm with full CMS
                integration.
              </p>
              <div class="mt-4 flex gap-4">
                <a
                  href="https://taxstorelakemba.com.au/"
                  target="_blank"
                  class="text-blue-600 hover:underline text-sm md:text-base"
                  >View Demo</a
                >
                <a href="#" class="text-gray-600 hover:underline text-sm md:text-base">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project Card -->
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              :src="calculator"
              alt="Project Screenshot"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Calculator App</h3>
              <p class="mt-3 text-gray-600 text-sm md:text-base">
                A Vue.js application that performs basic arithmetic operations with a clean and responsive interface.
              </p>
              <div class="mt-4 flex gap-4">
                <a href="https://calculator-three-taupe-38.vercel.app/" target="_blank" class="text-blue-600 hover:underline text-sm md:text-base">View Demo</a>
                <a href="https://github.com/Jakeeeey/calculator-vue" target="_blank" class="text-gray-600 hover:underline text-sm md:text-base">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MotionGroup>
</template>
