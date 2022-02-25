

<script setup>
import { ref, onMounted, defineProps } from 'vue'

const count = ref(0)
const awesome = ref(true)
const type = ref("")

const changeType = (t) => {
  console.log("fsfs")
  type.value = t
}

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

const props = defineProps(['name', 'vf'])

function propIncrementCounter() {
  props.vf()
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
  console.log(props)
})


</script>

<template >

  <button v-on:click="propIncrementCounter">
    {{name}}
  </button>
  <br/>
  <button v-on:click="changeType('A')">
    type a
  </button>
  <button v-on:click="changeType('B')">
    type b
  </button>
  <button v-on:click="changeType('C')">
    type c
  </button>
  <button v-on:click="changeType('')">
    empty
  </button>
  <br/>
  <div>
    <h1 v-if="type === 'A'">
      Type A
    </h1>
    <h2 v-else-if="type === 'B'">
        Type B
    </h2>
    <div v-else-if="type === 'C'">
      Type C
    </div>
    <h4 v-else>
      not type A , B, C
    </h4>
    <br/>
    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <br/>
    <button @click="increment">
      Count is: {{ count }}
    </button>
  </div>
</template>