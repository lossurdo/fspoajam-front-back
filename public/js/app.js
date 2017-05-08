var app = angular.module('AppModule', []);

app.controller('AppController', ['$scope', '$http', function($scope, $http) {
    
    $scope.reg = {};
    $scope.pesq = null;
    $scope.resultado = null;
    
    $scope.salvar = function() {
        $http({
            method: 'POST',
            url: '/pessoas',
            data: $scope.reg
        }).then(function successCallback(response) {
            alert('Cadastrado com sucesso!');
        }, function errorCallback(response) {
            alert('Ooops! Ocorreu um erro!');
        });
    };
    
    $scope.consultar = function() {
        $http({
            method: 'GET',
            url: '/pessoas/' + $scope.pesq
        }).then(function successCallback(response) {
            $scope.resultado = response.data;
        }, function errorCallback(response) {
            alert('Ooops! Ocorreu um erro!');
        });
    };
    
    $scope.excluir = function() {
        $http({
            method: 'DELETE',
            url: '/pessoas/' + $scope.pesq
        }).then(function successCallback(response) {
            alert('Excluído com sucesso!');
        }, function errorCallback(response) {
            alert('Ooops! Ocorreu um erro!');
        });
    };
    
    $scope.alterar = function() {
        $http({
            method: 'PUT',
            url: '/pessoas/' + $scope.pesq,
            data: $scope.reg
        }).then(function successCallback(response) {
            alert('Alterado com sucesso!');
        }, function errorCallback(response) {
            alert('Ooops! Ocorreu um erro!');
        });
    };
    
}]);