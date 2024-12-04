import { defineStore } from "pinia";
import {ref} from "vue";

export const useCategories = defineStore("categories", {
  state: () => ({
    categories: ref([
      {
        name: "Fructe",
        url: "category_1",
        imgUrl: "/src/assets/images/category/category.png",
        id: 321,
      },
      {
        name: "Legume",
        url: "category_2",
        imgUrl: "/src/assets/images/category/category.png",
        id: 11,
      },
      {
        name: "Laura",
        url: "category_3",
        imgUrl: "/src/assets/images/category/category.png",
        id: 12,
      },

    ]),
  })
})