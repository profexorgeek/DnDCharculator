<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import CharacterHeader from './components/CharacterHeader.vue'
import CharacterModel from './models/CharacterModel';
import Dnd5eModel from './models/Dnd5eModel';

const CORE_DATA_URL = "/data/dnd5e.json";

let character = ref( new CharacterModel() );
let core = ref (new Dnd5eModel() );

watchEffect(async () => {
  core.value = await (await fetch(CORE_DATA_URL)).json();
  console.log(`Got ${core.value?.Races?.length } races`);
});

const emit = defineEmits(["update:core"]);

</script>

<template>
  <header>
    <CharacterHeader :character="character" :core="core" />
  </header>

  <main>
    
  </main>
</template>

<style>

/* @import './assets/base.css'; */

</style>
