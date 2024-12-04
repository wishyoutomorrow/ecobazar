<script setup>
import IconStar from '@/ui/icons/IconStar.vue';
import IconBag from '@/ui/icons/IconBag.vue';
import ChipUi from '@/ui/ChipUi.vue';

import {useCart} from "@/stores/cart.js";




defineProps({
    product: {
        type: Object,
        required: true,
        default: () => {},
    },
})
const cart = useCart();
</script>
<template>
   <router-link v-if="!product.isHot" class="inline-flex flex-col justify-between bg-white p-3 group border-[1px] overflow-hidden border-gray-1 hover:border-hard-primary hover:shadow-shadowGreen" :to="{name: 'product', params: {id: product.id}, query:{category: product.categoryId}}" >
       <div class="w-64 h-60 overflow-hidden bg-cover bg-center bg-no-repeat">
         <ChipUi />
         <img :src="product.imgUrl" class="block max-w-full" alt="#">
       </div>
       <div class="flex items-center justify-between">
         <div>
           <span class="block text-sm font-normal text-gray-7 group-hover:text-hard-primary">{{ product.title }}</span>
           <div>
             <span class="text-base font-medium leading-[150%] text-gray-9 inline-block mr-1">$ {{product.price}}</span>
             <span v-if="product.previousPrice" class="line-through text-base font-normal leading-[150%] text-gray-4">{{product.previousPrice}}</span>
           </div>
           <div class="flex items-center">
             <a href="#">
               <IconStar class="fill-warning" />
             </a>
             <a href="#">
               <IconStar class="fill-warning" />
             </a>
             <a href="#">
               <IconStar class="fill-warning" />
             </a>
             <a href="#">
               <IconStar class="fill-warning" />
             </a>
             <a href="#">
               <IconStar class="fill-gray-2" />
             </a>
           </div>

         </div>
         <a href="#" @click.prevent="cart.addToCart(product)" class="inline-block p-3 hover:text-white rounded-full bg-gray-0.5 hover:bg-primary">
           <IconBag class="stroke-gray-9" />
         </a>
       </div>
   </router-link>
</template>
