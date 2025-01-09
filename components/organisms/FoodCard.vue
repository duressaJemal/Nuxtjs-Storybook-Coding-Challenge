<template>
  <div class="food-card border rounded-lg shadow hover:shadow-lg transition p-4 hover:cursor-pointer">
    <!-- Default Variant -->
    <div v-if="variant === 'default'">
      <Image :src="food.strCategoryThumb" :alt="food.strCategory" imgClass="w-full h-48 object-cover mb-4" />
      <FoodInfo :category="food.strCategory" :description="food.strCategoryDescription" />
    </div>

    <!-- Horizontal Variant -->
    <div v-else-if="variant === 'horizontal'" class="flex">
      <Image :src="food.strCategoryThumb" :alt="food.strCategory" imgClass="w-32 h-32 object-cover mr-4" />
      <FoodInfo :category="food.strCategory" :description="food.strCategoryDescription" titleSize="md" />
    </div>

    <!-- Fallback to Default Variant -->
    <div v-else>
      <Image :src="food.strCategoryThumb" :alt="food.strCategory" imgClass="w-full h-48 object-cover mb-4" />
      <FoodInfo :category="food.strCategory" :description="food.strCategoryDescription" />
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  food: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    default: 'default', // Options: 'default', 'horizontal'
  },
});

// Log the image URL when the component is mounted
onMounted(() => {
  console.log('The food is:', props.food);
});
</script>
