import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/news',
		},
		{
			path: '/news',
			name: 'news',
			component: () => import('@/views/NewsView'),
		},
		{
			path: '/asks',
			name: 'asks',
			component: () => import('@/views/AsksView'),
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: () => import('@/views/JobsView'),
		},
		{
			path: '/:notFound(.*)',
			component: () => import('@/components/NotFound'),
		},
	],
});
