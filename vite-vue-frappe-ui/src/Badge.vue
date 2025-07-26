<template>
    <div :class="[
        colorToClasses[color],
        'flex w-fit px-3 py-1 text-s font-semibold rounded-2xl'
    ]">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed, useSlots, watch} from "vue";

const slots = useSlots();

const statusToColor = {
    Active: "green",
    Inactive: "red",
    Paid: "blue",
    Unpaid: "orange",
    Pending: "yellow",
}

const colorToClasses = {
    green: "text-green-700 bg-green-300",
    red: "text-red-700 bg-red-300",
    blue: "text-blue-700 bg-blue-300",
    orange: "text-orange-700 bg-orange-300",
    yellow: "text-yellow-700 bg-yellow-300",
}

const props = defineProps({
    status: String,
})

const color = computed(() => {
    let children = slots.default()[0].children.trim();
    return statusToColor[children]
})

watch(color, (value) =>{
    console.log(value);
})
</script>