var VideoListEntryView = Backbone.View.extend({

  events: { "click .video-list-entry-title": "select" },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.model.attributes);
    return this;
  },

  select: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
