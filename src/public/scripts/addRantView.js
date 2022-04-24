var AddRantView = Backbone.View.extend({
	initialize: function () {
		this.$('textarea').on('keyup', this.onChange.bind(this));
		this.$('form').on('submit', this.onSubmit.bind(this));
		var text = localStorage.getItem('next-rant');
		if (text) {
			this.$('textarea').val(text);
		}
	},

	onChange: function (evt) {
		var text = (evt.target || {}).value;
		if (typeof text === 'string') {
			localStorage.setItem('next-rant', text);
		}
	},

	onSubmit: function (evt) {
		evt.preventDefault();
		var form = evt.target;
		var rant = {
			text: form.rant.value,
		};

		if (rant.text && typeof rant === 'string') {
			analytics.trackConversion();
			this.collection.create(rant, { wait: true });

			form.rant.value = '';
		}
	},
});
