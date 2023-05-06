<script setup lang="ts">
import ProductListItem from './ProductListItem.vue'
</script>
<template>
  <div class="grid grid-cols-4 gap-x-6 gap-y-7">
    <ProductListItem
      v-for="product in $attrs.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
