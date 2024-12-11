<script setup lang="ts">
import MouseTracker from "./vueuseCore/useMouse/test.vue";
import DraggableTest from "@/components/VueDraggablePlus/test.vue"
</script>

<template>
	<div>
		<!-- <MouseTracker /> -->
		 <DraggableTest/>
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
