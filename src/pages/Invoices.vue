<script setup>
import {ref} from "vue"
import Services from "@/utils/services"

const name = ref('')
const discount = ref()
const base_price = ref()
const final_price = ref()
const manufacturing_country = ref()

const itemPk = ref()

const createItem = () => {
  Services.createItem(name.value,
      discount.value,
      base_price.value,
      final_price.value,
      manufacturing_country.value)
      .then((res) => {console.log(res)})
      .catch(err => console.log(err))
}

const deleteItem = () => {
  Services.deleteItem(itemPk.value)
      .then((res) => {console.log(res)})
      .catch(err => console.log(err))
}
</script>

<template>
  <h2>
    Invoices
  </h2>
  <br/>
    name : <input v-model="name" /> <br/>
    discount : <input v-model="discount" /> <br/>
    base_price : <input v-model="base_price" /> <br/>
    final_price : <input v-model="final_price" /> <br/>
    manufacturing_country : <input v-model="manufacturing_country" /> <br/>
    <button v-on:click="createItem">
      create item
    </button>
  <br/>
  <br/>
  item pk : <input v-model="itemPk" /> <br/>
  <button v-on:click="deleteItem">
    delete item
  </button>
  <br/>
  <br/>
</template>