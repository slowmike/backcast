var SearchView = Backbone.View.extend({

  timer: false,

  initialize: function() {
    setInterval(() => this.timer = false, 500);
  },

  events: {
    'click button': 'search',
    'keyup input': 'keyHandler'
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
    console.log(this.timer);
    while(!this.timer) {
      var searchValue = $('.form-control').val();
      this.collection.search(searchValue);
      this.timer = true;
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
