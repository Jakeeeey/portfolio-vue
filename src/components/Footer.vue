<script setup>
import FooterWidget1 from "./FooterWidget1.vue";
import FooterWidget2 from "./FooterWidget2.vue";
import FooterWidget3 from "./FooterWidget3.vue";
import FooterWidget4 from "./FooterWidget4.vue";
</script>

<template>
  <footer class="bg-gray-950">
    <div class="container mx-auto">
        <div class="py-10 flex flex-col xl:flex-row text-white max-xl:gap-8">
            <FooterWidget1 />

            <div class="flex flex-col xl:flex-row text-white gap-8 xl:gap-28">
                <FooterWidget2 />
                <FooterWidget3 />
                <FooterWidget4 />
            </div>
        </div>
      <hr class="border-gray-500" />
      <div class="text-center py-5 text-white">
        <p>
          &copy; 2025 <span class="text-sky-500">Jake Dave De Guzman</span> Portfolio. All Rights
          Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
