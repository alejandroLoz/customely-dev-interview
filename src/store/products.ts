import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    selectedProduct: null
  }),
  getters: {
    getProducts() {
      return this.products
    },
    getSelectedProduct() {
      return this.selectedProduct
    }
  },
  actions: {
    setProducts(products) {
      this.products = products
    },
    setSelectedProduct(product) {
      this.selectedProduct = product
    }
  }
})
