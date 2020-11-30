<template>
<div>
    <div>
    <p>いいね({{ number }})</p>
    <button @click="like">いいねする</button>
    </div>
</div>
  
</template>

<script>

export default {
  data() {
    return {
      number: 0,
    }
  },
  methods: {
      like() {
          this.number += 1;
      }
  }
}
</script>

<style socped>
    div {
        border: 2px solid red;
    }

</style>