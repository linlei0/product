<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <van-button type="default">默认按钮</van-button> -->
    <van-image 
    v-for="(item,index) in list"
    :key="index"
    @click="clickImage(item,index)"
    :width="platForm==='App' ? '100%':'auto'" 
    :height="platForm==='App' ?'30rem': 'auto'" 
    :src="item">
    </van-image>


  </div>
</template>
<script>
import { ImagePreview } from 'vant';
export default {
  name: 'App',
  data() {
    return {
      list: []
    }
  },
  created() {
    console.log(this.platForm)
    const imageList = [
      require('./assets/images/one.jpg'),
      require('./assets/images/two.jpg'),
      require('./assets/images/three.jpg')
    ]
    for(let i=1;i<15;i++){
      imageList.push(require(`./assets/images/${i}.jpg`))
    }
    this.list = imageList
  },
  methods: {
    clickImage(item,index) {
      if(this.platForm != 'App') return
      ImagePreview({
        images: [...this.list],
        startPosition: index
      })
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  
  /* margin-top: 60px; */
}
</style>
