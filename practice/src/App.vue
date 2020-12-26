<template>
<div>
  <BaseInput 
  :value="eventData"
  @input="eventData = $event"
  ></BaseInput>

  <p v-border>ふぁkjfかsjdfkじゃs</p>
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