<template>
<div>
    <input 
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
    >
    <p>{{value}}</p>
</div>
</template>

<script>
export default {
    props: ['value']
    
}
</script>

<style scoped>

</style>