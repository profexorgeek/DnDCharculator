<script lang="ts" setup>
import { computed } from 'vue';


const props = defineProps({
    dataLabel: String,
    dataScore: Number,
    dataModifier: Number
});

const emit = defineEmits(
    ['update:dataScore']);

const modifierAsString = computed<string>(() => {
    let mod = props?.dataModifier;
    if(mod == undefined || mod == null) {
        return "0";
    }
    
    if(mod > 0) {
        return `+${mod}`;
    }
    else {
        return mod.toString();
    }
});

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
        <div class="modifier">({{ modifierAsString }})</div>
    </div>
</template>

<style scoped>

.abilityScore {
    width: var(--width-ability-score);
    border: 1px solid var(--color-border);
    padding:3px;
}

.label {
    color: var(--color-text);
    font-size: var(--size-text-small);
    width: 100%;
    padding:0;
    margin:0;
    text-align: center;
}

.score input {
    color: var(--color-text);
    font-weight: bold;
    font-size: var(--size-text-large);
    border: none;
    width: 100%;
    text-align: center;
}

.modifier {
    font-size: var(--size-text-normal);
    padding:0;
    margin:0;
    width:100%;
    text-align: center;
}

</style>