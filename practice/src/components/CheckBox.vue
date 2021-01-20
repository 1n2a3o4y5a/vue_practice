<template>
    <div>
        <input 
        type="checkbox"
        :value="value"
        :name="naem"
        :checked="checked"
        >
       {{value}}
    </div>
</template>

<script>ooo
export default {
    props: ['value', 'name', 'checked'],
    
}
</script>

<style scoped>

</style>