<template>
    <!-- Modal trigger button -->
    <button @click="showModal" data-bs-toggle="modal" data-bs-target="#kt_modal_1">Open Investment Modal</button>
   
    <div>
      
      <!-- Modal content -->
      <div v-if="isModalOpen" class="modal fade" tabindex="-1" role="dialog" id="kt_modal_1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Investment Form</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              <InvestmentForm @investment-submitted="updatePortfolio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import InvestmentForm from './InvestmentForm.vue'; // Adjust the path
  
  export default {
    name: 'InvestmentModal',
    components: {
      InvestmentForm,
    },
    data() {
      return {
        isModalOpen: false,
      };
    },
    methods: {
      showModal() {
        // console.log('showModal method called'); // Add this line
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      updatePortfolio(investmentValue) {
        // Update the portfolio value
        // You can use a Vuex store, emit an event, or any suitable method here
      },
    },
  };
  </script>
  
  <style>
  /* Add modal styles as needed */
  </style>
  