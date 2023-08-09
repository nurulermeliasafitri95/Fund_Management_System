<template>
    <div>
      <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-lg-3">
                    <h6>Number of Deals</h6>
                    <h3>{{ deals }}</h3>
                </div>
                <div class="col-lg-3">
                    <h6>Total Investment</h6>
                    <h3>RM {{ totalInvestment }}</h3>
                </div>
                <div class="col-lg-3">
                    <h6>Portfolio Valuation</h6>
                    <h3>RM {{ portfolioValuation }}</h3>
                </div>
                <div class="col-lg-3">
                    <h6>Portfolio Profit</h6>
                    <h3>+ RM{{ portfolioProfit }}</h3>
                </div>
            </div>
        </div>
      </div>
      <div class="card my-5">
        <div class="card-header">
            <h6 class="mb-0">My Investment</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
            <table class="table table-rounded table-striped gy-7 gs-7">
                <thead>
                    <tr class="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                        <th>Name</th>
                        <th>Type</th>
                        <th>Invested</th>
                        <th>Value</th>
                        <th>Profit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Affin Hwang Absolute Return Fund I MYR	</td>
                        <td>Income & Growth	</td>
                        <td>RM200</td>
                        <td>RM250</td>
                        <td>+RM50</td>
                    </tr>
                    <tr>
                        <td>Affin Hwang Income Fund 3 MYR</td>
                        <td>Income & Growth	</td>
                        <td>RM1200</td>
                        <td>RM1600</td>
                        <td>+RM400</td>
                    </tr>
                    <tr>
                        <td>Affin Hwang Absolute Return Fund I MYR	</td>
                        <td>Income & Growth	</td>
                        <td>RM200</td>
                        <td>RM250</td>
                        <td>+RM50</td>
                    </tr>
                    <tr>
                        <td>Affin Hwang Income Fund 3 MYR</td>
                        <td>Income & Growth	</td>
                        <td>RM1200</td>
                        <td>RM1600</td>
                        <td>+RM400</td>
                    </tr>
                    <tr>
                        <td>Affin Hwang Absolute Return Fund I MYR	</td>
                        <td>Income & Growth	</td>
                        <td>RM200</td>
                        <td>RM250</td>
                        <td>+RM50</td>
                    </tr>
                    <tr>
                        <td>Affin Hwang Income Fund 3 MYR</td>
                        <td>Income & Growth	</td>
                        <td>RM1200</td>
                        <td>RM1600</td>
                        <td>+RM400</td>
                    </tr>
                    <tr>
                        <td>Affin Hwang Absolute Return Fund I MYR	</td>
                        <td>Income & Growth	</td>
                        <td>RM200</td>
                        <td>RM250</td>
                        <td>+RM50</td>
                    </tr>
                    <tr>
                        <td>Affin Hwang Income Fund 3 MYR</td>
                        <td>Income & Growth	</td>
                        <td>RM1200</td>
                        <td>RM1600</td>
                        <td>+RM400</td>
                    </tr>
                    <tr>
                        <td>Affin Hwang Absolute Return Fund I MYR	</td>
                        <td>Income & Growth	</td>
                        <td>RM200</td>
                        <td>RM250</td>
                        <td>+RM50</td>
                    </tr>
                    <tr>
                        <td>Affin Hwang Income Fund 3 MYR</td>
                        <td>Income & Growth	</td>
                        <td>RM1200</td>
                        <td>RM1600</td>
                        <td>+RM400</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
      </div>
       
            
    </div>
  </template>
  
  <script>
  export default {
    name: 'Portfolio',
    props: {
      deals: Number,                // Number of deals
      portfolioProfit: Number,      // Portfolio profit
      portfolioValuation: Number,   // Portfolio valuation
      totalInvestment: Number,      // Total investment
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles you need */
  </style>
  