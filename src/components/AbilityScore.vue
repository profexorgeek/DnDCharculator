<script lang="ts" setup>

const props = defineProps({
    dataLabel: String,
    dataScore: Number,
    dataModifier: Number
});

const emit = defineEmits(
    ['update:dataScore']);

</script>

<template>
    <div class="abilityScore">
        <div class="label">{{ dataLabel }}</div>
        <div class="score">
            <input
                type="text"
                maxlength="2"
                v-model="dataScore"
                @input="$emit('update:dataScore', dataScore)" />
        </div>
        <div class="bonus">{{ dataModifier }}</div>
    </div>
</template>