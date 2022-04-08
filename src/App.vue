<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import CharacterHeader from './components/CharacterHeader.vue'
import CharacterModel from './models/CharacterModel';
import Dnd5eDataService from './services/Dnd5eDataService';

const CORE_DATA_URL = "/data/dnd5e.json";
let character = ref<CharacterModel>( new CharacterModel() );
let modelCreated = false;

watchEffect(async () => {

  await Dnd5eDataService.Instance.initialize();

  // populate the character model once when data is updated
  if(!modelCreated && character.value.Abilities.length == 0) {
    character.value = CharacterModel.Create();
    modelCreated = true;
  }

});
</script>

<template>
  <div class="modal fade" id="bonusModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">Header</div>
        <div class="modal-body">Body goes here</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
  </div>

  <CharacterHeader v-model:character="(character as CharacterModel)" />
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bonusModal">Add Bonus</button>

  <div>
    <ul>
      <li>Name: {{ character.Name }}</li>
      <li>Race: {{ character.Race }}</li>
      <li>Class: {{ character.Class }}</li>
      <li>Class: {{ character.Alignment }}</li>
      <li v-for="ability of character.Abilities"> {{ability.ShortName}}: {{ability.Base}} ({{ability.Modifier}})</li>
      <li v-for="skill of character.Skills">{{skill.Name}}: {{skill.ModifierString}} ({{skill.Ability.ShortName}}) - {{ skill.Proficient }}</li>
    </ul>
  </div>
</template>