<template>
  <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo and Mobile Menu Button -->
        <div class="flex items-center">
          <!-- Mobile menu button -->
          <button @click="isOpen = !isOpen" class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" :class="{ 'hidden': isOpen, 'block': !isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="h-6 w-6" :class="{ 'hidden': !isOpen, 'block': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <img src="/images/logo/lionlearn_logo.png" alt="logo" class="h-12 w-auto" />
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <NuxtLink to="/" class="text-gray-500 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Courses</NuxtLink>
          <NuxtLink to="/resources" class="text-gray-500 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Resources</NuxtLink>
          <NuxtLink to="/about" class="text-gray-500 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">About</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-500 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Contact</NuxtLink>
        </div>

        <!-- Desktop Auth Buttons -->
        <div class="hidden md:flex md:items-center md:space-x-4">
          <NuxtLink to="/login" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-orange-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
            Login
          </NuxtLink>
          <NuxtLink to="/register" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
            Register
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="md:hidden" :class="{ 'block': isOpen, 'hidden': !isOpen }">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-orange-500 hover:bg-gray-50 transition-colors">Courses</NuxtLink>
        <NuxtLink to="/resources" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-orange-500 hover:bg-gray-50 transition-colors">Resources</NuxtLink>
        <NuxtLink to="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-orange-500 hover:bg-gray-50 transition-colors">About</NuxtLink>
        <NuxtLink to="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-orange-500 hover:bg-gray-50 transition-colors">Contact</NuxtLink>
        
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="space-y-1">
            <NuxtLink to="/login" class="block px-3 py-2 rounded-md text-base font-medium text-orange-500 hover:text-orange-600 hover:bg-gray-50 transition-colors">Login</NuxtLink>
            <NuxtLink to="/register" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-colors">
              Register
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
/* You can remove the scoped styles as Tailwind handles most of the styling now */
</style>
  