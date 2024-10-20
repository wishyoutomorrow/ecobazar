<template>
    <div class="flex items-center justify-between">
        <h2 class="text-3xl font-semibold text-gray-9">
            {{ title }}
        </h2>
        <ArrowLink :text="linkText" :url="linkUrl" />
    </div>
</template>

<script setup>
import ArrowLink from '@/ui/ArrowLink.vue';

const props = defineProps([
    'title',
    'linkText',
    'linkUrl'
])
</script>