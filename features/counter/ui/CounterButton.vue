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
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}

.counter__value {
  font-size: 1.5rem;
}

.counter__double {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.counter__actions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}
</style>
