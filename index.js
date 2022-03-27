const drivers = [];

const returnFirstTwoDrivers = function(drivers) {
    const newDrivers = [...drivers];
    return newDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    const newDrivers = [...drivers];
    return newDrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(value) {
        return multiplier * value;
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
}
