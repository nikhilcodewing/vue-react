<template>
  <div>
    <div>
      {{ count }}
    </div>

    <button @click="increment">Add Count (VUE)</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}
</script>
