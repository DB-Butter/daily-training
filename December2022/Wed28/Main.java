package December2022.Wed28;

import java.util.Arrays;

/* 1. Two Sum - challenge Easy */

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

/* MyAnswer: This is my First Java algorithm! Woohoo! My answer lies in my knowledge of JS, problem solving, and w3 Java docs */

public class Main {
    public static void main(String[] args) {
    int[] nums = new int[]{2,7,11,15};
    int target = 9;
    // Output [0,1]
    // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    System.out.println(Arrays.toString(TwoSum(nums, target)));
    }

    public static int[] TwoSum (int[] nums, int target) {
        int[] ans = new int[2];
        for (int i=0;i<nums.length-1;i++) {
            for (int j=i+1;j<nums.length;j++) {
                if (nums[i] + nums[j] == target) {
                    ans[0] = i;
                    ans[1] = j;
                }
            }
        }
        return ans;
    }
}
