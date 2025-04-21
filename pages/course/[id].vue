<template>
    <div class="h-screen">
      <div v-if="error">เกิดข้อผิดพลาด: {{ error.message }}</div>
      <div v-else-if="data">
        <h1 class="text-xl font-bold">{{ data.title }}</h1>
        <p>{{ data.body }}</p>
      </div>
      <div v-else>
        <p>กำลังโหลดข้อมูล...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const { data, error } = await useFetch(`/api/test/${route.params.id}`)
  </script>
  