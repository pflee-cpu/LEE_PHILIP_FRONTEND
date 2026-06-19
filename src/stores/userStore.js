import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useUserStore = defineStore(
  'user',
  () => {
    const currentUser = ref('')
    const isLoggedIn = computed(() => currentUser.value.trim() !== '')
    function login(name) {
      if (!name.trim()) return
      currentUser.value = name.trim()
    }
    function logout() {
        currentUser.value = ''
    }
    return {
      currentUser,
      isLoggedIn,
      login,
      logout
    }
  },
  {
    persist: true
  }
)