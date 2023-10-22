<script setup>
import {reactive} from "vue";

const transitions = [
  "fade",
  "pop",
  "bounce",
  "slide-down",
  "slide-up",
  "slide-left",
  "slide-right",
  "rotate",
  "flip-x",
  "flip-y",
  "zoom-in",
  "zoom-out"
];

const data = reactive({
  isModalOpened: false,
  transition: 'fade',
});

function onModalCloseEvent(value) {
  data.isModalOpened = value;
}
</script>

<template>
  <h1>
    Modal
  </h1>
  <section>
    <div class="transitions">
      <button v-for="transition in transitions"
              :key="transition"
              :class="{active: data.transition === transition}"
              @click="data.transition = transition"
      >
        {{transition}}
      </button>
    </div>

    <button class="open-modal-button"
            @click="data.isModalOpened = true"
    >
      Open Modal
    </button>

    <modal :show="data.isModalOpened"
           :transition="data.transition"
            @close="onModalCloseEvent"
    />
  </section>
  <footer>
    Created by <a href="https://github.com/unstoppablebyte">UnstoppableByte</a>
  </footer>
</template>