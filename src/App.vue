<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import FundList from './components/FundList.vue'
import FundDetails from './components/FundDetails.vue';


</script>

<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-red">
          <Sidebar />
        </div>
        <div class="col px-5 py-3">
        <main >
          <router-view></router-view>
        </main>
      </div>
      </div>
     
    </div>
  </div>
  
</template>

<script>
import InvestmentForm from './components/InvestmentForm.vue';
import Portfolio from './components/Portfolio.vue';
import Sidebar from './components/sidebar.vue';


export default {
  name: 'App',
  components: {
    Sidebar
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
