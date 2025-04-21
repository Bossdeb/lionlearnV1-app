<template>
  <div class="bg-white  mx-50 mt-10">
  <div class="flex items-center justify-between gap-4 px-5">
    <div>
      <h1 class="text-3xl font-bold">Course Catalog</h1>
      <p class="text-xl text-gray-500">Browse and enroll in our wide range of courses</p>
    </div>
    <div class="w-1/2">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a course"
        class="w-full p-2 rounded-md border border-gray-300"
      />
    </div>
  </div>
  <div class="grid grid-cols-3 gap-6 mt-10">
  <div
    class="flex flex-col border border-gray-300 rounded-2xl w-95  shadow-md hover:shadow-2xl transition duration-300 bg-white mx-10 px-5"
    v-for="course in courses" :key="course.id"> 
    <img
      :src="course.image"
      alt="hero-image"
      class="w-full h-1/2 object-contain mb-4 border-b-2 border-gray-300"
    />
    <div class="w-full flex flex-col h-1/2">  
      <h1 class="text-xl font-bold mb-3">{{ course.title }}</h1>
      <p class="text-m text-gray-500 mb-2 line-clamp-2">
        {{ course.description }}
      </p>
      <p class="text-black mb-2 text-right text-l font-bold">
        $ {{ course.price }}
      </p>
      
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