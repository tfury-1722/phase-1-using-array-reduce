const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//11E356416677

//let totalBatteries = 31;

const totalBatteries = batteryBatches.reduce(function (totalBatteries, curr) {
    return totalBatteries + curr;
}, 0) ;