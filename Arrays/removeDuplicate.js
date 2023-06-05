function removeDuplicate(nums) {
  let subArr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      subArr.push(nums[i]);
      //   count++;
    }
  }
  return subArr;
}

console.log(removeDuplicate([1, 1, 2]));
