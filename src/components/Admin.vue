<template>
  <div class="admin">
    <!-- <Login/> -->
    <h1>CHANGE ADMIN</h1>
    <div>
      <b-card title="성당 별 코인 입력">
        <!-- Coin Form -->
        <b-form id="coinForm" @submit="onSubmit" @reset="onReset">
          <!-- Select donation place-->
          <div class="row justify-content-center">
            <b-form-group class="col-md-6 col-sm-6" id="selectForm" label-for="selDonation">
              <b-form-select id="selDonation" v-model="form.place" :options="places" required>
              </b-form-select>
            </b-form-group>
          </div>
          <!-- Input User Id -->
          <div class="row justify-content-center">
            <b-form-group class="col-md-6 col-sm-6">
              <b-input-group id="inputIdForm" prepend="ID">
                <b-form-input id="inputCoin" v-model="form.userId" required placeholder="기부자의 ID를 입력해주세요.">
                </b-form-input>
              </b-input-group>
            </b-form-group>
          </div>
          <!-- Input coin value -->
          <div class="row justify-content-center">
            <b-form-group class="col-md-6 col-sm-6">
              <b-input-group id="inputCoinForm" append="원">
                <b-form-input id="inputCoin" v-model="form.coinValue" required placeholder="기부 금액을 입력해주세요.">
                </b-form-input>
              </b-input-group>
            </b-form-group>
          </div>
          <div class="row justify-content-center">
            <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </div>
        </b-form>
      </b-card>
      <!-- Chart Card -->
      <b-card title="코인 통계">

      </b-card>
    </div>
  </div>
</template>

<script>
// import Chart from 'primevue/chart';


// import './assets/layout/layout.scss';
// import './assets/layout/flags/flags.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

export default {
  name: 'Admin',
  components: {
    // Chart
  },
  data() {
    return {
      //Coin Form Data
      form: {
        userId: '',
        coinValue: '',
        place: null,
      },
      places: [{text: '기부처를 선택하세요', value: null}, '은평구', '광진구', '봉일천', '세종시'],

      //Chart Data
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
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDfault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDfault();
      this.form.userId = '';
      this.form.coinValue = '';
      this.form.place = null;
    }
  }
}
</script>
