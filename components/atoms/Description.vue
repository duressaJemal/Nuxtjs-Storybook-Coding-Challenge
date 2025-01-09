<template>
  <div>
    <p :class="descriptionClass" :title="text">
      {{ isExpanded ? text : truncatedText }}
    </p>
    <button
      v-if="showToggle"
      @click="toggleExpand"
      class="text-blue-500 hover:underline text-sm mt-2"
    >
      {{ isExpanded ? 'Read Less' : 'Read More' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  text: { type: String, required: true },
  size: { type: String, default: 'md' },
  maxLength: { type: Number, default: 150 },
});

const isExpanded = ref(false);

const descriptionClass = computed(() => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  return `${sizes[props.size]} px-1 py-1 font-normal text-gray-700 leading-relaxed`;
});

const truncatedText = computed(() => {
  if (props.text.length > props.maxLength) {
    return `${props.text.slice(0, props.maxLength)}...`;
  }
  return props.text;
});

const showToggle = computed(() => props.text.length > props.maxLength);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
