
<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About.vue'
import NotFound from './components/NotFound'

const routes = {
  '/': Home,
  '/about': About,
  '/login': Login
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/login">Login</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>