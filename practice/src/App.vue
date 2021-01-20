<template>
  <div>
    <ul>
      <li v-for="(l, i) in language" :key="i">
        <check-box></check-box>
      </li>
    </ul>
  </div>
</template>


<script>
import CheckBox from './components/CheckBox.vue'

    
export default {
  components: {CheckBox},
  data() {
    return {
      language: ['Java', 'Python', 'PHP', 'Ruby'],
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