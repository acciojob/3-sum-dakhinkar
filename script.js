function threeSum(arr, target) {
 arr = arr.sort((a,b) => a-b);
//   console.log(arr);
  let ans = Infinity;
  
  arr.forEach((a, i)=>{
    let target2 = target-a;
    
    let end =arr.length-1;
    let startIndex = i+1;
    while(startIndex < end ){
      let sum = arr[startIndex] + arr[end];
      
      if(Math.abs(target - (sum+ a)) <= Math.abs(target - ans)){
        ans = sum+a;
      }
      if(sum > target2){
        end--;
      }else{
        startIndex++;
      }
      
    }
    
    
  });
  
  return ans;
}

module.exports = threeSum;
