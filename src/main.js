import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vuetify'
import './registerServiceWorker'

import Vuetify, { VApp, VNavigationDrawer, VFooter, VToolbar, VFadeTransition } from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.config.productionTip = false

Vue.use(Vuetify, {
    components: { VApp, VNavigationDrawer, VFooter, VToolbar, VFadeTransition },
    directives: { Ripple }
})

new Vue({
    router,
    store,
    render: h => h(App),
    data() {
        return {
            navbar: true,
            bottomNav: true,
            darkMode: false
        }
    },
    methods: {
        goBack() {
            this.bottomNav = true
            this.$router.go(-1)
        }
    },
    computed: {
		isMobile() {
			let breakpoint = this.$vuetify.breakpoint;
			if (breakpoint.xsOnly) {
				return true
			} return false
		},
    }
}).$mount('#app')
