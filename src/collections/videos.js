var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(searchValue) {
    this.fetch({
      data: {
        part: 'snippet',
        q: searchValue,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: 'true'
      }
      // success: function(collection) {
      //   console.log(collection.models);
      // },
      // error: function() {
      //   throw new Error("Video fetch failed.");
      // }
    });
  },

  parse: function(response) {
    return response.items;
  }

});
