const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.findMostVisitedDinosaur = function () {
    const arrayOfDinoNumbers = [];
    for (const currentDinosaur of this.dinosaurs) {
        arrayOfDinoNumbers.push(currentDinosaur.guestsAttractedPerDay);
    };
    for (const currentDinosaur of this.dinosaurs) {
        if (Math.max.apply(Math, arrayOfDinoNumbers) == currentDinosaur.guestsAttractedPerDay) {
            return currentDinosaur
        };
    };
}

Park.prototype.findDinosaursInSpecies = function (species) {
    for (currentDinosaur of this.dinosaurs) {
        if (currentDinosaur.species !== species) {
            const indexOfCurrentDinosaur = this.dinosaurs.indexOf(currentDinosaur);
            this.dinosaurs.splice(indexOfCurrentDinosaur, 1);
        };
    };
    return this.dinosaurs;
};
    
Park.prototype.findTotalAverageVisitorsPerDay = function () {
    total = 0;
    for (currentDinosaur of this.dinosaurs) {
        total += (currentDinosaur.guestsAttractedPerDay);
    }
    return total;
}

Park.prototype.findTotalAverageVisitorsPerYear = function () {
    return this.findTotalAverageVisitorsPerDay() * 365;
}

Park.prototype.findTotalAnnualRevenue = function () {
    return this.findTotalAverageVisitorsPerYear() * this.ticketPrice;
}

Park.prototype.removeDinosaursBySpecies = function (species) {
    const singleSpeciesArray = [];
    for (currentDinosaur of this.dinosaurs) {
        if (currentDinosaur.species !== species) {
            singleSpeciesArray.push(currentDinosaur);
        };
    };
    return singleSpeciesArray;
}

module.exports = Park;