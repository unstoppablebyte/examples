<script setup>
import {reactive} from "vue";

const nowYear = (new Date()).getFullYear()
const years = []
for (let i = 1991; i <= nowYear; i++) {
  years.push(i)
}

const state = reactive({
  dateTimeUsage: [
    {
      currentIndex: parseInt((nowYear - 1991) / 2),
      flex: 3,
      list: years,
      textAlign: 'center',
      className: 'row-group'
    },
    {
      currentIndex: 8,
      flex: 3,
      list: [...Array(12)].map((m, i) => i + 1),
      textAlign: 'center',
      className: 'row-group'
    },
    {
      currentIndex: 1,
      flex: 3,
      list: [...Array(30)].map((d, i) => i + 1),
      textAlign: 'center',
      className: 'item-group'
    }
  ]
});
</script>

<template>
  <ios-picker :configuration="state.dateTimeUsage"
  />
</template>