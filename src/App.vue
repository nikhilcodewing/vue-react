<template>
  <div>
    <!-- <Counter /> -->
    <BasicPure />
  </div>
</template>

<script setup>
import Counter from "./vue_app/Counter.vue";
</script>
<script>
import { applyPureReactInVue } from "veaury";
import Skeleton from "./react_app/Skeleton.jsx";
// import ReactComponent from "./react_app/Basic.jsx";
import { ref } from "vue";

export default {
  components: {
    BasicPure: applyPureReactInVue(Skeleton),
  }
};
</script>
