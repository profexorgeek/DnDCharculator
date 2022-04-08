<script lang="ts" setup>
import { computed } from '@vue/reactivity';

import CharacterModel from '@/models/CharacterModel';
import Dnd5eDataService from '@/services/Dnd5eDataService';

import FieldText from './FieldText.vue';
import FieldNumber from './FieldNumber.vue';
import SkillScore from './SkillScore.vue';
import AbilityPanel from './AbilityPanel.vue';

const props = defineProps({
    character: {type: CharacterModel, required:true}
});
const emit = defineEmits(["update:character"]);
const races = computed(() => Dnd5eDataService.Instance.Data.Races);
const classes = computed(() => Dnd5eDataService.Instance.Data.Classes);
const alignments = computed(() => Dnd5eDataService.Instance.Data.Alignments);
</script>

<template>

    <div class="container">

        <!-- Character Core Row -->
        <div class="row">
            <div class="col">
                <FieldText :fieldName="'Name'" :fieldPrompt="'Character Name'" v-model:fieldValue="character.Name" />
            </div>
            <div class="col-2">
                <FieldText :fieldName="'Race'" :fieldPrompt="'Race'" v-model:fieldValue="character.Race" />
            </div>
            <div class="col-2">
                <FieldText :fieldName="'Class'" :fieldPrompt="'Class'" v-model:fieldValue="character.Class" />
            </div>
            <div class="col-2">
                <FieldText :fieldName="'Alignment'" :fieldPrompt="'Alignment'" v-model:fieldValue="character.Alignment" />
            </div>
            <div class="col-2">
                <FieldNumber :fieldName="'Level'" :fieldPrompt="'Level'" v-model:fieldValue="character.Level" />
            </div>
        </div>

        <!-- Character Detail Row -->
        <div class="row">
            <div class="col">
                <FieldNumber :fieldName="'Age'" :fieldPrompt="'Age'" v-model:fieldValue="character.Age" />
            </div>
            <div class="col">
                <FieldText :fieldName="'Height'" :fieldPrompt="'Height'" v-model:fieldValue="character.Height" />
            </div>
            <div class="col">
                <FieldText :fieldName="'Weight'" :fieldPrompt="'Weight'" v-model:fieldValue="character.Weight" />
            </div>
            <div class="col">
                <FieldText :fieldName="'Eyes'" :fieldPrompt="'Eyes'" v-model:fieldValue="character.Eyes" />
            </div>
            <div class="col">
                <FieldText :fieldName="'Hair'" :fieldPrompt="'Hair'" v-model:fieldValue="character.Hair" />
            </div>
            <div class="col">
                <FieldNumber :fieldName="'Proficiency'" :fieldPrompt="'Hair'" v-model:fieldValue="character.Proficiency.Score" />
            </div>
        </div>
    </div>
</template>