<template>
<div>
  <h1>いいね</h1>
  <span>
  <LikeNumber :lang="language"></LikeNumber>
  <LikeNumber ></LikeNumber>
  </span>
</div>
</template>


<script>
    
export default {
  data() {
    return {
      language: [
        'Java',
        'PHP',
        'Python',
        'Ruby',
      ]
    }
  }
}
</script>


<style scoped>
    div {
        border: 2px solid blue;
    }

</style>