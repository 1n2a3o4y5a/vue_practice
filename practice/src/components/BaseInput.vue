<template>
<div>
    <input 
    type="text"
    id="title"
    :value="value"
    @input="$emit('input', $event.target.value)"
    >
    
</div>
</template>

<script>
export default {
    props: ['value']
    
}
</script>

<style scoped>

</style>