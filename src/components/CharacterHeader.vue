<script lang="ts" setup>
import CharacterModel from '@/models/CharacterModel';
import LabeledField from './LabeledField.vue';
import LabeledDropdown from './LabeledDropdown.vue';
import AbilityScore from './AbilityScore.vue';
import { computed } from '@vue/reactivity';
import Dnd5eDataService from '@/services/Dnd5eDataService';

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
                <label for="characterName">Name</label>
                <input
                    type="text"
                    id="characterName"
                    class="form-control"
                    placeholder="Character Name"
                    aria-label="Name"
                    v-model="character.Name"
                    @input="$emit('update:character', character)" />
            </div>
            <div class="col-2">
                <label for="characterRace">Race</label>
                <select 
                    id="characterRace"
                    class="form-control"
                    aria-label="Race"
                    v-model="character.Race"
                    @change="$emit('update:character', character)">
                        <option 
                        v-for="item of races"
                        :value="item"
                        :selected="item == character.Race">{{ item }}</option>
                </select>
            </div>
            <div class="col-2">
                <label for="characterClass">Class</label>
                <select 
                    id="characterClass"
                    class="form-control"
                    aria-label="Class"
                    v-model="character.Class"
                    @change="$emit('update:character', character)">
                        <option 
                        v-for="item of classes"
                        :value="item"
                        :selected="item == character.Class">{{ item }}</option>
                </select>
            </div>
            <div class="col-2">
                <label for="characterAlignment">Alignment</label>
                <select 
                    id="characterAlignment"
                    class="form-control"
                    aria-label="Alignment"
                    v-model="character.Alignment"
                    @change="$emit('update:character', character)">
                        <option 
                        v-for="item of alignments"
                        :value="item"
                        :selected="item == character.Class">{{ item }}</option>
                </select>
            </div>
            <div class="col-2">
                <label for="characterLevel">Level</label>
                <input
                    type="text"
                    id="characterLevel"
                    class="form-control"
                    placeholder="Lvl"
                    aria-label="Level"
                    v-model="character.Level"
                    @input="$emit('update:character', character)" />
            </div>
        </div>

        <!-- Character Detail Row -->
        <div class="row">
            <div class="col">
                <label for="characterAge">Age</label>
                <input
                    type="text"
                    id="characterAge"
                    class="form-control"
                    placeholder="Age"
                    aria-label="Age"
                    v-model="character.Age"
                    @input="$emit('update:character', character)" />
            </div>
            <div class="col">
                <label for="characterHeight">Height</label>
                <input
                    type="text"
                    id="characterHeight"
                    class="form-control"
                    placeholder="Ht"
                    aria-label="Height"
                    v-model="character.Height"
                    @input="$emit('update:character', character)" />
            </div>
            <div class="col">
                <label for="characterWeight">Weight</label>
                <input
                    type="text"
                    id="characterWeight"
                    class="form-control"
                    placeholder="Wt"
                    aria-label="Weight"
                    v-model="character.Weight"
                    @input="$emit('update:character', character)" />
            </div>
            <div class="col">
                <label for="characterEyes">Eyes</label>
                <input
                    type="text"
                    id="characterEyes"
                    class="form-control"
                    placeholder="Eye"
                    aria-label="Eye Color"
                    v-model="character.Eyes"
                    @input="$emit('update:character', character)" />
            </div>
            <div class="col">
                <label for="characterHair">Hair</label>
                <input
                    type="text"
                    id="characterHair"
                    class="form-control"
                    placeholder="Eye"
                    aria-label="Eye Color"
                    v-model="character.Eyes"
                    @input="$emit('update:character', character)" />
            </div>
            <div class="col">
                <label for="characterProficiency">Proficiency</label>
                <input
                    type="text"
                    id="characterProficiency"
                    class="form-control"
                    placeholder="Proficiency Bonus"
                    aria-label="Proficiency"
                    v-model="character.Proficiency"
                    @input="$emit('update:character', character)" />
            </div>
        </div>

        <!-- Abilities and Skills -->
        <div class="row">
            <!-- Ability Scores -->
            <div class="col-2">
                <AbilityScore v-for="ability of character.Abilities" v-bind:ability="ability" />
            </div>

        </div>

    </div>
</template>