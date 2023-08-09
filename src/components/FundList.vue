<template>
    <div>
      <h2 class="mb-5">Funds List</h2>
    <div class="table-responsive">
	<table class="table table-rounded table-striped border gy-7 gs-7">
		<thead>
			<tr class="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
				<th>Fund Name</th>
				<th>Investment Type</th>
				<th>Currency</th>
				<th>NAV Price</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="fund in funds" :key="fund.id">
				<td>{{ fund.name }}</td>
				<td>{{ fund.investmentType }}</td>
				<td>{{ fund.currency }}</td>
				<td>{{ fund.currentNAV }}</td>
                <td><router-link :to="'/funds/' + fund.id">View Details</router-link></td>
			</tr>
			
		</tbody>
	</table>
</div>
      
    </div>
</template>
  
<script>
  import api from '@/api.js';
  
  export default {
    data() {
      return {
        funds: []
      };
    },
    mounted() {
      this.fetchFunds();
    },
    methods: {
      async fetchFunds() {
        try {
          const response = await api.getFunds();
          this.funds = response.data;
        } catch (error) {
          console.error('Error fetching funds:', error);
        }
      }
    }
  };
</script>
  