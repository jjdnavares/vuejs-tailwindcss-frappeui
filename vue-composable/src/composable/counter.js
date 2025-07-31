import { ref, onMounted } from 'vue';

export function useCounter() {
    const count = ref(0);

    function increment() {
        count.value++;
    }

    onMounted(() => {
        console.log('Counter mounted');
    });

    return {
        count,
        increment,
    };
}