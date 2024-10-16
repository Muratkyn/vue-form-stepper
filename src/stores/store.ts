import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("store", () => {
  const currentPage = ref<number>(1);
  const selectedStore = ref<string>("");
  const renovationService = ref<string>("");
  const purchaseProducts = ref<string>("");

  return {
    currentPage,
    selectedStore,
    renovationService,
    purchaseProducts,
  };
});
