<template>
    <div class="layout flex flex-col min-h-svh bg-zinc-900 selection:bg-accent-500">
      <LoaderPage></LoaderPage>
      <header>  
        <TheHeader></TheHeader>
      </header>
      <main class="flex-grow z-10 rounded-5xl lg:rounded-b-6xl bg-zinc-900 overflow-hidden lg:pb-24 lg:mb-[100vh]">
        <slot />
      </main>
        <footer class="bg-accent-500 overflow-hidden lg:fixed lg:bottom-0 w-full z-0 selection:bg-white">
          <TheFooter></TheFooter>
          </footer>

    </div>
</template>
<style scoped>
.layout {
  overflow-x: hidden;
}
</style>
