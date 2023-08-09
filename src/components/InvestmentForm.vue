<template>
    <div >
      <div class="card bg-light">
        <div class="card-header">
            <h6 class="mb-0">Topup your Investment</h6>
        </div>
        <div class="card-body">
            <form @submit.prevent="submitForm">
                <label class="form-label">Investment Amount:</label>

                <input type="number" class="form-control" v-model="investmentAmount" required>
                <label class="form-labe mt-2">Number of Units:</label>
                <input type="number" class="form-control" v-model="units" required>
                <div class="d-grid gap-2 mt-4 ">
                <button class="btn btn-primary" type="submit">Invest</button>
                </div>
            </form>
        </div>
      </div>
      
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'InvestmentForm',
    data() {
      return {
        investmentAmount: "",
        units: "",
      };
    },
   
    methods: {
      submitForm() {
        // Calculate total investment value
        const totalInvestmentValue = this.investmentAmount * this.units;
  
        // Emit an event to notify the parent component about the investment
        this.$emit('investment-submitted', totalInvestmentValue);
  
        // Reset form fields
        this.investmentAmount = 0;
        this.units = 0;
      },
    },
  };
  </script>
  <style scoped>
</style>