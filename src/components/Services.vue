<script setup></script>

<template>
  <MotionGroup preset="fadeVisible" :duration="1000">
    <section id="services" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Section Title -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Services I Offer</h2>
          <p class="mt-3 text-gray-600 text-sm md:text-base">
            From websites to web apps, I deliver solutions that bring your ideas to life.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Service Card -->
          <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-code-xml-icon lucide-code-xml size-8"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
              <h3 class="ml-3 text-xl font-semibold text-gray-800">
                Custom Website Development
              </h3>
            </div>
            <p class="text-gray-600 text-sm md:text-base">
              I build responsive and modern websites tailored to your business needs using
              PHP, Laravel, Vue.js, and MySQL.
            </p>
          </div>

          <!-- Service Card -->
          <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-layers-icon lucide-layers size-8"
              >
                <path
                  d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
                />
                <path
                  d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
                />
                <path
                  d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
                />
              </svg>
              <h3 class="ml-3 text-xl font-semibold text-gray-800">
                Frontend Development
              </h3>
            </div>
            <p class="text-gray-600 text-sm md:text-base">
              I create engaging, user-friendly, and mobile-optimized interfaces with clean
              code and smooth interactions.
            </p>
          </div>

          <!-- Service Card -->
          <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-cpu-icon lucide-cpu size-8"
              >
                <path d="M12 20v2" />
                <path d="M12 2v2" />
                <path d="M17 20v2" />
                <path d="M17 2v2" />
                <path d="M2 12h2" />
                <path d="M2 17h2" />
                <path d="M2 7h2" />
                <path d="M20 12h2" />
                <path d="M20 17h2" />
                <path d="M20 7h2" />
                <path d="M7 20v2" />
                <path d="M7 2v2" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="8" y="8" width="8" height="8" rx="1" />
              </svg>
              <h3 class="ml-3 text-xl font-semibold text-gray-800">
                Backend Development
              </h3>
            </div>
            <p class="text-gray-600 text-sm md:text-base">
              I develop secure and scalable backend systems, including user
              authentication, database management, and APIs.
            </p>
          </div>

          <!-- Service Card -->
          <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined size-8"
              >
                <path d="M12 16v5" />
                <path d="M16 14v7" />
                <path d="M20 10v11" />
                <path
                  d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
                />
                <path d="M4 18v3" />
                <path d="M8 14v7" />
              </svg>
              <h3 class="ml-3 text-xl font-semibold text-gray-800">
                WordPress Development
              </h3>
            </div>
            <p class="text-gray-600 text-sm md:text-base">
              From custom themes to plugin customization, I design and develop WordPress
              websites that are easy to manage.
            </p>
          </div>

          <!-- Service Card -->
          <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-atom-icon lucide-atom size-8"
              >
                <circle cx="12" cy="12" r="1" />
                <path
                  d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
                />
                <path
                  d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
                />
              </svg>
              <h3 class="ml-3 text-xl font-semibold text-gray-800">
                Website Optimization & Security
              </h3>
            </div>
            <p class="text-gray-600 text-sm md:text-base">
              I optimize website performance for speed and SEO, while ensuring protection
              against common security vulnerabilities.
            </p>
          </div>

          <!-- Service Card -->
          <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-bug-off-icon lucide-bug-off size-8"
              >
                <path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" />
                <path d="M14.12 3.88 16 2" />
                <path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" />
                <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
                <path d="m2 2 20 20" />
                <path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" />
                <path d="M12 20v-8" />
                <path d="M6 13H2" />
                <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
              </svg>
              <h3 class="ml-3 text-xl font-semibold text-gray-800">
                Maintenance & Support
              </h3>
            </div>
            <p class="text-gray-600 text-sm md:text-base">
              I provide ongoing website care—regular updates, bug fixes, backups, and
              technical support to keep everything running smoothly.
            </p>
          </div>

          <!-- Service Card -->
          <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-database-icon lucide-database size-8"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                <path d="M3 12A9 3 0 0 0 21 12" />
              </svg>
              <h3 class="ml-3 text-xl font-semibold text-gray-800">
                Database & Hosting Setup
              </h3>
            </div>
            <p class="text-gray-600 text-sm md:text-base">
              I set up hosting environments, manage databases, and ensure smooth
              deployment with proper configuration.
            </p>
          </div>
        </div>
      </div>
    </section>
  </MotionGroup>
</template>
