<template>
 <nav class="bg-white px-4   border-b-1 border-gray-200 sticky top-0 z-10">
  <div class="flex items-center justify-between mx-40 ">
    <!-- Logo ซ้าย -->
    <div class="flex items-center ml-10">
      <NuxtLink to="/">
        <img src="/images/logo/lionlearn_logo.png" alt="logo" class="w-20 h-20" />
      </NuxtLink>
    </div>

    <!-- ข้อความตรงกลาง -->
    <div class="flex space-x-4 font-bold">
      <NuxtLink to="/" class="text-gray-500 hover:underline">Courses</NuxtLink>
      <NuxtLink to="/register" class="text-gray-500 hover:underline">Resources</NuxtLink>
      <NuxtLink to="/register" class="text-gray-500 hover:underline">Resources</NuxtLink>
      <NuxtLink to="/register" class="text-gray-500 hover:underline">Resources</NuxtLink>
    </div>

    <!-- Login / Register ขวา -->
    <div class="flex space-x-4 font-bold">
      <button class="bg-white text-orange-500 px-4 py-2 rounded-md border-1 border-gray-300 hover:underline">
        <NuxtLink to="/login">Login</NuxtLink>
      </button>
      <button class="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-md border-1 border-gray-300 hover:underline">
        <NuxtLink to="/register">Register</NuxtLink>
      </button>
    </div>
  </div>
</nav>


  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  /* You can remove the scoped styles as Tailwind handles most of the styling now */
  </style>
  