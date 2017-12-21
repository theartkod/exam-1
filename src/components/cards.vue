<template>
    <div class="wrap">
        <router-link :to="`/post/${item.id}`" class="card-item" :class="{'card-item--large' : item.type === 'double'}" v-for="item in posts" :key="item.id">
            <div class="card-item-img">
                <img :src="`//picsum.photos/350/300/?random=${item.id}`" :alt="item.title">
            </div>
            <div class="card-item-overlay">
                <h3 class="card-item-overlay__title">{{ item.title }}</h3>
                <span class="card-item-overlay__desc">{{ item.description }}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "cards",
  data() {
    return {
      posts: []
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
      this.posts = data.tiles;
    }
  }
};
</script>

<style scoped>
.wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-item {
  display: inline-block;
  text-align: left;
  font-size: 14px;
  position: relative;
  height: 300px;
  width: 32%;
  margin-bottom: 20px;
  overflow: hidden;
  color: #fff;
}

.card-item:hover .card-item-overlay {
  background: rgba(0, 0, 0, 0.5);
}

.card-item:hover .card-item-img img {
  transform: scale(1.1) translateX(-2%) translateY(-2%);
}

.card-item--large {
  width: 66%;
}

.card-item-img img {
  width: 100%;
  transition: all ease-out 1s;
}

.card-item-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.31);
  transition: all ease 0.3s;
  padding: 20px;
  box-sizing: border-box;
}

.card-item-overlay__title {
  font-size: 28px;
}

.card-item-overlay__desc {
  font-size: 16px;
}

@media (max-width: 1024px) {
  .card-item {
    width: 49%;
    height: 250px;
  }

  .card-item--large {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .card-item {
    width: 100%;
  }

  .card-item-img img {
    height: 100%;
    width: auto;
  }

  .card-item--large {
    width: 100%;
  }
}
</style>
