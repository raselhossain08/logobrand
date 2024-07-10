<template>
  <div class="page-content">
    <div class="container py-10 relative">
      <div class="quick-access p-5">
        <h1>Acceso Rapido</h1>
        <div class="flex flex-wrap py-4">
          <div class="w-full md:w-4/12 pb-2 md:py-4">
            <div class="quick-box flex items-center">
              <img src="@/assets/arrow.png" alt="arrow" />
              <a href="" class="ml-3">Secretaría del Acuerdo de Escazú</a>
            </div>
          </div>
          <div class="w-full md:w-4/12 pb-2 md:py-4">
            <div class="quick-box flex items-center">
              <img src="@/assets/arrow.png" alt="arrow" />
              <a href="" class="ml-3">Implementacion legal en mexico</a>
            </div>
          </div>
          <div class="w-full md:w-4/12 pb-2 md:py-4">
            <div class="quick-box flex items-center">
              <img src="@/assets/arrow.png" alt="arrow" />
              <a href="" class="ml-3">Secretaría del Acuerdo de Escazú</a>
            </div>
          </div>
          <div class="w-full md:w-4/12 pb-2 md:py-4">
            <div class="quick-box flex items-center">
              <img src="@/assets/arrow.png" alt="arrow" />
              <a href="" class="ml-3">Recursos multimedia y otros materiales</a>
            </div>
          </div>
          <div class="w-full md:w-4/12 pb-2 md:py-4">
            <div class="quick-box flex items-center">
              <img src="@/assets/arrow.png" alt="arrow" />
              <a href="" class="ml-3">Secretaría del Acuerdo de Escazú</a>
            </div>
          </div>
          <div class="w-full md:w-4/12 pb-2 md:py-4">
            <div class="quick-box flex items-center">
              <img src="@/assets/arrow.png" alt="arrow" />
              <a href="" class="ml-3">Secretaría del Acuerdo de Escazú</a>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="absolute flex justify-center items-center quick-button">
        <img src="@/assets/arrowRight.png" alt="arrowRight" class="mr-2">
        INICIAR SESION 
      </button>
    </div>
    <div class="container">
      <div class="flex w-full flex-wrap">
        <div class="w-full md:w-8/12 overflow-y-auto page-content-box ">
          <PostContent />
          <PostContent  class="py-10"/>
          <div class="pagination">
              <div class="flex w-full justify-between items-center">
                <button class="page-button prev-button">
                  <font-awesome-icon :icon="['fas', 'arrow-left']" />
                </button>
                <button class="page-button current-page">1</button>
                <button class="page-button">2</button>
                <button class="page-button">3</button>
                <button class="page-button">4</button>
                <button class="page-button">5</button>
                <button class="page-button next-button">
                  <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </button>
              </div>
          </div>
        </div>
        <div class="w-full  md:w-4/12 md:pl-8">
          <SidebarContent />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.page-content {
  background: #e6e6e6;
}
.quick-access {
  background: #fff;
  border-radius: 10px;
}
.quick-access h1 {
  font-family: 'Public Sans', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 37.6px;
  text-align: left;
  color: #141e0c;
}


.page-content-box{
    height: 129vh;
}
.page-content-box::-webkit-scrollbar{
    display: none;
}
.quick-access a {
  font-family: 'Public Sans', sans-serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 37.6px;
  text-align: left;
  color: #4f5da3;
  text-decoration: underline;
}
.quick-button{
    top: 77px;
    right: -169px;
    font-family: "Public Sans",sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.8px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #6E851C;
}

.pagination{
  display: none;
}
@media only screen and (max-width:768px){
  .quick-button{
    display: none;
  }
.pagination{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background: #fff;
}
.page-button{
  font-family: "Public Sans",sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.5px;
  padding: 4px 0;
  text-align: left;
  border-bottom: 2px solid #DADAE4;
}
.pagination button{
  color: #DADAE4;
}
.current-page{
  color: #404A98 !important;
  border-color: #404A98 !important;
}
.prev-button{
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #DADAE4;
  border-radius: 30px;
  color: #fff !important;
  border-bottom:none;
}
.next-button{
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #404A98;
  border-radius: 30px;
  color: #fff !important;
  border-bottom:none;
}
.quick-access h1 {
  font-family: 'Public Sans', sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  color: #141e0c;
}
.page-content-box{
    height: 100% !important;
}
.page-content-box::-webkit-scrollbar{
    display: none;
}
.quick-access a {
  font-family: 'Public Sans', sans-serif;
  font-size: 17px !important;
  font-weight: 700;
  line-height: 1.7rem;
  text-align: left;
  color: #4f5da3;
  text-decoration: underline;
}
.quick-button{
    top: 77px;
    right: -169px;
    font-family: "Public Sans",sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.8px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #6E851C;
}
}
</style>

<script>
import PostContent from '@/components/PostContent.vue'
import SidebarContent from '@/components/SidebarContent.vue'
export default {
  components: {
    PostContent,
    SidebarContent
  }
}
</script>
