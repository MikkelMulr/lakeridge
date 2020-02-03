import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Browse from './components/Browse';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
	routes: [ { path: '/', name: 'Home', component: Home }, { path: '/browse', name: 'Browse', component: Browse } ],
	mode: 'history' //cuts some older browser support to fix issue where page refreshes on navigating between routes
});

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
