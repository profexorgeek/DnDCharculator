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

</script>

<template>
  <header>
    <CharacterHeader v-model:character="character" :core="core" />
  </header>
  <main>
    <ul>
      <li>Name: {{ character.Name }}</li>
      <li>Race: {{ character.Race }}</li>
      <li>Class: {{ character.Class }}</li>
      <li>Class: {{ character.Alignment }}</li>
      <li>Str: {{ character.Str }} ({{ character.StrMod }})</li>
      <li>Dex: {{ character.Dex }} ({{ character.DexMod }})</li>
      <li>Con: {{ character.Con }} ({{ character.ConMod }})</li>
      <li>Int: {{ character.Int }} ({{ character.IntMod }})</li>
      <li>Wis: {{ character.Wis }} ({{ character.WisMod }})</li>
      <li>Cha: {{ character.Cha }} ({{ character.ChaMod }})</li>
    </ul>
  </main>
</template>

<style>

@import './assets/base.css';

</style>
