<template>
<div>
    <p>いいね({{ number }})</p>
    <button @click="like">いいねする</button>

    <div v-for="l in lang" :key="l">
        <p>{{l}}</p>
    </div>
</div>
  
</template>

<script>

export default {
    props: ['lang'],
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

<style scoped>
    div {
        border: 2px solid red;
    }

</style>