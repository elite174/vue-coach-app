import { Module } from 'vuex';

import { RootState } from '../typings';
import { ModalState } from './typings';

interface Data {
    readonly name: string;
    readonly description: string;
}

export const modalStore: Module<ModalState, RootState> = {
    state: {
        visible: false,
        name: null,
        description: null
    },
    mutations: {
        setData(state, { name, description }: Data) {
            state.name = name;
            state.description = description;
        },
        setVisibility(state, visible: boolean) {
            state.visible = visible;
        }
    },
    actions: {
        setModalData({ commit }, data: Data) {
            commit('setData', data);
        },
        openModal({ commit }) {
            commit('setVisibility', true);
        },
        closeModal({ commit }) {
            commit('setVisibility', false);
        }
    }
};
