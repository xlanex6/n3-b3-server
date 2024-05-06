<template>
  <nav class="w-full flex justify-center">
    <ul class="space-x-4">
      <li class="capitalize">
        <nuxt-link v-for="{path, name} in menu" :to="path">{{ name }}</nuxt-link>
      </li>
    </ul>
  </nav>
  <NuxtPage />
</template>
<script setup>

const menu = [
  {path: '/', name: 'Home'},
  {path: '/users', name: 'Person'},
  {path: '/books', name: 'Books'},
  {path: '/jokes', name: 'Jokes'},
  {path: '/posts', name: 'Posts'},
]

</script>
