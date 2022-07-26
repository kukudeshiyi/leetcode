// 暴力解法 肯定是两层遍历
// function twoSum(nums: number[], target: number): number[] {
//     const result = [];
//     for(let i = 0;i<nums.length-1;i++){
//         for(let j = i+1;j<nums.length;j++){
//             if(nums[i] + nums[j] === target){
//                 result.push(i,j);
//             }
//         }
//     }
//     return result;
// };

// 寻找时间复杂度更低的算法
function twoSum(nums: number[], target: number): number[] {
  const map: { [key: string]: number } = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const temp = target - value;
    const index = map[temp];
    if (index !== undefined) {
      result.push(index, i);
      break;
    } else {
      map[value] = i;
    }
  }
  return result;
}

console.log(twoSum([2, 7, 10], 17));
