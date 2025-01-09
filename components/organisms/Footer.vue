<template>
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p class="space-x-2 text-center md:text-left">
          <span>&copy;</span>
          <span>{{ currentYear }}</span>
          <span>{{ footerText }}</span>
        </p>
        <p class="space-x-5 text-center md:text-right">
          <a v-for="(link, index) in links" :key="index" :href="link.href" class="hover:text-yellow-400 transition-colors">
            {{ link.text }}
          </a>
        </p>
      </div>
    </footer>
  </template>

  <script setup>
  const props = defineProps({
    footerText: {
      type: String,
      default: 'Foodie. All rights reserved.',
    },
    links: {
      type: Array,
      default: () => [
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms of Service', href: '/terms' },
      ],
    },
    currentYear: {
      type: Number,
      default: new Date().getFullYear(),
    },
  });
  </script>