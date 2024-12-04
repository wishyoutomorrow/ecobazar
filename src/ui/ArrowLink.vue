<template>
    <div class="inline-flex gap-4 justify-start text-base font-semibold leading-[120%] items-center">
        <slot />
        <IconArrowRight />
    </div>
</template>

<script setup>
import IconArrowRight from '@/ui/icons/IconArrowRight.vue';

</script>