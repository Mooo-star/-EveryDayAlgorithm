/**
 * 给你一个数组 nums ，数组中只包含非负整数。定义 rev(x) 的值为将整数 x 各个数字位反转得到的结果。比方说 rev(123) = 321 ， rev(120) = 21 。我们称满足下面条件的下标对 (i, j) 是 好的 ：
 * 0 <= i < j < nums.length
 * nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
 * 请你返回好下标对的数目。由于结果可能会很大，请将结果对 109(9次幂) + 7 取余 后返回。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/count-nice-pairs-in-an-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 示例 1：
 * 输入：nums = [42,11,1,97]
 * 输出：2
 * 解释：两个坐标对为：
 * - (0,3)：42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121 。
 * - (1,2)：11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12 。
 *
 * 示例 2：
 * 输入：nums = [13,10,35,24,76]
 * 输出：4
 */

/**
 * 提示：

 * 1 <= nums.length <= 105
 * 0 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const MOD = 1000000007;
  let res = 0;
  const h = new Map();
  for (const i of nums) {
    let temp = i,
      j = 0;
    while (temp > 0) {
      // rev() 反转数字
      j = j * 10 + (temp % 10);
      temp = Math.floor(temp / 10);
    }
    res = (res + (h.get(i - j) || 0)) % MOD;
    h.set(i - j, (h.get(i - j) || 0) + 1);
  }
  return res;
};

const res = countNicePairs([42, 11, 1, 97]);

/**
 * 首先题目给出一个下标从 00 开始长度为 nn 的非负整数数组 numsnums，并给出「好下标对」的定义——对于某一个下标对 (i, j)，0 ≤ i < j < n，若满足：

 * nums[i] + rev(nums[j]) = nums[j] + rev(nums[i])                                       (1)

 * 则该下标对为「好下标对」。现在我们设：f(i) = nums[i] - rev(nums[i])，则表达式(1) 可以等价于：

 * f(i)=f(j)                                                                              (2)

 * 那么我们从左到右遍历数组 numsnums，并在遍历的过程用「哈希表」统计每一个位置 i，0 ≤ i < n 的 f(i) 的个数，则对于位置 j， 0 ≤ j < n，以 j 结尾的「好下标对」的个数为此时「哈希表」中 f(j) 的数目。那么我们只需要在遍历时同时统计以每一个位置为结尾的「好下标对」数目即可。
 */
