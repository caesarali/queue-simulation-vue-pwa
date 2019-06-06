<template>
	<v-bottom-nav :value="$root.bottomNav" class="hidden-md-and-up" v-resize="onResize" app>
		<v-btn color="teal" flat :to="{ name: 'home' }" exact>
			<span>Home</span>
			<v-icon>home</v-icon>
		</v-btn>

		<v-btn color="teal" flat :to="{ name: 'queue' }">
			<span>Queue</span>
			<v-icon>widgets</v-icon>
		</v-btn>

		<v-btn color="teal" flat :to="{ name: 'team' }" exact>
			<span>Team</span>
			<v-icon>far fa-user-circle</v-icon>
		</v-btn>
	</v-bottom-nav>
</template>

<script>
export default {
	data() {
		return {
			defaultHeight: 0,
			windowHeight: 0,
			showNav: true
		}
	},
	watch: {
		windowHeight(value) {
			if (value < this.defaultHeight) {
				this.showNav = false
			} else {
				this.showNav = true
			}
		}
	},
	methods: {
		onResize () {
			this.windowHeight = window.innerHeight
		}
    },
	mounted () {
		this.onResize()
		this.defaultHeight = this.windowHeight
    }
}
</script>
