var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('backbone js');
    this.listenTo(this.videos, 'sync', () => this.videos.models[0].select() );
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    new SearchView({
      collection: this.videos,
      el: $('.search')
    }).render();

    new VideoListView({
      collection: this.videos,
      el: $('.list')
    }).render();

    new VideoPlayerView({
      collection: this.videos,
      model: this.videos.models[0],
      el: $('.player')
    }).render();


    return this;
  },

  template: templateURL('src/templates/app.html')

});
