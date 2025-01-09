import FoodInfo from "~/components/molecules/FoodInfo.vue";

export default {
  title: "Molecules/FoodInfo",
  component: FoodInfo,
  tags: ["autodocs"],
  argTypes: {
    category: { control: "text", defaultValue: "Default Category" },
    description: { control: "text", defaultValue: "This is the default description text." },
    descriptionSize: {
      control: { type: "select", options: ["sm", "md", "lg"] },
      defaultValue: "md",
    },
  },
};

export const Default = {
  args: {
    category: "Default Category",
    description: "This is the default description text.",
    descriptionSize: "md",
  },
};

export const SmallDescription = {
  args: {
    category: "Small Category",
    description: "This description uses a small size.",
    descriptionSize: "sm",
  },
};

export const LargeDescription = {
  args: {
    category: "Large Category",
    description: "This description uses a large size for emphasis.",
    descriptionSize: "lg",
  },
};

export const CustomCategoryAndDescription = {
  args: {
    category: "Custom Category",
    description: "This is a custom description with a medium size.",
    descriptionSize: "md",
  },
};

export const Accessible = {
  args: {
    category: "Accessible Category",
    description: "This description demonstrates accessible features.",
    descriptionSize: "md",
  },
};

Accessible.parameters = {
  a11y: {
    config: {
      rules: [
        { id: "color-contrast", enabled: true },
      ],
    },
  },
};
