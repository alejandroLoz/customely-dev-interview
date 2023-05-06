<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex bg-indigo-400">
    <img class="logo w-9 h-9" alt="Vue logo" src="@/assets/logo.svg" />

    <div class="wrapper">
      <nav class="flex gap-6">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/product/12">Product test</RouterLink>
      </nav>
    </div>
  </header>
</template>
