<template>
  <div class="container mx-auto p-4">
    <FeaturedFoods />
    <CategoryFilter v-model="selectedCategory" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <FoodCard v-for="food in filteredFoods" :key="food.id" :food="food" />
    </div>
  </div>
</template>

<script setup>

const foods = ref([]);
const selectedCategory = ref('');

// Fetch foods
onMounted(async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    const data = await response.json();
    foods.value = data.categories; // Extract the categories array
    console.log('foods', foods.value);

  } catch (error) {
    console.error('Error fetching foods:', error);
  }


});

// Compute filtered foods
const filteredFoods = computed(() => {
  if (!selectedCategory.value) {
    return foods.value;
  }
  return foods.value.filter(
    (food) => food.strCategory === selectedCategory.value
  );
});
</script>
