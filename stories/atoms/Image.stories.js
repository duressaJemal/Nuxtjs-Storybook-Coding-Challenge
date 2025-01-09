import Image from '~/components/atoms/Image.vue';

export default {
  title: 'Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', description: 'Image source URL' },
    alt: { control: 'text', description: 'Alternative text for the image' },
    imgClass: { control: 'text', description: 'CSS classes for styling the image' },
  },
};

export const Default = {
  args: {
    src: 'https://www.themealdb.com//images//category//pasta.png',
    alt: 'Placeholder Image',
    imgClass: '',
  },
};

export const WithClass = {
  args: {
    src: 'https://www.themealdb.com//images//category//pasta.png',
    alt: 'Placeholder Image with Class',
    imgClass: 'img-style', // example class
  },
};
