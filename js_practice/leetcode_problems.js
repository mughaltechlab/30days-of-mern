// ------------------------------:: QUESTION 1 START ::-----------------------------------------------------------------------------------
// 1. TWO SUM 
//     Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//     You may assume that each input would have exactly one solution, and you may not use the same element twice.

//     You can return the answer in any order.

//     Example 1:

//     Input: nums = [2,7,11,15], target = 9
//     Output: [0,1]
//     Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//     Example 2:

//     Input: nums = [3,2,4], target = 6
//     Output: [1,2]
//     Example 3:

//     Input: nums = [3,3], target = 6
//     Output: [0,1]

    // Constraints:

    // 2 <= nums.length <= 104
    // -109 <= nums[i] <= 109
    // -109 <= target <= 109
    // Only one valid answer exists.
    

    // todo :: Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

    var twoSum = function(nums, target) {

        // ? nested loop complexity is O(n^2)
        // for(let i = 0; i < nums.length; i++){
        // for (let j = i; j < nums.length; j++){
        //     a = nums[i];
        //     b = nums[j+1];
        //     c =j+1;
        //     if(a + b === target){
        //         return [i,c];
        //     break;
        //     }
        // }
        // }
    
        // const hash = {}; 
        // nums.map((val,ind)=>hash[val] = ind);
        // for(let i = 0; i < nums.length; i++){
        //     let check = target - nums[i];
        //     if(hash[check] && hash[check] !== i) return [i, hash[check]];
        // }
    
        const hash = {};
    
        for(key in nums){
            let val = nums[key];
            let check = target - val;
            if(hash[check]){
                return [hash[check], key]
            }else{
                hash[val] = key
            }
        }
        
    };



// ------------------------------:: QUESTION 1 END ::-----------------------------------------------------------------------------------

// ------------------------------:: QUESTION 2 START ::-----------------------------------------------------------------------------------

// todo 2. ADD TWO NUMBERS:
    // * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
    // * You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    // Example 1:
    // Input: l1 = [2,4,3], l2 = [5,6,4]
    // Output: [7,0,8]
    // Explanation: 342 + 465 = 807.

    // Example 2:
    // Input: l1 = [0], l2 = [0]
    // Output: [0]

    // Example 3:
    // Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    // Output: [8,9,9,9,0,0,0,1]
 
    // Constraints:

    // The number of nodes in each linked list is in the range [1, 100].
    // 0 <= Node.val <= 9
    // It is guaranteed that the list represents a number that does not have leading zeros.

// ------------------------------:: QUESTION 2 END ::-----------------------------------------------------------------------------------

// ------------------------------:: QUESTION 3 START ::-----------------------------------------------------------------------------------

// ------------------------------:: QUESTION 3 END ::-----------------------------------------------------------------------------------

// ------------------------------:: QUESTION 4 START ::-----------------------------------------------------------------------------------

// ------------------------------:: QUESTION 4 END ::-----------------------------------------------------------------------------------

