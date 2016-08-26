(function () {

    angular.module('app')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            controllerAs: 'vm',
            bindings: {
                character: '<',
                onClose: '&'
            }
        })
        .config(charListConfig);

    function charListConfig($stateProvider) {
        $stateProvider.state('char-detail', {
            views: {
                'char-detail': {
                    template: '<char-detail></char-detail>'
                }
            }
        });
    }

    function charDetailController( $firebaseObject /* step #4 */, $scope /* step #8 */ ) {
        var vm = this;

        /* step #5 */
        var ref = firebase.datatbase().ref().child("character");
        /* step #6 */
        var syncObject = $firebaseObject(ref);
        /* step #7 */
        syncObject.$bindTo($scope, "vm.form");


        vm.char = {};
        vm.char.name = '';
        vm.char.height = 0;
        vm.char.mass = 0;

        vm.save = function() {
            console.log('saving...');
            console.log(JSON.stringify(vm.char));
            console.log('TODO: Finish save implementation here');

            //step #9
            vm.form = vm.char;
        }

        vm.delete = function() {
            console.log('deleting...');
            console.log(JSON.stringify(vm.char));
            console.log('TODO: Finish delete implementation here');
            // step #10
            syncObject.$remove().then(function() {
                console.log('Object removed!');
                vm.char = {}
            })
        }
    }

})();
