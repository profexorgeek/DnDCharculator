<script setup lang="ts">
import CharacterModel from '@/models/CharacterModel';
import Dnd5eModel from '@/models/Dnd5eModel';
import LabeledField from './LabeledField.vue';

const props = defineProps({
    character: CharacterModel,
    core: Dnd5eModel
});
</script>

<template>
    <h1>Character</h1>
    <div>Got {{ core?.Races?.length }} races</div>
    <div>Got {{ core?.Classes?.length }} classes</div>
    <div class="characterHeader">
        <LabeledField :dataLabel="'Name'" :dataValue="character?.Name" />
        <LabeledField :dataLabel="'Class'" :dataValue="character?.Class" />
        <LabeledField :dataLabel="'Race'" :dataValue="character?.Race" />
    </div>
</template>