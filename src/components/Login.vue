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
import { ref } from 'vue'

const username = ref('')
const password = ref('')

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }


const onLoginClick = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": "ramin",
    "password": "123"
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