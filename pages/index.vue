<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Content -->
          <div class="text-center lg:text-left">
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Learn at your own pace, anywhere, anytime
            </h1>
            <p class="text-xl sm:text-2xl text-gray-500 mb-8">
              Access high-quality courses, expert instructors, and a supportive
              community to help you achieve your learning goals.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink to="/courses" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all transform hover:scale-105">
                Browse Courses
              </NuxtLink>
              <button class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-orange-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
          
          <!-- Hero Image -->
          <div class="flex justify-center lg:justify-end">
            <img
              src="/images/logo/lionlearn_logo.png"
              alt="hero-image"
              class="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-12 md:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Features that empower learning
          </h2>
          <p class="text-xl text-gray-500 max-w-3xl mx-auto">
            Our platform provides everything you need to create, deliver, and
            track effective learning experiences.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature Card 1 -->
          <div class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <div class="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
              <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Rich Course Content</h3>
            <p class="text-gray-500">
              Support for videos, quizzes, assignments, and interactive content
              to engage learners.
            </p>
          </div>

          <!-- Feature Card 2 -->
          <div class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <div class="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
              <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Collaborative Learning</h3>
            <p class="text-gray-500">
              Discussion forums, group projects, and peer feedback to enhance
              the learning experience.
            </p>
          </div>

          <!-- Feature Card 3 -->
          <div class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <div class="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
              <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Progress Tracking</h3>
            <p class="text-gray-500">
              Detailed analytics and reports to monitor student progress and
              course effectiveness.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Courses Section -->
    <section class="py-12 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p class="text-xl text-gray-500 max-w-3xl mx-auto">
            Explore our most popular courses and start your learning journey today.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="course in courses" :key="course.id"
            class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
            <img
              :src="course.image"
              :alt="course.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ course.title }}</h3>
              <p class="text-gray-500 mb-4 line-clamp-2">
                {{ course.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in course.tags" :key="tag"
                  class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/courses"
            class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all transform hover:scale-105">
            View All Courses
          </NuxtLink>
        </div>
      </div>
    </section>
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
  },
  {
    id: 2,
    title: 'Vue.js Fundamentals',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['Javascript', 'VueJs'],
  },
  { 
    id: 3,
    title: 'Backend Development with Node.js',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['Javascript'],
  },
  {
    id: 4,
    title: 'React.js Fundamentals',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['React', 'ReactJs'],
  },
  {
    id: 5,
    title: 'Python for Beginners',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['Python'],
  },
  {
    id: 6,
    title: 'Java Programming',
    description: 'Learn the fundamentals and advanced techniques from industry experts',
    image: '/images/logo/lionlearn_logo.png',
    tags: ['Java'],
  },  
]);
</script>

<style scoped></style>
