(function(){

    angular.module('myApp')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            bindings: {
                charId: '<',
                onClose: '&'
            }
        });

    function charDetailController(cahracterService) {
        var self = this;
        //self.char
        self.close = close;
        self.$onChanges = onChanges;

        function close() {
            self.onClose(); // call output binding
        }

        function onChanges(changes) {
            if (changes.character) {
                //Character.get({id: charId})
                characterService.getPhoto(changes.charId.currentValue)
                    .then(function(){
                        log.log(data);
                        self.character = data;
                    })

            }
        }
    }

})();
