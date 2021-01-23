<template>
    <div class="">
    <input
    :id="name + inputValue"
    v-model="checked"
    type="checkbox"
    :name="name"
    :value="inputValue"
    />
    <label>
    </label>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '',
        },
        value: {
            type: [Boolean, Array],
            default: () => [],
        },
        inputValue: {
            type: [String, Number, Boolean],
            default: true,
        },
    },
    computed: {
        checked: {
            get() {
                return this.value;
            },
            set(v) {
                this.$emit('input', v);
            },
        },
    }
}
</script>

<style scoped>

</style>