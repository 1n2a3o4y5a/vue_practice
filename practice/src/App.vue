<template>
<div>
  <BaseInput 
  :value="eventData"
  @input="eventData = $event"
  ></BaseInput>
</div>
</template>


<script>
import BaseInput from './components/BaseInput'

    
export default {
  components: {BaseInput},
  data() {
    return {
      eventData: ''
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