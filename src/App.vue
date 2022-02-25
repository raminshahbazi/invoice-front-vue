<template>
  <ul>
    <li v-for="route in routes" :key="route">
      <router-link :to="`/${route}`"> {{ route }} </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script setup>
const routes = [
  'invoices',
  'invoices-change',
  'items',
  'types',
  'countries',
]
</script>
