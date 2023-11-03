const assert = require('assert');

//calculate soh
function calculateSoH(presentCapacity, ratedCapacity) {
  return (presentCapacity / ratedCapacity) * 100;
}
//classifybattery
function classifyBattery(soH) {
  if (soH > 80) {
    return "healthy";
  } else if (soH >= 63) {
    return "exchange";
  } else {
    return "failed";
  }
}
//countBatteriesByHealth
function countBatteriesByHealth(presentCapacities) {
  const ratedCapacity = 120; // Rated capacity for all batteries
  const counts = {
    healthy: 0,
    exchange: 0,
    failed: 0,
  };

  for (const presentCapacity of presentCapacities) {
    const soH = calculateSoH(presentCapacity, ratedCapacity);
    const classification = classifyBattery(soH);

    counts[classification]++;
  }

  return counts;
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  const counts = countBatteriesByHealth(presentCapacities);

  // Assertions
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  
  // Additional assertions
  assert(Object.keys(counts).length === 3); // There should be exactly three categories
  assert(counts["healthy"] + counts["exchange"] + counts["failed"] === presentCapacities.length); // Total count should match the number of batteries

  console.log("Done counting :)");
  console.log("Done counting :)");
 
}

testBucketingByHealth();
