<template>
  <div class="root">
    username {{userInfo.username}} <br/>
    firstname {{userInfo.first_name}} <br/>
    last name {{userInfo.last_name}} <br/>
    email {{userInfo.email}} <br/>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(['userInfo'])
console.log(props)
</script>

<style scoped>
  .root{
    float: right;
    background-color: #e8e8e8;
    width: 300px;
    padding: 10px;
  }
</style>