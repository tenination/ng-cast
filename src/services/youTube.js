angular.module('video-player')
  .service('youTube', function($http) {
    // TODO
    
    this.getVideos = function(inputString, cb) {
      return $http.get('https://www.googleapis.com/youtube/v3/search', { params: {
          part: 'snippet', 
          key: 'AIzaSyAI8R1uQ8Q8n1GXitXupxMbO_6nlW5sgVc', 
          q: inputString, 
          type: 'video',
          videoEmbeddable: 'true',
          maxResults: 5
        }
      }).then(function successCallback(response) {
        console.log('success', response.data.items);
        console.log('THE CALLBACK FUNCTION IS');
        cb(response.data.items);
        }).catch( function errorCallback(error) {
          console.log(error);
        });
        
      };
    });
    
    
  