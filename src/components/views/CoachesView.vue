<template>
  <BaseLayout>
    <Filter class="container" />
    <Coach
      v-for="coach in coaches"
      :key="coach.id"
      :coachData="coach"
      class="container"
    />
  </BaseLayout>
</template>

<script lang="ts">
import Vue from "vue";
import BaseLayout from "../UI/BaseLayout.vue";
import Filter from "../coaches/Filter.vue";
import Coach from "../coaches/Coach.vue";

import { coachesData } from "../../data/index";

export default {
  components: {
    Filter,
    Coach,
    BaseLayout
  },
  data() {
    return {
      coaches: coachesData
    };
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
