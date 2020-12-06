<template>
<div>
    <p>いいね({{ number }})</p>
    <button @click="like">いいねする</button>

    <h2 v-for="l in lang" :key="l">
        <p>{{l}}</p>
    </h2>

    <button @click="plus">わっしょい</button>
</div>
  
</template>

<script>

export default {
    props: {
        lang: {
            type: Array,
            default: () => ['Django'],
        }
    },
    data() {
        return {
        number: 0,
        }
    },
    methods: {
        like() {
            this.number += 1;
        },
        plus () {
            this.$emit('plus', 600);
        }
    }
}
</script>

<style scoped>
    div {
        border: 2px solid red;
    }

</style>