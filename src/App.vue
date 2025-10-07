<template>  
  <BasicPure :foo="foo">  
    <div>the children</div>  
  </BasicPure>  
</template>  
  
<script>  
import { applyPureReactInVue } from 'veaury'  
import BasicReactComponent from './react_app/Basic.jsx'  
import { ref } from 'vue'  
  
export default {  
  components: {  
    BasicPure: applyPureReactInVue(BasicReactComponent)  
  },  
  setup() {  
    return {  
      foo: ref('Hello!')  
    }  
  }  
}  
</script>
