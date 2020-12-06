<template>
<div>
  <h1>いいね</h1>
  <span>
  <LikeNumber :lang="language" @plus="func"></LikeNumber>
  </span>

  <h1>{{num}}</h1>


  <LikeHeader>
    <h1>わっしょい</h1>
  </LikeHeader>
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