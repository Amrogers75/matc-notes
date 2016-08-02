/**
 * Created by anthonyrogers on 8/2/16.
 */
(function() {
    angular.module('app')
        .directive('integer', function () {
            return{
                require: 'ngModel',
                link: function(scope, element, attributes, ctrl) {
                    ctrl.$validators.integer = integerValidator;
                    
                    function integerValidator(modelValue, viewValue) {
                        if(ctrl.$isEmpty(modelValue)){
                            return true;
                        }

                        if(/^\-?[0-9]+$/.test(viewValue)){
                        return true;
                        }

                        return false;
                    }
                }
            }
            
        })
})();