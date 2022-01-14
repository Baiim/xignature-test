<template>
  <div class="hello">
    <div v-for="post in posts" :key="post.id">
      <div class="pt-20 bg-gray-100 flex items-center justify-center">
        <div class="containter mx-auto px-20">
          <div
            class="bg-white p-8 rounded-lg shadow-lg relative hover:shadow-2xl transition duration-500"
          >
            <h1 class="text-2xl text-gray-800 font-semibold mb-3">
              {{ post.title }}
            </h1>
            <p class="text-gray-600 leading-6 tracking-normal">
              {{ post.body }}
            </p>
            <div>
              <span
                class="absolute py-2 px-8 text-sm text-white top-0 right-0 bg-indigo-600 rounded-md transform translate-x-2 -translate-y-3 shadow-xl"
                >Post</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPost",
  data() {
    return {
      msg: "Xignature List Of Post",
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
  mounted() {
    this.$store.dispatch("getPosts")
  },
}
</script>
