var SearchView = Backbone.View.extend({

  events: {
    'click button': 'search',
    'keyup': 'keyHandler'
  },

  search: function() {
    var searchValue = $('.form-control').val();
    this.collection.search(searchValue);
    $('.form-control').val('');
  },

  keyHandler: function(e) {
    if (e.keyCode === 13) {
      this.search();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
