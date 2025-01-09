import Description from "~/components/atoms/Description.vue";

export default {
  title: "Atoms/Description",
  component: Description,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    size: {
      control: { type: "select", options: ["sm", "md", "lg"] },
    },
    maxLength: {
      control: { type: "number", min: 10, max: 300, step: 10 },
      defaultValue: 150,
    },
  },
};

export const Small = {
  args: {
    text: "Small Description",
    size: "sm",
    maxLength: 150,
  },
};

export const Medium = {
  args: {
    text: "Medium Description",
    size: "md",
    maxLength: 150,
  },
};

export const Large = {
  args: {
    text: "Large Description",
    size: "lg",
    maxLength: 150,
  },
};

export const Truncated = {
  args: {
    text: "This is a very long description that will be truncated because it exceeds the maximum length of 150 characters.",
    size: "md",
    maxLength: 50,
  },
};

export const CustomMaxLength = {
  args: {
    text: "This description has a custom maximum length.",
    size: "md",
    maxLength: 20,
  },
};

export const Expanded = {
  args: {
    text: "This is an expandable description.",
    size: "md",
    maxLength: 50,
  },
};