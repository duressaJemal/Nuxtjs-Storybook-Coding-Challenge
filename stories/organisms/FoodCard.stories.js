import FoodCard from "~/components/organisms/FoodCard.vue";

export default {
  title: "Organisms/FoodCard",
  component: FoodCard,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select", options: ["default", "horizontal"] },
    },
  },
};

export const Default = {
  args: {
    food: {
      strCategory: "Beef",
      strCategoryDescription:
        "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.",
      strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    },
    variant: "default",
  },
};

export const Horizontal = {
  args: {
    food: {
      strCategory: "Chicken",
      strCategoryDescription:
        "Chicken is a type of poultry that is a rich source of protein. It is versatile and used in a variety of dishes worldwide.",
      strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
    },
    variant: "horizontal",
  },
};
