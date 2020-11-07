import axios from 'axios';

export const state = {
	teams: []
};

export const mutations = {
	SET_TEAMS(state, newValue) {
		state.teams = newValue;
	}
};

export const getters = {
	// get user teams
	teams(state) {
		return state.teams;
	}
};

export const actions = {
	// Will fetch user teams initially
	fetchTeams({ commit }) {
		return axios
			.get('/api/teams')
			.then((response) => {
                let data = response.data.data;
				commit('SET_TEAMS', data);
				return true;
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					commit('SET_TEAMS', []);
				} else {
					console.warn(error);
				}
			});
	},
	fetchTeam({}, team) {
		return axios
		.get('/api/teams/' + team)
		.then((response) => {
			let data = response.data.data;
			return data;
		});
	},
	populateTeams({ dispatch }) {
		return axios
			.post('/api/teams/populate')
			.then((response) => {
				return dispatch('fetchTeams');
			})
			.catch((error) => {
				console.warn(error);
			});
    },
    async createTeam({dispatch}, data) {
        return axios
			.post('/api/teams', data)
			.then(async (response) => {
                await dispatch('fetchTeams');
                return response.data;
			});
    },
    async updateTeam({dispatch}, data) {
        return axios
			.put('/api/teams/' + data.id, data)
			.then(async (response) => {
				await dispatch('fetchTeams');
                return response.data;
			});
    }
};
