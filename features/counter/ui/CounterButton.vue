<script setup lang="ts">
const counter = useCounter()
</script>

<template>
  <div class="counter">
    <p class="counter__value">
      Count: <strong>{{ counter.count }}</strong>
    </p>
    <p class="counter__double">
      Double: {{ counter.doubleCount }}
    </p>
    <div class="counter__actions">
      <SharedUiButton @click="counter.decrement()">
        -
      </SharedUiButton>
      <SharedUiButton
        variant="outline"
        @click="counter.reset()"
      >
        Reset
      </SharedUiButton>
      <SharedUiButton @click="counter.increment()">
        +
      </SharedUiButton>
    </div>
  </div>
</template>

<style scoped>
.counter {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  margin: 2rem auto;
  max-width: 400px;
  padding: 2rem;
}

.counter__value {
  font-size: 1.5rem;
}

.counter__double {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.counter__actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1.5rem;
}
</style>
