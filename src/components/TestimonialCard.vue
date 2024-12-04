<script setup>
import IconQuotes from "@/ui/icons/IconQuotes.vue";
import IconStar from "@/ui/icons/IconStar.vue";

defineProps({
  user: {},
  desc: String,

})
</script>

<template>
  <div class="p-6 bg-white shadow-shadowBlack rounded-lg">
    <IconQuotes class="text-primary/[.3] mb-4" />
    <p class="mb-4 text-gray-7 text-sm font-normal leading-[150%]">
      {{desc}}
    </p>
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-between gap-3">
        <div class="w-14 rounded-full h-14 bg-cover bg-center bg-no-repeat" :style="{backgroundImage: `url('${user.imgUrl}')`}">

        </div>
        <div>
          <span class="block text-gray-9 font-medium text-base leading-[150%]">{{user.name}}</span>
          <span class="block text-gray-4 text-sm leading-[150%]">{{user.jobTitle}}</span>
        </div>
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
  </div>
</template>

<style scoped>

</style>