<template>
    <div>
      <canvas ref="lineChart"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  export default {
    props: {
      labels: Array, // Array of labels for x-axis
      data: Array,   // Array of data points for y-axis
    },
    setup(props) {
      const lineChart = ref(null);
  
      onMounted(() => {
        const ctx = lineChart.value.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: props.labels,
            datasets: [
              {
                label: 'Performance',
                borderColor: '#41B883', // Line color
                data: props.data,
              },
            ],
          },
        });
      });
  
      return {
        lineChart,
      };
    },
  };
  </script>
  
  <style>
  /* Add any styles you need */
  </style>
  