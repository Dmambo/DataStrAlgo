function threeSum(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          i !== j &&
          i !== k &&
          j !== k &&
          nums[i] + nums[j] + nums[k] === 0
        ) {
          const triplet = [nums[i], nums[j], nums[k]];
          triplet.sort((a, b) => a - b); // Sort the triplet
          const isDuplicate = result.some((arr) => {
            return (
              arr[0] === triplet[0] &&
              arr[1] === triplet[1] &&
              arr[2] === triplet[2]
            );
          });
          if (!isDuplicate) {
            result.push(triplet);
          }
        }
      }
    }
  }

  //   let result = [];
  //   nums.sort((a, b) => a - b); // Sort the input array in ascending order
  //   const length = nums.length;

  //   for (let i = 0; i < length - 2; i++) {
  //       if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // Skip duplicate elements
  //           let left = i + 1;
  //           let right = length - 1;
  //           const target = -nums[i];

  //           while (left < right) {
  //               const sum = nums[left] + nums[right];

  //               if (sum === target) {
  //                   result.push([nums[i], nums[left], nums[right]]);
  //                   while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate elements
  //                   while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicate elements
  //                   left++;
  //                   right--;
  //               } else if (sum < target) {
  //                   left++;
  //               } else {
  //                   right--;
  //               }
  //           }
  //       }
  //   }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

