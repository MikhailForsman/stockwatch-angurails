app.controller('StocksCtrl', ['$scope', 'Stock', function($scope, Stock) {
   $scope.stocks = Stock.all();   //bind all stocks to view
}]);