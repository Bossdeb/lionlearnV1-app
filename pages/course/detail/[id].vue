<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="!data && !error" class="flex items-center justify-center min-h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-center p-8 bg-white rounded-xl shadow-sm max-w-md">
        <svg class="mx-auto h-12 w-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-gray-900">เกิดข้อผิดพลาด</h3>
        <p class="mt-2 text-gray-500">{{ error.message }}</p>
        <button @click="$router.push('/courses')" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
          กลับไปที่รายการคอร์ส
        </button>
      </div>
    </div>

    <!-- Course Content -->
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Course Header -->
      <div class="bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="relative h-64 md:h-96">
          <img
            :src="data.image || '/images/logo/lionlearn_logo.png'"
            :alt="data.title"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in data.tags" :key="tag"
                class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                {{ tag }}
              </span>
            </div>
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ data.title }}</h1>
            <div class="flex items-center space-x-4 text-white">
              <div class="flex items-center">
                <svg class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
                <span>{{ data.views || 0 }} views</span>
              </div>
              <div class="flex items-center">
                <svg class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <span>{{ data.duration || '0' }} hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Course Content Grid -->
      <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Course Description -->
          <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">รายละเอียดคอร์ส</h2>
            <div class="prose max-w-none text-gray-500">
              {{ data.body }}
            </div>
          </div>

          <!-- Course Curriculum -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">หลักสูตร</h2>
            <div class="space-y-4">
              <div v-for="(section, index) in data.curriculum" :key="index"
                class="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  @click="toggleSection(index)"
                >
                  <span class="font-medium text-gray-900">{{ section.title }}</span>
                  <svg
                    class="h-5 w-5 text-gray-500 transform transition-transform"
                    :class="{ 'rotate-180': openSections[index] }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-show="openSections[index]" class="p-4 border-t border-gray-200">
                  <ul class="space-y-3">
                    <li v-for="(lesson, lessonIndex) in section.lessons" :key="lessonIndex"
                      class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                      <div class="flex items-center">
                        <svg class="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-gray-600">{{ lesson.title }}</span>
                      </div>
                      <span class="text-sm text-gray-500">{{ lesson.duration }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Course Info Card -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-3xl font-bold text-gray-900">${{ data.price }}</span>
              <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                {{ data.level || 'Beginner' }}
              </span>
            </div>
            <button
              class="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-3 px-4 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-colors mb-4"
            >
              ลงทะเบียนเรียน
            </button>
            <div class="space-y-4">
              <div class="flex items-center text-gray-600">
                <svg class="h-5 w-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>ระยะเวลา: {{ data.duration || '0' }} ชั่วโมง</span>
              </div>
              <div class="flex items-center text-gray-600">
                <svg class="h-5 w-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>บทเรียน: {{ data.lessons || '0' }} บท</span>
              </div>
              <div class="flex items-center text-gray-600">
                <svg class="h-5 w-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>นักเรียน: {{ data.students || '0' }} คน</span>
              </div>
            </div>
          </div>

          <!-- Instructor Card -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">ผู้สอน</h3>
            <div class="flex items-center">
              <img
                :src="data.instructor?.avatar || '/images/default-avatar.png'"
                :alt="data.instructor?.name"
                class="h-16 w-16 rounded-full object-cover"
              />
              <div class="ml-4">
                <h4 class="font-medium text-gray-900">{{ data.instructor?.name || 'Unknown Instructor' }}</h4>
                <p class="text-sm text-gray-500">{{ data.instructor?.title || 'Instructor' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { data, error } = await useFetch(`/api/course/${route.params.id}`)
console.log(data.value)

// Handle curriculum sections
const openSections = ref({})

const toggleSection = (index) => {
  openSections.value = {
    ...openSections.value,
    [index]: !openSections.value[index]
  }
}
</script>
  