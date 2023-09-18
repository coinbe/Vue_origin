<template>
	<div>
		<h3>News</h3>
		<div v-for="(news, index) in news" :key="index">{{ news.title }}</div>
	</div>
</template>

<script>
import { fetchNewsList } from '@/api/';
export default {
	components: {},
	data() {
		return {
			news: [],
		};
	},
	created() {
		fetchNewsList()
			.then(res => (this.news = res.data))
			.catch();
	},
};
</script>

<style></style>
