import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior () {
		return { x: 0, y: 0 }
	},
	routes: [
		{ path: '/', name: 'home', component: Home },
		{ path: '/queue', name: 'queue', component: () => import( /* webpackChunkName: "about" */ './views/Queue/Index.vue') },
		{ path: '/team', name: 'team', component: () => import( /* webpackChunkName: "about" */ './views/Team.vue') },
		{ path: '/about', name: 'about', component: () => import( /* webpackChunkName: "about" */ './views/About.vue') }
	]
})
