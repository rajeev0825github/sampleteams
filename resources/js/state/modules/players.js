import axios from 'axios';

export const state = {
};

export const mutations = {
};

export const getters = {
};

export const actions = {
    async createPlayer({}, data) {
        return axios
			.post('/api/players', data)
			.then(async (response) => {
                return response.data;
			});
    },
    async updatePlayer({}, data) {
        return axios
			.put('/api/players/' + data.id, data)
			.then(async (response) => {
                return response.data;
			});
    },
    async deletePlayer({}, data) {
        return axios
			.delete('/api/players/' + data.id)
			.then(async (response) => {
                return response.data;
			});
    }
};
