<script setup lang="ts">
import CharacterModel from '@/models/CharacterModel';
import Dnd5eModel from '@/models/Dnd5eModel';
import LabeledField from './LabeledField.vue';
import LabeledDropdown from './LabeledDropdown.vue';
import AbilityScore from './AbilityScore.vue';

const props = defineProps({
    character: CharacterModel,
    core: Dnd5eModel
});

const emit = defineEmits(["update:character"]);

</script>

<template>
    <h1>Character</h1>
    <div class="characterHeader">
        <LabeledField :dataLabel="'Name'" v-model:dataValue="character.Name" />
        <LabeledField :dataLabel="'Race'" v-model:dataValue="character.Race" />
        <LabeledField :dataLabel="'Class'" v-model:dataValue="character.Class" />
    </div>
    <div class="abilityScores">
        <AbilityScore
            :dataLabel="'Strength'"
            v-model:dataScore="character.Str"
            v-model:dataModifier="character.StrMod" />
        <AbilityScore
            :dataLabel="'Dexterity'"
            v-model:dataScore="character.Dex"
            v-model:dataModifier="character.DexMod" />
        <AbilityScore
            :dataLabel="'Constitution'"
            v-model:dataScore="character.Con"
            v-model:dataModifier="character.ConMod" />
        <AbilityScore
            :dataLabel="'Intelligence'"
            v-model:dataScore="character.Int"
            v-model:dataModifier="character.IntMod" />
        <AbilityScore
            :dataLabel="'Wisdom'"
            v-model:dataScore="character.Wis"
            v-model:dataModifier="character.WisMod" />
        <AbilityScore
            :dataLabel="'Charisma'"
            v-model:dataScore="character.Cha"
            v-model:dataModifier="character.ChaMod" />
    </div>
</template>