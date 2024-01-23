<script setup lang="ts">
useHead({
    title: '我的应用',
    meta: [
        { name: 'description', content: '我的神奇网站。' }
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