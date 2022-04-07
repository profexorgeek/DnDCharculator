<script lang="ts" setup>
const props = defineProps({
    dataLabel: {type: String, required:true},
    dataValue: {type: String, required:true}
})

const emit = defineEmits(['update:dataValue']);
</script>

<template>
    <div class="labeledField">
        <div class="label">{{ dataLabel }}</div>
        <div class="input">
            <input
            type="text"
            v-model="dataValue"
            @input="$emit('update:dataValue', dataValue)"/>
        </div>
    </div>
</template>

<style scoped>
.labeledField {
    border:1px solid var(--color-border);
    width: var(--size-input-field);
}

.label {
    font-style: bold;
    color: var(--color-text);
    font-size: var(--size-text-small);
}

.input input {
    border:none;
    color: var(--color-text);
    font-weight: bold;
    width:100%;
    margin:0;
}
</style>