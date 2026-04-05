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
  border: 2px solid var(--color-primary);
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  min-width: 48px;
  padding: 0.5rem 1.25rem;
  transition: all 0.15s ease;
}

.btn--primary {
  background-color: var(--color-primary);
  color: #fff;
}

.btn--primary:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

.btn--outline {
  background-color: transparent;
  color: var(--color-primary-dark);
}

.btn--outline:hover {
  background-color: var(--color-primary);
  color: #fff;
}
</style>
