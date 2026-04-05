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
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem 2rem;
}

.header__logo {
  color: var(--color-primary-dark);
  font-size: 1.25rem;
  font-weight: 700;
}

.header__nav {
  display: flex;
  gap: 1.5rem;
}
</style>
