<template>
  <div>
    <h2>
      Login
    </h2>
    username : <input v-model="username" /> {{ username }} <br/>
    password : <input type="password" v-model="password" /> {{ password }} <br/>
    <button @click="onLoginClick">login</button>
    <br/>
    <button @click="onTestClick">test api</button>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
import { setCookie } from '@/utils/cookieHelper'

const props = defineProps(['2'])
onMounted(() => console.log(props["2"]))
const username = ref('')
const password = ref('')

const onTestClick = () => {
  console.log("CLIICKERD &&&&&&&&&&&&&&&&")
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token 64c3d7d80d1058939c642919d85c1ff6de98561e");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("api/invoices/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

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

  fetch("api/login/", requestOptions)
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
