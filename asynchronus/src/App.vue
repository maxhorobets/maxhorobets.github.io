<template>
  <div id="app">    
    <HeaderComponent :closeSidebar="close" @sidebarChange="checkOverlay"></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
    <div class="overlay" @click="closeSidebar()" v-if="isOpenSidebar"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HeaderComponent from './components/header/header.component.vue'
  import MainComponent from './components/main/main.component.vue'
  import FooterComponent from './components/footer/footer.component.vue'

  @Component({
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent
    },
  })

  export default class App extends Vue {
    public isOpenSidebar: boolean = false
    public close: boolean = false

    checkOverlay(value: boolean) {
      this.isOpenSidebar = value
      this.close = false;
    };

    closeSidebar() {
      console.log('closeSidebar() in App')
      this.close = true
    }
    

  }
</script>

<style lang="scss">

*{
  box-sizing: border-box;
}

  body {
    margin: 0;
  }

  .container {
    max-width: 950px;
    margin: 0 auto;
  }

  #app {
    font-family: 'Righteous', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: grid;
    grid-template-rows: 1fr 115px;
  }


  .standart-btn {
    padding: 10px 18px;
    border-radius: 4px;
    border: 1px solid #52267d;
    background-color: #52267d;
    color: #ffffff;
    font-family: 'Righteous', cursive;
    font-size: 16px;
    font-weight: 400;
    line-height: 12px;
    border: none;                
    cursor: pointer;
  }

  @media only screen and (max-width: 785px) {
    #app {
      grid-template-rows: 1fr 120px;
      position: relative;

      .overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
      } 
    }
  }
</style>
