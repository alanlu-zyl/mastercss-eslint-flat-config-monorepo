<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const CSSRuntimeProvider = defineAsyncComponent(
  async () => (await import("@master/css.vue")).CSSRuntimeProvider
);
</script>

<template>
  <CSSRuntimeProvider :config="import('./master.css')">
    <h1>nuxt-A</h1>
    <main>
      <div class="fg:alpha">success</div>
      <div class="fg:beta">error</div>
    </main>
  </CSSRuntimeProvider>
</template>
