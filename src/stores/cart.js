import {defineStore} from "pinia";

export const useCart = defineStore("cart", {
    state: () => ({
        cartItems: [
            {
                price: 20,
            },
            {
                price: 21,
            },
            {
                price: 31,
            }
        ],
    }),
    getters: {
        totalPrice: state => {
            return state.cartItems.reduce((total, item) => { return total+item.price}, 0)
        }
    },
    actions: {
        addToCart(item) {
            this.cartItems.push(item)
        }
    }
})