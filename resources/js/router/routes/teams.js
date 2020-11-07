import lazyLoadView from './lazy-load';
import store from '../../state/store';
export default [
	{
		path: '/teams/create',
		name: 'create_team',
		component: () => lazyLoadView(import('../views/create_modify_team.vue')),
		meta: {
			authRequired: true
		}
	},
	{
		path: '/teams/:team/edit',
		name: 'edit_team',
		component: () => lazyLoadView(import('../views/create_modify_team.vue')),
		meta: {
			authRequired: true,
			edit: true,
			beforeResolve(routeTo, routeFrom, next) {
				console.log(routeTo.params.team)
				store
					// Try to fetch the team information 
					.dispatch('teams/fetchTeam', routeTo.params.team )
					.then((team) => {
						// Add the teamthe route params, so that it can
						// be provided as a prop for the view component below.
						routeTo.params.team = team;
						// Continue to the route.
						next();
					})
					.catch(() => {
						// If a teamh the provided team could not be
						// found, redirect to the 404 page.
						next({ name: '404', params: { resource: 'Team' } });
					});
			}
		}
	}
];
