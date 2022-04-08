<script lang="ts" setup>
import AbilityScoreModel from '@/models/AbilityScoreModel';
import CharacterModel from '@/models/CharacterModel';
import AbilityScore from './AbilityScore.vue';
const props = defineProps({
    character: {type: CharacterModel, required: true}
})
</script>

<template>
    <div class="container p-3">
        <p class="text-center fs-4">Abilities</p>
        <AbilityScore v-for="ability of character.Abilities" v-bind:ability="ability" />
    </div>
</template>