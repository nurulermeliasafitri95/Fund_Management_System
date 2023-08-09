<template>
    <div>
        <h3 class="mb-5">Fund Details</h3>
        <div class="card-container">
                <div class="card">
                    <div class="card-header">
                        <h6 class="mb-0">{{ fund.name }}</h6>
                    </div>
                    <div class="card-body">
                        <p>Description: {{ fund.description }}</p>
                        <p>Investment Type: {{ fund.investmentType }}</p>
                        <p>Current NAV: RM{{ fund.currentNAV }}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h6 class="mb-0">Performance History</h6>
                    </div>
                    <div class="card-body">
                        <line-chart :labels="years" :data="performanceHistory"></line-chart>
                    </div>
                </div>
        </div>
      
     
      
      <button @click="goBack" class="btn btn-primary mt-5 float-end">Back to List</button>
    </div>
    <div>
    <!-- Display fund details -->

    <!-- Use the LineChart component to display the performance history -->
  </div>
  </template>
  
  <script>
  import LineChart from './LineChart.vue';
  export default {
    name: 'FundDetails',
    components: {
        LineChart,
    },
    data() {
      return {
        fund: {
          id: 1,
          name: 'Affin Hwang Absolute Return Fund I MYR',
          description: 'A fund that invests in stocks and equities.',
          investmentType: 'Income & Growth',
          performanceHistory: [10, 15, 12, 8, 18, 20, 22],
          currentNAV: 150.25
        },
         years: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7'],
        performanceHistory: [10, 15, 12, 8, 18, 20, 22], // Example data
      };
    },
    
      
    methods: {
      goBack() {
        // Navigate back to the funds list
        this.$router.push('/'); // Adjust the route path as needed
      }
    }
  };
  </script>
  <style>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
  gap: 20px; /* Adjust the gap between cards */
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%; /* Make card take full height within grid cell */
}
</style>
  