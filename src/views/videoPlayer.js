var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.render);
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    $('.loading').toggle();
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
