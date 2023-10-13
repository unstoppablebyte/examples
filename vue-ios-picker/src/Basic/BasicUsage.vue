<script setup>
import {reactive} from "vue";

const state = reactive({
  simpleUsageConfiguration: [
    {
      list: [
        ...new Set(
            Array.from({length: 10}, (_, i) => i + 1)
                .map((item) => `Item ${item}`)
        )
      ],
    },
  ],
});

function onSimpleUsageUpdate(groupIndex, selectedItemIndex, selectedItemValue) {
  console.log(groupIndex, selectedItemIndex, selectedItemValue)
}
</script>

<template>
  <ios-picker :configuration="state.simpleUsageConfiguration"
              @update="onSimpleUsageUpdate"
  />
</template>