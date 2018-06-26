var VideoListEntryView = Backbone.View.extend({

  events: { 'click .video-list-entry-title': 'select' },

  render: function() {
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  select: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
