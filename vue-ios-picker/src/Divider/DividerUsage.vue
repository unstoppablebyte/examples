<script setup>
import {reactive} from "vue";

const state = reactive({
  dividerUsageConfiguration: [
    {
      list: [
        ...new Set(
            Array.from({length: 10}, (_, i) => i + 1)
                .map((item) => `Item ${item}`)
        )
      ],
    },
    {
      divider: true,
      text: 'Simple Divider'
    },
    {
      list: [
        ...new Set(
            Array.from({length: 10}, (_, i) => i + 1)
                .map((item) => `Item ${item}`)
        )
      ],
    }
  ],
});

function onSimpleUsageUpdate(groupIndex, selectedItemIndex, selectedItemValue) {
  console.log(groupIndex, selectedItemIndex, selectedItemValue)
}
</script>

<template>
  <ios-picker :configuration="state.dividerUsageConfiguration"
              @update="onSimpleUsageUpdate"
  />
</template>