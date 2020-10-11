<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  padding: 5px 15px;
  margin: 0;

  background-color: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
}

.base-button:hover,
.base-button:active {
  background-color: cornflowerblue;
}
</style>
