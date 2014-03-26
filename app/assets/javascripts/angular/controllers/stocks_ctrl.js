app.controller('StocksCtrl', ['$scope', 'Stock', '$filter', function($scope, Stock, $filter) {
   $scope.stocks = Stock.all();   //bind all stocks to view

  //Create method
  $scope.createStock = function() {
    var attr = {};
    attr.symbol = $filter('uppercase')($scope.newSymbol);
    var newStock = Stock.create(attr);
    $scope.stocks.push(newStock);
    $scope.newSymbol = "";
  };
   //Delete method
  $scope.deleteStock = function(id, idx) {
    $scope.stocks.splice(idx, 1);
    return Stock.delete(id);
  };
}]);