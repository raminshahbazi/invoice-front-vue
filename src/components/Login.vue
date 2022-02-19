<template>
  <div>
    <h2>
      Login
    </h2>
    username : <input v-model="username" /> {{ username }} <br/>
    password : <input type="password" v-model="password" /> {{ password }} <br/>
    <button @click="onLoginClick">login</button>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
import { setCookie } from '@/utils/cookieHelper'

const props = defineProps(['2'])
onMounted(() => console.log(props["2"]))
const username = ref('')
const password = ref('')

const onLoginClick = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": username.value,
    "password": password.value
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("login/", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setCookie('token', result.token,4)
      })
      .catch(error => console.log('error', error));
}
</script>

<style scoped>

</style>