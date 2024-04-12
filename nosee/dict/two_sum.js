function two_sum(nums, target) {
  let memo = {};
  for (v of nums) {
    memo[v] = true;
  }
  for (v of nums) {
    let needed_number = target - v;
    if (needed_number in memo) {
      if (needed_number == v) {
        continue;
      }
      return true;
    }
  }
  return false;
}

console.log(two_sum([4, 1, 9, 7, 5, 3, 16], 32));

// 두숫자 더해 target이 되는지 확인하는 함수 같은 원소 중복은 허용하지 않음
