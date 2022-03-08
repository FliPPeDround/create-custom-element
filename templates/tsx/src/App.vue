<script setup lang="ts">
import { register } from './CustomElement';
register('dart-element')
</script>

<template>
  <dart-element></dart-element>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
