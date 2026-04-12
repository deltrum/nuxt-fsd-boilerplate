<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'outline'
}>(), {
  variant: 'primary'
})
</script>

<template>
  <button
    class="btn"
    :class="`btn--${variant}`"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  min-width: 48px;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius);
  transition: all 0.15s ease;
  cursor: pointer;
}

.btn--primary {
  color: #fff;
  background-color: var(--color-primary);
}

.btn--primary:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

.btn--outline {
  color: var(--color-primary-dark);
  background-color: transparent;
}

.btn--outline:hover {
  color: #fff;
  background-color: var(--color-primary);
}
</style>
