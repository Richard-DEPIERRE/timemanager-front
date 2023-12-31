
import { createRouter, createWebHashHistory } from 'vue-router'
import CurrentWeather from '@/components/CurrentWeather.vue'
import ForcastChart from '@/components/ForcastChart.vue'
import ConnexionForm from '@/components/ConnexionForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import WeatherSearch from '@/components/WeatherSearch.vue'
import homePage from '@/components/homePage.vue'
import personalInformation from '@/components/persoInfo'
import bagelChart from '@/components/bagelChart'

const routes = [
  {
    path: '/currentWeather/:city',
    name: 'currentWeather',
    component: CurrentWeather
  },
  {
    path: '/personalInformation',
    name: 'personalInformation',
    component: personalInformation
  },
  {
    path: '/forecastChart/:city',
    name: 'forecastChart',
    component: ForcastChart
  },
  {
    path: '/connexion',
    name: 'connexionForm',
    component: ConnexionForm
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: RegisterForm
  },
  {
    path: '/BagelTest',
    name: 'bagelChart',
    component: bagelChart
  },
  {
    path: '/weatherSeach',
    name: 'weatherSearch',
    component: WeatherSearch
  },
  {
    path: '/home',
    name: 'homePage',
    component: homePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
