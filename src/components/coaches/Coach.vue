<template>
  <BaseContainer>
    <div class="name">{{ coach.name }}</div>
    <div class="salary">{{ priceString }}</div>
    <div class="skill-container">
      <BaseButton
        v-for="skill in coach.skills"
        :key="skill"
        class="skill-button"
      >
        {{ skill }}
      </BaseButton>
    </div>
    <div class="action-button-row">
      <BaseButton class="action-button">Contact</BaseButton>
      <BaseButton>View details</BaseButton>
    </div>
  </BaseContainer>
</template>

<script lang="ts">
import BaseContainer from "../UI/BaseContainer.vue";
import BaseButton from "../UI/BaseButton.vue";

import { CoachData } from "../../data/interfaces";

export default {
  components: {
    BaseContainer,
    BaseButton
  },
  props: {
    coachData: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      coach: this.$props.coachData as CoachData
    };
  },
  computed: {
    priceString(): string {
      return `${this.coach.salary}$/hour`;
    }
  }
};
</script>

<style scoped>
.name {
  font-size: 20px;
  font-weight: 500;

  margin-bottom: 15px;
}

.salary {
  font-size: 14px;

  margin-bottom: 15px;
}

.skill-container {
  display: flex;
}

.skill-button {
  margin-right: 15px;
}

.skill-button:last-child {
  margin-right: 0;
}

.action-button-row {
  display: flex;
  justify-content: flex-end;
}

.action-button {
  margin-right: 15px;
}
</style>
