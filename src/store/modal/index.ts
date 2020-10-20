import { StoreOptions } from 'vuex';

import { ModalState } from './typings';

interface Data {
    readonly name: string;
    readonly description: string;
}

export const modalStore: StoreOptions<ModalState> = {
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
