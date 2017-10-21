angular.module('video-player')
  .component('videoList', {
    bindings: {
      selectVideo: '<',
      videos: '<',
      searchInputValue: '<',
      changeViews: '<'
    },
    templateUrl: 'src/templates/videoList.html', 
  });
