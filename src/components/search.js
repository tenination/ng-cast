angular.module('video-player')

   .component('search', {
    bindings: {
    searchInputValue: '<',
    handleClick: '<', 
    changeViews: '<'
    
    },
      templateUrl: 'src/templates/search.html'
    });
   


