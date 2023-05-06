<script setup lang="ts">
import { RouterView } from 'vue-router'
import CoreHeader from '@/components/Core/Header.vue'
</script>

<template>
  <CoreHeader />
  <main class="">
    <RouterView />
  </main>
</template>

<style>
body {
  background: #f2f2f2;
}
</style>
