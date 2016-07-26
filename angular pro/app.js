var todoApp = angular.module('todoApp', []);
todoApp.controller('ToDoCtrl', function ($scope) {
    $scope.tasks = [];
    var eachtask = {};
    $scope.addTask = function () {
        if(!!$scope.task){
            console.log($scope.task.index);
            $scope.tasks.push({todo: $scope.task, done: false,isChecked:false});
            $scope.task = "";
        }
    }
    $scope.done = function (index) {
        if ($scope.tasks[index].done === true) {
            $scope.tasks[index].done = false;
        } else {
            $scope.tasks[index].done = true;
        }
    }
    $scope.delete = function(index){
        $scope.tasks.splice(index,1);
    }
    $scope.checkIt = function(index){
        $scope.tasks[index].isChecked = true;
    }
    $scope.update = function(index){
        if(!$scope.task){
            eachtask = $scope.tasks[index];
            $scope.task = eachtask.todo;
            $scope.tasks.splice(index,1);
        }
    }
});/**
 * Created by nevadmin on 7/26/2016.
 */
