function firstMissingPositive(nums) {
  const positives = nums.filter(num => num > 0);
  positives.sort((a, b) => a - b);

  let missing = 1;

  for (let num of positives) {
    if (num === missing) {
      missing++; 
    }
  }
  return missing;
}

console.log(firstMissingPositive([3,4,-1,1])); 
