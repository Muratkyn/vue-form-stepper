<template>
  <div class="stepper-wrapper">
    <div class="stepper-container" v-for="step in stepsConfig" :key="step.id">
      <div class="stepper-details__wrapper">
        <h3
          :class="{ isCompleted: step.id <= store.currentPage }"
          class="stepper-number"
        >
          {{ step.id }}
        </h3>
        <label>{{ step.name }}</label>
      </div>
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
    <button
      @click="onClickNext"
      class="button-item"
      :disabled="store.productTypology === ''"
    >
      Next
    </button>
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
    name: "Time",
  },
  {
    id: 5,
    name: "Data",
  },
];

const stepsConfig = computed(() => {
  return steps.map((step) => {
    return {
      id: step.id,
      name: step.name,
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
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  font-family: "Dosis", sans-serif;
}

.stepper-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: first baseline;
  margin: auto;
  padding-top: 3rem;
}

.stepper-details__wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 3rem;
}

.stepper-number {
  text-align: center;
  align-items: center;
  border-radius: 50%;
  width: 1.4rem;
  background-color: white;
  border: #bdbaba solid;
}

.stepper-detail {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 70%;
}

hr {
  width: 180px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
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

.button-item:disabled {
  background-color: #cccccc;
  border: #666666;
  color: #666666;
  cursor: not-allowed;
}

.buttonEnd {
  justify-content: end;
}
</style>
