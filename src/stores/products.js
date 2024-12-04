import { defineStore } from "pinia";
import {ref} from "vue";

export const useProducts = defineStore("products", {
    state: () => ({
        products: ref([
            {
                title: "Green Apple",
                price: 14.99,
                previousPrice: 20.99,
                imgUrl: "/src/assets/images/products/green_apple.png",
                rate: 4.5,
                id: 0,
                categoryId: 321,
                isHover: false,
            },
            {
                title: "Fresh Indian Malta",
                price: 20.18,
                previousPrice: false,
                imgUrl: "/src/assets/images/products/malta.png",
                rate: 4.5,
                id: 1,
                isHover: false,
                categoryId: 11,
            },
            {
                title: "Chinese cabbage",
                price: 12.00,
                previousPrice: false,
                imgUrl: "/src/assets/images/products/cabbage.jpg",
                rate: 4.5,
                id: 2,
                categoryId: 12,
                isHot: true,
            },
            {
                title: "Green Lettuce",
                price: 9.00,
                previousPrice: false,
                imgUrl: "/src/assets/images/products/lettuce.jpg",
                rate: 5,
                id: 3,
                isHover: false,
                categoryId: 11
            },
            {
                title: "Eggplant",
                price: 34.00,
                previousPrice: false,
                imgUrl: "/src/assets/images/products/eggplant.jpg",
                rate: 4.5,
                id: 4,
                isHover: false,
                categoryId: 321
            },
            {
                title: "Big Potatoes",
                price: 20.00,
                previousPrice: false,
                imgUrl: "/src/assets/images/products/big_potatoes.png",
                rate: 4.5,
                id: 5,
                isHover: false,
                categoryId: 12
            }
        ]),
    })
})