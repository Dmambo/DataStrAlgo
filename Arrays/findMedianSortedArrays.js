function findMedianSortedArrays(nums1, nums2) {
  // joined the two arrays
  let joined = [...nums1, ...nums2].sort((a, b) => a - b);
  //   find the middle array
  let mid = Math.floor(joined.length / 2);
  // check if it's even and if it is return the sum of the middle plus the one before and divide by 2
  if (joined.length % 2 === 0) {
    return (joined[mid] + joined[mid - 1]) / 2;
    // else return the middle
  } else {
    return joined[mid];
  }
}

console.log(findMedianSortedArrays([1, 3], [2]));
