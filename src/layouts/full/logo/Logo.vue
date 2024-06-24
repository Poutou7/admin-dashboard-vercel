<template>
  <div class="logo">
    <RouterLink to="/">
      <img :src="Logoimg" alt="home" />
    </RouterLink>
  </div>
</template>


<script setup>
import { RouterLink } from "vue-router";
import Logoimg from "@/assets/images/logos/logo.svg";
</script>
