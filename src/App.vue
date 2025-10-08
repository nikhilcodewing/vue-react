<template>
  <div>
    <Hello />
    <Editor />
  </div>
</template>

<script setup>
import Hello from "./vue_app/Hello.vue";
</script>
<script>
import { applyPureReactInVue } from "veaury";
import Skeleton from "./react_app/Skeleton.jsx";
// import ReactComponent from "./react_app/Basic.jsx";
import { ref } from "vue";

export default {
  components: {
    Editor: applyPureReactInVue(Skeleton),
  },
};
</script>
