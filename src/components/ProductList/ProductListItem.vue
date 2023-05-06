<script setup lang="ts">
import { useProductsStore } from '@/store/products'
import type { Product } from '@/types'
import { computed } from 'vue'
import { formatDate } from '@/utils/format'

const productsStore = useProductsStore()

function gotToProduct(product) {
  productsStore.setSelectedProduct(product)
}

const props = defineProps<{
  product: Product
}>()

// const thumbnailPath = computed(() => {
//     return import.meta.env.VITE_BASE_ASSETS_URL + props.product.thumbnailPath;
// });
const imagePath = computed(() => {
  return import.meta.env.VITE_BASE_ASSETS_URL + props.product.imagePath
})
</script>
<template>
  <article class="mb-[190px]">
    <RouterLink
      :to="{
        name: 'ProductView',
        params: {
          id: product.id
        }
      }"
      @click.prevent="gotToProduct(product)"
      class="flex flex-col w-[330px] h-[220px] bg-red-600"
    >
      <img :src="imagePath" :alt="`Photo of ${product.name}`" />
      <div class="bg-[#D7D7D7] flex justify-between pt-2 px-4 pb-4">
        <p>
          {{ product.name }}
        </p>
        <span class="text-sm text-gray-500">{{ formatDate(product.modifiedDate) }}</span>
      </div>
      <RouterLink
        :to="{
          name: 'ProductView',
          params: {
            id: product.id
          }
        }"
        @click.prevent="gotToProduct(product)"
        class="w-full bg-[#839ADA] text-white text-center"
      >
        Try it
      </RouterLink>
    </RouterLink>
  </article>
</template>
