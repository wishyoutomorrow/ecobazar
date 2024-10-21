<template>
    <a class="inline-flex gap-4 justify-start text-base font-semibold leading-[120%] items-center">
        <slot />
        <IconArrowRight />
    </a>
</template>

<script setup>
import IconArrowRight from '@/ui/icons/IconArrowRight.vue';

</script>