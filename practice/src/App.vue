<template>
<div>
  <LikeHeader>
    <template #header>
      <h1>わっしょい</h1>
    </template>
    <template #body>
      <h1>わっしょいわっしょい</h1>
    </template>
    <template #footer>
      <h1>わっしょいわっしょいわっしょい</h1>
    </template>
  </LikeHeader>
  <hr>

<input type="text" v-model="vali" value="">

</div>
</template>


<script>
import LikeHeader from './components/LikeHeader'
    
export default {
  components: {LikeHeader},
  data() {
    return {
      language: [
        'Java',
        'PHP',
        'Python',
        'Ruby',
      ],
      num: 0,
      vali: '',
    }
  },
  watch: {
    vali(val) {
      let check = /^([1-9]\d*|0)$/
        if (check.test(val)) {
          this.vali = val
        } else {
          this.vali = val.slice(0,-1)
        }
    }
  },
  methods: {
    func (val) {
      this.num = val
    }
  }
}
</script>


<style scoped>
    
</style>