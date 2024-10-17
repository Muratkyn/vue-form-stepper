<template>
  <StepperModel>
    <template #default>
      <div class="firstStep-wrapper">
        <HelloPart />
        <div
          v-if="store.purchaseProducts === 'Purchase Products'"
          class="secondBox"
        >
          <h1>Product Typology</h1>
          <p>Select what you are requesting an appointment for</p>

          <img
            src="/public/pt1.png"
            alt="cart1"
            width="32%"
            class="selection-image"
          />

          <img
            src="/public/pt2.png"
            alt="cart1"
            width="32%"
            class="selection-image"
          />
          <img
            src="/public/pt3.png"
            alt="cart1"
            width="32%"
            class="selection-image"
          />
          <img
            src="/public/pt4.png"
            alt="cart1"
            width="32%"
            class="selection-image"
          />
          <img
            src="/public/pt5.png"
            alt="cart1"
            width="32%"
            class="selection-image"
          />
          <img
            src="/public/pt6.png"
            alt="cart1"
            width="32%"
            class="selection-image"
          />
          <img
            src="/public/pt7.png"
            alt="cart1"
            width="32%"
            class="selection-image"
          />
        </div>
        <div v-else class="secondBox">
          <h1>Service Typology</h1>
          <p>Select the service you are interested in.</p>
          <div class="leroy-card__wrapper">
            <div class="leroy-card">
              <img
                src="/public/lm.png"
                alt="leroy"
                width="70px"
                height="70px"
              />
              <h4>
                Trasformazione vasca <br />
                in doccia
              </h4>
              <u>
                <li>Prodotti e rivestimenti</li>
                <li>Posa in opera</li>
                <li>consegna al piano</li>
              </u>
            </div>
            <div class="leroy-card">
              <img
                src="/public/lm.png"
                alt="leroy"
                width="70px"
                height="70px"
              />
              <h4>
                Trasformazione vasca <br />
                in doccia
              </h4>
              <u>
                <li>Prodotti e rivestimenti</li>
                <li>Posa in opera</li>
                <li>consegna al piano</li>
              </u>
            </div>
          </div>
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
import HelloPart from "./shared/HelloPart.vue";

const store = useAppStore();
</script>

<style scoped>
.firstStep-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column wrap;
  font-family: "Dosis", sans-serif;
  width: 100%;
}
.secondBox {
  width: 100%;
  padding: 2rem;
}

.leroy-card__wrapper {
  display: flex;
  width: 100%;
  justify-content: start;
  flex-wrap: wrap;
  gap: 3rem;
}

.leroy-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 32%;
  height: 300px;
  border: solid 1px black;
}

.image-border {
  border: black 2px solid;
}

.selection-image {
  cursor: pointer;
  margin: 2px;
}

.selection-image:hover {
  border: 3px solid rgb(24 136 3);
}
</style>
