import { defineStore } from 'pinia'
import type { Product } from "@/types"

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as Product[],
    selectedProduct: null as Product|null
  }),
  getters: {
    getProducts() : Product[] {
      return this.products
    },
    getSelectedProduct() : Product|null {
      return this.selectedProduct
    }
  },
  actions: {
    setProducts(products : Product[]) {
      this.products = products
    },
    setSelectedProduct(product: Product) {
      this.selectedProduct = product
    }
  }
})
