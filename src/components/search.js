angular.module('video-player')

   .component('search', {
    bindings: {
    searchInputValue: '<',
    handleClick: '<'
    
    },
      templateUrl: 'src/templates/search.html'
    });
   


