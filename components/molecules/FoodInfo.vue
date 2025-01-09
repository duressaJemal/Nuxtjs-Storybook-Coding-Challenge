<template>
  <div>
    <Chip :text="category" />
    <Description :text="description" :size="descriptionSize" />

  </div>
</template>

<script setup>

const props = defineProps({
  category: { type: String, required: true },
  description: { type: String, required: true },
  descriptionSize: { type: String, default: 'md' },
});

onMounted(() => {
  console.log('Category:', props.category);
  console.log('Description:', props.description);
});
</script>
