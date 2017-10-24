const twoSum = (nums, target) => {
    let map = {};
    for(let i=0; i<nums.length; i++){
        let pair = target - nums[i];
        if(map[pair] !== undefined) {
            return [map[pair], i];
        }
        map[nums[i]] = i;
    }
    return [];
};
