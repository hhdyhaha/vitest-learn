<script setup lang="ts">
import { ref } from 'vue'

const num1 = ref('')
const num2 = ref('')
const result = ref(0)

const sum = () => {
  const n1 = parseFloat(num1.value)
  const n2 = parseFloat(num2.value)
  if (isNaN(n1) || isNaN(n2)) {
    result.value = 0
  } else {
    result.value = n1 + n2
  }
}
</script>

<template>
  <div>
    <input type="text" v-model="num1" />
    <input type="text" v-model="num2" />
    <button @click="sum">求和</button>
    <p>结果：{{ result }}</p>
  </div>
</template>

<style scoped>
</style>