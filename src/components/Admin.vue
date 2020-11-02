<template>
  <div class="admin">
    <!-- <Login/> -->
    <h1>CHANGE ADMIN</h1>
    <div class="p-grid p-fluid">
      <div class="p-col-12">
        <div class="card p-shadow-4">
          <h2>성당 별 입력 코인</h2>
          <div class="p-formgrid p-col-6">
            <div class="">
              <Dropdown class="p-jc-center" v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
              <div class="p-inputgroup">
                <InputText placeholder="Price" />
                <span class="p-inputgroup-addon">원</span>
              </div>
              <Button label="Submit"></Button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-col-12">
        <div class="card p-shadow-4">
          <h2>일 별 코인 통계</h2>
          <Chart type="pie" :data="chartData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Chart from 'primevue/chart';


// import './assets/layout/layout.scss';
// import './assets/layout/flags/flags.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

export default {
  name: 'Admin',
  components: {
    Dropdown,
    InputText,
    Button,
    Chart
  },
  data() {
    return {
      dropdownValues: [
					{name: 'New York', code: 'NY'},
					{name: 'Rome', code: 'RM'},
					{name: 'London', code: 'LDN'},
					{name: 'Istanbul', code: 'IST'},
					{name: 'Paris', code: 'PRS'}
			],
      dropdownValue: null,
      
      chartData: {
				labels: ['A','B','C'],
				datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
                            "#42A5F5",
                            "#66BB6A",
                            "#FFA726"
                        ],
                        hoverBackgroundColor: [
                            "#64B5F6",
                            "#81C784",
                            "#FFB74D"
                        ]
					}
				]
			}
    }
  }
}
</script>
