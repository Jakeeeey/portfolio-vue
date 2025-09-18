<script setup>
import taxstorelakemba from "@/assets/images/TaxStoreLakemba.png";
</script>

<template>
  <MotionGroup preset="fadeVisible" :duration="1000">
    <section id="projects" class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Section Title -->
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Featured Projects
          </h2>
          <p class="mt-4 text-lg text-gray-600">
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
              src="https://via.placeholder.com/600x400"
              alt="Project Screenshot"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Project One</h3>
              <p class="mt-3 text-gray-600">
                A web application built with Laravel & Vue.js that manages payroll for
                small businesses.
              </p>
              <div class="mt-4 flex gap-4">
                <a href="#" class="text-blue-600 hover:underline">View Demo</a>
                <a href="#" class="text-gray-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project Card -->
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              :src="taxstorelakemba"
              alt="Project Screenshot"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Tax Store Lakemba</h3>
              <p class="mt-3 text-gray-600">
                Custom WordPress website developed for an accounting firm with full CMS
                integration.
              </p>
              <div class="mt-4 flex gap-4">
                <a
                  href="https://taxstorelakemba.com.au/"
                  target="_blank"
                  class="text-blue-600 hover:underline"
                  >View Demo</a
                >
                <a href="#" class="text-gray-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project Card -->
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src="https://via.placeholder.com/600x400"
              alt="Project Screenshot"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Project Three</h3>
              <p class="mt-3 text-gray-600">
                A responsive Vue.js task manager app that helps users organize tasks and
                track progress.
              </p>
              <div class="mt-4 flex gap-4">
                <a href="#" class="text-blue-600 hover:underline">View Demo</a>
                <a href="#" class="text-gray-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MotionGroup>
</template>
