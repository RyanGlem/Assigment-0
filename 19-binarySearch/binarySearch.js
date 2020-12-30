class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {

    var mid = Math.floor (nums.length / 2);

    if (nums.length <= 1 && nums[0] != target) {

      return false;
    }

    if (target == nums[mid]) {
      return true;
    } else if (nums[mid] > target) {

      return this.binarySearch(nums.slice (0, mid), target);
    } else if (nums [mid] < target) {

      return this.binarySearch (nums.slice (mid), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;