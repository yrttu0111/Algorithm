function longestConsecutive(nums) {
  let longest = 0;
  let num_dict = {};
  for (let num of nums) {
    num_dict[num] = true;
  }
  for (let num in num_dict) {
    num = parseInt(num);
    if (!(num - 1 in num_dict)) {
      console.log(num);
      let cnt = 1;
      let target = num + 1;
      while (target in num_dict) {
        cnt++;
        target++;
      }
      longest = Math.max(longest, cnt);
    }
  }
  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([6, 7, 100, 5, 4, 4]));
