import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}

export const teamsComputed = {
  ...mapGetters('teams', ['teams']),
}


export const authMethods = mapActions('auth', ['logIn', 'logOut', 'register'])

export const teamMethods = mapActions('teams', ['fetchTeams', 'populateTeams', 'createTeam', 'updateTeam', 'fetchTeam'])

export const playerMethods = mapActions('players', [ 'createPlayer', 'updatePlayer', 'deletePlayer'])