import FeaturedFoods from "~/components/organisms/FeaturedFoods.vue";

export default {
  title: "Organisms/FeaturedFoods",
  component: FeaturedFoods,
  tags: ["autodocs"],
};

export const Default = {
    args: {
      mockfoods: [
        {
          idCategory: "1",
          strCategory: "Beef",
          strCategoryDescription: "A variety of beef dishes.",
          strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
        },
        {
          idCategory: "2",
          strCategory: "Chicken",
          strCategoryDescription: "Delicious chicken recipes.",
          strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
        },
        {
          idCategory: "3",
          strCategory: "Dessert",
          strCategoryDescription: "Sweet and savory desserts.",
          strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
        },
      ],
    },
  };

  export const WithFewFoods = {
    args: {
      mockfoods: [
        {
          idCategory: "1",
          strCategory: "Beef",
          strCategoryDescription: "A variety of beef dishes.",
          strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
        },
        {
          idCategory: "2",
          strCategory: "Chicken",
          strCategoryDescription: "Delicious chicken recipes.",
          strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
        },
      ],
    },
  };

export const WithNoFoods = {
  args: {
    mockfoods: [],
  },
};
