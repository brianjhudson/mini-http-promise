angular.module("characterApp").controller("characterCtrl", function($scope, characterService) {
    // console.log("Working")

    characterService.getCharacter().then(function(result){
      console.log(result)
      $scope.characters = result
    })

})
