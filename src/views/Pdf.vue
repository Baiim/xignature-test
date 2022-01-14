<template>
  <div>
    <form @submit.prevent="onUpload">
      <div class="form-group">
        <input type="file" name="imagesArray" @change="onChange" />
        <button class="btn btn-success">Submit</button>
      </div>
    </form>
    <div class="card">
      <div class="card-header">List of Files</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="file in imagesArray" :key="file.id">
          <p>{{ file.imagesArray }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      imagesArray: null,
    }
  },
  methods: {
    onChange(event) {
      this.imagesArray = event.target.files[0]
    },
    onUpload() {
      const formData = new FormData()
      formData.append("imagesArray", this.imagesArray, this.imagesArray.name)
      axios
        .post("http://localhost:8888/api/multi-file-upload", formData, {})
        .then(response => {
          console.log(response)
        })
    },
  },
  mounted() {
    this.$store.dispatch("getPosts")
  },
}
</script>

<style scoped lang="css">
.container {
  max-width: 500px;
}
</style>
