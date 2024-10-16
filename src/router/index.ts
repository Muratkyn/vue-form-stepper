import { createRouter, createWebHistory } from "vue-router";
import FirstStep from "@/components/FirstStep.vue";
import SecondStep from "@/components/SecondStep.vue";
import ThirdStep from "@/components/ThirdStep.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "firstStep",
      component: FirstStep,
    },
    {
      path: "/reparto",
      name: "secondStep",
      component: SecondStep,
    },
    {
      path: "/data-ora",
      name: "thirdStep",
      component: ThirdStep,
    },
  ],
});

export default router;
