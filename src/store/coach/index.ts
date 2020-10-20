import { coachesData } from '@/data';
import { Module } from 'vuex';

import { RootState } from '../typings';
import { CoachState } from './typings';

export const coachStore: Module<CoachState, RootState> = {
    state: {
        coaches: coachesData,
        filteredSkills: []
    },
    getters: {
        skills(state) {
            const skillSet = new Set<string>();

            state.coaches.forEach((coach) =>
                coach.skills.forEach((skill) => skillSet.add(skill))
            );

            return skillSet;
        },
        filteredCoaches(state) {
            if (state.filteredSkills.length === 0) {
                return state.coaches;
            }

            const filteredSkillSet = new Set(state.filteredSkills);

            return state.coaches.filter((coach) => {
                for (const skill of coach.skills) {
                    if (filteredSkillSet.has(skill)) {
                        return true;
                    }
                }

                return false;
            });
        }
    },
    mutations: {
        setFilteredSkills(state, skills: string[]) {
            state.filteredSkills = skills;
        }
    },
    actions: {
        setFilteredSkills({ commit }, skills: string[]) {
            commit('setFilteredSkills', skills);
        }
    }
};
