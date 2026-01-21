import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const name = ref<string | null>(null);
  const token = ref<string | null>(null);

  function setUser(n: string, t: string) {
    name.value = n;
    token.value = t;
  }

  function clear() {
    name.value = null;
    token.value = null;
  }

  return { name, token, setUser, clear };
});
