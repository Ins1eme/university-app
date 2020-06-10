<template> 
	<v-app>
		<router-view></router-view>
		<v-notification></v-notification>
	</v-app>
</template>

<script>

import { notification } from '@/views/components'

export default {
	name: 'App',
	components: {
		'v-notification': notification
	}
}
</script>

<style lang="scss">
	@import url('./styles/reset.scss');
	@import url('./styles/common.scss');
	@import url('./styles/variables.scss');
</style>
