(function () {

    angular.module('myApp')
        .service('characterService', characterService);

    function characterService($firebaseArray) {
        var self = this;

        var ref = firebase.database().ref().child("characters");
        self.characters = $firebaseArray(ref);

        self.selectedChar = undefined;
        self.getRandomCharacter = getRandomCharacter;

        function getRandomCharacter() {
            return self.characters[Math.floor(Math.random()*self.characters.length)];
        }

        function init() {
            for (var c=0, clen=self.characters.length; c<clen; c++) {
                self.characters[c].weight = self.characters[c].mass * 2.20462;
            }
            self.selectedChar = getRandomCharacter();
        }

        self.characters.$loaded().then(function () {
            init();
        })
    }

})();
