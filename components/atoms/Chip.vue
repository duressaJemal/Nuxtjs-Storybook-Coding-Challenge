<template>
  <span :class="chipClass">
    {{ text }}
  </span>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  color: { type: String, default: 'gray' }, // Optional color theme
});

const chipClass = computed(() => {
  const colors = {
    gray: 'bg-gray-200 text-gray-800',
    blue: 'bg-blue-200 text-blue-800',
    green: 'bg-green-200 text-green-800',
    red: 'bg-red-200 text-red-800',
    yellow: 'bg-yellow-200 text-yellow-800',
  };
  return `${colors[props.color]} px-3 py-1 text-sm font-medium rounded-full shadow-sm inline-block`;
});
</script>
