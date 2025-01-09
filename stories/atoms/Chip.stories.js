import Chip from "~/components/atoms/Chip.vue";

export default {
  title: "Atoms/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text", defaultValue: "Default Chip" },
    color: {
      control: { type: "select", options: ["gray", "blue", "green", "red", "yellow"] },
      defaultValue: "gray",
    },
  },
};

export const Gray = {
  args: {
    text: "Gray Chip",
    color: "gray",
  },
};

export const Blue = {
  args: {
    text: "Blue Chip",
    color: "blue",
  },
};

export const Green = {
  args: {
    text: "Green Chip",
    color: "green",
  },
};

export const Red = {
  args: {
    text: "Red Chip",
    color: "red",
  },
};

export const Yellow = {
  args: {
    text: "Yellow Chip",
    color: "yellow",
  },
};

export const CustomText = {
  args: {
    text: "Custom Text Chip",
    color: "blue",
  },
};

export const Accessible = {
  args: {
    text: "Accessible Chip",
    color: "green",
  },
};

Accessible.parameters = {
  a11y: {
    config: {
      rules: [
        { id: "color-contrast", enabled: true }, // Ensures color contrast is accessible.
      ],
    },
  },
};
