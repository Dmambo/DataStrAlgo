function containsDuplicate(nums){

    // first solution

        for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i !== j) {
                if(nums[i] === nums[j]) {
                    return true;
                }
            }
        }
    }

    return false;


// second solution
    // let map = new Map();
// for(let i = 0; i < nums.length; i++){
//     if(map.has(nums[i])){
//         return true;
//     }else{
//         map.set(nums[i], 1);
//     }
// }
// return false;

}

console.log(containsDuplicate([1,2,3,1]));

// Path: containsNearbyDuplicate.js



