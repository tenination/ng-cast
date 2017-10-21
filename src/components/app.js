angular.module('video-player')

  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  }) 

  .component('app', {
    bindings: {
      
    },
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.string = 'asdf';
      this.currentVideo = window.exampleVideoData[0];
      this.selectVideo = (video)=> {
        console.log('You selected this video', video);
        this.currentVideo = video;
        console.log(this);
      };
      this.searchInputValue = 'DEFAULT';
      this.handleClick = function() {
        console.log('You clicked search button');
        console.log(youTube.getVideos(this.searchInputValue));
        //console.log(this);
        //console.log(this.searchInputValue);
      
      };
      this.videos = window.exampleVideoData;
    }
  });  

  

