<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import CharacterHeader from './components/CharacterHeader.vue'
import CharacterModel from './models/CharacterModel';
import Dnd5eDataService from './services/Dnd5eDataService';
import AbilityPanel from './components/AbilityPanel.vue';
import SkillsPanel from './components/SkillsPanel.vue';

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
  <div class="container">
    <div class="row">
      <div class="col">
        <CharacterHeader v-model:character="(character as CharacterModel)" />
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <AbilityPanel v-model:character="(character as CharacterModel)" />
      </div>
      <div class="col-3">
        <div class="row">
          <div class="col">
            <SkillsPanel v-model:character="(character as CharacterModel)" />
          </div>
        </div>
      </div>
      <div class="col">

      </div>
    </div>
  </div>
</template>