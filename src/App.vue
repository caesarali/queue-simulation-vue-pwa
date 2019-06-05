<template>
	<v-app :dark="$root.darkMode">
		<navbar />

		<v-content>
			<router-view></router-view>
		</v-content>

		<bottom-nav />
	</v-app>
</template>

<script>
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'

export default {
	name: 'App',
	components: { Navbar, BottomNav }
}
</script>
