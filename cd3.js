function findMaxAverage(arr, k) {
    const n = arr.length;
    if (k <= 0 || k > n) {
      return "Invalid value of k";
    }
  
    let left = 0;
    let sum = 0;
  
    for (let i = 0; i < k; i++) {
      sum += arr[i];
    }
  
    let maxAverage = sum / k;
  
    for (let right = k; right < n; right++) {
      sum += arr[right] - arr[left];
      maxAverage = Math.max(maxAverage, sum / k);
  
     
      left++;
    }
  
    return maxAverage;
  }
  

  const arr = [1, 12,-5, -6, 50, 3];
  const k = 4;
  const maxAverage = findMaxAverage(arr, k);
  console.log(maxAverage); 