<script lang="ts" setup>
import AbilityScoreModel from '@/models/AbilityScoreModel';
const props = defineProps({
    ability: { type: AbilityScoreModel, required: true }
});
const emit = defineEmits(['update:ability']);
</script>

<template>
    <div class="container p-0 mb-3">
        <label :for="'character'+ability.Name" class="form-label mb-1">{{ability.Name}}</label>
        <div class="input-group">
            <input
                type="text"
                :id="'character'+ability.Name"
                class="form-control"
                maxlength="2"
                v-model="ability.Base"
                @input="$emit('update:ability', ability)" />
            <span class="input-group-text fs-4">{{ability.ModifierString}}</span>
        </div>
    </div>
</template>