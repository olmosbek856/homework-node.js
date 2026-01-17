function twoSum(nums, target) {
  const arr = nums.map((num, idex) => ({ num, idex }));

  arr.sort((a, b) => a.num - b.num);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left].num + arr[right].num;

    if (sum === target) {
      return [arr[left].idex, arr[right].idex];
    }

    if(sum < target){
      left++;
    }else{
      right--;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
