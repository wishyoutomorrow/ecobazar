<template>
    <div class="pb-14">
        <div class="container">
            <h2 class="mb-8 text-3xl font-semibold text-center text-gray-9">
                Latest News
            </h2>
            <div class="grid grid-cols-3 gap-6">
              <BlogCard v-for="card in cards" :href="card.url"  :title="card.title" :desc="card.desc" :category="card.category" :day="card.day" :month="card.month" :author="card.author" :bg="card.bg" :key="card.id"/>
            </div>
        </div>
    </div>
</template>
<script setup >
import BlogCard from "@/components/BlogCard.vue";
import {ref} from "vue";

const cards = ref([
  {
    title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    desc: "",
    category: "Food",
    day: 20,
    month: "Dec",
    author: "Admin",
    comments: 42,
    bg: "/src/assets/images/news1.jpg",
    id: 0,
    url: "/"
  },
  {
    title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    desc: "",
    category: "Tehnology",
    day: 20,
    month: "Dec",
    author: "John Doe",
    comments: 42,
    bg: "/src/assets/images/news2.jpg",
    id: 1,
    url: "/"

  },
  {
    title: "Maecenas blandit risus elementum mauris malesuada.",
    desc: "",
    category: "Tehnology",
    day: 20,
    month: "Dec",
    author: "John Doe",
    comments: 42,
    bg: "/src/assets/images/news3.jpg",
    id: 2,
    url: "/"
  }
])

</script>