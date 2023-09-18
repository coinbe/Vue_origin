<template>
	<div>
		<h3>Asks</h3>
		<div v-for="(ask, index) in asks" :key="index">{{ ask.title }}</div>
	</div>
</template>

<script>
import { fetchAsksList } from '@/api/';
export default {
	data() {
		return {
			asks: [],
		};
	},
	created() {
		fetchAsksList().then(res => (this.asks = res.data));
	},
};
</script>

<style></style>
