import { ref } from 'vue';

export function useFormat() {
    const formatting = ref('h1');

    return {
        formatting,
    };
}
    