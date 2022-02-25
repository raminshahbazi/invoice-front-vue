<template>
  <ul>
    <li v-for="i in routs" :key="i">
      <router-link :to="`/${i}`"> {{ i }} </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script setup>

const routs = [
    'invoices',
    'invoices-change',
    'items',
    'types',
    'countries',
]
</script>

<style>

</style>
