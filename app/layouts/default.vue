<template>
  <div class="layout">
    <WidgetsHeaderAppHeader />
    <main class="layout__content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__content {
  flex: 1;
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem;
  width: 100%;
}
</style>
