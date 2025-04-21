<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="text-center md:text-left">
          <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Course Catalog</h1>
          <p class="text-xl text-gray-500 mt-2">Browse and enroll in our wide range of courses</p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3">
          <div class="relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a course"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Courses Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="course in courses"
          :key="course.id"
          class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Course Image -->
          <div class="relative h-48">
            <img
              :src="course.image"
              :alt="course.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                ${{ course.price }}
              </span>
            </div>
          </div>

          <!-- Course Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ course.title }}</h3>
            <p class="text-gray-500 mb-4 line-clamp-2">
              {{ course.description }}
            </p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tag in course.tags"
                :key="tag"
                class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Enroll Button -->
            <button
              class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all transform hover:scale-105"
            >
              <NuxtLink :to="`/course/detail/${course.id}`">
                Enroll Now
              </NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const courses = ref([
  {
    id: 1,
    title: 'Basic Web Development',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['Html', 'Css', 'Javascript'],
    price: 1000,
  },
  {
    id: 2,
    title: 'Vue.js Fundamentals',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['Javascript', 'VueJs'],
    price: 1000,
  },
  { 
    id: 3,
    title: 'Backend Development with Node.js',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['Javascript'],
    price: 1000,
  },
  {
    id: 4,
    title: 'React.js Fundamentals',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['React', 'ReactJs'],
    price: 1000,
  },
  {
    id: 5,
    title: 'Python for Beginners',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['Python'],
    price: 1000,
  },
  {
    id: 6,
    title: 'Java Programming',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['Java'],
    price: 1000,
  },  
]);
</script>