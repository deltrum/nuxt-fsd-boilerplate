<template>
  <header class="header">
    <div class="header__inner">
      <NuxtLink
        to="/"
        class="header__logo"
      >
        Nuxt FSD
      </NuxtLink>
      <nav class="header__nav">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.header__logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.header__nav {
  display: flex;
  gap: 1.5rem;
}
</style>
