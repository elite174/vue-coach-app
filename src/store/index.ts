import { createStore } from 'vuex';

import { modalStore } from './modal';
import { coachStore } from './coach';

export default createStore({
    modules: {
        modal: {
            namespaced: true,
            ...modalStore
        },
        coach: {
            namespaced: true,
            ...coachStore
        }
    }
});
