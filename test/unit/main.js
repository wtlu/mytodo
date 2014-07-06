'use strict';

describe('controllers', function(){
  var MainCtrl, scope;

  beforeEach(module('mytodo'));

  beforeEach(inject(function($controller, $rootScope) {
  	scope = $rootScope.$new();

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
  	});
  }));

  it('should should have no items to start', inject(function($controller) {

    expect(scope.todos.length).toBe(0);

    expect(angular.isArray(scope.todos)).toBeTruthy();
  }));

  it('should add items to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add then remove an item from the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

});
