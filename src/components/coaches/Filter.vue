<template>
    <BaseContainer>
        <div class="filter-header">Skill set</div>
        <div class="skill-list">
            <BaseCheckbox
                v-for="skill in skills"
                :key="skill"
                :id="skill"
                :name="'skills'"
                :checked="chosenSkills.has(skill)"
                :onChange="() => handleCheckboxChange(skill)"
                class="checkbox"
            >
                {{ skill }}
            </BaseCheckbox>
        </div>
        <div class="button-row">
            <BaseButton class="apply-button" @click="handleApplyClick">
                Apply filter
            </BaseButton>
            <transition name="reset-button">
                <BaseButton
                    class="reset-button"
                    v-if="filteredSkills.length > 0"
                    @click="handleResetClick"
                >
                    Reset filter
                </BaseButton>
            </transition>
        </div>
    </BaseContainer>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';

import BaseContainer from '../UI/BaseContainer.vue';
import BaseCheckbox from '../UI/BaseCheckbox.vue';
import BaseButton from '../UI/BaseButton.vue';

export default defineComponent({
    components: {
        BaseContainer,
        BaseCheckbox,
        BaseButton
    },
    data() {
        return {
            chosenSkills: new Set<string>()
        };
    },
    computed: {
        ...mapState('coach', ['filteredSkills']),
        ...mapGetters('coach', ['skills'])
    },
    methods: {
        ...mapActions('coach', ['setFilteredSkills']),
        handleApplyClick() {
            this.setFilteredSkills(Array.from(this.chosenSkills));
        },
        handleCheckboxChange(skill: string) {
            if (this.chosenSkills.has(skill)) {
                this.chosenSkills.delete(skill);
            } else {
                this.chosenSkills.add(skill);
            }
        },
        handleResetClick() {
            this.chosenSkills = new Set();
            this.setFilteredSkills([]);
        }
    }
});
</script>

<style scoped>
.filter-header {
    font-size: 24px;
    font-weight: 500;

    margin-bottom: 15px;
}
.checkbox {
    margin-right: 30px;
}

.button-row {
    display: flex;
}

.apply-button {
    margin-right: 30px;
}

.skill-list {
    margin-bottom: 15px;
}

.reset-button {
    transition: opacity 0.15s ease-out;
}

.reset-button-enter-from,
.reset-button-leave-to {
    opacity: 0;
}

.reset-button-enter-to,
.reset-button-leave-from {
    opacity: 1;
}
</style>
