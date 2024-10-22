<template>
    <a class="shadow-shadowWhite group inline-block overflow-hidden rounded-lg">
        <div class="h-80 p-6 bg-cover flex items-end bg-center bg-no-repeat" :style="`background-image: url('${bg}')`">
          <div class="px-4 pt-2 pb-3 text-center bg-white/[.80] group-hover:bg-white rounded">
            <span class="block text-xl font-medium leading-[150%] text-gray-9">{{day}}</span>
            <span class="block uppercase font-medium text-xs text-gray-5">{{month}}</span>
          </div>
        </div>
      <div class="p-6">
        <div class="flex gap-4 mb-2 items-center">
          <a href="" class="flex gap-1 items-center text-gray-6 text-sm font-normal leading-[150%]">
            <IconTag/>
            <span class="text-gray-7">{{category}}</span>
          </a>
          <a href="" class="flex gap-1 items-center text-gray-6 text-sm font-normal leading-[150%]">
            <IconUser/>
            <div>
              <span>By</span>
              <span class="text-gray-7 ml-1">{{author}}</span>
            </div>
          </a>
          <a href="" class="flex gap-1 items-center text-gray-6 text-sm font-normal leading-[150%]">
            <IconComments />
            <div>
              <span>{{comments}}</span>
              <span class="ml-1">comments</span>
            </div>
          </a>
        </div>
        <h3 class="group-hover:text-hard-primary text-gray-9 text-lg font-medium leading-[150%] mb-5">{{title}}</h3>
        <arrow-link class="stroke-primary text-primary">Read More</arrow-link>
      </div>
    </a>
</template>
<script setup>
import ArrowLink from "@/ui/ArrowLink.vue";
import IconTag from "@/ui/icons/IconTag.vue";
import IconUser from "@/ui/icons/IconUser.vue";
import IconComments from "@/ui/icons/IconComments.vue";

defineProps({
  day: Number,
  month: String,
  category: String,
  author: String,
  comments: Number,
  title: String,
  desc: String,
  bg: String,
});


</script>