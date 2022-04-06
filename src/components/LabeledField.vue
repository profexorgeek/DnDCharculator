<script lang="ts" setup>

const props = defineProps({
    dataLabel: String,
    dataValue: String
})

const emit = defineEmits([
    'update:dataValue'
]);

</script>

<template>
    <div class="label">{{ dataLabel }}</div>
    <div class="input">
        <input
        type="text"
        v-model="dataValue"
        @input="$emit('update:dataValue', dataValue)"/>
    </div>
</template>