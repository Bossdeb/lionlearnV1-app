<template>
    <Navbar />
        <NuxtPage />
    <Footer />
</template>
<script >
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}

</script>
