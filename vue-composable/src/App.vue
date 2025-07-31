<template>
  <div>
    <!-- <h1 v-if="formatting === 'h1'">Count: {{ counter.count }}</h1>
    <h2 v-else-if="formatting === 'h2'">Count: {{ counter.count }}</h2>
    <p v-else>Count: {{ counter.count }}</p> -->
    <component :is="formatting">Count: {{ counter.count }}</component>
    <button @click="counter.increment">Increment</button>
  </div>

  <div>
    <select v-model="formatting">
      <option value="h1">h1</option>
      <option value="h2">h2</option>
      <option value="h3">h3</option>
      <option value="p">paragraph</option>
    </select>
  </div>

  <div>
    <ol>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounter } from './composable/counter';
import { useFormat } from './composable/format';

// const { count, increment } = useCounter();
const counter = useCounter();
const { formatting } = useFormat();
const fruits = ref(['apple', 'banana', 'orange']);
</script>