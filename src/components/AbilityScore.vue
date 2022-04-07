<script lang="ts" setup>
import AbilityScoreModel from '@/models/AbilityScoreModel';

const props = defineProps({
    ability: { type: AbilityScoreModel, required: true }
});

const emit = defineEmits(['update:ability']);

</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title text-center">{{ability.Name}}</div>
            <div class="card-text">
                <div class="alert alert-dark fs-5 text-center">{{ability.ModifierString}}</div>
                <input
                type="text"
                class="form-control fs-6 text-center"
                maxlength="2"
                v-model="ability.Base"
                @input="$emit('update:ability', ability)" />
            </div>
        </div>
    </div>
</template>
