(function(){

    angular.module('myApp')
        .component('charList', { // the tag for using this is <char-list>
            templateUrl: "characters/char-list.component.html",
            controller: charListController
        })
        .config(charListConfig);

    function charListConfig($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            template: '<char-list></char-list>'
        });
    }

    function charListController(characterService) {

        // variables
        var self = this;
        self.orderBy = 'name';
        self.sortClass= 'sort-asc';
        self.columns = ['name','gender','mass'];

        self.characters = characterService.characters;
        characterService.characters().then(function (characters) {
            self.characters = characters;
            self.selectedChar = characterService.selectedChar;
        });

        // functions
        self.sort = sort;
        self.selectChar = selectChar;
        self.close = close;

        function sort(attribute) {
            self.sortClass = 'sort-asc'; // down arrow
            var newOrderBy = attribute;
            if (self.orderBy === attribute) {
                newOrderBy = '-' + attribute;
                self.sortClass = 'sort-desc'; // up arrow, reverse sort
            }
            self.orderBy = newOrderBy;
        }

        function selectChar(char) {
            // this
            self.selectedChar = characterService.selectedChar = char;
            // or this
            self.selectedChar = char;
            characterService.selectedChar = char;
            // or this!
            characterService.selectedChar = char;
            self.selectedChar = characterService.selectedChar;
        }

        function close() {
            self.selectedChar = characterService.selectedChar = undefined;
        }

    }

})();
