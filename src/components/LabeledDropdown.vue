<script lang="ts" setup>
const props = defineProps({
    dataLabel: String,
    dataSelected: String,
    dataValues: Array
});
const emit = defineEmits(['update:dataSelected']);
</script>

<template>
    <div class="labeledDropdown">
        <div class="label">{{ dataLabel }}</div>
        <div class="input">
            <select
                :name="dataLabel"
                v-model="dataSelected"
                @change="$emit('update:dataSelected', dataSelected)">
                <option 
                    v-for="item of dataValues"
                    :value="item"
                    :selected="item == dataSelected">{{ item }}</option>
            </select>
        </div>
    </div>
</template>

<style scoped>
.labeledDropdown {
    border: 1px solid var(--color-border);
    width: var(--size-input-field);
}

.label {
    font-style: bold;
    color: var(--color-text);
    font-size: var(--size-text-small);
}

.input select {
    border: none;
    color: var(--color-text);
    font-weight: bold;
    width: 100%;
    margin:0;
}

</style>

