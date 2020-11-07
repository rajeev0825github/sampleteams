export default {
	nameRules() {
		return [
			(v) => !!v || 'Name is required'
		];
	},
	passwordRules() {
		return [
			(v) => !!v || 'Password is required',
			(v) => (v && v.length > 8) || 'Password must be greater than 8 characters'
		];
	},
	emailRules() {
		return [ (v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid' ];
	}
};
