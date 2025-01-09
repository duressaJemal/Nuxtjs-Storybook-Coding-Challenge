<template>
    <header class="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo class="text-xl font-semibold text-gray-900">{{ logoText }}</Logo>
        <NavigationMenu :items="navItems" class="space-x-6" />
      </div>
    </header>
  </template>

  <script setup>
  const props = defineProps({
    logoText: { type: String, default: 'Foodie' },
    navItems: {
      type: Array,
      default: () => [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  });
  </script>