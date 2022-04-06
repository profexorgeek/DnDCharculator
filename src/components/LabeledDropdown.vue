<script lang="ts" setup>

const props = defineProps({
    dataLabel: String,
    dataSelected: String,
    dataValues: Array
});

const emit = defineEmits([
    'update:dataLabel',
    'update:dataSelected',
    'update:dataValues']);

</script>

<template>
    <div class="label">{{ dataLabel }}</div>
    <div class="input">
        <select :name="dataLabel">
            <option 
                v-for="item of dataValues"
                :value="item"
                :selected="item == dataSelected">{{ item }}</option>
        </select>
    </div>
</template>

