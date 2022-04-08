<script lang="ts" setup>
import SkillModel from '@/models/SkillModel';
const props = defineProps({
    skill: {type: SkillModel, required: true}
});
const emit = defineEmits(['update:skill']);
</script>

<template>
    <div class="row border-bottom mb-1">
        <div class="col-1">
            <input
                type="checkbox"
                class="form-control mt-2"
                :id="'characterProficiency'+skill.SafeName"
                v-model="skill.Proficient"
                @change="$emit('update:skill', skill)"
                />
        </div>
        <div class="col-3 fw-bold text-end">[ {{ skill.ModifierString }} ]</div>
        <div class="col-8 fs-6">{{ skill.Name }} <span class="text-muted">({{ skill.Ability.ShortName }})</span></div>
    </div>
</template>