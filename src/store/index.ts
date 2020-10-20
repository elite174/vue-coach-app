import { createStore } from 'vuex';

import { modalStore } from './modal';

export default createStore({
    modules: {
        modal: {
            namespaced: true,
            ...modalStore
        }
    }
});
