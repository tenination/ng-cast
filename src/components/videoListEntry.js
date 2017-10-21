angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    selectVideo: '<',
    video: '<',
    searchInputValue: '<',
    changeViews: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html', 
});



