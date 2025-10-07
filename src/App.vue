<template>
  <div>
    <BasicPure />
    <Counter />
  </div>
</template>

<script setup>
import Counter from "./vue_app/Counter.vue";
</script>
<script>
import { applyPureReactInVue } from "veaury";
import BasicReactComponent from "./react_app/Basic.jsx";
import { ref } from "vue";

export default {
  components: {
    BasicPure: applyPureReactInVue(BasicReactComponent),
  },
  setup() {
    return {
      foo: ref("Hello!"),
    };
  },
};
</script>
