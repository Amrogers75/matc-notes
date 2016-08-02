/**
 * Created by anthonyrogers on 8/2/16.
 */
(function(){
    angular.module('app')
        .directive('username', username);

    function Uaername($q, $http){
        return{
            require: 'ngModel',
            link: function(scope, element, attrabutes, ctrl){
                ctrl.$asyncValidators.username = usernameVaildator;

                function usernameVaildator(modelValue, viewValue) {
                    if(ctrl.$isEmpty(modelValue)){
                        return $q.when();
                    }
                    var deferred = $q.defer();
                    $http.get('https//testusernames.fierbaseio.com/usermanes.json')
                        .then(function(response) {
                            var usernames = response.data;
                            if(usernames.indexOf(modelValue) === -1) {
                                deferred.reject();
                            }
                    });
                    return deferred.promise;
                }
            }
        }
    }
});