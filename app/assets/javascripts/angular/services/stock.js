app.factory('Stock', ['$resource', function($resource) {
  function Stock() {
    this.service = $resource('/api/stocks/:stockId', {stockId: '@id'});   // get stocks from rails api
  };
  Stock.prototype.all = function() {
    return this.service.query(); 
  };
  return new Stock;
}]);