<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/store/products'
import { formatDate } from '@/utils/format'

const $route = useRoute()
const productsStore = useProductsStore()

const { selectedProduct } = storeToRefs(productsStore)

const textsPreviews = ref([])

const fieldsInputs = reactive<any[]>([])
const fieldsFontsInputs = ref<any[]>([])

onMounted(() => {
  engraver.init('preview-canvas')
  engraver.setProduct(selectedProduct.value.id || $route.params.id)
  // window.dispatchEvent(new CustomEvent('customily-product-loaded'
  setTimeout(() => {
    const mappedTextsPreview = engraver.currentProduct.preview.textsPreview.map((textPreview) => ({
      ...textPreview,
      fontsMap: JSON.parse(textPreview.fontsMap)
    }))

    textsPreviews.value = mappedTextsPreview

    console.log(mappedTextsPreview)
  }, 1000)
})

function typeInAField(textPreview: any, text: string) {
  const selectedFont = [...fieldsFontsInputs.value]
  selectedFont[textPreview.id] = selectedFont[textPreview.id] || textPreview.fontsMap[0][0]
  fieldsFontsInputs.value = [...selectedFont]
  engraver.setText(textPreview.id, text)
}

function onSelectFont(textPreview: any, font: number|string) {
  const selectedFont = [...fieldsFontsInputs.value]
  selectedFont[textPreview.id] = font
  fieldsFontsInputs.value = [...selectedFont]
  engraver.setFont(textPreview.id, parseInt(font))
}
</script>

<template>
  <main class="flex justify-center mt-12">
    <nav>
      <router-link :to="`/products`" class="bg-gray-200 p-4"> Back </router-link>
    </nav>
    <div class="flex justify-center">
      <canvas id="preview-canvas" class="w-1/2"></canvas>
      <form class="w-1/2 bg-[#EBEBEB] p-4" method="post" target="_top">
        <h3 class="flex justify-between text-lg">
          {{ selectedProduct.name }}

          <span class="text-gray-400 text-sm">
            {{ formatDate(selectedProduct.modifiedDate) }}
          </span>
        </h3>

        <div
          class="flex flex-col space-y-4 text-gray-600 mt-10"
          v-for="(textPreview, index) in textsPreviews"
          :key="index"
        >
          <label :for="`textField${textPreview.id}`"> Line {{ textPreview.id }} </label>

          <input
            :id="`textField${textPreview.id}`"
            :name="`textField{{ textPreview.id }}`"
            type="text"
            v-model="fieldsInputs[index]"
            class="w-full"
            @input="($event) => typeInAField(textPreview, $event.target?.value)"
          />

          <label :for="`textSelectFont${textPreview.id}`"> Line {{ textPreview.id }} Font </label>

          <select
            :name="`textSelectFont${textPreview.id}`"
            :id="`textSelectFont${textPreview.id}`"
            @change="onSelectFont(textPreview, $event.target.value)"
          >
            <option v-for="(font, index) in textPreview.fontsMap" :key="index" :value="font[0]">
              Font {{ font[0] }}
            </option>
          </select>
        </div>
      </form>
    </div>
  </main>
</template>
