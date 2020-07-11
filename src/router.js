import Vue from 'vue'
import VueRouter from 'vue-router'
import FormLogin from './components/FormLogin.vue'
import StarterPage from './components/StarterPage.vue'

import TripList from './components/TripList.vue'
import TripCreate from './components/TripCreate.vue'
import TripHistory from './components/TripHistory.vue'
import TripPoint from './components/TripPoint.vue'
import Home from './components/Home.vue'
import Interesse from './components/Interesse.vue'



Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', name: '/', component: StarterPage },

        { path: '/MenuViagem', name: 'MenuViagem', component: TripList },
        { path: '/CriarViagem', name: 'CriarViagem', component: TripCreate },
        { path: '/login', component: FormLogin },
        {
            path: '/Paradas',
            name: 'MenuParadas',
            component: TripPoint,
            children: [
                { path: ':id', name: 'ParadasContent', component: TripHistory }
            ]
        },

        { path: '/HistoricoViagem', name: 'HistoricoViagem', component: TripHistory },
        { path: '/Home', name: 'Home', component: Home },
        { path: '/Interesse', name: 'Home', component: Interesse },



    ]
})