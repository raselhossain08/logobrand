<script>
import SwiperClass, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import {  Navigation } from 'swiper'
// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
 import 'swiper/css/navigation'
// more module style...

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination,Navigation]
    }
  }
}
</script>

<template>
  <div class="banner-area flex items-center">
    <swiper :modules="modules"  class="h-full" navigation>
      <swiper-slide class="h-full">
        <div class="items h-full flex items-center">
          <div class="container h-full">
            <div class="slide-content h-full flex items-start flex-col justify-center">
              <h1 class=" font-Asap">Bienvenido al micrositio</h1>
            <p class=" font-public">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book.
            </p>
            <div class="flex justify-end w-full">
              <a href="">Leer mas</a>
            </div>
            
            <div class="search-bar w-full">
              <input type="text" placeholder="Busqueda" />
              <button type="submit">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </button>
            </div>
            </div>
           
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="h-full">
        <div class="items h-full flex items-center">
          <div class="container h-full">
            <div class="slide-content h-full flex items-start flex-col justify-center">
              <h1 class=" font-Asap">Bienvenido al micrositio</h1>
            <p class=" font-public">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book.
            </p>
            <div class="flex justify-end w-full">
              <a href="">Leer mas</a>
            </div>
            
            <div class="search-bar w-full">
              <input type="text" placeholder="Busqueda" />
              <button type="submit">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </button>
            </div>
            </div>
           
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="h-full">
        <div class="items h-full flex items-center">
          <div class="container h-full">
            <div class="slide-content h-full flex items-start flex-col justify-center">
              <h1 class=" font-Asap">Bienvenido al micrositio</h1>
            <p class=" font-public">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book.
            </p>
            <div class="flex justify-end w-full">
              <a href="">Leer mas</a>
            </div>
            
            <div class="search-bar w-full">
              <input type="text" placeholder="Busqueda" />
              <button type="submit">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </button>
            </div>
            </div>
           
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.banner-area {
  background: #6e851c;
  height: 492px;
}
.slide-content h1{
  font-size: 32px;
  font-weight: 700;
  line-height: 36.67px;
  text-align: left;
  color:#FFFFFF;
  padding-bottom: 30px;
}.slide-content p{
  font-family: 'Public Sans',sans-serif;
  font-size: 22px;
  font-weight: 300;
  line-height: 25.85px;
  text-align: left;
  color:#FFFFFF;
  padding-left: 30px;
  padding-bottom: 30px;
}
.slide-content a{
  font-family: 'Public Sans',sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 25.85px;
  text-align: right;
  color:#FFFFFF;
  padding: 10px 0;
}
.slide-content .search-bar{
  position: relative;
}
.slide-content .search-bar input{
  width: 100%;
  height: 48px;
  padding:0 25px;
  border-radius: 50px;
}
.slide-content .search-bar button{
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 5px 20px;
}

@media only screen and (max-width: 768px) {
  .banner-area {
  background: #6e851c;
  height: 550px;
}
.slide-content{
  padding:0 20px;
}
.slide-content h1{
  font-size: 32px;
  font-weight: 700;
  line-height: 36.67px;
  text-align: left;
  color:#FFFFFF;
  padding-bottom: 30px;
}.slide-content p{
  font-family: 'Public Sans',sans-serif;
  font-size: 22px;
  font-weight: 300;
  text-align: left;
  color:#FFFFFF;
  padding-left: 0;
  padding-bottom: 0;
}
.slide-content a{
  font-family: 'Public Sans',sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 25.85px;
  text-align: right;
  color:#FFFFFF;
  padding: 10px 0;
}
.slide-content .search-bar{
  position: relative;
}
.slide-content .search-bar input{
  width: 100%;
  height: 48px;
  padding:0 25px;
  border-radius: 50px;
  color: #434496;
}
.slide-content .search-bar input::placeholder{
  width: 100%;
  height: 48px;
  padding:0 25px;
  border-radius: 50px;
  font-weight: 700;
  color: #434496;
}
.slide-content .search-bar button{
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 5px 20px;
}

}
</style>
