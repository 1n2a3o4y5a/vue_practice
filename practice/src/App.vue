<template>
<div>
  <BaseInput 
  :value="eventData.title"
  @input="evetData.title = $event"
  ></BaseInput>
</div>
</template>


<script>
import BaseInput from './components/BaseInput'

    
export default {
  components: {BaseInput},
  data() {
    return {
      
    }
  },
  watch: {
    
  },
  methods: {
    
  }
}
</script>


<style scoped>
    
</style>