<script lang="ts" setup>
import CharacterModel from '@/models/CharacterModel';
import SkillScore from '@/components/SkillScore.vue';
const props = defineProps({
    character: {type: CharacterModel, required: true}
})
</script>

<template>
    <div class="container p-3">
        <p class="text-center fs-4 mb-4">Skills</p>
        <SkillScore v-for="skill of character.Skills" v-bind:skill="skill" />
    </div>
</template>