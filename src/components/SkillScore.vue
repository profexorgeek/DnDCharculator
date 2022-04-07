<script lang="ts" setup>
import SkillModel from '@/models/SkillModel';
const props = defineProps({
    skill: {type: SkillModel, required: true}
});
const emit = defineEmits(['update:skill']);
</script>

<template>
    <div class="skillScore mb-1 mx-1">
        <div class="row">
            <div class="col-1">
                <input
                    type="checkbox"
                    :id="'characterProficiency'+skill.SafeName"
                    v-model="skill.Proficient"
                    @change="$emit('update:skill', skill)"
                    />
            </div>
            <div class="col-2 fw-bold">{{ skill.ModifierString }}</div>
            <div class="col-6 fs-6"><span class="fs-6">{{ skill.Name }}</span></div>
            <div class="col-2 fs-6 text-muted">({{ skill.Ability.ShortName }})</div>
        </div>
    </div>
</template>