<script setup lang="ts">
useHead({
    title: '',
    meta: [
        { name: 'description', content: '' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
<template>
    <AppHeader />
    about page
    <NuxtLink to="/">home page</NuxtLink>
    </template>