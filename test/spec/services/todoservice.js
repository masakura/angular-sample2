'use strict';

describe('Service: todoService', function () {

  // load the service's module
  beforeEach(module('angularSample2App'));

  // instantiate service
  var todoService;
  beforeEach(inject(function (_todoService_) {
    todoService = _todoService_;
  }));

  it('should do something', function () {
    expect(!!todoService).toBe(true);
  });

});
