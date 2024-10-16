<template>
  <StepperModel>
    <template #default>
      <div class="firstStep-wrapper">
        <div class="firstBox">
          <h2 class="hello-title">Hello! <span class="login">(login)</span></h2>
          <p>
            Select a store where to make an appointment. You can change it to
            <br />
            view the availability of the departments or services of your
            interest.
          </p>
          <div>
            <label for="store">
              <strong> Store: </strong>
              <span class="required"> - required</span></label
            >
            <select v-model="store.selectedStore" class="store-field">
              <option disabled selected value>-- Select Your Store --</option>
              <option v-for="entity in sortedEntities" :value="entity.id">
                {{ entity.publicName }}
              </option>
            </select>
          </div>

          <div class="appointment-box">
            <div class="appointment-header">
              <span class="icon">📅</span>
              <span class="header-text">Your appointment:</span>
            </div>
            <div class="appointment-body">
              <p v-if="store.renovationService === 'Renovation Service'">
                <strong>Project:</strong>
                <a href="#">{{ store.renovationService }}</a>
              </p>
              <p v-if="store.purchaseProducts === 'Purchase Products'">
                <strong>Project:</strong>
                <a href="#"> {{ store.purchaseProducts }}</a>
              </p>
            </div>
          </div>
        </div>
        <div
          v-if="store.purchaseProducts === 'Purchase Products'"
          class="secondBox"
        >
          <h1>purchase products</h1>
        </div>
        <div v-else class="secondBox">
          <h1>renovation service</h1>
        </div>
      </div>
    </template>
  </StepperModel>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/store";
import StepperModel from "./shared/StepperModel.vue";
import { computed } from "vue";
import { entities } from "@/constants";

const store = useAppStore();

const sortedEntities = computed(() => {
  return [...entities].sort((a, b) => a.publicName.localeCompare(b.publicName));
});
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
  font-size: 1rem;
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
  font-size: 1rem;
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

.appointment-box {
  border: 2px solid green;
  padding: 16px;
  border-radius: 8px;
  margin-top: 2rem;
  width: 96%;
  font-family: Arial, sans-serif;
}

.appointment-header {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: green;
  font-weight: bold;
}

.appointment-header .icon {
  margin-right: 8px;
}

.appointment-body {
  margin-top: 10px;
  font-size: 16px;
}

.appointment-body p {
  margin: 0;
}

.appointment-body a {
  text-decoration: underline;
  color: black;
}
</style>
