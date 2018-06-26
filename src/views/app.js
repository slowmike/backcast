var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    console.log(this.videos);
    this.$el.html(this.template());
    new VideoListView({
      collection: this.videos,
      el: $('.list')
    }).render();

    new VideoPlayerView({
      model: this.videos.models[0],
      el: $('.player')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
