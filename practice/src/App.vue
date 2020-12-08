<template>
<div>
  <h1>いいね</h1>
  <span>
  <LikeNumber :lang="language" @plus="func"></LikeNumber>
  </span>

  <h1>{{num}}</h1>
  <hr>


  <LikeHeader>
    <h1>わっしょい</h1>
  </LikeHeader>
  <hr>

<input type="text" v-model="val">

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
    valiWatch(val) {
      this.vali = val
    }
  },
  computed: {
    valiHnadler: {
      immediate: true,
      set() {
        return this.vali
      },
      get(val) {
        let check = /^([1-9]\d*|0)$/
        console.log(check.test(val))
        if (check.test(val)) {
          return this.vali
        }
        return ''
      },
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