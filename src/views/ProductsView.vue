<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductListWrapper from '@/components/ProductList/Wrapper.vue'
import * as customely from '@/services/customely'
import type { Product } from '@/types'

const $router = useRouter()
const $route = useRoute()

const products = ref<Product[]>([])
let isLoading = ref<boolean>(true)
let fromProduct = 0
let toProduct = 8
const pageAmount = 8

async function loadProducts() {
  try {
    await customely.auth()
    products.value = await customely.getProducts({
      from: fromProduct,
      to: toProduct
    })
    isLoading.value = false
  } catch {
    console.log('error')
  }
}

onMounted(() => {
  loadProducts()
})

function onPaginationClick(page: number) {
  // fromProduct = pageAmount * (page - 1)
  // toProduct = pageAmount * page
  // loadProducts();
  $router.push({
    name: 'ProductsView',
    query: {
      page
    }
  })
}

const currentPage = ref(1)

watch(
  $route,
  () => {
    const page = parseInt($route.query.page) || 1
    fromProduct = pageAmount * (page - 1)
    toProduct = pageAmount * page
    currentPage.value = page
    loadProducts()
  },
  {
    immediate: true
  }
)
</script>

<template>
  <main class="w-full flex flex-col items-center mx-4 mt-8">
    <div class="w-full flex justify-center">
      <div v-if="isLoading" class="loading">Loading...</div>
      <ProductListWrapper v-else :products="products" />
    </div>
    <div class="mt-14" v-if="!isLoading">
      <vue-awesome-paginate
        :items-per-page="8"
        v-model="currentPage"
        :on-click="onPaginationClick"
      />
    </div>
  </main>
</template>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
