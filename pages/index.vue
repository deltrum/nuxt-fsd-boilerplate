<script setup lang="ts">
useHead({
  title: 'Nuxt FSD Boilerplate',
  meta: [
    { name: 'description', content: 'A Nuxt 3 boilerplate with Feature-Sliced Design architecture' }
  ]
})
</script>

<template>
  <div class="home">
    <h1 class="home__title">
      Nuxt FSD Boilerplate
    </h1>
    <p class="home__subtitle">
      Built with Nuxt 3, TypeScript, Pinia, Vitest &amp; Feature-Sliced Design
    </p>

    <FeaturesCounterCounterButton />
  </div>
</template>

<style scoped>
.home {
  padding: 2rem 0;
  text-align: center;
}

.home__title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.home__subtitle {
  margin-top: 0.5rem;
  font-size: 1.125rem;
  color: var(--color-text-muted);
}
</style>
