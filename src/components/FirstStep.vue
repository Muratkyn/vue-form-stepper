<template>
  <StepperModule>
    <template #default>
      <div class="firstStep-wrapper">
        <HelloPart />
        <div class="secondBox">
          <h2>How can we help you with your project?</h2>
          <p>Select what you are requesting an appointment for</p>

          <img
            src="/public/cartImage1.png"
            alt="cart1"
            width="300px"
            class="selection-image"
            @click="purchaseProducts"
          />

          <img
            src="/public/cartImage2.png"
            alt="cart1"
            width="300px"
            class="selection-image"
            @click="renovationService"
          />
        </div>
      </div>
    </template>
  </StepperModule>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { onMounted } from "vue";
import StepperModule from "@/components/shared/StepperModel.vue";
import HelloPart from "@/components/shared/HelloPart.vue";
import { useAppStore } from "@/stores/store";
import router from "@/router";

const store = useAppStore();

onMounted(() => {
  store.currentPage = 1;
  store.purchaseProducts = "";
  store.renovationService = "0";
});

const purchaseProducts = () => {
  store.renovationService = "";
  store.purchaseProducts = "Purchase Products";
  store.currentPage = 2;
  router.push("/reparto");
};
const renovationService = () => {
  store.renovationService = "Renovation Service";
  store.purchaseProducts = "";
  store.currentPage = 2;

  router.push("/reparto");
};
</script>

<style scoped>
.firstStep-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column wrap;
  font-family: "Dosis", sans-serif;
}

.hello-title {
  color: rgb(24 136 3);
  font-size: 2rem;
}
.login {
  color: rgb(24 136 3);
  font-size: 1.7rem;
}
p,
label {
  font-size: 1.2rem;
}

.firstBox {
  width: 100%;
  padding: 2rem;
}

.required {
  color: #666;
}
.store-field {
  width: 80%;
  padding: 1rem;
  border-radius: 4px;
  border-style: none;
  border: rgb(59, 58, 58) solid 1px;
  transition: 0.3s ease;
  background-color: white;
  width: 100%;
}
.secondBox {
  width: 100%;
  padding: 2rem;
}

.image-border {
  border: black 2px solid;
}

.selection-image {
  cursor: pointer;
}

.selection-image:hover {
  border: 3px solid rgb(24 136 3);
}
</style>
