<template src="./sidebar.html"> </template>
<style lang="scss" src="./sidebar.scss" scoped> </style>

<script>

import { mapState } from 'vuex';
import locale from '@/localization/uk.json'

export default {
	data: () => ({
		locale,
		routes: [{ 
			title: 'Головна',
			icon: 'mdi-buffer',
			url: '/dashboard',
			permissions: ['admin', 'teacher', 'student']
		}, { 
			title: 'Користувачі', 
			icon: 'mdi-account',
			url: '/accounts',
			permissions: ['admin']
		}, {
			title: 'Факультети',
			icon: 'mdi-bank',
			url: '/faculties',
			permissions: ['admin']
		}, {
			title: 'Кафедри',
			icon: 'mdi-briefcase',
			url: '/cathedras',
			permissions: ['admin']
		}, {
			title: 'Групи',
			icon: 'mdi-account-group',
			url: '/groups',
			permissions: ['admin']
		}, {
			title: 'Форми навчання',
			icon: 'mdi-school',
			url: '/learn-forms',
			permissions: ['admin']
		}, {
			title: 'Уроки',
			icon: 'mdi-clipboard-text',
			url: '/lessons',
			permissions: ['admin', 'teacher', 'student']
		}, {
			title: 'Платежі',
			icon: 'mdi-wallet',
			url: '/payments',
			permissions: ['admin']
		}, {
			title: 'Історія балансу',
			icon: 'mdi-history',
			url: '/balance-histories',
			permissions: ['admin', 'student']
		}, {
			title: 'Завдання',
			icon: 'mdi-clipboard-list',
			url: '/tasks',
			permissions: ['teacher']
		}, { 
			title: 'Налаштування', 
			icon: 'mdi-settings' ,
			url: '/settings',
			permissions: ['admin', 'teacher', 'student']
		}]
	}),
	computed: {
		...mapState({
			user: (state) => state.auth.user
		}),
		userImage() {
			return this.user.photo && `${process.env.VUE_APP_BASE}${this.user.photo.path }` || require('@/assets/images/user.png');
		}
	},
	methods: {
		isAllowed(link) {
			return link.permissions.includes(this.user.roleName)
		}
	}
}
</script>
