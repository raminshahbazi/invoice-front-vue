
<script setup>
import { ref, computed, onMounted } from 'vue'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About.vue'
import NotFound from './components/NotFound'
import User from './components/User'
import {getCookie} from "@/utils/cookieHelper";

const routes = {
  '/': Home,
  '/about': About,
  '/login': Login
}


const userInfo = ref({})
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

const getUserDate = () => {
  const token = getCookie("token")

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${token}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("api/user-info/", requestOptions)
      .then(response => response.json())
      .then(result => userInfo.value = result[0])
      .catch(error => console.log('error', error));
}

onMounted(() => {
  getUserDate()
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/login">Login</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <User :userInfo=userInfo />

  <component :is="currentView" />
</template>