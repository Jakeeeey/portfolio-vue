<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    name: {
        type: String,
    },
    classType: {
        type: String,
    }
    
});
</script>

<template>
    <RouterLink to="/about" :class="classType" >{{ name }}</RouterLink>
</template>