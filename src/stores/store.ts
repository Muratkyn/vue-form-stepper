import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAppStore = defineStore("store", () => {
  const currentPage = ref<number>(1);
  const selectedStore = ref<string>("");
  const renovationService = ref<string>("");
  const purchaseProducts = ref<string>("");
  const productTypology = ref<string>("");

  const step = [1, 2, 3, 4, 5];
  const steps = [
    {
      id: step.length - 4,
      name: "Project",
    },
    {
      id: step.length - 3,
      name: "Type",
    },
    {
      id: step.length - 2,
      name: "Details",
    },
    {
      id: step.length - 1,
      name: "Time",
    },
    {
      id: step.length,
      name: "Data",
    },
  ];

  const stepsConfig = computed(() => {
    return steps.map((step) => {
      return {
        id: step.id,
        name: step.name,
        isCompleted: step.id < currentPage.value,
      };
    });
  });

  return {
    currentPage,
    selectedStore,
    renovationService,
    purchaseProducts,
    productTypology,
    step,
    steps,
    stepsConfig,
  };
});
