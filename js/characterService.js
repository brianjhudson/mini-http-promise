angular.module("characterApp").service("characterService", function($http,$q) {
    // console.log("Service Working")

    this.getCharacter = function(){
      var deferred = $q.defer()
      var characters = []
      // variable is now a promise
      $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon/1/'
      }).then(function(response){
        characters.push(response.data)
        if(characters.length === 2){
          deferred.resolve(characters)
        }
      })

      $http.get('http://pokeapi.co/api/v2/pokemon/2/').then(function(response){
        characters.push(response.data)
        if(characters.length === 2){
          deferred.resolve(characters)
        }
      })

      return deferred.promise
      // always write this and the variable declaration before starting
    }
})
