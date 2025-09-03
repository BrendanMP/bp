<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug ? (route.params.slug as string[]).join('/') : '')

const { data: content } = await useAsyncData(`content-${slug.value}`, () =>
  queryCollection('content')
    .path(`/${slug.value}` || '/')
    .first())

useSeoMeta({
  title: content.value?.title,
  description: content.value?.description,
})
</script>

<template>
  <div>
    <nav>
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/about">
        About
      </NuxtLink>
    </nav>
    <ContentRenderer v-if="content" :value="content" />
    <div v-else>
      Page not found
    </div>
  </div>
</template>
