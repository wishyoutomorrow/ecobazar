<script setup>
import HeaderVue from './components/HeaderVue.vue';
import HeroVue from './components/HeroVue.vue';
</script>

<template>
    <div>
        <HeaderVue />
        <HeroVue />
        <router-view></router-view>
    </div>
</template>

<style scoped></style>
