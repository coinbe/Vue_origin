import axios from 'axios';

const config = {
	// prefix, Tokken에 대한 정보도 넣어주면 좋다
	baseUrl: 'https://api.hnpwa.com/v0',
};

export function fetchNewsList() {
	return axios.get(`${config.baseUrl}/news/1.json`);
}
export function fetchAsksList() {
	return axios.get(`${config.baseUrl}/ask/1.json`);
}
export function fetchJobsList() {
	return axios.get(`${config.baseUrl}/jobs/1.json`);
}
