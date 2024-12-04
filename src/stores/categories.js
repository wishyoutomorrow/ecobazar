import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const products = defineStore("counter", () => {
  const count = ref([
    {
      title: "Fresh apple",
      price: 13,
      previousPrice: 0,
      id: 0,
    },
    {
      title: "Fresh malina",
      price: 20,
      previousPrice: 21,
      id: 1,
    },
  ]);

  return count;
});
