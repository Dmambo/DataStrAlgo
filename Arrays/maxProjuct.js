function maxProduct(nums) {
    let maxProduct = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      const num = nums[i];
      if (num < 0) {
        // Swap currentMax and currentMin since multiplying by a negative number
        // can change the sign and affect the maximum and minimum products
        [currentMax, currentMin] = [currentMin, currentMax];
      }
  
      currentMax = Math.max(num, currentMax * num);
      currentMin = Math.min(num, currentMin * num);
  
      maxProduct = Math.max(maxProduct, currentMax);
    }
  
    return maxProduct;
  }
  
  console.log(maxProduct([2, 3, -2, 4]));
  