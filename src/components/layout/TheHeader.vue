<template>
  <header class="header">
    <router-link
      v-for="link in links"
      :key="link.to + link.text"
      :to="link.to"
      class="link"
      >{{ link.text }}</router-link
    >
  </header>
</template>

<script lang="ts">
import Vue from "vue";

interface Link {
  readonly text: string;
  readonly to: string;
}

const links: Link[] = [
  { to: "/", text: "Coaches" },
  { to: "/requests", text: "Requests" }
];

export default {
  data() {
    return {
      links
    };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;

  height: 80px;
  padding: 0 30px;
}

.link {
  margin-right: 30px;

  text-decoration: none;
  color: black;
  transition: color 0.3s ease-out;
}

.link:hover,
.link.router-link-active {
  color: cornflowerblue;
}
</style>
