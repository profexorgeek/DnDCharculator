<script lang="ts" setup>

const props = defineProps({
    dataLabel: String,
    dataValue: String
})

const emit = defineEmits(['update:dataLabel','update:dataValue']);

</script>

<template>
    <div class="label">{{ dataLabel }}</div>
    <div class="field"><input type="text" :value="dataValue" /></div>
</template>