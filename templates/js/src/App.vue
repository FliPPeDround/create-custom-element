<script setup>
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