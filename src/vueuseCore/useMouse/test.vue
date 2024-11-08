<script setup lang="ts">
import { useMouse } from './useMouse.ts';

const { x, y } = useMouse({ touch: false });
</script>

<template>
  <div>
    <p>Client X: {{ x }}</p>
    <p>Client Y: {{ y }}</p>
  </div>
</template>