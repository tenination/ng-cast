angular.module('video-player')

  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  }) 

  .component('app', {
    bindings: {
      
    },
    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.string = 'asdf';
      this.currentVideo = window.exampleVideoData[0];
      this.selectVideo = (video)=> {
        console.log('You selected this video', video);
        this.currentVideo = video;
        console.log(this);
      };
      this.videos = window.exampleVideoData;
    }
  });  

  

