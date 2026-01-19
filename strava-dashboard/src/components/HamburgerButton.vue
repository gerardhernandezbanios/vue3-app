<template>
  <button class="hamburger" @click="$emit('toggle')">
    <span />
    <span />
    <span />
  </button>
</template>

<style scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 28px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  height: 3px;
  background: var(--text-color, #333);
  border-radius: 2px;
}
</style>
