<script setup lang="ts">

</script>

<template>
  <Suspense>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-black text-white">
        <q-toolbar>
          <q-toolbar-title>
            Default layout
          </q-toolbar-title>
          <q-space />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <slot />
      </q-page-container>
    </q-layout>
  </Suspense>
</template>

<style deep></style>
