export default defineEventHandler(async (e) => {
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase
  
    // Extract the  ID from the URL parameters
    const Id = e.context.params?.id
  
    if (!Id) {
      return { error: ' ID is required' }
    }
  
    const data = [
      {
        id: 1,
        title: 'Basic Web Development',
        body: 'Learn the fundamentals and advanced techniques from industry experts',
        image: '/images/logo/lionlearn_logo.png',
        tags: ['Html', 'Css', 'Javascript'],
        price: 1000,
      },
      {
        id: 2,
        title: 'Vue.js Fundamentals',
        body: 'Learn the fundamentals and advanced techniques from industry experts',
        image: '/images/logo/lionlearn_logo.png',
        tags: ['Javascript', 'VueJs'],
        price: 1000,
      },
      {
        id: 3,
        title: 'Backend Development with Node.js',
        body: 'Learn the fundamentals and advanced techniques from industry experts',
        image: '/images/logo/lionlearn_logo.png',
        tags: ['Javascript'],
        price: 1000,
      },
      {
        id: 4,
        title: 'React Fundamentals',
        body: 'Learn the fundamentals and advanced techniques from industry experts',
        image: '/images/logo/lionlearn_logo.png',
        tags: ['Javascript', 'React'],
        price: 1000,
      },
      {
        id: 5,
        title: 'Python for Beginners',
        body: 'Learn the fundamentals and advanced techniques from industry experts',
        image: '/images/logo/lionlearn_logo.png',
        tags: ['Python'],
        price: 1000,
      },
      {
        id: 6,
        title: 'Java for Beginners',
        body: 'Learn the fundamentals and advanced techniques from industry experts',
        image: '/images/logo/lionlearn_logo.png',
        tags: ['Java'],
        price: 1000,
          },
      {
        id: 7,
        title: 'C# for Beginners',
        body: 'Learn the fundamentals and advanced techniques from industry experts',
        image: '/images/logo/lionlearn_logo.png',
        tags: ['C#'],
        price: 1000,
      },
    ]

    const course = data.find((course) => course.id === parseInt(Id))

    if (!course) {
      return createError({
        statusCode: 404,
        statusMessage: 'Course not found',
      })
    }

    return course
    
  })
  