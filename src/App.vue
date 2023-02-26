<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navigationbar.vue';
</script>

<template>
  <Navbar/>
  <router-view/>
 </template>
<style scoped>

</style>
