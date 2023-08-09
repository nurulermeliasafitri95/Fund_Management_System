<template>
  <div>
    <h2 class="mb-5">Portfolio</h2>
    <div class="row">
      <div class="col-lg-8">
         <!-- Display Portfolio details -->
        <Portfolio :deals="deals" :portfolioProfit="portfolioProfit" :portfolioValuation="portfolioValuation" :totalInvestment="totalInvestment" />
      </div>
      <div class="col-lg-4">
        <!-- Include the InvestmentForm component -->
        <InvestmentForm @investment-submitted="updatePortfolio" />
      </div>
    </div>
   
    
    
    
  </div>
</template>

<script>
import InvestmentForm from './InvestmentForm.vue'; // Adjust the path
import Portfolio from './Portfolio.vue'; // Adjust the path

export default {
  name: 'InvestmentPage',
  components: {
    InvestmentForm,
    Portfolio,
  },
  data() {
    return {
      deals: 10,                  // Replace with actual data
      portfolioProfit: 600,      // Replace with actual data
      portfolioValuation: 1600, // Replace with actual data
      totalInvestment: 1000,         // Initialize total investment
    };
  },
  methods: {
    updatePortfolio(investmentValue) {
      // Update portfolio values
      this.deals += 1;
      this.portfolioProfit += investmentValue;
      this.portfolioValuation += investmentValue;
      this.totalInvestment += investmentValue;
    },
  },
};
</script>
