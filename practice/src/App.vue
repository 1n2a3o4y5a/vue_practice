<template>
  <div>
    {{checkedLists}}
    <ul>
      <li v-for="(l, i) in language" :key="i">
        <check-box :input-value="l" @input="update" v-model="checkedListsHandler"></check-box>
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
      checkedLists: []
    }
  },
  computed: {
    checkedListsHandler: {
      get() {
        return this.checkedLists;
      },
      set(value) {
        this.update(value)
      },
    },
  },
  methods: {
    update(v) {
      console.log(v)
      this.checkedLists = v
    }
  }
}
</script>


<style scoped>
    
</style>