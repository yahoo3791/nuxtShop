<script setup lang="ts">
useSeoMeta({
    title: '我的神奇网站',
    ogTitle: '我的神奇网站',
    description: '这是我的神奇网站，让我来告诉你关于它的一切。',
    ogDescription: '这是我的神奇网站，让我来告诉你关于它的一切。',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})
const isActive = ref(true)
const hasError = ref(false)
const classObject = reactive({
    active: true,
    'text-danger': false
})
const { data } = await useFetch('/api/hello')

</script>

<template>
    <div>
        <FrontHeader />
        <!-- <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>
        <div :class="classObject"></div>
        <NuxtLink to="/about">关于</NuxtLink> -->
        <FrontFooter />
        <!-- <div class="text-danger">

            {{ data.hello }}
        </div>
        <div class="btn">btn</div> -->
    </div>
</template>
