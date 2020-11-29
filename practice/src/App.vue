<template>
  <LikeNumber></LikeNumber>
</template>

<script>
import LikeNumber from './components/LikeNumber.vue'

export default {
  components: { LikeNumber },
  data() {
    return {
      number: 0,
    }
  }
}
</script>

<style>
</style>
