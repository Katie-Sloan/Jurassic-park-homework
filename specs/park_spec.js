const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  
  beforeEach(function () {
    park = new Park('Pollok', 5);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Pollok');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function() {
    const expected = [];
    assert.deepStrictEqual(park.dinosaurs, expected);
  });

  xit('should be able to add a dinosaur to its collection');

  xit('should be able to remove a dinosaur from its collection');

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
