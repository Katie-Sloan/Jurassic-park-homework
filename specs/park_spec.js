const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  
  beforeEach(function () {
    park = new Park('Pollok', 5);
    tRex = new Dinosaur('t-rex', 'carnivore', 50);
    diplodocus1 = new Dinosaur('diplodocus', 'herbivore', 40)
    diplodocus2 = new Dinosaur('diplodocus', 'herbivore', 30)
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

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(tRex);
    const expected = [tRex];
    assert.deepStrictEqual(park.dinosaurs, expected);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(tRex);
    park.addDinosaur(diplodocus1);
    park.removeDinosaur(diplodocus1);
    const expected = [tRex];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(tRex);
    park.addDinosaur(diplodocus1);
    const expected = tRex;
    assert.deepStrictEqual(park.findMostVisitedDinosaur(), expected);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(tRex);
    park.addDinosaur(diplodocus1);
    park.addDinosaur(diplodocus2);
    const expected = [diplodocus1, diplodocus2];
    assert.deepStrictEqual(park.findDinosaursInSpecies('diplodocus'), expected);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(tRex);
    park.addDinosaur(diplodocus1);
    park.addDinosaur(diplodocus2);
    assert.strictEqual(park.findTotalAverageVisitorsPerDay(), 120)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(tRex);
    park.addDinosaur(diplodocus1);
    park.addDinosaur(diplodocus2);
    const expected = 43800;
    assert.strictEqual(park.findTotalAverageVisitorsPerYear(), expected);
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(tRex);
    park.addDinosaur(diplodocus1);
    park.addDinosaur(diplodocus2);
    const expected = 219000;
    assert.strictEqual(park.findTotalAnnualRevenue(), expected);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosaur(tRex);
    park.addDinosaur(diplodocus1);
    park.addDinosaur(diplodocus2);
    const expected = [tRex];
    assert.deepStrictEqual(park.removeDinosaursBySpecies('diplodocus'), expected);
  });

  it('should be able to provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function() {
    const citipati = new Dinosaur('citipati', 'omnivore', 15);
    park.addDinosaur(tRex);
    park.addDinosaur(diplodocus1);
    park.addDinosaur(diplodocus2);
    park.addDinosaur(citipati);
    const expected = { carnivore: 1, herbivore: 2, omnivore: 1 };
    assert.deepStrictEqual(park.displayNumbersWithDiet(), expected);
  })

});
