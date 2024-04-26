<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const CSSRuntimeProvider = defineAsyncComponent(
  async () => (await import("@master/css.vue")).CSSRuntimeProvider
);
</script>

<template>
  <CSSRuntimeProvider :config="import('./master.css')">
    <h1>nuxt-B</h1>
    <main>
      <div class="fg:alpha">error</div>
      <div class="fg:beta">success</div>
    </main>
  </CSSRuntimeProvider>
</template>
