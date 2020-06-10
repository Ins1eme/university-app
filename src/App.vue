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

	.auth-layout {
		height: calc(100vh - 90px);
		display: flex;
		justify-content: center;
		align-items: center;
		background: 
		url('assets/images/bg-auth-2.png') bottom 20px left 20px no-repeat,
		url('assets/images/bg-auth-1.png') top 20px right 20px no-repeat;
		background-size: 25%;
	}
</style>
