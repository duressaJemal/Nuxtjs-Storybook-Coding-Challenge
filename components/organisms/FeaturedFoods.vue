<template>
  <div class="mb-8">
    <el-carousel height="200px" :interval="5000" arrow="always">
      <el-carousel-item v-for="category in categoriesToShow" :key="category.idCategory">
        <div class="flex items-center justify-center h-full">
          <img :src="category.strCategoryThumb" :alt="category.strCategory"
            class="max-h-full max-w-full object-contain" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>

const props = defineProps({
  mockfoods: {
    type: Array,
    default: null,
  },
});

const categoriesToShow = ref([]);

onMounted(async () => {
  if (props.mockCategories) {
    categoriesToShow.value = props.mockCategories;
  } else {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      categoriesToShow.value = data.categories; // Extract the categories array
    } catch (error) {
      console.error('Error fetching featured categories:', error);
    }
  }
});
</script>