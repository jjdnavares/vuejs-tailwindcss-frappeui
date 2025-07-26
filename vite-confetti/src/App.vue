<template>
<div class="m-3">
  <button @click="showConfetti" class="bg-lime-800 text-lime-50 p-2 rounded">Confetti</button>
</div>
</template>

<script setup>
import confetti from 'canvas-confetti';

function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

</script>