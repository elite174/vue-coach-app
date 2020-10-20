<template>
    <BaseModal :visible="modalVisible" :onClose="closeModal">
        <div class="container">
            <div class="name">{{ name }}</div>
            <div class="description">{{ description }}</div>
            <BaseButton @click="closeModal">Close</BaseButton>
        </div>
    </BaseModal>
</template>

<script lang="ts">
import Vue, { onMounted, PropType } from 'vue';
import { mapActions, mapState } from 'vuex';

import BaseModal from '../UI/BaseModal.vue';
import BaseButton from '../UI/BaseButton.vue';

import { ModalState } from '../../store/modal/typings';

export default {
    components: {
        BaseModal,
        BaseButton
    },
    computed: {
        ...mapState<ModalState>('modal', {
            modalVisible: (state: ModalState) => state.visible,
            name: (state: ModalState) => state.name,
            description: (state: ModalState) => state.description
        })
    },
    methods: {
        ...mapActions('modal', ['closeModal'])
    }
};
</script>

<style scoped>
.container {
    padding: 30px;
    width: 60%;

    background: white;
    border-radius: 8px;
}

.name {
    font-size: 30px;
    font-weight: 500;

    margin-bottom: 30px;
}

.description {
    margin-bottom: 30px;
}
</style>
