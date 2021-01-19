<template>
    <div>
        <input 
        type="checkbox"
        :value="value"
        :name="naem"
        :checked="checked"
        @input="$emit('input', $event.target.value)"
        >
       {{value}}
    </div>
</template>

<script>
export default {
    props: ['value', 'name', 'checked']
    
}
</script>

<style scoped>

</style>