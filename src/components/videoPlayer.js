angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    bindings: {
      currentVideo: '<',
      searchInputValue: '<',
      changeViews: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
