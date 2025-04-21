<template>
  <div class="mx-50">
    <!-- hero section -->
    <div class="bg-white flex items-center justify-center h-screen">
      <div class="flex flex-col w-1/2">
        <div>
          <h1 class="text-5xl font-bold mb-5">
            Learn at your own pace, anywhere, anytime
          </h1>
          <p class="text-2xl text-gray-500 mb-5">
            Access high-quality courses, expert instructors, and a supportive
            community to help you achieve your learning goals.
          </p>
        </div>
        <div class="flex gap-4">
          <button
            class="bg-orange-500 font-bold text-white px-4 py-2 rounded-md border-1 border-gray-300 hover:underline"
          >
            Browse Courses
          </button>
          <button
            class="bg-white font-bold text-orange-500 px-4 py-2 rounded-md border-1 border-gray-300 hover:underline"
          >
            Learn More
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-1/2">
        <img
          src="/images/logo/lionlearn_logo.png"
          alt="hero-image"
          class="w-3/4 h-3/4 object-contain "
        />
      </div>
    </div>
    <div class="bg-white flex items-center justify-center">
      <!-- featured courses -->
      <div class="flex flex-col text-center">
        <h1 class="text-5xl font-bold mb-5">Features that empower learning</h1>
        <p class="text-2xl text-gray-500 mb-5">
          Our platform provides everything you need to create, deliver, and
          track effective learning experiences.
        </p>
        <div class="grid grid-cols-3 gap-4">
          <div
            class="flex flex-col items-center justify-center text-center border-1 border-gray-300 rounded-md w-95 h-70 mx-10 px-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-book-open h-12 w-12 text-primary"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <h1 class="text-2xl font-bold mb-5">Rich Course Content</h1>
            <p class="text-xl text-gray-500 mb-5">
              Support for videos, quizzes, assignments, and interactive content
              to engage learners.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center border-1 border-gray-300 rounded-md w-95 h-70 mx-10 px-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-users h-12 w-12 text-primary"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h1 class="text-2xl font-bold mb-5">Collaborative Learning</h1>
            <p class="text-xl text-gray-500 mb-5">
              Discussion forums, group projects, and peer feedback to enhance
              the learning experience.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center border-1 border-gray-300 rounded-md w-95 h-70 mx-10 px-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bar-chart h-12 w-12 text-primary"
            >
              <line x1="12" x2="12" y1="20" y2="10"></line>
              <line x1="18" x2="18" y1="20" y2="4"></line>
              <line x1="6" x2="6" y1="20" y2="16"></line>
            </svg>
            <h1 class="text-2xl font-bold mb-5">Progress Tracking</h1>
            <p class="text-xl text-gray-500 mb-5">
              Detailed analytics and reports to monitor student progress and
              course effectiveness.
            </p>
          </div>
        </div>
      </div>
      <!-- end featured courses -->
    </div>
    <div class="bg-white flex items-center justify-center h-screen">
      <!-- featured courses -->
      <div class="flex flex-col text-center">
        <h1 class="text-5xl font-bold mb-5">Popular Courses</h1>
        <p class="text-2xl text-gray-500 mb-5">
          Explore our most popular courses and start your learning journey
          today.
        </p>
        <div class="grid grid-cols-3 gap-6 px-10">
  <div
    class="flex flex-col items-center justify-center border border-gray-300 rounded-2xl w-full h-72 shadow-md hover:shadow-2xl transition duration-300 bg-white"
    v-for="course in courses" :key="course.id"> 
    <img
      :src="course.image"
      alt="hero-image"
      class="w-full h-1/2 object-cover mb-4 border-b-2 border-gray-300"
    />
    <div class="w-full text-left flex flex-col h-1/2">
      <h1 class="text-xl font-bold mb-3">{{ course.title }}</h1>
      <p class="text-m text-gray-500 mb-2 line-clamp-2">
        {{ course.description }}
      </p>
    </div>
  </div>

</div>
      <div class="flex justify-center mt-10">
        <button class="bg-orange-500 text-white font-bold px-4 py-2 rounded-md border-1 border-gray-300 hover:underline">
          View All Courses
        </button> 
      </div>
      </div>
      <!-- end featured courses -->
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
