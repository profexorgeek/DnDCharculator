<script lang="ts" setup>
const props = defineProps({
    fieldName: {type: String, required: true},
    fieldPrompt: {type: String, required:true},
    fieldValue: {type: String, required: true}
});
const emit=defineEmits(['update:fieldValue']);
</script>

<template>
    <div class="field field-text">
    <label :for="'field'+props.fieldName">{{ fieldName }}</label>
        <input
            type="text"
            :id="'field'+props.fieldName"
            class="form-control"
            :placeholder="fieldPrompt"
            v-model="fieldValue"
            @input="$emit('update:fieldValue', fieldValue)" />
    </div>
</template>