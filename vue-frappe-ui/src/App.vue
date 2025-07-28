<template>
 <div>
  <p class="text-blue-800">The quick brown fox jumps over the lazy dog.</p>
 </div>
 <div class="p-1">
  <Button
    :variant="'outline'"
    :ref_for="true"
    theme="gray"
    size="sm"
    label="Button"
    :loading="false"
    :loadingText="null"
    :disabled="false"
    :link="null"
  >
    Button
  </Button>
</div>
</template>

<script setup>
    import { Button } from 'frappe-ui';
</script>