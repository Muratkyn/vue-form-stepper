<template>
  <div class="stepper-wrapper">
    <div class="stepper-container" v-for="step in stepsConfig" :key="step.id">
      <h3
        :class="{ isCompleted: step.id <= store.currentPage }"
        class="stepper-number"
      >
        {{ step.id }}
      </h3>
      <hr
        :class="{ isCompleted: step.id < store.currentPage }"
        v-if="step.id < 5"
      />
    </div>
  </div>
  <slot></slot>
  <div class="button-field" :class="{ buttonEnd: store.currentPage === 1 }">
    <button
      @click="onClickBack"
      class="button-item"
      v-if="store.currentPage > 1"
    >
      Back
    </button>
    <button @click="onClickNext" class="button-item">Next</button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useAppStore } from "@/stores/store";
import router from "@/router";
import { useRoute } from "vue-router";

const route = useRoute();

const store = useAppStore();
const steps = [
  {
    id: 1,
    name: "Project",
  },
  {
    id: 2,
    name: "Type",
  },
  {
    id: 3,
    name: "Details",
  },
  {
    id: 4,
    name: "Date and time",
  },
  {
    id: 5,
    name: "User data",
  },
];

const stepsConfig = computed(() => {
  return steps.map((step) => {
    return {
      id: step.id,
      isCompleted: step.id < store.currentPage,
    };
  });
});

const onClickBack = () => {
  if (route.path === "/reparto") {
    router.push("/");
  }
  if (route.path === "/data-ora") {
    router.push("/reparto");
  }
};

const onClickNext = () => {
  if (route.path === "/") {
    router.push("/reparto");
  }
  if (route.path === "/reparto") {
    router.push("/data-ora");
  }
};
</script>

<style scoped>
.stepper-wrapper {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  font-family: "Dosis", sans-serif;
}

.stepper-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 3rem;
}

.stepper-number {
  text-align: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.18rem;
  width: 1.4rem;
  background-color: white;
  border: #bdbaba solid;
}

hr {
  width: 280px;
  margin-left: 1.5rem;
}

.isCompleted {
  color: white;
  border: solid #188803;
  background-color: #188803;
}

.button-field {
  margin-top: 4rem;
  width: full;
  height: 5rem;
  background-color: rgb(221, 255, 215);
  display: flex;
  justify-content: space-between;
}

.button-item {
  margin: 1rem;
  width: 10%;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #188803;
  padding: 1rem;
  border-radius: 4px;
  border: solid 2px #188803;
  width: 10%;
  cursor: pointer;
  box-sizing: border-box;
}

.buttonEnd {
  justify-content: end;
}
</style>
