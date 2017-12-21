<template>
    <div class="wrap">
        <template v-if="!notFound">
            <h1>{{post.title}}</h1>
            <p>{{post.text}}</p>
        </template>
        <template v-else>
            <h3>Такой статьи не существует :(</h3>
        </template>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "post",
  data() {
    return {
      notFound: false,
      post: {}
    };
  },
  mounted() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/tiles", false);
    xhr.send();
    if (xhr.status != 200) {
      console.log(`${xhr.status}: ${xhr.statusText}`);
    } else {
      let data = JSON.parse(xhr.responseText);
      let post = data.tiles.filter(item => item.id === +this.$route.params.id);
      if (post.length !== 0) {
        this.post = post[0];
      } else {
        this.notFound = true;
      }
    }
  }
};
</script>
