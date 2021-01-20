<template>
    <div>
        <input 
        type="checkbox"
        :value="inputValue"
        v-model="valueHandler"
        >
       {{inputValue}}
    </div>
</template>

<script>
export default {
    props: {
        inputValue: {
            type: String,
            default: ''
        }
    },
    computed: {
        valueHandler: {
            get() {
                return this.inputValue
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    }
}
</script>

<style scoped>

</style>