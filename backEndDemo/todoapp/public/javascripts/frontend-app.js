angular.module('todoApp', [])
	// .constant('todos',[
	// 	{text:'Wash my car', done:false},
	// 	{text: 'Reschedule dental appointment', done:false},
	// 	{text: 'Buy Christmas gifts', done:false}
	// ])
	.controller('todoController', ['$scope', 'todos', function($scope, todos){
		$scope.todos = todos;

		$scope.getTotalTodos = function () {
			return $scope.todos.length;
		};

		$scope.addTodo = function () {
			$scope.todos.push({text:$scope.formTodoText, done:false});
			$scope.formTodoText = '';
		};

		$scope.clearCompleted = function () {
			$scope.todos = $scope.todos.filter(function(item){
				return !item.done;
			});
		};
	}])

