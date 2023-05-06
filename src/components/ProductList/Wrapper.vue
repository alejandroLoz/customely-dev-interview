<script setup lang="ts">
import { useRouter } from 'vue-router';
import ProductListItem from './Item.vue';
import { useProductsStore } from '@/store/products';

const $router = useRouter();

const productsStore = useProductsStore();

function gotToProduct(product) {
  productsStore.setSelectedProduct(product);
  console.log(product);
  // $router.push({
  //   name: 'product',
  //   params: {
  //     slug: product.id,
  //   },
  // });
}

// grid grid-cols-4 gap-x-4 gap-y-10

</script>
<template>
    <div class="grid grid-cols-4 gap-x-6 gap-y-7">
      <ProductListItem 
        v-for="product in $attrs.products"
        :key="product.id"
        :product="product"
        @click.prevent="gotToProduct(product)"
      />
    </div> 
</template>