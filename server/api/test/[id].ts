export default defineEventHandler(async (e) => {
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase
  
    // Extract the  ID from the URL parameters
    const Id = e.context.params?.id
  
    if (!Id) {
      return { error: ' ID is required' }
    }
  
    try {
      // Fetch the  data by ID
      const res = await $fetch(`${apiBase}/${Id}`)
      console.log(res)
      // Check if the response is valid
      if (!res) {
        throw new Error('No data found for the given  ID')
      }
  
      return res
    } catch (error: unknown) {
      // Handle errors and return a meaningful message
      if (error instanceof Error) {
        return { error: error.message }
      }
      return { error: 'Something went wrong' }
    }
  })
  