//two sum from leetcode
//array of int []
//int target
//return index of the two numbers that added to give target

//each input have exactly one solution
// not use same element twice
let nums = [2,5,5,11]
let target = 10

var twoSum =function(nums,target){
    //condition that array is not empty
    if (nums.length <= 0){
        return [];
    }
    // let num1index =0;
    for (let i = 0; i <nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            // if (nums[i]==nums[j]) {
            //     j=i+1;
            // }
            if(target -nums[i] == nums[j] ){
                // console.log(`indexes are ${num1index} and ${i}`);
                return [i,j];
            }           
        }
        
    }
}
console.log(twoSum(nums,target));