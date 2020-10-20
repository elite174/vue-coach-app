<template>
    <BaseLayout>
        <Filter class="container" />
        <Coach
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :coachData="coach"
            class="container"
        />
        <InfoModal />
    </BaseLayout>
</template>

<script lang="ts">
import BaseLayout from '../UI/BaseLayout.vue';
import Filter from '../coaches/Filter.vue';
import Coach from '../coaches/Coach.vue';
import InfoModal from '../coaches/InfoModal.vue';

import { coachesData } from '../../data';
import { mapGetters } from 'vuex';

export default {
    components: {
        Filter,
        Coach,
        BaseLayout,
        InfoModal
    },
    computed: {
        ...mapGetters('coach', ['filteredCoaches'])
    }
};
</script>

<style scoped>
.container {
    margin-bottom: 30px;
}

.container:last-child {
    margin-bottom: 0;
}
</style>
